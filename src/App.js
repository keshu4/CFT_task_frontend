import Axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { useSelector } from "react-redux";

const RoutesComponent = ({token}) => {
  if (token) {
    Axios.defaults.headers.common["Authorization"] = "Token " + token;
    return <Routes isLoggedIn={true} />;
  } else {
    return <Routes isLoggedIn={false} />;
  }
}

const App = () => {
  const baseUrl = 'http://localhost:3000';
  Axios.defaults.baseURL = baseUrl;
  const { token } = useSelector((state) => state.auth);
  return (
      <Router>
        <RoutesComponent token={token} />
      </Router>
  );
}

export default App;
