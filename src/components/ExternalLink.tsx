import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { ArrowUpRightIcon } from './Icons';

type ExternalLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> & {
  showIcon?: boolean;
};

export function ExternalLink({
  children,
  className = '',
  showIcon = true,
  ...props
}: ExternalLinkProps) {
  return (
    <a className={className} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      {showIcon && <ArrowUpRightIcon className="external-link__icon" />}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
