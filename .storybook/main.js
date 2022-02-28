const aliases = require('../config/aliases');

module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-postcss',
        {
            name: `@storybook/preset-scss`,
            options: {
                rule: {
                    test: /\.module\.s[ca]ss$/,
                },
                cssLoaderOptions: {
                    modules: {
                        localIdentName: '[name]__[local]--[hash:base64:5]',
                    },
                },
            },
        },
    ],
    framework: '@storybook/react',
    webpackFinal: config => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    ...aliases,
                },
            },
        };
    },
};
