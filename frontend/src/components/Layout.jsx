import { Box, VStack } from '@chakra-ui/react'

import NavBar from './NavBar';

export default function Layout( { children } ){
    return (
        <VStack w='100vw' minH='100vh' >
            <NavBar/>
            <Box w='100%'>
                {children}
            </Box>
        </VStack>
    );
};
