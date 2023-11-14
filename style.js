//let b;
//while(true){
//    b = prompt("ismingizni kiriting")
//    if(b == "stop"){
//        console.log("Sikl tuxtadi")
//        break
//    }
//    console.log(b)
//}

//let a;
//a = prompt("son ki")
//for(i=1; i<=a.length; i++){
//    console.log(i)
//}

//let son = [20,30,60];
//let yig = 0;

//for(i=1; i<=son.length; i++){
//    yig +=son[i];
//    if(yig >= 100){
//        console.log("ok")
//        break
//    }
//    console.log(i)
//}

//let email = "mehriddin92@gmail.com"
//if(email.includes(Number)||(email.length >= 12 &&email.includes("@gmail.com"))){
//    console.log("Email to'g'ri")
//}
//else{
//    console.log("email xato")
//}

//let password = "lefkmdfkrewlspd3456"
//
//
//if(password.includes(Number) || password.length >= 7){
//    console.log("Password to'gri")
//}
//else{
//    console.log("Password xato")
//}

//let a = +prompt("son yozing");
//switch (a) {
//  case 1:
//    console.log("dushanba");
//    break;
//  case 2:
//    console.log("seshanba");
//    break;
//  case 3:
//    console.log("chorshanba");
//    break;
//  case 4:
//    console.log("payshanba");
//    break;
//  case 5:
//    console.log("juma");
//    break;
//  case 6:
//    console.log("shanba");
//    break;
//  case 7:
//    console.log("Yakshanba");
//    break;
//}


function FormSubmit(){
    let username = document.getElementById('#username');
    let password = document.getElementById('#password');


    let userNameY = username.value;
    let passwordY = password.value;


    let hasError = false;

    if(userNameY.length <= 3 || isNaN(userNameY) || userNameY.length === 0){
        console.log("Xato username");
        userNameY == '';
        hasError = true;

       
    }

    if(passwordY.length <=8 || passwordY.length === 0){
        console.log("Xato password");
        passwordY = '';
        hasError = true;
    }
   

    if(hasError){
        console.log("Username: " + userNameY);
        console.log("Password: " + passwordY);

        userNameY = '';
        

    }
}