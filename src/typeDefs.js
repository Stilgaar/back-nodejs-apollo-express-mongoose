import { gql } from "apollo-server-core";

// TYPEDEFS CORRESPONDENT A HEU ... CE QU'ON DIT A GRAPHQL ? 

export const typeDefs = gql`

type Query {
    hello: String!
    cats: [Cat!]!
}

type Cat {
    id : ID!
    name: String!
}

type Mutation {
    createCat(name: String): Cat
}

`
