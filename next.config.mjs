/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/projects/:id',
          destination: '/projects/project?id=:id'
        }
      ];
    }
  };
  
  export default nextConfig;