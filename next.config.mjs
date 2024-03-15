/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["upload.wikimedia.org", ""],
        remotePatterns: [{
            protocol: 'https',
            hostname: "1000marcas.net",
            port: '',
            pathname: '/**',
        }, ],
    },

};

export default nextConfig;