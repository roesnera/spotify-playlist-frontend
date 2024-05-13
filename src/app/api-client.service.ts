import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {

  private CLIENT_ID = "d51e52eb0574487188cdeafcda069fa0";
  private scope = "playlist-modify-public playlist-modify-private";

  constructor(private http: HttpClient) { }

  public authorize(): Observable<unknown> {
    return this.http.get(`https://accounts.spotify.com/authorize?response_type=code&client_id=${this.CLIENT_ID}&scope=${this.scope}&redirect_uri=http://127.0.0.1:4200/success`)
  }
}
