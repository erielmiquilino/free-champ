import {Component, OnInit} from '@angular/core';
import {ChampService} from './champ.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private champService: ChampService) {
  }

  public freeChampsForAll: string[] = [];


  listFreeChamps(): void {
    this.champService.getChampionRotations().subscribe(champ => {

      this.champService.getAllChamps().subscribe(champList => {
        const champNames = Object.values(champList.data);

        for (const freeChampId of champ.freeChampionIds){
          for (const champValue of champNames){
            const champConverted: any = champValue;
            if (champConverted.key == freeChampId){
              this.freeChampsForAll.push(champConverted.name + ' ' + champConverted.title);
            }
          }
        }
      });

    });
  }

  ngOnInit(): void {
    this.listFreeChamps();
  }
}
