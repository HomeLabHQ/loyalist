import { DateFormat } from '@/constants'
import dayjs from 'dayjs'

const formatDate = (data?: string | Date): string => dayjs(data).format(DateFormat)

export default formatDate
