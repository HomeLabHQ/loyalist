import { Center, Grid, Pagination, Paper } from '@mantine/core';
import { useState } from 'react';
import { useLoyaltyCardsListQuery } from '@/redux/api';
import { defaultPageSize } from '@/settings/constants';
import CardItem from './CardItem';

function CardList() {
  const [page, setPage] = useState(1);
  const { data } = useLoyaltyCardsListQuery({ page, pageSize: defaultPageSize });
  return (
    <Paper p="lg">
      <Grid justify="center" align="stretch">
        {data?.results.map((card) => <CardItem key={card.id} card={card} />)}
        <div>Add new card</div>
      </Grid>
      {data && data.count > defaultPageSize ? (
        <Center>
          <Pagination
            value={page}
            onChange={setPage}
            total={Math.ceil(data.count / defaultPageSize)}
          />
        </Center>
      ) : null}
    </Paper>
  );
}
export default CardList;
