import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from '@pages/root'
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
        path: ROUTER_PATHS.Auth,
      },
      {
        path: ROUTER_PATHS.Login,
      },
    ],
  },
])

export const Router = () => <RouterProvider router={routes} />
