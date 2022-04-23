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

function Add({ counter, increment }) {
  return (
    <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
                <Text>
                    Click the <Code fontSize="xl">button</Code> below to increase the counter.
                </Text>

                <Divider />

                <Button onClick={increment}>Counter is: {counter}</Button>
            </VStack>
        </Grid>
    </Box>
  );
}

export default Add;
