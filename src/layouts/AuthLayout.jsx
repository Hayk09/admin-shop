import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../components/Header/Header";
function AuthLayout({children}){
    return(
    <Flex>
    <Header />
    {children} 
    </Flex>           
    )
}

export default AuthLayout