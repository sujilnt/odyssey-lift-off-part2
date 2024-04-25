import gql from "graphql-tag";

export const typeDefs = gql`
    type Query {
        spaceCats: [SpaceCat!]!
        tracks:[Track!]!
    }

    type SpaceCat {
        id: ID!
        name: String!
        age: Int!
        missions: [Mission!]!
    }

    
    type Mission {
        id: ID!
        name: String!
        description: String!
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String!
        length: Int!
        modulesCount: Int!
    }

    "Author of a complete Track or a Module"
    type Author {
        id: ID!
        name: String!
        photo: String
    }
`
