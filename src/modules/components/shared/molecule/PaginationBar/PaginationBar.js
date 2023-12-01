import React from 'react';
import { HStack, Button, Text } from '@chakra-ui/react';

const PaginationBar = ({
  isLoading,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <HStack spacing="4" justify="center" mt="8">
      <Button
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
        isDisabled={currentPage <= 1}
        isLoading={isLoading}
        loadingText="Loading..."
        colorScheme="blue"
        variant="outline"
      >
        Previous
      </Button>
      <Text>
        Page {currentPage} of {totalPages}
      </Text>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
        isLoading={isLoading}
        loadingText="Loading..."
        colorScheme="blue"
        variant="outline"
      >
        Next
      </Button>
    </HStack>
  );
};

export default PaginationBar;
