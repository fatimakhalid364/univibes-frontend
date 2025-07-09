/** @type {import('next').NextConfig} */
const mode = process.env.NODE_ENV;
export const localUrl = "http://localhost:3000"
export const prodUrl = "https://univibe-landing-site.vercel.app"
const BASE_URL = mode === "development" ? localUrl : prodUrl;

const nextConfig = {
    env: {
        BASE_URL
    }
};

export default nextConfig;
