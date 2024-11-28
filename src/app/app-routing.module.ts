import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostnflyServiceContainersComponent } from './Modules/hostnfly-service/hostnfly-service-containers/hostnfly-service-containers.component';
import { HostnflyAcceuilContainersComponent } from './Modules/hostnfly-acceuil/hostnfly-acceuil-containers/hostnfly-acceuil-containers.component';
import { HostnflyDashboardContainersComponent } from './Modules/hostnfly-dashboard/hostnfly-dashboard-containers/hostnfly-dashboard-containers.component';
import { GuardAuthService } from './Modules/hostnfly-service/service/guard.auth.service';


const routes: Routes = [
  { path: '', redirectTo: '/acceuil-containers', pathMatch: 'full' },
  { path: 'service-containers', component: HostnflyAcceuilContainersComponent },
  { path: 'Dashboard', component: HostnflyDashboardContainersComponent,canActivate: [GuardAuthService]  },
  { path: 'acceuil-containers', component: HostnflyServiceContainersComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GuardAuthService]
})
export class AppRoutingModule {}
