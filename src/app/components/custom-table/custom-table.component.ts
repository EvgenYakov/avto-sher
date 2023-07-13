import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@Component( {
  selector: 'app-custom-table',
  standalone: true,
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  imports: [CommonModule, TableModule, InputTextModule],
} )
export class CustomTableComponent<T> implements OnInit {
  @Input() set tableData(dataList: T[] | null) {
    if (dataList) {
      this.dataList = dataList;
    }
  };

  public get tableData(): T[] {
    return this.dataList;
  }

  private dataList: T[];

  @Input() columnNames: { [key: string]: string } = {};
  @Input() scrollHeight: number = 250;
  @Input() virtualRowHeight: number = 30;
  @Input() isScrollable: boolean = true;
  @Input() isVirtualScroll: boolean = true;
  @Output() rowClicked = new EventEmitter<string>();

  public columnNamesKey: string[] = [];
  public globalFilteredFields: string[] = [];

  ngOnInit() {
    const keys = Object.keys( this.columnNames )
    this.columnNamesKey = keys;
    this.globalFilteredFields = keys;
  }

  public emitIdRow(value: string): void {
    this.rowClicked.emit( value );
  }

}
