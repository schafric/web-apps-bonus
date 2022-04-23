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
import { MinusIcon } from '@chakra-ui/icons';

function Substract({ counter, decrement }) {

  return (
    <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
                <Text>
                    Click the <Code fontSize="xl">button</Code> below to decrease the counter.
                </Text>
                <Divider />

                <Button leftIcon={<MinusIcon />} color="green.50" bg="green.400" _hover={{bg: "green.600"}} onClick={decrement}>Counter is: {counter}</Button>
            </VStack>
        </Grid>
    </Box>
  );
}

export default Substract;
