import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ibu Sarah D.',
    role: 'Orang Tua Anak Hebat',
    quote: 'SIPKA OT benar-benar mengubah cara kami mendukung terapi anak saya. Fitur video dan konten edukasinya sangat membantu!',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarFallback: 'SD',
    dataAiHint: 'woman portrait'
  },
  {
    name: 'Bapak Budi P.',
    role: 'Terapis Anak',
    quote: 'Sebagai terapis, platform ini memudahkan saya membuat konten dan memantau kemajuan anak. Sangat intuitif dan efektif.',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarFallback: 'BP',
    dataAiHint: 'man portrait'
  },
  {
    name: 'Ibu Rina A.',
    role: 'Orang Tua',
    quote: 'Anak saya sangat menikmati aktivitas berbasis alam yang ada di SIPKA OT. Kemandiriannya meningkat pesat. Terima kasih!',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarFallback: 'RA',
    dataAiHint: 'person smiling'
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimoni" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Apa Kata Mereka Tentang SIPKA OT
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kisah sukses dari para pengguna yang telah merasakan manfaat platform kami.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Quote className="w-12 h-12 text-primary mb-4" />
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                    <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
