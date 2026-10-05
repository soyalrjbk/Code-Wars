/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

function getSum(a, b)
{
  //a=5; b=-1
  //c=5+4+3+2+1+0+(-1)
  
  //a=3; b=7
  //c=3+4+5+6+7
  
  //a=7; b=7
  //c=a || c=b
  
   //Good luck!
  
  let c=0
  if(a>b){ //a=7; b=2
    for(let i=b; i<=a; i++){
      c+=i; //0+2+3+4+5+6+7
    }
     return c;
  }
 
  
  else if (b>a){
    for(let i=a; i<=b; i++){
      c+=i;
    }
      return c;
  }

  
  else{
    return a;
  }
}