import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, IPainting } from './shared/interfaces';

import { environment } from '../environments/environment';
const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadPainting(id: string) {
    return this.http.get<IPainting>(`${API_URL}/themes/${id}`, {withCredentials: true});
  }

  loadPaintingsList() {
    return this.http.get<IPainting[]>(`${API_URL}/themes`, {withCredentials: true});
  }

  loadPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : ''
    return this.http.get<IPost[]>(`${API_URL}/posts${query}`, {withCredentials: true});
  }
  saveTheme(data: any) {
    return this.http.post<IPainting>(`${API_URL}/themes`, data, { withCredentials: true });
  }
}
