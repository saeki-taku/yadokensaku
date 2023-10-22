/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["img.travel.rakuten.co.jp"],
    },
    // experimental: {
    //     optimizeFonts: true,
    // },
};

module.exports = nextConfig;
