// https://codeberg.org/anhsirk0/some-ts

// Better version of || (it Preserves Types runtime)
// Usage: Some.Array(user?.data) -> [name, email, ...] or []
// Usage: Some.Array(user?.numbers, [1, 2, 3]) -> [n1, n2, ...] or [1, 2, 3]
// Usage: Some.String(user?.name) -> "user name" or ""

export class Some {
  static Array<T = any>(arr?: any, defaultValue?: Array<T>): Array<T> {
    if (Array.isArray(arr)) return arr;
    return defaultValue || [];
  }

  static String(str?: any, defaultValue?: string): string {
    if (typeof str === "number") return str.toString();
    if (typeof str === "string") return str;
    return defaultValue || "";
  }

  static Number(num?: any, defaultValue?: number): number {
    if (typeof num === "string") return Number(num) ?? defaultValue ?? 0;
    if (typeof num === "number") return num;
    if (defaultValue !== undefined) return defaultValue;
    return 0;
  }

  static Boolean(b?: any, defaultValue?: boolean): boolean {
    if (typeof b === "boolean") return b;
    if (b === true.toString()) return true;
    if (b === false.toString()) return false;
    if (defaultValue !== undefined) return defaultValue;
    return Boolean(b);
  }

  static Object(obj?: any, defaultValue?: object): object {
    if (typeof obj === "object" && !Array.isArray(obj) && obj !== null)
      return obj;
    return defaultValue || {};
  }
}
