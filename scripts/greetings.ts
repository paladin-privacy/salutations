import { generate } from '../src/generate';
import { Gender } from '../src/models';
const argv = require('yargs').argv

for (let i = 0; i < 10; i++) {
  console.log(generate({
    gender: (argv.gender || Gender.OTHER) as Gender,
    noble: argv.noble,
    name: argv.name
  }));
}
