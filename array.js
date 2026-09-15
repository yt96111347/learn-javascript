//배열: 순서를 가진 데이터들의 집합
const daysofweek = ["월", "화", "수", "목", "금", "토", "일"]
console.log(daysofweek)

const today = daysofweek[1]
console.log("🚀 ~ today:", today)

//객체: key value로 이루어진 속성들의 묶음
const student = {
  name : "이윤정",
  mbti : "ENTJ",
  isMale : false,
  useai : ["chatgpt", "gemini"]
}
console.log("🚀 ~ student:", student)

const studname = student["name"]
console.log("🚀 ~ studname:", studname)

const studentAi = student.useai
console.log("🚀 ~ studentAi:", studentAi, typeof(studentAi))


