var i;
for(i=0;i<5;i++){
	console.log(doubleN(i)+ '\tabc');
}

function doubleN(n){
	return n*2;
}

function multiple9(){
	for(i=1;i<=9;i++){
		//console.log(9 + " * " + i + " =" +i*9);
		console.log(`9 * ${i} = ${9*i}`);
	}
}
multiple9();
var person = {
		name: 'Jonh and Jonh',
		age: 23
	}
function showPerson(p){
	console.log(`Name : ${p.name} and Age: ${p.age}`)
}
showPerson(person);