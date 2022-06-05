// drag & drop 
const imgs = document.querySelectorAll('.cards__item')
const items = document.querySelectorAll('.drag__item')

imgs.forEach(img => {
	img.addEventListener('dragstart', () => {
		img.draggable = 'true'
		img.classList.add('dragging')
	})
	img.addEventListener('dragend', () => {
		img.classList.remove('dragging')
	})
	img.addEventListener('click', () => {
		imgs.forEach(img => img.classList.remove('margin'))
		for (let i=items.length-1; i>=0; i--){
			if (!items[i].children.length) {
				items[i].prepend(img)
				continue
			}
		}
	})
})

items.forEach(item => {
	item.addEventListener('dragover', (e) => {
		e.preventDefault()
		if (!item.children.length) {
			const activeItem = document.querySelector('.dragging')
			item.prepend(activeItem)
			imgs.forEach(img => {
				img.classList.remove('margin')
			})
		} else {
			return
		}
	})
})


// reset
const btn = document.querySelector('.drag__btn')

btn.addEventListener('click', () => {
	location.reload()
})


// donate
const donateBtn = document.querySelector('.footer__btn')
const popup = document.querySelector('.popup')
const closeBtn = document.querySelector('.popup__btn')

donateBtn.addEventListener('click', () => {
	popup.style.display = 'block'
	window.scrollBy(0, -3500)
})

closeBtn.addEventListener('click', () => {
	popup.style.display = 'none'
})