import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataMock } from '../../data/data-mock';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent implements OnInit {
  private id: string | null = '0';

  public photoCover: string = '';

  public title: string = '';

  public description: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.setValuesToComponent(this.id);
  }

  public setValuesToComponent(id: string | null) {
    const result = dataMock.filter((article) => article.id === id)[0];
    this.title = result.title;
    this.description = result.description;
    this.photoCover = result.photo    
  }
}
