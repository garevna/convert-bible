import { initResult } from './initResult'

const newTestamentFirstBookName = 'От Матфея святое благовествование'

const { synodal: text } = require('../assets')

export function synodal () {
  const lines = text.split('\r\n').filter(item => !!item)
  const bookNames = text.match(/\$\$\$ (.*) \$\$\$/gm).map(item => item.replace(/\$\$\$/g, '').trim())
  const books = bookNames
    .map(bookName => lines.findIndex(line => line.indexOf(bookName) !== -1))
    .map((bookIndex, index, indexes) => ({ title: bookNames[index], interval: [bookIndex + 1, indexes[index + 1] || lines.length - 1] }))
    .map(record => Object.assign(record, { content: lines.slice(...record.interval)}))

  const result = initResult(['Ветхий Завет', 'Новый Завет'])

  let covenentIndex = 0

  for (const book of books) {
    if (book.title === newTestamentFirstBookName) covenentIndex++
    const chapters = book.content
      .filter(line => line.indexOf('***') !== -1)
      .map(chapter => book.content.findIndex(line => line === chapter))
      .map((chapterNum, index, arr) => ([chapterNum + 1, arr[index + 1] || book.content.length - 1]))
      .map(nums => book.content.slice(nums[0], nums[1]))

    result[covenentIndex].books.push({
      title: book.title,
      chapters
    })
  }

  return result
}
