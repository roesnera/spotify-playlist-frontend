import { Routes } from '@angular/router';
import { AuthorizeComponent } from './authorize/authorize.component';
import { MakePlaylistComponent } from './make-playlist/make-playlist.component';

export const routes: Routes = [
  { path: "", pathMatch: "full", component: AuthorizeComponent },
  { path: "makePlaylist", component: MakePlaylistComponent },
];
