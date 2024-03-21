import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="text-sm text-gray-500 sm:text-center">
          {t('update.description')} {t('update.date')} &nbsp;
        </span>
      </div>
    </footer>
  )
}
export default Footer
