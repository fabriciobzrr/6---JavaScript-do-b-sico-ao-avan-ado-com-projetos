let site = /www.\w+\.com|.com.br/

console.log(site.test("www.linkedin.com"))
console.log(site.test("www.youtube.com.br"))

let email = /\w+@\w+\.\w+[?\.\w+]/
console.log(email.test("fred@gmail.com"))
console.log(email.test("fred@gmail.com.info"))
