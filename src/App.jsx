import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Component/pages/first";
import Second from "./Component/pages/second";
import Third from "./Component/pages/third";
import Fourth from "./Component/pages/fourth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
      </Routes>
    </Router>
  );
};

export default App;
