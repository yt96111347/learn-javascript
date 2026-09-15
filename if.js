// 조건문: 특정 조건에 따라 다르게 실행하는 구문
const score = 60

if (score >= 60){
  console.log("😊합격")
} else{
  console.log("😭불합격")
}

//삼항 연산자
score >=60 ? console.log("😊합격") : console.log("😭불합격")

console.log(score >=60 ? "😊합격" : "😭불합격")

let grade
if (score >= 90) {
  grade = "A" 
} else if (score >= 80){
  grade = "B" 
} else if (score >= 70){
  grade = "C" 
} else{
  grade = "D" 
}
console.log(grade)