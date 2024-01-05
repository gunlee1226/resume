import Information from './Information'
import { useTranslation } from 'react-i18next'

const WorkExperience = () => {
  const { t } = useTranslation()
  return <Information documents={t('experiences', { returnObjects: true })} />
}

export default WorkExperience
