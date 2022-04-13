const path = require("path");
const { styles, theme } = require("./styleguide.styles");

module.exports = {
    title: 'GraphQL Relay Demo',
    serverPort: parseInt(process.env.SERVER_PORT),
    pagePerSection: true,
    styleguideDir: 'docs',
    propsParser: require('react-docgen-typescript').withCustomConfig(
        './tsconfig.json'
    ).parse,
    webpackConfig: require('./webpack.config'),
    // styles & layout customization
    styleguideComponents: {
        SectionsRenderer: path.join(
            __dirname,
            "styleguide/components/SectionsRenderer"
        ),
        Wrapper: path.join(__dirname, 'styleguide/components/Wrapper'),
        TableOfContentsRenderer: path.join(
            __dirname,
            "styleguide/components/TableOfContentsRenderer"
        ),
    },
    styles,
    theme,
    sections: [
        {
            name: 'Introduction',
            content: 'README.md'
        },
        {
            name: 'Graphql Demo',
            sectionDepth: 1,
            // content: 'docs/ui.md',
            // components: 'src/examples/**/[A-Za-z]*.tsx',
            sections: [{
                name: 'Fragment example',
                components: ['src/examples/FragmentExample/User.tsx']
            }, {
                name: 'Mutation example',
                components: ['src/examples/MutationExample/Users.tsx']
            }, {
                name: 'Query examples',
                components: ['src/examples/QueryExample/[A-Za-z].tsx']
            }]
        }
    ]
}