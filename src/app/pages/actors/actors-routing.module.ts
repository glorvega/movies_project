import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ActorsComponent } from './actors.component';


const routes: Routes = [
    { path: '', component: ActorsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActorsRoutingModule {}
