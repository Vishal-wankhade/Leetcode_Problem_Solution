/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

var countStudents = function(students, sandwiches) {
   
   var n = students.length;
    var circle = 0;
    var rect = 0
    
   for(var i = 0; i<n; i++){
    if(students[i] == 0){
        circle++;
    }else{
        rect++;
    }
   }

   for(var sandwich of sandwiches){
    if(sandwich == 0){
        if(circle > 0 ){
            circle--;
        }else{
            break;
        }
    }
    else{
        if(rect > 0 ){
            rect--;
        }else{
            break;
        }
    }
   }
  return circle + rect;
};
