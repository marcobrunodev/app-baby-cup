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
          links: 'What is it,NFT,Token,Team',
          linksPlay: 'Players,Staking,Marketplace',
          playGame: 'Play Game',
          buyCoin: 'Buy $BCUP',
          buyNft: 'Buy NFT',
          whitepaper: 'Whitepaper',
          addressCoin: '0x6c653948e86609ea9da23a3d1bab89f46e85326d',
          supplyTitle: 'Supply',
          supplyValue: '10.000.000',
          whatIsTitle: 'What is BLC?',
          whatIsDescription: 'Lorem ipsum dolor sit amet consectetur. Arcu nullam est iaculis donec. Vulputate diam quam quisque dictum lacus quisque. Morbi sit quam mauris pretium purus praesent mauris. Adipiscing vel etiam volutpat tempus mus nulla purus. Duis et ligula vel congue condimentum. Tincidunt porttitor erat scelerisque ligula faucibus. Massa massa consequat cum velit sit laoreet integer amet. Felis turpis in enim odio eu magna. Nec blandit sed potenti dui quis aliquam tellus id nibh. Semper dolor eget potenti ut turpis. Quam bibendum mauris eu etiam eleifend tristique odio viverra felis. Nunc ut nulla pretium fringilla at lacus. Et lacinia mauris habitant mi. Non pretium sit nunc a dignissim scelerisque in quisque. Varius sed gravida bibendum posuere pellentesque donec malesuada.',
          nftsTitle: 'NFT Card',
          tokenAllocationTitle: 'Token Allocation',
          coreTeamTitle: 'Core Team',
          footer: '© 2023 Baby luffy cup. All right reserved.',
          notFoundTitle: 'Not found',
          home: 'Go home',
          walletConnect: 'Connect Wallet',
          walletConnectConneting: 'Connecting...',
          playerTitle: 'Your players'
        }
      }
    }
  })