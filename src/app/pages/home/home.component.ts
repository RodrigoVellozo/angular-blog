import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public cardtitleBig: string = 'Dragon Ball DAIMA';
  public carddescription: string =
    'Goku e companhia viviam pacificamente quando de repente ficaram pequenos por causa de uma conspiração! Quando eles descobrem que o motivo para isso pode estar no "Mundo dos Demônios", um misterioso Majin chamado Glorio aparece para eles.';
  public photoCoverBig: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhcZ3fx-dNZzrmbfq18e8dgcWbz--vqymJA&s';

  public smallCardsData: any[] = [
    {
      photoCover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6K_XaPx8ArflaMh-aWdiG_q55ExQo4KklPg&s',
      cardTitle: 'Dragon ball Super no Crunchyroll',
    },
    {
      photoCover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WUHr6-bvkmDbeCttBiuR4tQzdLP3L5HVQA&s',
      cardTitle: 'Dragon ball Heroes no Prime Video',
    },
    {
      photoCover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66tQAiHfi-1baf7qEQk14f6CyDZ_sAvL_kQ&s',
      cardTitle: 'Dragon ball Z Super no Youtube',
    },
  ];
}
