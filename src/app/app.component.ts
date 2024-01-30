import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CommonModule } from '@angular/common';
import { Main2Component } from './main2/main2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainComponent,CommonModule,Main2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public expanded:boolean=true;
  title = 'wizard';
}
