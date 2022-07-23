import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client"; // import 해주기
import client from "../api/apollo";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
