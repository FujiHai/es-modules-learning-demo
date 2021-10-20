// 写法一
export var name = "foo module";
export class A {}
export function bar() {}

// var name = "foo module";
// class A {}
// function bar() {}
// export { name, A, bar }

// const age = 25;
// export { age as Age };

const age = 25;

export { age as default };
