import { AppRoutes, ControlPanel } from '@constants';

import { SidebarConfig } from '../models/sidebar-config.interface';

export const SIDEBAR_CONFIG: SidebarConfig[] = [
  {
    icon: 'assets/icons/control-panel/employee.svg',
    iconSelected: 'assets/icons/control-panel/employee-selected.svg',
    headerLabel: 'Сотрудники',
    content: [
      {
        title: 'Водители',
        link: '',
      },
      {
        title: 'Персонал',
        link: '',
      },
    ],
  },
  {
    icon: 'assets/icons/control-panel/autopark.svg',
    iconSelected: 'assets/icons/control-panel/employee-selected.svg',
    headerLabel: 'Автопарк',
    content: [
      {
        title: 'Машины',
        link: ['/', AppRoutes.CONTROL_PANEL, ControlPanel.CAR_CONTROL, ControlPanel.CARS_TABLE],
      },
      {
        title: 'Автопарки',
        link: ['/', AppRoutes.CONTROL_PANEL, ControlPanel.AUTOPARK_CONTROL, ControlPanel.AUTOPARK_TABLE],
      },
    ],
  },
  {
    icon: 'assets/icons/control-panel/money.svg',
    iconSelected: 'assets/icons/control-panel/employee-selected.svg',
    headerLabel: 'Транзакции',
    content: [
      {
        title: 'Водители',
        link: '',
      },
      {
        title: 'Персонал',
        link: ['/', AppRoutes.CONTROL_PANEL, ControlPanel.PERSONAL_CONTROL, ControlPanel.PERSONAL_TABLE],
      },
    ],
  },
];
