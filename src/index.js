const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');

// const mocks = {
//   Query: () => ({
//     tracksForHome: () => [...new Array(9)],
//   }),
//   Track: () => ({
//     id: () => 'track_01',
//     title: () => 'Astro Kitty, Space Explorer',
//     author: () => {
//       return {
//         name: 'Grumpy Cat',
//         photo: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
//       };
//     },
//     thumbnail: () => 'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
//     length: () => 1210,
//     modulesCount: () => 6,
//   }),
// };

// const server = new ApolloServer({
//   typeDefs,
//   // mocks
//   resolvers,
//   dataSources: () =>{
//     return {
//       trackAPI: new TrackAPI()
//     };
//   }
// });

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




startApolloServer(server); 

// await server.listen({ port:process.env.PORT || 4000}).then(() => {
//   console.log(`
//     🚀  Server is running!
//     🔉  Listening on port 4000
//     📭  Query at https://studio.apollographql.com/dev
// `);
// });