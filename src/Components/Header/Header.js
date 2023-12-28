import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { RiHome5Fill } from "react-icons/ri";
import { BiLibrary, BiMenu } from "react-icons/bi";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { IoIosHeartDislike } from "react-icons/io";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { Link } from "react-router-dom";
import React from "react";
import Popup from "../Popup/Popup";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [placement, set] = React.useState("left");
  return (
    <>
      <Flex
        display={["none", "none", "flex", "flex", "flex"]}
        ps="10px"
        flexDirection="column"
        w="235px"
        justifyContent="flex-start"
        fontWeight="bold"
      >
        <Box position="fixed" width="235px">
          <Box w="130px" my="27px" ms="15px">
            <Image boxSize="100%" src="/images/Spotify_Logo.png" />
          </Box>
          <Flex
            flexDirection="column"
            alignItems="self-start"
            justifyContent="space-between"
          >
            <Link to="/">
              <Button
                bg="black"
                color="white"
                size="sm"
                fontWeight="bold"
                _hover={{ textColor: "white" }}
              >
                <Text fontSize="28px" color="white" me="3.5">
                  <RiHome5Fill />
                </Text>
                Home
              </Button>
            </Link>
            <Link to="/Search">
              <Button
                my="9px"
                bg="black"
                color="gray"
                size="sm"
                fontWeight="bold"
                _hover={{ textColor: "white" }}
              >
                <Text fontSize="25px" me="4">
                  <FiSearch />
                </Text>
                Search
              </Button>
            </Link>
            <Popup
              title="Enjoy your Library"
              disc="Login to see saved songs, podcasts,artits, and playlist in your library"
            >
              <Link>
                <Button
                  bg="black"
                  color="gray"
                  size="sm"
                  fontWeight="bold"
                  _hover={{ textColor: "white" }}
                >
                  <Text fontSize="25px" me="4">
                    <BiLibrary />
                  </Text>
                  Your Library
                </Button>
              </Link>
            </Popup>
            <Box my="30px">
              <Popup
                title="Create a playlist"
                disc="Login in to create and share playlist"
              >
                <Link>
                  <Button
                    bg="black"
                    color="white"
                    size="sm"
                    fontWeight="bold"
                    _hover={{ textColor: "white" }}
                  >
                    <Text fontSize="23px" me="4">
                      <BsFillPlusSquareFill />
                    </Text>
                    Create Playlist
                  </Button>
                </Link>
              </Popup>
              <Popup
                title="Enjoy your Liked Songs"
                disc="Login in to see all the songs you've liked in one easy playlist "
              >
                <Link>
                  <Button
                    bg="black"
                    color="white"
                    size="sm"
                    mt="6.5px"
                    fontWeight="bold"
                    _hover={{ textColor: "white" }}
                  >
                    <Text fontSize="25px" me="4">
                      <IoIosHeartDislike />
                    </Text>
                    Liked songs
                  </Button>
                </Link>
              </Popup>
            </Box>
            <Box mt="8.6em">
              <Text fontSize="11px" color="gray" ms="2.5">
                <Link>Cookies</Link>
              </Text>
              <Link>
                <Button
                  mt="9"
                  ml="3"
                  bg="transparent"
                  color="white"
                  size="sm"
                  borderRadius="20px"
                  border="1px solid gray"
                  _hover={{
                    backgroundColor: "none",
                    fontSize: "15px",
                    borderColor: "white",
                  }}
                >
                  <Text alignItems="center" display="flex">
                    <Text me="1" fontSize="19px">
                      <HiOutlineGlobeAlt />
                    </Text>
                    <Text fontSize="14px" fontWeight="bold" mt="1px">
                      English
                    </Text>
                  </Text>
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Button
        bg="transparent"
        position="absolute"
        color="white"
        fontSize="22px"
        onClick={onOpen}
        display={["block", "block", "none", "none", "none"]}
      >
        <BiMenu />
      </Button>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerContent bg="black">
          <Flex
            ps="10px"
            flexDirection="column"
            w="235px"
            justifyContent="flex-start"
            fontWeight="bold"
          >
            <Box w="130px" my="27px" ms="15px">
              <Image boxSize="100%" src="/images/Spotify_Logo.png" />
            </Box>
            <Flex
              flexDirection="column"
              alignItems="self-start"
              justifyContent="space-between"
            >
              <Link to="/">
                <Button
                  bg="black"
                  color="white"
                  size="sm"
                  fontWeight="bold"
                  _hover={{ textColor: "white" }}
                >
                  <Text fontSize="28px" color="white" me="3.5">
                    <RiHome5Fill />
                  </Text>
                  Home
                </Button>
              </Link>
              <Link>
                <Link to="/Search">
                  <Button
                    my="9px"
                    bg="black"
                    color="gray"
                    size="sm"
                    fontWeight="bold"
                    _hover={{ textColor: "white" }}
                  >
                    <Text fontSize="25px" me="4">
                      <FiSearch />
                    </Text>
                    Search
                  </Button>
                </Link>
              </Link>
              <Link>
                <Button
                  bg="black"
                  color="gray"
                  size="sm"
                  fontWeight="bold"
                  _hover={{ textColor: "white" }}
                >
                  <Text fontSize="25px" me="4">
                    <BiLibrary />
                  </Text>
                  Your Library
                </Button>
              </Link>
              <Box my="30px">
                <Link>
                  <Button
                    bg="black"
                    color="white"
                    size="sm"
                    fontWeight="bold"
                    _hover={{ textColor: "white" }}
                  >
                    <Text fontSize="23px" me="4">
                      <BsFillPlusSquareFill />
                    </Text>
                    Create Playlist
                  </Button>
                </Link>
                <Link>
                  <Button
                    bg="black"
                    color="white"
                    size="sm"
                    mt="6.5px"
                    fontWeight="bold"
                    _hover={{ textColor: "white" }}
                  >
                    <Text fontSize="25px" me="4">
                      <IoIosHeartDislike />
                    </Text>
                    Liked songs
                  </Button>
                </Link>
              </Box>
              <Box mt="8.6em">
                <Text fontSize="11px" color="gray" ms="2.5">
                  <Link>Cookies</Link>
                </Text>
                <Link>
                  <Button
                    mt="9"
                    ml="3"
                    bg="transparent"
                    color="white"
                    size="sm"
                    borderRadius="20px"
                    border="1px solid gray"
                    _hover={{
                      backgroundColor: "none",
                      fontSize: "15px",
                      borderColor: "white",
                    }}
                  >
                    <Text alignItems="center" display="flex">
                      <Text me="1" fontSize="19px">
                        <HiOutlineGlobeAlt />
                      </Text>
                      <Text fontSize="14px" fontWeight="bold" mt="1px">
                        English
                      </Text>
                    </Text>
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
