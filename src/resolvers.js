const resolvers = {

    Query:{

        //returns an array of Tracks that will be used to populate the homepage grid of our web client
        tracksForHome: (_, __, {dataSources}) =>{
            return dataSources.trackAPI.getTracksForHome();
        },

        //returns a single track for the track page
        track: (_, {id}, {dataSources})=>{

            const track = dataSources.trackAPI.getTrack(id);

            // const modules = dataSources.trackAPI.getTrackModules(id);

            // return {...track, modules};
            return track;
        },

        //returns a single module for the module page
        module: (_, {id}, {dataSources})=>{
            return dataSources.trackAPI.getModule(id);
        },
    },
    Mutation:{
        //increment a track's numberOfViews property
        incrementTrackViews: async (_, {id}, {dataSources}) => {

            try {
                const track = await dataSources.trackAPI.incrementTrackViews(id);

                return {
                    code:200,
                    success:true,
                    message: 'Successfully incremented number of views for track'+id,
                    track
                };
            } catch (error){
                return {
                    code: error.extensions.response.status,
                    success:false,
                    message: error.extensions.response.body,
                    track: null
                };
            }
            }
        },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
          return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({id}, _, {dataSources}) =>{
            return dataSources.trackAPI.getTrackModules(id);
        },
        durationInSeconds: ({length})=> length,

      },
      Module:{
        durationInSeconds: ({length})=> length,
      }
};
module.exports = resolvers;
                                    
