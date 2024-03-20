/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["img.travel.rakuten.co.jp"],
	},
	// experimental: {
	//     optimizeFonts: true,
	// },
	env: {
		RAKUTEN_API_KEY: process.env.RAKUTEN_API_KEY,
		NEXT_FIREBASE_API_KEY: process.env.NEXT_FIREBASE_API_KEY,
		NEXT_FIREBASE_AUTH_DOMAIN: process.env.NEXT_FIREBASE_AUTH_DOMAIN,
		NEXT_FIREBASE_DATABASE_URL: process.env.NEXT_FIREBASE_DATABASE_URL,
		NEXT_FIREBASE_PROJECT_ID: process.env.NEXT_FIREBASE_PROJECT_ID,
		NEXT_FIREBASE_STORAGE_BUCKET: process.env.NEXT_FIREBASE_STORAGE_BUCKET,
		NEXT_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID,
		NEXT_FIREBASE_APP_ID: process.env.NEXT_FIREBASE_APP_ID,
		NEXT_FIREBASE_MEASUREMENT_ID: process.env.NEXT_FIREBASE_MEASUREMENT_ID,
		NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	},
};

module.exports = nextConfig;
