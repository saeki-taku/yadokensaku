// react / next
import React, { useState, useEffect } from "react";
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
import { GoogleMap, LoadScript, Marker, MarkerF, InfoWindow } from "@react-google-maps/api";

const WentMap = () => {
	// Zustandの状態を取得
	const uid = useUserStore((state) => state.user?.uid);
	const [wentHotelObj, setWentHotelObj] = useState<Object>([]);
	// React Google Maps
	const [map, setMap] = useState(null);
	const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([]);
	const [selectedLocation, setSelectedLocation] = useState<any>(null);

	useEffect(() => {
		getWentHotelInfo(uid)
			.then((result) => {
				// console.log("setWentHotelObj", result);
				result && setWentHotelObj(result);
			})
			.catch((error) => {
				console.log("Error:", error);
			});
	}, [uid, setWentHotelObj]);

	// console.log("wentHotelObj", Object.values(wentHotelObj));

	const locations = [
		{
			name: "東京のホテル",
			// url: "url",
			location: {
				lat: 35.69731,
				lng: 139.775,
			},
		},
		{
			name: "沖縄のホテル",
			location: {
				lat: 24,
				lng: 132,
			},
		},
	];

	const markerIcon = "/img/icon/pin_map.png";

	useEffect(() => {
		// Do something with the map, e.g., add markers
		if (map && map !== null) {
			// Your map-related logic here
			setMarkers(locations.map((location) => location.location));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [map]);

	const onLoad = (map: any) => {
		if (map && map !== null) {
			// console.log("onload__map", map);
			setMap(map);
		}
	};

	const onMarkerClick = (location: any) => {
		console.log("location", location);
		setSelectedLocation(location);
	};

	return (
		<div className={styles.wentMap}>
			<LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
				{/* <GoogleMap
					id="google-map"
					mapContainerStyle={{
						height: "600px",
						width: "100%",
					}}
					center={{ lat: 38, lng: 138 }}
					zoom={5}
				>
					{locations &&
						locations.map((marker, index) => {
							console.log("marker＝＝＝＝", marker);
							return (
								<Marker
									key={index}
									visible={true}
									position={marker.location}
									onLoad={onLoad}
									onClick={() => onMarkerClick(locations[index])}
									// icon={{
									// 	url: markerIcon,
									// 	scaledSize: new window.google.maps.Size(32, 32), // マーカーのサイズ
									// }}
								/>
							);
						})}

					{selectedLocation && (
						<InfoWindow
							position={selectedLocation.location} // 位置情報の設定
							onCloseClick={() => setSelectedLocation(null)}
						>
							<div>
								<h3>{selectedLocation.name}</h3>
								<p>追加の情報をここに表示</p>
							</div>
						</InfoWindow>
					)}
				</GoogleMap> */}

				<GoogleMap
					id="google-map"
					center={{ lat: 38, lng: 138 }}
					mapContainerStyle={{
						height: "600px",
						width: "100%",
						// marginTop: "-60px",
					}}
					zoom={5}
					onLoad={onLoad}
				>
					{markers &&
						markers.map((marker, index) => {
							console.log("marker__", marker);
							// console.log("locations[index]__", locations[index]);
							return (
								<MarkerF
									key={index}
									visible={true}
									icon={{
										url: markerIcon,
										scaledSize: new window.google.maps.Size(32, 32), // マーカーのサイズ
									}}
									position={marker}
									onClick={() => onMarkerClick(locations[index])}
								/>
							);
						})}

					{selectedLocation && (
						<InfoWindow
							position={selectedLocation.location} // 位置情報の設定
							onCloseClick={() => setSelectedLocation(null)}
						>
							<div className="testMap">
								<h3>{selectedLocation.name}</h3>
								<p>追加の情報をここに表示</p>
								<p>追加の情報をここに表示</p>
								<p>追加の情報をここに表示</p>
							</div>
						</InfoWindow>
					)}
				</GoogleMap>
			</LoadScript>
		</div>
	);
};

export default WentMap;
