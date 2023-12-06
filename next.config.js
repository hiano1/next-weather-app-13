/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // deprecate?
        domains: ["www.weatherbit.io"],
    },
    experimental: {
        serverComponentsExternalPackages: ["@tremor/react"],
    },
};

module.exports = nextConfig;
