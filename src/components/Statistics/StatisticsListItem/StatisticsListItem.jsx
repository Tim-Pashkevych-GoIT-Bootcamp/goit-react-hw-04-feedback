import { StyledStatisticsItem } from './StatisticsListItem.styled';

const StatisticsListItem = ({ data }) => {
  return (
    <StyledStatisticsItem>{`${data[0]}: ${data[1]}`}</StyledStatisticsItem>
  );
};

export default StatisticsListItem;
