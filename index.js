const File = require('./src/File');
const FilterFile = require('./src/FilterFile');
const FiltrArrayElement = require('./src/FiltrArrayElement');

console.log(File.fileGet('./'));

const wynik = File.dirList('.');

console.log( 'Files Results:' )
console.log( FilterFile.getFiles(wynik) );
console.log( 'Dirs Results:' )
console.log( FilterFile.getDirs(wynik) );
console.log( 'Dirs Files Results:' )
console.log( FiltrArrayElement.match( FilterFile.getDirs(wynik), /est/img ) );