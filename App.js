import React from "react";

import Navigation from "./navigations/Navigation";
import { TokenProvider } from "./src/context/TokenContext";

// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


export default function App() {
  return (
    <TokenProvider>
      <Navigation />
    </TokenProvider>
  );
}

