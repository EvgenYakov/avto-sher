import { FinancialOption } from '../models';

export const FULL_FINANCIAL_OPTIONS: FinancialOption[] = [
  {
    class: 'deposit',
    items: [
      { label: 'Без залога', placeholder: '', unit: '' },
      { label: 'Залог', placeholder: '1000', unit: '₽' }
    ]
  },
  {
    class: 'commission',
    items: [
      { label: 'Без комиссии', placeholder: '', unit: '' },
      { label: 'Комиссия', placeholder: '0.1 - 10', unit: '%' }
    ]
  },
  {
    class: 'redemption',
    items: [
      { label: 'С возможностью выкупа', placeholder: '1000', unit: '₽' }
    ]
  }
];