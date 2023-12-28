import "../Cards/cards.css";
import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";

// 👇️ get ID from url

const CardItem = (props) => {
  return (
    <Box padding="25px">
      <Flex justifyContent="space-between">
        <Heading color="white" fontSize="25px" mb="20px">
          Focus
        </Heading>
        <Link>
          <Text
            color="gray"
            fontSize="13.5px"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            Show all
          </Text>
        </Link>
      </Flex>
      <SimpleGrid minChildWidth="180px" spacing="20px">
        {props.item.map((card, i) => (
          <Box
            className="cards"
            padding="15px"
            color="white"
            bg="gray.800"
            borderRadius="5px"
          >
            <Box height="10rem">
              <Image
                boxShadow="0 3px 20px black"
                src={card.image}
                borderRadius="3px"
                height="200px"
                boxSize="full"
                w={["250px", "250px", "", "", ""]}
                display="block"
              />
            </Box>
            <Text
              color="#1cca1c"
              fontSize="50px"
              ms="5.5rem"
              mt="-3rem"
              className="play-btn"
            >
              <Link to={`/HomeMusic?id=${card.id}`} key={card.key}>
                <BsPlayCircleFill />
              </Link>
            </Text>
            <Text fontWeight="bold" my="10px">
              {card.title}
            </Text>
            <Text fontSize="13px">{card.discription}</Text>
          </Box>
        ))}
      </SimpleGrid>
      <Box my="25px">
        <Heading color="white" fontSize="23px">
          Spotify Playlist
        </Heading>
      </Box>
      <SimpleGrid minChildWidth="180px" spacing="20px">
        {props.item.map((card) => (
          <Box
            className="cards"
            padding="15px"
            color="white"
            bg="gray.800"
            borderRadius="5px"
          >
            <Box height="10rem">
              <Image
                boxSize="full"
                boxShadow="2xl"
                src={card.image}
                borderRadius="5px"
              />
            </Box>
            <Text
              color="#1cca1c"
              fontSize="50px"
              ms="5.5rem"
              mt="-3rem"
              className="play-btn"
            >
              <Link to={`/HomeMusic?id=${card.id}`} key={card.id}>
                <BsPlayCircleFill />
              </Link>
            </Text>
            <Text fontWeight="bold" my="10px">
              {card.title}
            </Text>
            <Text fontSize="13px">{card.discription}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CardItem;
