import '../styles/globals.css'
import 'animate.css';
import 'material-icons/iconfont/material-icons.css';
import store from "../components/store";
import {Provider} from "react-redux";

function MyApp({ Component, pageProps }) {
  const design = (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
  return design;
}

export default MyApp
