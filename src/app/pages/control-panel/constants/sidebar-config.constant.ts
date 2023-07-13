import { SidebarConfig } from '../models/sidebar-config.interface';
import { AppRoutes, ControlPanel } from '@constants';

export const SIDEBAR_CONFIG: SidebarConfig[] = [
  {
    icon: 'assets/icons/control-panel/employee.svg',
    iconSelected: 'assets/icons/control-panel/employee-selected.svg',
    headerLabel: 'Сотрудники',
    content: [
      {
        title: 'Водители',
        link: ''
      },
      {
        title: 'Персонал',
        link: ''
      },
    ]
  },
  {
    icon: 'assets/icons/control-panel/autopark.svg',
    iconSelected: 'assets/icons/control-panel/employee-selected.svg',
    headerLabel: 'Автопарк',
    content: [
      {
        title: 'Машины',
        link: AppRoutes.AUTOPARK_PANEL + '/' + ControlPanel.AUTOPARK_CONTROL + '/' + ControlPanel.CARS_TABLE
      },
      {
        title: 'Автопарк',
        link: AppRoutes.AUTOPARK_PANEL + '/' + ControlPanel.AUTOPARK_CONTROL + '/' + ControlPanel.AUTOPARK + '/' + ControlPanel.CREATE_AUTOPARK
      },
    ]
  },
  {
    icon: 'assets/icons/control-panel/money.svg',
    iconSelected: 'assets/icons/control-panel/employee-selected.svg',
    headerLabel: 'Транзакции',
    content: [
      {
        title: 'Водители',
        link: ''
      },
      {
        title: 'Персонал',
        link: ''
      },
    ]
  },
]