import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-platform-console-configuration',
  templateUrl: './platform-console-configuration.component.html',
  styleUrls: ['./platform-console-configuration.component.scss'],
})
export class PlatformConsoleConfigurationComponent {
  constructor(
    public dialogRef: MatDialogRef<PlatformConsoleConfigurationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required]),
    cloud: new FormControl('', [Validators.required]),
    regions: new FormControl('', [Validators.required]),
    primaryRegion: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  });

  onCancel(): void {
    this.dialogRef.close();
  }

  onAddEmailConfig(): void {
    // TODO : add  logic
    this.dialogRef.close(this.form.value);
  }

  onTest(): void {
    // TODO : add test logic
  }
}
