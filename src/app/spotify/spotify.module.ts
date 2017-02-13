import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { 
    // Components
    SpotifyComponent,
    SpotifyListComponent,
    // Services
    // SpotifyService
} from './';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule
    ],
    exports: [
        SpotifyComponent,
        SpotifyListComponent
    ],
    declarations: [
        SpotifyComponent,
        SpotifyListComponent
    ]/*,
    providers: [
        //SpotifyService
    ]*/
})
export class SpotifyModule {}