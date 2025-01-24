function UserCreator(name, score){
    this.name = name;
    this.score = score;
   }
   UserCreator.prototype.increment = function(){
    this.score++;
   };
   UserCreator.prototype.login = function(){
    console.log("login");
   };

   let eva = 'hello'
   

   const user1 = new UserCreator(eva, 9)
   user1.increment()

   

   const user2 = new UserCreator('Tomisin', 23)
   user2.increment()

   console.log(user2.score);
   console.log(user1.score);   