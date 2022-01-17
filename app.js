// // question no # 1

// console.log("question no # 1")
// var itemsArray = [
//     {name:"juice",price:"50",quantity:"3"},
//     {name:"cookie",price:"30",quantity:"9"},
//     {name:"shirt",price:"880",quantity:"1"},
//     {name:"pen",price:"100",quantity:"2"}

// ];

// let a = itemsArray[0].price * itemsArray[0].quantity;
// let b = itemsArray[1].price * itemsArray[1].quantity ;
// let c = itemsArray[2].price * itemsArray[2].quantity;
// let d = itemsArray[3].price * itemsArray[3].quantity ;


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log("-------Total Price-------");
// console.log(a+b+c+d);


// // question no # 2
// console.log("question no # 2");


// let personalInfo = {
//     name: "etc",
//     email: "etc@gmail.com",
//     password: "etc",
//     age: "12",
//     gender: "male",
//     city: "karachi",
//     country: "pakistan",
// };

// console.log(personalInfo.hasOwnProperty("age"));
// console.log(personalInfo.hasOwnProperty("country"));
// console.log(personalInfo.hasOwnProperty("firstName"));
// console.log(personalInfo.hasOwnProperty("lastName"));

// // question no # 3
// console.log("question no # 3");


// function Person(name,email,password,gender,city,country) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.gender = gender;
//     this.city = city;
//     this.country = country;
// };

// let personalBio = new Person("Muhammad","etc@gmail.com","etc","male","karachi","pakistan");
// /*console.log(personalBio.name);
// console.log(personalBio.email);
// console.log(personalBio.password);
// console.log(personalBio.gender);
// console.log(personalBio.city);
// console.log(personalBio.country);*/
// console.log(personalBio);






const CountNotes = () => {
    let amount = document.getElementById("amount").value
    let notes = [500, 100, 50, 20, 10, 5, 1];
    let noteCounter = Array(7).fill(0);

    if (amount >= 100 && amount <= 100000) {
        document.write("Currency Count " + "<br/>");
        for (let i = 0; i <= notes.length; i++) {
            noteCounter[i] = Math.floor(amount / notes[i]);
            amount = amount - noteCounter[i] * notes[i];


        }

    }
    else {
        alert("enter amount multiple of 100")
    }
    // Print no of notes

    for (let i = 0; i < notes.length; i++) {

        if (noteCounter[i] != 0) {
            document.write(notes[i] + " : "
                + noteCounter[i] + "<br/>");
        }
    }
}

