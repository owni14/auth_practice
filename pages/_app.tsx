import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/layout/Layout';
import { GlobalStyle } from '../styles/global.style';
import { theme } from '../styles/theme';
import { AuthContextProvider } from '../store/auth_context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContextProvider>
    </Layout>
  );
}
