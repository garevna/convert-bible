export function download(content, fileName, contentType) {
  const file = new Blob([content], { type: contentType })

  const anchor = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(file),
    download: fileName,
    style: 'display: none'
  })

	anchor.click()
}
