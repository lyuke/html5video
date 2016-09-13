var media_status = new Array();
media_status["duration"]=0;
media_status['currentTime']=0;
media_status['volume']=0;
media_status['playbackRate']=0;

var _video =document.getElementById("video");

var playButton=document.getElementById("play");
var smallButton =document.getElementById("small");
var trailerButton =document.getElementById("trailer");
var pauseButton =document.getElementById("pause");
var playbackRatePlusButton =document.getElementById("playbackRatePlus");
var playbackRateMinusButton =document.getElementById('playbackRateMinus');
var currentTimeplusButton =document.getElementById('currentTimeplus');
var currentTimeminusButton =document.getElementById('currentTimeminus');
var volumeplusButton =document.getElementById('volumeplus');
var volumeminusButton =document.getElementById('volumeminus');
var mutedButton =document.getElementById('muted');

var resetButton =document.getElementById('reset');
var controllersDiv=document.getElementById('controllerbar');
var media_properties_div=document.getElementById('media_properties');






function init(){
	
	_video.src="https://media.w3.org/2010/05/sintel/trailer.mp4";
	_video.setAttribute("width",800);

	_video.addEventListener('timeupdate', updateProgressBar, false);
	
	var updateHandler=setInterval(updateBufferedProgressBar,100);

	
	createMediaStatus();
	setInterval(showMediaStatus,1000);
}

init();




smallButton.addEventListener("click",function(){
	_video.setAttribute("poster","media/1.png");
	_video.src="media/small.mp4";
});
trailerButton.addEventListener("click",function(){
	_video.setAttribute("poster","media/2.png");
	_video.src="https://media.w3.org/2010/05/sintel/trailer.mp4";
})

pauseButton.addEventListener("click",function(){
	_video.pause();
})

playButton.addEventListener("click",function(){
	_video.play();
});

playbackRatePlusButton.addEventListener('click',function(){
	_video.playbackRate++;
});
playbackRateMinusButton.addEventListener('click',function(){
	_video.playbackRate--;
});
currentTimeplusButton.addEventListener('click',function(){
	_video.currentTime+=10;
});
currentTimeminusButton.addEventListener('click',function(){
	_video.currentTime-=10;
});
volumeplusButton.addEventListener('click',function(){
	if(_video.volume<0.9){
		_video.volume+=0.1;
	}
	
});
volumeminusButton.addEventListener('click',function(){
	if (_video.volume>0.1) {
		_video.volume-=0.1;
	}
	
});
mutedButton.addEventListener('click',function(){
	_video.muted = !_video.muted;
});



resetButton.addEventListener('click',function(){
	_video.playbackRate=1.0;
	_video.volume=1.0;
	_video.currentTime=0;
	
})



function showMediaStatus(){


	var e=document.getElementById("date");
	e.innerHTML=new Date();
	for(media in media_status){
		var e=document.getElementById(media);
		e.innerHTML=media+":"+_video[media];
	}


}



function createMediaStatus(){
	var d=document.createElement('p');
	d.id="date";
	media_properties_div.appendChild(d);
	for(media in media_status){
		var ele =document.createElement("p");
		ele.id=media;
		media_properties_div.appendChild(ele);
	}
	

}


function updateProgressBar(){
	var progressBar = document.getElementById('progress-bar');
	var percentage = Math.floor((100 / _video.duration) * _video.currentTime);
	progressBar.value = percentage;
	var progressBarValue=document.getElementById('progress-value');

	progressBarValue.innerHTML = percentage + '% played';
}


function updateBufferedProgressBar(){
	var bufferedProgressBar=document.getElementById('progress-bar-buffered');
	var percentageBuffered=Math.floor(_video.buffered.end(0)/_video.duration*100);
	bufferedProgressBar.value=percentageBuffered;
	var progressBarBufferedValue=document.getElementById('progress-bar-buffered-value');
	progressBarBufferedValue.innerHTML=percentageBuffered + " % buffered";

}




