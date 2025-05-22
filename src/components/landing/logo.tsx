import type { LucideProps } from 'lucide-react';
import { Sprout } from 'lucide-react';

export function Logo(props: LucideProps) {
  return <Sprout {...props} />;
}

export function AppName() {
  return (
    <span className="text-xl font-bold text-primary">
      SIPKA OT
    </span>
  );
}
