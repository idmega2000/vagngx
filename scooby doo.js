function validation (){
	document.getElementById('')
}


    function showInput() {
        document.getElementById('displayBox').innerHTML = 
                    document.getElementById("inputText").value;
    }




function scoobyDoos(word){
	if(word == " "){
		alert("please enter a word");
		break;
	}
	else if((!typeof word) ==='string'){
		alert("please enter valid word")
		break
	}

	var each_word = word.split(' ');
	var wash = [];
	for (var i = 0; i<each_word.length; i++){
		
		wash.push(scooby(each_word[i])) 
	}
	return wash.join(' ');

}
function scooby(word){
	var word = word;
	var each_char = word.split('');
		for (var i = 0; i< each_char.length; i++){
			if(each_char[i] == 'a' ||  each_char[i] == 'e' || each_char[i] == 'i' || each_char[i] == 'o' || each_char[i] == 'u' ){
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
console.log(scoobyDoos(1));

theindex = 5;
function remBegCon(word_array, index){
	var word_array = word_array;
	for (var i = 0; i < index; i++){

		word_array.splice(0, 1);
		
	}
	return word_array;
}
