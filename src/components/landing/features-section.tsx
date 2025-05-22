import { Card, CardContent } from '@/components/ui/card';
import { PlaySquare, BookOpenText, FileCheck2, Leaf, MountainSnow, Smile } from 'lucide-react';

const features = [
  {
    icon: PlaySquare,
    title: 'Video Edukasi Interaktif',
    description: 'Akses beragam video edukasi yang dirancang oleh terapis ahli untuk mendukung pembelajaran anak melalui aktivitas berbasis alam.',
    dataAiHint: 'educational video'
  },
  {
    icon: BookOpenText,
    title: 'Konten Terapi Terstruktur',
    description: 'Jelajahi modul dan materi terapi berbasis alam yang menarik, interaktif, dan disesuaikan dengan kebutuhan anak.',
    dataAiHint: 'interactive content'
  },
  {
    icon: FileCheck2,
    title: 'Asesmen oleh Terapis Profesional',
    description: 'Dapatkan asesmen komprehensif dan rencana terapi personal dari terapis bersertifikasi melalui platform kami.',
    dataAiHint: 'assessment report'
  },
  {
    icon: Leaf, // Pertanian
    title: 'Modul Pertanian Edukatif',
    description: 'Kenalkan anak pada dunia pertanian melalui kegiatan menanam dan merawat tanaman yang menyenangkan.',
    dataAiHint: 'gardening children'
  },
  {
    icon: MountainSnow, // Peternakan/Alam luas
    title: 'Eksplorasi Alam & Satwa',
    description: 'Ajak anak belajar tentang berbagai jenis satwa dan ekosistem alam melalui konten interaktif.',
    dataAiHint: 'nature exploration'
  },
  {
    icon: Smile, // Kegiatan ramah anak
    title: 'Aktivitas Kreatif & Motorik',
    description: 'Stimulasi kreativitas dan kemampuan motorik anak dengan berbagai permainan dan aktivitas ramah anak.',
    dataAiHint: 'children playing'
  },
];

export function FeaturesSection() {
  return (
    <section id="fitur" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Fitur Unggulan SIPKA OT
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Temukan berbagai alat dan sumber daya untuk mendukung terapi anak Anda.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <feature.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
