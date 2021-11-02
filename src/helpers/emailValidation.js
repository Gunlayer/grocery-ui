export const emailValidation = (state, setState) => {
  const regexEmail =
    /^((\w[^\W]+)[.-]?){1,}@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;
  const subst = ``;
  const emailMatch = state.email.replace(regexEmail, subst);

  if (state.email.trim() === '') {
    setState({ ...state, errorEmail: 'Please enter e-mail address.' });
    return false;
  }

  if (emailMatch.length !== 0) {
    setState({
      ...state,
      errorEmail: 'Please provide correct e-mail address.',
    });
    return false;
  }

  if (state.email.length < 5 || state.email.length > 25) {
    setState({
      ...state,
      errorEmail:
        'Email address must be at least 5 characters long, maximum 25 characters long.',
    });
    return false;
  }

  return true;
};
