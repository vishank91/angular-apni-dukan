import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-faq',
  standalone: false,
  templateUrl: './admin-create-faq.html',
  styleUrl: './admin-create-faq.css',
})
export class AdminCreateFaq {
  myForm = new FormGroup({
    question: new FormControl("", Validators.required),
    answer: new FormControl("", Validators.required),
    status: new FormControl("1")
  })

  constructor(private dataService: DataService, private router: Router) { }

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
      let item = response.find((x: any) => x.question.toLowerCase() === this.myForm.value.question?.toLowerCase())
      if (item)
        this.questionError = "Faq Record With This Quesion is Already Exist"
      else {
        item = {
          question: this.myForm.value.question,
          answer: this.myForm.value.answer,
          status: this.myForm.value.status === "1" ? true : false
        }
        this.dataService.createFaq(item).subscribe((response: any) => {
          this.router.navigate(['/admin/faq'])
        })
      }
    })
  }
}
