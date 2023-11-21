import { Box, ChakraProvider, Flex, Image, Text } from "@chakra-ui/react";

function Content() {
  return (
    <ChakraProvider>
      <Box bg="white" h={{ base: "175px", lg: "400px" }}>
        <Flex height={{ base: "50px", lg: "300px" }}>
          <Flex
            flex={1}
            px={{ base: "0px", lg: "72px" }}
            alignItems="center"
            flexDir={{ base: "column", lg: "unset" }}
          >
            <Image
              src="imamMobile.png"
              alt="my photo"
              rounded=""
              width={{ base: "165px", lg: "350px" }}
              height={{ base: "265px", lg: "380px" }}
              objectFit="cover"
              mt={{ lg: "120px" }}
              // display={{ base: "none", lg: "block" }}
            />
            <Flex
              flexDir="column"
              color="black"
              flex={1}
              justifyContent="center"
              px="30px"
              pl={{ base: "unset", lg: "80px" }}
              pr={{ base: "unset", lg: "300px" }}
              pt={{ base: "unset", lg: "150px" }}
            >
              <Text
                textAlign={{ base: "center", lg: "unset" }}
                color="#FF6C22"
                as="h1"
                fontSize={{ base: "30px", lg: "35px" }}
                fontWeight="bold"
              >
                About Me
              </Text>
              <Text
                my={{ base: "5px", lg: "20px" }}
                pl={{ base: "10px", md: "50px", lg: "unset" }}
              >
                Passionate and seasoned Software Engineer with a strong focus on
                frontend development. Proficient in TypeScript and well-versed
                in all aspects of web technologies. Collaborative team player
                dedicated to delivering efficient, scalable, and visually
                appealing web applications.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Content;
