type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};
// or & Record<string, string | number>

interface DogInfo {
  name: string;
  age: number;
}

const dog: MyFlexibleDogInfo = {
  name: 'Nick',
  favouriteFood: 'beef',
  age: 20,
};

// this will re-map all props for boolean
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

// we can map the types and even change the name on the fly!
type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    v: Type[Property]
  ) => void;
} &
  {
    [Property in keyof Type as `on${Capitalize<
      string & Property
    >}Delete`]?: () => void;
  };

type DogListeners = Listeners<DogInfo>;

const listenToObject = <Type>(obj: Type, listeners: Listeners<Type>): void => {
  // whatever
};

const baby: DogInfo = {
  name: 'Baby',
  age: 13,
};

listenToObject(baby, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
});
