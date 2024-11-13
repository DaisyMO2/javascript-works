let score = 80;
if (score > 90 && score <= 100){
    console.log("A grade");
} else if (score > 75 && score <= 90){
    console.log("B grade");
}else if (score >= 50 && score <=75){
    console.log("C grade");
}else{
    console.log("fail");
}

//simplifying using a switch statement

let grade;
switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 75:
        grade = "B";
        break;
    case score >= 50:
        grade = "C";
        break;
    default:
        grade = "Fail";
}