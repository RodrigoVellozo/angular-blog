import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
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
  @Input()
  public id: number = 0; 
}
