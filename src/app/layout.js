import GlobalStyles from '@/components/GlobalStyles';
import StyledComponentsRegistry from '@/utils/registry';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={beVietnamPro.className}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}