import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent {
  constructor() { }

  ngOnInit(): void {
    this.createBarChart();
  }

  createBarChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Massage', // Libellé pour les données de massage
            data: [30, 40, 50, 60, 70], // Données de massage
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'Chef', // Libellé pour les données de chef
            data: [20, 35, 45, 55, 65], // Données de chef
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Chauffeur', // Libellé pour les données de chauffeur
            data: [10, 25, 35, 45, 55], // Données de chauffeur
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
