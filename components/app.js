class App {
  handleGetGradesError(error) {
    console.error(error)
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)

    var total = 0
    for (var i = 0; i < grades.length; i++) {
      total += grades[i].grade
    }
    var newAverage = total / grades.length;
    this.pageHeader.updateAverage(newAverage)
  }
  constructor(gradeTable, pageHeader) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.gradeTable = gradeTable
    this.pageHeader = pageHeader
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
  }
}
