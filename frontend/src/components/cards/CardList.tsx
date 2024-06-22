import { Center, Grid, Pagination, Paper } from '@mantine/core';
import { useState } from 'react';
import { useLoyaltyCardsListQuery } from '@/redux/api';
import { defaultPageSize } from '@/settings/constants';

function CardList() {
  const [activePage, setPage] = useState(1);
  const { data } = useLoyaltyCardsListQuery({ page: activePage, pageSize: defaultPageSize });
  return (
    <Paper p="lg">
      <Grid justify="center" align="stretch">
        {data?.results.map(() => <></>)}
      </Grid>
      {data && data.count > defaultPageSize ? (
        <Center>
          <Pagination
            value={activePage}
            onChange={setPage}
            total={Math.ceil(data.count / defaultPageSize)}
          />
        </Center>
      ) : null}
    </Paper>
  );
}
export default CardList;
