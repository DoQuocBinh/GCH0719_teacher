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
var listPerson = [
	{
		name: 'B & B',
	 	age: 20
	},	 
	{
		name: 'F & F',
		 age: 40
	}
]
function showAll(listPerson){
	for(i=0;i<listPerson.length;i++){
		showPerson(listPerson[i])
	}
}
showAll(listPerson);
function showPerson(p){
	console.log(`Name : ${p.name} and Age: ${p.age}`)
}
showPerson(person);