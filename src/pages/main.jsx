import "./style.css";
import { Container } from "./style";
import SessionCard from "../components/sessionCard/sessionCard";
import BlackCard from "../components/BlackCard/BlackCard";
import  Header  from "../components/header/Header" 
import Footer from "../footer/Footer";

const vantagens = [
  {
    heading: "Pressão de lane",
    points: ["Poke, push e all-in."]
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
  },
  {
    heading: "Controle de visão",
    points: [
      "A trap (W-Humana) tem cooldown baixo, possibilitando espalhar várias pelo mapa e conseguir visão dos inimigos e tracking do jungler",
      "Consigo remover wards com facilidade com o buff de attack speed e o reset de auto attack do Q-Puma",
      "A lança (Q-Humana) revela unidades que forem acertadas"
    ]
  },
  {
    heading: "Sinergias",
    points: [
      "Campeões com stuns ou slow: consigo acertar lanças de longe com mais precisão",
      "Campeões hypercarries, que se beneficiam de attack speed: eu foco a cura e o buff"
    ]
  },  
  {
    heading: "Estilo de jogo",
    points: [
      "Eu buildo peel, utilidade e/ou AP, sempre adapto a build de acordo com a partida",
      "Level 1 upo o W, saio correndo e a espalho traps nas entradas da jungle e nas moitas do bot",
      "Level 2 upo o E, aumentando nossa pressão de kill e sustain com a cura e o buff",
      "Level 3 finalmente upo o Q",
      "Evito usar demais as lanças na lane, pois gastam muita mana e não dão dano, pois foco a cura",
      "Costumo rotar para objetivo e gankar as outras lanes."
    ]
  }
];



const Main = () => {
  return (
    <>
      <Header />
        <Container>
          <BlackCard title="Botão de like aqui?" />
          <SessionCard title="Vantagens, sinergias e estilo de jogo!" items={vantagens} />
          <BlackCard title ="Sinergia"/>  
        </Container>
        <Footer />
    </>
  );
};

export default Main;
