const students = [
    { name: "Anna Reyes", grade: 92 },
    { name: "Ben Santos", grade: 85 },
    { name: "Carla Cruz", grade: 78 },
    { name: "David Lim", grade: 97 },
    { name: "Ella Ramos", grade: 74 }
];

// Grade Conversion Function
function getEquivalent(grade) {

    if (grade >= 97) return "1.0";
    else if (grade >= 94) return "1.25";
    else if (grade >= 91) return "1.5";
    else if (grade >= 88) return "1.75";
    else if (grade >= 85) return "2.0";
    else if (grade >= 82) return "2.25";
    else if (grade >= 79) return "2.5";
    else if (grade >= 76) return "2.75";
    else if (grade >= 75) return "3.0";
    else return "Failed";
}

// Academic Leader Function
function getAcademicLeader(grade) {

    if (grade >= 95) {
        return "1st Class Academic Leader";
    }
    else if (grade >= 90) {
        return "2nd Class Academic Leader";
    }
    else {
        return "-";
    }
}

// Show Grade Equivalent
function showGradeEquivalent() {

    const results = document.getElementById("gradeResults");

    results.innerHTML = "";

    students.forEach(student => {

        let equivalent = getEquivalent(student.grade);

        let remark = student.grade >= 75 ? "Passed" : "Failed";

        let leader = getAcademicLeader(student.grade);

        let row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.grade}</td>
                <td>${equivalent}</td>
                <td class="${remark.toLowerCase()}">
                    ${remark}
                </td>
                <td>${leader}</td>
            </tr>
        `;

        results.innerHTML += row;

    });

}