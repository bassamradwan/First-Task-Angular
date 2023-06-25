import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Diplomas } from 'src/app/Models/diplomas';
import { GetDiplomasService } from 'src/app/service/get-diplomas.service';

@Component({
  selector: 'app-get-diplomas',
  templateUrl: './get-diplomas.component.html',
  styleUrls: ['./get-diplomas.component.scss']
})
export class GetDiplomasComponent implements OnInit,OnChanges {
  data: any;
  page?=1;
  @Output() editDiploma:Diplomas | undefined;
  diplomaForm: FormGroup;
  GetDiploma: Diplomas | null = null;
  constructor(private DiplomasService: GetDiplomasService ,private httpClient:HttpClient , private router:Router, private formBuilder: FormBuilder,) {
    this.diplomaForm = this.formBuilder.group({
      diploma_en_name: '',
      diploma_ar_name: '',
      price: 0,
      from_date: '',
      to_date: '',
      diploma_description: '',
      diploma_attach: '',
      categoryIds: [],
      eduCompId: 2,
    });
   }
  ngOnInit(): void {
    this.getallData()
    }

getallData(){
  this.DiplomasService.getAllDiplomas(this.page).subscribe(res=>{
    console.log(res);
    this.data=res;
    
  })
}

Delet(courseIds:number){
  this.DiplomasService.deleteCourses(courseIds).subscribe((res:any) =>{
    console.log(res);
    
  })
}
// getDiplomaById(diploma:Diplomas){
//   this.editDiploma={...diploma};
//   this.router.navigate(['/NewDiploma'])
//   console.log(this.editDiploma);

// }
update(): void {
  if (!this.GetDiploma) {
    return;
  }

  const updatedDiploma: Diplomas = {
    ...this.GetDiploma,
    ...this.diplomaForm.value,
  };

  this.DiplomasService.EditCourses(updatedDiploma.id, updatedDiploma).subscribe(
    (res: any) => {
      console.log(res);
      this.GetDiploma = null;
    },
    
  );
}

getDiploma(diploma: Diplomas): void {
  this.GetDiploma = { ...diploma };
  this.diplomaForm.patchValue({
    diploma_en_name: diploma.diploma_en_name,
    diploma_ar_name: diploma.diploma_ar_name,
    price: diploma.price,
    from_date: diploma.from_date,
    to_date: diploma.to_date,
    diploma_description: diploma.diploma_description,
    categoryIds: [],
    diploma_attach: diploma.diploma_attach,
    eduCompId: 2,
    id: diploma.id
  });
}

  ngOnChanges(): void {
    this.getallData()
  }

}
