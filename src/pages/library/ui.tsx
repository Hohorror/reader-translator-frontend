import { Button, Flex, Steps, Upload } from 'antd'
import { className } from './styles'

export const Library = () => {
  return (
    <div>
      <Steps
        current={0}
        items={[
          {
            title: 'Выбрать PDF файл',
          },
          {
            title: 'Загрузить файл в библиотеку',
          },
        ]}
      />
      <Flex
        className={className.container}
        gap={16}
        align="center"
      >
        <Upload>
          <Button>Выбрать PDF файл</Button>
        </Upload>
      </Flex>
      <p className={className.title}>Мои файлы</p>
      <p className={className.fileName}>У вас пока нет загруженных файлов</p>
    </div>
  )
}
