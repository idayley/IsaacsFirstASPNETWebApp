


document.getElementById("myBtn").addEventListener("click", function calcGrade() {
    var assignments = document.getElementById("assignments").value;
    var groupProject = document.getElementById("groupProject").value;
    var quizzes = document.getElementById("quizzes").value;
    var exams = document.getElementById("exams").value;
    var intex = document.getElementById("intex").value;

    var assignmentsW = 50;
    var groupProjectW = 10;
    var quizzesW = 10;
    var examsW = 20;
    var intexW = 10;

    var assignmentsF = (assignments / 100) * assignmentsW;
    var groupProjectF = (groupProject / 100) * groupProjectW;
    var quizzesF = (quizzes / 100) * quizzesW;
    var examsF = (exams / 100) * examsW;
    var intexF = (intex / 100) * intexW;

    var overall = (assignmentsF + groupProjectF + quizzesF + examsF + intexF);
    overall = overall.toFixed(2);

    var letterGrade;

    if (overall >= 94) {
        letterGrade = "A"
    } else if (overall >= 90) {
        letterGrade = "A"
    } else if (overall >= 87) {
        letterGrade = "B+"
    } else if (overall >= 84) {
        letterGrade = "B"
    } else if (overall >= 80) {
        letterGrade = "B-"
    } else if (overall >= 77) {
        letterGrade = "C+"
    } else {
        letterGrade = "F"
    }

    alert("You scored " + overall + "% overall, and your final grade was " + letterGrade)


});