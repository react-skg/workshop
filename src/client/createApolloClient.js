import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

/**
 * Creates a new ApolloClient
 */
const createApolloClient = () => {
  return new ApolloClient({
    link: createHttpLink({ uri: 'https://8lnxkljvq.lp.gql.zone/graphql' }),
    cache: new InMemoryCache(),
    connectToDevTools: true
  });
};

export default createApolloClient;
