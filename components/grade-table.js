class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement
    this.noGradesElement = noGradesElement
  }
  updateGrades(grades) {
    this.tableElement.innerHTML = ''

    if (grades) {
      this.noGradesElement.className = 'd-none'
    } else {
      this.noGradesElement.className = ''
    }

    for (var i = 0; i < grades.length; i++) {
      var row = this.renderGradeRow(grades[i], this.deleteGrade)
      this.tableElement.append(row)
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade
  }
  renderGradeRow(data, deleteGrade) {
    var row = document.createElement('tr')

    var deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'DELETE'
    deleteBtn.className = 'btn btn-danger'
    deleteBtn.addEventListener('click', function () {
      deleteGrade(data.id)
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
    column.append(deleteBtn)
    row.append(column)

    return row
  }
}
