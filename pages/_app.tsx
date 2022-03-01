import "../styles/globals.css";
import { ThirdwebProvider } from "@3rdweb/react";

import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Head from "next/head";

// Polygon Mumbai chain ID is 80001, see https://chainlist.org
const supportedChainIds = [80001];

const connectors = {
  injected: {},
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
      </Head>
      <ThirdwebProvider
        connectors={connectors}
        supportedChainIds={supportedChainIds}
      >
        <Layout title={pageProps.title}>
          <Component {...pageProps} />
        </Layout>
      </ThirdwebProvider>
    </>
  );
}
