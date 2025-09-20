export default function Card({ title, price, description }) {
  return (
    <div className="card glass fade-in">
      <h2>{title}</h2>
      {price && <p className="price">{price}</p>}
      <p>{description}</p>
      <button className="btn">Get Started</button>
    </div>
  );
}
