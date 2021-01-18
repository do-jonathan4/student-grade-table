var table = document.querySelector('tbody')
var p = document.querySelector('p')
var gradeTable = new GradeTable(table, p, form)

var header = document.querySelector('h2')
var pageHeader = new PageHeader(header)

var form = document.getElementById('form-add')
var gradeForm = new GradeForm(form)

var formUpdate = document.getElementById('form-update')
var gradeChange = new GradeChange(formUpdate)

var app = new App(gradeTable, pageHeader, gradeForm, gradeChange)
app.start()
