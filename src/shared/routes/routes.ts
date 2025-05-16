enum ROUTE {
  Root = '/',
  Auth = 'auth',
  Login = 'login',
}

export enum ROUTER_PATHS {
  Root = ROUTE.Root,
  Auth = `${ROUTE.Root}${ROUTE.Auth}`,
  Login = `${ROUTE.Root}${ROUTE.Login}`,
}
