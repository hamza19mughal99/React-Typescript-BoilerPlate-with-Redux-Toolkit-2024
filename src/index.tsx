import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import App from './App';
import './index.css';
import { store } from './Redux/store';

axios.defaults.baseURL = "BASE URL"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);