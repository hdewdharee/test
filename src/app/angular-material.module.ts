import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatGridListModule, MatToolbarModule, MatTabsModule, MatFormFieldModule,
         MatCheckboxModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule, MatTabsModule, BrowserAnimationsModule, MatFormFieldModule, MatCheckboxModule, MatInputModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
