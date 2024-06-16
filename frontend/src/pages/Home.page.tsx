import EventList from '@/components/events/EventList';
import MainLayout from './MainLayout';

export function HomePage() {
  return (
    <MainLayout>
      <EventList />
    </MainLayout>
  );
}
