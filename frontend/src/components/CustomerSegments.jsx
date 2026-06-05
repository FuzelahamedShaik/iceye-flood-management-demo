export default function CustomerSegments({ customers }) {
  return (
    <section className="panel customer-panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">US Market Fit</p>
          <h2>Customer Segments & Value Proposition</h2>
          <p>This translates flood observations into specific commercial and operational value.</p>
        </div>
      </div>

      <div className="customer-grid">
        {customers.map((customer) => (
          <div className="customer-card" key={customer.segment}>
            <h3>{customer.segment}</h3>
            <span>{customer.examples}</span>
            <p><strong>Need:</strong> {customer.need}</p>
            <p><strong>Value:</strong> {customer.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
