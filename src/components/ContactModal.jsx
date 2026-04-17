import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useShareStore from '../Store/Store';

const ContactModal = ({closeModal}) => {
  const { t } = useTranslation(); 

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [telegram, setPassword] = useState('');


  const {isModal} = useShareStore();



  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `
    Yangi mijoz:
    Ism: ${name}
    Familya: ${surname}
    Tel raqami: ${phone}
    Telegram user: ${telegram}
    `;

    const token = '7551301306:AAEVOCGkYjK9NrUD4kWZFMra6VbyHf0hp5Q';
    const chat_id = '-1002336918728'; 
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chat_id,
          text: message,
        }),
      });
      alert('Information sent to Telegram!');
    } catch (error) {
      console.error('Error sending message to Telegram', error);
      alert('Failed to send information.');
    }

    closeModal();
  };

  if (!isModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative border border-gray-300">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          &#x2715;
        </button>

        <div className="flex flex-col items-center">
          <div className="mb-4">
            <div className="w-14 h-14 bg-lime-400 rounded-full flex justify-center items-center border-4 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A4.992 4.992 0 0112 15c1.657 0 3.156.676 4.121 1.804M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-4">{t('modal.titel')}</h2>

          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t('modal.ism')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                  required
                />
                <input
                  type="text"
                  placeholder={t('modal.tel')}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t('modal.famila')}
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                  required
                />
                <input
                  type="text"
                  placeholder={t('modal.telegram')}
                  value={telegram}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                  required
                />
              </div>
            </div>

           

            <div className="text-center">
              <button
                type="submit"
                className="bg-lime-400 text-white font-semibold py-2 px-6 rounded-lg hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
              >
                {t('modal.yubor')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
