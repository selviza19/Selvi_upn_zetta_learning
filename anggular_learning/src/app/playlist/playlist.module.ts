import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { PlaylistHeaderComponent } from './playlist-header/playlist-header.component';
import { PlaylistManagementComponent } from './playlist-management/playlist-management.component';



@NgModule({
  declarations: [
    PlaylistDetailComponent,
    PlaylistHeaderComponent,
    PlaylistManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlaylistModule { }
