function FeaturesList({ features }) {

  return (
    <div className="features-box">
      <h2>Product Features</h2>

      {features.length > 0 ? (
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      ) : (
        <p>No features available</p>
      )}
    </div>
  );
}

export default FeaturesList;
