class TimeLimitedCache {
  cache: Map<number, { value: number; ref: ReturnType<typeof setTimeout> }>;

  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const isExists = this.cache.has(key);
    if (isExists) clearTimeout(this.cache.get(key)!.ref);
    this.cache.set(key, {
      value,
      ref: setTimeout(() => this.cache.delete(key), duration),
    });
    return isExists;
  }

  get(key: number): number {
    if (this.cache.has(key)) return this.cache.get(key)!.value;
    else return -1;
  }

  count(): number {
    return this.cache.size;
  }
}

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.set(1, 5, 1000)); // true
console.log(timeLimitedCache.get(1)); // 5
console.log(timeLimitedCache.count()); // 1
