import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de cualquier cosa</h3>
    <img src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-dcb93e90c4e1548ffb16978a5a8d182270c872a9-s900-c85.webp" alt="This is fine meme">
    <p>Este es un comentario diferente a Lorem impsum :)</p>
  `,
  styles: `
    img {
      width: 100%;
      height: auto;
    } 
  `
})
export class CommentsComponent {

}
