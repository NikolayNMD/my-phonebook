import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUsers } from 'services/authOperations';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { avatarStyle, boxFormStyle } from './StylePajes';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const onSubmitLogIn = event => {
    event.preventDefault();
    const logInUser = { email, password };
    dispatch(logInUsers(logInUser));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={boxFormStyle}>
        <Avatar sx={avatarStyle}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={onSubmitLogIn} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={email}
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={onChangeInput}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={password}
            autoComplete="current-password"
            onChange={onChangeInput}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: 'teal' }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
