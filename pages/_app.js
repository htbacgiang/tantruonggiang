import "../styles/globals.css";
import { Rajdhani } from "next/font/google";
import { Provider } from "react-redux";
import store from "../store";
import { SessionProvider } from "next-auth/react"
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Toaster } from "react-hot-toast";

let persistor = persistStore(store);
// Khởi tạo font Rajdhani từ Google Fonts
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--ltn__heading-font",
});
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className={rajdhani.variable}>
          <Toaster />
            <Component {...pageProps} />
          </div>
        </PersistGate>
      </Provider>
    </SessionProvider>

    
  );
}

export default MyApp;