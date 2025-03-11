let students = [
    { name: "Myke", firstGrade: 8, secondGrade: 7 },
    { name: "Gabriel", firstGrade: 5, secondGrade: 6 },
    { name: "Lucas", firstGrade: 9, secondGrade: 8 },
    { name: "Pedro", firstGrade: 4, secondGrade: 5 }
];

function calculateAverage(firstGrade, secondGrade) {
    return (firstGrade + secondGrade) / 2;
}

function checkContestResult(student) {
    let average = calculateAverage(student.firstGrade, student.secondGrade);
    if (average >= 7) {
        alert(`${student.name} tem uma média de ${average.toFixed(2)}. \nParabéns ${student.name}, você passou no concurso!`);
    } else {
        alert(`${student.name} tem uma média de ${average.toFixed(2)}. \nDesculpe ${student.name}, você não passsou no concurso..`);
    }
}

students.forEach(student => {
    checkContestResult(student);
});