import { Box, Flex } from "@chakra-ui/react";
import Header from "../Header/Header";
import MainHeader from "../MainHeader/MainHeader";
import PlayMusic from "../PlayMusic/PlayMusic";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { default as localData } from "../LocalData//LocalData.json";

const HomeMusic = () => {
  const [songId, setSongId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const paramId = queryParams.get("id");
    if (!paramId) return;
    setSongId(paramId);
  }, []);

  const songDetail = useMemo(() => {
    return localData.filter((item) => item.id == songId);
  }, [songId]);

  console.log(songId);

  return (
    <Flex>
      <Box>
        <Header />
      </Box>
      <Box w="100%">
        <MainHeader />
        <Box bg="#262626">
          <PlayMusic data={songDetail} />
        </Box>
      </Box>
    </Flex>
  );
};

export default HomeMusic;
