'use client';

import { FormEvent, useState } from 'react';
import { Input } from '../components/Input';
import { fetchData } from '../utils/api';
import { NewsletterResponse } from '../types/api';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<number>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, status } = await fetchData<NewsletterResponse>('newsletter', {
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
    });

    setMessage(data.message);
    setStatus(status);
  };

  const isSuccess = status === 200 || status === 201;

  return (
    <section className="flex flex-col items-center h-[494px]">
      <h1 className="text-[40px] mt-32 mb-16">Sign up for Newsletter</h1>
      <form className="flex gap-x-4" onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="email"
          required
          placeholder="Type your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="flex items-center justify-center ml-auto w-48 h-12 rounded-3xl bg-breally-purple">
          Submit
        </button>
      </form>
      <p
        className={`text-sm mt-12 ${
          isSuccess ? 'text-breally-green' : 'text-breally-error'
        }`}
      >
        {message}
      </p>
    </section>
  );
}
