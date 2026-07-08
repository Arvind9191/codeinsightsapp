import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../core/Auth/loader.service';
import { Observable, tap } from 'rxjs';
@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrl: './loader.css',
})
export class Loader {
isLoading$: Observable<boolean>;  // ✅ must be Observable

  constructor(private loaderService: LoaderService) {
    this.isLoading$ = this.loaderService.loading$.pipe(tap()); // assign observable
  }

  ngOnInit(): void {
  this.isLoading$.subscribe(value => {
    
  });
}
}
