class FiltrArrayElement {

	static match(elements, regexp){
		let data = [];

		for(let x=0; x<elements.length; x++){
			let dane = elements[x].match(regexp);
			if(dane !== null){
				data.push(elements[x]);
			}
		}

		return data;
	}

}

module.exports = FiltrArrayElement;