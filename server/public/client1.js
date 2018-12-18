
let employeeArray = [];
let salary = 0;
const monthsInYear = 12;
const maxMonthlySal = 20000;

// employee class constructor
class Employee {
    constructor(fName, lName, employeeID, jobTitle, annualSalary) {
        this.fName = fName;
        this.lName = lName;
        this.employeeID = employeeID;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    } // end constructor
} // end class

// jQueary ready function
// click action
$(document).ready(function () {
    console.log('jQueary is ready!');
    $('#submit').on('click', userInput);
    $('#submit').on('click', updateExpensis);
    $('.tableBody').on('click', '.deleteEmployeeButton', deleteEmployee )

// function to make new Employee = user input / set values
    function userInput() {
        let newEmp = new Employee($('.firstNameInput').val(),
            $('.lastNameInput').val(), $('.emplIDInput').val(),
            $('.empTitleInput').val(), $('.annualSalaryInput').val());

// push user info
        employeeArray.push(newEmp);
    }

});

// function to update salary
function updateExpensis() {
    //let totalSalary = 0;
    let outputElement = $('.tableBody');
    outputElement.empty();
    for (employee of employeeArray) {
        outputElement.append('<tr><td>' + employee.fName +
            '</td><td>' + employee.lName + '</td><td>' + employee.employeeID +
            '</td><td>' + employee.jobTitle + '</td><td>' +
            '$' + Number(employee.annualSalary).toFixed(2) + '</td><td>' +
            '<button class="deleteEmployeeButton">Delete</button>' + '</td></tr>');
        salary += Number(employee.annualSalary);
        console.log(salary);
       // $('#monthlySalary').append('<h4> Monthly Salary: $' + totalSalary.toFixed(2) + '</h4>');

    }

    // console.log(totalSalary);
    clearInput();
    updateSalary(salary);
}

// Clear inout fields after button click function
function clearInput() {
    $('.firstNameInput').val('');
    $('.lastNameInput').val('');
    $('.emplIDInput').val('');
    $('.empTitleInput').val('');
    $('.annualSalaryInput').val('');
    console.log('cleared input');
}

// update Salary function
function updateSalary() {
   // console.log('in Salary:', allSalary);
    let monthlySalary = salary / monthsInYear ;
    let monthSal = $('#monthlySalary');
    monthSal.empty();
    monthSal.append('<h2> Monthly Salary: $' + monthlySalary.toFixed(2) + '</h2>');
    if (monthlySalary > maxMonthlySal) {
        monthSal.css('background-color', 'red');
    }
}

function deleteEmployee() {
    // What is $(this)? It is the button that was clicked on.
    let deletedEmployeeSalary = $(this).parent().prev().prev().text();
    console.log(deletedEmployeeSalary);
    monthlySalary -= parseInt(deletedEmployeeSalary) / 12;
    $('#monthly-total').html(salary);

    if (monthlySalary > maxMonthlySal) {
        // background-color is the div color
        // color is the text color
        $('#monthlySalary').css('color', 'red');
    } else {
        $('#monthlySalary').css('color', 'black');
    }
    $(this).parent().parent().remove(); // Removes the tr
}

