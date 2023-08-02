/** @type {import('next').NextConfig} */

const nextConfig = {

    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true};

        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })
        return config
    },

    reactStrictMode: false,
    compiler: {styledComponents: true},

}

module.exports = nextConfig

