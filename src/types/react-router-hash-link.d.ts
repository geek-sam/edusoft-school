declare module "react-router-hash-link" {
  import type { ComponentType } from "react";
  import type { LinkProps } from "react-router-dom";

  export interface HashLinkProps extends LinkProps {
    smooth?: boolean;
    elementId?: string;
    scroll?: (element: HTMLElement) => void;
    timeout?: number;
  }

  export const HashLink: ComponentType<HashLinkProps>;
}