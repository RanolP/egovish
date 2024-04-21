import { JSX } from '@builder.io/mitosis/jsx-runtime';

export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps): JSX.Element {
  return <button>{props.children}</button>;
}
