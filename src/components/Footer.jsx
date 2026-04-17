import React from 'react';
import footerImg from "../assets/footer.jpg";
import { useTranslation } from 'react-i18next';
import Telegram from "../assets/telegram.png"; 
import Insata from "../assets/instagram.png"; 
import facebook from "../assets/facebook.png";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative pt-8 pb-6" style={{ backgroundColor: "#01294c" }}>
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      ></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">{t('footer.h2')} </h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
			{t('footer.p')}
            </h5>
            <div className="mt-6 flex gap-2 ">
              <button
                className=" flex items-center justify-center bg-white text-blue-400 shadow-lg font-normal h-11 w-11 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <img src={Telegram} alt="" className="logoss object-contain" />
              </button>
              <button
                className="flex items-center justify-center bg-white text-blue-600 shadow-lg font-normal h-11 w-11 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <img src={Insata} alt="" className="logoss object-contain" />
              </button>
			  <button
                className="flex items-center justify-center bg-white text-blue-600 shadow-lg font-normal h-11 w-11 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <img src={facebook} alt="" className="logoss object-contain" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                     Bosh Sahifa
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Biz Haqimizda
                    </a>
                  </li>
                 
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                     Turlar
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Kontaktlar
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}Limsa{" "}
              <a
                href="https://www.limsa.uz/uz"
                className="text-white hover:text-gray-900"
              >
                Creative Tim
              </a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
