import dayjs from 'dayjs';
import { DateFormat } from '@/constants';

const formatDate = (data?: string | Date): string => dayjs(data).format(DateFormat);

export default formatDate;
