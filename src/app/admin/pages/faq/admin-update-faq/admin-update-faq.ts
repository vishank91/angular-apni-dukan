import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-faq',
  standalone: false,
  templateUrl: './admin-update-faq.html',
  styleUrl: './admin-update-faq.css',
})
export class AdminUpdateFaq {
  id = ""
  myForm = new FormGroup({
    question: new FormControl("", Validators.required),
    answer: new FormControl("", Validators.required),
    status: new FormControl("1")
  })

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id
        this.dataService.getSingleFaq(this.id).subscribe((response: any) => {
          this.myForm.patchValue({
            question: response.question,
            answer: response.answer,
            status: response.status ? "1" : "0"
          })
        })
      }
    })
  }

  get question(): any {
    return this.myForm.get("question")
  }
  get answer(): any {
    return this.myForm.get("answer")
  }

  questionError = ""
  setErrorMessage() {
    this.questionError = ""
  }

  postData() {
    this.dataService.getFaq().subscribe((response: any) => {
      let item = response.find((x: any) => x.id !== this.id && x.question.toLowerCase() === this.myForm.value.question?.toLowerCase())
      if (item)
        this.questionError = "Faq Record With This Question is Already Exist"
      else {
        item = {
          id: this.id,
          question: this.myForm.value.question,
          answer: this.myForm.value.answer,
          status: this.myForm.value.status === "1" ? true : false
        }
        this.dataService.updateFaq(item).subscribe((response: any) => {
          this.router.navigate(['/admin/faq'])
        })
      }
    })
  }
}
