//默认的ID
const defaultId = ['']

//默认的Class
const defaultClass = ['.v-modal', '.el-dialog__wrapper']

const doms = []

window.onload = function () {
  defaultId.forEach((id) => {
    if (id) {
      doms.push(document.querySelector(id))
    }
  })
  defaultClass.forEach((className) => {
    if (className) {
      doms.push(document.querySelector(className))
    }
  })

  //从body中移除doms
  doms.forEach((dom) => {
    if (dom) {
      let parent = dom.parentElement
      parent.removeChild(dom)
    }
  })
  // 发送消息到背景脚本
  chrome.runtime.sendMessage({ action: 'removeDialogs' }, (response) => {
    console.log(response.status)
  })
}
