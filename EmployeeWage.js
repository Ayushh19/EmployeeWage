// Employee Wage Computation Program
console.log("Welcome to Employee Wage Computation Program");

// UC1: Check Employee Attendance
function checkAttendance() {
    // Generate random number (0 or 1)
    const isPresent = Math.floor(Math.random() * 2); 
    return isPresent === 1 ? "Present" : "Absent";
}

// Execute attendance check
const attendance = checkAttendance();
console.log(`Employee is ${attendance}`);
