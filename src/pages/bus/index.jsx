import { BusIntroBanner, BusFeatureGrid } from "../../components/sections";

function BusIntroPage() {
  return (
    <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
      <BusIntroBanner />
      <BusFeatureGrid />
    </div>
  );
}

export default BusIntroPage;
