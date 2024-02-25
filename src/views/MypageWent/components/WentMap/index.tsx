// react / next
import React, { useState, useEffect } from "react";
import Link from "next/link";
// styles
import styles from "@/styles/mypage.module.scss";
// uitls
import { getWentHotelInfo } from "../../../../utils/myhotel";
// firebase
import { doc, getDocs, setDoc, updateDoc, arrayUnion, arrayRemove, collection, FieldValue, deleteField } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";
import "firebase/firestore";
// zustand
import { useUserStore, useWentStore } from "@/hooks/useUserStore";
// Google Map
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";

const WentMap = () => {
	// Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);
	const [wentHotelObj, setWentHotelObj] = useState<Object>([]);
	// React Google Maps
	const [map, setMap] = useState(null);
	const [spScreen, setSpScreen] = useState(false);
	// const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([]);
	const [markers, setMarkers] = useState<ANY_OBJECT>([]);
	const [center, setCenter] = useState<any>(null);
	const [selectedLocation, setSelectedLocation] = useState<any>(null);

	useEffect(() => {
		getWentHotelInfo(uid)
			.then((result) => {
				result && setWentHotelObj(result);
			})
			.catch((error) => {
				console.log("Error:", error);
			});
	}, [uid, setWentHotelObj]);

	const wentHotelArr = Object.values(wentHotelObj).map((item) => ({
		hotelName: item.hotelName,
		hotelNo: item.hotelNo,
		location: {
			lat: item.lat,
			lng: item.lng,
		},
	}));

	// console.log("wentHotelArr", wentHotelArr);

	const markerIcon = "/img/icon/pin_map.png";

	useEffect(() => {
		if (map && map !== null) {
			// console.log("map", map);
			setMarkers(wentHotelArr);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [map, wentHotelObj]);

	const onLoad = (map: any) => {
		if (map && map !== null) {
			setMap(map);
		}
	};

	const onMarkerClick = (location: any) => {
		setCenter(location.location);
		console.log("center", center);
		setSelectedLocation(location);
	};

	// 画面サイズが変更されたときに呼ばれる関数
	const handleResize = () => {
		const isSpScreen = window.innerWidth < 600 ? true : false;
		setSpScreen(isSpScreen);
	};

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className={styles.wentMap}>
			<LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
				<GoogleMap
					id="google-map"
					center={center !== null ? center : { lat: spScreen ? 39 : 37, lng: 138 }}
					mapContainerStyle={{
						height: spScreen ? "350px" : "620px",
						width: "100%",
						// marginTop: "-60px",
					}}
					zoom={spScreen ? 4 : 5}
					onLoad={onLoad}
				>
					{markers &&
						markers.map((marker: ANY_OBJECT, index: number) => {
							// console.log("wentHotel__", wentHotel);
							// console.log("locations[index]__", locations[index]);

							return (
								<MarkerF
									key={index}
									icon={{
										url: markerIcon,
										scaledSize: new window.google.maps.Size(32, 32), // マーカーのサイズ
									}}
									position={marker.location}
									onClick={() => onMarkerClick(marker)}
								/>
							);
						})}

					{selectedLocation && selectedLocation !== null && (
						<InfoWindowF
							position={selectedLocation.location}
							onCloseClick={() => setSelectedLocation(null)}
							options={{
								maxWidth: 220,
							}}
						>
							<div className={styles.window_wrap}>
								<p className={styles.hotelName}>{selectedLocation.hotelName}</p>
								<Link className={styles.detail_link} href={`/hotel/${selectedLocation.hotelNo}`}>
									<span>ホテル詳細</span>
								</Link>
							</div>
						</InfoWindowF>
					)}
				</GoogleMap>
			</LoadScript>
		</div>
	);
};

export default WentMap;
