import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-view',
  templateUrl: './count-view.component.html',
  styleUrls: ['./count-view.component.css']
})
export class CountViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      const view = document.getElementById('count')
    fetch('https://api.countapi.xyz/update/Honey/youtube/?amount=1').then(res=> res.json()).then(res=> {view.innerHTML = res.value}) 
  }

}
