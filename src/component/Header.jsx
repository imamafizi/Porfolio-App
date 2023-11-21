import {
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import {} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <ChakraProvider>
      <VStack
        h="50px"
        textAlign="center"
        bgGradient="linear(to-r, #68697a, #1f203a)"
      >
        <Flex w="100%" mr="40px" mt="10px">
          <Heading ml="8" size="md" fontWeight="semibold" color="black">
            <Image src="logo.png" alt="Logo" w="100px" h="20px" />
          </Heading>
          <Spacer></Spacer>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Text ml="5">Home</Text>
          </Link>

          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Text ml="5">About</Text>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Text ml="5">Skills</Text>
          </Link>
        </Flex>
      </VStack>
    </ChakraProvider>
  );
}
