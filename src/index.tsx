import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from './App';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './i18n/en.json';
import ko from './i18n/ko.json';
import jp from './i18n/jp.json';
import axios from 'axios';

const initialize = () => {
  // language
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en,
        ko,
        jp
      },
      lng: "ko",
      fallbackLng: "ko",
      interpolation: {
        escapeValue: false
      }
    });
  // axios
  console.log(process.env.REACT_APP_API_URL)
  axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL : '/api';
  axios.interceptors.response.use(
    (response) => {
      const { data } = response;
      return data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

initialize();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

reportWebVitals();