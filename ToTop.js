let topButton = document.getElementById("toTop");
		window.onscroll = function() {scroll()};

		function scroll(){
			if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
				topButton.style.display = "block";
			} else{
				topButton.style.display = "none";
			}
		}

		function toTop(){
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}