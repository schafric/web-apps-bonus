import React, { useState } from 'react';
import {
  Box,
  Button,
  Text,
  VStack,
  FormLabel,
  Input,
  Divider,
  Grid,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';

function Home() {
  const [inputValue, setInputValue] = useState("");

  const clearInput = () => setInputValue("");
  const handleChange = (event) => setInputValue(event.target.value);

  return (
    <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
            <VStack spacing={8}>
                <Text>
                    Welcome to Bonus assignment home.<br />
                    Use navigation to navigate to add / subtract page, where you can play around with counter. 
                </Text>
                <Divider />

                <FormLabel>Clearable input:</FormLabel>
                <InputGroup>
                  <InputLeftAddon children='Type & Clear 👉🏻' />
                  <Input onChange={handleChange} value={inputValue} placeholder='... type something here' />
                </InputGroup>

                <Button color="green.50" bg="green.400" _hover={{bg: "green.600"}} onClick={clearInput}>
                  Clear the input above
                </Button>
                
            </VStack>
        </Grid>
    </Box>
  );
}

export default Home;
