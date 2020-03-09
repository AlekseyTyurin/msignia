import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/index";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private subscriber: Subscription;
  public food: any = [];
  foodObj;

  constructor(private route: ActivatedRoute,
              private data: DataService) {
  }

  ngOnInit() {
    this.subscriber = this.route.params.subscribe(
      (params) => {
        let id = params['id'];
        this.getFoodDetails(id);
      }
    );
  }

  public getFoodDetails(id) {
    return this.data.getFoodDetails(id)
      .subscribe(
        (food) => {
          this.food = food;
          this.food.filter((item) => {
            if (item.id === Number(id)) {
              this.foodObj = item
            }
          })

        }
      )
  };

}
