import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComserService } from '../comser.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public expanded:boolean=true;

  constructor(public readonly commonservice:ComserService) {}

    public setStep(no:number):void{
      console.log("sd")
      this.commonservice.currStep=no;
      console.log(this.commonservice.currStep)
    }

    public next(){
      this.commonservice.currStep+=1
    }

    public prev(){
      this.commonservice.currStep-=1
    }

}
