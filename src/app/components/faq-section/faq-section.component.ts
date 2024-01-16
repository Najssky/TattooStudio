import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss',
})
export class FaqSectionComponent {
  questionsAndAnswers = [
    {question: "Jak nalepiej umówić się na tatuaż?", answer:"Napisz do nas mail na 3artitshousetattoo@gmail.com, napisz DM na jeden z naszych portali społecznościowych lub zadzwoń na 730 770 712"},
    {question: "Jak się przygotować do sesji?", answer:"Należy być przede wszystkim wypoczęty i trzeźwy."},
    {question:"Czy wykonujecie covery?", answer:"Tak, jednak wymaga to indywidualnej oceny tatuatora, ponieważ w niektórych przypadkach cover może być niewykonywalny lub wymagać laserowego usunięcia."}
  ];
  panelOpenState = false;
}
