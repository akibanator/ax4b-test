import axios from "axios";
import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  Center,
  Box,
  Stack,
  ChakraProvider,
  Divider,
} from "@chakra-ui/react";

export default async function Posts({ params }) {
  try {
    const { data: post } = await axios.get(
      `http://localhost:3001/post/${params.id}`,
    );
    const comments = post.comments;
    return (
      <ChakraProvider>
        <Box
          paddingTop="20px"
          bgGradient="linear(to-r, green.400, blue.700)"
          minH="100vh"
        >
          <Center>
            <Card maxW="50%" minW="350px">
              <CardHeader>
                <div key={post.id}>
                  <div>
                    <Heading size="lg">{post.post.title}</Heading>
                  </div>
                  <div>{post.post.body}</div>
                </div>
              </CardHeader>
              <Divider width="90%" margin="auto" />
              <ul>
                {comments.map((comment) => (
                  <Box>
                    <CardBody>
                      <Box
                        gap="20px"
                        display="flex"
                        flexDir="column"
                        key={comment.id}
                      >
                        <Heading size="md">{comment.name}</Heading>
                        <Text fontSize="md">{comment.email}</Text>
                        <Text fontSize="sm">{comment.body}</Text>
                      </Box>
                    </CardBody>
                    <Divider width="90%" margin="auto" />
                  </Box>
                ))}
              </ul>
            </Card>
          </Center>
        </Box>
      </ChakraProvider>
    );
  } catch (error) {
    console.log(error);
    return <p>Page error</p>;
  }
}
