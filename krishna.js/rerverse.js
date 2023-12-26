function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Example usage:
const inputSentence = "Hello world, how are you?";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);  // Output: "olleH ,dlrow woh era ?uoy"