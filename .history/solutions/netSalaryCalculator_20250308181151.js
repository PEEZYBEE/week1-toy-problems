// challenge-3/netSalaryCalculator.js
function netSalaryCalculator() {
    let basicSalary = parseFloat(prompt("Enter your basic salary:"));
    let benefits = parseFloat(prompt("Enter your benefits:"));
  
    let grossSalary = basicSalary + benefits;
  
    // Calculate PAYEE (Tax) - assuming tax rates are applied progressively
    let tax;
    if (grossSalary <= 24000) {
      tax = 0.1 * grossSalary; // 10% tax
    } else if (grossSalary <= 50000) {
      tax = 0.2 * grossSalary; // 20% tax
    } else {
      tax = 0.3 * grossSalary; // 30% tax
    }
  
    // NHIF and NSSF deductions (example percentages)
    let nhifDeduction = 0.01 * grossSalary; // Example 1% NHIF deduction
    let nssfDeduction = 0.05 * grossSalary; // Example 5% NSSF deduction
  
    let netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;
  
    alert("Gross Salary: " + grossSalary);
    alert("Tax (PAYEE): " + tax);
    alert("NHIF Deduction: " + nhifDeduction);
    alert("NSSF Deduction: " + nssfDeduction);
    alert("Net Salary: " + netSalary);
  }
  
  netSalaryCalculator();
  