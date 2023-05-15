import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PlatformConsoleConfigurationComponent } from '../platform-console-configuration/platform-console-configuration.component';
import { SelectionModel } from '@angular/cdk/collections';

export interface PlatformData {
  default: boolean;
  name: string;
  url: string;
  cloud: string;
  primaryRegion: string;
  regions: string[];
  status: string;
}

@Component({
  selector: 'app-platform-console',
  templateUrl: './platform-console.component.html',
  styleUrls: ['./platform-console.component.scss'],
})
export class PlatformConsoleComponent {
  data: PlatformData[] = [
    {
      default: true,
      name: 'Default',
      url: 'default',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
    {
      default: false,
      name: 'New Item',
      url: 'xx',
      cloud: 'default',
      primaryRegion: 'default',
      regions: [],
      status: 'default',
    },
  ];

  dataSource = new MatTableDataSource<PlatformData>(this.data);
  selection = new SelectionModel<PlatformData>(true, [this.data[0]]);
  regionOptions: any[] = [
    { id: 1, name: 'Region 1' },
    { id: 2, name: 'Region 2' },
    { id: 3, name: 'Region 3' },
    // Add more options as needed
  ];

  regionsControl = new FormControl<string[]>([]);
  regionsList: string[] = ['region1', 'region2', 'region3'];

  onRegionRemoval(index: number) {
    const regions = this.regionsControl.value as string[];
    regions.splice(index, 1);
    this.regionsControl.setValue(regions); // To trigger change detection
  }

  editRow(element: PlatformData) {
    // Implement logic for editing row
  }

  removeRow(element: PlatformData) {
    const index = this.dataSource.data.indexOf(element);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<PlatformData>(
        this.dataSource.data
      );
    }
  }

  constructor(public dialog: MatDialog) {}

  addRow(result: PlatformData): void {
    this.data.push(result);
    this.dataSource.data = this.data;
  }
  addRowDialog(): void {
    const dialogRef = this.dialog.open(PlatformConsoleConfigurationComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addRow(result);
      }
    });
  }

  displayedColumns: string[] = [
    'default',
    'name',
    'url',
    'cloud',
    'primaryRegion',
    'regions',
    'status',
    'actions',
  ];

  radioLabel(row: PlatformData): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      this.dataSource.data.indexOf(row) + 1
    } as default`;
  }

  selectItem(row: PlatformData) {
    if (!this.selection.isSelected(row)) {
      this.selection.clear();
      this.selection.select(row);
      this.setDefaults();
    }
  }

  setDefaults() {
    this.dataSource.data.forEach((row) => {
      row.default = this.selection.isSelected(row);
    });
  }
}
