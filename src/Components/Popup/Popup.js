import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";

const Popup = (props) => {
  return (
    <Popover placement="right">
      <PopoverTrigger>{props.children}</PopoverTrigger>
      <PopoverContent bg="blue" color="white" border="none" ms="4rem">
        <PopoverHeader fontWeight="bold" fontSize="17px" borderBottom="none">
          {props.title}
        </PopoverHeader>
        <PopoverArrow bg="blue" placeItems="flex-start" />
        <PopoverCloseButton bg="purple.500" />
        <PopoverBody fontSize="14px" fontWeight="normal">
          {props.disc}
          <Box display={["flex", "flex", "block", "block", "block"]} py="15px">
            <Box display="flex" alignItems="center" justifyContent="right">
              <Button
                fontSize={["12px", "12px", "15px", "15px", "15px"]}
                fontWeight="bold"
                borderRadius="20px"
                me="2"
                _hover={{ bg: "none", color: "white" }}
                bg="transparent"
                color="gray"
              >
                Not now
              </Button>
              <Button
                bg="white"
                fontWeight="bold"
                color="gray"
                borderRadius="30px"
                fontSize={["12px", "12px", "15px", "15px", "15px"]}
              >
                Log in
              </Button>
            </Box>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Popup;
