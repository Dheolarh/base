import Grid from '@mui/material/Grid';
import TopCard from './TopCard';
import { topCardsData } from 'data/topCardsData';

const TopCards = () => {
  return (
    <Grid container spacing={{ xs: 2, sm: 3, lg: 3.75 }}>
      {topCardsData.map((item) => (
        <Grid item key={item.id} xs={6} sm={6} md={3}>
          <TopCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
