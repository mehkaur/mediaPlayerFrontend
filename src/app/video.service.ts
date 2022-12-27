import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseURL = 'http://localhost:8082/api/';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor( private http: HttpClient) { }


  addVideo(video : Video):
}
