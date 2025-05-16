import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from '@pages/root'
import { Registration } from '@pages/registration'
import { Login } from '@pages/login'
import { ROUTER_PATHS } from '@shared/routes'

const routes = createBrowserRouter([
  {
    path: ROUTER_PATHS.Root,
    Component: Root,
    children: [
      {
        index: true,
      },
      {
        path: ROUTER_PATHS.Registration,
        Component: Registration,
      },
      {
        path: ROUTER_PATHS.Login,
        Component: Login,
      },
    ],
  },
])

export const Router = () => <RouterProvider router={routes} />
