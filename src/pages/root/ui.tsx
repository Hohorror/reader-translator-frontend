import { ScrollRestoration } from 'react-router-dom'
import { AppLayout } from '@widgets/app-layout'

export const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <AppLayout />
    </>
  )
}
