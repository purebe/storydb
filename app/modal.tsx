'use client';
import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

export function Modal({ children }: Props) {
  const [ visible, setVisibility ] = useState(true);
  const open = () => setVisibility(true);
  const close = () => setVisibility(false);
  return (
    <div className="absolute bg-slate-50 text-slate-900 transition transition-opacity transition-transform" style={{opacity: visible ? 1 : 0}}>
      <button onClick={close}>Close</button>
    </div>
  );
}
