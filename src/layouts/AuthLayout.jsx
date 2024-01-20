import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function AuthLayout({ children }) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}

export default AuthLayout;
