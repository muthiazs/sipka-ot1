import Link from 'next/link';
import { Logo, AppName } from './logo'; // Changed Leaf to Logo

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <AppName />
        </div>
        <div className="text-sm text-muted-foreground text-center md:text-right">
          <p>&copy; {currentYear} SIPKA OT. Hak Cipta Dilindungi.</p>
          <p>Didukung oleh @graciasfams</p>
          <p className="mt-1">
            <Link href="/kebijakan-privasi" className="hover:text-primary transition-colors">Kebijakan Privasi</Link>
            {' | '}
            <Link href="/syarat-ketentuan" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
