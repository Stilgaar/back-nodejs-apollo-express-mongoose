import { gql } from "apollo-server-core";

// TYPEDEFS CORRESPONDENT A HEU ... CE QU'ON DIT A GRAPHQL ? 

export const typeDefs = gql`

type Query {
    hello: String!
    cats: [Cat!]!
    messages: [NewMessage!]!
}

type Cat {
    id : ID!
    name: String!
}

type Mutation {
    createCat(name: String): Cat
}

type NewMessage {
    id : ID!
    noms: String!
    email: String!
    title: String!
    message: String!
}

type Mutation {
    NewMessage(noms: String, email: String, title: String, message: String) : NewMessage
}

`
