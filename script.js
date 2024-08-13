const sentenceStart = ['I see', 'The cards reveal', 'I sense', 'Beware of', 'Your future holds'];
const midSentence = ['a connection with someone who will play a pivotal role in your future', 'a need for you to trust your instincts as you navigate this situation', 'a period of reflection that will help you find clarity', 'a deep emotional experience that will lead to personal growth'];
const sentenceEnd = ['embrace the change with an open mind and trust in the process', 'stay grounded and let your inner wisdom guide you forward', 'focus on self-care and surround yourself with positive energy', 'be courageous in your decisions, knowing that your intuition is strong'];

let randomSentenceStart = Math.floor(Math.random() * sentenceStart.length);
let randomMidSentence = Math.floor(Math.random() * midSentence.length);
let randomSentenceEnd = Math.floor(Math.random() * sentenceEnd.length);

console.log(`${randomSentenceStart} ${randomMidSentence}! What you must do now is ${randomSentenceEnd}`);
