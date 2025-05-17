import { className } from './styles'

export const Dictionary = () => {
  return (
    <div>
      <p className={className.title}>Мой словарь</p>
      <p className={className.description}>В вашем словаре пока нет слов</p>
    </div>
  )
}
