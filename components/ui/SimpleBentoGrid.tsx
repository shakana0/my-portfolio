import { cn } from "@/lib/utils";

export const SimpleBentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", className)}>
      {children}
    </div>
  );
};

export const SimpleBentoItem = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm",
        className
      )}
    >
      <h3 className="text-purple font-semibold mb-2">{title}</h3>
      <p className="text-white-200 text-sm">{description}</p>
    </div>
  );
};
