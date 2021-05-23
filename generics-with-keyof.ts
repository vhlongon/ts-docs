const pluck = <DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] => {
  return items.map(item => item[key]);
};

const dogs = [
  { name: 'Nick', age: 19 },
  { name: 'Baby', age: 17 },
];

console.log(pluck(dogs, 'age'));
console.log(pluck(dogs, 'name'));

interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap1 {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent & { total: number; userID: string };
}

const sendEvent = <Name extends keyof EventMap1>(
  name: Name,
  data: EventMap1[Name]
): void => {
  console.log([name, data]);
};

sendEvent('addToCart', {
  productID: 'productId',
  user: 'user1',
  quantity: 1,
  time: 10,
});

sendEvent('checkout', {time: 20, user: 'Bob', total: 100, userID: 'user2'})
