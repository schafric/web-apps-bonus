import React, { useState } from 'react';
import {
  ChakraProvider,
  Link,
  Flex,
  Container,
  theme,
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import Add from './pages/Add';
import Substract from './pages/Subtract';
import Home from './pages/Home';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex p="20px 0" align="center" justify="center" as="header" top={0} left={0} position="fixed" bg="gray.50" w="100%">
          <Link color="green.500" p="0 10px" as={RouterLink} to='/'>
            Home
          </Link>
          <Link color="green.500" p="0 10px" as={RouterLink} to='/add'>
            Add
          </Link>
          <Link color="green.500" p="0 10px" as={RouterLink} to='/subtract'>
            Subtract
          </Link>
        </Flex>
        <Container as="main" pt="20">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add" element={<Add counter={counter} increment={increment} />} />
            <Route path="/subtract" element={<Substract counter={counter} decrement={decrement} />} />
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
