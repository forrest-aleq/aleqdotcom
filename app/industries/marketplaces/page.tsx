import type { Metadata } from "next";
import IndustryPage from "@/components/IndustryPage";
import { INDUSTRIES } from "@/lib/industries";

const data = INDUSTRIES["marketplaces"];

export const metadata: Metadata = {
  title: `Aleq for ${data.name} — the books, done.`,
  description: data.lead,
};

export default function Page() {
  return <IndustryPage data={data} />;
}
