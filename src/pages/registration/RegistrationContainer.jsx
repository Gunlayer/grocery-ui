import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Paper, Typography } from '@mui/material';
import RegistrationInput from '../../components/login/LoginInput';
import CommonButton from '../../components/common/buttons/CommonButton';
import GreenPageHeader from './../../components/common/GreenPageHeader';
import { emailValidation } from '../../helpers/emailValidation';
import { passwordValidation } from '../../helpers/passwordValidation';

const footerLinksStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 6,
  rowGap: 2,
  marginTop: 3,
  '& a': {
    textDecoration: 'none',
    color: 'common.black',
    transition: 'color 0.3s linear',
    '&:hover': {
      color: 'primary.main',
    },
  },
};

const RegistrationContainer = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    errorEmail: '',
    errorPassword: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      errorEmail: e.target.name === 'email' ? '' : state.errorEmail,
      errorPassword: e.target.name === 'password' ? '' : state.errorPassword,
    });
  };

  const handleClick = () => {
    if (
      emailValidation(state, setState) &&
      passwordValidation(state, setState)
    ) {
      console.log('fetch Register API');
    }
  };

  return (
    <>
      <GreenPageHeader title="Create Account" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 320,
          paddingLeft: { xs: 4, lg: 10 },
          paddingRight: { xs: 4, lg: 10 },
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            padding: 3,
            paddingTop: 5,
            paddingBottom: 4,
            width: '100%',
            maxWidth: 600,
            backgroundColor: '#f7f7f7',
          }}
        >
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              '& > :not(style)': {
                width: '100%',
              },
            }}
            noValidate
            autoComplete="off"
          >
            <RegistrationInput
              label="Email"
              type="email"
              autoFocus={true}
              value={state.email}
              error={state.errorEmail}
              handleChange={handleChange}
            />
            <RegistrationInput
              label="Password"
              type="password"
              value={state.password}
              error={state.errorPassword}
              handleChange={handleChange}
            />
            <Box>
              <CommonButton
                text="Create"
                padding="7px 30px"
                fontSize="16px"
                onClick={handleClick}
              />
            </Box>
          </Box>
          <Box sx={footerLinksStyle}>
            <Link to="/">
              <Typography>Return to Store</Typography>
            </Link>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default RegistrationContainer;
