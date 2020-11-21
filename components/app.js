class App {
  handleGetGradesError(error) {
    console.error(error)
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
  }
  constructor(gradeTable) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.gradeTable = gradeTable
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
