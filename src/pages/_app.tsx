import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const onExitComplete = () => {
    window.scrollTo({ top: 0 });
  };
  const router = useRouter();
  const pages = router.asPath;
  return (
    <AnimatePresence
      onExitComplete={onExitComplete}
      initial={false}
      mode="wait"
    >
      <Component key={pages} {...pageProps} />
    </AnimatePresence>
  );
}
