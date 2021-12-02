import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFilters,
  setOpenDialogRemoveUser,
  setAdminUsersError,
} from '../../../redux/slices/adminUsers';
import { useUsersFilters } from '../../../hooks/useUsersFilters';

const dialogStyle = {
  paddingLeft: '260px',
  '& .MuiPaper-root': {
    borderRadius: 2,
    minWidth: '200px',
    maxWidth: '600px',
  },
};

const dialogActionsStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '20px',
  paddingTop: 0,
};

const buttonStyle = {
  padding: '4px 8px',
  margin: '0 10px',
};

const DialogRemoveUser = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const filters = useSelector((state) => state.adminUsers.filters);

  const openDialogRemoveUser = useSelector(
    (state) => state.adminUsers.openDialogRemoveUser
  );

  const removingUser = useSelector((state) => state.adminUsers.removingUser);

  const filteredUsers = useUsersFilters(filters, token);

  const numberOfElements = useSelector(
    (state) => state.adminUsers.numberOfElements
  );

  const pageNumber = useSelector(
    (state) => state.adminUsers.filters.pageNumber
  );

  const handleRemoveUser = async () => {
    try {
      const response = await axios({
        method: 'delete',
        url: '/api/admin/users',
        headers: {
          Authorization: token,
        },
        data: removingUser.email,
      });

      if (response.status >= 200 && response.status < 300) {
        dispatch(setOpenDialogRemoveUser(false));

        if (numberOfElements === 1 && pageNumber > 1) {
          dispatch(setFilters({ pageNumber: pageNumber - 1 }));
        }

        filteredUsers.refetch();
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err && err.response) {
          dispatch(setAdminUsersError(err.response.data.message));
        }
      }
    }
  };

  return (
    <Dialog
      sx={dialogStyle}
      open={openDialogRemoveUser}
      onClose={() => {
        dispatch(setOpenDialogRemoveUser(false));
      }}
      disableScrollLock
    >
      <DialogContent>
        <DialogContentText align="center">
          Remove user with email
          <br />
          <b>{removingUser.email}</b>
          <br />
          from the database?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={dialogActionsStyle}>
        <Button
          sx={buttonStyle}
          variant="outlined"
          size="small"
          onClick={handleRemoveUser}
        >
          Yes
        </Button>
        <Button
          sx={buttonStyle}
          variant="outlined"
          size="small"
          onClick={() => {
            dispatch(setOpenDialogRemoveUser(false));
          }}
          autoFocus
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogRemoveUser;
