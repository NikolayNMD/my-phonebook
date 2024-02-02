import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/authSlice';
import { styled } from 'styled-components';
import { AuthNav } from './AuthNav';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <header>
        <AppBar sx={{ backgroundColor: 'teal' }}>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Toolbar sx={toolbarStyle}>
              <StyledNavLink to="/">Home</StyledNavLink>
              {isLoggedIn && (
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              )}
            </Toolbar>
            <AuthNav />
          </Toolbar>
        </AppBar>
      </header>
      <main style={{ flexGrow: 1 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Box component="footer" sx={boxFooterStyle}>
          <Container maxWidth="sm">
            <Typography
              variant="body2"
              color="white"
              align="center"
              sx={{ mt: 2, mb: 2 }}
            >
              {'Copyright © '}
              <Link href="#">NikolayNMD</Link> {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Container>
        </Box>
      </footer>
    </div>
  );
};

const toolbarStyle = {
  display: 'flex',
  columnGap: 3,
};

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  &.active {
    color: orange;
  }
`;

const Link = styled.a`
  color: inherit;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: orange;
  }
`;

const boxFooterStyle = {
  py: 1,
  px: 2,
  mt: 'auto',
  backgroundColor: 'teal',
};
