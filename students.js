
let n=1;
let students = [
  {name: "Hope", score: 78},
  {name: "Alice", score: 92},
  {name: "John", score: 65},
  {name: "Mary", score: 88}
];
const average=(students)=>{
    let sum=0;
   
   for (let i=0;i<students.length;i++){

      
   sum+=students[i].score
     
     n=sum/students.length;   

   }
        return "the average is "+" "+n;
}
console.log(average(students));
const maximum=(students)=>{
    
   for (let i=0;i<students.length;i++){

      let first=students[0].score;
      if(first<students[i].score){
   first=students[i].score;
    return "the highest score is "+" "+students[i].score +" "+"by"+" " +students[i].name;
      }
     
   }
    
}
console.log(maximum(students));
const lowest=students =>{
for(let i=0;i<students.length;i++){
   let lowest=students[0].score;
   if(lowest>students[i].score){
      lowest=students[i].score;
      return "the lowest is"+" "+students[i].score+" "+"by"+" "+students[i].name;
   }
   
}

}
console.log(lowest(students));
