import * as yml_parser from 'js-yaml';
import * as fs from 'fs';
//import fs = require('fs');

const environment_name = 'local';
const configuration_filename = 'configuration.yaml'

let raw_configuration = yml_parser.safeLoad(fs.readFileSync(process.cwd() + '/' + configuration_filename, 'utf8'));

console.log(raw_configuration)

let used_configuration = raw_configuration[environment_name];

export let Configuration: Object = {
    config1: used_configuration.config1,
    config2: used_configuration.config2,
};
