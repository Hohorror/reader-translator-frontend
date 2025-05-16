import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { PageContainer } from '@widgets/page-container'
import { Helmet } from '@widgets/helmet'
import { ROUTER_PATHS } from '@shared/routes'
import { className } from './styles'

type FieldType = {
  username?: string
  password?: string
}

export const Login = () => {
  return (
    <>
      <Helmet title="Авторизация" />
      <PageContainer>
        <Form
          name="auth"
          autoComplete="off"
          className={className.form}
          layout="vertical"
          requiredMark="optional"
        >
          <h1 className={className.title}>Добро пожаловать !</h1>
          <p className={className.description}>
            Удобный сервис для чтения и изучения книг с интерактивным переводом и озвучиванием
            текста
          </p>
          <Form.Item<FieldType>
            label="Имя пользователя"
            name="username"
            rules={[{ required: true, message: 'Введите имя пользователя' }]}
          >
            <Input className={className.input} />
          </Form.Item>
          <Form.Item<FieldType>
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Введите пароль' }]}
          >
            <Input.Password className={className.input} />
          </Form.Item>

          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              className={className.submitBtn}
            >
              Войти
            </Button>
          </Form.Item>

          <p className={className.bottomText}>
            Нет аккаунта ?<Link to={ROUTER_PATHS.Registration}> Зарегестрироваться </Link>
          </p>
        </Form>
      </PageContainer>
    </>
  )
}
