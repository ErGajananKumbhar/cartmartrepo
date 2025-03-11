// src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,FormsModule, HttpClientModule, CommonModule], // Add required modules
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any[] = []; // Array to store products
  searchQuery: string = ''; // Variable to store search query
  filteredProducts: any[] = []; // Array to store filtered products

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts(); // Fetch products when the component initializes
  }

  // Fetch products from the backend
  fetchProducts() {
    this.http.get<any[]>('http://localhost:8095/api/products').subscribe(
      (response) => {
        this.products = response; // Store products
        this.filteredProducts = response; // Initialize filtered products
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  // Search products
  searchProducts() {
    if (this.searchQuery) {
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products; // Reset to all products if search query is empty
    }
  }
}