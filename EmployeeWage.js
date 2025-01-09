// Employee Wage Computation Program
console.log("Welcome to Employee Wage Computation Program");

// UC1: Check Employee Attendance
function checkAttendance() {
    // Generate random number (0 or 1)
    const isPresent = Math.floor(Math.random() * 2); 
    return isPresent === 1 ? "Present" : "Absent";
}

// UC2: Calculate Daily Wage
function calculateDailyWage(hoursWorked) {
    const wagePerHour = 20; // Wage per hour
    return hoursWorked * wagePerHour;
}

// Execute attendance check
const attendance = checkAttendance();
console.log(`Employee is ${attendance}`);

// Calculate and display daily wage
if (attendance === "Present") {
    const fullDayHours = 8; // Full day hours
    const dailyWage = calculateDailyWage(fullDayHours);
    console.log(`Daily Wage: ₹${dailyWage}`);
} else {
    console.log("No wage for today as the employee is absent.");
}
