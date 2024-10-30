import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProfilService {
    private apiUrl = "http://localhost:8080/user/1"

    constructor(private http: HttpClient) {}

    getUser(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
        // return this.http.put<any>(`${this.apiUrl}/${user.id}`, user);
    }
}