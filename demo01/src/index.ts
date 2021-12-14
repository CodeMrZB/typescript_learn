// 可以借助 typescript playground 官网查看效果，官网地址 https://www.typescriptlang.org
let hello: string = "Hello TypeScript"
let age: number = 13

interface UserInfo {
    readonly name: string;
    age: number;
    sex: string;
}

let userinfo: UserInfo = {
    name: '张三',
    age: 18,
    sex: '男'
}

// userinfo.name = '李四'
userinfo.age = 24

class Person implements UserInfo {
    name: string;
    age: number;
    sex: string;
    constructor(name: string, age: number, sex: string) {
        this.name = name
        this.age = age
        this.sex = sex
    }
}
let p: Person = new Person('张三', 98, '女')