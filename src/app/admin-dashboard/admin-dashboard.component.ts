import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  isSidebarExpanded = true;

  menuItems = [
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Settings', icon: 'settings' },
    { name: 'Reports', icon: 'bar_chart' },
    { name: 'Users', icon: 'people' }
  ];
  
   
kpiData: any = [  {
  "KPI_ID": 1,
"KPI_NAME": "Total Users",

        "value": 1000
},
{
    "KPI_ID": 2,
  "KPI_NAME": "Questions Asked",
          "value": 50000
    
  },
  {
    "KPI_ID": 3,
  "KPI_NAME": "successfully",
          "value": 49000
      
  },
  {
    "KPI_ID": 4,
  "KPI_NAME": "Errors",

          "value": 1000
      
  }

]


  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
}
