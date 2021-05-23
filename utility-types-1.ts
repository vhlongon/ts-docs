interface MyUser {
  name: string;
  id: string;
  email?: string;
}

// Partial takes a type and make everything in it optional
type MyOptionalUser = Partial<MyUser>;
const merge = (user: MyUser, overrides: MyOptionalUser): MyUser => {
  return { ...user, ...overrides };
};

console.log(merge({ name: 'Mr. banana', id: '1', email: 'test@test.com' }, {}));
console.log(
  merge({ name: 'Mr. banana', id: '1', email: 'test2@test.com' }, {})
);

// this on the other hand makes everything required
type MyRequiredUser = Required<MyUser>;

// this will builds a type by picking specific things from a type
type JustEmailAndName = Pick<MyUser, 'name' | 'email'>;

// this on the other hand builds a type by omitting stuff from a type
type UserWithoutId = Omit<MyUser, 'id'>;

// use ["type name"] notation to get type of a property in a type or interface
const mapById = (users: MyUser[]): Record<MyUser['id'], UserWithoutId> =>
  users.reduce((acc, val) => {
    const { id, ...rest } = val;
    return { ...acc, [id]: rest };
  }, {});

console.log(
  mapById([
    { id: '1', name: 'Mr. One', email: 'one@test.com' },
    { id: '2', name: 'Mr. Two', email: 'two@test.com' },
  ])
);
