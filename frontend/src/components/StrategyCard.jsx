export default function StrategyCard({ name }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h3>{name}</h3>
      <button>Deploy</button>
    </div>
  );
}
