class GradeChange {
  constructor(updateElement) {
    this.updateElement = updateElement
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.updateElement.addEventListener('submit', this.handleSubmit)
    this.updateElement.addEventListener('reset', this.nevermind)
  }
  copyUser(data) {
    console.log(data)
    formUpdate.parentNode.classList.remove('d-none')
    // this.updateElement.parentNode.classList.remove('d-none')
    form.parentNode.classList.add('d-none')

    var changeName = document.getElementById('changeName')
    var changeCourse = document.getElementById('changeCourse')
    var changeGrade = document.getElementById('changeGrade')

    changeName.value = data.name
    changeCourse.value = data.course
    changeGrade.value = data.grade
  }
  nevermind(event) {
    console.log('hello')
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
  // form.parentNode.classList.remove('d-none')
  // formUpdate.parentNode.classList.add('d-none')
  // }
}
