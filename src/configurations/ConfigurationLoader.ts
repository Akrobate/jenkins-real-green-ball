declare var require: any
declare var process: any

import * as yml_parser from 'js-yaml'
var fs = require('fs')

const environment_name = 'local'
const configuration_filename = 'configuration.yaml'

let raw_configuration = yml_parser.safeLoad(fs.readFileSync(process.cwd() + '/' + configuration_filename, 'utf8'))

//console.log(raw_configuration)

let used_configuration = raw_configuration[environment_name]

export let Configuration: Object = {
    jenkins_url: used_configuration.jenkins_url,
    jenkins_job_name: used_configuration.jenkins_job_name,
}
