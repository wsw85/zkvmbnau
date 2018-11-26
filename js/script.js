document.onclick = checkClick;

function activeMenu(){
	var element = document.querySelector('ul.list-menu');
	element.classList.toggle('active');	
}

function checkClick(event){ 
	var element = event.target || event.srcElement;
	var listMenu = document.querySelector('ul.list-menu');	
	if (element.className === 'btn-menu' || element.className === 'links-menu') {				
		activeMenu();
	} else if (!element.classList.contains('links-menu') &&
		listMenu.classList.contains('active')) {
		listMenu.classList.remove('active');
	}
}