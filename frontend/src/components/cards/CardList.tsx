import { useState } from 'react';
import { Center, Pagination, Paper } from '@mantine/core';
import { useLoyaltyCardsListQuery } from '@/redux/api';
import { defaultPageSize } from '@/constants';
import CardItem from './CardItem';

function CardList() {
  const [page, setPage] = useState(1);
  const { data } = useLoyaltyCardsListQuery({ page, pageSize: defaultPageSize });
  return (
    <Paper p="lg">
      {data?.results.map((card) => <CardItem key={card.id} card={card} />)}
      <CardItem />
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
