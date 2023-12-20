import Posts from "./posts";
import { ChakraProvider, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <Box bgGradient="linear(to-r, green.400, blue.700)">
        <Posts />
      </Box>
    </ChakraProvider>
  );
}
