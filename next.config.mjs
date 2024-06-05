/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'my-blob-store.public.blob.vercel-storage.com',
              port: '',
            },
          ],
        domains: ['images.unsplash.com', 'plus.unsplash.com', 'www.trademark-hotel.com', 'dynamic-media-cdn.tripadvisor.com'],
    }
};

export default nextConfig;
