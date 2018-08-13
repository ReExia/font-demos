import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BoardVO} from '../../common/model/boardVO';
import {BoardVoService} from '../../common/service/boardVoService';

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.css'],
})
export class EditBoardComponent implements OnInit {

  formGroup : FormGroup;

  vo : BoardVO;


  id : string;

  constructor(private router : Router,
              private activatedRoute : ActivatedRoute,
              private formBuilder : FormBuilder,
              private boardVoService : BoardVoService
  ) {

    // this.formGroup = this.formBuilder.group({
    //
    // })

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    // console.log(this.id);
    this.activatedRoute.data.subscribe(
      (data : {resoloveData : any}) => {
        // console.log(data.resoloveData.data);
        this.id = data.resoloveData.data.id;
        this.vo = data.resoloveData.data;
      },
      (err) => {
        console.log(err);
        //todo if(err);
      }
    )
    // console.log(this.vo);
  }


}
