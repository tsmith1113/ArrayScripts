"use strict";

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

   courses = getCourseItemInCategory(courses, ""){
    let matching = [];
    let CourseItems = courses.length;
    for(let i = 0; i < CourseItems; i++){
        if(courses[i].category == ""){
            matching.push(courses[i]);
        }
    }
    return matching;
   }

   let day = getCourseItemInCategory(courses, "11/22/22"){
    let nameDay = day.length;
    for(let i = 0; i < nameDay; i++){
        console.log(day[i].item + "Start time for " +day[i].StartDate);
    }

   }