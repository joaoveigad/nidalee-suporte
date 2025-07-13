import {
  SessionCardComponent,
  SessionTitle,
  List
} from './style';

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
    </SessionCardComponent>
  );
};

export default SessionCard;
