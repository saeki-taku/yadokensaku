// react / next
import React, { useState, useEffect } from "react";
// styles
import styles from "@/styles/mypage.module.scss";
// Google Map
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const WentMap = () => {
	const [map, setMap] = useState(null);
	const onLoad = (map: any) => {
		setMap(map);
	};

	const locations = [
		{
			name: "東京のホテル",
			// url: "url",
			location: {
				lat: 35.69731,
				lng: 139.7747,
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

	useEffect(() => {
		// Do something with the map, e.g., add markers
		if (map) {
			// Your map-related logic here
			console.log("map::", map);
		}
	}, [map]);

	return (
		<div className={styles.wentMap}>
			<LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
				<GoogleMap
					id="google-map"
					mapContainerStyle={{
						height: "600px",
						width: "100%",
						// marginTop: "-60px",
					}}
					zoom={5}
					center={{ lat: 38, lng: 138 }}
					onLoad={onLoad}
				>
					{/* Add your components, like markers, here */}
					{locations.map((item) => {
						return <Marker key={item.name} position={item.location} />;
					})}
				</GoogleMap>
			</LoadScript>
		</div>
	);
};

export default WentMap;
