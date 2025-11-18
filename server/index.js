const { buildSchema } = require('graphql');
const fs = require('fs');
const schemaSDL = fs.readFileSync(__dirname + '/schema.graphql','utf8');
const resolvers = require('./resolvers');
// TODO: attach schemaSDL and resolvers to your GraphQL runtime (e.g., Apollo Server or express-graphql)
console.log('GraphQL schema loaded, resolvers ready');
process.exit(0);