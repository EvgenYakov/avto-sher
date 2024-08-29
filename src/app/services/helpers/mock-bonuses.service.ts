import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockBonusesService {
  public getRandomBonuses(): any[] {
    const allBonuses = this.getBonuses();
    const randomIndices = this.getRandomIndices(allBonuses.length, 3); // Выбираем 3 случайных индекса
    return randomIndices.map(index => allBonuses[index]);
  }

  private getRandomIndices(length: number, count: number): number[] {
    const indices = Array.from({ length }, (_, index) => index); // Создаем массив индексов от 0 до length - 1
    indices.sort(() => Math.random() - 0.5); // Перемешиваем массив индексов
    return indices.slice(0, count); // Выбираем первые count индексов
  }

  private getBonuses(): any[] {
    return [
      {
        id: 1,
        title: 'Ремонт автомобиля',
        description: 'Ремонт кузова автомобиля осуществляется автопарком в случае повреждения не по вине водителя',
        icon: 'assets/icons/bonuses/1.svg',
      },
      {
        id: 2,
        title: 'Сезонная замена шин',
        description: 'Замена шин осуществляется парком 2 раза в год',
        icon: 'assets/icons/bonuses/2.svg',
      },
      {
        id: 3,
        title: 'Служба поддержки',
        description: 'Служба поддержки автопарка работает 24/7',
        icon: 'assets/icons/bonuses/3.svg',
      },
      {
        id: 4,
        title: 'Служба поддержки автопарка работает 24/7',
        description: 'Автопарк организовывает сервисное обслуживание или возмещает расходы на него',
        icon: 'assets/icons/bonuses/4.svg',
      },
      {
        id: 5,
        title: 'Автопарк организовывает сервисное обслуживание или возмещает расходы на него',
        description: 'Автопарк предоставляет Android-устройство на время аренды',
        icon: 'assets/icons/bonuses/5.svg',
      },
    ];
  }
}
