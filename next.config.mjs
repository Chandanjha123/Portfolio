/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    // Proper image optimization configuration
    images: {
      formats: ['image/avif', 'image/webp'],
      minimumCacheTTL: 3600,
      domains: [
        'github-readme-stats.vercel.app',
        'skillicons.dev'
      ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.vercel.app',
        },
        {
          protocol: 'https',
          hostname: '**.dev',
        },
      ],
    },
  
    // Valid experimental features (updated for your Next.js version)
    experimental: {
      optimizeCss: false,
      nextScriptWorkers: true,
      // Remove modularizeImports if not supported in your version
    },
  
    // Webpack configuration for better chunking
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.optimization.splitChunks = {
          chunks: 'all',
          maxSize: 244 * 1024, // 244KB per chunk
          cacheGroups: {
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'react',
              chunks: 'all',
              priority: 20,
            },
            framer: {
              test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
              name: 'framer',
              chunks: 'all',
              priority: 15,
            },
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
          },
        };
      }
      return config;
    },
  
    // Enable output file tracing for better analysis
    outputFileTracing: true,
    
    // Enable compression
    compress: true,
  };
  
  export default nextConfig;