import "./style.css";
import SessionCard from "../components/sessionCard/sessionCard";

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
      "A cura (E-Humana) aumenta conforme o aliado perde vida, e dá um buff de attack speed"
    ]
  }
];

const main = () => {
  return (
    <>
      <SessionCard title="Vantagens da Nidalee Suporte" items={vantagens} />
    </>
  );
};

export default main;
