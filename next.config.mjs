/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/projects/:id',
        destination: '/projects/project?id=:id'
      }
    ];
  },
  images: {
    domains: [
      'media.licdn.com', 
      'pbs.twimg.com', 
      'encrypted-tbn0.gstatic.com', 
      'static.vecteezy.com'
    ],
  },
};

export default nextConfig;
