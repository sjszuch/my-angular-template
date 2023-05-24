import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TestscreenComponent } from './components/testscreen/testscreen.component';

const routes: Routes = [
  {path: "main", component: MainComponent},
  {path: "test", component: TestscreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
