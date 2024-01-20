import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import RoutesProviders from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider  theme={theme}>
        <RoutesProviders />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
