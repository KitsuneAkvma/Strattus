const selectSessionLoginForm = (state: any) => state.session.loginForm;
const selectSessionRegisterForm = (state: any) => state.session.registerForm;
const selectSessionUser = (state: any) => state.session.user;
const selectSessionIsAuth = (state: any) => state.session.isAuth;
const selectSessionToken = (state: any) => state.session.token;

export {
  selectSessionLoginForm,
  selectSessionRegisterForm,
  selectSessionUser,
  selectSessionIsAuth,
  selectSessionToken,
};
