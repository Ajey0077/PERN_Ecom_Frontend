// Navbar.js
import React, { useEffect, useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import styles from './navbar.module.scss';

function Navbar({ title }) {
  const { colorMode } = useColorMode();

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
          <Input type="text" placeholder="Search..." />
        </InputGroup>
      </Box>

      <ColorModeSwitcher />
    </Box>
  );
}

export default Navbar;
