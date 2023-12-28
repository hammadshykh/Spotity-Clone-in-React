import React, { useEffect, useMemo, useState } from "react";
import { default as localData } from "../LocalData//LocalData.json";
import { useLocation } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import MainHeader from "../MainHeader/MainHeader";
import Header from "../Header/Header";
import MainTrack from "./MainTrack";

const Track = () => {
  const [songId, setSongId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const paramId = queryParams.get("id");
    if (!paramId) return;
    setSongId(paramId);
    // console.log(songId);
  }, [location.search]);

  const songDetail = useMemo(() => {
    return localData.filter((item) => item.id === songId)[0];
  }, [songId]);

  console.log(songDetail);
  return (
    <>
      <Flex>
        <Box>
          <Header />
        </Box>
        <Box w="100%">
          <MainHeader />
          <Box bg="#262626" padding="20px">
            <MainTrack data={songDetail} />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Track;
