import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Diplomas } from 'src/app/Models/diplomas';
import { CategoriesService } from 'src/app/service/categories.service';
import { GetDiplomasService } from 'src/app/service/get-diplomas.service';
import { GetDiplomasComponent } from '../get-diplomas/get-diplomas.component';

@Component({
  selector: 'app-add-ddiplomas',
  templateUrl: './add-ddiplomas.component.html',
  styleUrls: ['./add-ddiplomas.component.scss']
})
export class AddDDiplomasComponent implements OnInit {
CategorieLest:any=[];
diplomaForm:FormGroup;
// diploma?:Diplomas;
  constructor(private diplomaService: GetDiplomasService,private categorie:CategoriesService,private FB:FormBuilder, private router:Router) {
   this.diplomaForm = this.FB.group({
      eduCompId: new FormControl(2),
      id:new FormControl (''),
      diploma_ar_name: new FormControl(''),
      diploma_en_name: new FormControl(''),
      price: new FormControl(0),
      from_date: new FormControl(''),
      to_date: new FormControl(''),
      diploma_description: new FormControl(''),
      diploma_attach: new FormControl(''),
      categoryIds: new FormControl([])
     });
  }

  ngOnInit(): void {
this.CategorieLest=this.categorie.Categories();
this.diplomaForm = new FormGroup({
  diploma_en_name: new FormControl(''),
  diploma_ar_name: new FormControl(''),
  price: new FormControl(''),
  from_date: new FormControl(''),
  to_date: new FormControl(''),
  diploma_description: new FormControl(''),
  categoryIds: new FormControl('')
});

// set default values for form controls
this.diplomaForm.patchValue({
  diploma_en_name: '',
  diploma_ar_name: '',
  price: 0,
  from_date: '',
  to_date: '',
  diploma_description: '',
  categoryIds: []
});

  }

  onSubmit() {
    this.diplomaService.addDiploma(this.diplomaForm.value).subscribe(response => {
      console.log(response);
    });
  }
 

  getCat(){
    this.categorie.Categories()
  }
}
