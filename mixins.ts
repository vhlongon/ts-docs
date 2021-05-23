// normal function mixin
const myLoggerFunction = () => {
  return (str: string) => {
    console.log(str);
  };
};

const myLogger = myLoggerFunction();

myLogger('🍌');

// class mixin
const createLoggerClass = () => {
  return class MyLoggerClass {
    private completeLog: string = '';
    log(str: string) {
      console.log(str);
      this.completeLog += `${str} \n`;
    }
    dumbLog() {
      return this.completeLog;
    }
    clearLog() {
      this.completeLog = '';
    }
  };
};

const LoggerFromClass = createLoggerClass();

const classLogger = new LoggerFromClass();
classLogger.log('🍓');

classLogger.log('⚒️');

classLogger.log('💻');

console.log('--- DUMPING CONSOLE ---');
console.log(classLogger.dumbLog());
console.log('--- CLEAR CONSOLE ---');
classLogger.clearLog();
console.log(classLogger.dumbLog());

function createSimpleMemoryDataBase<T>() {
  return class SimpleMemoryDataBase {
    private db: Record<string, T> = {};

    set(id: string, value: T) {
      this.db[id] = value;
    }
    get(id: string): T {
      return this.db[id];
    }
    getObject(): object {
      return this.db;
    }
    clear() {
      this.db = {};
    }
  };
}

const StringDataBase = createSimpleMemoryDataBase<string>();

const sdb1 = new StringDataBase();
sdb1.set('a', 'awesome');
console.log(sdb1.getObject());
console.log('--- CLEAR SBD1 ---');
sdb1.clear();
console.log(sdb1.getObject());

type Constructor<T> = new (...args: any[]) => any;

function Dumpable<T extends Constructor<{ getObject(): object }>>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpableStringDataBase = Dumpable(StringDataBase);
const sdb2 = new DumpableStringDataBase();
sdb2.set('b', 'binoculars');
sdb2.dump();
