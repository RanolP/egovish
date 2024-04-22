import { JSX } from '@builder.io/mitosis/jsx-runtime';
import tokens from '@egovish/tokens';

export interface LinkProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  hideIndicator?: boolean;
  color?: string;
  icon?: JSX.Element;
}

export default function Link(props: LinkProps): JSX.Element {
  return (
    <a
      {...props}
      style={Object.assign(
        {},
        ...(
          [
            !props.hideIndicator && { textDecoration: 'underline' },
            props.color ? { color: props.color } : { color: tokens.color.primary[50] },
          ] satisfies Array<JSX.CSS | undefined | boolean>
        ).filter(Boolean),
      )}
    >
      {props.children} {props.icon}
    </a>
  );
}
