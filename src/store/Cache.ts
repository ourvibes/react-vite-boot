class Cache {
  _storage: Storage;

  _cursor: string;

  constructor(storage: Storage, cursor: string = '/') {
    this._storage = storage;
    this._cursor = cursor;
  }

  cursor(cursor: string) {
    return new Cache(this._storage, cursor);
  }

  getItem<T>(key: string): T | null {
    const value = this._storage.getItem(key);

    if (value === null) {
      return null;
    }

    try {
      return JSON.parse(value);
    } catch (err) {
      return null;
    }
  }

  setItem<T = any>(key: string, value: T) {
    this._storage.setItem(key, JSON.stringify(value));

    return this;
  }

  removeItem(key: string) {
    this._storage.removeItem(key);

    return this;
  }

  clear() {
    this._storage.clear();

    return this;
  }

  get<T>() {
    return this.getItem<T>(this._cursor);
  }

  set<T = any>(value: T) {
    return this.setItem(this._cursor, value);
  }

  remove() {
    return this.removeItem(this._cursor);
  }
}

export default Cache;
