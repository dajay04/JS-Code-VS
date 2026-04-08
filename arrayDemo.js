let response = [1 , 2 , 3 ];
              //0   1   2

response.push(12);
console.log(response); // 1,2,3,12

response.pop();
console.log(response); // 1,2,3

response.unshift(12);
console.log(response); // 12,1,2,3

response.shift();
console.log(response); // 1,2,3