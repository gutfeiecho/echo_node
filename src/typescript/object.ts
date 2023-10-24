// 1. 可选属性等同于允许赋值为undefined

type User = {
  firstName: string;
  lastName?: string;
};

//  等同于

type Username = {
  firstName: string;
  lastName?: string | undefined;
};

// 2. 读取可选属性之前，必须检查是否为undefined
const user: User = {
  firstName: "Gu",
};

// console.log(`hello ${user.firstName} ${user.lastName.toString()}`); // ERR: 'user.lastName' is possibly 'undefined'.

if (user.lastName !== undefined) {
  console.log(`hello ${user.firstName} ${user.lastName.toString()}`);
}

// 3. TypeScript提供编译设置 ExactOptionalPropertyTypes,只要同时打开这个设置和strictNullChecks，可选属性就不能设为undefined
