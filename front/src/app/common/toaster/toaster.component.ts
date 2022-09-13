import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Toast } from "./toast.interface";

@Component({
  selector: "app-toaster",
  template: `
    <div *ngIf="i == 0" class="toast toast-{{ toast.type }}" [style.top.px]="i * 65">
      <p class="toast-heading">{{ toast.title }}</p>
      <a class="close" (click)="remove.emit(i)">&times;</a>
    </div>
  `,
  // <p>{{ toast.body }}</p>

  styles: [
    `
    .toast {
      position: fixed;
      width: 300px;
      margin-top: 1rem;
      border: 1px solid transparent;
      border-radius: .25rem;
      animation: move 2s both;
      z-index: 10000;
    opacity: 1;

    right: 5px;
    top: 10px;
    display: flex;
    align-items: center;
    padding: 15px;
    }

    .toast-success {
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    }

    .toast-error {
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    }

    .toast-warning {
      color: #856404;
      background-color: #fff3cd;
      border-color: #ffeeba;
    }

    .close {
      cursor: pointer;
      flex: 1;
      text-align: right;
    }

    .toast-heading {
      margin: 0px !important;
      flex:2;
    }

    @keyframes move {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
  `,
  ],
})
export class ToasterComponent {
  @Input() toast: Toast;
  @Input() i: number;

  @Output() remove = new EventEmitter<number>();
}
