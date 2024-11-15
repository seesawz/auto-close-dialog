function sendID() {
  var dialogId = document.getElementById('dialogId').value
  var dialogIdArr = dialogId.split(' ')
  var message = {
    type: 'closeDialog',
    dialogId: dialogIdArr,
  }
  window.parent.postMessage(message, '*')
}

window.onload = function () {
  var btn = document.querySelector('#sendId')
  btn.addEventListener('click', sendID)
}
