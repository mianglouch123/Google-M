/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
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

            {
                protocol: 'https',
                hostname: "upload.wikimedia.org",
                port: '',
                pathname: '/**',
            },



        ],
    },

};

export default nextConfig;