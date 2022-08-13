alert ("مرحباً بك في موقعي الذي سيحسب درجتك!!");

let grade = prompt ("اكتب درجتك بالأرقا")

console.log(grade);

if (grade >= 90){
   ("لقد حصلت على امتيا")
}
else if (grade >= 80){
    ("لقد حصلت على جيد جد")
}
else if (grade >= 70){
    ("لقد حصلت على جيد")
}
else if (grade >= 60){
    ("لقد حصلت على مقبول")
}
else if (grade >= 50){
    ("لقد حصلت على ضعيف")
}
else{
    ("راسب")
}