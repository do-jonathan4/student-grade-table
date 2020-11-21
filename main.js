var table = document.querySelector('table')
var gradeTable = new GradeTable(table)

var header = document.querySelector('h2')
var pageHeader = new PageHeader(header)

var app = new App(gradeTable, pageHeader)
app.start()
