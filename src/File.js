class File {

	costructor(){

	}

	static dirList(path, recurence=false){
		const fs = require('fs');

		if(!fs.lstatSync(path).isDirectory()) return null;

		let wynik = fs.readdirSync(path);

		if(recurence){
			//for(var i=0; i<wynik.length; i++){

			//}
		}

		return wynik;
	}

	static dirCreate(patch){

	}

	static dirDelete(patch){

	}

	static fileGet(file){
		const fs = require('fs');
		
		if(!fs.lstatSync(file).isFile()) return null;
		return fs.readFileSync(file,'utf-8');
	}

	static filePut(file, content){
		return true;
	}

}



module.exports = File;