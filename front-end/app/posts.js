import axios from "axios";
import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  Center,
  Box,
} from "@chakra-ui/react";

export default async function Posts() {
  const { data: posts } = await axios.get(`http://localhost:3001/posts`);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <Box paddingTop="20px">
            <Center>
              <Card maxW="50%" minW="350px">
                <div key={post.id}>
                  <CardHeader>
                    <li>
                      <a href={`/post/${post.id}`}>
                        <Heading size="lg">{post.title}</Heading>
                      </a>
                    </li>
                  </CardHeader>
                  <CardBody>
                    <li>
                      <a href={`/post/${post.id}`}>
                        <Text>{post.body}</Text>
                      </a>
                    </li>
                  </CardBody>
                </div>
              </Card>
            </Center>
          </Box>
        ))}
      </ul>
    </div>
  );
}
