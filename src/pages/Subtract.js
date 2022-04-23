import React from 'react';
import {
  Box,
  Text,
  VStack,
  Code,
  Grid,
  Button,
  Divider,
} from '@chakra-ui/react';

function Substract({ counter, decrement }) {

  return (
    <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
                <Text>
                    Click the <Code fontSize="xl">button</Code> below to decrease the counter.
                </Text>
                <Divider />

                <Button onClick={decrement}>Counter is: {counter}</Button>
            </VStack>
        </Grid>
    </Box>
  );
}

export default Substract;
