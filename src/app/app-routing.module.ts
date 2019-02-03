import { HomePageComponent } from "./home-page/home-page.component";
import { ArchivePageComponent } from "./archive-page/archive-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "archives/:year/:month", component: ArchivePageComponent },
  { path: "", component: HomePageComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
