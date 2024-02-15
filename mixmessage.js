//console.log('Hello World');
const subject = ['The dog', 'The dragon', 'The King', 'Khabib Nurmagamedov', 'A Beautiful lady', 'A Gym bro', 'God'];
const verb = ['ran', 'cartwheeled', 'boxed', 'grated', 'painted', 'choked', 'was washing', 'skiied', 'prepared dinner'];
const adjective = ['aggresivly', 'vigorusly', 'stealthly', 'cheekily'];

let randSubjectNum = Math.floor((Math.random() * subject.length));
let randVerbNum = Math.floor((Math.random() * verb.length));
let randAdjectiveNum = Math.floor((Math.random() * adjective.length));

let randSentence = () => {
    return `${subject[randSubjectNum]} ${verb[randVerbNum]} ${adjective[randAdjectiveNum]}`;
}
console.log(randSentence())
//test
//console.log(subject[Math.floor((Math.random() * subject.length))] + ' ' + verb[Math.floor((Math.random() * verb.length))] + ' ' + adjective[Math.floor((Math.random() * adjective.length))])

