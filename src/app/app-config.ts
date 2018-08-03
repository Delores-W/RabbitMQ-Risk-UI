import {Injectable} from '@angular/core';

@Injectable()
export class AppConfig {

  public version: '1.0.0';
  public locale: string = 'en-US';

  // public apiPort: string;
  public apiPort: string = '9201';
  public apiProtocol: string;
  public baseApiPath: string;
  public apiHostName: string;

  constructor() {
    if (this.apiProtocol === undefined) {
      this.apiProtocol = window.location.protocol;
    }
    if (this.apiHostName === undefined) {
      this.apiHostName = window.location.hostname;
    }
    if (this.apiPort === undefined) {
      this.apiPort = window.location.port;
    }
    if (this.apiHostName.includes('infomud') || this.apiHostName.includes('heroku')) {
      this.baseApiPath = this.apiProtocol + '//' + this.apiHostName + '/';
    } else {
      this.baseApiPath = this.apiProtocol + '//' + this.apiHostName + ':' + this.apiPort + '/';
    }
    if (this.locale === undefined) {
      this.locale = navigator.language;
    }
  }

}
