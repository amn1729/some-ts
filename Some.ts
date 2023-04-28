// Better version of ||
// Preserves Types
// Usage: Some.Array(user?.data) -> [name, email, ...] or []
// Usage: Some.Array(user?.numbers, [1, 2, 3]) -> [n1, n2, ...] or [1, 2, 3]
// Usage: Some.String(user?.name) -> "user name" or ""
export class Some {
  static Array<T>(arr?: Array<T> | any, defaultValue?: Array<T>): Array<T> {
    if (arr === undefined) return [];
    if (Array.isArray(arr)) return arr;
    return defaultValue || [];
  }

  static String(str?: any, defaultValue?: string): string {
    if (str === undefined) return "";
    if (typeof str === "number") return str.toString();
    if (typeof str === "string") return str;
    return defaultValue || "";
  }

  static Number(num?: any, defaultValue?: number): number {
    if (num === undefined) return 0;
    if (typeof num === "string") return Number(num) || 0;
    if (typeof num === "number") return num;
    if (defaultValue !== undefined) return defaultValue;
    return 0;
  }

  static Object(val: any, defaultValue?: object): object {
    if (typeof val === "object" && !Array.isArray(val) && val !== null)
      return val;
    return defaultValue || {};
  }
  // No need to add Boolean here
}
