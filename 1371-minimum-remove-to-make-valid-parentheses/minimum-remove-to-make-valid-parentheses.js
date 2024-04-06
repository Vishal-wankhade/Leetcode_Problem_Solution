/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
        const stack = []; 
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                stack.push(i);
            } else if (s[i] === ')') {
                if (stack.length && s[stack[stack.length - 1]] === '(') {
                    stack.pop();
                } else {
                    stack.push(i);
                }
            }
        }
        
        let result = '';
        for (let i = 0; i < s.length; i++) {
            if (stack.length && i === stack[0]) {
                stack.shift();
                continue;
            }
            result += s[i];
        }
        
        return result;
};