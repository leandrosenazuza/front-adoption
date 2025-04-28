import { useEffect, useState } from 'react';
import PetsIcon from '@mui/icons-material/Pets';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import paymentMethods from '../../../assets/images/payment-methods.svg';
import { useLocation } from 'react-router-dom';

const footerLinks = [
  {
    title: "Sobre",
    links: [
      {
        name: "Contato",
        redirect: "https://www.mykart.com/helpcentre",
      },
      {
        name: "Sobre nós",
        redirect: "https://www.mykart.com/about-us",
      },
      {
        name: "Nossos pets",
        redirect: "https://www.mykartcareers.com",
      },
      {
        name: "Parceiros",
        redirect: "https://stories.mykart.com",
      },
      {
        name: "Doação de Pet",
        redirect: "https://stories.mykart.com/category/top-stories/news",
      },
      {
        name: "Doação de dinheiro",
        redirect: "https://www.mykartwholesale.com",
      },
      {
        name: "Doação de alimentos e materiais",
        redirect: "https://www.mykart.com/corporate-information",
      },
    ]
  },
  {
    title: "Ajuda",
    links: [
      {
        name: "Adotar um pet",
        redirect: "https://www.mykart.com/pages/payments",
      },
      {
        name: "Doar um pet",
        redirect: "https://www.mykart.com/pages/shipping",
      },
      {
        name: "Doação em dinheiro e materiais",
        redirect: "https://www.mykart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
      },
      {
        name: "Perguntas frequentes",
        redirect: "https://www.mykart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
      }
    ]
  },
  {
    title: "Politica",
    links: [
      {
        name: "Nossa política",
        redirect: "https://www.mykart.com/pages/returnpolicy",
      },
      {
        name: "Termos de adoção",
        redirect: "https://www.mykart.com/pages/terms",
      },
      {
        name: "Segurança",
        redirect: "https://www.mykart.com/pages/paymentsecurity",
      },
      {
        name: "Privacidade",
        redirect: "https://www.mykart.com/pages/privacypolicy",
      },
      {
        name: "Mapa do site",
        redirect: "https://www.mykart.com/sitemap",
      },
      {
        name: "Compliance",
        redirect: "https://www.mykart.com/pages/ewaste-compliance-tnc",
      },
    ]
  },
  {
    title: "social",
    links: [
      {
        name: "Facebook",
        redirect: "https://www.facebook.com/mykart",
      },
      {
        name: "Twitter",
        redirect: "https://twitter.com/mykart",
      },
      {
        name: "YouTube",
        redirect: "https://www.youtube.com/mykart",
      }
    ]
  }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-7/12 flex flex-col sm:flex-row">

              {footerLinks.map((el, i) => (
                <div className="w-full sm:w-1/5 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                  <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                  {el.links.map((item, i) => (
                    <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                  ))}

                </div>
              ))}

            </div>

            <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div>
            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Quem somos</h2>
                <p className="mt-2 leading-5">Área de atuação,<br />
                  Missão, visão e valores<br />
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Nosso endereço:</h2>
                <p className="mt-2 leading-5">R. 9, chacara 165,<br />
                  Portal dos Ipê,s<br />
                  Ribeirão Preto - SP,<br />
                  CEP 14094-608,<br />
                  Telefone: <a className="text-primary-blue" href="(16) 98816-8301">Telefone: (16) 98816-8301</a>
                </p>
              </div>
            </div>

          </footer>
          {/* <!-- footer ends --> */}

          <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
            <a href="https://seller.mykart.com/sell-online" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><PetsIcon sx={{ fontSize: "20px" }} /></span> Adote um pet
            </a>
            <a href="https://brands.mykart.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><StarsIcon sx={{ fontSize: "20px" }} /></span> Doe um pet
            </a>
            <a href="https://www.mykart.com/the-gift-card-store" rel="noreferrer" target="_blank" className="flex items-center gap-2">
              <span className="text-yellow-400"><CardGiftcardIcon sx={{ fontSize: "20px" }} /></span> Faça uma doação
            </a>
            <a href="https://www.mykart.com/helpcentre" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><HelpIcon sx={{ fontSize: "20px" }} /></span> Ajuda
            </a>

            <span>&copy; -{new Date().getFullYear()} Univesp - DRP10-PJI310-A2025S1-T002</span>
            {/*<img draggable="false" src={paymentMethods} alt="Card Payment" />*/}
          </div>
        </>
      )}
    </>
  )
};

export default Footer;
