import React from 'react';
import { ChakraProvider, Box, Grid, extendTheme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './modules/components/shared/molecule/NavBar/ColorModeSwitcher';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './modules/pages/dashboard/Dashboard';
import ProductDetail from './modules/pages/productDetail/ProductDetail';
import Navbar from './modules/components/shared/molecule/NavBar/Navbar';

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

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
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
