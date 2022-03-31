import "../styles/globals.css";
import { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "font-bold text-sm ",
          duration: 1500,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <Component {...pageProps} />;
    </div>
  );
}

export default App;
