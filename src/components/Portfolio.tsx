import Information from './Information'
import { useTranslation } from 'react-i18next'

const Portfolio = () => {
  const { t } = useTranslation()

  return <Information documents={t('portfolio', { returnObjects: true })} />
}

export default Portfolio
