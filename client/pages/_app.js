import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/styles.css";
import Nav from "../components/header/nav";
import { ChakraProvider } from "@chakra-ui/react";
//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import theme from "../theme";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme} resetCSS={true}>
        <Nav />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
