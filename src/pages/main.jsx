import "./style.css";
import { Container } from "./style";
import SessionCard from "../components/sessionCard/sessionCard";
import  Header  from "../components/header/Header" // Não tenho IDEIA porque isso ainda está renderizando mesmo apontando erro.


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
      "A cura (E-Humana) aumenta conforme o aliado perde vida, e dá um buff de attack speed", "kek"
    ]
  }
];

const sinergias = [

  {
    heading: "Teste",
    points: []
  }
]

const Main = () => {
  return (
    <>  
      <Header>
      </Header>
      <Container>
      <SessionCard title="Nidalee Suporte" items={vantagens}/>

    </Container>

    </>
  );
};

export default Main;
