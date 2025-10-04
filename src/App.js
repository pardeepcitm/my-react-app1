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
    <div>
      <h1 className="text-3xl font-bold underline text-center">
      Hello world!
    </h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center' >My button</button>
    </div>
    
    
  );
}


export default App;
