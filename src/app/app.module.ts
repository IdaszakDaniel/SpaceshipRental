import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SearchCmpComponent } from './components/search-cmp/search-cmp.component';
import { ListCmpComponent } from './components/list-cmp/list-cmp.component';
import { DetailsCmpComponent } from './components/details-cmp/details-cmp.component';

import { ResourceService } from './services/resource.service';
import { UserQueryService } from './services/user-query.service';
import { DetailsService } from './services/details.service';

import { ImageFilterPipe } from './components/list-cmp/imageFilter.pipe';

import { MyDateRangePickerModule } from 'mydaterangepicker';


const appRoutes: Routes = [
  {path: '', component:SearchCmpComponent},
  {path: 'list', component:ListCmpComponent},
  {path: 'list/details', component:DetailsCmpComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchCmpComponent,
    ListCmpComponent,
    ImageFilterPipe,
    DetailsCmpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MyDateRangePickerModule
  ],
  providers: [
    ResourceService,
    UserQueryService,
    ImageFilterPipe,
    DetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
