/** @type {import('next').NextConfig} */

const mode = process.env.NODE_ENV;
const BASE_URL = mode === "development" ? process.env.LOCAL_URL : process.env.PROD_URL;

const nextConfig = {
    env: {
        BASE_URL
    }
};

export default nextConfig;
