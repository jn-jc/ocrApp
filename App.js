import React from "react";

import Navigation from "./navigations/Navigation";
import { TokenProvider } from "./src/context/TokenContext";

export default function App() {
  return (
    <TokenProvider>
      <Navigation />
    </TokenProvider>
  );
}

