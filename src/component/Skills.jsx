import {
  Box,
  Center,
  ChakraProvider,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";

function Skills() {
  return (
    <ChakraProvider>
      <Box bg="#f2f2f2" h={{ base: "555px", lg: "750px" }}>
        <Center>
          <Heading
            mt="50px"
            color="#FF6C22"
            pt={{ base: "200px", md: "100px", lg: "unset" }}
          >
            My Coding Skills
          </Heading>
        </Center>
        <Grid templateColumns="repeat(5, 1fr)" mt="30px" gap={4}>
          <GridItem>
            <Image src="html.png" sx={{}}></Image>
          </GridItem>
          <GridItem>
            <Image src="css-3.png"></Image>
          </GridItem>
          <GridItem>
            <Image src="js.png"></Image>
          </GridItem>
          <GridItem>
            <Image src="atom.png"></Image>
          </GridItem>
          <GridItem>
            <Image src="typescript.png"></Image>
          </GridItem>
          <GridItem>
            <Image src="github.png"></Image>
          </GridItem>
          <GridItem>
            <Image src="mysql.png"></Image>
          </GridItem>
          <GridItem>
            <Image src="php.png"></Image>
          </GridItem>
          <GridItem>
            <Image src="tailwind.png" mt={{ base: "10px", lg: "50px" }}></Image>
          </GridItem>
          <GridItem>
            <Image src="chakra.png" mt={{ base: "10px", lg: "50px" }}></Image>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Skills;
