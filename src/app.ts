import {Configuration} from './configurations/ConfigurationLoader';
import {JenkinsClientApi} from './client_api/JenkinsClientApi';

console.log(Configuration)

let config:any = Configuration;

let jenkins_client_api = new JenkinsClientApi( config.jenkins_url);

jenkins_client_api.getJobInfo(config.jenkins_job_name).then((data: any) => {
    //console.log(data)
    console.log(data.color)
})
.catch((err) => {
    console.log(err)
    if (err === true) {
        console.log("Job name not found")
    }
})

console.log("App ready")
