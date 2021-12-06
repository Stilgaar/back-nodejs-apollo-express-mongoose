import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, gql } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import {resolvers} from './resolvers'
import {typeDefs} from './typeDefs'
require('./db')

const start = async () => {

  const app = express();
  const httpServer = http.createServer(app);  
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise(resolve => httpServer.listen({ port: 5000 }, resolve));
  console.log(`🚀 BOOM *** http://localhost:5000${server.graphqlPath}`);

}

start()