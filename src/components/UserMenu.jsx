import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/authSlice';
import { Avatar, Button, Toolbar } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { deepOrange } from '@mui/material/colors';
import { logOutUsers } from 'services/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Toolbar sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}>
      <Avatar
        sx={{ bgcolor: deepOrange[500], width: 36, height: 36 }}
        alt={user.name}
        src="/broken-image.jpg"
      />
      Welcome, {user.name}!
      <Button
        variant="text"
        color="inherit"
        type="button"
        startIcon={<LogoutOutlinedIcon />}
        onClick={() => dispatch(logOutUsers())}
      >
        Log Out
      </Button>
    </Toolbar>
  );
};
