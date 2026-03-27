export default function MarketCard({ title }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", marginBottom: "10px" }}>
      <h3>{title}</h3>
      <button>Predict</button>
    </div>
  );
}
