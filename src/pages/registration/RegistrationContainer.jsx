import { React, useState } from 'react';
import { Box, Paper, Link, Typography } from '@mui/material';
import RegistrationInput from '../../components/login/LoginInput';
import CommonButton from '../../components/common/buttons/CommonButton';
import RegistrationHeader from './../../components/common/GreenPageHeader';

const footerLinksStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 6,
  rowGap: 2,
  marginTop: 3,
};

const footerLinkStyle = {
  textDecoration: 'none',
  color: 'common.black',
  transition: 'color 0.3s linear',
  '&:hover': {
    color: 'primary.main',
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
    if (state.email.trim() === '') {
      setState({ ...state, errorEmail: 'Please enter e-mail address' });
      return;
    }

    const regexEmail =
      /^((\w[^\W]+)[.-]?){1,}@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;
    const subst = ``;
    const emailMatch = state.email.replace(regexEmail, subst);

    const regexPassword = /^[a-z0-9]+$/i;
    const passwordMatch = state.password.replace(regexPassword, subst);

    if (emailMatch.length !== 0) {
      setState({
        ...state,
        errorEmail: 'Please provide correct e-mail address',
      });
      return;
    }

    if (state.password.trim() === '') {
      setState({ ...state, errorPassword: 'Please enter password' });
      return;
    }

    if (
      passwordMatch.length !== 0 ||
      state.password.length < 5 ||
      state.password.length > 10
    ) {
      setState({
        ...state,
        errorPassword:
          'Password must be at least 5 characters long, maximum 10 characters long, and can only contain letters and numbers',
      });
      return;
    }

    console.log('fetch Login API');
  };
  return (
    <>
      <RegistrationHeader title="Create Account" />
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
            <Link href="#" sx={footerLinkStyle}>
              <Typography>Return to Store</Typography>
            </Link>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default RegistrationContainer;
