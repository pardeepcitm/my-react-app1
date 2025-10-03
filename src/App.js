import './App.css';


const offers = [
  {
    shop: "ScandiStore",
    title: "20% Off on Electronics",
    details: "Valid through Oct 15. Excludes Apple & Samsung.",
    url: "https://scandistore.com"
  },
  {
    shop: "TechNook",
    title: "Buy 1 Get 1 on Headphones",
    details: "Free shipping on all orders.",
    url: "https://technook.com"
  },
  // Add more offers here
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="/scandiwhispers.png" alt="Site Logo" className="site-logo" />
        <h1>Latest Shop Offers</h1>
        <div className="offers-list">
          {offers.map((offer, idx) => (
            <div key={idx} className="offer-card">
              <h2>{offer.shop}</h2>
              <h3>{offer.title}</h3>
              <p>{offer.details}</p>
              <a href={offer.url} target="_blank" rel="noopener noreferrer">
                Visit Shop
              </a>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
