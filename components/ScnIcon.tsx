// Shared icon set for scenario packs — category tiles and workflow steps.
// Small stroke glyphs, one visual family.

const PATHS: Record<string, string> = {
  // categories
  reconciliation: '<path d="m8 8-4 4 4 4"/><path d="m16 16 4-4-4-4"/><path d="M4 12h16"/>',
  ap: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 10h18"/>',
  collections: '<path d="M15.5 13.5l-2 1.5a11 11 0 0 1-5-5l1.5-2L7.5 4H4a1.5 1.5 0 0 0-1.5 1.6A15.5 15.5 0 0 0 16 20.5 1.5 1.5 0 0 0 17.5 19v-3.5z"/>',
  reporting: '<path d="M14 3v5h5"/><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M8 13h8M8 17h5"/>',
  tax: '<path d="M5 19 19 5"/><circle cx="7.5" cy="7.5" r="2"/><circle cx="16.5" cy="16.5" r="2"/>',
  entity: '<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/>',
  // workflow steps
  trigger: '<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
  extract: '<path d="M14 3v5h5"/><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M8 12h8M8 16h8"/>',
  match: '<path d="m8 8-4 4 4 4"/><path d="m16 16 4-4-4-4"/><path d="M4 12h16"/>',
  post: '<path d="m5 12 5 5L20 7"/>',
  hold: '<rect x="6" y="4" width="4" height="16" rx="1.2"/><rect x="14" y="4" width="4" height="16" rx="1.2"/>',
  draft: '<path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
  verify: '<circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="m15 10 2 2 4-4"/>',
  log: '<path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/><path d="m9 12 2 2 4-4"/>',
  explain: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  analyze: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  build: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16M9 9v11"/>',
  translate: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  measure: '<path d="M5 18a8 8 0 1 1 14 0"/><path d="M12 14l3.5-3.5"/>',
  flag: '<path d="M5 21V4"/><path d="M5 4h12l-2.5 4L17 12H5"/>',
  escalate: '<path d="M7 17 17 7"/><path d="M9 7h8v8"/>',
};

export default function ScnIcon({ name }: { name: string }) {
  const d = PATHS[name] || '<circle cx="12" cy="12" r="3"/>';
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: d }}
    />
  );
}

export const WORK_ICON: Record<string, string> = {
  Reconciliation: "reconciliation",
  "Accounts payable": "ap",
  Collections: "collections",
  Reporting: "reporting",
  Tax: "tax",
  "Multi-entity": "entity",
};
