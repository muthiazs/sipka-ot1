import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section id="cta" className="w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Siap Mendukung Kemandirian Anak Anda?
        </h2>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/80">
          Bergabunglah dengan SIPKA OT sekarang dan mulailah perjalanan terapi berbasis alam yang menyenangkan dan efektif.
        </p>
        <div className="mt-10">
          <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90">
            <Link href="/mulai">
              Mulai Sekarang Gratis
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
