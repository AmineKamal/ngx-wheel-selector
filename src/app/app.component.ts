import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-wheel-selector';

  data = [
    {
      list: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      currentIndex: 4
    }
  ]

  change (gIndex, iIndex) {
    console.log(gIndex, iIndex)
  }
}
