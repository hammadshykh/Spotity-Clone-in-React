import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";

function SongCard({ card, query }) {
  return (
    <>
      <Box
        className="cards"
        padding="15px"
        color="white"
        bg="gray.800"
        borderRadius="5px"
        height="17rem"
        w={query ? "190px" : ""}
      >
        <Box height="10rem">
          <Image
            boxShadow="0 3px 20px black"
            src={card?.image}
            borderRadius="3px"
            boxSize="full"
          />
        </Box>
        <Text
          color="#1cca1c"
          fontSize="50px"
          ms="5.5rem"
          mt="-3rem"
          className="play-btn"
        >
          <Link to={`/HomeMusic?id=${card?.id}`} key={card?.id}>
            <BsPlayCircleFill />
          </Link>
        </Text>
        <Text fontWeight="bold" my="10px">
          {card?.title}
        </Text>
        <Text fontSize="13px">{card?.discription}</Text>
      </Box>
    </>
  );
}

export default SongCard;
