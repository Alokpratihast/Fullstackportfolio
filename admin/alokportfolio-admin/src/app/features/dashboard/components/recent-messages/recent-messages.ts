import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { RecentMessage } from '../../models';

@Component({
  selector: 'app-recent-messages',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './recent-messages.html',
  styleUrl: './recent-messages.scss'
})
export class RecentMessagesComponent {

  @Input({ required: true })
  messages: RecentMessage[] = [];

}