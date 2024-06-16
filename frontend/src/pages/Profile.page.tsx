import ProfileForm from '@/components/auth/ProfileForm';
import MainLayout from './MainLayout';
import { useAuthProfileRetrieveQuery } from '@/redux/api';

function ProfilePage() {
  const { data } = useAuthProfileRetrieveQuery();
  return <MainLayout>{data && <ProfileForm user={data} />}</MainLayout>;
}

export default ProfilePage;
