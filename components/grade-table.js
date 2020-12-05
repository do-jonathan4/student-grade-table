class GradeTable {
  constructor(tableElement, noGradesElement, formElement) {
    this.tableElement = tableElement
    this.noGradesElement = noGradesElement
    this.formElement = formElement
  }
  updateGrades(grades) {
    this.tableElement.innerHTML = ''

    if (grades) {
      this.noGradesElement.className = 'd-none'
    } else {
      this.noGradesElement.className = ''
    }

    for (var i = 0; i < grades.length; i++) {
      var row = this.renderGradeRow(grades[i], this.deleteGrade, this.changeGrade)
      this.tableElement.append(row)
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade
  }
  onChangeClick(changeGrade) {
    this.changeGrade = changeGrade
  }
  renderGradeRow(data, deleteGrade, changeGrade) {
    var row = document.createElement('tr')

    var deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'DELETE'
    deleteBtn.className = 'btn btn-danger btn-sm'
    deleteBtn.addEventListener('click', function () {
      deleteGrade(data.id)
    })

    var changeBtn = document.createElement('button')
    changeBtn.textContent = 'CHANGE'
    changeBtn.className = 'btn btn-success btn-sm'
    changeBtn.addEventListener('click', function () {
      changeGrade(data.id)
    })

    var column = document.createElement('td')
    column.textContent = data.name
    row.append(column)

    column = document.createElement('td')
    column.textContent = data.course
    row.append(column)

    column = document.createElement('td')
    column.textContent = data.grade
    row.append(column)

    column = document.createElement('td')
    column.append(deleteBtn, changeBtn)
    row.append(column)

    return row
  }
}
