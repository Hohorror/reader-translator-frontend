import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from '@pages/root'
import { Registration } from '@pages/registration'
import { Login } from '@pages/login'
import { Menu } from '@pages/menu'
import { ROUTER_PATHS } from '@shared/routes'
import { Profile } from '@pages/profile'
import { Library } from '@pages/library'
import { Dictionary } from '@pages/dictionary'

const routes = createBrowserRouter([
  {
    path: ROUTER_PATHS.Root,
    Component: Root,
    children: [
      {
        path: ROUTER_PATHS.Root,
        Component: () => <Menu />,
        children: [
          {
            path: ROUTER_PATHS.Root,
            Component: () => <Profile />,
          },
          {
            path: ROUTER_PATHS.Library,
            Component: () => <Library />,
          },
          {
            path: ROUTER_PATHS.Dictionary,
            Component: () => <Dictionary />,
          },
        ],
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
