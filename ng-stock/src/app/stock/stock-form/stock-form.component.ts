import {Component, OnInit} from '@angular/core';
import {Stock, StockService} from "../stock.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  formModel:FormGroup;
  categories = ["IT","物联网","金融"];
  stock: Stock = new Stock(0,"",0,0,"",[]);
  constructor(private routeInfo:ActivatedRoute,
              private stockService:StockService,
              private router:Router) {
  }

  ngOnInit() {
    let stockId = this.routeInfo.snapshot.params['id'];
    this.stockService.getStock(+stockId).subscribe(
      data => this.stock = data
    );

    let fb = new FormBuilder();
    this.formModel = fb.group(
      {
        name:['', [Validators.required,Validators.minLength(4)]],
        price:['',Validators.required],
        desc:['',Validators.required],
        categories:fb.array([
          new FormControl(false),
          new FormControl(false),
          new FormControl(false)
        ],this.categoriesSelectvaildator)
      });
    this.stockService.getStock(stockId).subscribe(
      data => {
        this.stock = data;
        this.formModel.reset({
          name:data.name,
          price:data.price,
          desc:data.desc,
          categories:[
            data.categories.indexOf(this.categories[0]) != -1,
            data.categories.indexOf(this.categories[1]) != -1,
            data.categories.indexOf(this.categories[2]) != -1
          ]
        })
      }
    )
  }

  categoriesSelectvaildator(control:FormArray){
    let vaild = false;
    control.controls.forEach(control => {
       if (control.value){
         vaild = true;
       }
    });

    if (vaild){
      return null;
    }else {
      return {categoryLength:true};
    }
  }

  cancel(){
    this.router.navigateByUrl("/stock");
  }

  save(){
    // console.log(this.stock.rating);
    var chineseCategories = [];
    var index = 0;
    for (var i = 0 ; i < 3 ; i++){
      if (this.formModel.value.categories[i]){
        chineseCategories[index++] = this.categories[i];
      }
    }
    this.formModel.value.categories = chineseCategories;
    this.formModel.value.rating = this.stock.rating;
    console.log("formModel",this.formModel.value);
    // this.router.navigateByUrl("/stock");
  }

}
