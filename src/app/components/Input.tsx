import { InputHTMLAttributes } from 'react';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className="h-12 w-[416px] rounded-3xl px-12 bg-breally-light-gray placeholder-breally-black"
    {...props}
  />
);
