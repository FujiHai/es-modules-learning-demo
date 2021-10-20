// 1. 自定义模块
import { foo, bar } from "./module.mjs";
console.log(foo);
console.log(bar);

// 2. 系统内置模块
import fs from "fs";
fs.writeFileSync("foo.txt", "Foo txt content!");

// 3. 第三方模块，不支持按单个成员方式导入，一般都是导出默认成员的方式。
import _ from "lodash";
console.log(_.camelCase("ES module"));

// 4. 系统内置模块支持使用
import { writeFileSync } from "fs";
writeFileSync("bar.txt", "Bar txt Content!");
