"use strict";
// 可以借助 typescript playground 官网查看效果，官网地址 https://www.typescriptlang.org
let hello = "Hello TypeScript";
let age = 13;
let userinfo = {
    name: '张三',
    age: 18,
    sex: '男'
};
// userinfo.name = '李四'
userinfo.age = 24;
class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}
let p = new Person('张三', 98, '女');
