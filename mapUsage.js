let users = [{name:"ajay",active:true,score:10},
    {name:"Rahul",active:false,score:20},
    {name:"Neha",active:true,score:30}
]

// get total score of active users
// filter active -> scroe -> reducem ( sum)

let totalScore = users.filter(u=>u.active).map(u=>u.score).reduce((sum,s)=>sum+s,0);

console.log("Total Active Scroe is: "+ totalScore) // 40