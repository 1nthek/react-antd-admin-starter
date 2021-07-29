class Utils {
  /**
   * Get first character from first & last sentences of a username
   */
  static getNameInitial(name: string): string {
    const initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  }
}

export default Utils;
