// Loops.so — add/update a contact (e.g. from the contact form). Server-side only.
// Set LOOPS_API_KEY in .env.local. No key → no-op (returns false).
export async function loopsCreateContact(
  email: string,
  props: Record<string, unknown> = {},
): Promise<boolean> {
  const key = process.env.LOOPS_API_KEY;
  if (!key || !email) return false;
  try {
    const res = await fetch("https://app.loops.so/api/v1/contacts/create", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email, ...props }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
