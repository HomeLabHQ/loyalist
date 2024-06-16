import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from './MainLayout';
import { useEventsRetrieveQuery } from '@/redux/api';
import EventForm from '@/components/events/EventForm';

export default function EventPage() {
  const { id } = useParams();
  const { data: event_data } = useEventsRetrieveQuery({ id: Number(id) }, { skip: !id });

  return (
    <MainLayout>
      {event_data && <EventForm event={event_data} />}
      {!event_data && <EventForm />}
    </MainLayout>
  );
}
