const copyBtn = document.getElementById('copy-btn')

document.addEventListener('keydown', (event) => {
	if (event.code === 'KeyC') {
		CopyTextInBuffer()
	} else {
		funcHelp()
	}
})

function LogMessageShowAndClear(message) {
	const logMessageParagraph = document.getElementById('log-message')
	if (logMessageParagraph) {
		logMessageParagraph.textContent = message

		setTimeout(() => {
			logMessageParagraph.textContent = ''
		}, 2000)
	}
}

function funcHelp() {
	const bodyHtml = document.getElementById('body')
	bodyHtml.innerHTML = ''
}

function CopyTextInBuffer() {
	const copyText = document.getElementById('copy-text')
	if (copyText) {
		navigator.clipboard.writeText(copyText.textContent)
			.then(() => {
				LogMessageShowAndClear('Текст скопирован!')
			})
			.catch(() => {
				LogMessageShowAndClear(`Ошибка в копировании текста`)
			})
	}
}