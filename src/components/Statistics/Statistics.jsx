import PropTypes from 'prop-types';
import { Label, Percent, Statistic, StatItem, StatList, StatTitle } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {

  return <Statistic>

{title && <StatTitle>UPLOAD STATS</StatTitle>}

    <StatList>{stats.map(item => 
        <StatItem key={item.id} className="item" >
        <Label className="label">{ item.label }</Label>
        <Percent className="percentage"> {item.percentage}%</Percent>
    </StatItem>
    )
  }
  </StatList>
</Statistic>
}

Statistics.propTypes = {
  title: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })
}