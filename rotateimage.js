function rotateImage(a) {
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