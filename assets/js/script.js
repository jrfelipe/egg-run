
// player object
const player = {
	character : $("#player"),
	playerPos : 0
}

console.log(player)

// ai object
const ai = {
	character : $("#ai"),
	aiPos : 0
}

console.log(ai)

let playerPosition = 0;
let aiPosition = 0;

// move the player function
player.character.click(function() {
	console.log($(this))

	$(this).animate({
		'left' :  (playerPosition+=100) + 'px'
	})

	console.log('this is the current value of player position: ' + playerPosition)
	player.playerPos = playerPosition

	console.log(player)

	result()
})

const aiMove1 = () => {
	if(ai.aiPos < 1100) {
		ai.character.animate({
			'left' : (aiPosition+=25) + "px"
		})
	} else {
		return true
	}

	console.log(ai.aiPos)
	ai.aiPos = aiPosition
	result()
	setTimeout(aiMove1, 500)
}

const aiMove2 = () => {
	if(ai.aiPos < 1100) {
		ai.character.animate({
			'left' : (aiPosition+=60) + "px"
		})
	} else {
		return true
	}

	console.log(ai.aiPos)
	ai.aiPos = aiPosition
	result()
	setTimeout(aiMove2, 200)
}

const aiMove3 = () => {
	if(ai.aiPos < 1100) {
		ai.character.animate({
			'left' : (aiPosition+=100) + "px"
		})
	} else {
		return true
	}

	console.log(ai.aiPos)
	ai.aiPos = aiPosition
	result()
	setTimeout(aiMove3, 250)
}

// move the ai
$("#start-newbie").click(function() {
	$("#start-newbie").removeClass('d-block')
	$("#start-normal").removeClass('d-block')
	$("#start-monster").removeClass('d-block')
	$("#start-newbie").addClass('d-none')
	$("#start-normal").addClass('d-none')
	$("#start-monster").addClass('d-none')
	document.getElementById("ai").id = "ai2";
	aiMove1()
})


$("#start-normal").click(function() {
	$("#start-newbie").removeClass('d-block')
	$("#start-normal").removeClass('d-block')
	$("#start-monster").removeClass('d-block')
	$("#start-newbie").addClass('d-none')
	$("#start-normal").addClass('d-none')
	$("#start-monster").addClass('d-none')
	document.getElementById("ai").id = "ai3";
	aiMove2()
})


$("#start-monster").click(function() {
	$("#start-newbie").removeClass('d-block')
	$("#start-normal").removeClass('d-block')
	$("#start-monster").removeClass('d-block')
	$("#start-newbie").addClass('d-none')
	$("#start-normal").addClass('d-none')
	$("#start-monster").addClass('d-none')
	document.getElementById("ai").id = "ai4";
	aiMove3()
})

const result = () => {

	if(player.playerPos == 1100) {
		// alert('YOU won!')
		// return true
		if(!alert('You WON!')){window.location.reload();}
		
		
	}

	if(ai.aiPos == 1100) {
		// alert('AI won!')
		if(!alert('You LOST!')){window.location.reload();}
		// return true
	}
} 










