import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

function ProductCard({ data, customContainerStyle }) {
  return (
    <Card
      w="100%"
      h="500px"
      borderRadius={'lg'}
      style={{
        ...customContainerStyle,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Image
        src={data?.images[0]}
        alt="Product Image"
        objectFit="fill"
        h={{ base: '160px', md: '220px', lg: '260px' }}
        w="100%"
        bg="white"
        borderTopRadius="lg"
      />
      <CardBody p={0}>
        <Stack mt="2" spacing="3" p={4}>
          <Heading size="sm">{truncateText(data?.title, 50)}</Heading>
          <Text noOfLines={4} fontSize="sm">
            {truncateText(data?.description, 100)}
          </Text>
          <Text color="blue.600" fontSize="xl">
            {`$ ${data?.price}`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
