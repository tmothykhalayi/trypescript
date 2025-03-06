// //utility types
// partial
// interface User {
//     name: string;
//     age: number;
//   }
  
//   let User: Partial<User> = {
//     name: "John", // `age` is optional here
//   };
  
//REQUIRED
// interface User {
//     name: string;
//     age?: number;
//   }
  
//   const User: Required<User> = {
//     name: "John",
//     age: 25, // `age` is required now
//   };

  //read only
  interface User {
    name: string;
    age: number;
  }
  
  const User: Readonly<User> = {
    name: "John",
    age: 25,
  };
  
  // user.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property
  
//record
type RolePermissions = Record<string, boolean>;

const permissions: RolePermissions = {
  admin: true,
  user: false,
  guest: false,
};

//pick
interface User {
    name: string;
    age: number;
    address: string;
  }
  
  type UserName = Pick<User, "name">; // { name: string }

  //ommit
  interface User {
    name: string;
    age: number;
    address: string;
  }
  
  type UserWithoutAddress = Omit<User, "address">; // { name: string; age: number }
  