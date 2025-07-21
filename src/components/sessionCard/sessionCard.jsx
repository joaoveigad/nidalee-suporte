import {
  SessionCardComponent,
  SessionTitle,
  List,
  Nida, 
  Credits
} from './style';
import nida from "../../images/gifs/nid.gif";

const SessionCard = ({ title, items }) => {
  return (
    <SessionCardComponent>
      <SessionTitle>{title}</SessionTitle>
      <List>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.heading}
            <List>
              {item.points.map((point, subIdx) => (
                <li key={subIdx}>{point}</li>
              ))}
            </List>
          </li>
        ))}
      </List>
      <Nida src={nida} alt="Nidalee GIF" />
      <Credits>Gif por <a href="https://www.deviantart.com/roxzi-wolf/art/Nidalee-GIF-631330677" target="_blank" rel="noopener noreferrer">Roxzi Wolf</a></Credits>
    </SessionCardComponent>
  );
};

export default SessionCard;
