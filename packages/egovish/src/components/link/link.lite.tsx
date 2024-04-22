import { JSX } from '@builder.io/mitosis/jsx-runtime';

export interface LinkProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function Link(props: LinkProps): JSX.Element {
  return <a>{props.children}</a>;
}
