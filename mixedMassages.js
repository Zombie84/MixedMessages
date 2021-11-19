function getMessage() {
    let part_1, part_2, part_3;
    let part_1_words= ['Hermann', 'Odin', 'Freya', 'Heimdall', 'Thor', 'Loki'];
    let part_2_words= ['shoots', 'slays', 'drowns', 'kills', 'beats', 'tramples'];
    let part_3_words= ['weakling', 'liar', 'wimp', 'idiot', 'traitor', 'fool'];
    let message= [part_1_words, part_2_words, part_3_words]
    let rand;

    for (i=0; i<message.length; i++) {
            rand= Math.floor(Math.random()*3);
            message
        }
    };
    return part_1 + part_2 + part_3;
}

console.log(getMessage());