export class Storage {

  static getToken() {
    return localStorage.getItem('userToken');
  }

  static setToken(token) {
    localStorage.setItem('userToken', token);
  }

}
