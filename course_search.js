"use strict";


//    {
//     CourseId: "PROJ500",
//     Title: "Introduction to Angular",
//     Location: "Classroom 1",
//     StartDate: "04/25/23",
//     Fee: "50.00",
//     }

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];


   function getCourseByCourseId(courses, courseId){
        for(let i = 0; i < courses.length ; i++){
        if(courses[i].CourseId == courseId){
            return courses[i];
        }
    }
   }




// When does the PROG200 course start?
console.log();
let PROG200Course = getCourseByCourseId(courses, "PROG200");
console.log(PROG200Course.StartDate);

// What is the title of the PROJ500 course?
console.log();
let PROJ500Course = getCourseByCourseId(courses, "PROJ500");
console.log(PROJ500Course.Title)


// What are the titles of the courses that cost $50 or less?
console.log();
console.log("courses under $50");
let coursesUnder50 = [];
for (let i = 0 ; i < courses.length ; i++){
    if(courses[i].Fee <= 50){
        coursesUnder50.push(courses[i].Title);
    }
}
console.log(coursesUnder50);
// for (let i = 0 ; i < coursesUnder50.length ; i++){
//     console.log(coursesUnder50[i].Title)
// }

/////////////////////////////
console.log();
console.log("without separate array");
for (let i = 0 ; i < courses.length ; i++){
    if(courses[i].Fee <= 50){
         console.log(courses[i].Title)
    }
}