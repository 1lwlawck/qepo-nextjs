import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import { ThemeProvider } from "~/components/theme-provider";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div
        className={`${GeistSans.className} absolute inset-0 flex h-full min-h-screen w-full flex-col items-center justify-center gap-y-8 bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]`}
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
