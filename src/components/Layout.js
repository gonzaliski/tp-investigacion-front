import { Box, ChakraProvider, Grid, Spinner, theme, VStack } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
export function Layout() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar></NavBar>
      <Suspense fallback={<Spinner />}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            
            <VStack spacing={8}>
              <Outlet />
            </VStack>
          </Grid>
        </Box>
      </Suspense>
    </ChakraProvider>
  );
}
