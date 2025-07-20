import "./style.css";
import { Container } from "./style";
import SessionCard from "../components/sessionCard/sessionCard";
import BlackCard from "../components/BlackCard/BlackCard";
import  Header  from "../components/header/Header" 
import Footer from "../footer/Footer";

const vantagens = [
  {
    heading: "Pressão de lane",
    points: ["Poke, push e all-in muito bons"]
  },
  {
    heading: "Pressão de mapa",
    points: ["Velocidade em moitas na passiva e dash no W-Puma"]
  },
  {
    heading: "Cura e buff",
    points: [
      "A cura (E-Humana) aumenta conforme o aliado perde vida, e dá um buff de attack speed",
    ]
  }
];



const Main = () => {
  return (
    <>
      <Header />
        <Container>
          <BlackCard title="Botão de like aqui?" />
          <SessionCard title="Nidalee Suporte" items={vantagens} />
          <BlackCard title ="Sinergia"/>  
        </Container>
        <Footer />
    </>
  );
};

export default Main;
