import Link from "next/link";
import type { Scenario } from "@/lib/scenarios";
import ScnIcon, { WORK_ICON } from "@/components/ScnIcon";

export default function ScenarioCard({ s }: { s: Scenario }) {
  return (
    <Link className="scn-card" href={`/scenarios/${s.slug}`}>
      <div className="scn-card-top">
        <span className="scn-ic"><ScnIcon name={WORK_ICON[s.work] || "post"} /></span>
        <span className={"scn-badge " + s.mode}>{s.mode === "auto" ? "Auto" : s.mode === "assist" ? "Assist" : "Manual"}</span>
      </div>
      <div className="scn-card-t">{s.title}</div>
      <p className="scn-card-p">{s.one}</p>
      <div className="scn-card-foot mono">
        <span>{s.work}</span>
        <span className="scn-diff">{s.difficulty}</span>
      </div>
    </Link>
  );
}
