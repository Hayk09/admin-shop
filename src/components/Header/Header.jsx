import React from "react";
import { Divider, Flex, Box, Text, Heading } from "@chakra-ui/react";
import { navButtons } from "../../constants/constant";
import { Link, useLocation } from "react-router-dom";


function Header() {

    const {pathname} = useLocation()
    console.log(pathname)
    return (
        <Flex maxW={"350px"} w={"full"} h={"100vh"} bg={"colors.brand.100"} color={"#fff"} flexDir={"column"}>
            <Flex p={5}>L O G O</Flex>
            <Divider />
            <Flex w={"full"} p={8} flexDir={"column"} gap={5}>
                {navButtons.map(({id, title, icon, path}) => (
                    <Flex key={id} p={3} borderRadius={pathname === path && "6px"} color={pathname===path && "colors.brand.200"} bg={pathname === path && '#242A38'}>
                    <Link to={path}>
                        <Flex alignItems={"center"} gap={5}>
                            <Box>{icon}</Box>
                            <Text size={"sm"} letterSpacing={"2px"}>{title}</Text>
                        </Flex>
                    </Link>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}

export default Header