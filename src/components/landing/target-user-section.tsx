import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, ClipboardEdit, UserCog } from 'lucide-react'; // UserCog instead of ClipboardEdit for variety

const userBenefits = [
  {
    icon: Users,
    title: 'Untuk Orang Tua',
    description: 'Pantau perkembangan anak Anda dengan mudah, dapatkan materi edukasi, dan terhubung dengan terapis profesional.',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/50',
    iconColor: 'text-primary'
  },
  {
    icon: UserCog,
    title: 'Untuk Terapis',
    description: 'Buat dan bagikan konten terapi inovatif, kelola sesi dengan efisien, dan berikan umpan balik yang berdampak.',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/50',
    iconColor: 'text-accent'
  },
];

export function TargetUserSection() {
  return (
    <section id="tentang" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Didesain untuk Anda
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            SIPKA OT hadir untuk memberdayakan orang tua dan terapis dalam mendukung potensi terbaik anak.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {userBenefits.map((benefit, index) => (
            <Card key={index} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 ${benefit.borderColor}`}>
              <CardHeader className="items-center text-center">
                <div className={`p-4 rounded-full ${benefit.bgColor} mb-4`}>
                  <benefit.icon className={`h-10 w-10 ${benefit.iconColor}`} />
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-md text-muted-foreground">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
