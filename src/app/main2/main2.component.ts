import { Component, OnInit } from '@angular/core';
import { ComserService } from '../comser.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main2.component.html',
  styleUrl: './main2.component.css'
})
export class Main2Component{

  constructor(public readonly commonservice:ComserService) {}




}
