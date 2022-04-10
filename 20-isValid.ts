function isValid(s: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = { "]": "[", "}": "{", ")": "(" };
  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    if ("({[".includes(str)) {
      stack.push(str);
    } else {
      if (stack.length === 0 || stack.pop() !== map[str]) return false;
    }
  }
  return stack.length === 0;
}

console.log(isValid("(()}"));
