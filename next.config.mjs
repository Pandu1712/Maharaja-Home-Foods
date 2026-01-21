/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com', 'keencuisinier.com', 'www.orderyourchoice.com'],
  
  },
}

export default nextConfig
