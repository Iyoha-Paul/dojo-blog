// import logo from './logo.svg';

import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "hello world";
  // const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <p>liked {likes} times</p> */}
      </div>
    </div>
  );
}

export default App;
