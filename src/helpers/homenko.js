import { initResult } from './initResult'

const covenantNames = ['Старий Завіт', 'Новий Завіт']

const { homenko: sourceText } = require('../assets')

export function homenko () {
  const delimiters = sourceText.match(/_____(.*)_____/gm)

  let text = sourceText.replaceAll('\r\n', '\n')

  delimiters.forEach(delimiter => { text = text.replace(delimiter, '') })

  const covenantNames = text.match(/\#\#\# (.*) \#\#\#/gm)
  const covenants = text.split(covenantNames[0])[1].split(covenantNames[1])

  const result = initResult(covenantNames.map(item => item.replaceAll('###', '').trim()))
  covenants.forEach((covenant, index) => Object.assign(result[index], { books: createJSONFromText(covenant) }))
  return result
}

function createJSONFromText (fragment) {
  const bookNames = fragment.match(/\$\$\$ (.*) \$\$\$/gm).map(title => title.replaceAll('$$$', '').trim())

  const books = fragment.match(/\$\$\$ (.*) \$\$\$/gm)
    .reduce((res, item) => res.split(item).join('•••'), fragment)
    .split('•••')
    .filter(item => !!item)
    .slice(1)

  books.forEach((book, index) => {
    const chapterHeaders = book.match(/(\d+)\.(.*)/gm) || []
    let tmp = book

    for (const chapter of chapterHeaders) {
      tmp = tmp.split(chapter).join('◘◘◘')
    }

    tmp = tmp.split('◘◘◘').map(item => item.replaceAll('\n', '')).filter(item => !!item)

    const verses = tmp.map(line => line.match(/(\d+) ([.^\d]*)/gm))

    const chapters = []

    tmp.forEach((chapter, num) => {
      let tmp2 = chapter
      for (const verse of verses[num] || []) {
        tmp2 = tmp2.split(verse).join('•')
      }
      const res = tmp2.split('•').filter(item => !!item)
      chapters.push(res)
    })

    // Object.assign(book, { chapters })

    books
      .splice(index, 1, { title: bookNames[index], chapters })
  })

  return books
}
