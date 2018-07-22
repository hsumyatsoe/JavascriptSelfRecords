function rotateImage(a) {
	// a = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]; //sample a array
    b = new Array();
	c = new Array();

	for(var i=0; i<a.length; i++){
		for(var j=0; j<a[i].length; j++){	
			b.push(a[j][i])
		}
		b = b.reverse()
		c.push(b)
		b = [];
	}
    
    return c;
}