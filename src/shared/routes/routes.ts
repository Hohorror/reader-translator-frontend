enum ROUTE {
  Root = '/',
  Registration = 'registration',
  Login = 'login',
  Library = 'library',
  Dictionary = 'dictionary',
}

export enum ROUTER_PATHS {
  Root = ROUTE.Root,
  Registration = `${ROUTE.Root}${ROUTE.Registration}`,
  Login = `${ROUTE.Root}${ROUTE.Login}`,
  Library = `${ROUTE.Root}${ROUTE.Library}`,
  Dictionary = `${ROUTE.Root}${ROUTE.Dictionary}`,
}
