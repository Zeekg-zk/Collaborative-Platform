import cookie from "js-cookie";

/**
 * θ·ε cookie
 * @param key string
 */
export function getCookie(key: string): string | undefined {
  return cookie.get(key);
}

/**
 * θΏε cookie
 * @param key string
 */
export function setCookie(key: string, value: string): void {
  cookie.set(key, value);
}
