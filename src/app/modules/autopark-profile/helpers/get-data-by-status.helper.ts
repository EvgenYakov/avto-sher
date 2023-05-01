import { AutoparkStatus } from '@constants';
import { AutoparkStatusData } from '../interfaces/autopark-status-data.interface';

const autoparkStatusDataMap: Record<AutoparkStatus, AutoparkStatusData> = {
  [AutoparkStatus.TOP]: {
    label: AutoparkStatus.TOP,
    icon: 'assets/icons/autopark-status/top.svg',
    color: 'var(--surface-c)',
  },
  [AutoparkStatus.CHECKED]: {
    label: AutoparkStatus.CHECKED,
    icon: 'assets/icons/autopark-status/checked.svg',
    color: 'var(--green-600)',
  },
  [AutoparkStatus.PREMIUM]: {
    label: AutoparkStatus.PREMIUM,
    icon: 'assets/icons/autopark-status/premium.svg',
    color: '#ffc107',
  },
  [AutoparkStatus.DEFAULT]: {
    label: AutoparkStatus.DEFAULT,
    icon: 'assets/icons/autopark-status/default.svg',
    color: 'var(--gray-700)',
  },
  [AutoparkStatus.NEW]: {
    label: AutoparkStatus.NEW,
    icon: 'assets/icons/autopark-status/new.svg',
    color: 'var(--blue-700)',
  },
};

export const getAutoparkStatusData = (status: AutoparkStatus): AutoparkStatusData => {
  return autoparkStatusDataMap[status];
};