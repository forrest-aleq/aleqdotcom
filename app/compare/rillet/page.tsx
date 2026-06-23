import type { Metadata } from "next";
import ComparePage from "@/components/ComparePage";
import { COMPETITORS } from "@/lib/compare";

const data = COMPETITORS["rillet"];

export const metadata: Metadata = {
  title: `Aleq vs. ${data.name} — the controller that does the work`,
  description: data.lead,
};

export default function Page() {
  return <ComparePage data={data} />;
}
