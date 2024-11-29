import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
  imports: [FormsModule, CommonModule, ToastModule],
  providers: [MessageService]
})
export class ContactMeComponent implements OnInit {
  @ViewChild('toast')
  toast!: ElementRef;

  fullName: string = '';
  email: string = '';
  message: string = '';
  toastMessage: string = '';

  constructor(
    private contactMe: ContactService,
    private messageService: MessageService
  ) {}

  onSubmit() {
    const message = {
      full_name: this.fullName,
      email: this.email,
      message_description: this.message,
    };
    this.contactMe.sendMessage(message).subscribe((data) => {
      if (data.status === 'success') {
        this.showToast("Message sent successfully!");
      } else {
        this.showToast("Oops something went wrong!");
      }
    });
  }

  showToast(message: string) {
    this.toastMessage = message;
    this.toast.nativeElement.classList.add('show');

    setTimeout(() => {
      this.closeToast();
    }, 3000);
  }

  closeToast() {
    this.toast.nativeElement.classList.remove('show');
  }

  ngOnInit(): void {}
}
