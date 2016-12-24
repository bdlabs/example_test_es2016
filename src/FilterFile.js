class FilterFile {

	costructor(){

	}

	static getFiles(files){
		const fs = require('fs');
		let wynik = [];
		for(var a=0; a<files.length; a++){
			if(fs.lstatSync(files[a]).isFile()){
				wynik.push(files[a]);
			}
		}

		return wynik;
	}

	static getDirs(files){

		const fs = require('fs');
		let wynik = [];
		for(var a=0; a<files.length; a++){
			if(fs.lstatSync(files[a]).isDirectory()){
				wynik.push(files[a]);
			}
		}

		return wynik;
	}

}



module.exports = FilterFile;