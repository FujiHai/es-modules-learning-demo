// ES Module 不支持像 commonjs 那样直接访问模块全局成员

// console.log(import.meta.url);

// __filename 获取
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = dirname(__filename);
console.log(__dirname);
