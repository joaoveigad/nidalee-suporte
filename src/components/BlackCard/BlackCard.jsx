import {
  BlackCardComponent,
  SessionTitle,
  GridContainer,
  GridImage,
  Title
} from "./style";
import yunara from "../../images/grdicon/yunara.png";

const BlackCard = () => {
  return (
    <BlackCardComponent>
        <Title>Sinergias</Title>
      <SessionTitle>ADCs recomendados</SessionTitle>
      <GridContainer>
        <GridImage src={yunara} alt="Yunara Icon" />
        <GridImage src={yunara} alt="Yunara Icon" />
        <GridImage src={yunara} alt="Yunara Icon" />
        <GridImage src={yunara} alt="Yunara Icon" />
        <GridImage src={yunara} alt="Yunara Icon" />
        <GridImage src={yunara} alt="Yunara Icon" />
      </GridContainer>

      <SessionTitle>Top</SessionTitle>
      <GridContainer>
        <GridImage src={yunara} alt="Yunara Icon" />
        <GridImage src={yunara} alt="Yunara Icon" />
        <GridImage src={yunara} alt="Yunara Icon" />
      </GridContainer>

      <SessionTitle>Jungle</SessionTitle>
      <GridContainer>
        <GridImage src={yunara} alt="Yunara Icon" />
        <GridImage src={yunara} alt="Yunara Icon" />
        <GridImage src={yunara} alt="Yunara Icon" />
      </GridContainer>

      <SessionTitle>Mid</SessionTitle>
      <GridContainer>
        <GridImage src={yunara} alt="Yunara Icon" />
        <GridImage src={yunara} alt="Yunara Icon" />
        <GridImage src={yunara} alt="Yunara Icon" />
      </GridContainer>
    </BlackCardComponent>
  );
};

export default BlackCard;
