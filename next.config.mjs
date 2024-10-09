/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  remotePatterns: [
    {
      hostname: 'via.placeholder.com',
      pathname: '/**',
    },
  ],
},
};

export default nextConfig;
