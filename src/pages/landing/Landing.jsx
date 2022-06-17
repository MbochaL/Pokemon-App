import './Landing.css';
import LogoImg from "./Pokeball.svg"
import { useNavigate } from 'react-router-dom';


export default function Landing() {

  const navigate = useNavigate();

  function onClick() {
    navigate("login");
  }
  

  return (
    <div className="Landing">

      <div className="LandingContainer">
      <img src={LogoImg} alt ="pokeball" className='Logo'/>
        <h1><b>Pokedex</b></h1>
        <h2>Challenge del Bootcamp:</h2>
        <h3>Consiste en consumir la pokemon API presentando los distintos conceptos dados</h3>
        <button className="button" onClick={onClick} >Login</button>
      </div>
    </div>
  );
}
