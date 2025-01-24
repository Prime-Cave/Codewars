let number ={
    *[Symbol.iterator](){
        for(let i = 0; i <= 100; i++){
            yield i 
        }
    }
}

for(num of number){
    console.log(num);
    
}