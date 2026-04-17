import React, { useState } from "react";
import Container from "../utils/Utils";
import logo from "../assets/loggg.png";
import Telegram from "../assets/telegram.png"; 
import Insata from "../assets/instagram.png"; 
import facebook from "../assets/facebook.png";
import i18next from "../language/i18next";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCancelCircle } from "react-icons/im";
import "./Alll.css";

const Nav = () => {
  const { t } = useTranslation();
  function changeLang(lang) {
    i18next.changeLanguage(lang);
  }
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`py-6 bg-main1 sticky top-0 left-0 z-50 ${
        open ? "overflow-visible" : "overflow-hidden"
      }`}
    >
      <Container className="navas">
        <div className="flex items-center navbar">
          <div className="flex-1">
            <a href="#">
              <img src={logo} alt="" className="logos" />
            </a>
          </div>
          <div className="lg:flex lg:gap-x-36 hidden">
            <ul className="flex gap-x-8">
              <li>
                <a
                  href="#"
                  style={{ color: "rgb(28, 49, 97)" }}
                  className="hover:text-black transition-colors duration-300 text-xl"
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "rgb(28, 49, 97)" }}
                  className="hover:text-black transition-colors duration-300 text-xl"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "rgb(28, 49, 97)" }}
                  className="hover:text-black transition-colors duration-300 text-xl"
                >
                  {t("nav.tours")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "rgb(28, 49, 97)" }}
                  className="hover:text-black transition-colors duration-300 text-xl"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
            <div className="flex gap-x-3 items-center">
              <button
                onClick={() => changeLang("ru")}
                style={{ color: "rgb(28, 49, 97)" }}
                className="hover:text-black text-xl transition-colors duration-300 "
              >
                ru
              </button>
              <button
                onClick={() => changeLang("en")}
                style={{ color: "rgb(28, 49, 97)" }}
                className="hover:text-black text-xl transition-colors duration-300"
              >
                eng
              </button>
              <button
                onClick={() => changeLang("uz")}
                style={{ color: "rgb(28, 49, 97)" }}
                className="hover:text-black text-xl transition-colors duration-300"
              >
                uz	
              </button>
              <a
                className="text-white text-xl hover:text-black transition-colors duration-300"
                href="https://t.me/tourland_uz"
              >
                <img src={Telegram} alt="Telegram" className="w-6 h-6" />
              </a>
              <a
                className="text-white text-xl hover:text-black transition-colors duration-300"
                href="https://www.instagram.com/tourland_uz?igsh=MTFlMzIzazMxbXdvNw%3D%3D&utm_source=qr"
              >
                <img src={Insata} alt="Instagram" className="w-6 h-6" />
              </a>
			  <a
                className="text-white text-xl hover:text-black transition-colors duration-300"
                href="https://www.facebook.com/profile.php?id=61565792592998&mibextid=LQQJ4d"
              >
                <img src={facebook} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Mobil menyu */}
          <div className="block lg:hidden">
            {!open ? (
              <RxHamburgerMenu
                onClick={() => setOpen(true)}
                className="text-4xl hamcol"
              />
            ) : (
              <ImCancelCircle
                onClick={() => setOpen(false)}
                className="text-4xl hamcol"
              />
            )}
          </div>

          {/* Mobil menyu tarkibi */}
          <div
            className={`lg:hidden bg-[#f7f7f7] w-[70%] py-8 absolute top-[100%] left-[50%] ${
              !open ? "translate-x-[120%]" : "translate-x-[-50%]"
            } transition-transform duration-500`}
          >
            <ul className="flex flex-col gap-6 items-center">
              <li
                onClick={() => setOpen(false)}
                className="border-b-[1px] border-[#afafaf] w-full text-center pb-4"
              >
                <a
                  className="text-black hover:text-black transition-colors duration-300 text-lg"
                  href="#"
                >
                  {t("nav.home")}
                </a>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="border-b-[1px] border-[#afafaf] w-full text-center pb-4"
              >
                <a
                  className="text-black hover:text-black transition-colors duration-300 text-lg"
                  href="#destination"
                >
                  {t("nav.about")}
                </a>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="border-b-[1px] border-[#afafaf] w-full text-center pb-4"
              >
                <a
                  className="text-black hover:text-black transition-colors duration-300 text-lg"
                  href="#weekly"
                >
                  {t("nav.tours")}
                </a>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="border-b-[1px] border-[#afafaf] w-full text-center pb-4"
              >
                <a
                  className="text-black hover:text-black transition-colors duration-300 text-lg"
                  href="#info"
                >
                  {t("nav.contact")}
                </a>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="border-b-[1px] border-[#afafaf] w-full text-center pb-4"
              >
                <button
                  onClick={() => changeLang("ru")}
                  className="text-black hover:text-black transition-colors duration-300"
                >
                  RU
                </button>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="border-b-[1px] border-[#afafaf] w-full text-center pb-4"
              >
                <button
                  onClick={() => changeLang("en")}
                  className="text-black hover:text-black transition-colors duration-300"
                >
                  ENG
                </button>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="border-b-[1px] border-[#afafaf] w-full text-center pb-4"
              >
                <button
                  onClick={() => changeLang("uz")}
                  className="text-black hover:text-black transition-colors duration-300"
                >
                  UZ
                </button>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="border-b-[1px] border-[#afafaf] w-full text-center pb-4"
              >
                <a
                  className="text-black text-xl hover:text-black transition-colors duration-300 flex justify-center"
                  href="https://t.me/tourland_uz"
                >
                 <img src={Telegram} alt="Telegram" className="w-6 h-6" />
                </a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a
                  className="text-black text-xl hover:text-black transition-colors duration-300"
                  href="https://www.instagram.com/tourland_uz?igsh=MTFlMzIzazMxbXdvNw%3D%3D&utm_source=qr"
                >
                  <img src={Insata} alt="Instagram" className="w-6 h-6" />
                </a>
              </li>
			  <li onClick={() => setOpen(false)}>
			  <a
                className="text-white text-xl hover:text-black transition-colors duration-300"
                href="https://www.facebook.com/profile.php?id=61565792592998&mibextid=LQQJ4d"
              >
                <img src={facebook} alt="Instagram" className="w-6 h-6" />
              </a>
              </li>

            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nav;
