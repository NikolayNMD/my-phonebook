import { Toolbar } from '@mui/material';
import { StyledNavLink } from './Layout';

export const AuthNav = () => {
  return (
    <Toolbar sx={toolbarStyle}>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">Sign In</StyledNavLink>
    </Toolbar>
  );
};

export const toolbarStyle = {
  display: 'flex',
  columnGap: 3,
};
