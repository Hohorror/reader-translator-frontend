import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { Helmet } from '@widgets/helmet'
import { PageContainer } from '@widgets/page-container'
import { ROUTER_PATHS } from '@shared/routes'
import { className } from './styles'

type FieldType = {
  username?: string
  email?: string
  password?: string
}

export const Registration = () => {
  return (
    <>
      <Helmet title="Регистрация" />
      <PageContainer>
        <Form
          name="registration"
          autoComplete="off"
          className={className.form}
          layout="vertical"
          requiredMark="optional"
        >
          <h1 className={className.title}>Регистрация</h1>
          <Form.Item<FieldType>
            label="Имя пользователя"
            name="username"
            rules={[{ required: true, message: 'Введите имя пользователя' }]}
          >
            <Input className={className.input} />
          </Form.Item>
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Введите имя email' }]}
          >
            <Input
              className={className.input}
              type="email"
            />
          </Form.Item>
          <Form.Item<FieldType>
            label="Пароль"
            name="password"
            rules={[
              { required: true, min: 6, message: 'Введите пароль используя как минимум 6 знаков' },
            ]}
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
            Уже есть аккаунт ?<Link to={ROUTER_PATHS.Login}> Войти </Link>
          </p>
        </Form>
      </PageContainer>
    </>
  )
}
