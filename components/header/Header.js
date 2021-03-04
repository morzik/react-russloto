import Link from 'next/link';
import React from 'react';
import { buttons } from './copyright';

export default function Header() {
  const buttonComponents = buttons.map(({ href, name }) => (
    <Link href={href} key={name}>
      <a>{name}</a>
    </Link>
  ));

  return (
    <div className={'header-wrapper'}>
      <nav>{buttonComponents}</nav>
    </div>
  );
}
