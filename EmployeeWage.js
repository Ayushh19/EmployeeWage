// Employee Wage Computation Program
console.log("Welcome to Employee Wage Computation Program");

// UC1: Check Employee Attendance
function checkAttendance() {
    const isPresent = Math.floor(Math.random() * 2); // Generates 0 or 1
    return isPresent === 1 ? "Present" : "Absent";
}

// UC2: Calculate Daily Wage
function calculateDailyWage(hoursWorked) {
    const wagePerHour = 20; // Wage per hour
    return hoursWorked * wagePerHour;
}

// UC3 & UC4: Get Working Hours Using Switch Case
function getWorkingHours(attendance) {
    if (attendance === "Absent") return 0;

    const employeeType = Math.floor(Math.random() * 2); // 0 for Part-Time, 1 for Full-Time
    switch (employeeType) {
        case 0:
            return 4; // Part-time hours
        case 1:
            return 8; // Full-time hours
        default:
            return 0; // No hours
    }
}

// Execute attendance check
const attendance = checkAttendance();
console.log(`Employee is ${attendance}`);

// Calculate and display wage based on hours worked
if (attendance === "Present") {
    const hoursWorked = getWorkingHours(attendance);
    const dailyWage = calculateDailyWage(hoursWorked);
    console.log(`Working Hours: ${hoursWorked}`);
    console.log(`Daily Wage: ₹${dailyWage}`);
} else {
    console.log("No wage for today as the employee is absent.");
}
