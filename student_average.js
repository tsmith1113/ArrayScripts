"use strict";

let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];


   let studentsLength = students.length;
   for(let currentStudentIndex = 0; currentStudentIndex < studentsLength; currentStudentIndex++ ){
    let student = students(currentStudentIndex);

    let scoreTotal = 0;
    let scoresLength = student.scores.length;
    for(let currentScoreIndex = 0; currentScoreIndex < scoresLength; currentScoreIndex++){
        scoreTotal += student.scores[currentScoreIndex];
    }
    let scoreAverage = scoreTotal / scoresLength;
    console.log(`${student.name} ${scoreAverage}` );
   }

 