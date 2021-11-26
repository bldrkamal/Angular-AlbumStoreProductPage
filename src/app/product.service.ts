import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  private _albumUrl: '../assets/album.json'
  constructor(private http: HttpClient)) { }
  
  getAlbum(id: number)
}
