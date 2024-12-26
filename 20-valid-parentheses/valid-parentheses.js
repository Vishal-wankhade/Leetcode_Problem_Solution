/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    

var stack = [];

for(var i = 0; i < s.length; i++){
    if(s[i] == '(' ||  s[i] == '[' || s[i] == '{' ){
        stack.push(s[i]);
    }
    else{
        if( s[i] == ')' && stack[stack.length - 1] !== '(' ||
            s[i] == '}' && stack[stack.length - 1] !== '{' ||
            s[i] == ']' && stack[stack.length - 1] !== '[')
        {
            return false;
           
        }
        else{
            stack.pop();
        }
        
    }
}

if(stack.length > 0){
    return false;
}else{
    return true;
}
};