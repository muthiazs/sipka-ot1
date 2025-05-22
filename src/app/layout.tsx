import type {Metadata} from 'next';
import { Inter } from 'next/font/google'; // Changed to Inter for a more approachable feel as per typography guidelines
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Added Toaster

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans', // Use --font-sans for Inter
});

// const geistSans = Geist({ // Removed Geist
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({ // Removed Geist Mono
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'SIPKA OT Landing',
  description: 'Mendukung Kemandirian Anak Melalui Terapi Berbasis Alam',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
