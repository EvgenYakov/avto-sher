import { MenuItem } from 'primeng/api';

import { AppRoutes } from '@constants';

export const DRIVER_COLUMN: MenuItem[] = [
  {
    label: 'Как сделать заказ?',
    routerLink: AppRoutes.ORDER_STEPS,
  },
  {
    label: 'Полное руководство',
    routerLink: AppRoutes.DRIVER_FULL_DOCUMENTATION,
  },
];

export const AUTOPARK_COLUMN: MenuItem[] = [
  {
    label: 'Как добавить свой автопарк',
    routerLink: AppRoutes.HOW_ADD_AUTOPARK,
  },
  {
    label: 'Полное руководство',
    routerLink: AppRoutes.AUTOPARK_FULL_DOCUMENTATION,
  },
  {
    label: 'Условия размещения',
    routerLink: AppRoutes.CONDITIONS,
  },
  {
    label: 'Добавить свой автопарк',
    routerLink: AppRoutes.ADD_AUTOPARK,
  },
];

export const INFO_COLUMN: MenuItem[] = [
  {
    label: 'Обратная связь',
    routerLink: AppRoutes.FEEDBACK,
  },
  {
    label: 'Правила',
    routerLink: AppRoutes.RULES,
  },
  {
    label: 'Вакансии',
    routerLink: AppRoutes.JOB,
  },
];

export const SOCIAL_NETWORK: { icon: string, hoverIcon: string, link: string }[] = [
  {
    icon: 'assets/icons/social-network/TG.svg',
    hoverIcon: 'assets/icons/social-network/TGH.svg',
    link: 'https://t.me/YA_AVTO_RF_Official'
  },
  {
    icon: 'assets/icons/social-network/VK.svg',
    hoverIcon: 'assets/icons/social-network/VKH.svg',
    link: 'https://vk.com/public214842462'
  },
  {
    icon: 'assets/icons/social-network/OK.svg',
    hoverIcon: 'assets/icons/social-network/OKH.svg',
    link: 'https://m.ok.ru/group/70000002667676?__dp=y'
  },
  {
    icon: 'assets/icons/social-network/Zen.svg',
    hoverIcon: 'assets/icons/social-network/ZenH.svg',
    link: 'https://dzen.ru/ya_avto_rf_official'
  },
  {
    icon: 'assets/icons/social-network/RuTube.svg',
    hoverIcon: 'assets/icons/social-network/RuTubeH.svg',
    link: 'https://rutube.ru/channel/31362933/'
  },
]