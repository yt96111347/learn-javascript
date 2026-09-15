console.log("hello js")

// 변수: 값을 저장하는 이름을 가진 공간
let username = "태리";
console.log("🚀 ~ username:", username)

//username = "테스트"

console.log("username", username)

// 데이터 타입
const num = 10 //숫자
console.log("num", num, "num type", typeof num)

const text = " 안녕 ~ "
console.log("🚀 ~ text:", text)

var isDarkMode = true //불리언
console.log("🚀 ~ isDarkMode:", isDarkMode, typeof isDarkMode)

var empty = null
console.log("🚀 ~ empty:", empty, typeof empty)
/**
 * 함수: 특정 기능을 수행하도록 만든 코드 조각
 */

// function greeting (){
//   console.log(`${username} 님 반갑습니다.`)
//   // console.log(username, "님 반갑습니다.")
// }

// 화살표로 함수 선언 하는 걸로 변경됨
const greeting = () => {
  console.log(`${username} 님 반갑습니다.~~`)
  // console.log(username, "님 반갑습니다.")
}

//함수 실행
greeting()

// 미션 : "AI챗봇 수강생 태리 입니다. " 함수 만들기
const Hello =()=>{
  console.log(`AI챗봇 수강생 ${username} 입니다.`)
}

Hello()
// 파라메타
const greeting_f = (studname, usermbti) => {
  console.log(`${studname} 님 반갑습니다.~~`)
  console.log(` MBTI는 ${usermbti} 이시군요.~~`)
  // console.log(username, "님 반갑습니다.")
}
greeting_f()
greeting_f("태술리", "ISTJ")

//결과값 반환
const add =(num1, num2) => {
  return num1+num2
}

const sum = add(10,20)
console.log("🚀 ~ sum:", sum)

const doublesum = (num) =>{
  return num * 2
}

console.log("doublesum:", doublesum(sum))

