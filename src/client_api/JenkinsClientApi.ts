import {BaseClientApi} from './BaseClientApi'


export class JenkinsClientApi extends BaseClientApi {

  private jenkins_host: string;


  constructor() {
    super();
  }

  public setJenkinsHost(host:string){
    this.jenkins_host = host;
  }


}
