interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
    </div>
  );
}