const set1= [12, 13, 6, 10]
const set2 = [13, 10, 16, 15];
var found;
let set;
let Sum_comm = 0;
let Sum_dist = 0;

set= set1.concat(set2)
for(const i in set ){
    found=false;
    for(const j in set){
        if(set[i]== set[j] && i !==j){
            found=true;
            Sum_comm += set[i]
        }
    }
    if(found == false){
       Sum_dist += set[i] 
    }
}
console.log("la somme des el communs est ",Sum_comm)
console.log("la somme des el distincts est ",Sum_dist)
