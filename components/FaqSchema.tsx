// FAQPage structured data (schema.org JSON-LD). Emitting this alongside the
// visible FAQ markup is what makes the questions eligible for Google rich
// results and citable by answer engines — the visible <details> alone are not.
// Answers must be plain text (no JSX) to serialize cleanly.

export type FaqItem = { q: string; a: string };

export default function FaqSchema({ items }: { items: FaqItem[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
