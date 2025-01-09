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

// UC5: Calculate Monthly Wage
function calculateMonthlyWage(dailyWage) {
    const workingDays = 20; // Assume 20 working days
    return workingDays * dailyWage;
}

// UC6: Calculate Wages Until a Condition is Met
function calculateWagesWithCondition(maxHours, maxDays) {
    let totalWage = 0;
    let totalHours = 0;
    let totalDays = 0;

    while (totalHours < maxHours && totalDays < maxDays) {
        totalDays++;
        const attendance = checkAttendance();
        const hoursWorked = getWorkingHours(attendance);

        if (hoursWorked > 0) {
            const dailyWage = calculateDailyWage(hoursWorked);
            console.log(
                `Day ${totalDays}: Attendance: ${attendance}, Hours Worked: ${hoursWorked}, Daily Wage: ₹${dailyWage}`
            );
            totalWage += dailyWage;
            totalHours += hoursWorked;
        } else {
            console.log(`Day ${totalDays}: Attendance: ${attendance}, No wage for today.`);
        }
    }

    console.log(`Total Days Worked: ${totalDays}`);
    console.log(`Total Hours Worked: ${totalHours}`);
    return totalWage;
}

// Execute UC5 and UC6 computations
const attendance = checkAttendance();
console.log(`Employee is ${attendance}`);

// UC5: Monthly Wage
if (attendance === "Present") {
    const hoursWorked = getWorkingHours(attendance);
    const dailyWage = calculateDailyWage(hoursWorked);
    const monthlyWage = calculateMonthlyWage(dailyWage);
    console.log(`Working Hours: ${hoursWorked}`);
    console.log(`Daily Wage: ₹${dailyWage}`);
    console.log(`Monthly Wage: ₹${monthlyWage}`);
} else {
    console.log("No wage for today as the employee is absent.");
}

// UC6: Wage Computation Until Condition
const maxHours = 100; // Maximum total hours
const maxDays = 20; // Maximum total days
const totalConditionalWage = calculateWagesWithCondition(maxHours, maxDays);
console.log(`Total Wage (Under Conditions): ₹${totalConditionalWage}`);
