import "../styles/globals.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function MyApp({ Component, pageProps }) {
  const [parent, enableAnimations] = useAutoAnimate();
  return (
    <div ref={parent}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
