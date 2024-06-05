import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import Books from "./pages/books";

// TODO: Router Setup
// TODO: Search using Input Value deBounce to not overload the API server
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
