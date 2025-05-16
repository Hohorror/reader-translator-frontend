import { ComponentPropsType } from '@shared/types'
import { className } from './styles'

export const PageContainer = ({ children }: ComponentPropsType) => {
  return <div className={className.container}>{children}</div>
}
