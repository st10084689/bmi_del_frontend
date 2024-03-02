import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit{
  
  uid: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // Extract UID from URL parameter
    this.uid = this.route.snapshot.params['uid'];
    // Call delete action
    this.deleteUserAndData();
  }

  deleteUserAndData() {
    // Send HTTP DELETE request to the server to delete user data
    this.http.delete(`/api/deleteEntry/${this.uid}`)
      .subscribe(
        (response) => {
          console.log('Deletion successful', response);
          // Optionally, show a success message to the user
        },
        (error) => {
          console.error('Deletion failed', error);
          // Optionally, show an error message to the user
        }
      );
  }
}