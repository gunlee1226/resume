import Information from './Information'
import { useTranslation } from 'react-i18next'

const Education = () => {
  const { t } = useTranslation()

  return <Information documents={t('education', { returnObjects: true })} />
}

export default Education
