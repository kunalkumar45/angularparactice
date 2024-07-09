import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent implements OnInit {
  empObj: any = {
    "name": "",
    "salary": "",
    "age": "",
  }
  empList: any;

  constructor(private apiSrvice: ApiService) {
  }

  ngOnInit(): void {
    this.getEmployee();
  }


  onSave() {
    this.apiSrvice.createNewEmp(this.empObj).subscribe((res: any) => {
      this.empObj = res;
      console.log(res);
      if (res) {
        alert('Employee Created Successfully')
        this.getEmployee()

      } else {
        alert(res.message)
      }
    })
  }


  onEdit(data: any) {
    this.empObj = data;
  }
  onDelete(id: number) {

  }
  getEmployee() {
    this.apiSrvice.getAllEmp().subscribe((res: any) => {
      this.empList = res.data;
      console.log(this.empList);

    })
  }
}
