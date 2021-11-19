function getMessage() {
    let part_1_words= ['Hermann', 'Odin', 'Freya', 'Heimdall', 'Thor', 'Loki'];
    let part_2_words= ['shoots', 'slays', 'drowns', 'kills', 'beats', 'tramples'];
    let part_3_words= ['weakling', 'liar', 'wimp', 'idiot', 'traitor', 'fool'];
    let words= [part_1_words, part_2_words, part_3_words];
    let message= '';
    let rand;

    for (let i=0; i<3; i++){
        rand= Math.floor(Math.random()*6);
        message += words[i][rand] + ' ';
        // console.log(i, rand);
    }
    return message;
};