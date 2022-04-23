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
import { AddIcon } from '@chakra-ui/icons';

function Add({ counter, increment }) {
  return (
    <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
                <Text>
                    Click the <Code fontSize="xl">button</Code> below to increment the counter.
                </Text>

                <Divider />

                <Button leftIcon={<AddIcon />}  color="green.50" bg="green.400" _hover={{bg: "green.600"}} onClick={increment}>Counter is: {counter}</Button>
            </VStack>
        </Grid>
    </Box>
  );
}

export default Add;
