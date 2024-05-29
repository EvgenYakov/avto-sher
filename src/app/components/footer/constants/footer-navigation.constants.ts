import { AppRoutes } from '@constants';
import { MenuItem } from 'primeng/api';

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
    target: '_blank',
  },
  {
    label: 'Правила',
    routerLink: AppRoutes.RULES,
    target: '_blank',
  },
  {
    label: 'Вакансии',
    routerLink: AppRoutes.JOB,
    target: '_blank',
  },
  {
    label: 'Политика конфиденциальности',
    routerLink: AppRoutes.PRIVACY,
    target: '_blank',
  },
  {
    label: 'Оферта',
    routerLink: AppRoutes.OFFER_AGREEMENT,
    target: '_blank',
  },
];

export const SOCIAL_NETWORK: { icon: string; hoverIcon: string; link: string }[] = [
  {
    icon: 'assets/icons/social-network/TG.svg',
    hoverIcon: 'assets/icons/social-network/TGH.svg',
    link: 'https://t.me/avtosherrf',
  },
  {
    icon: 'assets/icons/social-network/VK.svg',
    hoverIcon: 'assets/icons/social-network/VKH.svg',
    link: 'https://vk.com/avtosherrf',
  },
  {
    icon: 'assets/icons/social-network/discord.svg',
    hoverIcon: 'assets/icons/social-network/discordH.svg',
    link: 'https://discord.gg/t2KMFPc8',
  },
];
