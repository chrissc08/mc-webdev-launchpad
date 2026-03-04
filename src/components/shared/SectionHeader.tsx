interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ badge, title, description, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed text-lg mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
