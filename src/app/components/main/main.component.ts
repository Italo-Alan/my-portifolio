import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  firstParagraph: string = "Oi,";
  secondParagraph: string = "Eu sou o Italo Alan";
  thirdParagraph: string = "Desenvolvedor Front-End.";
  descriptionParagraph: string = "Sou um desenvolvedor Front-End que está se aventurando no mundo do Back-End por meio do Java. ";
}
