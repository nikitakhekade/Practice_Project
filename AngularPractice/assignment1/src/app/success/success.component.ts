import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  template: `
    <p>
      successful!!!
    </p>
  `,
  styles: [`
    p {
      padding: 20px;
      border: 2px solid green;
    }
  
  `]
})
export class SuccessComponent {

}
