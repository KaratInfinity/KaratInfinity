'use client';

import { FormEvent, Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { catalogProducts, productFamilies } from '@/lib/catalog';

function clean(value: FormDataEntryValue | null, max: number) {
  return String(value ?? '').replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}

function EnquiryFields({ kind }: { kind: string }) {
  const params = useSearchParams();
  const requested = params.get('product') || '';
  const [product, setProduct] = useState('');
  const [draft, setDraft] = useState('');
  const [mailto, setMailto] = useState('');

  useEffect(() => {
    if (catalogProducts.some((item) => item.slug === requested)) setProduct(requested);
  }, [requested]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = clean(data.get('name'), 100);
    const email = clean(data.get('email'), 160);
    const company = clean(data.get('company'), 160);
    const phone = clean(data.get('phone'), 30);
    const country = clean(data.get('country'), 80);
    const chosen = clean(data.get('product'), 160);
    const message = clean(data.get('message'), 2000);
    const selected = catalogProducts.find((item) => item.slug === chosen);
    const body = [
      kind,
      '',
      `Name: ${name}`,
      `Company: ${company}`,
      `Business email: ${email}`,
      `Phone: ${phone}`,
      `Country: ${country}`,
      `Interested product: ${selected?.name || chosen}`,
      '',
      'Requirement:',
      message,
    ].join('\n');
    setDraft(body);
    setMailto(`mailto:hello@karatinfinity.com?subject=${encodeURIComponent(`${kind} — ${selected?.name || company}`)}&body=${encodeURIComponent(body)}`);
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <h2>Request a demo.</h2>
      <p>Tell us which Karat Infinity product or solution you want to see.</p>
      <label>Name<input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></label>
      <label>Company<input name="company" autoComplete="organization" required maxLength={160} placeholder="Company name" /></label>
      <label>Business email<input type="email" name="email" autoComplete="email" required maxLength={160} placeholder="you@company.com" /></label>
      <label>Phone<input type="tel" name="phone" autoComplete="tel" required maxLength={30} pattern="[0-9+() .\\-]{6,30}" placeholder="+91" /></label>
      <label>Country<input name="country" autoComplete="country-name" required maxLength={80} placeholder="Country" /></label>
      <label>Interested product / solution
        <select name="product" required value={product} onChange={(event) => setProduct(event.target.value)}>
          <option value="" disabled>Select a product or solution</option>
          {productFamilies.map((family) => (
            <optgroup key={family.id} label={family.name}>
              {catalogProducts.filter((item) => item.family === family.id).map((item) => (
                <option key={item.slug} value={item.slug}>{item.name}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </label>
      <label>Requirement / message<textarea name="message" required rows={4} maxLength={2000} placeholder="What would you like to see?" /></label>
      <p className="form-note">Your details stay on this page until you open and send the email draft. No enquiry is sent automatically.</p>
      <button className="primary-button" type="submit">Request demo</button>
      {draft && (
        <div className="draft-result" role="status">
          <h3>Your email draft is ready.</h3>
          <p>Review the draft, then open your email app to send it to hello@karatinfinity.com.</p>
          <pre>{draft}</pre>
          <a className="primary-button" href={mailto}>Open email draft</a>
        </div>
      )}
    </form>
  );
}

export function EnquiryForm({ kind = 'Demo request' }: { kind?: string }) {
  return (
    <Suspense fallback={<div className="enquiry-form" aria-hidden="true" />}>
      <EnquiryFields kind={kind} />
    </Suspense>
  );
}
