import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.telegram.org/bot",
    timeout:10000
});

export { instance }