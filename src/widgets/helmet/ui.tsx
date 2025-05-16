import { Helmet } from 'react-helmet'

type HelmetComponentProps = {
  title?: string
}

const defaultTitle = 'Book Reader & Translator'

export const HelmetComponent = ({ title }: HelmetComponentProps) => {
  const newTitle = title ? `${title} | ${defaultTitle}` : defaultTitle

  return (
    <Helmet>
      <title>{newTitle}</title>
    </Helmet>
  )
}
