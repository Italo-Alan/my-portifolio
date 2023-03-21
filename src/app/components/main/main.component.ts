
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {trigger,state,style,animate,transition}from '@angular/animations';

import { Input, Component } from '@angular/core';


//Funciona, mas não é o que eu quero
// const enterTransition = transition(':enter', [
//   style({
//     opacity: 0
//   }),
//   animate('1s ease-in', style({opacity: 1})),
// ])
// const leaveTransition = transition(':leave', [
//   style({
//     opacity: 1
//   }),
//   animate('1s ease-out', style({opacity: 0})),
// ])
// const fadeIn = trigger('fadeIn', [enterTransition])
// const fadeOut = trigger('fadeOut', [leaveTransition])

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  constructor(){

  }

  firstTitle: any = "Oi,";
  secondTitle: string = "Eu sou o Italo Alan";
  thirdTitle: string = "Desenvolvedor Front End.";
  descriptionTitle: string = "Meu nome é Italo Alan, tenho 26 anos e sou natural do Rio de Janeiro. Meu interesse em desenvolvimento começou em 2022 no momento que eu fiquei imaginando como algumas aplicações seriam feitas por meio de programação. Atualmente, sou um desenvolvedor Full-Stack que está se aventurando em Angular na parte do Front-End e Java na parte do Back-End. Apaixonado pelo desenvolvimento Web. Cursando Análise e Desenvolvimento de Sistemas.";


  turnArray(text: string){
    return text.split('');
  };
  turnArray2(text: string){
    console.log(this.secondTitle.split(' ')[0]);
    return text.split('')[0];
  };

  paragraphTest = this.turnArray2(this.firstTitle[0]);

  paragraph1 = this.turnArray(this.firstTitle);
  paragraph2 = this.turnArray(this.secondTitle);
  paragraph3 = this.turnArray(this.thirdTitle);

}
