function firstNotRepeatingCharacter(s) {
	// s = "abacabad" //sample s string
    s = s.split('');

	duplicate = {}
	count = 1;
	for(var i=0; i<s.length; i++){
		if(duplicate.hasOwnProperty(s[i])){
			duplicate[s[i]] = parseInt(duplicate[s[i]]) + 1;
		}else{
			duplicate[s[i]] = 1
		}
	}
	for(var key in duplicate){
		if(parseInt(duplicate[key]) === 1){
			return key
		}
	}
    
    return '_';
}