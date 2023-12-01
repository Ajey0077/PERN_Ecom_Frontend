import React from 'react';
import {
  Grid,
  GridItem,
  Skeleton,
  Box,
  SkeletonText,
  Text,
  Center,
} from '@chakra-ui/react';
import ProductCard from '../../molecule/productCard/ProductCard';

function ProductGridList({ isLoading, list, customContainerStyle }) {
  const renderLoadingSkeletons = () =>
    Array.from({ length: 12 }, (_, index) => (
      <GridItem key={index} w="100%">
        <Box h="500px" boxShadow="lg" bg="white" borderRadius="lg">
          <Skeleton h="235px" w="100%" />
          <SkeletonText m="6" noOfLines={6} spacing="4" skeletonHeight="4" />
        </Box>
      </GridItem>
    ));

  const renderProductCards = () =>
    list?.map((item, index) => (
      <GridItem key={index} w="100%">
        <ProductCard data={item} />
      </GridItem>
    ));

  const renderNoDataMessage = () => (
    <GridItem colSpan={{ base: 1, sm: 1, md: 2, lg: 4 }}>
      <Center h="500px">
        <Text>No products found</Text>
      </Center>
    </GridItem>
  );

  return (
    <Grid
      templateColumns={{
        base: '1fr',
        sm: '1fr',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      gap={10}
      style={customContainerStyle}
    >
      {isLoading
        ? renderLoadingSkeletons()
        : list?.length !== 0
        ? renderProductCards()
        : renderNoDataMessage()}
    </Grid>
  );
}

export default ProductGridList;
