$(document).ready(function(){

//Functions



//----EVERY PAGE-----
//rotages through the menu pictures depending on the arrow you click
	var rightArrow = function(){
		$('#arrowR').click(function(){
			$('.photoli').first().appendTo('#navUL');
		});
	};

	var leftArrow = function(){
		$('#arrowL').click(function(){
			$('.photoli').last().prependTo('#navUL');
		});
	};

//ELOPEMENT PAGE
//hides the wording for the elopements
var elopeSetUp = function(){
	$('#spnWord').hide();
	$('#inclusive').hide();
};

// clicking button highlights that button and hides the other wording options
	var buttons = function(){
		$('#eng').click(function(){
			$('#spnWord').hide();
			$('#inclusive').hide();
			$('#engWord').show();
			$('#eng').addClass('buttonOn').removeClass('buttonOff');
			$('#spn').addClass('buttonOff').removeClass('buttonOn');
			$('#same').addClass('buttonOff').removeClass('buttonOn');
		});

		$('#spn').click(function(){
			$('#engWord').hide();
			$('#inclusive').hide();
			$('#spnWord').show();
			$('#spn').addClass('buttonOn').removeClass('buttonOff');
			$('#eng').addClass('buttonOff').removeClass('buttonOn');
			$('#same').addClass('buttonOff').removeClass('buttonOn');
			});

		$('#same').click(function(){
			$('#engWord').hide();
			$('#inclusive').show();
			$('#spnWord').hide();
			$('#same').addClass('buttonOn').removeClass('buttonOff');
			$('#eng').addClass('buttonOff').removeClass('buttonOn');
			$('#spn').addClass('buttonOff').removeClass('buttonOn');
			});
	};


//VIDEO page
//rotages through the menu depending on the arrow you click.  also only one is visible
	var arrowRight = function(){
		$('#arrowRight').click(function(){
			$('.allVideos').first().removeClass('showVideo').appendTo('#videoCase');
			$('.allVideos').addClass('hideVideo');
			$('.allVideos').first().removeClass('hideVideo').addClass('showVideo');
			$('.hideVideo').hide();
			$('.showVideo').show();
		});
	};

	var arrowLeft = function(){
		$('#arrowLeft').click(function(){
			$('.allVideos').removeClass('showVideo').addClass('hideVideo');
			$('.allVideos').last().removeClass('hideVideo').prependTo('#videoCase').addClass('showVideo');
			$('.hideVideo').hide();
			$('.showVideo').show();
		});
	};

	//Photo Page
	//rotages through the menu depending on the arrow you click.  also only one is visible
		var setUpVideoPage = function(){
			$('.photoScroll').addClass('hideVideo');
			$('#photoBooth').hide();
		}

		var arrowPhotoR = function(){
			$('#ar').click(function(){
				$('.photoScroll').first().removeClass('showVideo').appendTo('#scrollShow');
				$('.photoScroll').addClass('hideVideo');
				$('.photoScroll').first().removeClass('hideVideo').addClass('showVideo');
				$('.hideVideo').hide();
				$('.showVideo').show();
			});
		};

		var arrowPhotoL = function(){
			$('#al').click(function(){
				$('.photoScroll').removeClass('showVideo').addClass('hideVideo');
				$('.photoScroll').last().removeClass('hideVideo').prependTo('#scrollShow').addClass('showVideo');
				$('.hideVideo').hide();
				$('.showVideo').show();
			});
		};




buttons();
elopeSetUp();

leftArrow();
rightArrow();

$('.hideVideo').hide();
arrowRight();
arrowLeft();

arrowPhotoR();
arrowPhotoL();
setUpVideoPage();


});
