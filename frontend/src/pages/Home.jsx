import MarketCard from "../components/MarketCard";
import StrategyCard from "../components/StrategyCard";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Prediction Markets</h1>
      <MarketCard title="BTC > $100k by 2026?" />

      <h1>Yield Strategies</h1>
      <StrategyCard name="Auto DeFi Yield" />
    </div>
  );
}
