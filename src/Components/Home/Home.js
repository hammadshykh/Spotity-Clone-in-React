import { Box, Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import MainHeader from "../MainHeader/MainHeader";
import Cards from "../Cards/Cards";

const Home = () => {
  return (
    <Flex>
      <Box>
        <Header />
      </Box>
      <Box bg="" w="100%">
        <MainHeader />
        <Box bg="#262626">
          <Cards />
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
