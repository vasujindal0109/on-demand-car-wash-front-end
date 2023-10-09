import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { faBriefcase, faCertificate, faCogs, faDumbbell, faHeart, faLeaf, faSignal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(private location:Location){}
  chartLine = faSignal;
  dumbell = faDumbbell;
  heart = faHeart;
  case = faBriefcase;
  certificate = faCertificate;
  cogs = faCogs;
  leaf=faLeaf;

  back(){
    this.location.back();
  }

}
