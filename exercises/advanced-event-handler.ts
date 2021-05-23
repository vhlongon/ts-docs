type AdvancesProcessed<T> = {
  eventName: keyof T;
  data: T[keyof T];
};
type Handler<T> = {
  [Prop in keyof T as `map${Capitalize<string & Prop>}`]?: (
    data: T[Prop]
  ) => T[Prop];
} &
  {
    [Prop in keyof T as `filter${Capitalize<string & Prop>}`]?: (
      data: T[Prop]
    ) => boolean;
  };

const capitalize = (s: string) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`;

class AdvancedEventProcessor<T extends {}> {
  private handlers: Handler<T>[] = [];
  private processed: AdvancesProcessed<T>[] = [];

  handleEvent<K extends keyof T>(eventName: K, data: T[K]): void {
    let allowEvent = true;
    for (const handler of this.handlers) {
      const filterFunc =
        handler[`on${capitalize(eventName as string)}` as keyof Handler<T>];
      if (typeof filterFunc === 'function' && !filterFunc(data)) {
        allowEvent = false;
        break;
      }
    }

    if (allowEvent) {
      let mappedData = { ...data };
      for (const handler of this.handlers) {
        const mapFunc =
          handler[`on${capitalize(eventName as string)}` as keyof Handler<T>];

        if (typeof mapFunc === 'function' && !mapFunc(data)) {
          mappedData = mapFunc(mappedData);
        }
      }
      this.processed.push({
        eventName,
        data: mappedData,
      });
    }
  }

  addHandler(handler: Handler<T>): void {
    this.handlers.push(handler);
  }

  getProcessedEvents() {
    return this.processed;
  }
}

interface EventMap {
  login: { user?: string | null; name?: string; hasSession?: boolean };
  logout: { user?: string };
}

class UserAdvancedEventProcessor extends AdvancedEventProcessor<EventMap> {}

const uep2 = new UserAdvancedEventProcessor();

uep2.addHandler({
  filterLogin: ({ user }) => Boolean(user),
  mapLogin: (data) => ({
    ...data,
    hasSession: Boolean(data.user && data.name),
  }),
});

uep2.handleEvent("login", {
  name: "jack",
});
uep2.handleEvent("login", {
  user: "tom",
  name: "tomas",
});
uep2.handleEvent("logout", {
  user: "tom",
});

console.log(uep2.getProcessedEvents());

/*
Result:
[
  { eventName: 'login', data: { name: 'jack' } },
  { eventName: 'login', data: { user: 'tom', name: 'tomas' } },
  { eventName: 'logout', data: { user: 'tom' } }
]
*/
