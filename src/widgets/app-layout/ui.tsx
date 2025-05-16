import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { className } from './styles'

const { Header, Content, Footer } = Layout

export const AppLayout = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Layout className={className.layout}>
      <Header className={className.header}>
        <p className={className.logo}>Book Reader & Translator</p>
      </Header>
      <Content className={className.content}>
        <Outlet />
      </Content>
      <Footer className={className.footer}>
        <p className={className.description}>
          © {currentYear} Book Reader & Translator. Все права защищены.
        </p>
      </Footer>
    </Layout>
  )
}
