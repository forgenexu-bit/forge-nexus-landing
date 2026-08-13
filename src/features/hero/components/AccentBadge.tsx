import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, type LucideIcon } from "lucide-react";

interface AccentBadgeProps {
  icon: LucideIcon;
  label: string;
}

/** Badge de diferenciador clave del Hero, con check + ícono temático. */
export function AccentBadge({ icon: Icon, label }: AccentBadgeProps) {
  return (
    <Badge icon={<CheckCircle2 className="h-3.5 w-3.5 text-cyan-blue" />}>
      <Icon className="h-3.5 w-3.5 text-muted-foreground" />
      {label}
    </Badge>
  );
}
