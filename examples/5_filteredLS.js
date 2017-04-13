
// 5)  ## FILTERED LS (Exercise 5 of 13)
var fs = require('fs');
var directory = process.argv[2];

fs.readdir(directory, function(err, list){
  if(err) {
    console.log(err);
  } else {
    for(var i = 0; i < list.length; i++) {
      //console.log(list[i]);
      // ensure files only included if file extension provided matches directory files name AFTER the "."
      if(list[i].indexOf(".") !== -1) {
        if((list[i].substr(list[i].indexOf(".") + 1) === process.argv[3])) { //txt
          console.log(list[i]);
        }
      }
    }
  }
});

// Nodeschool Solution:
// uses path and extname method which may be better for handling weird edge cases. More stable
    var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })


/*
Quick way to view files

left of > sign: everything want to print and view in VSCode.
>: will print everything to the left of it in a new file to the right and name that file according to the text
right of >: js file name

Then view code in VSCode but running: code verify.js

*/
learnyounode verify program.js > verify.js
$ code verify.js

// 1 line substitute to create and open printed verify information from learnyounodein VSCode
learnyounode verify program.js > verify-again.js && code verify-again.jsjen@jen-GE72-2QD ~/Documents/Dev/learnNode $ rm printToFile

▪Spearheaded Key Tracking Initiative across 13 sites, strengthening information security and improving accountability methodologies
▪Reinvented way commercial loans were documented and managed by developing an more user-friendly and interactive Request form saving my department time, errors, and $100,000 annually.
▪Developed process for submitting loan invoices into CashPro Credit portal, boosting client satisfaction 70%
▪Created a excel macro script, which tracked each employee's daily performance and then consolidated the data by teams. This compilation effectively influenced hiring/termination plan amongst 60 associates and allowed team to understand where additional training was needed.
▪Built an international real-time Event Management repository tool on SharePoint, which allowed teams to communicate, track, and post recovery plans with each other during emergency occasions
▪Led bank-wide Windows 7 operating system conversion for 900 associates across seven teams and managed vendor partnership
▪Leader of SharePoint intranet sites where I designed sites, recreated architectures, migrated sites, and controlled user access


▪Enrolled in Fullstack, which is an accelerated fullstack web development school
▪Focuses on JavaScript, Node.js, Express, MongoDB, Angular.js, HTML/CSS, Git, Test-Driven Development, and Object-Oriented Programming

Enrolled in Fullstack, an accelerated fullstack web development school
Specializes in Javascript, Node.js, Express, MongoDB, Angular.js, HTML/CSS, Test-Driven Development, Object-Oriented Programming, and Git
