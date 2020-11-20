class App {
  handleGetGradesError(error) {
    console.error(error)
  },
  handleGetGradesSuccess(grades) {
    console.log(grades)
  },
  constructor() {
    this.handleGetGradesError(),
    this.handleGetGradesSuccess()
  },
  getGrades() {
    $.ajax({
      url: 'https://sgt.lfzprototypes.com/api/grades'
      method: 'GET'
    })
    .error(this.handleGetGradesError())
    .success(this.handleGetGradesSuccess())
  },
  start() {
    this.getGrades()
  }
}
