class App {
  handleGetGradesError(error) {
    console.error(error)
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
    this.getGrades()

    var total = 0
    for (var i = 0; i < grades.length; i++) {
      total += grades[i].grade
    }
    var newAverage = total / grades.length;
    this.pageHeader.updateAverage(newAverage)
  }
  createGrade(name, course, grade) {
    console.log(name, course, grade)
    $.ajax({
      headers: {
        "X-Access-Token": "QL4ulI2r"
      },
      url: 'https://sgt.lfzprototypes.com/api/grades',
      method: 'POST',
      data: {
        name: name,
        course: course,
        grade: grade
      },
      error: this.handleGetGradesError,
      success: this.handleGetGradesSuccess
    })
  }
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.createGrade = this.createGrade.bind(this)
    this.gradeTable = gradeTable
    this.pageHeader = pageHeader
    this.gradeForm = gradeForm
  }
  getGrades() {
    $.ajax({
      headers: {
        "X-Access-Token": "QL4ulI2r"
      },
      url: 'https://sgt.lfzprototypes.com/api/grades',
      method: 'GET',
      error: this.handleGetGradesError,
      success: this.handleGetGradesSuccess
    })
  }
  start() {
    this.getGrades()
    this.gradeForm.onSubmit(this.createGrade)
  }
}
