import React from "react";
import { ArrowUpRight } from "../icons";

export interface ExternalLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  showIcon?: boolean;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  children,
  showIcon = true,
  className,
  ...props
}) => {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1 hover:underline ${className ?? ""}`}
    >
      {children}
      {showIcon && (
        <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
    </a>
  );
};
