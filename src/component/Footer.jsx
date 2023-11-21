import {
  ChakraProvider,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <ChakraProvider>
      <VStack h="50px" textAlign="center" bg="#edf2f7" boxShadow="dark-lg">
        <Flex w="100%" mr="40px" mt="10px">
          <Heading ml="8" size="md" fontWeight="semibold" color="black">
            <Text
              color="black"
              textAlign={{
                base: "center",
                xl: "start",
              }}
              mb={{ base: "20px", xl: "0px" }}
            >
              {" "}
              &copy;
              <Text as="span" fontWeight="500" ms="4px" color="#FF6C22">
                2023 Made with Love
              </Text>
            </Text>
          </Heading>
          <Spacer></Spacer>
          <Link
            href="https://www.linkedin.com/in/imam-afizi-a21b54192/"
            target="blank"
          >
            <IconButton icon={<FaLinkedin />}></IconButton>
          </Link>
          <Link href="https://www.instagram.com/imamafizy/" target="blank">
            <IconButton ml={2} icon={<FaInstagram />}></IconButton>
          </Link>
          <Link href="https://github.com/imamafizi" target="blank">
            <IconButton ml={2} icon={<FaGithub />}></IconButton>
          </Link>
        </Flex>
      </VStack>
    </ChakraProvider>
  );
}

export default Footer;
