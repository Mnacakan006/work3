// let num = 5
// let arr = []
// for (let i = 1; i <= num; i++) {
//     var number = Math.round(Math.random() * 99)
//     arr.push((number))
// }
// console.log();
// function filter() {
//     let count = 1
//     let key = false
//     while (true) {
//         let arr = []
//         for (let i = 0; i < count; i++) {
//             arr.push([])
//             let sum = 0
//             for (let index = 0; index < count; index++) {
//                 arr[i][index] = Math.round(Math.random() * 89 + 10)
//                 sum += arr[i][index]
//             }
//             if (sum % 37 === 0) key = true
//         }
//         if (key == true) { return arr }
//         count++
//     }
// }

// console.log(filter());

// function fib (n){
//     if(n==1)return 0;
//     if(n==2)return 1;
//     return fib(n-1)+fib(n-2)
// }
// console.log(fib(9));

// function result(n){
//     if(n==1) return 1
// return result(n-1)+n
// }
// console.log(result(7));
// function result(count, n) {
//     if (count <= 1) return 0;
//     return count % n ? result(--count,n) : count + result(--count, n)
// }
// console.log(result(57,2));

// let x = 15
// setTimeout((n) => console.log(n), 0, 20)
// setTimeout((n) => console.log(n), 0, 20)


// function password(n) {
//     if (n == 0) return Math.round(Math.random() * 35).toString(36)
//     return Math.round(Math.random() * 35).toString(36) + password(n - 1)
// }
// setTimeout((n) => console.log(n), 500, "es skseci generacnel parolner")
// let time = setInterval(() => { console.log( " es generacreci ays parol@  " + password(8)) }, 500)
// setTimeout(() => { clearInterval(time) }, 10000)
// setTimeout((n) => console.log(n), 10000, "es generacri 20 parolner")

// function random(){
//     return Math.round(Math.random()*255)
// }
// setInterval(() =>{
// document.body.style.backgroundColor = `rgb(${random()},${random()},${random()})`
// },500

// )
// function sum(n){
//     if(n === 0) return 0:
//     return sum(n-1)
// }

//  function min(...a){
//     let max = 0;
//     for(let item of a){
//         if(item>max){
//             max = item
//         }
//     }
//     return max
//  }
// console.log(maximum(4,5,7));

// function time(...a){

// }
// console.log(time("jrfdjhgfjhfjhn","hsbrj","hfjhjfw","wrohwfo"));

// function result(){
//     return this
// }

// const obj_2 = {
//     name:"Jerry"
// } 

// const obj = {
//     name: "Tom",
//     age: 20,
//     sey: result.bind(obj_2),
// }
// console.log();

// function result(){
//     return this
// }

// const obj = {
//     name: "Tom",
//     age: 18,
//     sey: result,
//     seyName: function(status){
//         return{
//         name: this.name,
//         age: this.age,
//         Status:status,

//         }
//     } 
// }

// const obj_2 = {
//     name:"Jery",
//     age:20
// }

// console.log(obj.seyName.bind(obj_2)("working"));
// console.log(obj.seyName.apply(obj_2,["not working"]));


// function func(){
//     return func.name
// }
// console.log(func());

// function cout(num){
// return Array.from(String(num)).reduce((sum,item)=>item%2 ? sum += +item : sum -= +item,0)
// }

// console.log(cout(689));

// function result(num){
//     num = Array.from(String(num));
//     if(num.length==1) return +num[0];
//     return +num[num.length-1] + result(num.slice(0,num.length-1).join(""))
// }
// console.log(result(1597));

// function text(a){
//     let i = a.split("")
//     let sum = i.some(item => item == "@")
//     if(i[0] == "@" || i[-1] == "@"){return false}
//     return sum
// }
// console.log(text("ohfoijae@nf"));


// let user_1 = {
//     name: "Tom",
//     beart: 2006,
//     tariq: function tar(){
//         let d = new Date()
//         return d.getFullYear() - this.beart
//     }
// }

// console.log(user_1.tariq());

// let obj = Object.create({}, {
//     name: {
//         value: "Tom",
//         enumerable:false,
//         writable:true,
//         configurable:false,
//     },
//     age: {
//         value: 2000,
//         enumerable:true,
//         writable:true,
//         configurable:true,
//     },
//     year: {
//         get() {
//             return new Date().getFullYear - this.age
//         },
//         set(value) {
//             return this.age = value
//         }
//     }
// }
// )
// console.log(obj.year);

// let arr= [1,2,3]
// Array.prototype.sum = function(){
//     return this.reduce((sum,item)=>sum +=item,0)
// }
// console.log(arr.sum());

// String.prototype.rep = function (n) {
//     let s = '';
//     for (let i = 1; i <= n; i++) {
//         s += this
//     }
//     return s
// }
// console.log("hello".rep(8));















