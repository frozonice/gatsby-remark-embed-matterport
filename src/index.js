'use strict'
const visit = require(`unist-util-visit`)

module.exports = ({ markdownAST }, options = { width: 853, height: 480 }) => {
  function isUrlValid(userInput) {
    var res = userInput.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    )
    if (res == null) return false
    else return true
  }
  visit(markdownAST, `inlineCode`, node => {
    const { value } = node
    if (value.startsWith(`matterport:`)) {
      const showcaseUrl = value.substr(11)

      if (isUrlValid(showcaseUrl)) {
        node.type = `html`
        node.value = `<div><iframe src="${showcaseUrl}" width="${options.width}" height="${options.height}"></iframe></div>`
      }
    }else if(value.startsWith(`mpembed:`)) {
      const showcaseUrl = value.substr(8)

      if (isUrlValid(showcaseUrl)) {
        node.type = `html`
        node.value = `<div><iframe src="${showcaseUrl}" width="${options.width}" height="${options.height}"></iframe></div>`
      }
    }
  })

  return markdownAST
}
