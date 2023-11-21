import {
  Box,
  Center,
  ChakraProvider,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";

function Hero() {
  return (
    <ChakraProvider>
      <Box h={{ base: "450px", lg: "100vh" }}>
        <Box bg="#f2f2f2" h={{ base: "200px", lg: "400px" }}>
          <Grid templateColumns="repeat(6, 1fr)">
            <GridItem colSpan={{ base: 5, md: 6, lg: 6 }}>
              <Center>
                <Image
                  src="imam2.png"
                  h={{ base: "250px", lg: "auto" }}
                  w={{ base: "250px", lg: "auto" }}
                  alt="Foto Imam Afizi"
                  borderRadius="50%"
                  border="10px solid white"
                  mt="16px"
                  ml={{ base: "20px", lg: "unset" }}
                />
              </Center>
            </GridItem>
            <GridItem
              colSpan={{ base: 5, md: 6, lg: 6 }}
              w={{ base: "350px", lg: "100%" }}
              ml={{ base: "10px", md: "240px", lg: "unset" }}
            >
              <Center>
                <Text textAlign="center" fontSize={{ base: "3xl", lg: "6xl" }}>
                  IMAM
                </Text>
                <Text
                  color="#FF6C22"
                  ml="10px"
                  textAlign="center"
                  fontSize={{ base: "3xl", lg: "6xl" }}
                >
                  AFIZI
                </Text>
              </Center>
            </GridItem>
            <GridItem
              pl={{ base: "unset", md: "220px", lg: "550px" }}
              pr={{ base: "unset", md: "150px", lg: "550px" }}
              colSpan={{ base: 6, lg: 6 }}
              w={{ base: "350px", md: "750px", lg: "100%" }}
              ml={{ base: "10px", lg: "unset" }}
            >
              <Center>
                <Text fontSize={{ base: "md", lg: "1xl" }} textAlign="center">
                  im also a Front-end Developer skilled in JavaScript, React.js,
                  HTML, and CSS, dedicated to creating sleek and user-friendly
                  interfaces.
                </Text>
              </Center>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Hero;
