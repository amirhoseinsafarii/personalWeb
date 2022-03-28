import React from "react";

import {
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  Button,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
  useMediaQuery,
  VStack,
  Text,
  Link,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function DrawerMenu() {
  const [smallThan760] = useMediaQuery("(max-width: 1000px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  if (!smallThan760) return null;
  return (
    <>
      <Flex justify="space-between" padding="0px">
        <Text
          padding="30px"
          color="white"
          paddingTop="35px"
          fontSize="18px"
          paddingLeft="30px"
          id="brand-text"
        >
          Amirhossien Safari
        </Text>
        <Link
          size="sm"
          onClick={onOpen}
          padding="30px"
          paddingRight="10px"
          marginRight="0px"
        >
          <HamburgerIcon boxSize={10} color="#ffff" id="menu-icon" />
        </Link>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
        <DrawerContent>
          <DrawerCloseButton color="#ff0078" />

          <DrawerBody p="0">
            <VStack w="100%" paddingTop="50px">
              <Link
                paddingInline="30px"
                w="100%"
                h="auto"
                color="white"
                onClick={onClose}
                paddingBlock="20px"
              >
                HOME
              </Link>
              <Divider borderColor="#ffff" />
              <Link
                paddingInline="30px"
                w="100%"
                h="auto"
                color="white"
                onClick={onClose}
                paddingBlock="20px"
              >
                BIO
              </Link>
              <Divider />
              <Link
                paddingInline="30px"
                w="100%"
                h="auto"
                color="white"
                onClick={onClose}
                paddingBlock="20px"
              >
                STORE
              </Link>
              <Divider borderColor="#ffff" />
              <Link
                paddingInline="30px"
                w="100%"
                h="auto"
                color="white"
                onClick={onClose}
                paddingBlock="20px"
              >
                RESUME
              </Link>
              <Divider borderColor="#ffff" />
              <Link
                paddingInline="30px"
                w="100%"
                h="auto"
                color="white"
                onClick={onClose}
                paddingBlock="20px"
              >
                ABOUT
              </Link>
              <Divider borderColor="#ffff" />
              <Link
                paddingInline="30px"
                w="100%"
                h="auto"
                color="white"
                onClick={onClose}
                paddingBlock="20px"
              >
                CONTACT
              </Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerMenu;
