const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');

async function startApolloServer(typeDefs, resolvers){

  const server = new ApolloServer({
    typeDefs,
    // mocks
    resolvers,
    dataSources: () =>{
      return {
        trackAPI: new TrackAPI()
      };
    }
  });

  const { url, port } = await server.listen({port:process.env.PORT || 4000});
  console.log ('Server ready at '+url);
  
}

startApolloServer(typeDefs, resolvers); 