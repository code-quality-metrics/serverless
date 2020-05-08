const btnTest = document.querySelector('.button-test')
btnTest.addEventListener('click', function () {
  console.log('btnTest', btnTest)
  const now = Date.now()
  location.assign('/info?start=' + now)
})