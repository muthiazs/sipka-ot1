import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
export function HeroSection() {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto grid max-w-screen-xl items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
            SIPKA OT: <span className="text-primary">Kemandirian Anak</span> Melalui Terapi Okupasi dengan pendekatan livestock daily living
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Platform inovatif yang mendukung tumbuh kembang anak berkebutuhan khusus dengan pendekatan terapi berbasis peternakan dan pertanian yang menyenangkan.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button size="lg" asChild>
              <Link href="#fitur">
                Pelajari Lebih Lanjut
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/mulai">
                Mulai Sekarang
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://www.refoindonesia.com/wp-content/uploads/2022/01/Menanam-Pohon-Sustainable-Living-Di-Sekolah.jpg"
            alt="Ilustrasi anak bermain di alam dengan ceria"
            width={800}
            height={600}
            className="rounded-xl shadow-2xl object-cover"
            data-ai-hint="kids nature"
            priority
          />
        </div>
      </div>
    </section>
  );
}
