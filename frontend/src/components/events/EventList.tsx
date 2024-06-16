import { Center, Grid, Pagination, Paper } from '@mantine/core';
import { useState } from 'react';
import { useEventsListQuery } from '@/redux/api';
import EventItem from './EventItem';
import { defaultPageSize } from '@/settings/constants';

function EventList() {
  const [activePage, setPage] = useState(1);
  const { data } = useEventsListQuery({ page: activePage, pageSize: defaultPageSize });
  return (
    <Paper p="lg">
      <Grid justify="center" align="stretch">
        {data?.results.map((event) => <EventItem key={event.id} event={event} />)}
        <EventItem />
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
export default EventList;
