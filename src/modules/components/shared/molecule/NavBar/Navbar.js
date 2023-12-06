// Navbar.js
import React, { useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import styles from './navbar.module.scss';
import SearchModal from '../SearchModal/SearchModal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Navbar({ title }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchProducts, currentPage } = useSelector(state => {
    return state.dashboard;
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const fetchData = text => {
    dispatch({
      type: `dashboard/searchProducts`,
      payload: { page: 1, searchText: text, filter: 'all' },
    });
  };

  const handleSearch = text => {
    onClose();
    dispatch({
      type: `dashboard/fetchProducts`,
      payload: { page: 1, searchText: text, filter: 'all' },
    });
  };

  const handleItemClick = id => {
    if (id) {
      onClose();
      navigate(`/product/${id}`, { replace: true });
    }
  };

  return (
    <Box
      className={`${styles.navbar} ${
        colorMode === 'light' ? 'light-mode' : ''
      }`}
    >
      <Box className={styles.logo}>
        <span
          style={{
            fontFamily: 'cool-font',
            fontSize: '24px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={() => {
            navigate(`/`, { replace: true });
          }}
        >
          {title}
        </span>
      </Box>

      <Box className={styles.search}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            value={''}
            type="text"
            onClick={onOpen}
            onChange={onOpen}
            placeholder="Search..."
          />
        </InputGroup>
      </Box>

      <ColorModeSwitcher />
      {isOpen && (
        <SearchModal
          listData={searchProducts}
          isOpen={isOpen}
          onClose={onClose}
          fetchData={fetchData}
          handleSearch={handleSearch}
          handleItemClick={handleItemClick}
        />
      )}
    </Box>
  );
}

export default Navbar;
