// top navabar
import { Button, HStack, Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      p={"4"}
      shadow={"lg"}
      bgGradient="linear(to-r, blackAlpha.900, gray.800)"
      spacing={8}
      justifyContent="center"
      position="sticky"
      top={0}
      zIndex="sticky" // Using Chakra's zIndex scale
      width="100%"
      backdropFilter="blur(10px)" // Adds a nice frosted glass effect
      borderBottom="1px solid"
      borderBottomColor="whiteAlpha.200"
    >
      <Box
        as="nav"
        display="flex"
        alignItems="center"
        gap={6}
      >
        <Button
          variant={"ghost"}
          color={"white"}
          _hover={{
            transform: "scale(1.05)",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            bg: "whiteAlpha.200"
          }}
          transition="all 0.3s ease"
        >
          <Link to="/">Home</Link>
        </Button>
        <Button
          variant={"ghost"}
          color={"white"}
          _hover={{
            transform: "scale(1.05)",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            bg: "whiteAlpha.200"
          }}
          transition="all 0.3s ease"
        >
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button
          variant={"ghost"}
          color={"white"}
          _hover={{
            transform: "scale(1.05)",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
            bg: "whiteAlpha.200"
          }}
          transition="all 0.3s ease"
        >
          <Link to="/coins">Coins</Link>
        </Button>
      </Box>
    </HStack>
  );
};

export default Header;
