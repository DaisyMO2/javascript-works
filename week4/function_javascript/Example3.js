// calculating the average score of students
function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
    total += scores[i];
    }
    return total / scores.length;
    }
    let studentScores = [85, 78, 92, 67, 88];
    let averageScore = calculateAverage(studentScores);
    console.log(`The average score is ${averageScore}`);