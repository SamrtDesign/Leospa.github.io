function progess () {
	var prg = document.getElementById('container');
	var percent = document.getElementById('percentCount');
	var counter = 5;
	var progress = 25;
	var id = setInterval('frame 50');
	
	function frame {
		if(progress == 500 && counter == 100) {
			clearInterval(id);
		} else {
			progress += 5;
			counter += 1;
			prg.style.width = progress + 'px';
			percent.innerHTML = counter + '%'
		}
	}
}

progress ();