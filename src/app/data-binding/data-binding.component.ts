import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  styles: ['.highlight {\n' +
  '    background-color: yellow;\n' +
  '    font-weight: bold;\n' +
  '}']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.training';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/400/200/';

  actualValue: string = '';
  savedValue: string;

  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {
  }

  ngOnInit() {
  }

  botaoClicado() {
    alert('The button has clicked!');
  }


  onKeyUp(event: KeyboardEvent) {
    console.log();
    this.actualValue = (<HTMLInputElement>event.target).value;
  }

  saveValue(value) {
    this.savedValue = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
