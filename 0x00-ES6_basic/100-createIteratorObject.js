export default function createIteratorObject(report) {
    const emps = [];
    for (const dept of Object.keys(report.allEmployees)) {
        for (const emp of report.allEmployees[dept]) {
            emps.push(emp);
        }
    }

    return emps;
}