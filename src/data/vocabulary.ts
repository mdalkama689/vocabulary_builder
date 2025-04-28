export interface VocabularyWord {
  id: number;
  word: string;
  meaning: string;
  example: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const vocabularyList: VocabularyWord[] = [
  {
    id: 1,
    word: 'Abate',
    meaning: 'To reduce in amount, degree, or intensity',
    example: 'The storm has finally abated.',
    difficulty: 'medium',
    category: 'verbs'
  },
  {
    id: 2,
    word: 'Abrogate',
    meaning: 'To abolish, do away with, or annul by authority',
    example: 'The dictator abrogated the constitution.',
    difficulty: 'hard',
    category: 'verbs'
  },
  {
    id: 3,
    word: 'Acumen',
    meaning: 'Keen insight; shrewdness',
    example: 'Her business acumen has led to great success.',
    difficulty: 'medium',
    category: 'nouns'
  },
  {
    id: 4,
    word: 'Alacrity',
    meaning: 'Cheerful readiness, promptness, or willingness',
    example: 'He accepted the challenge with alacrity.',
    difficulty: 'medium',
    category: 'nouns'
  },
  {
    id: 5,
    word: 'Ambiguous',
    meaning: 'Open to more than one interpretation; having a double meaning',
    example: 'The ambiguous message could be understood in different ways.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 6,
    word: 'Ameliorate',
    meaning: 'To make or become better; improve',
    example: 'The medicine ameliorated her symptoms.',
    difficulty: 'hard',
    category: 'verbs'
  },
  {
    id: 7,
    word: 'Benevolent',
    meaning: 'Characterized by or expressing goodwill or kindly feelings',
    example: 'The benevolent organization helps the homeless.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 8,
    word: 'Capricious',
    meaning: 'Subject to, led by, or indicative of a sudden, odd notion or unpredictable change',
    example: 'Her capricious nature made her difficult to work with.',
    difficulty: 'hard',
    category: 'adjectives'
  },
  {
    id: 9,
    word: 'Conundrum',
    meaning: 'A confusing and difficult problem or question',
    example: 'He faced the conundrum of choosing between two job offers.',
    difficulty: 'medium',
    category: 'nouns'
  },
  {
    id: 10,
    word: 'Debilitate',
    meaning: 'To make weak or feeble',
    example: 'The illness debilitated him for months.',
    difficulty: 'medium',
    category: 'verbs'
  },
  {
    id: 11,
    word: 'Ebullient',
    meaning: 'Overflowing with enthusiasm or excitement; high-spirited',
    example: 'The ebullient crowd cheered loudly for their team.',
    difficulty: 'hard',
    category: 'adjectives'
  },
  {
    id: 12,
    word: 'Ephemeral',
    meaning: 'Lasting for a very short time',
    example: 'The ephemeral beauty of cherry blossoms lasts only a few days.',
    difficulty: 'hard',
    category: 'adjectives'
  },
  {
    id: 13,
    word: 'Fastidious',
    meaning: 'Very attentive to and concerned about accuracy and detail',
    example: 'He is fastidious about keeping his workspace clean.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 14,
    word: 'Garrulous',
    meaning: 'Excessively talkative, especially on trivial matters',
    example: 'The garrulous taxi driver wouldn\'t stop talking.',
    difficulty: 'hard',
    category: 'adjectives'
  },
  {
    id: 15,
    word: 'Harbinger',
    meaning: 'A person or thing that announces or signals the approach of another',
    example: 'The robin is a harbinger of spring.',
    difficulty: 'hard',
    category: 'nouns'
  },
  {
    id: 16,
    word: 'Idiosyncrasy',
    meaning: 'A distinctive or peculiar feature or characteristic of a place or person',
    example: 'One of his idiosyncrasies is always wearing mismatched socks.',
    difficulty: 'hard',
    category: 'nouns'
  },
  {
    id: 17,
    word: 'Juxtapose',
    meaning: 'To place or deal with close together for contrasting effect',
    example: 'The museum juxtaposed modern and ancient artifacts.',
    difficulty: 'medium',
    category: 'verbs'
  },
  {
    id: 18,
    word: 'Kaleidoscope',
    meaning: 'A constantly changing pattern or sequence of elements',
    example: 'The market was a kaleidoscope of colors and sounds.',
    difficulty: 'medium',
    category: 'nouns'
  },
  {
    id: 19,
    word: 'Laconic',
    meaning: 'Using very few words',
    example: 'His laconic reply of "yes" revealed nothing of his thoughts.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 20,
    word: 'Magnanimous',
    meaning: 'Very generous or forgiving, especially toward a rival or less powerful person',
    example: 'She was magnanimous in victory, praising her opponent\'s skills.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 21,
    word: 'Nefarious',
    meaning: 'Extremely wicked or villainous',
    example: 'The criminal was involved in nefarious activities.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 22,
    word: 'Obfuscate',
    meaning: 'To render obscure, unclear, or unintelligible',
    example: 'The politician tried to obfuscate the issue with technical jargon.',
    difficulty: 'hard',
    category: 'verbs'
  },
  {
    id: 23,
    word: 'Panacea',
    meaning: 'A solution or remedy for all difficulties or diseases',
    example: 'There is no panacea for the economic problems we face.',
    difficulty: 'medium',
    category: 'nouns'
  },
  {
    id: 24,
    word: 'Quintessential',
    meaning: 'Representing the most perfect or typical example of a quality or class',
    example: 'The small town diner is a quintessential American institution.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 25,
    word: 'Reclusive',
    meaning: 'Avoiding the company of other people; solitary',
    example: 'The reclusive author rarely gives interviews.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 26,
    word: 'Serendipity',
    meaning: 'The occurrence and development of events by chance in a happy or beneficial way',
    example: 'Finding her dream job was pure serendipity.',
    difficulty: 'medium',
    category: 'nouns'
  },
  {
    id: 27,
    word: 'Taciturn',
    meaning: 'Reserved or uncommunicative in speech; saying little',
    example: 'The taciturn man spoke only when necessary.',
    difficulty: 'hard',
    category: 'adjectives'
  },
  {
    id: 28,
    word: 'Ubiquitous',
    meaning: 'Present, appearing, or found everywhere',
    example: 'Smartphones have become ubiquitous in modern society.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 29,
    word: 'Vociferous',
    meaning: 'Expressing feelings or opinions in a very loud or forceful way',
    example: 'The vociferous crowd demanded a rematch.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 30,
    word: 'Whimsical',
    meaning: 'Playfully quaint or fanciful, especially in an appealing and amusing way',
    example: 'The garden was decorated with whimsical sculptures.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 31,
    word: 'Zealot',
    meaning: 'A person who is fanatical and uncompromising in pursuit of their ideals',
    example: 'He\'s a zealot when it comes to environmental issues.',
    difficulty: 'medium',
    category: 'nouns'
  },
  {
    id: 32,
    word: 'Apathy',
    meaning: 'Lack of interest, enthusiasm, or concern',
    example: 'The apathy of voters was evident in the low turnout.',
    difficulty: 'easy',
    category: 'nouns'
  },
  {
    id: 33,
    word: 'Brevity',
    meaning: 'Concise and exact use of words in writing or speech',
    example: 'The brevity of his speech was appreciated by the audience.',
    difficulty: 'medium',
    category: 'nouns'
  },
  {
    id: 34,
    word: 'Cryptic',
    meaning: 'Having a meaning that is mysterious or obscure',
    example: 'She left a cryptic note that no one could decipher.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 35,
    word: 'Diligent',
    meaning: 'Showing care and conscientiousness in one\'s work or duties',
    example: 'The diligent student always completed assignments on time.',
    difficulty: 'easy',
    category: 'adjectives'
  },
  {
    id: 36,
    word: 'Euphoria',
    meaning: 'A feeling or state of intense excitement and happiness',
    example: 'The victory sent the fans into a state of euphoria.',
    difficulty: 'medium',
    category: 'nouns'
  },
  {
    id: 37,
    word: 'Fortuitous',
    meaning: 'Happening by chance, especially in a beneficial way',
    example: 'Their meeting was entirely fortuitous.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 38,
    word: 'Gregarious',
    meaning: 'Fond of company; sociable',
    example: 'She has a gregarious personality and loves attending parties.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 39,
    word: 'Hedonist',
    meaning: 'A person who seeks pleasure above all else',
    example: 'The hedonist cared only about personal enjoyment.',
    difficulty: 'medium',
    category: 'nouns'
  },
  {
    id: 40,
    word: 'Incongruous',
    meaning: 'Not in harmony or keeping with the surroundings or other aspects',
    example: 'The modern building looked incongruous among the historic houses.',
    difficulty: 'hard',
    category: 'adjectives'
  },
  {
    id: 41,
    word: 'Jargon',
    meaning: 'Special words or expressions that are used by a particular profession or group',
    example: 'The report was full of technical jargon.',
    difficulty: 'easy',
    category: 'nouns'
  },
  {
    id: 42,
    word: 'Kinship',
    meaning: 'Blood relationship; the state of being related to someone',
    example: 'She felt a kinship with other immigrants.',
    difficulty: 'easy',
    category: 'nouns'
  },
  {
    id: 43,
    word: 'Lethargic',
    meaning: 'Affected by lethargy; sluggish and apathetic',
    example: 'The heat made everyone lethargic.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 44,
    word: 'Meticulous',
    meaning: 'Showing great attention to detail; very careful and precise',
    example: 'She was meticulous in her research.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 45,
    word: 'Nostalgia',
    meaning: 'A sentimental longing for the past',
    example: 'The old song filled him with nostalgia.',
    difficulty: 'easy',
    category: 'nouns'
  },
  {
    id: 46,
    word: 'Ostentatious',
    meaning: 'Characterized by pretentious display; designed to impress',
    example: 'He drove an ostentatious car to flaunt his wealth.',
    difficulty: 'hard',
    category: 'adjectives'
  },
  {
    id: 47,
    word: 'Pragmatic',
    meaning: 'Dealing with things sensibly and realistically',
    example: 'We need a pragmatic approach to solve this problem.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 48,
    word: 'Resilient',
    meaning: 'Able to withstand or recover quickly from difficult conditions',
    example: 'Children are often resilient in the face of adversity.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 49,
    word: 'Superfluous',
    meaning: 'Unnecessary, especially through being more than enough',
    example: 'The editor removed superfluous details from the article.',
    difficulty: 'medium',
    category: 'adjectives'
  },
  {
    id: 50,
    word: 'Verbose',
    meaning: 'Using or containing more words than are necessary',
    example: 'His verbose writing style made the essay difficult to read.',
    difficulty: 'medium',
    category: 'adjectives'
  }
];

export const getRandomWords = (count: number): VocabularyWord[] => {
  const shuffled = [...vocabularyList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getWordsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): VocabularyWord[] => {
  return vocabularyList.filter(word => word.difficulty === difficulty);
};

export const getWordsByCategory = (category: string): VocabularyWord[] => {
  return vocabularyList.filter(word => word.category === category);
};