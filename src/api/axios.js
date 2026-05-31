import axios from "axios";

// Local backend API instance
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000
});

// Telegram API instance
const telegram = axios.create({
    baseURL: "https://api.telegram.org/bot",
    timeout: 10000
});

export { api, telegram };