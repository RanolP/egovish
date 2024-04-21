import React from 'react';
import tokens from '@egovish/tokens';

interface Props {
  scope?: string;
  korean: string;
  english?: string;
}

export default function Title({ scope, korean, english }: Props) {
  return (
    <>
      {scope && (
        <>
          <small style={{ fontWeight: '900', fontSize: '0.5em' }}>{scope}</small> <br />
        </>
      )}
      {korean}{' '}
      {english && (
        <span
          style={{
            fontWeight: 'normal',
            fontSize: '0.8em',
            color: tokens.color.palette.grayscale['60'],
          }}
        >
          ({english})
        </span>
      )}
    </>
  );
}
