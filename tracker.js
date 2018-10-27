	function dayandnight(){
		var current = new Date();
		var day_night = current.getHours();
					if (day_night < 12){
						//Day
						var bodyColor = document.getElementsByTagName("BODY")[0];
						bodyColor.style.backgroundColor = "#e6f5ff";
						bodyColor.style.backgroundImage = "url('https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?cs=srgb&dl=clouds-cornfield-countryside-158827.jpg&fm=jpg')";
						 }
					 else{
					 //Night
					 var bodyColor = document.getElementsByTagName("BODY")[0];
					 bodyColor.style.backgroundColor = "black";
					 document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1528818955841-a7f1425131b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7a3d91fc64152d81054d5904c6c5bd0&auto=format&fit=crop&w=1489&q=80')";
						}
	}