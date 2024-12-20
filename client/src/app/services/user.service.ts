import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private id: string = '';

  private apiURL = 'http://127.0.0.1:5000'
  constructor(private http: HttpClient, private authService: AuthService) { }

  register(body: {}): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${this.apiURL}/auth/signup`, body, { withCredentials: true });
  }

  login(body: {}): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${this.apiURL}/auth/login`, body, { withCredentials: true });
  }

  getUser(id: string = this.id): Observable<any> {
    const token = this.authService.getToken()
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(`${this.apiURL}/user/${id}`, { headers });
  }

  deleteUser(id: string) {
    const token = this.authService.getToken();
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete(`${this.apiURL}/user/${id}`, { headers });
  }

  updateUser(id: string, body: {}): Observable<any> {
    const token = this.authService.getToken();
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.patch(`${this.apiURL}/user/update/${id}`, body, { headers });
  }
}
