window.addEventListener('keydown', function(e){
	let keyy = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	
	if(!audio){
		let randomArr =[65,83,68,70,90,88,67]
		let ran = Math.floor(Math.random()*7)
		ran = randomArr[ran];
		console.log(ran)
		let showw = document.getElementById('show')
		const aAudio = document.querySelector(`audio[data-key="${ran}"`)
		aAudio.currentTime = 0;
		aAudio.play();
		return;
	}

	audio.currentTime=0;
	audio.play(0);
	keyy.classList.add('newDesign')
	window.addEventListener('keyup', function(e){
	removeDesign(keyy);
});
});

function removeDesign(keyy){
	keyy.classList.remove('newDesign');
}
//lirej85470@goflipa.com
//Vijay@123gm

//Pavan@123
//Pavan@1234
//pavan@123
//pavan@1234
//Pavan@123gm
//Pavan@1234gm
//pavan@123gm
//pavan@1234gm