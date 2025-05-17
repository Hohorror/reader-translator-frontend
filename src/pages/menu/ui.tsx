import { PageContainer } from '@widgets/page-container'
import { className } from './styles'
import { Form, Tabs, TabsProps } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ROUTER_PATHS } from '@shared/routes'
import { useEffect, useState } from 'react'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Профиль',
    children: <Outlet />,
  },
  {
    key: '2',
    label: 'Библиотека',
    children: <Outlet />,
  },
  {
    key: '3',
    label: 'Словарь',
    children: <Outlet />,
  },
]

export const Menu = () => {
  const [activeKey, setActiveKey] = useState('1')
  const location = useLocation()
  const navigate = useNavigate()
  const onChange = (activeKey: string) => {
    let path = ROUTER_PATHS.Root
    if (activeKey === '2') path = ROUTER_PATHS.Library
    else if (activeKey === '3') path = ROUTER_PATHS.Dictionary
    navigate(path)
  }

  useEffect(() => {
    if (location.pathname === ROUTER_PATHS.Root) setActiveKey('1')
    else if (location.pathname === ROUTER_PATHS.Library) setActiveKey('2')
    if (location.pathname === ROUTER_PATHS.Dictionary) setActiveKey('3')
  }, [location])

  return (
    <PageContainer>
      <Form
        name="registration"
        autoComplete="off"
        className={className.form}
        layout="vertical"
        requiredMark="optional"
      >
        <h1 className={className.title}>Личный кабинет</h1>
        <p className={className.description}>Добро пожаловать, test11!</p>
        <Tabs
          activeKey={activeKey}
          items={items}
          onChange={onChange}
        />
      </Form>
    </PageContainer>
  )
}
