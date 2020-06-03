
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    includePaths: [
                        './node_modules'
                    ]
                },
                prependData: `@import "@/assets/styles/styles.scss";`,
            },
        },
    },
};
