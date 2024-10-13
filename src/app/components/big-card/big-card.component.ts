import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss',
})
export class BigCardComponent {
  @Input()
  public cardTitle: string = '';
  @Input()
  public cardDescription: string = '';
  @Input()
  public photoCover: string = '';


  
}
