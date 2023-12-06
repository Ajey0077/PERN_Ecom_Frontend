import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Grid, extendTheme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './modules/components/shared/molecule/NavBar/ColorModeSwitcher';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './modules/pages/dashboard/Dashboard';
import ProductDetail from './modules/pages/productDetail/ProductDetail';
import Navbar from './modules/components/shared/molecule/NavBar/Navbar';
import SearchModal from './modules/components/shared/molecule/SearchModal/SearchModal';
import PageNotFound from './modules/pages/pageNotFound';
import { useLocation } from 'react-router-dom';

const theme = extendTheme({
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
      white: '#ffffff',
      purple: '#8A63E9',
    },
  },
  styles: {
    global: props => ({
      body: {
        bg: 'rgba(0, 0, 0, 0.06)',
      },
    }),
  },
});

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Dashboard />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="page-not-found" element={<PageNotFound />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Box textAlign="center" fontSize="xl">
        <Navbar title="Ecom" />
        <div style={{ padding: '100px 25px 60px 25px' }}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Main />
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;
