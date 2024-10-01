import ProfileForm from '@/components/auth/ProfileForm';
import { useAuthProfileRetrieveQuery } from '@/redux/api';
import MainLayout from './MainLayout';

function ProfilePage() {
  const { data } = useAuthProfileRetrieveQuery();
  return <MainLayout>{data && <ProfileForm user={data} />}</MainLayout>;
}

export default ProfilePage;
