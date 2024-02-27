function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let radius = document.getElementById('radius').value;
	if(radius<0)volume.value='NaN';
	else{
		let volume = document.getElementById('volume'); 
		volume.value = ((4/3)*Math.PI*Math.pow(radius,3)).toFixed(4);	
	}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
