import {
  Flex,
  Text,
  Input,
  Button,
  Image,
  Link,
  Box,
  ControlBox,
  Container,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";

import DrawerMenu from "../header/drawerMenu";

const Nav = () => {
  const [smallThan760] = useMediaQuery("(min-width: 1000px)");
  if (!smallThan760) return <DrawerMenu />;
  return (
    <>
      <Box
        w="100%"
        sx={{
          zIndex: "100",
        }}
      >
        <Flex
          margin="auto"
          justify="space-between"
          color="white"
          paddingTop="12px"
          width={{ xl: "1220px" }}
        >
          <Link
            justifyContent="flex-start"
            paddingInline="85px"
            paddingTop="20px"
            paddingBottom="20px"
            fontSize="20px"
          >
            Amirhossien Safari
          </Link>
          <Box
            justifyContent="flex-end"
            fontSize="18px"
            marginRight="100px"
            paddingTop="20px"
            paddingBottom="20px"
          >
            <Link paddingInline="30px">HOME</Link>
            <Link paddingInline="30px">BIO</Link>
            <Link paddingInline="30px">STORE</Link>
            <Link paddingInline="30px">RESUME</Link>
            <Link paddingInline="30px">ABOUT</Link>
            <Link paddingInline="30px">CONTACT</Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Nav;
