import {
  Box,
  Flex,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { RxDotsHorizontal } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";
import { BsPlayCircleFill, BsSpotify, BsThreeDots } from "react-icons/bs";
import { default as MusicData } from "../LocalData/LocalData.json";
import { FiClock } from "react-icons/fi";
const PlayMusic = ({ data }) => {
  console.log(data);
  // Set initial state of song

  const [isPlaying, setPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(data?.music));
  const playPaus = () => {
    if (isPlaying) {
      // Pause the song if it is playing
      audio.pause();
    } else {
      // Play the song if it is paused
      audio.play();
    }
    // Change the state of song
    setPlaying(!isPlaying);
  };

  return (
    <>
      <Box
        display="flex"
        padding="15px"
        color="white"
        alignItems="center"
        bg="gray.800"
        borderRadius="5px"
      >
        <Box height="11rem">
          <Image
            boxShadow="2xl"
            src={data?.image}
            boxSize="full"
            borderRadius="5px"
          />
        </Box>
        <Box ms="6">
          <Text fontWeight="bold" fontSize="13px">
            Playlist
          </Text>
          <Heading
            fontWeight="bold"
            mb="5px"
            fontSize={["3rem", "3rem", "4rem", "5.5rem", "5.5rem"]}
          >
            {data?.title}
          </Heading>
          <Text
            fontSize={["12px", "12px", "12px", "14px", "14px"]}
            mb="8px"
            color="gray.200"
          >
            {data?.discription}
          </Text>
          <Flex alignItems="center">
            <Tooltip placement="bottom-end" fontSize="small" label="Spotify">
              <Text color="#1cca1c" me="4px" fontSize="25px">
                <BsSpotify />
              </Text>
            </Tooltip>
            <Text
              fontSize={["10px", "10px", "10px", "14px", "14px"]}
              fontWeight="bold"
            >
              Spotify . 3,905,341 likes 250 songs, about 10 hr
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box p="30px">
        <Flex align="center">
          <Text color={isPlaying ? "red" : "#1cca1c"} fontSize="60px">
            {/* <BsPlayCircleFill cursor="pointer" onClick={() => playPaus()} /> */}
            <audio
              style={{ width: "200px", height: "30px" }}
              src={data?.music}
              controls
            />
          </Text>
          <Tooltip
            label="Save to your library"
            placement="top"
            fontSize="sm"
            bg="black"
            openDelay={300}
          >
            <Text
              color="gray"
              fontSize="40px"
              mx="22px"
              _hover={{ color: "white" }}
            >
              <BiHeart />
            </Text>
          </Tooltip>
          <Tooltip
            label="More options for peaceful pinao"
            placement="top"
            openDelay={300}
          >
            <Text color="gray" fontSize="30px" _hover={{ color: "white" }}>
              <RxDotsHorizontal />
            </Text>
          </Tooltip>
        </Flex>
        <TableContainer my="10px">
          <Table
            size="sm"
            variant="unstyled"
            color="gray.400"
            fontSize="14px"
            fontWeight="450"
          >
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead borderBottom="0.5px solid gray">
              <Tr fontWeight="bold">
                <Td display="flex">
                  #<Text ms="20px">Title</Text>
                </Td>
                <Td>Album</Td>
                <Td>Date added</Td>
                <Td>
                  <FiClock />
                </Td>
              </Tr>
            </Thead>
            <Tbody _hover={{}}>
              {MusicData.map((data) => (
                <Tr padding="10px">
                  <Td>
                    <Flex alignItems="center">
                      <Text color="white">{data.id}</Text>
                      <Box ms="20px" boxSize="43px">
                        <Image
                          boxShadow="2x1"
                          boxSize="full"
                          src={data.image}
                        />
                      </Box>
                      <Box ms="15px">
                        <Link to={`/Track?id=${data.id}`} key={data.id}>
                          <Text
                            _hover={{ textDecoration: "underline" }}
                            color="white"
                            fontWeight="bold"
                          >
                            {data.title}
                          </Text>
                        </Link>
                        <Text>Shaikh</Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>{data.title}</Td>
                  <Td>{data.date}</Td>
                  <Td>{data.time}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default PlayMusic;
