
var engwords = ["family", "friend", "time", "city", "money", "way", "table", "food ", "school", "house"];
var ruswords = ["родина", "друг", "час", "місто", "гроші", "шлях", "стіл", "їжа", "школа", "будинок"];

var counter = 0;

var btnPlay = $('#btnCheck');

console.log(engwords);
console.log(ruswords);

function restart(){
	counter = 0;
}

Array.prototype.remove = function(el) {
    return this.splice(this.indexOf(el), 1);
}

function dellfromarr(){
	engwords.remove(engwords[random]);
	console.log(engwords);
	ruswords.remove(ruswords[random]);
	console.log(ruswords);
	random = Math.floor(Math.random() * engwords.length);
	guessedword = $('#words').html(engwords[random]);
};

$("#btnNext").click(function(){
	$(".cards").toggleClass('flipped');
	$("#words").toggleClass('flipped');
	if(engwords.length > 0){
	word = 1;
	random = Math.floor(Math.random() * engwords.length);
	guessedword = $('#words').html(engwords[random]);
	console.log(engwords);
	console.log(ruswords);
	
	$("#words").click(function(){
		$("#words").animation = "anim 5s ease";
		$("#words").toggleClass('answ');
		$('#words').html(ruswords[random]);
		setTimeout(showOrig,3000)
	});
}
else{
	word = null;
	alert("Please reload window")
}
});

function clear(){
	$("input").val("");
}
var counterright = 0;
var counterwrong = 0;
var tr, fl;
var word = document.getElementById("words").getAttribute('value');

function showOrig(){
	$('#words').html(engwords[random]);
}


$("#btnCheck").click(function(){
	$(".cards").toggleClass('flipped');
	$("#words").toggleClass('flipped');
	if(word == null){
		counter--;
		alert("Please click in arrow")
	}
	counter++;
	setTimeout(clear, 1);
    $("#counter").html(counter);
	var value = $("input").val();
	if(value === ruswords[random]){
		dellfromarr();
        counterright++;
        $("#correct").html(counterright);
	}
	else if(value != ruswords[random]){
		dellfromarr();
        counterwrong=counterwrong+1;
        $("#wrong").html(counterwrong);
	}
	if(counter == 10){
		btnPlay.prop("disabled", true );
		word = null;
		$('#words').html(":)")
		tr = counterright;
		fl = counterwrong;

var answers = $("#answers");

var answersData = {
    labels: [
        "Correct",
        "Uncorrect"
    ],
    datasets: [
        {
            data: [tr*1,fl*1],
            backgroundColor: [
				"#63FF84",
                "#FF6384"
            ]
        }]
};

 pieChart = new Chart(answers, {
  type: 'pie',
  data: answersData
});

		

// - Modal window

		$(document).ready(function($) {
			$('.popup-open').ready(function() {
				$('.popup-fade').fadeIn();
				restart();
				return false;
			});

			$('.popup-close').click(function() {
				$(this).parents('.popup-fade').fadeOut();
				restart();
				return false;
			});

			$(document).keydown(function(e) {
				if (e.keyCode === 27) {
					e.stopPropagation();
					$('.popup-fade').fadeOut();
					restart();
				}
			});

			$('.popup-fade').click(function(e) {
				if ($(e.target).closest('.popup').length == 0) {
					$(this).fadeOut();
					restart();
				}
			});
		});


	}
});

// - Modal window


