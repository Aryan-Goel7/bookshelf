import { Link } from "react-router-dom";
import Container from "./Container";
function Header(): React.ReactNode {
  return (
    <Container>
      <div className="max-w-md mx-auto">
        <ul className=" flex flex-row justify-around">
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shelf">Shelf</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Header;
