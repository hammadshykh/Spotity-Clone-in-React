import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Header from "../Header/Header";
import MainHeader from "../MainHeader/MainHeader";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPlayCircleFill } from "react-icons/bs";
import { default as MusicData } from "../LocalData/LocalData.json";
import SongCard from "./SongCard";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const filtered = MusicData.filter((data) =>
    data.title.toLowerCase().includes(query)
  );

  return (
    <Box>
      <Flex>
        <Box>
          <Header />
        </Box>
        <Box bg="" w="100%">
          <MainHeader>
            <Box ms="20px">
              <Input
                onChange={onChangeHandler}
                type="text"
                w={["100px", "150px", "200px", "350px", "350px"]}
                borderRadius="20px"
                value={query}
                bg="white"
                height={["26px", "26px", "30px", "43px", "43px"]}
                paddingLeft={["1.5rem", "1.5rem", "2rem", "2.8rem", "2.8rem"]}
                placeholder="What do you want to listen to?"
                _placeholder={{
                  fontSize: ["10px", "11px", "12px", "14px", "14px"],
                  color: "gray",
                }}
              />
            </Box>
            <Text
              pos="relative"
              right="70%"
              top={["4px", "4px", "4px", "0", "0"]}
              fontSize={["1rem", "1rem", "1.5rem", "1.8rem", "1.8rem"]}
              ms="2"
            >
              <BiSearch />
            </Text>
          </MainHeader>
          <Box bg="#262626" padding="20px">
            {query ? (
              ""
            ) : (
              <Box>
                <Heading color="white" fontSize="22px" my="20px">
                  Browse all
                </Heading>
              </Box>
            )}

            <SimpleGrid
              minChildWidth="180px"
              spacing={query ? "0" : "20px"}
              height={query ? "100vh" : ""}
            >
              {filtered.map((data) => {
                return <SongCard card={data} query={query} />;
              })}
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SearchPage;
