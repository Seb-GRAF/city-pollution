/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['three'])

module.exports = {
  withTM,
  reactStrictMode: false,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    })

    return config
  },
  images: {
    domains: ['images.unsplash.com', 'openweathermap.org'],
  },
  env: {
    NEXT_PUBLIC_UNSPLASH_API: process.env.NEXT_PUBLIC_UNSPLASH_API,
    NEXT_PUBLIC_AQICN_API_KEY: process.env.NEXT_PUBLIC_AQICN_API_KEY,
    NEXT_PUBLIC_GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    NEXT_PUBLIC_OPENWEATHER_API_KEY:
      process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY,
    NEXT_PUBLIC_MAPBOX_API_KEY: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}
