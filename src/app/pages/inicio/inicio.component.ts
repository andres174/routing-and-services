import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  Data:any;

  constructor(private dataService: DataServiceService){

  }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.dataService.getPosts().subscribe({
      next: (value) => {
        console.log(value);
        this.Data = value;
      },
      error: (err) => {
        console.log(err);
      }

    })
  }

  


}
