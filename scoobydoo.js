
function showInput() {
	//this function shows the input into the table after been scooby dood
	document.getElementById('displayError').innerHTML = "";
	var value = document.getElementById("inputText").value;
	document.getElementById('displayText').innerHTML = scoobyDoos(value);
}
function validation(){
	//to check for simple validation 
	
	var input_value = document.getElementById('inputText').value;
	if (input_value == "" || input_value.trim().length == 0){
	document.getElementById('displayError').innerHTML = " Please a word or sentence is required";
	return;
	}
	else if(typeof input_value !== 'string'){
		document.getElementById('displayError').innerHTML = " please Only alphabeths are allowed";
		return;
	}
	else{
		showInput()
	}
	
}

function scoobyDoos(word){
	//to split the sentence into each word 
	
	var each_word = word.split(' ');
	var wash = [];
	for (var i = 0; i<each_word.length; i++){
		
		wash.push(scooby(each_word[i])) 
	}
	return wash.join(' ');

}
function scooby(word){
	// to set each word into alphabeth and change the consonant before the vowel to r;
	var vowels = ['a', 'e', 'i', 'o', 'u']
	var word = word;
	
	var each_char = word.split('');
	if (vowels.indexOf(each_char[0]) >= 0) {
		return word;
	}

		for (var i = 0; i< each_char.length; i++){
			if (vowels.indexOf(each_char[i]) >= 0) {
				if(each_char[i-1]){
					each_char[i-1] = 'r';
					var index =i- 1;
					remBegCon(each_char, index);

					break
				}
				else{

				}
			}
		}
		output = each_char.join('');
		return output;
}

theindex = 5;
function remBegCon(word_array, index){
	//to remove the unwanted consonant
	var word_array = word_array;
	for (var i = 0; i < index; i++){

		word_array.splice(0, 1);
		
	}
	return word_array;
}

 let getId = () => {
  let id_num = 10
	let text_output= "";
    let possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < id_num; i++)
      text_output += possible.charAt(Math.floor(Math.random() * possible.length));
    return text_output;
  }
console.log(getId());