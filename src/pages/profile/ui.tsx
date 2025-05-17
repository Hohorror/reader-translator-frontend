import { className } from './styles'

export const Profile = () => {
  return (
    <div>
      <p className={className.topText}>
        Вы успешно авторизованы в системе
        <br />
        Здесь будет размещена информация о вашем аккаунте
      </p>
      <p className={className.centerText}>Статистика</p>
      <ul>
        <li>Последний вход: сегодня</li>
        <li>
          Статус аккаунта: <span className={className.status}>активен</span>
        </li>
      </ul>
    </div>
  )
}
