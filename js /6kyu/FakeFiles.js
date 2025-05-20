// In Kata #1-4 in this series, we learned the fundamentals and features of ES6 classes including ES6 class syntax, classical inheritance in ES6 (as opposed to prototypal inheritance in all previous versions of ECMAScript/Javascript), getters and setters. In Kata #5 of this Series we began to apply our knowledge of ES6 classes to solve the challenge, but the challenge was still a bit Codecademy-like (traning level code) and did not resemble a real world application. Therefore, in this Kata of the series, we are going to apply our knowledge of ES6 class syntax and features in a semi-real world application.

class File {
    constructor(_fullname, content){
        Object.assign(this, {_fullname, content})
    }
    get fullname(){
        return this._fullname;
    }
    get filename(){
        let value = this._fullname.slice(-1,-3)
        return value
    }
    getContents(){

    };
    write(str){

    };
    gets(){

    };
    getc(){

    }
  }

//   var myFile = new File("hello.txt", "Hello World");
//   console.log(myFile.fullname); // hello.txt
//   myFile.fullname = "goodbye.txt"; // Reassignment should fail
//   console.log(myFile.fullname); // still "hello.txt"

  var file1 = new File("hello_world.txt", "Hello World");
  console.log(file1.filename); // "hello_world"
  file1.filename = "goodbye_world"; // Reassignment should fail
  console.log(file1.filename); // still "hello_world"
  var file2 = new File("class.phptester.php", "<?php /* Some PHP code here */ ?>");
  console.log(file2.filename); // "class.phptester" - the filename should be correctly identified even if the filename itself contains the '.' character