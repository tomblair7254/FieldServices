import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { InventoryDetailComponent } from './inventories/inventory-detail/inventory-detail.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { authGuard } from './_gaurds/auth.guard';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      {path: 'inventories', component:InventoryListComponent}, 
      {path: 'inventories/id', component: InventoryDetailComponent},
      {path: 'add', component:AddinventoryComponent},      
    ]
  },  
    {path: 'register', component:RegisterComponent},
 ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
