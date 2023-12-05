import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  List,
  ListItem,
  Box,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';

function SearchModal({
  listData = [],
  isOpen,
  onClose,
  fetchData,
  handleSearch,
  handleItemClick,
}) {
  const [inputValue, setInputValue] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);

  const initialRef = useRef(null);

  const handleInputChange = value => {
    setInputValue(value);
  };

  useEffect(() => {
    setVisibleItems(listData.slice(0, 5));
  }, [listData]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData(inputValue);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleSeeMore = () => {
    const nextVisibleItems = listData.slice(
      visibleItems?.length,
      listData?.length
    );
    setVisibleItems(prevVisibleItems => [
      ...prevVisibleItems,
      ...nextVisibleItems,
    ]);
  };
  const handleSeeLess = () => {
    setVisibleItems(listData.slice(0, 5));
  };

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              ref={initialRef}
              placeholder="Search"
              value={inputValue}
              onChange={e => {
                handleInputChange(e.target.value);
              }}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  handleSearch(inputValue);
                }
              }}
            />
            {(visibleItems?.length > 0 || inputValue.trim() !== '') && (
              <List mt={3}>
                {visibleItems.map((item, index) => (
                  <ListItem
                    key={index}
                    onClick={() => handleItemClick(item?.id)}
                  >
                    <Box display="flex" mb={4}>
                      <Image
                        src={item?.images[0]}
                        alt="Item Image"
                        boxSize="50px"
                        objectFit="cover"
                        marginRight="2"
                      />
                      <Box>
                        <Text
                          fontWeight="bold"
                          fontSize="md"
                          isTruncated
                          maxWidth="20ch"
                        >
                          {item?.title}
                        </Text>
                        <Text fontSize="sm" isTruncated maxWidth="40ch">
                          {item?.description}
                        </Text>
                      </Box>
                    </Box>
                  </ListItem>
                ))}
                {listData.length > 5 && (
                  <ListItem>
                    {!(listData.length > visibleItems.length) ? (
                      <Button
                        variant="link"
                        onClick={handleSeeLess}
                        color="blue.500"
                      >
                        See Less
                      </Button>
                    ) : (
                      <Button
                        variant="link"
                        onClick={handleSeeMore}
                        color="blue.500"
                      >
                        See More
                      </Button>
                    )}
                  </ListItem>
                )}
              </List>
            )}
            {listData?.length === 0 && inputValue.trim() !== '' && (
              <Text color="gray.500">No match found.</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SearchModal;
