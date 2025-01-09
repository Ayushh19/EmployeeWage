// Employee Wage Computation Program
console.log("Welcome to Employee Wage Computation Program");

// Define the EmployeeWage Class
class EmployeeWage {
    constructor(wagePerHour, maxHours, maxDays) {
        this.wagePerHour = wagePerHour; // Wage per hour
        this.maxHours = maxHours; // Maximum working hours
        this.maxDays = maxDays; // Maximum working days
    }

    // UC1: Check Employee Attendance
    checkAttendance() {
        const isPresent = Math.floor(Math.random() * 2); // Generates 0 or 1
        return isPresent === 1 ? "Present" : "Absent";
    }

    // UC2: Calculate Daily Wage
    calculateDailyWage(hoursWorked) {
        return hoursWorked * this.wagePerHour; // Wage calculation
    }

    // UC3 & UC4: Get Working Hours Using Switch Case
    getWorkingHours(attendance) {
        if (attendance === "Absent") return 0; // If absent, no hours

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

    // UC7: Class Method to Compute Monthly and Conditional Wages
    computeWages() {
        let totalWage = 0; // Total wage tracker
        let totalHours = 0; // Total hours tracker
        let totalDays = 0; // Total days tracker

        while (totalHours < this.maxHours && totalDays < this.maxDays) {
            totalDays++;
            const attendance = this.checkAttendance(); // Check attendance
            const hoursWorked = this.getWorkingHours(attendance); // Get working hours

            if (hoursWorked > 0) {
                const dailyWage = this.calculateDailyWage(hoursWorked); // Calculate daily wage
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
        console.log(`Total Wage: ₹${totalWage}`);
    }
}

// Instantiate the EmployeeWage Class
const wagePerHour = 20;
const maxHours = 100;
const maxDays = 20;

const employeeWage = new EmployeeWage(wagePerHour, maxHours, maxDays);

// Call the Class Method to Compute Wages
employeeWage.computeWages();
