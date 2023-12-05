import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function PageNotFound({
  title = 'Oops! Page Not Found',
  message = 'The page you are looking for might be in another galaxy.',
  buttonText = 'Go Home',
  buttonLink = '/',
}) {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading fontSize="3xl" mb={4}>
        {title}
      </Heading>
      <Text fontSize="md" mb={4}>
        {message}
      </Text>
      <Box>
        <Button
          as={Link}
          to={buttonLink}
          colorScheme="blue"
          size="md"
          fontSize="md"
          fontWeight="bold"
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
}

export default PageNotFound;
