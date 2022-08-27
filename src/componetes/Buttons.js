import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Botones = (props) => {
  return (
    <nav>
      <Link to="/categoria/bikinis">Bikinis</Link>
      <Link to="/categoria/enterizas">Enterizas</Link>
      {props.type == "NavBar" ? <CartWidget /> : null}
    </nav>
  )
}

export default Botones;