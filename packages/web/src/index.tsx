import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./services/apollo";

import App from "./App";

const appWithApollo = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(appWithApollo, document.querySelector("#root"));
