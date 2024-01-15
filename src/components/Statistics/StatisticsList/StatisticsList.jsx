import StatisticsListItem from '../StatisticsListItem/StatisticsListItem';

const StatisticsList = ({ data }) => {
  return (
    <ul>
      {Object.entries(data).map(item => (
        <StatisticsListItem key={item[0]} data={item} />
      ))}
      <li></li>
    </ul>
  );
};

export default StatisticsList;
