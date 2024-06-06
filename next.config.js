// const rehypePrism = require('@mapbox/rehype-prism');
const path = require("path")

const mdxOptions = {
    remarkPlugins: [],
    rehypePlugins: []
}

const siteConfig = {
    title: "Sreehari Sreedev",
    author: {
        name: "Sreehari Sreedev"
    },
    description: "Sreehari's blog",
    siteUrl: "https://ssree.dev/",
    social: {
        github: "sreehax"
    }
}

module.exports = {
    output: 'export',
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    publicRuntimeConfig: siteConfig,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.mdx$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: require.resolve('@mdx-js/loader'),
                    options: mdxOptions
                },
                {
                    loader: require.resolve('./loader')
                }
            ]
        })
        return config;
    }
}
