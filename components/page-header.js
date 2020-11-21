class PageHeader {
  constructor(headerElement, pageHeader) {
    this.headerElement = headerElement
    this.pageHeader = pageHeader
  }
  updateAverage(newAverage) {
    var header = document.querySelector('.badge')
    header.textContent = newAverage
  }
}
