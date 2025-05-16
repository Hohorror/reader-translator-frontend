enum ROUTE {
  Root = '/',
  Registration = 'registration',
  Login = 'login',
}

export enum ROUTER_PATHS {
  Root = ROUTE.Root,
  Registration = `${ROUTE.Root}${ROUTE.Registration}`,
  Login = `${ROUTE.Root}${ROUTE.Login}`,
}
