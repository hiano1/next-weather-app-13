/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        // deprecate?
        domains: ["www.weatherbit.io"],
    },
    experimental: {
        serverComponentsExternalPackages: ["@tremor/react"],
    },
};

module.exports = nextConfig;
