function getRand(num) {
    let a = Math.floor(Math.random() * num.length);
    return num[a];
}

const Mixed_messages = {

    signs: [
        ["Aries", "agressive", "be understanding and patient"],
        ["Taurus", "reliable", "follow your promises and finish"],
        ["Gemini", "original", "not let your ambivalence guide your life"],
        ["Cancer", "secure", "stable your emotions and not manipulate"],
        ["Leo", "popular", "be a leader"],
        ["Virgo", "conservative", "avoid chaos and put things in order"],
        ["Libra", "beautiful", "build strong and decent relationships with people"],
        ["Scorpio", "strong", "avoid fear and keep going!"],
        ["Sagittarius", "independent", "show the power of optimism and avoid arguments"],
        ["Capricorn", "patient and persistent", "pursue your most ambitious goals and get more rest"],
        ["Aquarius", "way free", "think gloabally and strategically"],
        ["Pisces", "sensual", "avoid dream way much and make your dream real"]
    ],
    get final() {

        const b = getRand(Mixed_messages.signs);

        console.log(`Your sign is ${b[0]} \nYou are ${b[1]} \nYou should: ${b[2]}`);
    }

}

Mixed_messages.final;