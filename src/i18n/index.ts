import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDector from 'i18next-browser-languagedetector'

i18next
  .use(initReactI18next)
  .use(LanguageDector)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          links: 'NFT,Whitepaper,Team,Contact',
          playGame: 'Play Game',
          bannerTitle: 'Buy $BCUP',
          whitepaper: 'Whitepaper'
        }
      }
    }
  })