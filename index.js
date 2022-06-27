/* Your Code Here */

const createEmployeeRecord = (array) => {    
    return { 
        firstName: array[0], familyName: array[1], title: array[2], payPerHour: array[3], timeInEvents: [], timeOutEvents:[]
    }
}

const createEmployeeRecords = recordsArray => {
    return recordsArray.map(record => createEmployeeRecord(record))
}

const createTimeInEvent = function(dateTime) {
    const [date, time] = dateTime.split(' ')

    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(time),
        date: date
    })

    return this
}

const createTimeOutEvent = function(dateTime) {
    const [date, time] = dateTime.split(' ')

    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(time),
        date: date
    })

    return this
}

const hoursWorkedOnDate = function(date) {
    const checkIn = this.timeInEvents.find(event => event.date == date)
    const checkOut = this.timeOutEvents.find(event => event.date == date)

    return (checkOut.hour - checkIn.hour) / 100
}

const wagesEarnedOnDate = function(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const findEmployeeByFirstName = (srcArray, firstName) => {
    return srcArray.find(record => record.firstName == firstName)
}

const calculatePayroll = employeeRecordsArray => {
    return employeeRecordsArray.reduce((wages, record) => {
        return wages + allWagesFor.call(record)
    }, 0)
}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

