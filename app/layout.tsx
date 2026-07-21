import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-25J06NJ0B6'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Devesh Maheshwari',
  description:
    'Portfolio of Devesh Maheshwari, a Purdue Computer Science & Electrical Engineering senior working across AI/ML, embedded systems, backend engineering, and research.',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport = {
  themeColor: '#0b0d10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/*
              Self-exclusion: visiting the site with ?noanalytics=1 sets a
              permanent flag in this browser's localStorage (and ?noanalytics=0
              clears it). Uses GA's own documented `ga-disable-<ID>` window
              flag, the same mechanism the official opt-out extension uses, so
              gtag.js silently skips sending hits for this browser from then on.
              Runs beforeInteractive so it's set before gtag.js ever loads.
            */}
            <Script id="ga-opt-out" strategy="beforeInteractive">
              {`
                (function () {
                  try {
                    var KEY = 'ga-disable-${GA_MEASUREMENT_ID}';
                    var params = new URLSearchParams(window.location.search);
                    if (params.get('noanalytics') === '1') {
                      localStorage.setItem(KEY, 'true');
                      console.info('[analytics] this browser is now excluded from tracking');
                    } else if (params.get('noanalytics') === '0') {
                      localStorage.removeItem(KEY);
                      console.info('[analytics] tracking re-enabled for this browser');
                    }
                    if (localStorage.getItem(KEY) === 'true') {
                      window[KEY] = true;
                    }
                  } catch (e) {}
                })();
              `}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
