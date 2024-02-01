const rockKey = '✊';
const paperKey = '✋';
const scissorsKey=  '✌️';
const spockKey = '🖖';
const lizardKey= '🦎';

const rock = {
    key: rockKey,
    beats: [scissorsKey, lizardKey]
}

const paper =         {
    key: paperKey,
    beats: [rockKey, spockKey]
};

const scissors = {
    key: scissorsKey,
    beats: [paperKey, lizardKey]
}

const spock = {
    key: spockKey,
    beats: [rockKey, scissorsKey]
}

const lizard = {
    key: lizardKey,
    beats: [paperKey, spockKey]
}

export const config = {
    options: [
        rock, paper, scissors, spock, lizard
    ]
}