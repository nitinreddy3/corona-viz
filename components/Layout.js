import React from 'react';
import useFetch from '../utils/useFetch';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Copyright from './Copyright';

const Layout = (props) => {
  const { pageTitle, children } = props;
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {pageTitle}
        </Typography>
        {children}
      </Box>
    </Container>
  )
}

export default Layout;