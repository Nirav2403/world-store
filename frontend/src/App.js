import { BrowserRouter as Router } from "react-router-dom";
import RoutePaths from "./components/Routes/Route";
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <RoutePaths />
      </Router>
    </div>
  );
}

export default App;
