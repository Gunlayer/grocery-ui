export const passwordValidation = (state, setState) => {
  const regexPassword = /^[a-zA-Z0-9!@#$%^&*()_+~`\-=\\\/|\[\]{};:'",<.>?]*$/gm;
  const subst = ``;
  const passwordMatch = state.password.replace(regexPassword, subst);

  if (state.password.trim() === '') {
    setState({ ...state, errorPassword: 'Please enter password.' });
    return false;
  }

  if (passwordMatch.length !== 0) {
    setState({
      ...state,
      errorPassword:
        'Password can only contain english letters, numbers and special characters, and must be at least 5 characters long, maximum 10 characters long.',
    });
    return false;
  }

  if (state.password.length < 5 || state.password.length > 10) {
    setState({
      ...state,
      errorPassword:
        'Password must be at least 5 characters long, maximum 10 characters long.',
    });
    return false;
  }

  return true;
};
