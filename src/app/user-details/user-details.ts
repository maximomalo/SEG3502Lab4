import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface UserData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-user-details',
  imports: [RouterLink],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails {
  user: UserData | null = JSON.parse(
    sessionStorage.getItem('userData') ?? 'null'
  );
}