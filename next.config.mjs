/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["upload.wikimedia.org", "static.wikia.nocookie.net"],
        remotePatterns: [{
                protocol: 'https',
                hostname: "1000marcas.net",
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: "static.wikia.nocookie.net",
                port: '',
                pathname: '/images/**',
            },


        ],
    },

};

export default nextConfig;