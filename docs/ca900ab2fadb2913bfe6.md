
if (module.hot) {
	module.hot.accept([])
}

var requireMap = {
    'react': require('react'),
    './User.tsx': require('./User.tsx')
};
var requireInRuntimeBase = require("/Users/apple/poc/graphql-relay-poc/node_modules/react-styleguidist/lib/loaders/utils/client/requireInRuntime").default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = require("/Users/apple/poc/graphql-relay-poc/node_modules/react-styleguidist/lib/loaders/utils/client/evalInContext").default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst User$0 = require('./User.tsx');\nconst User = User$0.default || (User$0['User'] || User$0);", requireInRuntime);

module.exports = [{
        'type': 'code',
        'content': ';<User />',
        'settings': {},
        'evalInContext': evalInContext
    }]
	