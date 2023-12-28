import { Box, Button, Flex, Heading } from "@chakra-ui/react";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MainHeader = (props) => {
  return (
    <Flex
      bg="#141414"
      alignItems="center"
      padding="9px 20px"
      justifyContent="space-between"
    >
      <Box ms="10px" display="flex" alignItems="center">
        <Heading fontSize="21px" display="flex">
          <Box
            me="16px"
            bg="black"
            color="gray"
            p="1.5"
            borderRadius="full"
            display={["none", "none", "none", "flex", "flex"]}
          >
            <AiOutlineLeft />
          </Box>
          <Box
            bg="black"
            color="gray"
            p="1.5"
            borderRadius="full"
            display={["none", "none", "none", "flex", "flex"]}
          >
            <AiOutlineRight />
          </Box>
        </Heading>
        {props.children}
      </Box>
      <Box display={["flex", "flex", "block", "block", "block"]}>
        <Button
          size={["sm", "sm", "md", "lg", "lg"]}
          fontSize={["12px", "12px", "15px", "15px", "15px"]}
          fontWeight="bold"
          borderRadius="20px"
          me="2"
          _hover={{ bg: "none", color: "white" }}
          bg="transparent"
          color="gray"
        >
          Sign up
        </Button>
        <Button
          bg="white"
          fontWeight="bold"
          borderRadius="30px"
          w={["inherit", "inherit", "initial", "110px", "110px"]}
          fontSize={["12px", "12px", "15px", "15px", "15px"]}
          size={["sm", "sm", "md", "lg", "lg"]}
        >
          Log in
        </Button>
      </Box>
    </Flex>
  );
};

export default MainHeader;
