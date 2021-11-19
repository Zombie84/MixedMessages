function getMessage() {
    let part_1_words= ['Hermann', 'Odin', 'Freya', 'Heimdall', 'Thor', 'Loki', 'Seppl', 'Knight', 'Monster', 'MalevolentCreation'];
    let part_2_words= ['shoots', 'slays', 'drowns', 'kills', 'beats', 'tramples'];
    let part_3_words= ['weakling', 'liar', 'wimp', 'idiot', 'traitor', 'fool'];
    let words= [part_1_words, part_2_words, part_3_words];
    let message= '';
    let rand;

    for (let i=0; i<words.length; i++){
        rand= Math.floor(Math.random()*(words[i].length));
        message += words[i][rand] + ' ';
        // console.log(i, rand);
    }
    return message;
};

for (let j=0; j<10; j++) {
    console.log(getMessage());
}