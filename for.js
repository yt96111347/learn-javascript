/**
 * for 문 
 * - 세가지 구성요소 : 초기화, 반복 조건식, 증감식
 */

for(let i=0; i < 5; i++){
  console.log(`${i}번째 실행중`)
}

const daysofweek = ["월", "화", "수", "목", "금", "토", "일"]

//요즘은 이런 반복문도 잘 안씀
for (let j=0; j<daysofweek.length;j++){
  console.log(`${j}번째 실행중, 요일은 ${daysofweek[j]}`)
}

// 향상된 for문 (배열인 경우에 한해서) 
// for each로 ~
daysofweek.forEach((member, index)=>{
  console.log(`${index}번째 실행중, 요일은 ${member}`)  
})

// 자주 사용되는 배열 함수1 (map)
const daysofweek2 = ["월", "화", "수", "목", "금", "토", "일"]

// const emojidays = daysofweek2.map((member)=>{
//   return `❤️${member}❤️`
// })
// 위 코드 (리턴이 한줄만 있는 경우)를 아래와 같이 축약해도 됨 
const emojidays = daysofweek2.map((member)=> `❤️${member}❤️`)
console.log("🚀 ~ emojidays:", emojidays)

// 자주 사용되는 배열 함수2 (filter)
// filter : 배열안의 요소들 중 특정 조건을 만족하는 요소들을 새로운 배열로 리턴
// 조건 : 글자수가 세글자 이상인 것만 리턴
const daysofweek3 = ["월", "화요일", "수", "목요일", "금", "토요일", "일"]
const filterdays3 = daysofweek3.filter((member) => member.length >=3)
console.log("🚀 ~ filterdays3:", filterdays3)

// 자주 사용되는 배열 함수3 (find)
// find : 배열안의 요소들 중 특정 조건을 만족하는 첫번째 요소를 리턴
// 조건 : 글자수가 세글자 이상인 것만 리턴 / 조건 만족하는 것 없으면 undefined리턴
const daysofweek4 = ["월", "화요일", "수", "목요일", "금", "토요일", "일"]
const finddays4 = daysofweek4.find((member) => member.length >=3)
console.log("🚀 ~ filterdays4:", finddays4)

// 자주 사용되는 배열 함수4 (every/some)
// every/some : 배열안의 요소들 중 특정 조건을 만족하는게 있는지 없는지 T / F 로 리턴
// 조건 : 글자수가 세글자 이상인 것 있는지 여부
// some : 하나라도 조건 만족 하면 true, 아니면 false
// every : 모든 요소가 조건을 만족해야 true, 아니면 false
const daysofweek5 = ["월", "화요일", "수", "목요일", "금", "토요일", "일"]
const filterdays5 = daysofweek5.some((member) => member.length ==3)
console.log("🚀 ~ filterdays5:", filterdays5)

