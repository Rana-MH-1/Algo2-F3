const set1= [12, 13, 6, 10]
const set2 = [13, 10, 16, 15];
let htab = new Map()

let set;
let Sum_comm = 0;
let Sum_dist = 0;


set= set1.concat(set2)
for(const i in set){
    if(htab.has(set[i])== false){
      htab.set(set[i],1)  
    }
    else {
        htab.set(set[i], htab.get(set[i]) + 1)
    }
}

console.log(htab)

for (const item of htab){
    if(item[1]>1){
        Sum_comm = Sum_comm + (item[0]*item[1])
    }
    else {
        Sum_dist = Sum_dist + item[0]
    }
}


console.log("la somme des el communs est ",Sum_comm)
console.log("la somme des el distincts est ",Sum_dist)
