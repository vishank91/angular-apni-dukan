import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  getStorage() {
    return typeof localStorage != "undefined" ? {
      login: localStorage.getItem("login") ?? false,
      name: localStorage.getItem("name") ?? "",
      username: localStorage.getItem("username") ?? "",
      userid: localStorage.getItem("userid") ?? "",
      role: localStorage.getItem("role") ?? "",
    } : { login: false }
  }

  setStorage(data: any) {
    if (typeof localStorage != "undefined") {
      localStorage.setItem("login", data.login)
      localStorage.setItem("name", data.name)
      localStorage.setItem("username", data.username)
      localStorage.setItem("userid", data.userid)
      localStorage.setItem("role", data.role)
    }
  }

  destroyStorage() {
    if (typeof localStorage != "undefined") {
      localStorage.clear()
    }
  }
}
