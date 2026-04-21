import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const Forma = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    people: "",
    questions: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    
    // For phone field, ensure it starts with +998
    if (e.target.name === "phone") {
      // Remove all non-digits except the leading +
      value = value.replace(/[^\d+]/g, "");
      
      // If user tries to remove the +998, add it back
      if (!value.startsWith("+998")) {
        value = "+998" + value.replace(/\D/g, "");
      }
      
      // Limit to +998 + 9 digits (total 13 characters)
      if (value.length > 13) {
        value = value.slice(0, 13);
      }
    }
    
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Telegram bot token and chat ID
    const botToken = "8322069796:AAHh6HTXIst5qreGW-vJPEM46Y7l_GCKUW0";
    const chatId = "-1003806144546";
    
    // Format the message
    const message = `
📋 <b>Yangi Ariza</b>

👤 <b>Ism:</b> ${formData.name}
📱 <b>Telefon:</b> ${formData.phone}
📅 <b>Sana:</b> ${formData.date === "1" ? "25–26 Aprel" : formData.date === "2" ? "28–29 Aprel" : "Tanlanmagan"}
👥 <b>Kishi soni:</b> ${formData.people}
💬 <b>Izoh:</b> ${formData.questions || "Yo'q"}
    `;
    
    try {
      // Send message to Telegram bot
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );
      
      if (response.ok) {
        setShowModal(true);
        setTimeout(() => {
          window.location.href = "https://t.me/tourland_uz";
        }, 3000);
      } else {
        alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
      }
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
    }
  };

  return (
    <div>
      <Nav />

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503428593586-e225b39bddfe')",
        }}
      >
        {/* Dark blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-900/70" />

        <div className="relative container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* LEFT TEXT */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-500/15 border border-yellow-500/40 text-yellow-400 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase mb-8">
              <span>📅</span>
              <span>Aprel 2025 — Cheklangan o'rinlar</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Xitoyda ishlab <br />
              chiqarish bo'yicha <br />
              <span className="text-yellow-400">xalqaro ko'rgazma</span>
            </h1>

            {/* Description */}
            <p className="text-blue-100/90 text-lg leading-relaxed mb-10 max-w-lg">
              Bevosita ishlab chiqaruvchilar bilan tanishing, sifatli mahsulot
              va arzon narxlardan foydalaning. Biz tashkiliy ishlarning
              hammasini o'z zimmamizga olamiz.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-blue-100">
              <span className="flex items-center gap-2">
                <span className="text-yellow-400">🛡</span> Viza yordami
              </span>
              <span className="flex items-center gap-2">
                <span className="text-yellow-400">👥</span> Tarjimon xizmati
              </span>
              <span className="flex items-center gap-2">
                <span className="text-yellow-400">📅</span> 2 ta sana tanlovi
              </span>
            </div>

            {/* <a
              href="#form"
              className="inline-flex items-center gap-2 mt-10 text-white/80 hover:text-white text-sm transition"
            >
              Ro'yxatdan o'tish <span>↓</span>
            </a> */}
          </div>

          {/* FORM */}
          <div
            id="form"
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 w-full max-w-md mx-auto lg:ml-auto"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Ro'yxatdan o'tish
            </h2>
            <p className="text-[#000000] text-sm mb-6">
              Ma'lumotlaringizni qoldiring — biz siz bilan bog'lanamiz.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Ismingiz va familiyangiz
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-50/50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition border-[#000000]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Telefon raqamingiz
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+998 99 999 99 90"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-50/50 border border-[#000000] border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Qaysi sanadagi ko'rgazmaga qatnashmoqchisiz?
                </label>
                <select
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#000000] border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition appearance-none bg-no-repeat bg-[right_1rem_center]"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='none' stroke='%236B7280' stroke-width='2' d='M1 1l5 5 5-5'/%3E%3C/svg%3E\")",
                  }}
                  required
                >
                  <option value="">Sanani tanlang</option>
                  <option value="1">25–26 Aprel ko'rgazmasi</option>
                  <option value="2">28–29 Aprel ko'rgazmasi</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Necha kishi bo'lasizlar?
                </label>
                <input
                  type="number"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#000000] border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                  min="1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Qo'shimcha izoh (ixtiyoriy)
                </label>
                <textarea
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#000000] border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition resize-none"
                  rows="3"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 border-[#000000] to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition"
              >
                Arizani yuborish
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              ✓
            </div>
            <h3 className="text-xl font-bold text-gray-900">Muvaffaqiyatli!</h3>
            <p className="text-gray-500 mt-2">
              Ma'lumotlaringiz yuborildi va tez orada siz bilan bog'lanamiz.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Forma;
