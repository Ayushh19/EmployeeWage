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

// UC3: Add Part-Time Employee and Wage
function getWorkingHours(attendance) {
    if (attendance === "Present") {
        const isPartTime = Math.floor(Math.random() * 2); // 0 or 1
        return isPartTime === 1 ? 4 : 8; // 4 for part-time, 8 for full-time
    }
    return 0; // No hours if absent
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
