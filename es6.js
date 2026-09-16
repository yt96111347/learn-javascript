//논리 연산자 - logical operators

/**
 * 관리자페이지 접근 조건 : 
 * 1. 로그인된 상태일것
 * 2. 관리자 권한이 있을 것 (role이 admin)
 */

const user = {
  isloggedin : true,  // 로그인 여부
  role : "user",      // user, guest, admin
}

// AND 연산자 - 관리자 페이지 접근 체크
if (user.isloggedin && user.role=="admin"){
  console.log("👌관리자 페이지 접근 가능.")
} else{
  console.log("❌관리자 페이지 접근 불가능.")
}

// OR 연산자 - 로그인 했거나, admin인 경우 접근 가능한 페이지 체크
/**
 * 조건1 : 로그인 상태일 것
 * 조건2 : role이 admin인 경우
 */

if (user.isloggedin || user.role=="admin"){
  console.log("👌이 페이지 접근 가능.")
} else{
  console.log("❌이 페이지 접근 불가능.")
}

// NoT 연산자
if (!user.isloggedin){
  console.log("❌이 페이지 접근 불가능.")  
}

//spread syntax
const daysofweek3 = ["월", "화요일", "수", "목요일", "금", "토요일", "일"]
console.log("🚀 ~ daysofweek3:", daysofweek3)

const copydays = [...daysofweek3,"요소 뒷 추가"]
console.log("🚀 ~ copydays:", copydays)

const copydays2 = ["요소 앞 추가", ...daysofweek3]
console.log("🚀 ~ copydays2:", copydays2)

// 객체도 (키 밸류)도 똑같이 syntax(...객체명) 써서 카피 할 수 있다.
const copyuser = {
  ...user, 
  userage : 50,  // 새로운 키밸류 추가
  isloggedin : false // 기존 값인 경우 변경
}
console.log("🚀 ~ copyuser:", copyuser)

