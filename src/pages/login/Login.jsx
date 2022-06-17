import { LoginForm } from "./LoginForm";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import ImageIcon from "./image.svg";

export default function Login() {
  const navigate = useNavigate();

  function onLoginFormSuccess() {
    navigate("/pokedex");
  }

  return (
    <main className="Login">
      <section className="LoginHeroContainer">
        <div className="LoginHero">
          <img  src={ImageIcon} alt=""/>
        </div>
      </section>
      <section className="LoginFormContainer">
        <LoginForm onSuccess={onLoginFormSuccess} />
      </section>
    </main>
  );
}