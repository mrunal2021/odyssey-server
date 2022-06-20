const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!

    "Query to get single Track using track's ID"
    track(id:ID!): Track!

    "Query to get single module using module's ID"
    module(id: ID!): Module!
  }

  type Mutation{
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    "similar to HTTP status code, represents the status of the mutation"
    code: Int!

    "indicates whether the mutation was successful"
    success: Boolean!

    "message for the UI"
    message: String!

    "newly updated track after a successful mutation"
    track: Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track's complete description"
    description: String
    "The number of views for a track"
    numberOfViews: Int
    "The track's module"
    modules : [Module!]!
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }

  "Module is a single unit of teaching. multiple modules compose a track. A single module can be a part of multiple tracks"
  type Module{
    "module's id"
    id: ID!

    "module's title"
    title: String!

    "module's length in minutes"
    length: Int

    "The module's description"
    content: String

    "The module's video url"
    videoUrl: String
  }
`;

module.exports = typeDefs;
