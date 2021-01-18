class GradeChange {
  constructor(updateElement) {
    this.updateElement = updateElement
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.updateElement.addEventListener('submit', this.handleSubmit)
  }
  copyUser(data) {
    console.log(data)
  }
  // onSubmit(changeGrade) {
  //   this.changeGrade = changeGrade
  // }
  // handleSubmit(event) {
  //   event.preventDefault()

  //   var formData = new FormData(event.target)
  //   var formName = formData.get('name');
  //   var formCourse = formData.get('course');
  //   var formGrade = formData.get('grade');

  //   this.changeGrade(formName, formCourse, formGrade)

  //   event.target.reset()
  // }
}
