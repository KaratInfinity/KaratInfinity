import Link from 'next/link';
import { UiIcon } from './UiIcon';

export function FamilyCards({
  cards,
}: {
  cards: { href: string; eyebrow: string; title: string; text: string; action: string }[];
}) {
  return (
    <div className="family-grid">
      {cards.map((card) => (
        <Link key={card.href} href={card.href} className="family-card">
          <span className="micro-label">{card.eyebrow}</span>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
          <span className="text-link">{card.action} <UiIcon name="arrow" /></span>
        </Link>
      ))}
    </div>
  );
}
