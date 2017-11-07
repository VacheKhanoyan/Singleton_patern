let instance = null;
count = 0;
class Singleton {
   constructor() {
     if(!instance){
        instance = this;
     }
     this.count = ++count ;
     return instance;
   }
}

let obj = new Singleton();
console.log(obj.count);

//for test

setTimeout(function() {
  let obj1 = new Singleton();
  console.log(obj1.count);
 },10);

setTimeout(function() {
  let obj2 = new Singleton();
  console.log(obj2.count);
 },10);
 
 console.log(count);
