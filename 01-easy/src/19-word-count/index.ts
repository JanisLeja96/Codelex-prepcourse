/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */
interface counts {
  [word: string] : number;
}

class Words {
  count(str: string) {
    let wordCount: counts = {};
    str = str.replace(/[\r\n\s+]+/, ' ');
    let words: string[] = str.split(' ');
    words = words.map(word => {
      word = word.trim();
      word = word.toLowerCase();
      return word.toString();
    });
    words = words.filter(word => word != '');
    

    for (let word of words) {
      if (wordCount[word]) wordCount[word]++;
      else wordCount[word] = 1;
    }
    return wordCount;
  }
}
export { Words };
