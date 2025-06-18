const copyBtn = document.getElementById('copy-btn')

document.addEventListener('keydown', (event) => {
	if (event.code === 'KeyC') {
		CopyTextInBuffer()
	}
})

function LogMessageShowAndClear(message) {
	const logMessageParagraph = document.getElementById('log-message')

	logMessageParagraph.textContent = message

	setTimeout(() => {
		logMessageParagraph.textContent = ''
	}, 2000)
}

function CopyTextInBuffer() {
	const copyText = document.getElementById('copy-text')

	navigator.clipboard.writeText(copyText.textContent)
		.then(() => {
			LogMessageShowAndClear('Текст скопирован!')
		})
		.catch(() => {
			LogMessageShowAndClear(`Ошибка в копировании текста`)
		})
}