import React from "react";
import { ExternalLink } from "./ExternalLink";

interface SmartLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

const isExternal = (href?: string) =>
  href?.startsWith("http");

export const SmartLink: React.FC<SmartLinkProps> = ({
  href = "",
  children,
  ...props
}) => {
  if (isExternal(href)) {
    return (
      <ExternalLink href={href} {...props}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};
