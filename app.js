import config from './config/data.json';
import {User, Product} from './models';

console.log(config.name);

const user = new User();
const product = new Product();
