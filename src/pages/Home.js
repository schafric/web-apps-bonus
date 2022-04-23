import React from 'react';
import {
  Box,
  Text,
  VStack,
  Grid,
} from '@chakra-ui/react';

function Home() {
  return (
    <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
                <Text>
                    Welcome to Bonus assignment home.<br />
                    Use navigation to navigate to add / subtract page, where you can play around with counter. 
                </Text>
            </VStack>
        </Grid>
    </Box>
  );
}

export default Home;
