import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

import {typeDefs} from "./schema";
import {mocks} from "./mocks";

export async function startApolloServer() {
    const server = new ApolloServer({
        schema: addMocksToSchema({
            schema: makeExecutableSchema({
                typeDefs
            }),
            mocks
        }),
    });
    const {url} = await startStandaloneServer(server, {
        listen: {
            port: 8081
        }
    });
    console.log(`
        🚀  Server is running!
        📭  Query at ${url}
    `);
}

startApolloServer();
