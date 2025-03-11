/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {

let ans = 0;

let left = 0;

let obj = {
    a: 0,
    b: 0,
    c: 0
}

for(let right = 0; right <= s.length -1; right++){
    
    obj[s[right]]++;

    while(obj.a > 0 && obj.b > 0 && obj.c > 0){
        ans += s.length - right;
        obj[s[left]]--;
        left++;
    }


}
 return ans;
    
};