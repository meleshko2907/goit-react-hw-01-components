import PropTypes from 'prop-types';
import { List, Title, ListItem } from './Statistics.styled';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title !== null && <Title>{title}</Title>}
      <List>
        {stats.map(data => (
          <ListItem
            key={data.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className="#">{data.label}</span>
            <span className="#">{data.percentage}%</span>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};