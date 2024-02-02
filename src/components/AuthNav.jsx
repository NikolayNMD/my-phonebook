import { Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const AuthNav = () => {
  return (
    <Toolbar sx={toolbarStyle}>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">Sign In</StyledNavLink>
    </Toolbar>
  );
};

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  &.active {
    color: orange;
  }
`;

export const toolbarStyle = {
  display: 'flex',
  columnGap: 3,
};
