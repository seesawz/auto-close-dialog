chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'removeDialogs') {
    console.log('Received message to remove dialogs')
    sendResponse({ status: 'success' })
  }
})
