import type { AppProps } from "next/app";
import Global from "../styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //setting global styles
    //page rendering
    <>    
      <Global/> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
