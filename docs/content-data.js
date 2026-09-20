/*
  CU-TEP Reading & Writing Content — study material bank
  =======================================================
  This is a SEPARATE bank from exam-data.js (Practice Test).
  content.html reads everything from window.CONTENT_DATA and shows every
  question already revealed (passage + choices + correct answer +
  explanation) — this is a study/reading page, not a scored quiz.

  ---------------------------------------------------------------
  SCHEMA
  ---------------------------------------------------------------
  reading.questions: [{
      id,
      type: "cloze" | "comprehension",
      passageTitle, passage: (string, may repeat across questions that
          share the same passage),
      prompt,
      choices: [string, string, string, string],
      answer: index 0-3,
      explanation: Thai explanation
  }]

  writing.questions: [{
      id,
      segments: [{ text } | { text, n }]  // n = 1-4 marks the underlined part
      answer: the n (1-4) that contains the error,
      explanation
  }]

  Add new entries to the arrays below as content comes in — content.html
  needs no changes to pick up more items.
*/

window.CONTENT_DATA = {
  meta: { title: "CU-TEP Reading & Writing Content" },

  reading: {
    overviewHtml: "<h4>CU-TEP Reading Test Outline</h4>\n<h4>\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e02\u0e2d\u0e07\u0e04\u0e33\u0e16\u0e32\u0e21 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e04\u0e33\u0e16\u0e32\u0e21</h4>\n<p>\u0e43\u0e19\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a CU-TEP \u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19 (Reading) \u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e16\u0e39\u0e01\u0e41\u0e1a\u0e48\u0e07\u0e2d\u0e2d\u0e01\u0e40\u0e1b\u0e47\u0e19 3 \u0e2a\u0e48\u0e27\u0e19 \u0e44\u0e14\u0e49\u0e41\u0e01\u0e48 \u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e40\u0e15\u0e34\u0e21\u0e04\u0e33\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 (Cloze Test) \u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e31\u0e49\u0e19 (Short Passage) \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e22\u0e32\u0e27 (Long Passage) \u0e01\u0e32\u0e23\u0e2a\u0e2d\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e19\u0e35\u0e49\u0e43\u0e0a\u0e49\u0e40\u0e27\u0e25\u0e32\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 70 \u0e19\u0e32\u0e17\u0e35 (1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07 10 \u0e19\u0e32\u0e17\u0e35) \u0e21\u0e35\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 60 \u0e02\u0e49\u0e2d \u0e42\u0e14\u0e22\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e40\u0e15\u0e34\u0e21\u0e04\u0e33\u0e43\u0e19\u0e0a\u0e48\u0e2d\u0e07\u0e27\u0e48\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 (Cloze Test) \u0e21\u0e35\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 15 \u0e02\u0e49\u0e2d \u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e31\u0e49\u0e19\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 5 \u0e02\u0e49\u0e2d \u0e41\u0e25\u0e30\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e22\u0e32\u0e27\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 40 \u0e02\u0e49\u0e2d (\u0e23\u0e27\u0e21\u0e40\u0e1b\u0e47\u0e19 45 \u0e02\u0e49\u0e2d\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07) \u0e17\u0e31\u0e49\u0e07\u0e19\u0e35\u0e49\u0e08\u0e33\u0e19\u0e27\u0e19\u0e02\u0e49\u0e2d\u0e02\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e25\u0e30\u0e2a\u0e48\u0e27\u0e19\u0e2d\u0e32\u0e08\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19\u0e44\u0e1b\u0e43\u0e19\u0e41\u0e15\u0e48\u0e25\u0e30\u0e1b\u0e35 \u0e41\u0e15\u0e48\u0e08\u0e30\u0e44\u0e21\u0e48\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19\u0e21\u0e32\u0e01</p>\n\n<p>\u0e43\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19 (Reading Test) \u0e08\u0e30\u0e21\u0e35\u0e01\u0e32\u0e23\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e2b\u0e25\u0e31\u0e01\u0e44\u0e27\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c\u0e43\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e02\u0e2d\u0e07 Cloze Test \u0e01\u0e32\u0e23\u0e17\u0e33\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e19\u0e35\u0e49 \u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e08\u0e30\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e43\u0e19 3 \u0e14\u0e49\u0e32\u0e19 \u0e04\u0e37\u0e2d \u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e14\u0e49\u0e32\u0e19\u0e04\u0e33\u0e28\u0e31\u0e1e\u0e17\u0e4c (Vocabulary) \u0e04\u0e27\u0e32\u0e21\u0e2a\u0e2d\u0e14\u0e04\u0e25\u0e49\u0e2d\u0e07\u0e02\u0e2d\u0e07\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e42\u0e14\u0e22\u0e23\u0e27\u0e21 (Meaning Coherence) \u0e41\u0e25\u0e30\u0e2b\u0e25\u0e31\u0e01\u0e44\u0e27\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c (Grammar) \u0e42\u0e14\u0e22\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e08\u0e30\u0e40\u0e19\u0e49\u0e19\u0e43\u0e2b\u0e49\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e41\u0e25\u0e49\u0e27\u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e33\u0e2b\u0e23\u0e37\u0e2d\u0e27\u0e25\u0e35\u0e08\u0e32\u0e01\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e17\u0e35\u0e48\u0e43\u0e2b\u0e49\u0e21\u0e32 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e15\u0e34\u0e21\u0e43\u0e2b\u0e49\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e2a\u0e21\u0e1a\u0e39\u0e23\u0e13\u0e4c\u0e17\u0e31\u0e49\u0e07\u0e14\u0e49\u0e32\u0e19\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e41\u0e25\u0e30\u0e2b\u0e25\u0e31\u0e01\u0e44\u0e27\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29 \u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e43\u0e19\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e21\u0e31\u0e01\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e43\u0e01\u0e25\u0e49\u0e40\u0e04\u0e35\u0e22\u0e07\u0e01\u0e31\u0e19 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e33\u0e17\u0e35\u0e48\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e01\u0e31\u0e1a\u0e1a\u0e23\u0e34\u0e1a\u0e17 (Word Choice) \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e17\u0e33\u0e04\u0e27\u0e32\u0e21\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e27\u0e48\u0e32\u0e04\u0e33\u0e43\u0e14\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e17\u0e35\u0e48\u0e08\u0e30\u0e17\u0e33\u0e43\u0e2b\u0e49\u0e22\u0e48\u0e2d\u0e2b\u0e19\u0e49\u0e32\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e2a\u0e21\u0e1a\u0e39\u0e23\u0e13\u0e4c \u0e2a\u0e23\u0e38\u0e1b\u0e41\u0e19\u0e27\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19 (Reading) \u0e44\u0e14\u0e49\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49</p>\n\n<p><b>1. Reading-Cloze Test</b> \u0e43\u0e19 CU-TEP \u0e08\u0e30\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e2b\u0e25\u0e31\u0e01 6 \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e04\u0e37\u0e2d</p>\n<ul>\n<li>\u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e04\u0e27\u0e32\u0e21 (Relative Pronouns)</li>\n<li>\u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21\u0e0a\u0e35\u0e49\u0e40\u0e09\u0e1e\u0e32\u0e30 (Demonstrative Pronoun)</li>\n<li>\u0e04\u0e33\u0e04\u0e38\u0e13\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 (Possessive Adjectives)</li>\n<li>\u0e04\u0e33\u0e2a\u0e31\u0e19\u0e18\u0e32\u0e19 \u0e2b\u0e23\u0e37\u0e2d \u0e04\u0e33\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21 (Subordinating Conjunctions)</li>\n<li>\u0e04\u0e33\u0e1a\u0e38\u0e1e\u0e1a\u0e17 (Prepositions)</li>\n<li>\u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21 (Word Choice)</li>\n</ul>\n\n<p><b>2. Reading Short Passages</b> (\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e31\u0e49\u0e19) \u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e31\u0e49\u0e19\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e08\u0e30\u0e16\u0e39\u0e01\u0e04\u0e31\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e21\u0e32\u0e08\u0e32\u0e01\u0e2b\u0e25\u0e32\u0e01\u0e2b\u0e25\u0e32\u0e22\u0e2a\u0e32\u0e02\u0e32 \u0e2d\u0e32\u0e08\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e04\u0e27\u0e49\u0e32\u0e17\u0e32\u0e07\u0e27\u0e34\u0e0a\u0e32\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e21\u0e48\u0e46 \u0e2b\u0e23\u0e37\u0e2d\u0e1b\u0e23\u0e30\u0e40\u0e14\u0e47\u0e19\u0e17\u0e32\u0e07\u0e2a\u0e31\u0e07\u0e04\u0e21 \u0e01\u0e48\u0e2d\u0e19\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e04\u0e27\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a\u0e17\u0e38\u0e01\u0e02\u0e49\u0e2d\u0e01\u0e48\u0e2d\u0e19 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e08\u0e38\u0e14\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e2d\u0e07\u0e2b\u0e32\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e44\u0e21\u0e48\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e01\u0e48\u0e2d\u0e19\u0e15\u0e2d\u0e1a\u0e04\u0e33\u0e16\u0e32\u0e21 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1a\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 \u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e19\u0e35\u0e49\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 5 \u0e02\u0e49\u0e2d</p>\n\n<p><b>3. Reading Long Passages</b> (\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e22\u0e32\u0e27) \u0e21\u0e35\u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e04\u0e25\u0e49\u0e32\u0e22\u0e01\u0e31\u0e1a\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e31\u0e49\u0e19 \u0e40\u0e1e\u0e35\u0e22\u0e07\u0e41\u0e15\u0e48\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e30\u0e21\u0e35\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 (Details) \u0e2b\u0e23\u0e37\u0e2d\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e04\u0e27\u0e32\u0e21\u0e04\u0e34\u0e14\u0e2b\u0e25\u0e31\u0e01 (Supporting Idea) \u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19 \u0e43\u0e19\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a CU-TEP \u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e41\u0e22\u0e01\u0e41\u0e22\u0e30\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e43\u0e2b\u0e49\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e25\u0e38\u0e21 \u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e23\u0e08\u0e31\u0e1a\u0e43\u0e08\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e25\u0e31\u0e01\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e43\u0e2b\u0e49\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08</p>\n\n<p>\u0e2b\u0e25\u0e31\u0e01\u0e43\u0e19\u0e01\u0e32\u0e23\u0e17\u0e33\u0e04\u0e27\u0e32\u0e21\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 (Passage) \u0e21\u0e35\u0e04\u0e33\u0e16\u0e32\u0e21\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e2b\u0e25\u0e31\u0e01 6 \u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17 \u0e04\u0e37\u0e2d</p>\n<ul>\n<li>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e2b\u0e32\u0e41\u0e19\u0e27\u0e04\u0e34\u0e14\u0e2b\u0e25\u0e31\u0e01\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u2014 \u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e40\u0e19\u0e49\u0e19\u0e16\u0e32\u0e21\u0e2b\u0e32\u0e43\u0e08\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e21\u0e31\u0e01\u0e21\u0e35\u0e04\u0e33\u0e16\u0e32\u0e21\u0e27\u0e48\u0e32 Main...</li>\n</ul>\n\n\n<h4>\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e2b\u0e25\u0e31\u0e01 6 \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e02\u0e2d\u0e07 Reading-Cloze Test</h4>\n\n<p><b>1. \u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e04\u0e27\u0e32\u0e21 (Relative Pronouns)</b></p>\n<p>\u0e1b\u0e23\u0e30\u0e1e\u0e31\u0e19\u0e18\u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21 (Relative Pronouns) \u0e04\u0e37\u0e2d \u0e04\u0e33\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e41\u0e17\u0e19\u0e04\u0e33\u0e19\u0e32\u0e21\u0e17\u0e35\u0e48\u0e01\u0e25\u0e48\u0e32\u0e27\u0e16\u0e36\u0e07\u0e21\u0e32\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32 \u0e41\u0e25\u0e30\u0e17\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e17\u0e35\u0e48\u0e15\u0e32\u0e21\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e02\u0e49\u0e32\u0e01\u0e31\u0e1a\u0e04\u0e33\u0e19\u0e32\u0e21\u0e02\u0e49\u0e32\u0e07\u0e2b\u0e19\u0e49\u0e32</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>\u0e04\u0e33</th><th>\u0e43\u0e0a\u0e49\u0e41\u0e17\u0e19 / \u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07</th><th>\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07</th></tr>\n<tr><td>Who</td><td>\u0e41\u0e17\u0e19\u0e04\u0e19 \u0e17\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e1b\u0e23\u0e30\u0e18\u0e32\u0e19 (subject)</td><td>The man who called you is my uncle.</td></tr>\n<tr><td>Whom</td><td>\u0e41\u0e17\u0e19\u0e04\u0e19 \u0e17\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e01\u0e23\u0e23\u0e21 (object)</td><td>The man whom you met is my uncle.</td></tr>\n<tr><td>Whose</td><td>\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07</td><td>The woman whose car was stolen is my neighbor.</td></tr>\n<tr><td>Which</td><td>\u0e41\u0e17\u0e19\u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e31\u0e15\u0e27\u0e4c</td><td>The book which I bought is interesting.</td></tr>\n<tr><td>That</td><td>\u0e41\u0e17\u0e19\u0e04\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07 (\u0e43\u0e0a\u0e49\u0e41\u0e17\u0e19 who/which \u0e44\u0e14\u0e49\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b)</td><td>The book that I bought is interesting.</td></tr>\n<tr><td>Where</td><td>\u0e41\u0e17\u0e19\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48</td><td>This is the school where I studied.</td></tr>\n</table></div>\n<p class=\"note\">\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21: \"The scientist who discovered this vaccine won a Nobel Prize.\" / \"Students whose grades improve significantly will receive a scholarship.\" / \"This is the report which the manager reviewed yesterday.\"</p>\n\n<p><b>2. \u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21\u0e0a\u0e35\u0e49\u0e40\u0e09\u0e1e\u0e32\u0e30 (Demonstrative Pronoun)</b></p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>\u0e04\u0e33</th><th>\u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49</th><th>\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07</th></tr>\n<tr><td>This</td><td>\u0e43\u0e0a\u0e49\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e19\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e01\u0e25\u0e49\u0e15\u0e31\u0e27 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c (Singular)</td><td>This football season will be better than the last one.</td></tr>\n<tr><td>These</td><td>\u0e43\u0e0a\u0e49\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e19\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e01\u0e25\u0e49\u0e15\u0e31\u0e27 \u0e40\u0e1b\u0e47\u0e19\u0e1e\u0e2b\u0e39\u0e1e\u0e08\u0e19\u0e4c (Plural)</td><td>These dresses will not fit your size.<br>I am planning to finish these paper works.</td></tr>\n<tr><td>That</td><td>\u0e43\u0e0a\u0e49\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e19\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e01\u0e25\u0e49 (\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e01\u0e25) \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c (Singular)</td><td>I think that history lesson by Prof. Chuck is very interesting.</td></tr>\n<tr><td>Those</td><td>\u0e43\u0e0a\u0e49\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e19\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e01\u0e25\u0e49 (\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e01\u0e25) \u0e40\u0e1b\u0e47\u0e19\u0e1e\u0e2b\u0e39\u0e1e\u0e08\u0e19\u0e4c (Plural)</td><td>Those helicopters fly from Bangkok to Singapore.<br>Do you think those fruits are good?</td></tr>\n<tr><td>One</td><td>\u0e43\u0e0a\u0e49\u0e41\u0e17\u0e19\u0e04\u0e33\u0e19\u0e32\u0e21\u0e19\u0e31\u0e1a\u0e44\u0e14\u0e49 (Countable nouns) \u0e17\u0e31\u0e49\u0e07\u0e04\u0e19 \u0e2a\u0e31\u0e15\u0e27\u0e4c \u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07 \u0e17\u0e35\u0e48\u0e01\u0e25\u0e48\u0e32\u0e27\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c (Singular)</td><td>What kind of computer do you like? The cheap one.<br>Jim will go to Andy's birthday party. Let's go to that one.</td></tr>\n<tr><td>Ones</td><td>\u0e43\u0e0a\u0e49\u0e41\u0e17\u0e19\u0e04\u0e33\u0e19\u0e32\u0e21\u0e19\u0e31\u0e1a\u0e44\u0e14\u0e49 (Countable nouns) \u0e17\u0e31\u0e49\u0e07\u0e04\u0e19 \u0e2a\u0e31\u0e15\u0e27\u0e4c \u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07 \u0e17\u0e35\u0e48\u0e01\u0e25\u0e48\u0e32\u0e27\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e1b\u0e47\u0e19\u0e1e\u0e2b\u0e39\u0e1e\u0e08\u0e19\u0e4c (Plural)</td><td>I applied to several schools, both local and international ones.</td></tr>\n</table></div>\n<p class=\"note\">\u0e19\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49 this/these \u0e0a\u0e35\u0e49\u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e41\u0e25\u0e49\u0e27 \u0e22\u0e31\u0e07\u0e43\u0e0a\u0e49\u0e2d\u0e49\u0e32\u0e07\u0e16\u0e36\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27\u0e44\u0e14\u0e49\u0e14\u0e49\u0e27\u0e22 \u0e40\u0e0a\u0e48\u0e19 \"This football season will be better than the last one.\" (\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e24\u0e14\u0e39\u0e01\u0e32\u0e25\u0e41\u0e02\u0e48\u0e07\u0e02\u0e31\u0e19\u0e1f\u0e38\u0e15\u0e1a\u0e2d\u0e25\u0e04\u0e23\u0e31\u0e49\u0e07\u0e19\u0e35\u0e49\u0e17\u0e35\u0e48\u0e01\u0e33\u0e25\u0e31\u0e07\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19) \u0e41\u0e25\u0e30 \"I think those history lessons by Prof. Chuck are very interesting.\" (\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e1a\u0e17\u0e40\u0e23\u0e35\u0e22\u0e19\u0e27\u0e34\u0e0a\u0e32\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e2b\u0e25\u0e32\u0e22\u0e46 \u0e04\u0e25\u0e32\u0e2a\u0e17\u0e35\u0e48\u0e40\u0e23\u0e35\u0e22\u0e19\u0e08\u0e1a\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27\u0e08\u0e32\u0e01\u0e2d\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c\u0e0a\u0e31\u0e04)</p>\n\n<p><b>3. \u0e04\u0e33\u0e04\u0e38\u0e13\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 (Possessive Adjectives)</b></p>\n<p>\u0e04\u0e33\u0e04\u0e38\u0e13\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07\u0e43\u0e19\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e43\u0e2b\u0e49\u0e2a\u0e2d\u0e14\u0e04\u0e25\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e1e\u0e39\u0e14\u0e41\u0e25\u0e30\u0e08\u0e33\u0e19\u0e27\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e33\u0e19\u0e32\u0e21\u0e17\u0e35\u0e48\u0e15\u0e32\u0e21\u0e21\u0e32 \u0e14\u0e31\u0e07\u0e15\u0e32\u0e23\u0e32\u0e07</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>\u0e1c\u0e39\u0e49\u0e1e\u0e39\u0e14 (Person)</th><th>\u0e08\u0e33\u0e19\u0e27\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e33\u0e19\u0e32\u0e21</th><th>Possessive Adjective</th><th>\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07</th></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 1 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 (1st person)</td><td>\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c</td><td>my</td><td>My house is the white one down the street.</td></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 1 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 \u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e25\u0e38\u0e48\u0e21 (1st person - Group)</td><td>\u0e1e\u0e2b\u0e39\u0e1e\u0e08\u0e19\u0e4c</td><td>our</td><td>Our team will win the football match this time.</td></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 2 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 (2nd person)</td><td>\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c</td><td>your</td><td>I think your computer is slower than it used to be.</td></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 3 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 \u0e40\u0e1b\u0e47\u0e19\u0e1c\u0e39\u0e49\u0e0a\u0e32\u0e22 (3rd person - Male)</td><td>\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c</td><td>his</td><td>Yesterday, Chai got a new cell phone from his cousin.</td></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 3 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 \u0e40\u0e1b\u0e47\u0e19\u0e1c\u0e39\u0e49\u0e2b\u0e0d\u0e34\u0e07 (3rd person - Female)</td><td>\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c</td><td>her</td><td>Her friend, Jenny, is getting married this week.</td></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 3 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 \u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e21\u0e35\u0e40\u0e1e\u0e28</td><td>\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c</td><td>its</td><td>People are now aware of Genetically Modified Organisms and its danger.</td></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 3 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 \u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e25\u0e38\u0e48\u0e21 (3rd person - Group)</td><td>\u0e1e\u0e2b\u0e39\u0e1e\u0e08\u0e19\u0e4c</td><td>their</td><td>The rock band, Radiohead, will perform at Bangna center. I bet their fans will be overwhelming.</td></tr>\n</table></div>\n\n<p><b>4. \u0e04\u0e33\u0e2a\u0e31\u0e19\u0e18\u0e32\u0e19 \u0e2b\u0e23\u0e37\u0e2d \u0e04\u0e33\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21 (Subordinate Conjunctions)</b></p>\n<p>\u0e04\u0e33\u0e2a\u0e31\u0e19\u0e18\u0e32\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e40\u0e23\u0e35\u0e22\u0e01\u0e2d\u0e35\u0e01\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e27\u0e48\u0e32 Subordinator \u0e43\u0e0a\u0e49\u0e19\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e2d\u0e19\u0e38\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04 (Subordinate Clause/Dependent Clause) \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e17\u0e35\u0e48\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e2a\u0e21\u0e1a\u0e39\u0e23\u0e13\u0e4c \u0e15\u0e49\u0e2d\u0e07\u0e2d\u0e32\u0e28\u0e31\u0e22\u0e2d\u0e35\u0e01\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e21\u0e32\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a\u0e16\u0e49\u0e27\u0e19 \u0e42\u0e14\u0e22\u0e04\u0e33\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e2a\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e40\u0e02\u0e49\u0e32\u0e14\u0e49\u0e27\u0e22\u0e01\u0e31\u0e19</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Conjunction</th><th>\u0e41\u0e1b\u0e25\u0e27\u0e48\u0e32</th></tr>\n<tr><td>after</td><td>\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01</td></tr>\n<tr><td>although</td><td>\u0e16\u0e36\u0e07\u0e41\u0e21\u0e49\u0e27\u0e48\u0e32</td></tr>\n<tr><td>as</td><td>\u0e02\u0e13\u0e30\u0e17\u0e35\u0e48, \u0e14\u0e31\u0e07\u0e17\u0e35\u0e48, \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e27\u0e48\u0e32</td></tr>\n<tr><td>as if</td><td>\u0e23\u0e32\u0e27\u0e01\u0e31\u0e1a, \u0e1b\u0e23\u0e30\u0e2b\u0e19\u0e36\u0e48\u0e07, \u0e40\u0e2a\u0e21\u0e37\u0e2d\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07</td></tr>\n<tr><td>as long as</td><td>\u0e15\u0e23\u0e32\u0e1a\u0e40\u0e17\u0e48\u0e32\u0e17\u0e35\u0e48</td></tr>\n<tr><td>as though</td><td>\u0e23\u0e32\u0e27\u0e01\u0e31\u0e1a</td></tr>\n<tr><td>because</td><td>\u0e40\u0e1e\u0e23\u0e32\u0e30\u0e27\u0e48\u0e32, \u0e40\u0e1e\u0e23\u0e32\u0e30</td></tr>\n<tr><td>before</td><td>\u0e01\u0e48\u0e2d\u0e19</td></tr>\n<tr><td>even if</td><td>\u0e41\u0e21\u0e49\u0e27\u0e48\u0e32, \u0e16\u0e49\u0e32\u0e2b\u0e32\u0e01\u0e27\u0e48\u0e32</td></tr>\n<tr><td>even though</td><td>\u0e17\u0e31\u0e49\u0e07\u0e46 \u0e17\u0e35\u0e48, \u0e16\u0e36\u0e07\u0e41\u0e21\u0e49\u0e27\u0e48\u0e32</td></tr>\n<tr><td>so that</td><td>\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e27\u0e48\u0e32</td></tr>\n<tr><td>that</td><td>\u0e17\u0e35\u0e48, \u0e27\u0e48\u0e32</td></tr>\n<tr><td>though</td><td>\u0e16\u0e36\u0e07\u0e41\u0e21\u0e49\u0e27\u0e48\u0e32</td></tr>\n<tr><td>till</td><td>\u0e08\u0e19\u0e01\u0e27\u0e48\u0e32, \u0e08\u0e19\u0e01\u0e23\u0e30\u0e17\u0e31\u0e48\u0e07</td></tr>\n<tr><td>unless</td><td>\u0e40\u0e27\u0e49\u0e19\u0e41\u0e15\u0e48, \u0e19\u0e2d\u0e01\u0e08\u0e32\u0e01</td></tr>\n<tr><td>until</td><td>\u0e08\u0e19\u0e01\u0e27\u0e48\u0e32, \u0e08\u0e19\u0e01\u0e23\u0e30\u0e17\u0e31\u0e48\u0e07</td></tr>\n<tr><td>when</td><td>\u0e40\u0e21\u0e37\u0e48\u0e2d, \u0e02\u0e13\u0e30\u0e17\u0e35\u0e48, \u0e43\u0e19\u0e40\u0e27\u0e25\u0e32\u0e17\u0e35\u0e48</td></tr>\n<tr><td>whenever</td><td>\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e23\u0e01\u0e47\u0e15\u0e32\u0e21</td></tr>\n<tr><td>where</td><td>\u0e43\u0e19\u0e17\u0e35\u0e48\u0e0b\u0e36\u0e48\u0e07</td></tr>\n<tr><td>while</td><td>\u0e43\u0e19\u0e02\u0e13\u0e30\u0e17\u0e35\u0e48</td></tr>\n</table></div>\n<p>He went to the interview as if he had been preparing for it.<br>\nUnless Suda is present, we will cancel the seminar in 30 minutes.<br>\nMy mom goes to the supermarket every weekend so that the food will be stocked for the rest of the week.</p>\n\n<p><b>5. \u0e04\u0e33\u0e1a\u0e38\u0e1e\u0e1a\u0e17 (Prepositions)</b></p>\n<p>\u0e04\u0e33\u0e1a\u0e38\u0e1e\u0e1a\u0e17 \u0e04\u0e37\u0e2d \u0e04\u0e33\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e04\u0e33\u0e19\u0e32\u0e21 \u0e04\u0e33\u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21 \u0e04\u0e33\u0e04\u0e38\u0e13\u0e28\u0e31\u0e1e\u0e17\u0e4c \u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e33\u0e01\u0e23\u0e34\u0e22\u0e32\u0e27\u0e34\u0e40\u0e28\u0e29\u0e13\u0e4c \u0e17\u0e35\u0e48\u0e17\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e23\u0e23\u0e21\u0e02\u0e2d\u0e07\u0e1a\u0e38\u0e1e\u0e1a\u0e17 (Object of the preposition) \u0e40\u0e02\u0e49\u0e32\u0e01\u0e31\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e02\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04 \u0e21\u0e35\u0e17\u0e31\u0e49\u0e07\u0e41\u0e1a\u0e1a\u0e04\u0e33\u0e40\u0e14\u0e35\u0e22\u0e27 (One-Word Prepositions) \u0e41\u0e25\u0e30\u0e41\u0e1a\u0e1a\u0e27\u0e25\u0e35 (Phrasal Prepositions)</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>One-Word Prepositions</th></tr>\n<tr><td>About, Above, After, Against, Before, During, Except, For, Like, Of, Onto, Regarding, Since, On, Near, Across, Between, Among, Until, Upon, Within</td></tr>\n</table></div>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Phrasal Prepositions</th></tr>\n<tr><td>According to, As well as, Because of, By way of, In place of, In spite of, Instead of, Next to, On account of, Out of, With regard to</td></tr>\n</table></div>\n<p>He went to the interview as if he had been preparing for it. \u0e40\u0e02\u0e32\u0e44\u0e1b\u0e2a\u0e31\u0e21\u0e20\u0e32\u0e29\u0e13\u0e4c\u0e07\u0e32\u0e19\u0e23\u0e32\u0e27\u0e01\u0e31\u0e1a\u0e27\u0e48\u0e32\u0e40\u0e02\u0e32\u0e44\u0e14\u0e49\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21\u0e15\u0e31\u0e27\u0e44\u0e27\u0e49\u0e41\u0e25\u0e49\u0e27<br>\nUnless Suda is present, we will cancel the seminar in 30 minutes. \u0e40\u0e27\u0e49\u0e19\u0e41\u0e15\u0e48\u0e2a\u0e38\u0e14\u0e32\u0e08\u0e30\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48 \u0e1e\u0e27\u0e01\u0e40\u0e23\u0e32\u0e08\u0e30\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e01\u0e32\u0e23\u0e2a\u0e31\u0e21\u0e21\u0e19\u0e32\u0e43\u0e19\u0e2d\u0e35\u0e01 30 \u0e19\u0e32\u0e17\u0e35<br>\nMy mom goes to the supermarket every weekend so that the food will be stocked for the rest of the week. \u0e41\u0e21\u0e48\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14\u0e17\u0e38\u0e01\u0e27\u0e31\u0e19\u0e2a\u0e38\u0e14\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e08\u0e30\u0e44\u0e14\u0e49\u0e21\u0e35\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e40\u0e01\u0e47\u0e1a\u0e44\u0e27\u0e49\u0e15\u0e25\u0e2d\u0e14\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e25\u0e37\u0e2d</p>\n<p class=\"note\">\u0e04\u0e33\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e17\u0e35\u0e48\u0e04\u0e27\u0e23\u0e23\u0e39\u0e49: if (\u0e16\u0e49\u0e32\u0e2b\u0e32\u0e01\u0e27\u0e48\u0e32, \u0e2a\u0e21\u0e21\u0e38\u0e15\u0e34\u0e27\u0e48\u0e32), if only (\u0e41\u0e21\u0e49\u0e19\u0e27\u0e48\u0e32\u0e40\u0e1e\u0e35\u0e22\u0e07), in order that (\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e27\u0e48\u0e32), once (\u0e17\u0e31\u0e19\u0e17\u0e35\u0e17\u0e35\u0e48), whereas (\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e14\u0e49\u0e27\u0e22, \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e40\u0e2b\u0e15\u0e38\u0e27\u0e48\u0e32 \u2014 \u0e17\u0e32\u0e07\u0e01\u0e32\u0e23), wherever (\u0e43\u0e19\u0e17\u0e38\u0e01\u0e46 \u0e17\u0e35\u0e48), since (\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48, \u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01)</p>\n\n<p><b>6. \u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21 (Word Choice)</b></p>\n<p>\u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21 \u0e04\u0e37\u0e2d \u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e33\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e21\u0e32\u0e40\u0e15\u0e34\u0e21\u0e43\u0e19\u0e0a\u0e48\u0e2d\u0e07\u0e27\u0e48\u0e32\u0e07 \u0e42\u0e14\u0e22\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e21\u0e31\u0e01\u0e21\u0e35\u0e2b\u0e19\u0e49\u0e32\u0e15\u0e32\u0e04\u0e25\u0e49\u0e32\u0e22\u0e01\u0e31\u0e19 \u0e41\u0e15\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e1e\u0e34\u0e08\u0e32\u0e23\u0e13\u0e32\u0e1a\u0e23\u0e34\u0e1a\u0e17 (Context) \u0e02\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e17\u0e31\u0e49\u0e07\u0e14\u0e49\u0e32\u0e19\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22 (Meaning) \u0e41\u0e25\u0e30\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e17\u0e32\u0e07\u0e44\u0e27\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c (Function) \u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e01\u0e31\u0e19</p>\n<p><b>\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e17\u0e35\u0e48 1</b></p>\n<p>This report ___ how the eruption affects the surrounding terrain.<br>\n(A) discusses &nbsp; (B) creates &nbsp; (C) shows &nbsp; (D) says</p>\n<p>\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e04\u0e37\u0e2d\u0e02\u0e49\u0e2d (A) discusses \u0e40\u0e1e\u0e23\u0e32\u0e30 \"discusses\" \u0e2b\u0e21\u0e32\u0e22\u0e16\u0e36\u0e07\u0e01\u0e25\u0e48\u0e32\u0e27\u0e16\u0e36\u0e07/\u0e2d\u0e20\u0e34\u0e1b\u0e23\u0e32\u0e22\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e43\u0e19\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19 \u0e15\u0e23\u0e07\u0e01\u0e31\u0e1a\u0e1a\u0e23\u0e34\u0e1a\u0e17\u0e17\u0e35\u0e48\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e1c\u0e25\u0e01\u0e23\u0e30\u0e17\u0e1a\u0e02\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e1b\u0e30\u0e17\u0e38 \u0e2a\u0e48\u0e27\u0e19 show \u0e21\u0e31\u0e01\u0e43\u0e0a\u0e49\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e41\u0e2a\u0e14\u0e07\u0e2d\u0e2d\u0e01\u0e17\u0e32\u0e07\u0e01\u0e32\u0e22\u0e20\u0e32\u0e1e (physical action) \u0e41\u0e25\u0e30 creates/says \u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23</p>\n<p><b>\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e17\u0e35\u0e48 2</b></p>\n<p>In the past three months, a new ___ of low-priced computers has been released.<br>\n(A) newly promotion &nbsp; (B) new promotion &nbsp; (C) new promotional &nbsp; (D) newly promoted</p>\n<p>\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e04\u0e37\u0e2d\u0e02\u0e49\u0e2d (B) new promotion \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e19\u0e35\u0e49\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e19\u0e32\u0e21 (Noun) \u0e17\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e23\u0e30\u0e18\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e01\u0e23\u0e34\u0e22\u0e32 \"has been released\" \u0e08\u0e36\u0e07\u0e15\u0e49\u0e2d\u0e07\u0e02\u0e22\u0e32\u0e22\u0e14\u0e49\u0e27\u0e22\u0e04\u0e33\u0e04\u0e38\u0e13\u0e28\u0e31\u0e1e\u0e17\u0e4c \"new\" (\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48 \"newly\" \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e23\u0e34\u0e22\u0e32\u0e27\u0e34\u0e40\u0e28\u0e29\u0e13\u0e4c) \u0e2a\u0e48\u0e27\u0e19\u0e02\u0e49\u0e2d (C) \"promotional\" \u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e04\u0e38\u0e13\u0e28\u0e31\u0e1e\u0e17\u0e4c \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e04\u0e33\u0e19\u0e32\u0e21 \u0e08\u0e36\u0e07\u0e43\u0e0a\u0e49\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e43\u0e19\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e19\u0e35\u0e49</p>\n\n<h4>\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a Cloze Test 1</h4>\n<p class=\"note\">The following passage is for Questions 31\u201338</p>\n<p>The discovery of the protein, which is called TRAP and which is ___(31)___ by immune cells ___(32)___ fat tissue, provides new insights into the chronic fat tissue inflammation ___(33)___ characterizes obesity.</p>\n<p>Using both cell cultures and mice ___(34)___, the researchers have shown that TRAP ___(35)___ the formation of new fat cells and can thus precipitate the development of obesity. The results also show that patients with obesity have excessive levels of TRAP.</p>\n<p>In malignant obesity, the fat cells are enlarged and less sensitive to insulin, which can lead to high glucose levels and type II diabetes. The scientists were able to show, ___(36)___, that in mice TRAP gives rise to more benign fat cells of a normal size and metabolism.</p>\n<p>\"The protein ___(37)___ useful in the treatment of conditions involving morbid cachexia, such as certain cancer diseases,\" says Professor Goran Andersson who has led the study with Professor Peter Arner. \"The discovery can also lead to new ways of treating obesity based ___(38)___ the inhibition of this protein's effect.\"</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>#</th><th>Choices</th><th>\u0e40\u0e09\u0e25\u0e22</th></tr>\n<tr><td>31</td><td>(A) hidden (B) placed (C) secreted (D) created</td><td>(C) secreted = \u0e02\u0e31\u0e1a\u0e2d\u0e2d\u0e01\u0e21\u0e32</td></tr>\n<tr><td>32</td><td>(A) against (B) in (C) at (D) among</td><td>(B) in = \u0e0b\u0e36\u0e48\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19 (Preposition)</td></tr>\n<tr><td>33</td><td>(A) that (B) when (C) whereas (D) what</td><td>(A) that = \u0e17\u0e35\u0e48 (Relative Pronoun)</td></tr>\n<tr><td>34</td><td>(A) reports (B) studies (C) projects (D) stories</td><td>(B) studies = \u0e01\u0e32\u0e23\u0e28\u0e36\u0e01\u0e29\u0e32\u0e04\u0e49\u0e19\u0e04\u0e27\u0e49\u0e32 (Word Choice)</td></tr>\n<tr><td>35</td><td>(A) communicates (B) stimulates (C) rejects (D) motivates</td><td>(B) stimulates = \u0e01\u0e23\u0e30\u0e15\u0e38\u0e49\u0e19 (Word Choice)</td></tr>\n<tr><td>36</td><td>(A) therefore (B) though (C) as if (D) however</td><td>(D) however = \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\u0e01\u0e47\u0e15\u0e32\u0e21/\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\u0e01\u0e47\u0e14\u0e35</td></tr>\n<tr><td>37</td><td>(A) harmfully (B) extremely (C) potentially (D) superficially</td><td>(C) potentially = \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e21\u0e35\u0e28\u0e31\u0e01\u0e22\u0e20\u0e32\u0e1e/\u0e21\u0e35\u0e42\u0e2d\u0e01\u0e32\u0e2a\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1b\u0e44\u0e14\u0e49 (Word Choice)</td></tr>\n<tr><td>38</td><td>(A) on (B) at (C) upon (D) in</td><td>(A) on = \u0e1a\u0e19\u0e1e\u0e37\u0e49\u0e19\u0e10\u0e32\u0e19\u0e02\u0e2d\u0e07</td></tr>\n</table></div>\n<p class=\"note\">\u0e2a\u0e23\u0e38\u0e1b\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07: \u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e1e\u0e1a\u0e42\u0e1b\u0e23\u0e15\u0e35\u0e19\u0e17\u0e35\u0e48\u0e2b\u0e25\u0e31\u0e48\u0e07\u0e2d\u0e2d\u0e01\u0e21\u0e32\u0e08\u0e32\u0e01\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e20\u0e39\u0e21\u0e34\u0e04\u0e38\u0e49\u0e21\u0e01\u0e31\u0e19\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e22\u0e37\u0e48\u0e2d\u0e44\u0e02\u0e21\u0e31\u0e19 \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e23\u0e35\u0e22\u0e01\u0e27\u0e48\u0e32 TRAP \u0e43\u0e2b\u0e49\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e0a\u0e34\u0e07\u0e25\u0e36\u0e01\u0e43\u0e2b\u0e21\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e2d\u0e31\u0e01\u0e40\u0e2a\u0e1a\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e23\u0e31\u0e07\u0e02\u0e2d\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e22\u0e37\u0e48\u0e2d\u0e44\u0e02\u0e21\u0e31\u0e19\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e02\u0e2d\u0e07\u0e42\u0e23\u0e04\u0e2d\u0e49\u0e27\u0e19 \u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e17\u0e14\u0e25\u0e2d\u0e07\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e40\u0e1e\u0e32\u0e30\u0e40\u0e25\u0e35\u0e49\u0e22\u0e07\u0e41\u0e25\u0e30\u0e2b\u0e19\u0e39\u0e17\u0e14\u0e25\u0e2d\u0e07 \u0e19\u0e31\u0e01\u0e27\u0e34\u0e08\u0e31\u0e22\u0e1e\u0e1a\u0e27\u0e48\u0e32 TRAP \u0e01\u0e23\u0e30\u0e15\u0e38\u0e49\u0e19\u0e01\u0e32\u0e23\u0e01\u0e48\u0e2d\u0e15\u0e31\u0e27\u0e02\u0e2d\u0e07\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e44\u0e02\u0e21\u0e31\u0e19\u0e43\u0e2b\u0e21\u0e48 \u0e41\u0e25\u0e30\u0e2d\u0e32\u0e08\u0e19\u0e33\u0e44\u0e1b\u0e2a\u0e39\u0e48\u0e01\u0e32\u0e23\u0e40\u0e01\u0e34\u0e14\u0e42\u0e23\u0e04\u0e2d\u0e49\u0e27\u0e19 \u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e2d\u0e49\u0e27\u0e19\u0e21\u0e35\u0e23\u0e30\u0e14\u0e31\u0e1a TRAP \u0e2a\u0e39\u0e07\u0e01\u0e27\u0e48\u0e32\u0e1b\u0e01\u0e15\u0e34 \u0e43\u0e19\u0e42\u0e23\u0e04\u0e2d\u0e49\u0e27\u0e19\u0e23\u0e38\u0e19\u0e41\u0e23\u0e07 \u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e44\u0e02\u0e21\u0e31\u0e19\u0e21\u0e35\u0e02\u0e19\u0e32\u0e14\u0e43\u0e2b\u0e0d\u0e48\u0e41\u0e25\u0e30\u0e15\u0e2d\u0e1a\u0e2a\u0e19\u0e2d\u0e07\u0e15\u0e48\u0e2d\u0e2d\u0e34\u0e19\u0e0b\u0e39\u0e25\u0e34\u0e19\u0e19\u0e49\u0e2d\u0e22\u0e25\u0e07 \u0e19\u0e33\u0e44\u0e1b\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e19\u0e49\u0e33\u0e15\u0e32\u0e25\u0e43\u0e19\u0e40\u0e25\u0e37\u0e2d\u0e14\u0e2a\u0e39\u0e07\u0e41\u0e25\u0e30\u0e40\u0e1a\u0e32\u0e2b\u0e27\u0e32\u0e19\u0e0a\u0e19\u0e34\u0e14\u0e17\u0e35\u0e48 2 \u0e41\u0e15\u0e48\u0e43\u0e19\u0e2b\u0e19\u0e39\u0e17\u0e14\u0e25\u0e2d\u0e07 TRAP \u0e01\u0e25\u0e31\u0e1a\u0e17\u0e33\u0e43\u0e2b\u0e49\u0e40\u0e01\u0e34\u0e14\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e44\u0e02\u0e21\u0e31\u0e19\u0e02\u0e19\u0e32\u0e14\u0e1b\u0e01\u0e15\u0e34\u0e41\u0e25\u0e30\u0e21\u0e35\u0e23\u0e30\u0e1a\u0e1a\u0e40\u0e1c\u0e32\u0e1c\u0e25\u0e32\u0e0d\u0e17\u0e35\u0e48\u0e14\u0e35\u0e02\u0e36\u0e49\u0e19 \u0e28\u0e32\u0e2a\u0e15\u0e23\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c Goran Andersson \u0e1c\u0e39\u0e49\u0e19\u0e33\u0e01\u0e32\u0e23\u0e28\u0e36\u0e01\u0e29\u0e32\u0e23\u0e48\u0e27\u0e21\u0e01\u0e31\u0e1a\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c Peter Arner \u0e01\u0e25\u0e48\u0e32\u0e27\u0e27\u0e48\u0e32\u0e42\u0e1b\u0e23\u0e15\u0e35\u0e19\u0e19\u0e35\u0e49\u0e2d\u0e32\u0e08\u0e21\u0e35\u0e28\u0e31\u0e01\u0e22\u0e20\u0e32\u0e1e\u0e43\u0e19\u0e01\u0e32\u0e23\u0e23\u0e31\u0e01\u0e29\u0e32\u0e20\u0e32\u0e27\u0e30\u0e1c\u0e2d\u0e21\u0e41\u0e2b\u0e49\u0e07\u0e23\u0e38\u0e19\u0e41\u0e23\u0e07\u0e08\u0e32\u0e01\u0e42\u0e23\u0e04\u0e21\u0e30\u0e40\u0e23\u0e47\u0e07\u0e1a\u0e32\u0e07\u0e0a\u0e19\u0e34\u0e14 \u0e41\u0e25\u0e30\u0e2d\u0e32\u0e08\u0e19\u0e33\u0e44\u0e1b\u0e2a\u0e39\u0e48\u0e41\u0e19\u0e27\u0e17\u0e32\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e43\u0e19\u0e01\u0e32\u0e23\u0e23\u0e31\u0e01\u0e29\u0e32\u0e42\u0e23\u0e04\u0e2d\u0e49\u0e27\u0e19\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e22\u0e31\u0e1a\u0e22\u0e31\u0e49\u0e07\u0e24\u0e17\u0e18\u0e34\u0e4c\u0e02\u0e2d\u0e07\u0e42\u0e1b\u0e23\u0e15\u0e35\u0e19\u0e19\u0e35\u0e49</p>\n\n<h4>\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a Cloze Test 2</h4>\n<p class=\"note\">The following passage is for Questions 39\u201345</p>\n<p>As chief of neurosurgery for a small city hospital, I've never had a phone call bring me good news, and this night held true to form. The emergency room had just ___(39)___ 2 a.m. \u2014 I will call Rachel. I ___(40)___ a rather 22-year-old convenience store clerk earlier with a rather ___(41)___ problem. She could not move her legs. According to the ER physician, Rachel noticed that she could not roll over in bed and, ___(42)___ the fog of sleep finally cleared, discovered that she had two lifeless legs where her lower extremities used to be. She lived alone and, not wishing to disturb her parents living miles away, managed to crawl to her nightstand and phone directly for an ambulance. When I arrived, Rachel was still strapped to a spinal board, the right sleeve of her nightgown rolled ___(43)___ to allow for the intravenous line. \"Does anything hurt?\" I asked. \"No,\" she said, shrugging. \"I really feel fine... except for ___(44)___ leg thing.\"</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>#</th><th>Choices</th><th>\u0e40\u0e09\u0e25\u0e22</th></tr>\n<tr><td>39</td><td>(A) at (B) on (C) during (D) in</td><td>(A) at = \u0e15\u0e2d\u0e19\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e27\u0e25\u0e32 (Preposition)</td></tr>\n<tr><td>40</td><td>(A) ignored (B) brought in (C) admitted (D) accepted</td><td>(C) admitted = \u0e23\u0e31\u0e1a\u0e40\u0e02\u0e49\u0e32\u0e23\u0e31\u0e01\u0e29\u0e32\u0e43\u0e19\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 (Word Choice)</td></tr>\n<tr><td>41</td><td>(A) whose (B) who (C) whom (D) which</td><td>(C) whom = \u0e1c\u0e39\u0e49\u0e0b\u0e36\u0e48\u0e07 (Relative Pronoun)</td></tr>\n<tr><td>42</td><td>(A) new (B) annoying (C) pleasing (D) continuing</td><td>(B) annoying = \u0e19\u0e48\u0e32\u0e23\u0e33\u0e04\u0e32\u0e0d (Word Choice)</td></tr>\n<tr><td>43</td><td>(A) unless (B) if (C) because (D) when</td><td>(D) when = \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e15\u0e2d\u0e19\u0e17\u0e35\u0e48 (Subordinate Conjunction)</td></tr>\n<tr><td>44</td><td>(A) on (B) up (C) off (D) under</td><td>(B) up = \u0e21\u0e49\u0e27\u0e19\u0e02\u0e36\u0e49\u0e19</td></tr>\n<tr><td>45</td><td>(A) this (B) these (C) those (D) that</td><td>(A) this = \u0e2d\u0e31\u0e19\u0e19\u0e35\u0e49 (Demonstrative Pronoun)</td></tr>\n</table></div>\n<p class=\"note\">\u0e2a\u0e23\u0e38\u0e1b\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07: \u0e14\u0e34\u0e09\u0e31\u0e19\u0e43\u0e19\u0e10\u0e32\u0e19\u0e30\u0e2b\u0e31\u0e27\u0e2b\u0e19\u0e49\u0e32\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e28\u0e31\u0e25\u0e22\u0e01\u0e23\u0e23\u0e21\u0e1b\u0e23\u0e30\u0e2a\u0e32\u0e17\u0e02\u0e2d\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e40\u0e25\u0e47\u0e01\u0e46 \u0e41\u0e2b\u0e48\u0e07\u0e2b\u0e19\u0e36\u0e48\u0e07 \u0e44\u0e21\u0e48\u0e40\u0e04\u0e22\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e41\u0e08\u0e49\u0e07\u0e02\u0e48\u0e32\u0e27\u0e14\u0e35\u0e40\u0e25\u0e22 \u0e41\u0e25\u0e30\u0e04\u0e37\u0e19\u0e19\u0e35\u0e49\u0e01\u0e47\u0e40\u0e0a\u0e48\u0e19\u0e01\u0e31\u0e19 \u0e2b\u0e49\u0e2d\u0e07\u0e09\u0e38\u0e01\u0e40\u0e09\u0e34\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e07\u0e23\u0e31\u0e1a\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e15\u0e2d\u0e19\u0e15\u0e35\u0e2a\u0e2d\u0e07\u0e1e\u0e2d\u0e14\u0e35 \u0e14\u0e34\u0e09\u0e31\u0e19\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e41\u0e08\u0e49\u0e07\u0e43\u0e2b\u0e49\u0e44\u0e1b\u0e14\u0e39\u0e41\u0e25\u0e40\u0e23\u0e40\u0e0a\u0e25 \u0e40\u0e2a\u0e21\u0e35\u0e22\u0e19\u0e23\u0e49\u0e32\u0e19\u0e2a\u0e30\u0e14\u0e27\u0e01\u0e0b\u0e37\u0e49\u0e2d\u0e27\u0e31\u0e22 22 \u0e1b\u0e35 \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e14\u0e49\u0e27\u0e22\u0e2d\u0e32\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e04\u0e48\u0e2d\u0e19\u0e02\u0e49\u0e32\u0e07\u0e19\u0e48\u0e32\u0e23\u0e33\u0e04\u0e32\u0e0d \u0e04\u0e37\u0e2d\u0e02\u0e22\u0e31\u0e1a\u0e02\u0e32\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49 \u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e2b\u0e49\u0e2d\u0e07\u0e09\u0e38\u0e01\u0e40\u0e09\u0e34\u0e19\u0e43\u0e2b\u0e49\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e27\u0e48\u0e32\u0e40\u0e23\u0e40\u0e0a\u0e25\u0e2a\u0e31\u0e07\u0e40\u0e01\u0e15\u0e27\u0e48\u0e32\u0e15\u0e19\u0e40\u0e2d\u0e07\u0e1e\u0e25\u0e34\u0e01\u0e15\u0e31\u0e27\u0e1a\u0e19\u0e40\u0e15\u0e35\u0e22\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49 \u0e41\u0e25\u0e30\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e07\u0e48\u0e27\u0e07\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e19\u0e2d\u0e19\u0e2b\u0e25\u0e31\u0e1a\u0e08\u0e32\u0e07\u0e2b\u0e32\u0e22\u0e44\u0e1b \u0e08\u0e36\u0e07\u0e1e\u0e1a\u0e27\u0e48\u0e32\u0e02\u0e32\u0e17\u0e31\u0e49\u0e07\u0e2a\u0e2d\u0e07\u0e02\u0e49\u0e32\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e41\u0e23\u0e07\u0e40\u0e25\u0e22 \u0e40\u0e18\u0e2d\u0e2d\u0e32\u0e28\u0e31\u0e22\u0e2d\u0e22\u0e39\u0e48\u0e04\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27\u0e41\u0e25\u0e30\u0e44\u0e21\u0e48\u0e2d\u0e22\u0e32\u0e01\u0e23\u0e1a\u0e01\u0e27\u0e19\u0e1e\u0e48\u0e2d\u0e41\u0e21\u0e48\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e01\u0e25 \u0e08\u0e36\u0e07\u0e04\u0e25\u0e32\u0e19\u0e44\u0e1b\u0e42\u0e17\u0e23\u0e40\u0e23\u0e35\u0e22\u0e01\u0e23\u0e16\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e14\u0e49\u0e27\u0e22\u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07 \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e14\u0e34\u0e09\u0e31\u0e19\u0e21\u0e32\u0e16\u0e36\u0e07 \u0e40\u0e23\u0e40\u0e0a\u0e25\u0e22\u0e31\u0e07\u0e16\u0e39\u0e01\u0e21\u0e31\u0e14\u0e15\u0e34\u0e14\u0e01\u0e31\u0e1a\u0e01\u0e23\u0e30\u0e14\u0e32\u0e19\u0e23\u0e2d\u0e07\u0e2b\u0e25\u0e31\u0e07 \u0e41\u0e02\u0e19\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e04\u0e25\u0e38\u0e21\u0e19\u0e2d\u0e19\u0e02\u0e49\u0e32\u0e07\u0e02\u0e27\u0e32\u0e16\u0e39\u0e01\u0e21\u0e49\u0e27\u0e19\u0e02\u0e36\u0e49\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e1b\u0e34\u0e14\u0e17\u0e32\u0e07\u0e43\u0e2b\u0e49\u0e2a\u0e32\u0e22\u0e19\u0e49\u0e33\u0e40\u0e01\u0e25\u0e37\u0e2d \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e16\u0e32\u0e21\u0e27\u0e48\u0e32\u0e40\u0e08\u0e47\u0e1a\u0e15\u0e23\u0e07\u0e44\u0e2b\u0e19\u0e44\u0e2b\u0e21 \u0e40\u0e18\u0e2d\u0e15\u0e2d\u0e1a\u0e27\u0e48\u0e32\u0e44\u0e21\u0e48\u0e40\u0e08\u0e47\u0e1a \u0e23\u0e39\u0e49\u0e2a\u0e36\u0e01\u0e42\u0e2d\u0e40\u0e04\u0e14\u0e35 \u0e22\u0e01\u0e40\u0e27\u0e49\u0e19\u0e01\u0e47\u0e41\u0e15\u0e48\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e02\u0e32\u0e02\u0e49\u0e32\u0e07\u0e19\u0e35\u0e49\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19</p>\n\n<h4>Reading Review: Short and Long Passages</h4>\n<p>\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e2d\u0e1a CU-TEP \u0e2a\u0e48\u0e27\u0e19 Short and Long Passages \u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e1a\u0e17\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e49\u0e19\u0e41\u0e25\u0e30\u0e22\u0e32\u0e27 \u0e1a\u0e17\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e49\u0e19\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 1 \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 5 \u0e04\u0e33\u0e16\u0e32\u0e21 \u0e2a\u0e48\u0e27\u0e19\u0e1a\u0e17\u0e04\u0e27\u0e32\u0e21\u0e22\u0e32\u0e27\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 4 \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e25\u0e30 7-8 \u0e04\u0e33\u0e16\u0e32\u0e21 \u0e01\u0e48\u0e2d\u0e19\u0e2d\u0e48\u0e32\u0e19\u0e1a\u0e17\u0e04\u0e27\u0e32\u0e21 \u0e04\u0e27\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a\u0e17\u0e38\u0e01\u0e02\u0e49\u0e2d\u0e01\u0e48\u0e2d\u0e19 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e17\u0e23\u0e32\u0e1a\u0e08\u0e38\u0e14\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e33\u0e16\u0e32\u0e21\u0e41\u0e25\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e44\u0e14\u0e49\u0e15\u0e23\u0e07\u0e1b\u0e23\u0e30\u0e40\u0e14\u0e47\u0e19\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19 \u0e04\u0e33\u0e16\u0e32\u0e21\u0e43\u0e19\u0e2a\u0e48\u0e27\u0e19 Reading \u0e17\u0e31\u0e49\u0e07\u0e2a\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49 \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e41\u0e1a\u0e48\u0e07\u0e2d\u0e2d\u0e01\u0e40\u0e1b\u0e47\u0e19 6 \u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e2b\u0e25\u0e31\u0e01 \u0e14\u0e31\u0e07\u0e19\u0e35\u0e49</p>\n\n<p><b>1. \u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e16\u0e32\u0e21\u0e43\u0e08\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 (Main Idea)</b></p>\n<p>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e27\u0e48\u0e32\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e20\u0e32\u0e1e\u0e23\u0e27\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e43\u0e08\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48 \u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e1e\u0e1a\u0e1a\u0e48\u0e2d\u0e22 \u0e44\u0e14\u0e49\u0e41\u0e01\u0e48</p>\n<ul>\n<li>What is the main idea of the passage?</li>\n<li>Which of the following contains the main idea of the passage?</li>\n<li>What is the article about?</li>\n<li>What is mainly discussed in the passage?</li>\n<li>What can be the conclusion of this passage?</li>\n<li>What is the main purpose of the passage?</li>\n</ul>\n\n<p><b>2. \u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e16\u0e32\u0e21\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e02\u0e2d\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 (Detailed Questions)</b></p>\n<p>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e16\u0e32\u0e21\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e22\u0e48\u0e2d\u0e22\u0e17\u0e35\u0e48\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e43\u0e08\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e25\u0e31\u0e01 \u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e23\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e08\u0e32\u0e01\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e42\u0e14\u0e22\u0e15\u0e23\u0e07 \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e49\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27\u0e43\u0e19\u0e01\u0e32\u0e23\u0e15\u0e2d\u0e1a \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e04\u0e33\u0e16\u0e32\u0e21 \u0e44\u0e14\u0e49\u0e41\u0e01\u0e48</p>\n<ul>\n<li>Which of the following is discussed in the passage?</li>\n<li>What can the reader learn from the passage?</li>\n<li>According to the passage, ...?</li>\n</ul>\n\n<p><b>3. \u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e16\u0e32\u0e21\u0e2d\u0e49\u0e32\u0e07\u0e2d\u0e34\u0e07\u0e43\u0e19\u0e22\u0e48\u0e2d\u0e2b\u0e19\u0e49\u0e32 (Word Reference)</b></p>\n<p>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e16\u0e32\u0e21\u0e16\u0e36\u0e07\u0e04\u0e33\u0e19\u0e32\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e33\u0e2a\u0e33\u0e04\u0e31\u0e0d (keyword) \u0e17\u0e35\u0e48\u0e04\u0e33\u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e2d\u0e49\u0e32\u0e07\u0e2d\u0e34\u0e07\u0e16\u0e36\u0e07 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2b\u0e25\u0e35\u0e01\u0e40\u0e25\u0e35\u0e48\u0e22\u0e07\u0e01\u0e32\u0e23\u0e1e\u0e39\u0e14\u0e0b\u0e49\u0e33\u0e04\u0e33\u0e40\u0e14\u0e34\u0e21</p>\n<p class=\"note\">\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07: \"Mr. Suthon is trying to get a ride to Pattaya this morning from his house in Sathon. However, he might not make it on time since the traffic around the area is pretty bad.\"<br>\n\u0e04\u0e33\u0e27\u0e48\u0e32 \"he\" \u0e2b\u0e21\u0e32\u0e22\u0e16\u0e36\u0e07 Mr. Suthon \u0e41\u0e25\u0e30\u0e04\u0e33\u0e27\u0e48\u0e32 \"the area\" \u0e2b\u0e21\u0e32\u0e22\u0e16\u0e36\u0e07\u0e1a\u0e23\u0e34\u0e40\u0e27\u0e13 Sathon Rd. \u0e17\u0e35\u0e48\u0e01\u0e25\u0e48\u0e32\u0e27\u0e16\u0e36\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32</p>\n\n<p><b>4. \u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e16\u0e2d\u0e14\u0e04\u0e27\u0e32\u0e21\u0e08\u0e32\u0e01\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 (Word/Sentence Restatement)</b></p>\n<p>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e16\u0e2d\u0e14\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e23\u0e38\u0e1b\u0e04\u0e27\u0e32\u0e21\u0e08\u0e32\u0e01\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e41\u0e15\u0e48\u0e41\u0e2a\u0e14\u0e07\u0e2d\u0e2d\u0e01\u0e21\u0e32\u0e43\u0e19\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e04\u0e33\u0e2b\u0e23\u0e37\u0e2d\u0e27\u0e25\u0e35\u0e17\u0e35\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e44\u0e1b\u0e08\u0e32\u0e01\u0e15\u0e49\u0e19\u0e09\u0e1a\u0e31\u0e1a \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e04\u0e33\u0e16\u0e32\u0e21 \u0e44\u0e14\u0e49\u0e41\u0e01\u0e48</p>\n<ul>\n<li>According to the passage, which of the following can be inferred?</li>\n<li>The author suggests that ...?</li>\n<li>What can be implied from the passage?</li>\n<li>In the first/second paragraph, we learn that ...?</li>\n<li>What does it mean by ... (\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e08\u0e32\u0e01\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07) ...?</li>\n<li>From the passage, ... (\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e08\u0e32\u0e01\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07) ... means ...?</li>\n</ul>\n\n<p><b>5. \u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e16\u0e32\u0e21\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19/\u0e1b\u0e0f\u0e34\u0e40\u0e2a\u0e18 (Affirmation/Denial Question)</b></p>\n<p>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e08\u0e30\u0e16\u0e32\u0e21\u0e2b\u0e32\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e15\u0e23\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e1a\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e01\u0e25\u0e48\u0e32\u0e27\u0e44\u0e27\u0e49\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e42\u0e14\u0e22\u0e21\u0e31\u0e01\u0e21\u0e35\u0e04\u0e33\u0e27\u0e48\u0e32 NOT \u0e2b\u0e23\u0e37\u0e2d EXCEPT \u0e43\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21 \u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e15\u0e49\u0e2d\u0e07\u0e19\u0e33\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e15\u0e48\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e44\u0e1b\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e01\u0e31\u0e1a\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e27\u0e48\u0e32\u0e15\u0e23\u0e07\u0e01\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48</p>\n<p class=\"note\">\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07: According to the passage, which of the following is not included in the accounting service?<br>\n(A) Merchandise management &nbsp; (B) Product delivery &nbsp; (C) Tax service &nbsp; (D) Issue invoice<br>\n\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e04\u0e37\u0e2d\u0e02\u0e49\u0e2d (B) Product delivery \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e25\u0e48\u0e32\u0e27\u0e16\u0e36\u0e07\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e27\u0e48\u0e32\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e25\u0e38\u0e21 merchandise management (\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32), issue invoice (\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e01\u0e43\u0e1a\u0e2a\u0e48\u0e07\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32), tax service (\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e20\u0e32\u0e29\u0e35), \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e19\u0e33\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e41\u0e25\u0e30\u0e43\u0e1a\u0e2a\u0e31\u0e48\u0e07\u0e0b\u0e37\u0e49\u0e2d\u0e40\u0e02\u0e49\u0e32\u0e10\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e0b\u0e36\u0e48\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32 (Product delivery) \u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e17\u0e35\u0e48\u0e01\u0e25\u0e48\u0e32\u0e27\u0e16\u0e36\u0e07</p>\n\n<p><b>6. \u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e16\u0e32\u0e21\u0e08\u0e38\u0e14\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e08\u0e15\u0e19\u0e32\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e35\u0e22\u0e19 (Passage Objectives and Intention)</b></p>\n<p>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e42\u0e14\u0e22\u0e23\u0e27\u0e21\u0e17\u0e35\u0e48\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e04\u0e34\u0e14\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e15\u0e48\u0e2d\u0e22\u0e2d\u0e14\u0e08\u0e32\u0e01\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e43\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e27\u0e48\u0e32\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e35\u0e22\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2a\u0e37\u0e48\u0e2d\u0e2d\u0e30\u0e44\u0e23 \u0e21\u0e35\u0e40\u0e08\u0e15\u0e19\u0e32\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23 \u0e2b\u0e23\u0e37\u0e2d\u0e17\u0e34\u0e49\u0e07\u0e17\u0e49\u0e32\u0e22\u0e44\u0e27\u0e49\u0e43\u0e2b\u0e49\u0e04\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23 \u0e42\u0e14\u0e22\u0e08\u0e30\u0e44\u0e21\u0e48\u0e1a\u0e2d\u0e01\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e44\u0e27\u0e49\u0e15\u0e23\u0e07\u0e46 \u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e08\u0e36\u0e07\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e17\u0e31\u0e01\u0e29\u0e30\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2b\u0e32\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e43\u0e2b\u0e49\u0e44\u0e14\u0e49\u0e21\u0e32\u0e01\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e27\u0e48\u0e32\u0e08\u0e38\u0e14\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e35\u0e22\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23</p>\n<ol>\n<li>\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e27\u0e34\u0e17\u0e22\u0e32\u0e01\u0e32\u0e23 \u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35 \u0e27\u0e34\u0e0a\u0e32\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e21\u0e48\u0e46 \u2014 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e1a\u0e2d\u0e01\u0e01\u0e25\u0e48\u0e32\u0e27 (To inform)</li>\n<li>\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e21\u0e32\u0e08\u0e32\u0e01\u0e04\u0e14\u0e35\u0e2d\u0e32\u0e0a\u0e0d\u0e32\u0e01\u0e23\u0e23\u0e21 \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e02\u0e20\u0e32\u0e1e \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27\u0e42\u0e23\u0e04 \u2014 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e15\u0e37\u0e2d\u0e19 (To warn) / \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22 (To explain or describe)</li>\n<li>\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e31\u0e07\u0e04\u0e21 \u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e0a\u0e35\u0e27\u0e34\u0e15 \u0e40\u0e28\u0e23\u0e29\u0e10\u0e01\u0e34\u0e08 \u2014 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e27\u0e34\u0e08\u0e32\u0e23\u0e13\u0e4c (To analyze) / \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e04\u0e34\u0e14\u0e40\u0e2b\u0e47\u0e19 (To demonstrate) / \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e33\u0e40\u0e2a\u0e19\u0e2d (To present) / \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e0a\u0e31\u0e01\u0e08\u0e39\u0e07\u0e43\u0e08 (To convince/persuade) / \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e27\u0e34\u0e08\u0e32\u0e23\u0e13\u0e4c (To criticize)</li>\n</ol>\n<p>\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\u0e01\u0e47\u0e14\u0e35 \u0e16\u0e49\u0e32\u0e25\u0e2d\u0e07\u0e1e\u0e34\u0e08\u0e32\u0e23\u0e13\u0e32\u0e16\u0e36\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e21\u0e35\u0e08\u0e38\u0e14\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e15\u0e49\u0e2d\u0e07\u0e08\u0e14\u0e08\u0e33\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e19\u0e35\u0e49 \u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e23\u0e1e\u0e34\u0e08\u0e32\u0e23\u0e13\u0e32\u0e27\u0e48\u0e32\u0e2a\u0e48\u0e27\u0e19\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e19\u0e37\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e2a\u0e36\u0e01\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e35\u0e22\u0e19 \u0e41\u0e1a\u0e48\u0e07\u0e2d\u0e2d\u0e01\u0e40\u0e1b\u0e47\u0e19 3 \u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e43\u0e2b\u0e0d\u0e48\u0e46 \u0e04\u0e37\u0e2d \u0e43\u0e19\u0e17\u0e32\u0e07\u0e1a\u0e27\u0e01 (Positive) \u0e43\u0e19\u0e17\u0e32\u0e07\u0e01\u0e25\u0e32\u0e07 (Neutral) \u0e41\u0e25\u0e30\u0e43\u0e19\u0e17\u0e32\u0e07\u0e25\u0e1a (Negative)</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Positive Attitude/Tone</th><th>Neutral Attitude/Tone</th><th>Negative Attitude/Tone</th></tr>\n<tr><td>Optimistic (\u0e17\u0e35\u0e48\u0e21\u0e2d\u0e07\u0e42\u0e25\u0e01\u0e43\u0e19\u0e41\u0e07\u0e48\u0e14\u0e35)</td><td>Indifferent (\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07, \u0e40\u0e09\u0e22\u0e46)</td><td>Anxious (\u0e17\u0e35\u0e48\u0e27\u0e34\u0e15\u0e01\u0e01\u0e31\u0e07\u0e27\u0e25)</td></tr>\n<tr><td>Passionate (\u0e17\u0e35\u0e48\u0e01\u0e23\u0e30\u0e15\u0e37\u0e2d\u0e23\u0e37\u0e2d\u0e23\u0e49\u0e19)</td><td>Impartial (\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e40\u0e02\u0e49\u0e32\u0e02\u0e49\u0e32\u0e07\u0e1d\u0e48\u0e32\u0e22\u0e43\u0e14)</td><td>Frustrated (\u0e17\u0e35\u0e48\u0e2b\u0e07\u0e38\u0e14\u0e2b\u0e07\u0e34\u0e14)</td></tr>\n</table></div>\n\n<h4>\u0e01\u0e25\u0e22\u0e38\u0e17\u0e18\u0e4c\u0e01\u0e32\u0e23\u0e17\u0e33\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19 (Strategies for Reading Test)</h4>\n<p>\u0e01\u0e32\u0e23\u0e17\u0e33\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e19\u0e31\u0e49\u0e19 \u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e15\u0e49\u0e2d\u0e07\u0e1d\u0e36\u0e01\u0e17\u0e33\u0e04\u0e27\u0e32\u0e21\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e43\u0e19\u0e40\u0e27\u0e25\u0e32\u0e17\u0e35\u0e48\u0e08\u0e33\u0e01\u0e31\u0e14 \u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e15\u0e49\u0e2d\u0e07\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2d\u0e48\u0e32\u0e19 scan \u0e2b\u0e23\u0e37\u0e2d\u0e01\u0e27\u0e32\u0e14\u0e2a\u0e32\u0e22\u0e15\u0e32\u0e2b\u0e32\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e42\u0e14\u0e22\u0e23\u0e27\u0e21\u0e02\u0e2d\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e23\u0e27\u0e14\u0e40\u0e23\u0e47\u0e27 \u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e16\u0e2d\u0e14\u0e04\u0e27\u0e32\u0e21\u0e04\u0e34\u0e14\u0e2b\u0e23\u0e37\u0e2d\u0e2b\u0e32\u0e04\u0e33\u0e2b\u0e21\u0e32\u0e22\u0e1e\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19 (matching) \u0e01\u0e47\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e35\u0e01\u0e17\u0e31\u0e01\u0e29\u0e30\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e22\u0e32\u0e27 \u0e21\u0e35\u0e40\u0e17\u0e04\u0e19\u0e34\u0e04\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Positive Tone</th><th>Negative/Critical Tone</th></tr>\n<tr><td>Cheerful (\u0e17\u0e35\u0e48\u0e2a\u0e14\u0e0a\u0e37\u0e48\u0e19, \u0e23\u0e48\u0e32\u0e40\u0e23\u0e34\u0e07)</td><td>Critical (\u0e17\u0e35\u0e48\u0e04\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e07)</td></tr>\n<tr><td>Enthusiastic (\u0e17\u0e35\u0e48\u0e01\u0e23\u0e30\u0e15\u0e37\u0e2d\u0e23\u0e37\u0e2d\u0e23\u0e49\u0e19)</td><td>Disappointed (\u0e17\u0e35\u0e48\u0e1c\u0e34\u0e14\u0e2b\u0e27\u0e31\u0e07)</td></tr>\n<tr><td>Overwhelmed (\u0e17\u0e35\u0e48\u0e23\u0e39\u0e49\u0e2a\u0e36\u0e01\u0e17\u0e48\u0e27\u0e21\u0e17\u0e49\u0e19)</td><td></td></tr>\n</table></div>\n<ol>\n<li>\u0e15\u0e23\u0e27\u0e08\u0e14\u0e39\u0e04\u0e33\u0e16\u0e32\u0e21\u0e02\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e01\u0e48\u0e2d\u0e19\u0e27\u0e48\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e43\u0e14\u0e08\u0e32\u0e01 6 \u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e14\u0e31\u0e07\u0e01\u0e25\u0e48\u0e32\u0e27 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e27\u0e34\u0e18\u0e35\u0e2b\u0e32\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e43\u0e2b\u0e49\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21</li>\n<li>\u0e16\u0e49\u0e32\u0e04\u0e33\u0e16\u0e32\u0e21\u0e16\u0e32\u0e21\u0e16\u0e36\u0e07\u0e04\u0e33\u0e2b\u0e23\u0e37\u0e2d\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e08\u0e38\u0e14 (\u0e40\u0e0a\u0e48\u0e19\u0e16\u0e32\u0e21\u0e27\u0e48\u0e32 What is true about antibody? \u0e2b\u0e23\u0e37\u0e2d\u0e23\u0e30\u0e1a\u0e38\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e43\u0e19 line \u0e15\u0e48\u0e32\u0e07\u0e46) \u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e01\u0e27\u0e32\u0e14\u0e2a\u0e32\u0e22\u0e15\u0e32 (scan) \u0e2b\u0e32\u0e04\u0e33\u0e19\u0e31\u0e49\u0e19\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e48\u0e2d\u0e19 \u0e41\u0e25\u0e49\u0e27\u0e04\u0e48\u0e2d\u0e22\u0e2d\u0e48\u0e32\u0e19\u0e1a\u0e23\u0e34\u0e1a\u0e17\u0e23\u0e2d\u0e1a\u0e02\u0e49\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e04\u0e33\u0e19\u0e31\u0e49\u0e19\u0e42\u0e14\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2b\u0e32\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07 \u0e44\u0e21\u0e48\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14</li>\n<li>\u0e2a\u0e31\u0e07\u0e40\u0e01\u0e15\u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e02\u0e36\u0e49\u0e19\u0e15\u0e49\u0e19\u0e14\u0e49\u0e27\u0e22 Why, How, What \u0e43\u0e2b\u0e49\u0e14\u0e35 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e08\u0e30\u0e1a\u0e48\u0e07\u0e1a\u0e2d\u0e01\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e2d\u0e07\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23</li>\n<li>\u0e2d\u0e22\u0e48\u0e32\u0e14\u0e48\u0e27\u0e19\u0e15\u0e2d\u0e1a\u0e08\u0e32\u0e01\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e40\u0e14\u0e34\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e32\u0e14\u0e40\u0e14\u0e32\u0e40\u0e2d\u0e32\u0e40\u0e2d\u0e07 \u0e15\u0e49\u0e2d\u0e07\u0e2b\u0e32\u0e2b\u0e25\u0e31\u0e01\u0e10\u0e32\u0e19\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e08\u0e32\u0e01\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e40\u0e2a\u0e21\u0e2d</li>\n<li>\u0e2d\u0e48\u0e32\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e43\u0e2b\u0e49\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e04\u0e23\u0e1a\u0e16\u0e49\u0e27\u0e19 \u0e42\u0e14\u0e22\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e21\u0e35 NOT \u0e2b\u0e23\u0e37\u0e2d EXCEPT \u0e15\u0e49\u0e2d\u0e07\u0e19\u0e33\u0e41\u0e15\u0e48\u0e25\u0e30\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e1b\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e01\u0e31\u0e1a\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e25\u0e30\u0e02\u0e49\u0e2d</li>\n<li>\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e1d\u0e36\u0e01\u0e1d\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e2a\u0e21\u0e48\u0e33\u0e40\u0e2a\u0e21\u0e2d\u0e41\u0e25\u0e30\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e20\u0e32\u0e1e\u0e23\u0e27\u0e21\u0e02\u0e2d\u0e07\u0e42\u0e08\u0e17\u0e22\u0e4c\u0e41\u0e15\u0e48\u0e25\u0e30\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e41\u0e25\u0e49\u0e27 \u0e08\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e17\u0e33\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e44\u0e14\u0e49\u0e23\u0e27\u0e14\u0e40\u0e23\u0e47\u0e27\u0e41\u0e25\u0e30\u0e41\u0e21\u0e48\u0e19\u0e22\u0e33\u0e02\u0e36\u0e49\u0e19</li>\n</ol>",
    questions: [],
  },

  writing: {
    chapters: [
      {
        "title": "บทที่ 1: รูปแบบคำ (Word Forms)",
        "referenceHtml": "<h4>Parts of Speech (ชนิดของคำ)</h4>\n<p>ในภาษาอังกฤษ มีการแบ่งประเภทของคำ หรือที่เรียกว่า Parts of Speech ออกเป็น 8 ประเภท คือ คำนาม (Noun) คำสรรพนาม (Pronoun) คำกริยา (Verb) คำคุณศัพท์ (Adjective) คำกริยาวิเศษณ์ (Adverb) คำสันธาน (Conjunction) คำบุพบท (Preposition) และคำอุทาน (Interjection/Exclamation)</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Parts of Speech</th><th>Abbr</th><th>Example</th></tr>\n<tr><td>Noun</td><td>n.</td><td>activity</td></tr>\n<tr><td>Pronoun</td><td>pron.</td><td>he</td></tr>\n<tr><td>Verb</td><td>v.</td><td>locate</td></tr>\n<tr><td>Adjective</td><td>adj.</td><td>creative</td></tr>\n<tr><td>Adverb</td><td>adv.</td><td>quickly</td></tr>\n<tr><td>Conjunction</td><td>conj.</td><td>and</td></tr>\n<tr><td>Preposition</td><td>prep.</td><td>among</td></tr>\n<tr><td>Interjection</td><td>interj.</td><td>My goodness! Oh!</td></tr>\n</table></div>\n\n<h4>คำนาม (Noun)</h4>\n<p>คำนาม (Noun) หมายถึง คำที่ใช้เรียกชื่อ คน สัตว์ สิ่งของ สถานที่ ฯลฯ จะแบ่งออกเป็นรูปแบบใหญ่ๆ ได้คือ นามนับได้ (Countable Noun) และนามนับไม่ได้ (Uncountable Noun) นอกจากนี้ยังมีรูปแบบที่เติมท้ายคำแล้วกลายเป็นคำนามได้ ซึ่งสามารถตรวจสอบด้วยภาษาอังกฤษว่ามี Suffix ท้ายคำเหล่านี้ จะค่าพบคำนามบ่อยๆ</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Suffix</th><th>Examples</th></tr>\n<tr><td>-hood</td><td>adulthood (ความเป็นผู้ใหญ่)</td></tr>\n<tr><td>-ism</td><td>feminism (สตรีสิทธินิยม)</td></tr>\n<tr><td>-ity</td><td>complexity (ความซับซ้อน)</td></tr>\n<tr><td>-logy</td><td>astrology (โหราศาสตร์)</td></tr>\n<tr><td>-ment</td><td>experiment (การทดลอง)</td></tr>\n<tr><td>-ness</td><td>brightness (ความสว่าง)</td></tr>\n<tr><td>-th</td><td>health (สุขภาพ)</td></tr>\n<tr><td>-tion, -sion</td><td>consumption (การบริโภค), explosion (การระเบิด)</td></tr>\n</table></div>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Suffix</th><th>Examples</th></tr>\n<tr><td>-ant, -ent</td><td>consultant (ที่ปรึกษา), agent (ตัวแทน)</td></tr>\n<tr><td>-ee</td><td>employee (ลูกจ้าง)</td></tr>\n<tr><td>-er</td><td>employer (นายจ้าง)</td></tr>\n<tr><td>-ian</td><td>librarian (บรรณารักษ์)</td></tr>\n<tr><td>-ist</td><td>artist (ศิลปิน)</td></tr>\n<tr><td>-or</td><td>investigator (ผู้สืบสวน)</td></tr>\n</table></div>\n<p class=\"note\">จุดที่ผู้สอบพึงระวัง: คำลงท้ายด้วย -al และ -ive ส่วนใหญ่จะเป็นคำคุณศัพท์ (Adjective) แต่บางคำเป็นคำนาม (Noun) ได้ เช่น arrival (การมาถึง) dismissal (การไล่ออก) proposal (ข้อเสนอ) และ executive (ผู้บริหาร) native (คนพื้นเมือง) representative (ตัวแทน)</p>\n\n<h4>คำกริยา (Verb)</h4>\n<p>หน้าที่ของคำนาม:</p>\n<ol>\n<li>ใช้เป็นประธานของประโยค เช่น <u>Forests</u> cover approximately 30 percent of the planet's land.</li>\n<li>ใช้เป็นกรรมของประโยค เช่น The company purchased a new <u>machine</u> last week.</li>\n<li>ใช้ขยายคำนามด้วยกันเอง เช่น The company plans to work with the <u>suppliers</u> directly. (ประกอบเป็นคำนามซ้อน เช่น investment bank, population ages)</li>\n</ol>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Suffix</th><th>Examples</th></tr>\n<tr><td>-ate</td><td>generate (ผลิต สร้างขึ้น)</td></tr>\n<tr><td>-en</td><td>fasten (ผูก ติด)</td></tr>\n</table></div>\n\n<h4>คำคุณศัพท์ (Adjective)</h4>\n<p>คำคุณศัพท์ (Adjective) คือ คำที่ใช้ขยายนามเพื่อให้คำนามมีความหมายชัดเจนยิ่งขึ้น และใช้ต่อท้ายกริยา Verb to be และกริยาบอกสภาพ (Linking Verb)</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Suffix</th><th>Examples</th></tr>\n<tr><td>-able, -ible</td><td>profitable (ซึ่งได้ผลประโยชน์)</td></tr>\n<tr><td>-al</td><td>formal (เป็นรูปแบบ)</td></tr>\n<tr><td>-ary</td><td>honorary (เป็นเกียรติ เป็นเกียรติยศ)</td></tr>\n<tr><td>-ent</td><td>competent (ที่มีความสามารถ)</td></tr>\n<tr><td>-ful</td><td>helpful (ซึ่งช่วยเหลือ)</td></tr>\n<tr><td>-ial</td><td>beneficial (เป็นประโยชน์)</td></tr>\n<tr><td>-ive</td><td>innovative (เกี่ยวกับการปรับปรุงใหม่)</td></tr>\n<tr><td>-less</td><td>hopeless (ซึ่งสิ้นหวัง)</td></tr>\n<tr><td>-ly</td><td>costly (ซึ่งมีราคาแพง)</td></tr>\n<tr><td>-ous</td><td>numerous (มากมาย)</td></tr>\n</table></div>\n<div class=\"tbl-wrap\"><table><tr><th>Suffix</th><th>Examples</th></tr><tr><td>-ify</td><td>identify (ระบุ)</td></tr><tr><td>-ise</td><td>advise (แนะนำ แจ้ง)</td></tr></table></div>\n<p class=\"note\">ด้วยความที่ Suffix ของ Adjective มีจำนวนมาก บางครั้งอาจจะจำไม่หมด เทคนิคหนึ่งที่ผู้สอบหลายท่านใช้คือ ให้สังเกต Adjective ได้ คือคำที่อยู่หน้า Verb to be (is, am, are, was, were, be, been, being) เช่น She is <u>beautiful</u>.</p>\n\n<h4>คำกริยาวิเศษณ์ (Adverb)</h4>\n<p>คำกริยาวิเศษณ์ (Adverb) คือ คำที่ทำหน้าที่ขยายคำกริยา คำคุณศัพท์ และคำกริยาวิเศษณ์ด้วยกันเอง มักลงท้ายด้วย -ly แต่บางคำที่ลงท้ายด้วย -ly แต่กลับเป็น Adjective เช่น costly, friendly (เป็นมิตร)</p>\n<p><b>หน้าที่ของคำกริยาวิเศษณ์</b></p>\n<ol>\n<li>ขยายคำกริยา (Verb) เช่น The manager <u>finally</u> made a decision to open a new branch.</li>\n<li>ขยายคำคุณศัพท์ (Adjective) เช่น The first conference of our company was <u>very</u> successful.</li>\n<li>ขยายคำกริยาวิเศษณ์ (Adverb) เช่น He walks <u>very</u> slowly.</li>\n</ol>",
        "questions": [
          {
            "id": "cw-1",
            "segments": [
              {
                "text": "Today, the greatest amount of "
              },
              {
                "text": "deforestation",
                "n": 1
              },
              {
                "text": " is occurring in tropical "
              },
              {
                "text": "rainforests",
                "n": 2
              },
              {
                "text": ", aided by extensive road "
              },
              {
                "text": "construction",
                "n": 3
              },
              {
                "text": " into "
              },
              {
                "text": "region",
                "n": 4
              },
              {
                "text": " that were once almost inaccessible."
              }
            ],
            "answer": 4,
            "explanation": "“region” ควรแก้เป็น “regions” เพราะเป็นคำนามนับได้ที่ไม่มีคำนำหน้า (a/an/the) กำกับ และต้องสอดคล้องกับกริยา “were” ซึ่งเป็นพหูพจน์"
          },
          {
            "id": "cw-2",
            "segments": [
              {
                "text": "Hell Joseon is a "
              },
              {
                "text": "satirical",
                "n": 1
              },
              {
                "text": " South Korean term that gained "
              },
              {
                "text": "popularity",
                "n": 2
              },
              {
                "text": " among younger Koreans in 2015 as a result of anxieties and "
              },
              {
                "text": "discontentment",
                "n": 3
              },
              {
                "text": " about unemployment in the modern South Korean "
              },
              {
                "text": "social",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 4,
            "explanation": "“social” ควรแก้เป็น “society” เพราะตำแหน่งนี้ต้องเป็นคำนาม (Noun) ทำหน้าที่เป็นกรรมของ preposition “in” ไม่ใช่คำคุณศัพท์ (Adjective)"
          },
          {
            "id": "cw-3",
            "segments": [
              {
                "text": "The "
              },
              {
                "text": "spacious",
                "n": 1
              },
              {
                "text": " commercialization "
              },
              {
                "text": "initially",
                "n": 2
              },
              {
                "text": " started out with the launching of "
              },
              {
                "text": "private",
                "n": 3
              },
              {
                "text": " satellites by NASA or other "
              },
              {
                "text": "agencies",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 1,
            "explanation": "“spacious” ควรแก้เป็น “space” เพราะตำแหน่งนี้ต้องเป็นคำนามขยายคำนาม (compound noun) กับ “commercialization” ไม่ใช่คำคุณศัพท์ (“space commercialization” = การนำอวกาศมาใช้ในเชิงพาณิชย์)"
          }
        ]
      },
      {
        "title": "บทที่ 2: คำนำหน้านาม (Determiners)",
        "referenceHtml": "<h4>คำนำหน้านาม (Determiners)</h4>\n<p>คำนำหน้านาม (Determiners) คือ คำที่อยู่หน้าคำนามเสมอ หรือเป็นคำที่ใช้ก่อนคำนาม ใช้แสดงความเป็นจำนวน ใช้แสดงความเป็นเจ้าของ เป็นต้น ชนิดของคำนำหน้านามที่พบบ่อยๆ ออกเป็น 4 กลุ่ม คือ</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Determiners</th><th>Examples</th></tr>\n<tr><td>1. Article (คำนำหน้านาม)<br>a/an + คำนามเอกพจน์<br>the + คำนามเอกพจน์/พหูพจน์/นับไม่ได้</td>\n<td>He bought <u>a</u> train ticket yesterday.<br>He forgot to bring <u>the</u> train ticket.<br><u>The</u> money he earned will be used for his school.</td></tr>\n<tr><td>2. Demonstrative Adjective<br>this/that + คำนามเอกพจน์<br>these/those + คำนามพหูพจน์</td>\n<td><u>This</u> ticket is available for an adult only.<br>Do you know <u>those</u> people at the entrance?</td></tr>\n<tr><td>3. Possessive Adjectives<br>(แสดงความเป็นเจ้าของ)</td>\n<td>Please fasten <u>your</u> seatbelt while seated.</td></tr>\n<tr><td>4. Quantifiers (คำแสดงจำนวน)<br>each/every + คำนามเอกพจน์<br>another</td>\n<td><u>Each</u> candidate should complete the form.<br><u>Another</u> new product will be released next year.</td></tr>\n<tr><td>little/a little + คำนามนับไม่ได้<br>much + คำนามนับไม่ได้</td>\n<td>There is <u>little/a little</u> information available.<br>There is not <u>much</u> time to finish work by Friday.</td></tr>\n<tr><td>many/several + คำนามพหูพจน์<br>few/a few + คำนามพหูพจน์</td>\n<td><u>Several</u> people are walking on the street.<br><u>A few</u> participants attended the seminar.</td></tr>\n<tr><td>some/all + คำนามพหูพจน์และนับไม่ได้<br>most + คำนามพหูพจน์และนับไม่ได้</td>\n<td><u>Some</u> books are not for sale in USA.<br><u>Some</u> information is available at the tourism center.<br><u>Most</u> workers want to work near their homes.</td></tr>\n</table></div>\n\n<p><b>คำนามนับได้ (Countable Noun) และคำนามนับไม่ได้ (Uncountable Noun)</b></p>\n<p>คำนามสามารถแบ่งออกเป็น คำนามนับได้ (Countable Noun) และคำนามนับไม่ได้ (Uncountable Noun) การที่จะสามารถใช้ Determiners บางตัวให้ถูกต้องตามหลักไวยากรณ์ได้ ผู้สอบจะต้องตรวจสอบก่อนว่าคำนามนั้นนับได้หรือนับไม่ได้ จึงค่อยเลือก Determiners ให้ถูกต้อง</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>คำนามนับได้ (Countable Noun)</th><th>คำนามนับไม่ได้ (Uncountable Noun)</th></tr>\n<tr><td>country, disease, factor, government, leader, problem, relationship, report, system, vitamin</td>\n<td>advice, baggage, equipment, health, immigration, information, machinery, staff</td></tr>\n</table></div>",
        "questions": [
          {
            "id": "cw-4",
            "segments": [
              {
                "text": "In "
              },
              {
                "text": "a",
                "n": 1
              },
              {
                "text": " report released in early 2023, "
              },
              {
                "text": "much",
                "n": 2
              },
              {
                "text": " scientists keeping track of "
              },
              {
                "text": "the",
                "n": 3
              },
              {
                "text": " ozone layer noted that Earth's "
              },
              {
                "text": "atmosphere",
                "n": 4
              },
              {
                "text": " is recovering."
              }
            ],
            "answer": 2,
            "explanation": "“much” ควรแก้เป็น “many” หรือตัดออกก็ได้ เพราะ “scientists” เป็นคำนามนับได้พหูพจน์ ไม่สามารถใช้ “much” (ใช้กับคำนามนับไม่ได้) ได้"
          },
          {
            "id": "cw-5",
            "segments": [
              {
                "text": "Asian "
              },
              {
                "text": "elephants",
                "n": 1
              },
              {
                "text": " have been "
              },
              {
                "text": "a",
                "n": 2
              },
              {
                "text": " symbol of Thailand since ancient times and "
              },
              {
                "text": "this",
                "n": 3
              },
              {
                "text": " magnificent animals are currently recognized as part of "
              },
              {
                "text": "the",
                "n": 4
              },
              {
                "text": " national identity."
              }
            ],
            "answer": 3,
            "explanation": "“this” ควรแก้เป็น “these” เพราะ “animals” เป็นคำนามพหูพจน์ ไม่สามารถใช้ “this” ซึ่งเป็นเอกพจน์ได้"
          },
          {
            "id": "cw-6",
            "segments": [
              {
                "text": "We have known for "
              },
              {
                "text": "several",
                "n": 1
              },
              {
                "text": " decades that there was "
              },
              {
                "text": "some",
                "n": 2
              },
              {
                "text": " water buried just below "
              },
              {
                "text": "another",
                "n": 3
              },
              {
                "text": " dry lunar soil, but we haven't been able to figure out "
              },
              {
                "text": "much",
                "n": 4
              },
              {
                "text": " about it."
              }
            ],
            "answer": 3,
            "explanation": "“another” ควรแก้เป็น “the” เพราะ “soil” ในที่นี้หมายถึงดินบนดวงจันทร์ที่กล่าวถึงไปแล้ว ไม่ใช่ดินอีกก้อนหนึ่ง จึงต้องใช้ “the” เพื่อชี้เฉพาะ"
          }
        ]
      },
      {
        "title": "บทที่ 3: คำสรรพนาม (Pronouns)",
        "referenceHtml": "<h4>คำสรรพนาม (Pronouns)</h4>\n<p>คำสรรพนาม (Pronouns) คือ คำที่ใช้แทนคน สัตว์ สิ่งของ เพื่อสื่อความการพูดซ้ำ โดยสรุปได้ดังนี้</p>\n<p><b>สรรพนามแทนบุคคล (Personal Pronouns)</b></p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>1. Subject</th><th>2. Object</th><th>3. Adjective (Possessive)</th><th>4. Pronoun (Possessive)</th><th>5. Reflexive</th></tr>\n<tr><td>I</td><td>me</td><td>my</td><td>mine</td><td>myself</td></tr>\n<tr><td>you</td><td>you</td><td>your</td><td>yours</td><td>yourself</td></tr>\n<tr><td>we</td><td>us</td><td>our</td><td>ours</td><td>ourselves</td></tr>\n<tr><td>they</td><td>them</td><td>their</td><td>theirs</td><td>themselves</td></tr>\n<tr><td>he</td><td>him</td><td>his</td><td>his</td><td>himself</td></tr>\n<tr><td>she</td><td>her</td><td>her</td><td>hers</td><td>herself</td></tr>\n<tr><td>it</td><td>it</td><td>its</td><td>its</td><td>itself</td></tr>\n</table></div>\n<p>ตัวอย่างประโยค</p>\n<ul>\n<li>ช่องที่ 1. Subject ใช้เป็นประธานของประโยค — <u>We</u> are going to be late.</li>\n<li>ช่องที่ 2. Object ใช้เป็นกรรมของประโยค — I met <u>you</u> last year at the concert.</li>\n<li>ช่องที่ 3. Possessive Adjective ใช้แสดงความเป็นเจ้าของ ตามด้วยคำนามเสมอ — Cat cafés allow visitor to play with <u>their</u> cats.</li>\n<li>ช่องที่ 4. Possessive Pronoun ใช้แสดงความเป็นเจ้าของ ไม่ต้องตามด้วยคำนาม — Angela invited us to her house, but I don't know which one is <u>hers</u>.</li>\n<li>ช่องที่ 5. Reflexive Pronoun ใช้เมื่อประธานและกรรมเป็นคนเดียวกัน — He cut <u>himself</u> while chopping vegetables.</li>\n</ul>\n\n<p><b>สรรพนามชี้เฉพาะ (Demonstrative Pronouns)</b></p>\n<p>สรรพนามชี้เฉพาะที่ใช้แทนคำนามที่กล่าวถึงก่อนหน้า เพื่อระบุถึงสิ่งของที่อยู่ใกล้หรือไกล ได้แก่</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Demonstrative Pronouns</th><th>Examples</th></tr>\n<tr><td>ใช้กับคำนามเอกพจน์: this (สิ่งนี้), that (สิ่งนั้น)</td><td><u>This</u> book is too heavy for me to carry.<br><u>That</u> book is too heavy for me to carry.</td></tr>\n<tr><td>ใช้กับคำนามพหูพจน์: these (สิ่งเหล่านี้), those (สิ่งเหล่านั้น)</td><td><u>These</u> books are too heavy for me to carry.<br><u>Those</u> books are too heavy for me to carry.</td></tr>\n</table></div>\n\n<p><b>สรรพนามไม่ชี้เฉพาะ (Indefinite Pronouns)</b></p>\n<p>สรรพนามที่ใช้แทนคำนามที่ไม่ได้เจาะจงว่าเป็นใคร สิ่งใด หรือจำนวนเท่าใด</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>กลุ่มที่เป็นเอกพจน์</th><th>กลุ่มที่เป็นพหูพจน์</th></tr>\n<tr><td>anyone, anybody, everyone, everything, nothing, another, one, each, neither, other, little, somebody, something, no one, nobody</td>\n<td>both, many, several, few, fewer, others, some, all, most</td></tr>\n</table></div>\n<p>ตัวอย่างประโยค</p>\n<ul>\n<li><u>Anything</u> is possible if you believe.</li>\n<li><u>Somebody</u> left Ms. Helen a message in the morning.</li>\n<li><u>Both</u> of the students will have to submit their reports by Friday.</li>\n<li>Due to the heavy rain, <u>fewer</u> people attended the conference.</li>\n</ul>",
        "questions": [
          {
            "id": "cw-7",
            "segments": [
              {
                "text": "When you smoke a cigarette, most of the smoke doesn't go into "
              },
              {
                "text": "your",
                "n": 1
              },
              {
                "text": " lungs, "
              },
              {
                "text": "it",
                "n": 2
              },
              {
                "text": " goes into the air around "
              },
              {
                "text": "yourselves",
                "n": 3
              },
              {
                "text": " where "
              },
              {
                "text": "anyone",
                "n": 4
              },
              {
                "text": " nearby can breathe it in."
              }
            ],
            "answer": 3,
            "explanation": "“yourselves” ควรแก้เป็น “you” เพราะหมายถึงตัวคุณ (ผู้สูบบุหรี่) ที่เป็นกรรมของ “around” ไม่ใช่ reflexive pronoun"
          },
          {
            "id": "cw-8",
            "segments": [
              {
                "text": "Dumbo octopuses have two big ears which "
              },
              {
                "text": "they",
                "n": 1
              },
              {
                "text": " use "
              },
              {
                "text": "both",
                "n": 2
              },
              {
                "text": " to swim and "
              },
              {
                "text": "these",
                "n": 3
              },
              {
                "text": " tiny creatures live in the extreme ocean depths of between 3,000 and 5,000 meters and "
              },
              {
                "text": "their",
                "n": 4
              },
              {
                "text": " only grow to about 20 centimeters tall."
              }
            ],
            "answer": 4,
            "explanation": "“their” ควรแก้เป็น “they” เพราะทำหน้าที่เป็นประธานของกริยา “grow” ต้องใช้ subject pronoun ไม่ใช่ possessive adjective"
          },
          {
            "id": "cw-9",
            "segments": [
              {
                "text": "Although we have known about sunspots for at least "
              },
              {
                "text": "several",
                "n": 1
              },
              {
                "text": " thousand years, "
              },
              {
                "text": "our",
                "n": 2
              },
              {
                "text": " understanding of them has been far less certain and some astronomers thought "
              },
              {
                "text": "they",
                "n": 3
              },
              {
                "text": " might be small planets in orbit, while "
              },
              {
                "text": "the other",
                "n": 4
              },
              {
                "text": " suspected they were simply imperfections within telescopes."
              }
            ],
            "answer": 4,
            "explanation": "“the other” ควรแก้เป็น “others” เพราะหมายถึงนักดาราศาสตร์ท่านอื่นๆ แบบไม่เจาะจง ไม่ใช่ “the other” ที่ใช้ชี้เฉพาะ"
          }
        ]
      },
      {
        "title": "บทที่ 4: ประพันธสรรพนาม (Relative Pronouns)",
        "referenceHtml": "<h4>ประพันธสรรพนาม (Relative Pronouns)</h4>\n<p>ประพันธสรรพนาม (Relative Pronouns) คือ คำที่ใช้แทนคำนามที่มากล่าวถึงก่อนหน้าและทำหน้าที่เชื่อมประโยคที่ตามหลังและขยายคำนามข้างหน้า (อนุประโยคที่ตามหลัง Relative Pronoun มีชื่อเรียกว่า Adjective Clause เพราะทำหน้าที่ขยายคำนามข้างหน้าเหมือน Adjective)</p>\n<p>ตัวอย่างการรวมประโยคด้วย Relative Pronoun</p>\n<ol>\n<li>I know a woman. The woman works for a manufacturing company.</li>\n<li>I know a woman, and she works for a manufacturing company.</li>\n<li>I know a woman <u>who</u> works for a manufacturing company.</li>\n</ol>\n<p class=\"note\">ขยายอะไร ไว้ติดกับสิ่งนั้น — วางประพันธสรรพนามไว้ข้างหน้า Wh-Words ที่มันขยาย</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>สิ่งที่ถูกขยาย</th><th>Relative Pronoun</th><th>วิธีโครงสร้างคำที่ประกบหน้า-หลัง</th></tr>\n<tr><td>Person</td><td>who</td><td>คน + who + กริยา</td></tr>\n<tr><td>Person</td><td>whom</td><td>คน + whom + คน</td></tr>\n<tr><td>Person/Thing</td><td>whose</td><td>เจ้าของ + whose + สิ่งที่เป็นเจ้าของ</td></tr>\n<tr><td>Thing</td><td>which</td><td>สัตว์/สิ่งของ + which + กริยา<br>สัตว์/สิ่งของ + which + คำนาม + กริยา</td></tr>\n<tr><td>Place</td><td>where</td><td>สถานที่ + where + คำนาม + กริยา</td></tr>\n<tr><td>Time</td><td>when</td><td>เวลา + when + คำนาม + กริยา</td></tr>\n<tr><td>Person/Thing/Place</td><td>that</td><td>ใช้แทนที่ who, whom, which</td></tr>\n</table></div>\n<p>ตัวอย่างประโยค: The woman <u>who</u> lives next door is a doctor. The man <u>whom</u> the employees met yesterday is our new manager. The employee <u>whose</u> performance was the best will receive the award.</p>\n<p class=\"note\">** หมายเหตุ ** คำว่า that สามารถใช้แทน who, which ได้ (ในกรณี defining clause) ยกเว้น whom เช่น New EU rules require all iPhones <u>that</u> are sold after 2024 to use Type-C charging ports.</p>\n\n<h4>การลดรูป Relative Pronoun (Relative Pronoun Reduction)</h4>\n<p>ข้อสอบมักตัดคำ Relative Pronoun ที่กล่าวมาแล้วออกจากประโยค ซึ่งจะมีวิธีสังเกต 1 ข้อ ดังนี้ ทายข้อทดลองว่าประโยคเดิมเป็น Active Sentence หรือ Passive Sentence</p>\n<ul>\n<li>Active Sentence: ตัด Relative Pronoun ออก และเปลี่ยนกริยาแท้เป็น Present Participle (V-ing) เสมอ</li>\n<li>Passive Sentence: ตัด Relative Pronoun และกริยา Verb to be ออก เหลือเพียงกริยาช่อง 3 (V.3)</li>\n</ul>\n<p><b>ตัวอย่างประโยค (Active)</b></p>\n<p>ประโยคเดิม: The applicant <u>who passed</u> the test will get a job.<br>\nประโยคหลัก (Independent Clause): The applicant will get a job.<br>\nประโยคครอง (Dependent Clause): who passed the test<br>\nประโยคที่รวมแล้ว: The applicant <u>passing</u> the test will get a job.</p>\n<p><b>ตัวอย่างประโยค (Passive)</b></p>\n<p>ประโยคเดิม: The applicant <u>who was selected</u> by the committee will get a job.<br>\nประโยคที่รวมแล้ว: The applicant <u>selected</u> by the committee will get a job.</p>\n\n<h4>Wh-Words ในประโยคนามานุประโยค (Noun Clause)</h4>\n<p>เมื่อใส่ Relative Pronoun เข้าไปในประโยคแล้ว จะมีความหมายทำหน้าที่แทนคำนามได้ โดยมีโครงสร้างการใช้ดังนี้</p>\n<ul>\n<li><b>what</b> — My supervisor explained <u>what</u> he plans to do next year.</li>\n<li><b>how</b> — This book will show the reader <u>how</u> new business owners can start getting some profits in the first year.</li>\n<li><b>why</b> — There are many reasons <u>why</u> learning English for adult learners is not easy.</li>\n</ul>",
        "questions": [
          {
            "id": "cw-10",
            "segments": [
              {
                "text": "Ecotourism encompasses "
              },
              {
                "text": "nature-based",
                "n": 1
              },
              {
                "text": " activities "
              },
              {
                "text": "when",
                "n": 2
              },
              {
                "text": " increase visitors' understanding of natural and cultural values, "
              },
              {
                "text": "contributing",
                "n": 3
              },
              {
                "text": " to the conservation of the natural areas and local communities "
              },
              {
                "text": "where",
                "n": 4
              },
              {
                "text": " they operate."
              }
            ],
            "answer": 2,
            "explanation": "“when” ควรแก้เป็น “that” เพราะประโยคนี้ไม่ได้กล่าวถึงช่วงเวลาที่กิจกรรมเกิดขึ้น แต่ต้องการขยายคำนาม “activities” ด้วยประโยคความสัมพันธ์ จึงต้องใช้ that/which แทน when"
          },
          {
            "id": "cw-11",
            "segments": [
              {
                "text": "Several paintings "
              },
              {
                "text": "which",
                "n": 1
              },
              {
                "text": " were created by Picasso "
              },
              {
                "text": "who",
                "n": 2
              },
              {
                "text": " rank among the most expensive paintings in the world; for example, Garçon à la pipe "
              },
              {
                "text": "was sold",
                "n": 3
              },
              {
                "text": " for US$104 million at Sotheby's on 4 May 2004, "
              },
              {
                "text": "establishing",
                "n": 4
              },
              {
                "text": " a new price record."
              }
            ],
            "answer": 2,
            "explanation": "“who” ควรแก้เป็น “which” เพราะประธานของกริยา “rank” คือ “Several paintings” (สิ่งของ) ไม่ใช่ Picasso (บุคคล) จึงต้องใช้ which แทน who"
          },
          {
            "id": "cw-12",
            "segments": [
              {
                "text": "Video game addiction, "
              },
              {
                "text": "that",
                "n": 1
              },
              {
                "text": " is also called internet gaming disorder, is a condition "
              },
              {
                "text": "characterized",
                "n": 2
              },
              {
                "text": " by severely reduced control over gaming habits, "
              },
              {
                "text": "resulting in",
                "n": 3
              },
              {
                "text": " negative consequences in many aspects of "
              },
              {
                "text": "one's",
                "n": 4
              },
              {
                "text": " life."
              }
            ],
            "answer": 1,
            "explanation": "“that” ควรแก้เป็น “which” เพราะเมื่อมีเครื่องหมาย comma นำหน้า relative pronoun ที่ขยายความแบบไม่จำกัดความ (non-defining) ต้องใช้ which ไม่ใช่ that"
          }
        ]
      },
      {
        "title": "บทที่ 5: ชนิดของคำกริยา (Types of Verb)",
        "referenceHtml": "<h4>ชนิดของคำกริยา (Types of Verb)</h4>\n<p>คำกริยา (Verb) คือ คำที่ใช้แสดงการกระทำและบอกอาการต่างๆ ของประธาน สำหรับความรู้เกี่ยวกับคำกริยาที่จำเป็นสำหรับการทำข้อสอบ CU-TEP Writing ผู้สอบต้องสามารถวิเคราะห์ว่าบางส่วนของประธานที่มีบางส่วนเลือกเปลี่ยนเป็นรูปต่างๆ ซึ่งสำหรับภาษาอังกฤษนั้นแบ่งคำกริยาหลักออกเป็น 2 กลุ่มใหญ่ๆ คือ กริยาแท้ (Finite Verbs) และกริยาไม่แท้ (Non-Finite Verbs)</p>\n\n<p><b>กริยาหลัก (Action Verbs) มี 5 รูป</b></p>\n<ol>\n<li>Verb ช่อง 1 ไม่เติม เช่น eat, meet, speak, walk</li>\n<li>Verb ช่อง 1 เติม s, es เช่น eats, meets, speaks, walks</li>\n<li>Verb ช่อง 2 เช่น ate, met, spoke, walked</li>\n<li>Verb เติม -ing เช่น eating, meeting, speaking, walking</li>\n<li>Verb ช่อง 3 เช่น eaten, met, spoken, walked</li>\n</ol>\n<p>ลักษณะที่ผู้สอบต้องจำให้ได้คือ กริยาแต่ละรูปทั้ง 5 รูปนี้ใช้ตามหน้าตำแหน่งไหนอยู่หน้าคำกริยาเหล่านี้</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th></th><th>ใช้อย่างไร</th><th>ตัวอย่าง</th></tr>\n<tr><td>1. Verb ช่อง 1 ไม่เติม</td><td>ใช้ตามหลังประธานพหูพจน์</td><td>Commuters wait for buses at the bus stop.</td></tr>\n<tr><td>2. Verb ช่อง 1 เติม s, es</td><td>ใช้ตามหลังประธานเอกพจน์</td><td>That person usually waits for buses at the bus stop.</td></tr>\n<tr><td>3. Verb ช่อง 2</td><td>ใช้ตามหลังประธานทุกตัว</td><td>The supervisor gave a speech yesterday.</td></tr>\n<tr><td>4. Verb เติม -ing</td><td>ใช้ตามหลัง Verb to be</td><td>The assistant manager is giving a presentation.</td></tr>\n<tr><td>5. Verb ช่อง 3</td><td>ใช้ตามหลัง Verb to have / Verb to be (ประโยคถูกกระทำ)</td><td>He <u>has studied</u> Japanese for several years.<br>The new software <u>was installed</u> by our programmer.</td></tr>\n</table></div>\n\n<h4>กริยาช่วย (Auxiliary Verbs หรือ Helping Verbs)</h4>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Verb to be</th><td>is, am, are, was, were, be, been, being</td></tr>\n<tr><th>Verb to do</th><td>do, does, did</td></tr>\n<tr><th>Verb to have</th><td>has, have, had</td></tr>\n<tr><th>Modal Verb</th><td>will-would, can-could, shall-should, must, may-might</td></tr>\n</table></div>\n<p><b>Verb to be</b> ได้แก่ is, am, are, was, were, be, been, being + V-ing (ประธานทำกริยานั้นเอง) หรือ is, am, are, was, were, be, being, been + V.3 (ประธานถูกกระทำ) เช่น He is eating an apple. They were playing games. Hugo has been waiting for his friends. My cats are kept in the house. An apple was eaten by the bird. Noah will be leaving the office at 5 tomorrow. The road has been repaired.</p>\n<p><b>Verb to do</b> ได้แก่ do, does, did ใช้ในประโยคปฏิเสธ ใช้ในประโยคคำถาม เช่น He does not have a car. I do not believe in ghosts. Do you have any pets? Does Hawaii have mosquito problems?</p>\n<p><b>Verb to have</b> ได้แก่ has, have, had + Verb ช่อง 3 (Perfect Tense) เช่น Luke has been to Tokyo. Felix had driven to the hospital.</p>\n\n<p><b>Model Verb</b></p>\n<div class=\"tbl-wrap\"><table>\n<tr><td>will = จะ (อนาคต)</td><td>I'm sure they will get raises.</td></tr>\n<tr><td>would = จะ</td><td>He promised he would pick her up on time.</td></tr>\n<tr><td>can = สามารถ</td><td>He can speak four languages.</td></tr>\n<tr><td>could = สามารถ</td><td>She could be late because of the heavy rain.</td></tr>\n<tr><td>may = อาจจะ</td><td>I may leave the office early.</td></tr>\n<tr><td>might = อาจจะ (อนาคต)</td><td>She might be late because of the heavy rain.</td></tr>\n<tr><td>shall = จะ (อนาคต)</td><td>Shall we meet tomorrow afternoon?</td></tr>\n<tr><td>should = ควรจะ</td><td>You should check the books again.</td></tr>\n<tr><td>must = ต้อง (จำเป็น)</td><td>The accountant must finish the report by Monday.</td></tr>\n</table></div>\n\n<h4>กริยาไม่แท้ (Non-Finite Verbs)</h4>\n<p>กริยาไม่แท้ (Non-Finite Verbs) คือ คำที่มีหน้าตาเป็นคำกริยาแต่ไม่ได้ทำหน้าที่เป็นกริยาหลักของประโยค แต่ทำหน้าที่เป็นคำนาม (Noun) คำคุณศัพท์ (Adjective) เป็นต้น</p>\n<p><b>การใช้ Verb เป็น Noun</b></p>\n<ol>\n<li>Infinitive with to เช่น <u>To pass</u> the test requires a lot of effort. (To pass เป็นประธานของประโยค)</li>\n<li>Gerund เช่น <u>Swimming</u> is a good exercise for health. (Swimming เป็น Gerund ที่เป็นคำนาม ใช้เป็นประธานของประโยค) I love <u>dancing</u>. (dancing เป็นกรรมของประโยค)</li>\n</ol>\n<p><b>การใช้ Verb เป็น Adjective</b></p>\n<p>การทำกริยาเป็น Adjective เพื่อไปขยายหน้าคำนามทำได้ 2 วิธี คือ</p>\n<ol>\n<li>เติม -ing โดยบ่งบอกถึงสิ่งที่กำลังจะเกิดขึ้นในอนาคต เช่น graduating students, upcoming movies</li>\n<li>ชี้ว่าสิ่งนั้นมีลักษณะเป็นถูกกระทำ (Adjective ลงท้าย -ed) เช่น an interesting book, a challenging job</li>\n</ol>",
        "questions": [
          {
            "id": "cw-13",
            "segments": [
              {
                "text": "Aristotle "
              },
              {
                "text": "uses",
                "n": 1
              },
              {
                "text": " the term 'memory' for the actual retaining of an experience in the impression that can "
              },
              {
                "text": "develop",
                "n": 2
              },
              {
                "text": " from sensation, and for the intellectual anxiety that "
              },
              {
                "text": "coming with",
                "n": 3
              },
              {
                "text": " the impression because it "
              },
              {
                "text": "is formed",
                "n": 4
              },
              {
                "text": " at a particular time and processing specific contents."
              }
            ],
            "answer": 3,
            "explanation": "“coming with” ควรแก้เป็น “comes with” เพราะ “that” เป็น relative pronoun แทน “anxiety” ซึ่งเป็นคำนามเอกพจน์ กริยาจึงต้องผันตามให้สอดคล้อง (comes)"
          },
          {
            "id": "cw-14",
            "segments": [
              {
                "text": "Stephen King has "
              },
              {
                "text": "published",
                "n": 1
              },
              {
                "text": " over 65 "
              },
              {
                "text": "interesting",
                "n": 2
              },
              {
                "text": " novels as well as seven under the pen name Richard Bachman: moreover, he has also "
              },
              {
                "text": "written",
                "n": 3
              },
              {
                "text": " approximately 200 short stories, most of which have been "
              },
              {
                "text": "releasing",
                "n": 4
              },
              {
                "text": " in book collections."
              }
            ],
            "answer": 4,
            "explanation": "“releasing” ควรแก้เป็น “released” เพราะ “most of which” หมายถึง short stories ซึ่งเป็นประธานพหูพจน์ที่ถูกกระทำ (ถูกรวบรวม/ตีพิมพ์) ต้องใช้ passive voice (have been + V.3) ไม่ใช่ V-ing"
          },
          {
            "id": "cw-15",
            "segments": [
              {
                "text": "Egyptologists "
              },
              {
                "text": "believe",
                "n": 1
              },
              {
                "text": " Sneferu "
              },
              {
                "text": "was",
                "n": 2
              },
              {
                "text": " pharaoh Khufu's father, but only because it was handed down by later historians that the eldest son or a "
              },
              {
                "text": "selected",
                "n": 3
              },
              {
                "text": " descendant would "
              },
              {
                "text": "inherited",
                "n": 4
              },
              {
                "text": " the throne."
              }
            ],
            "answer": 4,
            "explanation": "“inherited” ควรแก้เป็น “inherit” เพราะ “would” เป็น modal verb ต้องตามด้วยกริยาช่องที่ 1 (bare infinitive) ทันที ไม่ใช่ V.3"
          }
        ]
      },
      {
        "title": "บทที่ 6: กริยาที่มี to นำหน้า (To-Infinitives)",
        "referenceHtml": "<h4>กริยาที่มี to นำหน้า (To-Infinitives)</h4>\n<p>คำกริยาที่มี to (To-Infinitives) สามารถนำไปใช้ได้หลายลักษณะทั้งก่อนวัตถุประสงค์ ซึ่งในหลายครั้งผู้สอบจะสับสนว่าเมื่อไรควรใช้กริยาช่อง 1 (เช่น talk) เมื่อไรควรใช้กริยาที่มี to นำหน้า (เช่น to talk) หรือเมื่อไรควรใช้กริยาเติม -ing (เช่น talking) ดังนั้นบทนี้จะทำให้ผู้สอบรู้ว่าเมื่อไรควรใช้กริยา To-Infinitives</p>\n\n<p><b>หน้าที่ของ To-Infinitives</b></p>\n<ol>\n<li>ใช้เป็นคำนาม (Noun)\n  <ul>\n    <li>ประธานของประโยค — <u>To swim</u> is a good exercise.</li>\n    <li>กรรมของประโยค — She wants <u>to swim</u> at the hotel tomorrow.</li>\n    <li>ส่วนขยาย — Her goal is <u>to swim</u> in the national competition.</li>\n  </ul>\n</li>\n<li>ใช้เป็นคำคุณศัพท์ (Adjective) — Noun: ability, chance, effort, opportunity, plan, way + to Verb 1\n  <p>เป็นการนำ to Verb 1 มาใช้ขยายคำนาม เช่น</p>\n  <p>The manager gave his employee a chance <u>to improve</u> his working skills.<br>Fresh Marketplace usually launches new promotions in an effort <u>to attract</u> its customers.</p>\n</li>\n<li>ใช้เป็นกริยาวิเศษณ์ (Adverb)\n  <ul>\n    <li>ขยายคำกริยา (Verb) — The CEO <b>visited</b> the branch in New York <u>to meet</u> the staff.</li>\n    <li>ขยายคำคุณศัพท์ (Adjective) — He is <b>satisfied</b> <u>to have been given</u> the award.</li>\n    <li>ขยายทั้งประโยค (Sentence) — <u>To increase</u> the sales, we need to change the product packages.</li>\n  </ul>\n</li>\n</ol>\n\n<p><b>ใช้ To-Infinitives ตามหลังคำกริยา (Verbs) เหล่านี้เสมอ</b></p>\n<p class=\"note\">สูตร: agree, arrange, attempt, decide, desire, expect, fail, hesitate, hope, intend, manage, need, offer, plan, prepare, refuse, tend, wait, want, would like + to Verb 1</p>\n<p>The committee <b>agreed</b> <u>to buy</u> raw materials from local companies.<br>Finally, we have <b>decided</b> <u>to postpone</u> the meeting to next Tuesday.<br>This month we <b>failed</b> <u>to reach</u> our sales targets.</p>\n\n<p><b>ใช้ To-Infinitives ตามหลังคำกริยาที่มีกรรมมาคั่นระหว่างกริยาทั้งสองตัว</b></p>\n<p class=\"note\">สูตร: advise, allow, ask, cause, convince, expect, encourage, hire, invite, need, order, permit, persuade, remind, require, teach, tell, want + Object + to Verb 1</p>\n<p>I would <b>advise</b> you <u>to say</u> nothing about this.<br>Will you <b>allow</b> me <u>to use</u> your telephone?<br>The weather <b>caused</b> us <u>to take</u> a later flight.</p>\n\n<p><b>ใช้ To-Infinitives ตามหลังคำคุณศัพท์ (Adjectives) เหล่านี้เสมอ</b></p>\n<p class=\"note\">be able to, be important to, be eager to, be ready to, be difficult to, be willing to + Verb 1</p>\n<p>Alison <b>is able</b> <u>to speak</u> five languages.<br>Some applicants are <b>willing</b> <u>to work</u> at the night shift.<br>It <b>is important</b> (for us) <u>to speed up</u> the productivity to meet our customer's demand.</p>\n<p class=\"note\">* สำหรับ be important สามารถเพิ่ม for someone คั่นก่อน to V.1 ได้ด้วย ยกเว้น be capable of ต้องใช้ V-ing ตามด้วย — Some customer service staff <u>are capable of speaking</u> French.</p>",
        "questions": [
          {
            "id": "cw6-1",
            "segments": [
              {
                "text": "It is important "
              },
              {
                "text": "to prevent",
                "n": 1
              },
              {
                "text": " rabies in humans in order "
              },
              {
                "text": "to decrease",
                "n": 2
              },
              {
                "text": " the large number of fatalities; therefore, the affected person must be required "
              },
              {
                "text": "to get",
                "n": 3
              },
              {
                "text": " proper passive and active "
              },
              {
                "text": "to vaccinate",
                "n": 4
              },
              {
                "text": " as soon as possible."
              }
            ],
            "answer": 4,
            "explanation": "“to vaccinate” ควรแก้เป็น “vaccination” เพราะตำแหน่งนี้ตามหลัง Adjective “proper passive and active” ซึ่งขยายคำนาม จึงควรใช้รูปคำนามแทนกริยา"
          },
          {
            "id": "cw6-2",
            "segments": [
              {
                "text": "The process "
              },
              {
                "text": "to desalinate",
                "n": 1
              },
              {
                "text": " is energy-intensive, "
              },
              {
                "text": "to cost",
                "n": 2
              },
              {
                "text": " and complicated "
              },
              {
                "text": "to manage",
                "n": 3
              },
              {
                "text": " in an Earth-friendly way which is all we need "
              },
              {
                "text": "to know",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 2,
            "explanation": "“to cost” ควรแก้เป็น “costly” เพราะเป็นการเรียงคุณสมบัติแบบขนาน (parallel) กับคำคุณศัพท์ “energy-intensive” และ “complicated”"
          },
          {
            "id": "cw6-3",
            "segments": [
              {
                "text": "Many students who plan "
              },
              {
                "text": "to pursue",
                "n": 1
              },
              {
                "text": " a university education perceive that the most important life skills are not "
              },
              {
                "text": "to teach",
                "n": 2
              },
              {
                "text": " in traditional universities, like how to network "
              },
              {
                "text": "to get",
                "n": 3
              },
              {
                "text": " customers or a job, how "
              },
              {
                "text": "to manage",
                "n": 4
              },
              {
                "text": " your own money, etc."
              }
            ],
            "answer": 2,
            "explanation": "“to teach” ควรแก้เป็น “taught” เพราะความหมายคือทักษะการใช้ชีวิตที่สำคัญที่สุดไม่ได้ถูกสอนในมหาวิทยาลัย จึงต้องใช้ Passive Voice (Verb to be + V.3)"
          }
        ]
      },
      {
        "title": "บทที่ 7: กริยาเติม -ing ตามหลัง (Gerunds)",
        "referenceHtml": "<h4>กริยาเติม -ing ตามหลัง (Gerunds)</h4>\n<p>คำกริยาที่เติม -ing (Gerunds) สามารถนำไปใช้ได้หลากหลายลักษณะประโยคซึ่งบางครั้งอาจสับสนกันกับ To-Infinitives</p>\n\n<p><b>ใช้ Gerunds เป็นคำนาม (Noun)</b></p>\n<ul>\n<li>ประธานของประโยค — <u>Swimming</u> is a good exercise.</li>\n<li>กรรมของประโยค — She finished <u>swimming</u> at 6 p.m.</li>\n<li>ส่วนขยาย — Her favorite activity is <u>swimming</u> in the lake.</li>\n</ul>\n\n<p><b>ใช้ Gerunds ตามหลังคำกริยา (Verbs) เหล่านี้เสมอ</b></p>\n<p class=\"note\">สูตร: admit, advise, avoid, consider, deny, discuss, enjoy, finish, keep, mind, postpone, quit, recommend, stop, suggest + V-ing</p>\n<p>I admit <u>losing</u> the combination to the safe.<br>He advised <u>finding</u> a good lawyer.<br>Would you consider <u>selling</u> your share of the company?</p>\n\n<p><b>ใช้ Gerunds ตามหลัง Preposition</b></p>\n<p class=\"note\">Preposition ที่ไม่ใช้ to: about, after, as, at, before, by, for, from, in, of, on, up + V-ing</p>\n<p>Ms. Kelly is good at <u>negotiating</u> with the suppliers.<br>The manager wants to visit the client after <u>arriving</u> the airport.</p>\n<p class=\"note\">หลัง Preposition to ต้องตามด้วย to + Verb 1 ไม่ใช่ V-ing — We decided <u>to open</u> a new branch in China.</p>\n\n<p><b>* แต่บางคำในกลุ่มนี้ แม้จะลงท้ายด้วย to แต่ให้ตามด้วย Gerund (V-ing)</b></p>\n<p class=\"note\">be accustomed/used to, be committed/devoted to, be opposed to, contribute to, look forward to, object to + V-ing</p>\n<p>I look forward <u>to hearing</u> from you.<br>Mr. Thomas is used <u>to coming</u> to work in the early morning.<br>KDV is devoted <u>to providing</u> both excellent goods and services to customers.</p>\n\n<p><b>สูตร Verb + V-ing หรือ to + Verb 1 (ใช้ได้ทั้งคู่)</b></p>\n<p class=\"note\">begin, continue, prefer, start + V-ing / to Verb 1</p>\n<p>The supervisor prefers <u>staying</u>/<u>to stay</u> in New York for 2 weeks.</p>",
        "questions": [
          {
            "id": "cw7-1",
            "segments": [
              {
                "text": "Before considering "
              },
              {
                "text": "to spend",
                "n": 1
              },
              {
                "text": " $100,000 on an undergraduate education "
              },
              {
                "text": "to get",
                "n": 2
              },
              {
                "text": " a top job, try aggressively "
              },
              {
                "text": "networking",
                "n": 3
              },
              {
                "text": " and "
              },
              {
                "text": "setting",
                "n": 4
              },
              {
                "text": " up 100 informational meetings to get a job at a top company."
              }
            ],
            "answer": 1,
            "explanation": "“to spend” ควรแก้เป็น “spending” เพราะกริยา “consider” ต้องใช้ V-ing (Gerund) ตามหลัง"
          },
          {
            "id": "cw7-2",
            "segments": [
              {
                "text": "Shopping",
                "n": 1
              },
              {
                "text": " is arguably one of the oldest "
              },
              {
                "text": "expressions",
                "n": 2
              },
              {
                "text": " for "
              },
              {
                "text": "discussed",
                "n": 3
              },
              {
                "text": " what we have all been "
              },
              {
                "text": "doing",
                "n": 4
              },
              {
                "text": " for several years."
              }
            ],
            "answer": 3,
            "explanation": "“discussed” ควรแก้เป็น “discussing” เพราะหลัง preposition “for” ต้องใช้รูป V-ing (Gerund) ตามหลัง"
          },
          {
            "id": "cw7-3",
            "segments": [
              {
                "text": "Some",
                "n": 1
              },
              {
                "text": " of the money that the organization is "
              },
              {
                "text": "raising",
                "n": 2
              },
              {
                "text": " will be devoted to "
              },
              {
                "text": "repair",
                "n": 3
              },
              {
                "text": " the church's roof and "
              },
              {
                "text": "purchasing",
                "n": 4
              },
              {
                "text": " children's books for the church library."
              }
            ],
            "answer": 3,
            "explanation": "“repair” ควรแก้เป็น “repairing” เพราะหลังกริยา “be devoted to” ต้องตามด้วย V-ing (Gerund)"
          }
        ]
      },
      {
        "title": "บทที่ 8: กาลเวลา (Tense)",
        "referenceHtml": "<h4>กาลเวลา (Tense)</h4>\n<p>กาลเวลา (Tense) คือ รูปแบบของประโยคที่มีคำกริยาแสดงถึงเวลาของการกระทำ ซึ่งมีทั้งหมด 12 รูปแบบ ดังนี้</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Present Tense</th><th>Past Tense</th><th>Future Tense</th></tr>\n<tr><td>1. Present Simple<br>2. Present Continuous<br>3. Present Perfect<br>4. Present Perfect Continuous</td>\n<td>1. Past Simple<br>2. Past Continuous<br>3. Past Perfect<br>4. Past Perfect Continuous</td>\n<td>1. Future Simple<br>2. Future Continuous<br>3. Future Perfect<br>4. Future Perfect Continuous</td></tr>\n</table></div>\n<p class=\"note\">* V.1 ในที่นี้หมายถึง Infinitive Verb (กริยาช่องที่ 1 ไม่ผัน)</p>\n\n<h4>Simple Tense</h4>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Tense</th><th>วัตถุประสงค์ใช้</th><th>คำบอกเวลาที่ใช้</th><th>ตัวอย่าง</th></tr>\n<tr><td>Present Simple<br><i>Subject + V.1*</i></td><td>ความเป็นจริงทั่วไป, ทำเป็นกิจวัตร, อนาคตที่แน่นอน</td><td>always, every day, every year, often, usually</td>\n<td>The sun rises in the east.<br>He reads a book every day.<br>My flight leaves next Monday.</td></tr>\n<tr><td>Past Simple<br><i>Subject + V.2</i></td><td>อดีตที่ผ่านไปแล้ว, ทำเป็นนิสัย</td><td>ago, previously, yesterday, last year</td>\n<td>He went to the market yesterday.<br>He attended a weekly meeting last month.</td></tr>\n<tr><td>Future Simple<br><i>Subject + will + V.1</i></td><td>คาดเดาอนาคต</td><td>tomorrow, next week, soon</td>\n<td>He will go to Japan next month.</td></tr>\n</table></div>\n\n<h4>Continuous Tense</h4>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Tense</th><th>วัตถุประสงค์ใช้</th><th>คำบอกเวลาที่ใช้</th><th>ตัวอย่าง</th></tr>\n<tr><td>Present Continuous<br><i>Subject + is/am/are + V-ing</i></td><td>กำลังทำในปัจจุบัน, อนาคต</td><td>now, at the moment</td>\n<td>I am writing a letter.<br>They are coming back this afternoon.</td></tr>\n<tr><td>Past Continuous<br><i>Subject + was/were + V-ing</i></td><td>กำลังทำในอดีต (นิยมใช้คู่กับ Past Simple)</td><td>When + Past Simple (อดีตแทรกขึ้นมา), While + Past Cont. (อดีตกำลังทำ)</td>\n<td>He was writing a letter when she called me.<br>While Mr. Joe was talking on the phone, his secretary walked into the room.</td></tr>\n<tr><td>Future Continuous<br><i>Subject + will be + V-ing</i></td><td>กำลังทำในอนาคต</td><td>at this time tomorrow</td>\n<td>He will be writing another letter at this time tomorrow.</td></tr>\n</table></div>\n\n<h4>Perfect Tense</h4>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Tense</th><th>วัตถุประสงค์ใช้</th><th>คำบอกเวลาที่ใช้</th><th>ตัวอย่าง</th></tr>\n<tr><td>Present Perfect<br><i>Subject + has/have + V.3</i></td><td>ความต่อเนื่อง, ประสบการณ์, ผลลัพธ์ที่ยังคงอยู่ในปัจจุบัน, เพิ่งทำเสร็จ</td><td>since + จุดของเวลา, for + ผลรวมเวลา, already, ever, just, never, yet</td>\n<td>I have worked at this firm for 4 years.<br>He has lost his wallet.<br>She has just finished her work.</td></tr>\n<tr><td>Past Perfect<br><i>Subject + had + V.3</i></td><td>เหตุการณ์ในอดีตที่เกิดขึ้นก่อนอีกเหตุการณ์หนึ่ง (มักตามด้วย Past Simple)</td><td>before, after, when, by the time</td>\n<td>The flight had taken off before we arrived at the airport.<br>When we arrived, the dog had escaped from our home.</td></tr>\n</table></div>\n<p class=\"note\">** Future Perfect Tense ไม่ค่อยออกสอบ จึงตัดออกไป **</p>\n\n<h4>Perfect Continuous Tense</h4>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Tense</th><th>วัตถุประสงค์ใช้</th><th>คำบอกเวลาที่ใช้</th><th>ตัวอย่าง</th></tr>\n<tr><td>Present Perfect Continuous<br><i>Subject + has/have been + V-ing</i></td><td>อดีตถึงปัจจุบันและยังคงทำต่อไปเรื่อยๆ</td><td>since + จุดของเวลา, for + ผลรวมเวลา</td>\n<td>He has been working here for two years.</td></tr>\n</table></div>\n<p class=\"note\">สำหรับ Past Perfect Continuous และ Future Perfect Continuous ไม่ค่อยออกสอบในข้อสอบ CU-TEP จึงตัดออกไป มีแต่ Present Perfect Continuous ที่พอจะเจอในข้อสอบ</p>",
        "questions": [
          {
            "id": "cw8-1",
            "segments": [
              {
                "text": "Pure sulfuric acid "
              },
              {
                "text": "does",
                "n": 1
              },
              {
                "text": " not occur naturally "
              },
              {
                "text": "due to",
                "n": 2
              },
              {
                "text": " its strong affinity to water vapor; it "
              },
              {
                "text": "is",
                "n": 3
              },
              {
                "text": " hygroscopic and readily "
              },
              {
                "text": "absorb",
                "n": 4
              },
              {
                "text": " water from the air."
              }
            ],
            "answer": 4,
            "explanation": "“absorb” ควรแก้เป็น “absorbs” เพราะเนื้อความเกี่ยวกับข้อเท็จจริงเชิงวิทยาศาสตร์ (Present Simple Tense) และประธานของ absorb คือ “it” ซึ่งเป็นเอกพจน์ กริยาจึงต้องเติม s"
          },
          {
            "id": "cw8-2",
            "segments": [
              {
                "text": "In 1996, health officials in Virginia "
              },
              {
                "text": "noticed",
                "n": 1
              },
              {
                "text": " a high incidence of pneumonia, moreover, further investigation "
              },
              {
                "text": "showed",
                "n": 2
              },
              {
                "text": " that several victims "
              },
              {
                "text": "were",
                "n": 3
              },
              {
                "text": " infected with the bacterium Legionella pneumophila, which "
              },
              {
                "text": "has caused",
                "n": 4
              },
              {
                "text": " legionnaires' disease."
              }
            ],
            "answer": 4,
            "explanation": "“has caused” ควรแก้เป็น “causes” เพราะเป็นการอธิบายว่าเชื้อแบคทีเรีย Legionella pneumophila เป็นสาเหตุของโรคนี้ตามความจริงเชิงวิทยาศาสตร์ (Present Simple Tense)"
          },
          {
            "id": "cw8-3",
            "segments": [
              {
                "text": "The national programs that "
              },
              {
                "text": "had been established",
                "n": 1
              },
              {
                "text": " since 2018 "
              },
              {
                "text": "show",
                "n": 2
              },
              {
                "text": " that the Lisbon Strategy's new system of governance "
              },
              {
                "text": "is beginning",
                "n": 3
              },
              {
                "text": " to be "
              },
              {
                "text": "integrated",
                "n": 4
              },
              {
                "text": " by the Member States now."
              }
            ],
            "answer": 1,
            "explanation": "“had been established” ควรแก้เป็น “have been established” เพราะประโยคนี้ควรใช้ Present Perfect Tense (has/have + V.3) ไม่ใช่ Past Perfect เนื่องจากเหตุการณ์ต่อเนื่องมาจนถึงปัจจุบัน"
          }
        ]
      },
      {
        "title": "บทที่ 9: ประโยคถูกกระทำ และกริยาความรู้สึก (Passive Form and Verbs of Feeling)",
        "referenceHtml": "<h4>ประโยคถูกกระทำ (Passive Form)</h4>\n<p>ประโยคที่ประธานเป็นผู้ถูกกระทำ (Passive Voice) คือ ประโยคที่ประธานถูกกระทำโดยผู้ทำประโยค อาจจะบอกหรือไม่บอกก็ได้ว่าใครเป็นผู้กระทำ (ส่วนประโยคที่ประธานเป็นผู้กระทำเรียกว่ารูปประโยคแบบ Active Voice)</p>\n<p><b>Active Voice</b> — The teacher writes a letter. (ครูเขียนจดหมายหนึ่งฉบับ)<br>\n<b>Passive Voice</b> — A letter is written by the teacher. (จดหมายหนึ่งฉบับถูกเขียนโดยครู)</p>\n<p class=\"note\">รูปประโยค Passive คือ Verb to be + V.3 (Past Participle) — Verb to be ได้แก่ is, am, are, was, were, be, being, been</p>\n<p>This book <u>is written</u> by Professor Derek. (หนังสือเล่มนี้ถูกเขียนโดยศาสตราจารย์เดเร็ก)<br>\nAll orders <u>are</u> carefully <u>shipped</u>. (รายการสั่งซื้อทั้งหมดถูกส่งอย่างระมัดระวัง)<br>\nThe meeting <u>has been put off</u> until next Friday afternoon. (การประชุมถูกเลื่อนออกไปจนกว่าจะถึงวันศุกร์หน้าช่วงบ่าย)</p>\n\n<h4>กริยาความรู้สึก (Verbs of Feeling)</h4>\n<p class=\"note\">Subject + Verb to be + Verbs of Feeling (Verb to be = is, am, are, was, were, be, been, being)</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Verbs of Feeling</th><th>แปลว่า รู้สึก...</th></tr>\n<tr><td>be amazed of / be astonished at</td><td>ประหลาดใจกับ</td></tr>\n<tr><td>be concerned about</td><td>กังวลเกี่ยวกับ</td></tr>\n<tr><td>be confused about</td><td>สับสนกับ</td></tr>\n<tr><td>be delighted with</td><td>ยินดีกับ</td></tr>\n<tr><td>be disappointed at</td><td>ผิดหวังกับ</td></tr>\n<tr><td>be excited about</td><td>ตื่นเต้นเกี่ยวกับ</td></tr>\n<tr><td>be frightened at</td><td>หวาดกลัว</td></tr>\n<tr><td>be interested in</td><td>สนใจ</td></tr>\n<tr><td>be pleased with / be satisfied with</td><td>พอใจกับ</td></tr>\n<tr><td>be surprised at</td><td>ประหลาดใจกับ</td></tr>\n<tr><td>be tired of</td><td>เหนื่อยหน่ายกับ</td></tr>\n<tr><td>be worried about</td><td>กังวลเกี่ยวกับ</td></tr>\n</table></div>\n<p><b>คู่ V-ing (น่า...) / V-ed (รู้สึก...)</b> — สังเกตว่าสิ่งของ/เหตุการณ์เป็นผู้ทำให้เกิดความรู้สึก (V-ing) หรือคนเป็นผู้รู้สึก (V-ed)</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>น่า... (V-ing)</th><th>รู้สึก... (V-ed)</th></tr>\n<tr><td>amazing, astonishing</td><td>amazed, astonished</td></tr>\n<tr><td>boring</td><td>bored</td></tr>\n<tr><td>concerning</td><td>concerned</td></tr>\n<tr><td>confusing</td><td>confused</td></tr>\n<tr><td>delighting</td><td>delighted</td></tr>\n<tr><td>disappointing</td><td>disappointed</td></tr>\n<tr><td>exciting</td><td>excited</td></tr>\n<tr><td>frightening</td><td>frightened</td></tr>\n<tr><td>interesting</td><td>interested</td></tr>\n<tr><td>pleasing / satisfying</td><td>pleased / satisfied</td></tr>\n<tr><td>surprising</td><td>surprised</td></tr>\n<tr><td>trying / worrying</td><td>tried / worried</td></tr>\n</table></div>",
        "questions": [
          {
            "id": "cw9-1",
            "segments": [
              {
                "text": "A thrill-seeking photographer who "
              },
              {
                "text": "has gained",
                "n": 1
              },
              {
                "text": " fame uploading videos of underwater exploits "
              },
              {
                "text": "drowned",
                "n": 2
              },
              {
                "text": " after he "
              },
              {
                "text": "sucked",
                "n": 3
              },
              {
                "text": " into a deadly whirlpool he "
              },
              {
                "text": "was trying",
                "n": 4
              },
              {
                "text": " to film."
              }
            ],
            "answer": 3,
            "explanation": "“sucked” ควรแก้เป็น “was sucked” เพราะช่างภาพเป็นผู้ถูกดูดเข้าไปในน้ำวน (ผู้ถูกกระทำ) จึงต้องใช้ Passive Voice"
          },
          {
            "id": "cw9-2",
            "segments": [
              {
                "text": "On Earth, anticyclonic storms "
              },
              {
                "text": "are created",
                "n": 1
              },
              {
                "text": " when high atmospheric pressure "
              },
              {
                "text": "is brought",
                "n": 2
              },
              {
                "text": " about cold air from higher altitudes to "
              },
              {
                "text": "be forced",
                "n": 3
              },
              {
                "text": " down which are typical of high-pressure systems and often "
              },
              {
                "text": "associated",
                "n": 4
              },
              {
                "text": " with cold weather."
              }
            ],
            "answer": 2,
            "explanation": "“is brought” ควรแก้เป็น “brings” เพราะความกดอากาศสูงเป็นผู้กระทำ (นำอากาศเย็นลงมา) จึงควรใช้ Active Voice ไม่ใช่ Passive"
          },
          {
            "id": "cw9-3",
            "segments": [
              {
                "text": "The Cup Noodles Museum which "
              },
              {
                "text": "is known as",
                "n": 1
              },
              {
                "text": " Ando Momofuku Hatsumei Kinenkan and "
              },
              {
                "text": "located",
                "n": 2
              },
              {
                "text": " in Yokohama is an interactive museum exhibiting the history of instant ramen noodles and it "
              },
              {
                "text": "was opened",
                "n": 3
              },
              {
                "text": " by the Nissin Food, whose founder "
              },
              {
                "text": "was invented",
                "n": 4
              },
              {
                "text": " instant ramen noodles in 1958."
              }
            ],
            "answer": 4,
            "explanation": "“was invented” ควรแก้เป็น “invented” เพราะผู้ก่อตั้ง (founder) เป็นผู้ริเริ่มคิดค้นบะหมี่กึ่งสำเร็จรูปเอง (ผู้กระทำ) จึงต้องใช้ Active Voice ไม่ใช่ Passive"
          }
        ]
      },
      {
        "title": "บทที่ 10: คำบุพบท (Prepositions)",
        "referenceHtml": "<h4>คำบุพบท (Prepositions)</h4>\n<p>คำบุพบท (Prepositions) คือ คำที่ใช้เชื่อมคำนาม คำสรรพนาม หรือวลีให้เข้าด้วยกัน โดยคำหรือวลีที่อยู่หลังคำบุพบทจะถูกเรียกว่า 'กรรมตามหลังบุพบท' เช่น</p>\n<ul>\n<li>Preposition + Noun — There are many people in <u>the stadium</u>.</li>\n<li>Preposition + Pronoun — He came to the stadium with <u>her</u>.</li>\n<li>Preposition + Gerund — They ate hamburger before <u>watching</u> the game.</li>\n</ul>\n\n<div class=\"tbl-wrap\"><table>\n<tr><th>in, on, at</th><th>เวลา</th><th>สถานที่</th></tr>\n<tr><td><b>in</b></td><td>in 2020 / in summer / in winter / in September / in the morning (afternoon, evening) / in five days</td><td>in Japan / in Tokyo / in the office / in the library</td></tr>\n<tr><td><b>on</b></td><td>on Monday / on Wednesday / on Saturday / on 3 June / on June 3 / on the third of June</td><td>on the street / on the beach / on the second floor</td></tr>\n<tr><td><b>at</b></td><td>at 9 o'clock / at 8 a.m. / at night / at noon / at the moment</td><td>at school / at the party / at home</td></tr>\n</table></div>\n\n<p><b>คำบุพบทอื่นๆ</b></p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Preposition</th><th>แปลว่า</th><th>ตัวอย่าง</th></tr>\n<tr><td>about</td><td>เกี่ยวกับ</td><td>This article is about the economic crisis management.</td></tr>\n<tr><td>according to</td><td>ตามที่</td><td>According to the survey, we need to develop a new item.</td></tr>\n<tr><td>along</td><td>ตามแนว</td><td>If you walk along the street, you will find the post office.</td></tr>\n<tr><td>across</td><td>ข้าม</td><td>A pedestrian is walking across the street.</td></tr>\n<tr><td>behind</td><td>ข้างหลัง</td><td>There is a little park behind that building.</td></tr>\n<tr><td>beside / by</td><td>ข้างๆ</td><td>I'm standing beside/by the tree.</td></tr>\n<tr><td>between</td><td>ระหว่าง (สองสิ่ง)</td><td>The contract between the two companies will expire soon.</td></tr>\n<tr><td>between ... and</td><td>ระหว่าง...กับ</td><td>The work was shared between the manager and his assistant.</td></tr>\n<tr><td>by</td><td>ก่อน (เวลา)</td><td>This report needs to be submitted by the end of the day.</td></tr>\n<tr><td>concerning / regarding</td><td>เกี่ยวกับ</td><td>If you have any question concerning/regarding the policy, please contact me.</td></tr>\n<tr><td>despite / in spite of</td><td>ทั้งๆ ที่, แม้ว่า</td><td>Despite/In spite of his great effort, he wasn't promoted this year.</td></tr>\n<tr><td>during</td><td>ระหว่าง (ช่วงเวลา)</td><td>During the meeting, Jake briefed his team's progress to the manager.</td></tr>\n<tr><td>for</td><td>เป็นเวลา</td><td>Helen has been living in this house for 3 years.</td></tr>\n<tr><td>from ... to ...</td><td>จาก...ถึง...</td><td>On Monday I usually have a class from 9 to 11 o'clock.</td></tr>\n<tr><td>in addition to</td><td>นอกจาก</td><td>In addition to games, this device can play music video.</td></tr>\n<tr><td>in front of</td><td>ข้างหน้า</td><td>He was standing in front of the gate with his boss.</td></tr>\n<tr><td>instead of</td><td>แทน</td><td>We will have a meeting on Tuesday, instead of Monday.</td></tr>\n<tr><td>into</td><td>เข้าไปใน</td><td>When the president walked into the room, everyone became quiet.</td></tr>\n<tr><td>once</td><td>เมื่อ</td><td>Once the manager arrives, we will start the meeting.</td></tr>\n<tr><td>over</td><td>ตลอด</td><td>My English has improved over the last three months.</td></tr>\n<tr><td>prior to</td><td>ก่อน</td><td>You should read all conditions prior to submitting the form.</td></tr>\n<tr><td>regardless of</td><td>โดยไม่คำนึงถึง</td><td>Regardless of age and sex, anyone can apply for this position.</td></tr>\n<tr><td>since</td><td>ตั้งแต่</td><td>Helen has been living in this house since 2016.</td></tr>\n<tr><td>throughout</td><td>ตลอดทั้ง</td><td>The restaurant will be open throughout next Friday.</td></tr>\n<tr><td>until / till</td><td>จนถึง</td><td>The restaurant will be open until 11 p.m.</td></tr>\n<tr><td>within</td><td>ภายใน</td><td>Your order will arrive at your address within two days.</td></tr>\n</table></div>",
        "questions": [
          {
            "id": "cw10-1",
            "segments": [
              {
                "text": "The hashtag #ThaiNuma meaning #Thaiswamp has skyrocketed "
              },
              {
                "text": "at",
                "n": 1
              },
              {
                "text": " Japanese social media "
              },
              {
                "text": "in recent years",
                "n": 2
              },
              {
                "text": ", thanks "
              },
              {
                "text": "to",
                "n": 3
              },
              {
                "text": " the growing popularity "
              },
              {
                "text": "of",
                "n": 4
              },
              {
                "text": " Thailand's 'boys love' dramas."
              }
            ],
            "answer": 1,
            "explanation": "“at” ควรแก้เป็น “on” เพราะการพูดถึงแพลตฟอร์มออนไลน์/โซเชียลมีเดียใช้ preposition “on” เช่น on social media"
          },
          {
            "id": "cw10-2",
            "segments": [
              {
                "text": "The atmosphere is divided "
              },
              {
                "text": "as",
                "n": 1
              },
              {
                "text": " five different layers, based "
              },
              {
                "text": "on",
                "n": 2
              },
              {
                "text": " temperature, for example, the layer closest "
              },
              {
                "text": "to",
                "n": 3
              },
              {
                "text": " Earth's surface is the troposphere, reaching "
              },
              {
                "text": "from",
                "n": 4
              },
              {
                "text": " about seven and fifteen kilometers from the surface."
              }
            ],
            "answer": 1,
            "explanation": "“as” ควรแก้เป็น “into” เพราะ “divided into” แปลว่า แบ่งออกเป็น"
          },
          {
            "id": "cw10-3",
            "segments": [
              {
                "text": "Suvarnabhumi Airport "
              },
              {
                "text": "in",
                "n": 1
              },
              {
                "text": " Bangkok is set to soft launch its Satellite Airport Terminal 1 (SAT-1) "
              },
              {
                "text": "in",
                "n": 2
              },
              {
                "text": " September, "
              },
              {
                "text": "within",
                "n": 3
              },
              {
                "text": " a full opening planned "
              },
              {
                "text": "for",
                "n": 4
              },
              {
                "text": " early next year."
              }
            ],
            "answer": 3,
            "explanation": "“within” ควรแก้เป็น “with” เพราะต้องการสื่อว่าการเปิดใช้บางส่วนนี้เกิดขึ้น “พร้อมกับ” (with) แผนการเปิดตัวเต็มรูปแบบในปีถัดไป ไม่ใช่ความหมายเรื่องระยะเวลา (within)"
          }
        ]
      },
      {
        "title": "บทที่ 11: คำสันธาน (Conjunctions)",
        "referenceHtml": "<h4>คำสันธาน (Conjunctions)</h4>\n<p>คำสันธาน (Conjunctions) คือ คำที่ใช้เชื่อมคำ วลี หรืออนุประโยค เข้าด้วยกันเพื่อแสดงความสัมพันธ์ ไม่ว่าจะเป็นการแสดงความคล้อยตามกัน ขัดแย้งกัน เป็นเหตุเป็นผลกัน หรือแสดงทางเลือก</p>\n\n<h4>Coordinating Conjunctions</h4>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Conjunction</th><th>แปลว่า</th><th>ตัวอย่าง</th></tr>\n<tr><td>and</td><td>และ</td><td>He did his homework <u>and</u> listened to the music.</td></tr>\n<tr><td>but</td><td>แต่</td><td>The supervisor was angry, <u>but</u> he listened to his assistant patiently.</td></tr>\n<tr><td>nor</td><td>ไม่ทั้งสอง</td><td>The marketing manager <u>nor</u> his team will attend the annual party.</td></tr>\n<tr><td>or</td><td>หรือ</td><td>You can choose to go to the museum <u>or</u> the temple.</td></tr>\n<tr><td>so</td><td>ดังนั้น</td><td>It rained heavily last night, <u>so</u> it was flooding.</td></tr>\n<tr><td>yet</td><td>แต่</td><td>Mary has worked very hard since last year, <u>yet</u> she didn't get the promotion.</td></tr>\n</table></div>\n\n<h4>Correlative Conjunctions</h4>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Conjunction</th><th>แปลว่า</th><th>ตัวอย่าง</th></tr>\n<tr><td>both ... and ...</td><td>ทั้งคู่</td><td><u>Both</u> researchers <u>and</u> developers will attend the award ceremony.</td></tr>\n<tr><td>either ... or ...</td><td>หรือ</td><td>Sarah wants to buy <u>either</u> a new desktop computer <u>or</u> a laptop.</td></tr>\n<tr><td>neither ... nor ...</td><td>ไม่ทั้งสองอย่าง</td><td>I have <u>neither</u> the cash <u>nor</u> the credit card.</td></tr>\n<tr><td>not only ... but (also) ...</td><td>ไม่เพียงแต่...เท่านั้น...แต่ก็ยัง……(ด้วย)</td><td>He <u>not only</u> has a Master's degree in Finance, <u>but</u> <u>also</u> leads many research projects in stock market.</td></tr>\n<tr><td>as well as</td><td>และ</td><td>The dishes at the restaurant are delicious <u>as well as</u> affordable.</td></tr>\n<tr><td>whether … or …</td><td>ไม่ว่าจะ...หรือ...ก็ตาม</td><td><u>Whether</u> you are selling <u>or</u> buying any item on the internet, please make sure that you have read all website rules and regulations.</td></tr>\n</table></div>\n\n<h4>การผันกริยา</h4>\n<div class=\"tbl-wrap\"><table>\n<tr><th>ประธาน</th><th>กริยา</th></tr>\n<tr><td>Both A and B</td><td>Verb พหูพจน์</td></tr>\n<tr><td>Either A or B<br>Neither A nor B<br>Not only A but (also) B<br>B as well as A</td><td>Verb ผันตาม B</td></tr>\n</table></div>\n<p>เช่น</p>\n<p>Both <u>the lobby and the main hall</u> <u>require</u> extensive renovations.<br>\nEither you or <u>he</u> <u>is</u> responsible for the accident.<br>\n<u>Miranda</u> as well as her students <u>plans</u> to make a speech in front of the audience.</p>\n\n<h4>Other Conjunctions</h4>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Conjunction</th><th>แปลว่า</th></tr>\n<tr><td>however / nevertheless (+ ประโยค)</td><td>อย่างไรก็ตาม</td></tr>\n<tr><td>in addition / furthermore / moreover (+ ประโยค)</td><td>ยิ่งไปกว่านั้น</td></tr>\n<tr><td>besides / in addition to (+ คำนาม)</td><td>นอกเหนือจาก</td></tr>\n<tr><td>while (+ ประโยค)</td><td>ในขณะที่</td></tr>\n<tr><td>according to / in accordance with (+ คำนาม)</td><td>ตามที่</td></tr>\n<tr><td>aside from (+ คำนาม)</td><td>นอกจาก</td></tr>\n<tr><td>in an effort to (+ กริยาช่อง 1)</td><td>ในความพยายามที่จะ</td></tr>\n<tr><td>as a result of (+ คำนาม)</td><td>ด้วยเหตุที่</td></tr>\n<tr><td>regarding / concerning (+ คำนาม)</td><td>เกี่ยวกับ อ้างถึง</td></tr>\n<tr><td>on behalf of (+ คำนาม)</td><td>ในนามของ</td></tr>\n</table></div>\n<p>The marketing team plans to launch a new promotion soon; <u>however</u>, they have to wait for their supervisor's approval.<br>\nทีมการตลาดวางแผนที่จะปล่อยโปรโมชันใหม่เร็วๆ นี้ อย่างไรก็ตามพวกเขาก็ต้องรอการอนุมัติจากเจ้านายของพวกเขาก่อน</p>\n<p>I won't have my report done for the conference on Monday; <u>moreover</u>, I won't even be in on Monday.<br>\nฉันจะไม่มีรายงานเสร็จทันสำหรับงานประชุมวันจันทร์นี้ ยิ่งไปกว่านั้นฉันเองก็จะไม่อยู่วันจันทร์ด้วย</p>\n<p><u>Besides</u> providing the clear explanation, this book also offers many good exercises.<br>\nนอกเหนือจากมีคำอธิบายที่ชัดเจนแล้ว หนังสือเล่มนี้ยังมีแบบฝึกหัดดีๆ ในเล่มอีกด้วย</p>\n<p><u>While</u> they were having dinner, the telephone rang.<br>\nในขณะที่พวกเขากำลังกินมื้อเย็น โทรศัพท์ก็ดังขึ้น</p>\n<p><u>According to</u> our database, Mrs. Julia has reserved our hotel for 6 times.<br>\nตามที่ฐานข้อมูลของเรา คุณจูเลียได้จองโรงแรมของเรามา 6 ครั้งแล้ว</p>\n<p><u>Aside from</u> pollution, global warming is one of scientists' biggest concerns.<br>\nนอกจากมลภาวะแล้ว ปัญหาโลกร้อนเป็นหนึ่งในความกังวลที่ยิ่งใหญ่ที่สุดของเหล่านักวิทยาศาสตร์</p>\n<p><u>In an effort to</u> reduce inflation, the government increased interest rates.<br>\nในความพยายามที่จะลดภาวะเงินเฟ้อ (ลอยตัว) รัฐบาลจึงเพิ่มอัตราดอกเบี้ย<br>\n* ภาวะเงินเฟ้อ (ลอยตัว) คือ สภาพเศรษฐกิจที่ข้าวของเครื่องใช้ สินค้าอุปโภคบริโภคต่างๆ มีราคาเพิ่มสูงขึ้นเรื่อยๆ</p>\n<p><u>As a result of</u> the difficulty of the exam, most students didn't pass the test.<br>\nด้วยเหตุที่ข้อสอบยาก นักเรียนส่วนมากจึงสอบไม่ผ่าน</p>\n<p><u>Regarding</u> the advertisement on June 24, I would like to apply for the position of marketing assistant.<br>\nเกี่ยวกับโฆษณาเมื่อวันที่ 24 มิถุนายน ผมอยากสมัครงานในตำแหน่งผู้ช่วยการตลาด</p>\n<p><u>On behalf of</u> the company, the manager conveyed a message of condolence.<br>\nในนามของบริษัท ผู้จัดการได้ส่งมอบคำแสดงความเสียใจ</p>\n\n<h4>Conjunctions vs Prepositions</h4>\n<p>มีคำสันธาน (Conjunctions) และคำบุพบท (Prepositions) อยู่กลุ่มหนึ่งที่มีความหมายเหมือนกัน แต่ใช้หลักไวยากรณ์ต่างกัน คำกลุ่มนี้จึงต้องพิจารณาทั้งความหมายและหลักไวยากรณ์ควบคู่กัน</p>\n<ul>\n<li>ประโยคสอดคล้อง (ให้ดูที่ความหมายของประโยค เช่น เพราะว่าฝนตก เขาจึงอยู่บ้าน)\n  <br>Conjunctions → because, as, since (เพราะว่า เนื่องจาก)\n  <br>Prepositions → because of, due to, on account of, owing to (เพราะว่า เนื่องจาก)</li>\n<li>ประโยคขัดแย้ง (ให้ดูที่ความหมายของประโยค เช่น แม้ว่าฝนตก แต่เขาก็ออกไปข้างนอก)\n  <br>Conjunctions → although, even though, though (แม้ว่า ทั้งๆ ที่)\n  <br>Prepositions → in spite of, despite (แม้ว่า ทั้งๆ ที่)</li>\n</ul>\n<div class=\"tbl-wrap\"><table>\n<tr><th>ประโยคสอดคล้อง (เพราะว่า)</th><th>ประโยคขัดแย้ง (แม้ว่า)</th></tr>\n<tr><td>Conjunctions - เพราะว่า<br>because, as, since + ประโยค (ประธาน + กริยา)<br>Because it rained, he stayed at home.</td>\n<td>Conjunctions - แม้ว่า<br>although, even though, though + ประโยค (ประธาน + กริยา)<br>Although it rained, he went out.</td></tr>\n<tr><td>Prepositions - เพราะว่า เนื่องจาก<br>because of, due to, on account of, owing to + คำนาม<br>Due to the rain, he stayed at home.</td>\n<td>Prepositions - แม้ว่า ทั้งๆ ที่<br>in spite of, despite + คำนาม<br>In spite of the rain, he went out.</td></tr>\n</table></div>\n<p>2 คำนี้ มีความหมายคล้ายกัน แต่ใช้หลักไวยากรณ์ต่างกัน</p>\n<div class=\"tbl-wrap\"><table>\n<tr><td>Conjunctions - ในขณะที่<br>while + ประโยค (ประธาน + กริยา)<br>While we were talking, she walked out.</td>\n<td>Prepositions - ในระหว่างที่<br>during + คำนาม<br>During the talk, she walked out.</td></tr>\n</table></div>",
        "questions": [
          {
            "id": "cw11-1",
            "segments": [
              {
                "text": "Romance scams occur "
              },
              {
                "text": "when",
                "n": 1
              },
              {
                "text": " a criminal adopts a fake online identity to gain a victim's affection "
              },
              {
                "text": "but",
                "n": 2
              },
              {
                "text": " the scammer "
              },
              {
                "text": "then",
                "n": 3
              },
              {
                "text": " uses the illusion of a romantic "
              },
              {
                "text": "or",
                "n": 4
              },
              {
                "text": " close relationship to manipulate and steal from the victim."
              }
            ],
            "answer": 2,
            "explanation": "“but” ควรแก้เป็น “and” เพราะใจความประโยคเป็นไปในลักษณะสอดคล้องกัน (นักต้มตุ๋นสร้างตัวตนปลอมเพื่อให้ได้รับความรักจากเหยื่อ และหลังจากนั้นใช้ความสัมพันธ์ปลอมๆ เพื่อขโมยของจากเหยื่อ) ไม่ใช่ความขัดแย้งกัน"
          },
          {
            "id": "cw11-2",
            "segments": [
              {
                "text": "Despite of",
                "n": 1
              },
              {
                "text": " restrictions on legal migration "
              },
              {
                "text": "and",
                "n": 2
              },
              {
                "text": " international laws, migration flows have increased internationally "
              },
              {
                "text": "because",
                "n": 3
              },
              {
                "text": " many illegal foreigners try to escape from extreme poverty in their own countries "
              },
              {
                "text": "in an effort to",
                "n": 4
              },
              {
                "text": " find a better life."
              }
            ],
            "answer": 1,
            "explanation": "“Despite of” ควรแก้เป็น “Despite” เพราะ despite เป็น preposition ที่ไม่มี of ตามหลัง (ต่างจาก in spite of ที่มี of)"
          },
          {
            "id": "cw11-3",
            "segments": [
              {
                "text": "In accordance with",
                "n": 1
              },
              {
                "text": " data from the GAC, China exported "
              },
              {
                "text": "zero",
                "n": 2
              },
              {
                "text": " gallium and germanium related items in August, "
              },
              {
                "text": "during",
                "n": 3
              },
              {
                "text": " exports in July surged "
              },
              {
                "text": "due to",
                "n": 4
              },
              {
                "text": " the increasing demands in South America."
              }
            ],
            "answer": 3,
            "explanation": "“during” ควรแก้เป็น “while” เพราะ “exports in July surged” เป็นประโยค (มีประธาน exports และกริยา surged) ซึ่ง during ต้องตามด้วยคำนาม/วลีเท่านั้น ไม่ใช่ประโยค จึงต้องใช้ while แทน"
          }
        ]
      },
      {
        "title": "บทที่ 12: การเปรียบเทียบ (Comparison)",
        "referenceHtml": "<h4>การเปรียบเทียบ (Comparison)</h4><p>ประโยคเปรียบเทียบในภาษาอังกฤษมี 3 รูปแบบ</p><h4>1. การเปรียบเทียบในสิ่งที่เท่ากัน</h4><p>ใช้ as ... as ซึ่งสามารถเติม Adjective หรือ Adverb ลงไปได้</p><ul><li>กรณีที่ใช้ Adjective: This exam is not as difficult as the one in the last semester. (ใช้ difficult เพราะเป็น Adjective ซึ่งตามหลัง is)</li><li>กรณีที่ใช้ Adverb: He works as effectively as you. (ใช้ effectively เพราะเป็น Adverb ซึ่งใช้ขยายคำว่า works (Verb) แปลว่า ทำงานอย่างมีประสิทธิภาพ)</li></ul><h4>2. การเปรียบเทียบขั้นกว่า</h4><p>ใช้ more หรือเติม -er บางคำเปลี่ยนรูปไปเลย และมักจะมี than ตามหลังด้วย ซึ่งใช้เปรียบเทียบกับของ 2 สิ่ง หรือ 2 กลุ่ม เช่น</p><ul><li>The weather today is warmer than the weather yesterday. (warm เป็น Adjective เติม -er เป็นขั้นกว่า วางหลัง Verb to be)</li><li>She is more intelligent than her sister. (intelligent เป็น Adjective ใส่ more เพื่อให้เป็นขั้นกว่า วางหลัง Verb to be)</li><li>These books are more expensive than those sold online. (expensive เป็น Adjective ใส่ more เพื่อให้เป็นขั้นกว่า วางหลัง Verb to be)</li><li>The teacher spoke more slowly to help us to understand. (slowly เป็น Adverb ใส่ more เพื่อให้เป็นขั้นกว่า ใช้ขยายคำกริยา คือ spoke)</li></ul><h4>3. การเปรียบเทียบขั้นสูงสุด</h4><p>เป็นการเปรียบเทียบที่มีมากกว่า 2 คน หรือ 2 สิ่งขึ้นไป โดยใช้ the most หรือเติม -est บางคำเปลี่ยนรูปไปเลย เช่น</p><ul><li>Jessy is the tallest student in her class. (the tallest เป็น Adjective ขั้นสูงสุด วางหลัง Verb to be)</li><li>He is the best performer among others in the team. (the best เปลี่ยนรูปมาจาก good เป็น Adjective ขั้นสูงสุด ใช้วางหลัง Verb to be)</li><li>Cruel Summer is the most impressive song by Taylor Swift. (the most impressive เป็น Adjective ขั้นสูงสุด ใช้ขยายคำนามคือ song)</li></ul><h4>ตัวอย่างคำศัพท์ Adjective ขั้นกว่า และขั้นสูงสุด</h4><div class=\"tbl-wrap\"><table><tr><th>Adjective</th><th>ขั้นกว่า</th><th>ขั้นสูงสุด</th></tr><tr><td>hot</td><td>hotter</td><td>the hottest</td></tr><tr><td>large</td><td>larger</td><td>the largest</td></tr><tr><td>nice</td><td>nicer</td><td>the nicest</td></tr><tr><td>pretty</td><td>prettier</td><td>the prettiest</td></tr><tr><td>attractive</td><td>more attractive</td><td>the most attractive</td></tr><tr><td>expensive</td><td>more expensive</td><td>the most expensive</td></tr><tr><td>famous</td><td>more famous</td><td>the most famous</td></tr><tr><td>good</td><td>better</td><td>the best</td></tr><tr><td>bad</td><td>worse</td><td>the worst</td></tr></table></div><h4>ตัวอย่างคำศัพท์ Adverb ขั้นกว่า และขั้นสูงสุด</h4><div class=\"tbl-wrap\"><table><tr><th>Adverb</th><th>ขั้นกว่า</th><th>ขั้นสูงสุด</th></tr><tr><td>hard</td><td>harder</td><td>hardest</td></tr><tr><td>fast</td><td>faster</td><td>fastest</td></tr><tr><td>late</td><td>later</td><td>latest</td></tr><tr><td>impressively</td><td>more impressively</td><td>most impressively</td></tr><tr><td>quietly</td><td>more quietly</td><td>most quietly</td></tr><tr><td>slowly</td><td>more slowly</td><td>most slowly</td></tr><tr><td>seriously</td><td>more seriously</td><td>most seriously</td></tr><tr><td>well</td><td>better</td><td>best</td></tr><tr><td>badly</td><td>worse</td><td>worst</td></tr><tr><td>little</td><td>less</td><td>least</td></tr></table></div>",
        "questions": [
          {
            "id": "cw12-1",
            "segments": [
              {
                "text": "China is the "
              },
              {
                "text": "largest",
                "n": 1
              },
              {
                "text": " producer of gallium and germanium whose outputs accounts for "
              },
              {
                "text": "more than",
                "n": 2
              },
              {
                "text": " 90 percent of the global total which are "
              },
              {
                "text": "more",
                "n": 3
              },
              {
                "text": " larger than those in "
              },
              {
                "text": "a",
                "n": 4
              },
              {
                "text": " decade ago, official data showed."
              }
            ],
            "answer": 3,
            "explanation": "more ไม่ถูกต้อง แก้ไขโดยตัดออกเลย เพราะขั้นกว่าของ large คือ larger อยู่แล้ว จึงไม่จำเป็นต้องมี more ซ้ำอีก (largest ถูกต้องเพราะมี the นำหน้าบ่งบอกขั้นสูงสุด, more than ถูกต้องเพราะเมื่อใช้ติดกันสามารถนำหน้าตัวเลขเพื่อบอกปริมาณได้, a decade ถูกต้องเพราะ a นำหน้า decade ที่ไม่เติม s หมายถึงระยะเวลา 1 ทศวรรษ)"
          },
          {
            "id": "cw12-2",
            "segments": [
              {
                "text": "Romance scammers often say they are in the construction industry overseas that makes it "
              },
              {
                "text": "easier",
                "n": 1
              },
              {
                "text": " "
              },
              {
                "text": "than",
                "n": 2
              },
              {
                "text": " avoid meeting in person -- and "
              },
              {
                "text": "more",
                "n": 3
              },
              {
                "text": " plausible when they ask their victims for help, this is one of the tricks scammers use to get more "
              },
              {
                "text": "money",
                "n": 4
              },
              {
                "text": " from you."
              }
            ],
            "answer": 2,
            "explanation": "than ไม่ถูกต้อง แก้ไขเป็น to เพราะ avoid เป็น V.1 ที่ควรตามหลัง to ('makes it easier to avoid meeting in person' แปลว่า ทำให้ง่ายขึ้นที่จะหลีกเลี่ยงการนัดเจอตัวจริง) (easier ถูกต้องเพราะมาจากโครงสร้าง make something Adjective, more ถูกต้องเพราะใช้กับ plausible (Adjective) ได้ แปลว่าน่าเชื่อถือมากกว่า, money ถูกต้องเพราะ more ใช้กับคำนามได้)"
          },
          {
            "id": "cw12-3",
            "segments": [
              {
                "text": "In the "
              },
              {
                "text": "worse",
                "n": 1
              },
              {
                "text": " cases, Schizophrenia can "
              },
              {
                "text": "be",
                "n": 2
              },
              {
                "text": " a devastating diagnosis for sufferers and their family members because "
              },
              {
                "text": "the",
                "n": 3
              },
              {
                "text": " disease robs people of their identity "
              },
              {
                "text": "in",
                "n": 4
              },
              {
                "text": " cruel, disruptive ways."
              }
            ],
            "answer": 1,
            "explanation": "worse ไม่ถูกต้อง แก้ไขเป็น worst เพราะมี the นำหน้า แสดงว่ากำลังเปรียบเทียบขั้นสูงสุด แต่ worse เป็นขั้นกว่า จึงต้องแก้เป็น worst (be ถูกต้องเพราะ Verb to be หลัง Modal Verb ต้องอยู่ในรูป Infinitive, the ถูกต้องเพราะ the disease หมายถึงโรคจิตเภทที่กล่าวมาแล้วข้างต้น, in ถูกต้องเพราะใช้คู่กับความหมาย 'ในวิถีทางที่โหดร้ายและยุ่งเหยิง')"
          }
        ]
      },
      {
        "title": "บทที่ 13: ประโยคเงื่อนไข (If-Clause)",
        "referenceHtml": "<h4>ประโยคเงื่อนไข (If-Clause)</h4><p>ในภาษาอังกฤษมีประโยคสมมติหรือเงื่อนไขเหมือนคำว่า “ถ้า” ในภาษาไทยเช่นกัน แต่มีความแตกต่าง คือ ประโยคเงื่อนไขในภาษาอังกฤษมีหลายแบบ ซึ่งแต่ละแบบก็ใช้ในสถานการณ์ที่ต่างกัน โดยหลักๆ มี 4 แบบ</p><h4>ชนิดของประโยคเงื่อนไข</h4><div class=\"tbl-wrap\"><table><tr><th>ชนิด</th><th>โครงสร้าง</th><th>ตัวอย่าง</th></tr><tr><td>TYPE 0 - Zero</td><td>If + subject + V.1 (s/es), subject + V.1 (s/es)</td><td>If water reaches 100 degrees, it boils.</td></tr><tr><td>TYPE 1 - Future Possible</td><td>If + subject + V.1 (s/es), subject + will + V.1</td><td>If I study hard, I will pass the test.</td></tr><tr><td>TYPE 2 - Present Unreal</td><td>If + subject + V.2, subject + would + V.1</td><td>If I were a bird, I would sing all day.</td></tr><tr><td>TYPE 3 - Past Unreal</td><td>If + subject + had + V.3, subject + would + have + V.3</td><td>If I had been in Japan longer, I would have visited Osaka.</td></tr></table></div><p><b>TYPE 0</b> ถ้าน้ำมีอุณหภูมิถึง 100 องศา น้ำก็เดือด เป็นเงื่อนไขที่มีผลลัพธ์ทางเดียว มักใช้อธิบายปรากฏการณ์ธรรมชาติ</p><p><b>TYPE 1</b> ถ้าฉันเรียนหนัก ฉันจะสอบผ่าน เป็นเงื่อนไขที่มีผลลัพธ์เกิดขึ้นได้หลายทาง ผลลัพธ์จะเกิดขึ้นในอนาคต</p><p class=\"note\">จุดสังเกต Type 0 กับ Type 1 มีความคล้ายคลึงกัน ต่างตรงที่ผลลัพธ์ Type 0 เป็นจริงเสมอ จึงใช้ Present Simple ในขณะที่ Type 1 ผลลัพธ์จะเกิดขึ้นในอนาคต จึงใช้ Future Simple (will + V.1)</p><p><b>TYPE 2</b> ถ้าฉันเป็นนก ฉันจะร้องเพลงทั้งวัน เป็นเงื่อนไขที่เป็นไปไม่ได้เลยในปัจจุบัน จุดสังเกตที่น่าสนใจคือ ถ้าสมมติว่า “เป็น” อะไรก็ตามต้องใช้ were เสมอ เช่น ถ้าฉันเป็นผู้จัดการ (If I were a manager, ...) แต่ถ้าเป็นคำกริยาอื่นๆ ก็ใช้คำกริยาช่อง 2 ได้ตามปกติ เช่น ถ้าฉันบินไปดวงจันทร์ได้ (If I flew to the moon, ...)</p><p><b>TYPE 3</b> ถ้าฉันอยู่นานกว่านี้ ฉันคงได้ไปเที่ยวโอซากะแล้ว เป็นการสมมติในสิ่งที่เลยผ่านไปแล้วในแง่ของกาลเวลา ไม่สามารถย้อนเวลากลับไปเปลี่ยนแปลงได้ ความรู้สึกเหมือนว่าผู้พูดเสียดายในสิ่งที่ผ่านเลยไปในอดีต</p><h4>จุดสังเกตที่น่าสนใจ</h4><ol><li>เหตุผลที่เรียงลำดับ If-Clause ให้เป็น TYPE 0, 1, 2, และ 3 ก็เพื่อให้ง่ายต่อการจำ กล่าวคือ<br>TYPE 0 ใช้คำกริยาช่องที่ 1 &rarr; If + subject + V.1, subject + V.1<br>TYPE 1 ใช้คำกริยาช่องที่ 1 &rarr; If + subject + V.1, subject + will + V.1<br>TYPE 2 ใช้คำกริยาช่องที่ 2 &rarr; If + subject + V.2, subject + would + V.1<br>TYPE 3 ใช้คำกริยาช่องที่ 3 &rarr; If + subject + had + V.3, subject + would have + V.3</li><li>ประโยค If-Clause สามารถสลับส่วนเงื่อนไขและผลลัพธ์ได้ โดยที่โครงสร้างประโยคภายในต้องเหมือนเดิม ห้ามเปลี่ยนแปลง เช่น<br>If the firm offers the product discount to customers, the sales volume will increase.<br>= The sales volume will increase if the firm offers the product discount to customers.</li><li>บางครั้งข้อสอบใช้คำว่า unless (= ถ้าไม่) ก็ให้ถือว่าเป็นรูปปฏิเสธของ if แค่นั้น ซึ่งรูปแบบก็ยังคงเดิมตาม If-Clause 4 แบบ</li><li>ส่วนมากข้อสอบไม่ค่อยสนใจความหมายของ If-Clause แต่ข้อสอบจะสนใจว่าผู้สอบเลือกคำกริยาได้ตรงตามคู่ของ If-Clause หรือไม่</li><li>การลดรูปประโยค If-Clause คือการตัด If ออก แล้วใช้ Should, Were, Had มาวางแทนที่ If ซึ่งมีรูปแบบดังนี้<br>TYPE 0: Should you have any question, please let me know.<br>TYPE 1: Should we go by train, it will be faster.<br>TYPE 2: Were I a bird, I would sing all day.<br>TYPE 3: Had I worked hard when I was young, I might have succeeded.</li></ol>",
        "questions": [
          {
            "id": "cw13-1",
            "segments": [
              {
                "text": "If",
                "n": 1
              },
              {
                "text": " Alan "
              },
              {
                "text": "had",
                "n": 2
              },
              {
                "text": " enough vacation days left this year, he will "
              },
              {
                "text": "take",
                "n": 3
              },
              {
                "text": " two weeks off to USA and "
              },
              {
                "text": "visit",
                "n": 4
              },
              {
                "text": " his mother in Japan as well."
              }
            ],
            "answer": 2,
            "explanation": "had ไม่ถูกต้อง แก้ไขเป็น has เพราะเป็น If-Clause แบบที่ 1 (สังเกตจาก will ในประโยคหลัง) ประโยคหลัง If จึงควรอยู่ในรูป Present Tense แต่ had เป็นกริยาในรูป Past Tense (If ถูกต้องเพราะเป็นประโยคเงื่อนไข, take ถูกต้องเพราะ If-Clause แบบที่ 1 ประโยคผลลัพธ์อยู่ในรูป will + V.1 ไม่ผัน, visit ถูกต้องเพราะละคำว่า will ได้หลัง and เนื่องจากประธานตัวเดียวกัน)"
          },
          {
            "id": "cw13-2",
            "segments": [
              {
                "text": "The show organizers "
              },
              {
                "text": "will have",
                "n": 1
              },
              {
                "text": " to cancel the musical performance "
              },
              {
                "text": "unless",
                "n": 2
              },
              {
                "text": " they "
              },
              {
                "text": "sold",
                "n": 3
              },
              {
                "text": " more show tickets "
              },
              {
                "text": "at",
                "n": 4
              },
              {
                "text": " the last minute."
              }
            ],
            "answer": 3,
            "explanation": "sold ไม่ถูกต้อง แก้ไขเป็น sell เพราะประโยคแรกอยู่ในรูป Future Tense แสดงว่าเป็น If-Clause แบบที่ 1 (unless ใช้เหมือน if แต่ให้ความหมายเชิงปฏิเสธ) กริยาในประโยคหลัง unless จึงควรอยู่ในรูป Present Tense (will have ถูกต้องเพราะหลัง will ต้องตามด้วย Infinitive, unless ถูกต้องเพราะหมายถึง ถ้าพวกเขาไม่สามารถขายบัตรได้มากกว่านี้ในนาทีสุดท้าย, at the last minute ถูกต้องเพราะเป็นสำนวนแปลว่า ในช่วงสุดท้าย)"
          },
          {
            "id": "cw13-3",
            "segments": [
              {
                "text": "Were",
                "n": 1
              },
              {
                "text": " the employees "
              },
              {
                "text": "been informed",
                "n": 2
              },
              {
                "text": " of the management team's decision, they "
              },
              {
                "text": "might",
                "n": 3
              },
              {
                "text": " have "
              },
              {
                "text": "understood",
                "n": 4
              },
              {
                "text": " of the situation and the direction of the company clearly."
              }
            ],
            "answer": 1,
            "explanation": "Were ไม่ถูกต้อง แก้ไขเป็น Had เพราะเป็น If-Clause แบบที่ 3 (ลดรูป) สังเกตจาก might have understood ในอีกประโยคหนึ่ง ซึ่งมีโครงสร้างเดียวกับ would + have + V.3 (been informed ถูกต้องเพราะเป็น Passive, might ถูกต้องเพราะเป็น If-Clause แบบที่ 3 ลดรูป, understood ถูกต้องเพราะเป็น If-Clause แบบที่ 3 ลดรูปเช่นกัน)"
          }
        ]
      },
      {
        "title": "บทที่ 14: คำกริยาที่ใช้เป็นคำคุณศัพท์ (Participle)",
        "referenceHtml": "<h4>คำกริยาที่ใช้เป็นคำคุณศัพท์ (Participle)</h4><h4>Present Participle</h4><p>Present Participle คือ คำกริยาที่อยู่ในรูป V-ing โดยทำหน้าที่ดังนี้</p><ul><li>ทำหน้าที่เป็นคำคุณศัพท์ (Adjective) ขยายคำนาม (Noun) เช่น The crying girl has dropped her ice cream. (crying ในที่นี้ขยายคำว่า girl เพื่อบอกว่า เด็กหญิงคนนี้กำลังร้องไห้)</li><li>ทำหน้าที่เป็น Participle Phrase ขยายคำนามในประโยคหลัก เช่น Starting in the new year, the new policy bans plastic bags in the city. (Starting in the new year ขยายประโยคหลักเพื่อบอกว่า นโยบายแบนถุงพลาสติกนี้จะเริ่มตอนปีใหม่)</li></ul><h4>Present Participle Phrase</h4><p>การใช้ V-ing และกลุ่มคำเพื่อทำหน้าที่ขยายประโยคหลัก (ความหมายของประโยคจะเป็น Active Voice) โดยในประโยคจะแบ่งเป็น 2 ส่วน คือส่วนที่เป็นใจความหลัก และส่วนขยายที่เป็น Present Participle Clause</p><p><b>ส่วนขยายอยู่ท่อนหน้า</b><br>Arriving at the hotel, Patty was surprised to see a lot of Japanese tourists.<br>ประธานในประโยคนี้มีเพียงคนเดียวคือ Patty และมีกริยาหลักคือ was (ใจความหลักทั้งหมดอยู่หลังเครื่องหมาย comma) ด้วยความที่ Patty เป็นคนเดินทางมาถึงโรงแรมเอง ดังนั้น arriving จึงอยู่ในรูป V-ing</p><p><b>ส่วนขยายอยู่หลังประธาน (ใจกลางประโยค)</b><br>The boy playing with a cat is my brother.<br>ประธานในประโยคนี้มีเพียงคำเดียว คือ The boy ใจความขยายคือ playing with a cat ส่วนใจความหลักจริงๆ มีเพียง The boy is my brother.</p><p><b>ส่วนขยายอยู่หลังสุด</b><br>The University of York created a new campus in 2003, introducing new subjects such as law and dentistry.<br>ใจความหลักของประโยคนี้คือประโยคแรก โดยมี The University of York เป็นประธาน และมี created เป็นกริยาหลัก ส่วนขยายจะอยู่หลังเครื่องหมาย comma เป็นต้นไป ด้วยความที่มหาวิทยาลัยเป็นคนแนะนำวิชาใหม่เอง กริยา introducing จึงอยู่ในรูป V-ing</p><h4>Past Participle</h4><p>Past Participle คือ คำกริยาที่อยู่ในรูป V.3 โดยทำหน้าที่ดังนี้</p><ul><li>ทำหน้าที่เป็นคำคุณศัพท์ (Adjective) ขยายคำนาม (Noun) เช่น I won't buy a stolen car. (stolen ในที่นี้ขยายคำว่า car เพื่อบอกว่า รถคันนี้ถูกขโมยมา)</li><li>ทำหน้าที่เป็น Participle Phrase ขยายคำนามในประโยคหลัก เช่น Kim came here to visit the boy injured in the car accident. (injured ในที่นี้ขยายคำว่า the boy เพื่อบอกว่าเด็กคนนี้ได้รับบาดเจ็บในอุบัติเหตุรถยนต์)</li></ul><h4>Past Participle Phrase</h4><p>การใช้ V.3 และกลุ่มคำทำหน้าที่ขยายคำนามที่อยู่ในประโยคหลัก (ความหมายของประโยคจะเป็น Passive Voice) โดยในประโยคจะแบ่งเป็น 2 ส่วน ส่วนที่เป็นใจความหลัก และส่วนขยายที่เป็น Past Participle Phrase</p><p><b>ส่วนขยายอยู่ท่อนหน้า</b><br>Destroyed by a fire, the shopping mall was never rebuilt.<br>ประธานในประโยคนี้มีเพียงสิ่งเดียวคือ The shopping mall มีกริยาหลักคือ was never rebuilt ถ้าแปลความหมายประโยคนี้ “ห้างสรรพสินค้าที่ถูกทำลายโดยเปลวไฟ ไม่ได้รับการบูรณะอีกเลย” ความหมายของ destroyed เป็นแบบ Passive Voice จึงต้องอยู่ในรูป V.3</p><p><b>ส่วนขยายอยู่ท่อนกลางประโยค</b><br>The smartphone ordered last night from SHOPPA will arrive tomorrow.<br>ในประโยคนี้มีประธานคือ The smartphone โดยมีกริยาหลักคือ will arrive ส่วน ordered ทำหน้าที่ขยาย The smartphone แต่ด้วยความที่ประธานคือ โทรศัพท์สมาร์ตโฟนถูกสั่ง ดังนั้นกริยา order จึงเป็นแบบ Past Participle ซึ่งอยู่ในรูป V.3</p><p><b>ส่วนขยายอยู่ท่อนหลังสุด</b><br>Carol didn't like the thriller movie released last night. (ใจความหลัก: Carol didn't like the thriller movie | ส่วนขยาย: released last night)<br>ใจความหลักของประโยคนี้ Carol เป็นประธาน และมี didn't like เป็นกริยาหลัก ส่วนขยายเริ่มตั้งแต่คำว่า released เป็นต้นไป ด้วยความที่ภาพยนตร์ไม่สามารถทำกริยา release เองได้ จึงต้องอยู่ในโครงสร้าง Passive Voice ในรูป V.3</p><p class=\"note\">หมายเหตุ: Participle ไม่ขึ้นกับ Tense ไม่ว่าประโยคนั้นจะเป็น Tense ใดก็ตาม อย่าได้สนใจ ให้เราหาคำนามที่ Participle นั้นกำลังขยายให้เจอ แล้วใช้หลักการ Active Voice &amp; Passive Voice ตามที่กล่าวมา</p>",
        "questions": [
          {
            "id": "cw14-1",
            "segments": [
              {
                "text": "Extremely",
                "n": 1
              },
              {
                "text": " high temperatures pose critical "
              },
              {
                "text": "challenges",
                "n": 2
              },
              {
                "text": " to children in Thailand, "
              },
              {
                "text": "limited",
                "n": 3
              },
              {
                "text": " outdoor activities and "
              },
              {
                "text": "disrupting",
                "n": 4
              },
              {
                "text": " education."
              }
            ],
            "answer": 3,
            "explanation": "limited ไม่ถูกต้อง แก้ไขเป็น limiting เพราะ Participle อยู่หลังเครื่องหมาย comma ประธานของประโยคแรกคือ Extremely high temperatures ซึ่งเป็นผู้กระทำกริยานี้เอง (อากาศร้อนจัดจำกัดการทำกิจกรรมกลางแจ้งเอง) ส่วนขยายจึงควรอยู่ในรูป Present Participle (Extremely ถูกต้องเพราะเป็น Adverb ขยาย high, challenges ถูกต้องเพราะเติม s ได้เนื่องจากมีความท้าทายหลายอย่าง, disrupting ถูกต้องเพราะเป็น Present Participle ขยายประโยคแรกเช่นกัน)"
          },
          {
            "id": "cw14-2",
            "segments": [
              {
                "text": "Voting",
                "n": 1
              },
              {
                "text": " as the world's best island, Santorini is recommended "
              },
              {
                "text": "in",
                "n": 2
              },
              {
                "text": " more articles than any "
              },
              {
                "text": "other",
                "n": 3
              },
              {
                "text": " destinations and doesn't "
              },
              {
                "text": "suffer",
                "n": 4
              },
              {
                "text": " from light pollution like major cities."
              }
            ],
            "answer": 1,
            "explanation": "Voting ไม่ถูกต้อง แก้ไขเป็น Voted เพราะส่วนขยายอยู่หน้าสุดของประโยค และประธาน (Santorini) อยู่หลัง comma โดยเป็นผู้ถูกกระทำ (ได้รับการโหวตว่าเป็นเกาะที่ดีที่สุดในโลก) กริยาจึงควรอยู่ในรูป V.3 ตามหลัก Past Participle (in ถูกต้องเพราะ in ตามด้วย articles, other ถูกต้องเพราะ any other + คำนามพหูพจน์ destinations, doesn't ถูกต้องเพราะผันตามประธานเอกพจน์ Santorini)"
          }
        ]
      },
      {
        "title": "บทที่ 15: ประเด็นที่ออกข้อสอบบ่อยๆ",
        "referenceHtml": "<h4>ประเด็นที่ออกข้อสอบบ่อยๆ</h4><p>สำหรับบทนี้เป็นการรวบยอดประเด็นปลีกย่อยต่างๆ ที่นำมาออกข้อสอบเป็นประจำ หากจดจำได้ก็จะช่วยให้ทำข้อสอบได้เร็วขึ้น และเก็บคะแนนในส่วนนี้เพิ่มขึ้นได้อย่างมาก</p><h4>One of the + คำนามพหูพจน์</h4><p>การใช้ One of the หมายถึง หนึ่งใน (สิ่งเหล่านั้น) สิ่งเหล่านั้นย่อมมีมากกว่าหนึ่ง ดังนั้นคำนามที่ตามมาต้องอยู่ในรูปคำนามพหูพจน์ เช่น</p><ul><li>Killer whales are one of the most fascinating marine mammals in the world. (วาฬเพชฌฆาตเป็นหนึ่งในสัตว์เลี้ยงลูกด้วยนมที่อาศัยอยู่ในน้ำที่น่าหลงใหลที่สุดในโลก แสดงว่าสัตว์เลี้ยงลูกด้วยนมบนโลกมีหลายชนิด คำว่า mammals จึงเติม s)</li><li>One of the students in our class will be selected to visit United Nations headquarters. (นักเรียนมีหลายคน และจะถูกเลือกไปเพียงคนเดียว ดังนั้น student จึงต้องเติม s เพื่อแสดงความเป็นพหูพจน์)</li></ul><h4>Each/Every + คำนามนับได้เอกพจน์</h4><p>Each/Every ออกในข้อสอบ CU-TEP บ่อย ซึ่งทั้งสองคำนี้ต้องตามหลังด้วยคำนามเอกพจน์ เช่น</p><ul><li>We visit our grandmother every month.</li><li>You do not need to take your luggage with you at every stop when changing your connecting flight.</li></ul><p class=\"note\">ข้อยกเว้น ถ้าหลัง every เป็นตัวเลข คำนามที่ตามมาจะอยู่ในรูปพหูพจน์ เช่น every two hours — We should visit the dentist every six months.</p><h4>Much/Many</h4><ul><li><b>Much</b> + คำนามนับไม่ได้ — As far as I know, I don't have much time for getting exercise this month. / There was much discussion about the reasons for the failure. / Due to the economic recession, I don't earn much money this year.</li><li><b>Many</b> + คำนามนับได้ พหูพจน์ — Many Japanese restaurants in China import seafood from Japan. / Many people would disagree with your ideas. / New drivers have twice as many accidents as experienced drivers.</li></ul><h4>Amount/Number</h4><ul><li><b>Amount</b> + คำนามนับไม่ได้ เช่น the amount of water — Last year I had a certain amount of difficulty finding a new job. / The new tax policy caused a huge amount of public anger.</li><li><b>Number</b> + คำนามนับได้ พหูพจน์ เช่น the number of students — Thailand expects a total number of visitors close to 25 million by the end of the year. / The estimated number of companies is approximately 333.34 million worldwide in 2023.</li></ul><h4>Another/Other/Others</h4><ul><li><b>Another</b> + คำนามนับได้ เอกพจน์ เช่น another person, another car — Would you like another cup of coffee? / We are planning to have another trip abroad this year.</li><li><b>Other</b> + คำนามนับได้ พหูพจน์ เช่น other students, other companies — The new model of NTC smartphone has many other interesting features. / The city plan has been opposed by the public, businesses and other local organizations.</li><li><b>Others</b> จะไม่มีคำนามตามหลัง เพราะผู้อ่านรู้อยู่แล้วว่าหมายถึงอะไร เช่น Some men buy clothes on their own while others ask their partners to go with them to the shopping mall. (others ในที่นี้คือ other men)</li></ul><p class=\"note\">ข้อควรระวัง บางทีคำนามที่ตามหลัง other ก็อยู่ห่างออกไป เพราะมี Adjective นำหน้า เช่น other respiratory viral infections ถ้าตัด Adjective ออกไปทั้งหมด จะเหลือเพียงคำนามคือ infections ซึ่งอยู่ในรูปพหูพจน์</p><h4>Affect/Effect</h4><ul><li><b>Affect</b> (Verb) ส่งผลกระทบ — Plastic pollution affects almost every marine species. / Education has been severely affected by the current economic decline.</li><li><b>Effect</b> (Noun) ผลกระทบ — Covid has a negative effect on labour productivity. / Modern farming methods can have an adverse effect on the environment.</li></ul><h4>Because/Because of</h4><ul><li><b>Because of</b> + Noun แปลว่า เพราะว่า เนื่องจาก โดยคำนามอาจจะมี Adjective นำหน้า หรือเป็นกลุ่มคำนามก็ได้ — The flight was delayed because of bad weather. / The local shrimp industry is not good this year because of persistent disease and unfavourable weather.</li><li><b>Because</b> + Subject + Verb (ประโยค) แปลว่า เพราะว่า เนื่องจาก — Because recycling is free, consumers are encouraged to buy things that can be recycled. / Classes have been cancelled today because the instructors have a staff meeting.</li></ul><h4>Like/Unlike/Alike</h4><ul><li><b>Like</b> + Noun แปลว่า เหมือน — Some tasks, like interviewing and training, will always be done best by humans.</li><li><b>Unlike</b> + Noun แปลว่า ไม่เหมือน — Hippos cannot swim or breathe underwater, and unlike most mammals they are so heavy that they cannot float.</li><li><b>Alike</b> แปลว่า เหมือน แต่ไวยากรณ์ต่างจาก 2 คำแรก คือ alike จะไม่ตามด้วยคำนาม แต่อยู่หลังสุดของประโยคเท่านั้น — Dolphins and whales are alike in the sense that they both are marine mammals and they both belong to the order of cetacean.</li></ul><p class=\"note\">ในข้อสอบจะวาง alike ผิดตำแหน่ง เช่น [X] The girls become more alike boys when they enter the school system. ที่ถูกต้องคือ [&#10003;] The girls become more like boys when they enter the school system.</p><h4>Despite/In spite of &amp; Although/Even though</h4><p>สองกลุ่มนี้ใช้บอกถึงความขัดแย้งกัน แปลไทยได้ว่า “ทั้งๆ ที่” “ถึงแม้ว่า” แต่มีโครงสร้างไวยากรณ์ต่างกัน</p><ul><li><b>Despite/In spite of</b> + Noun หรือกลุ่มคำนาม — Despite the limitations of the study, the research provides new findings about the potential role of changes in alcohol consumption in cancer risk. / In spite of the technological advancement in agriculture, millions of children around the world are still starving due to poverty.</li><li><b>Although/Even though</b> + Subject + Verb (ประโยค) — Although tortoises enjoy soaking in water, they don't swim and cannot even float. / Even though sea lions have teeth, they like to swallow their food whole.</li></ul><h4>Rise/Raise</h4><ul><li><b>Rise</b> (Verb) แปลว่า เพิ่มขึ้น เป็นกริยาที่ไม่ต้องการกรรม — College tuition is rising so fast. / Sea levels are rising as a result of global warming.</li><li><b>Raise</b> (Verb) แปลว่า ทำให้มากขึ้น เป็นกริยาที่ต้องการกรรม — The student raised her hand to ask a question. / The government plans to raise minimum wage by 5-8%.</li></ul><h4>Enough</h4><p>Enough แปลว่า เพียงพอ จะออกสอบในบางรอบ โดยมีโครงสร้างไวยากรณ์ดังนี้</p><ul><li>Enough + Noun — There are enough seats in the lecture room.</li><li>Adjective + Enough — Parker is not tall enough to be a soldier.</li></ul><h4>โครงสร้างคู่ขนาน (Parallel Structure/Parallelism)</h4><p>โครงสร้างคู่ขนาน คือ การใช้โครงสร้างทางไวยากรณ์ที่มีลักษณะเหมือนกัน ในรูปประโยคเดียวกัน เช่น [X] She is mad about watching TV more than to read a book. [&#10003;] She is mad about watching TV more than reading a book. — ถ้าคำแรกคือ watching อยู่ในรูป V-ing แล้ว อีกคำที่ถูกเปรียบเทียบก็ควรอยู่ในรูป V-ing เช่นกัน คือ reading</p><p>โดยปกติแล้วในข้อสอบจะมีตัวเชื่อมให้สังเกตคือคำว่า and เช่น [X] Kim is healthy, wealthy, and happiness. (Adjective, Adjective, Noun) [&#10003;] Kim is healthy, wealthy, and happy. (Adjective, Adjective, Adjective)</p><h4>ตัวเลขที่ทำหน้าที่ Adjective</h4><p>กรณีที่ตัวเลขบอกเวลาหรือปริมาณ โดยทำหน้าที่เป็น Adjective ขยายคำนาม จะไม่มีการเติม s แม้ว่าตัวเลขนั้นจะอยู่ในรูปพหูพจน์ก็ตาม เช่น</p><ul><li>a three-year contract — three-year ทำหน้าที่ Adjective ขยายคำนาม contract เพื่อบอกว่าสัญญานี้มีระยะเวลา 3 ปี คำนามหลักคือ contract ดังนั้นคำว่า year ในฐานะ Adjective ขยายคำนาม จึงไม่ต้องเติม s</li><li>a 10-month-old boy — 10-month-old ทำหน้าที่ Adjective ขยายคำนาม boy เพื่อบอกว่าเด็กผู้ชายคนนี้อายุ 10 เดือน คำนามหลักคือ boy ดังนั้นคำว่า month ในฐานะ Adjective ขยายคำนาม จึงไม่ต้องเติม s</li></ul>",
        "questions": [
          {
            "id": "cw15-1",
            "segments": [
              {
                "text": "Singapore Changi Airport, commonly "
              },
              {
                "text": "known",
                "n": 1
              },
              {
                "text": " as Changi Airport, is one of the largest transportation "
              },
              {
                "text": "hub",
                "n": 2
              },
              {
                "text": " in Asia and is renowned for "
              },
              {
                "text": "its",
                "n": 3
              },
              {
                "text": " unrivalled passenger "
              },
              {
                "text": "experiences",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 2,
            "explanation": "hub ไม่ถูกต้อง แก้ไขเป็น hubs เพราะตามโครงสร้าง one of the + คำนามพหูพจน์ (สนามบินชางกีเป็นหนึ่งในศูนย์การคมนาคมที่ใหญ่ที่สุดในเอเชีย แสดงว่าในเอเชียมีศูนย์การคมนาคมหลายแห่ง) (commonly ถูกต้องเพราะเป็น Adverb ขยาย known, its ถูกต้องเพราะหมายถึงสนามบินชางกีซึ่งเป็นคำนามเอกพจน์, experiences ถูกต้องเพราะหมายถึงประสบการณ์ของผู้โดยสารหลายคน)"
          },
          {
            "id": "cw15-2",
            "segments": [
              {
                "text": "Mariah Carey makes a lot of "
              },
              {
                "text": "money",
                "n": 1
              },
              {
                "text": " every "
              },
              {
                "text": "year",
                "n": 2
              },
              {
                "text": " thanks to her festive hit 'All I want for Christmas is you' "
              },
              {
                "text": "when",
                "n": 3
              },
              {
                "text": " is one of the most streamed Christmas "
              },
              {
                "text": "songs",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 3,
            "explanation": "when ไม่ถูกต้อง แก้ไขเป็น which เพราะตำแหน่งนี้ต้องการ Relative Pronoun ที่มาขยายเพลง All I want for Christmas is you (when จะไม่ตามด้วยกริยาโดยตรง แต่จะตามด้วยประโยค) (a lot of ถูกต้องเพราะนำหน้าคำนามนับไม่ได้และคำนามนับได้พหูพจน์ได้, every year ถูกต้องเพราะ every + นามเอกพจน์, songs ถูกต้องเพราะเป็นหนึ่งในเพลงคริสต์มาสที่ถูกสตรีมมากที่สุด แสดงว่าต้องมีหลายเพลง)"
          },
          {
            "id": "cw15-3",
            "segments": [
              {
                "text": "Every "
              },
              {
                "text": "times",
                "n": 1
              },
              {
                "text": " you open Google Photos, you can "
              },
              {
                "text": "easily",
                "n": 2
              },
              {
                "text": " look back on photos from years past, "
              },
              {
                "text": "recent",
                "n": 3
              },
              {
                "text": " highlights, and "
              },
              {
                "text": "moments",
                "n": 4
              },
              {
                "text": " with your loved ones."
              }
            ],
            "answer": 1,
            "explanation": "times ไม่ถูกต้อง แก้ไขเป็น time เพราะหลัง every ต้องเป็นคำนามเอกพจน์ (easily ถูกต้องเพราะเป็น Adverb ขยายกริยา look back, recent ถูกต้องเพราะเป็น Adjective ขยายคำนาม highlights, moments ถูกต้องเพราะคำนามที่อยู่หน้า and ทั้ง photos และ highlights เติม s กันหมด ตามหลักโครงสร้างคู่ขนาน moments จึงควรเติม s ด้วย)"
          },
          {
            "id": "cw15-4",
            "segments": [
              {
                "text": "Farmed fish, like "
              },
              {
                "text": "much",
                "n": 1
              },
              {
                "text": " industrially farmed animals, produce "
              },
              {
                "text": "massive",
                "n": 2
              },
              {
                "text": " amounts of waste, polluting the "
              },
              {
                "text": "surrounding areas",
                "n": 3
              },
              {
                "text": " and potentially spreading diseases to wild "
              },
              {
                "text": "species",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 1,
            "explanation": "much ไม่ถูกต้อง แก้ไขเป็น many เพราะคำนามที่ตามหลังมาคือ animals ซึ่งอยู่ในรูปพหูพจน์ (massive ถูกต้องเพราะเป็น Adjective ขยาย amounts, surrounding areas ถูกต้องเพราะ surrounding เป็น Adjective ขยาย areas, species ถูกต้องเพราะ species เติม s เสมอไม่ว่าจะเป็นเอกพจน์หรือพหูพจน์)"
          },
          {
            "id": "cw15-5",
            "segments": [
              {
                "text": "Cyberbullying takes place over "
              },
              {
                "text": "many",
                "n": 1
              },
              {
                "text": " digital devices "
              },
              {
                "text": "such as",
                "n": 2
              },
              {
                "text": " cell phones and tablets and involves posting "
              },
              {
                "text": "hurt",
                "n": 3
              },
              {
                "text": " comments and sharing "
              },
              {
                "text": "embarrassing",
                "n": 4
              },
              {
                "text": " photos."
              }
            ],
            "answer": 3,
            "explanation": "hurt ไม่ถูกต้อง แก้ไขเป็น hurtful เพราะตำแหน่งนี้อยู่หน้าคำนาม comments จึงควรอยู่ในรูป Adjective ที่มาขยายคำนาม (hurt เป็นรูปกริยา) (many ถูกต้องเพราะนำหน้าคำนามพหูพจน์ devices, such as ถูกต้องเพราะแปลว่า เช่น, embarrassing ถูกต้องเพราะเป็น Adjective ขยาย photos แปลว่า รูปภาพที่น่าอาย)"
          },
          {
            "id": "cw15-6",
            "segments": [
              {
                "text": "The "
              },
              {
                "text": "amount",
                "n": 1
              },
              {
                "text": " of undergraduate students enrolled in "
              },
              {
                "text": "distance",
                "n": 2
              },
              {
                "text": " education course was 97% "
              },
              {
                "text": "higher",
                "n": 3
              },
              {
                "text": " in 2020, when the coronavirus pandemic began, than "
              },
              {
                "text": "prior to",
                "n": 4
              },
              {
                "text": " the pandemic in fall 2019."
              }
            ],
            "answer": 1,
            "explanation": "amount ไม่ถูกต้อง แก้ไขเป็น number เพราะคำนามที่ตามมาคือ students ซึ่งเป็นคำนามนับได้ ขัดกับหลักไวยากรณ์ของ amount ที่ตามด้วยคำนามนับไม่ได้เท่านั้น (distance ถูกต้องเพราะ distance education เป็น Compound Noun แปลว่า การศึกษาทางไกล, higher ถูกต้องเพราะเป็นการเปรียบเทียบจำนวนนักเรียนระหว่าง 2 ปี สังเกตจาก than ท้ายประโยค, prior to ถูกต้องเพราะเป็นคำที่ใช้คู่กันเสมอ แปลว่า ก่อน)"
          },
          {
            "id": "cw15-7",
            "segments": [
              {
                "text": "Microsoft has been "
              },
              {
                "text": "competing",
                "n": 1
              },
              {
                "text": " with Google to strike lucrative partnerships with ExxonMobil, "
              },
              {
                "text": "and",
                "n": 2
              },
              {
                "text": " other energy firms, supplying "
              },
              {
                "text": "them",
                "n": 3
              },
              {
                "text": " not only with remote data storage "
              },
              {
                "text": "and",
                "n": 4
              },
              {
                "text": " artificial intelligence tools."
              }
            ],
            "answer": 4,
            "explanation": "and ไม่ถูกต้อง แก้ไขเป็น but also เพราะในโจทย์มี not only อยู่แล้ว ซึ่งต้องใช้คู่กับ but also (has been competing ถูกต้องเพราะอยู่ในโครงสร้าง Present Perfect Continuous, other ถูกต้องเพราะคำนามที่ตามหลังคือ firms อยู่ในรูปพหูพจน์, them ถูกต้องเพราะหมายถึง ExxonMobil และบริษัทพลังงานอื่นๆ)"
          },
          {
            "id": "cw15-8",
            "segments": [
              {
                "text": "COVID-19 can cause "
              },
              {
                "text": "a range of",
                "n": 1
              },
              {
                "text": " breathing problems from mild "
              },
              {
                "text": "to",
                "n": 2
              },
              {
                "text": " critical and can have serious "
              },
              {
                "text": "long-term",
                "n": 3
              },
              {
                "text": " effects on people who have "
              },
              {
                "text": "another",
                "n": 4
              },
              {
                "text": " health conditions like heart disease and cancer."
              }
            ],
            "answer": 4,
            "explanation": "another ไม่ถูกต้อง แก้ไขเป็น other เพราะคำนามที่ตามหลังมาคือ conditions ซึ่งอยู่ในรูปพหูพจน์ (health ทำหน้าที่เป็น Adjective ขยาย conditions ไม่ใช่คำนามหลัก) (a range of ถูกต้องเพราะหมายถึง ช่วงหรือขอบเขต, to ถูกต้องเพราะใช้คู่กับ from, long-term ถูกต้องเพราะเป็น Adjective แปลว่า ในระยะยาว)"
          },
          {
            "id": "cw15-9",
            "segments": [
              {
                "text": "One",
                "n": 1
              },
              {
                "text": " of the short-term "
              },
              {
                "text": "affects",
                "n": 2
              },
              {
                "text": " of cannabis on the body can include increased "
              },
              {
                "text": "heart rate",
                "n": 3
              },
              {
                "text": ", which can "
              },
              {
                "text": "lead to",
                "n": 4
              },
              {
                "text": " an increased risk of heart attack."
              }
            ],
            "answer": 2,
            "explanation": "affects ไม่ถูกต้อง แก้ไขเป็น effects เพราะตำแหน่งนี้ต้องการคำนามตามหลัง the (One ถูกต้องเพราะ one of the เป็นโครงสร้างที่ใช้ด้วยกัน, heart rate ถูกต้องเพราะเป็นคำนามเฉพาะหมายถึง อัตราการเต้นของหัวใจ, lead to ถูกต้องเพราะ can ตามด้วย Infinitive และ lead ใช้คู่กับบุพบท to)"
          },
          {
            "id": "cw15-10",
            "segments": [
              {
                "text": "A tortoise cannot "
              },
              {
                "text": "adapt",
                "n": 1
              },
              {
                "text": " to spend more time in the water, or "
              },
              {
                "text": "to swim",
                "n": 2
              },
              {
                "text": ", "
              },
              {
                "text": "because of",
                "n": 3
              },
              {
                "text": " it lacks a turtle's unique "
              },
              {
                "text": "body parts",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 3,
            "explanation": "because of ไม่ถูกต้อง แก้ไขเป็น because เพราะสิ่งที่ตามมามีโครงสร้างเป็นประโยค (it เป็นประธาน lacks เป็นกริยา) (cannot ถูกต้องเพราะไม่สามารถแก้ไขได้, to swim ถูกต้องเพราะใช้โครงสร้างคู่ขนานเดียวกับ to spend ที่อยู่ก่อนหน้า, body parts ถูกต้องเพราะหมายถึงส่วนประกอบของร่างกายเต่าน้ำ)"
          },
          {
            "id": "cw15-11",
            "segments": [
              {
                "text": "Employee activism and outside pressure "
              },
              {
                "text": "have pushed",
                "n": 1
              },
              {
                "text": " big tech companies "
              },
              {
                "text": "like",
                "n": 2
              },
              {
                "text": " Amazon, Microsoft, and Google into "
              },
              {
                "text": "promising",
                "n": 3
              },
              {
                "text": " to slash "
              },
              {
                "text": "its",
                "n": 4
              },
              {
                "text": " carbon emissions."
              }
            ],
            "answer": 4,
            "explanation": "its ไม่ถูกต้อง แก้ไขเป็น their เพราะ its ใช้แทนคำนามเอกพจน์ แต่โจทย์กำลังกล่าวถึงบริษัทยักษ์ใหญ่หลายแห่ง (big tech companies) ซึ่งอยู่ในรูปพหูพจน์ (have pushed ถูกต้องเพราะประธานเป็นพหูพจน์และตามโครงสร้าง Present Perfect Tense, like ถูกต้องเพราะเป็นไปตามโครงสร้าง like + Noun, promising ถูกต้องเพราะหลังคำบุพบทกริยามักอยู่ในรูป V-ing)"
          },
          {
            "id": "cw15-12",
            "segments": [
              {
                "text": "Unlike",
                "n": 1
              },
              {
                "text": " styrofoam, Mushroom Packaging "
              },
              {
                "text": "consisting of",
                "n": 2
              },
              {
                "text": " 100 percent biodegradable and "
              },
              {
                "text": "renewable",
                "n": 3
              },
              {
                "text": " material that can "
              },
              {
                "text": "be recycled",
                "n": 4
              },
              {
                "text": " directly in and by nature."
              }
            ],
            "answer": 2,
            "explanation": "consisting of ไม่ถูกต้อง แก้ไขเป็น consists of เพราะตำแหน่งนี้ต้องการกริยาแท้ (consisting of อยู่ในรูป V-ing ไม่ใช่กริยาแท้) (Unlike ถูกต้องเพราะเป็นไปตามโครงสร้าง Unlike + Noun, renewable ถูกต้องเพราะเป็น Adjective แบบเดียวกับ biodegradable ตามหลักโครงสร้างคู่ขนาน, be recycled ถูกต้องเพราะประธานคือ material ซึ่งถูกรีไซเคิล จึงใช้ Passive Voice)"
          },
          {
            "id": "cw15-13",
            "segments": [
              {
                "text": "Alike",
                "n": 1
              },
              {
                "text": " the sunrise, the koala "
              },
              {
                "text": "at",
                "n": 2
              },
              {
                "text": " the Featherdale Wildlife Park is "
              },
              {
                "text": "a sign of",
                "n": 3
              },
              {
                "text": " brighter times ahead for "
              },
              {
                "text": "Australia's",
                "n": 4
              },
              {
                "text": " beleaguered tourism industry."
              }
            ],
            "answer": 1,
            "explanation": "Alike ไม่ถูกต้อง แก้ไขเป็น Like เพราะ Alike ไม่สามารถนำหน้าคำนามได้ (at ถูกต้องเพราะใช้ระบุสถานที่ที่ชัดเจน, a sign of ถูกต้องเพราะหมายถึง เป็นสัญญาณของบางสิ่ง, Australia's ถูกต้องเพราะหมายถึง อะไรบางอย่างของออสเตรเลีย)"
          },
          {
            "id": "cw15-14",
            "segments": [
              {
                "text": "Despite",
                "n": 1
              },
              {
                "text": " contrary beliefs, people "
              },
              {
                "text": "are working",
                "n": 2
              },
              {
                "text": " remotely report a "
              },
              {
                "text": "higher level",
                "n": 3
              },
              {
                "text": " of productivity than their office "
              },
              {
                "text": "counterparts",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 2,
            "explanation": "are working ไม่ถูกต้อง แก้ไขเป็น who are working หรือ working เพราะประธานคือ people และกริยาแท้ของประโยคคือ report ส่วน are working remotely ควรทำหน้าที่ขยายคำว่า people เท่านั้น (Despite ถูกต้องเพราะตามด้วยคำนาม beliefs, higher level ถูกต้องเพราะด้านหลังมีคำว่า than บ่งบอกการเปรียบเทียบขั้นกว่า, counterparts ถูกต้องเพราะหมายถึงคนอีกกลุ่มที่ไม่ได้ทำงานจากที่บ้าน)"
          },
          {
            "id": "cw15-15",
            "segments": [
              {
                "text": "Although",
                "n": 1
              },
              {
                "text": " their potential benefits, many people "
              },
              {
                "text": "are worried",
                "n": 2
              },
              {
                "text": " about the effects that "
              },
              {
                "text": "automation",
                "n": 3
              },
              {
                "text": " of simple labor tasks may have on the "
              },
              {
                "text": "economy",
                "n": 4
              },
              {
                "text": " and workforce."
              }
            ],
            "answer": 1,
            "explanation": "Although ไม่ถูกต้อง แก้ไขเป็น Despite เพราะ Although ต้องตามด้วยประโยค แต่ในโจทย์ their potential benefits เป็นเพียงกลุ่มคำนาม (are worried ถูกต้องเพราะบ่งบอกความรู้สึกของประธาน, automation ถูกต้องเพราะทำหน้าที่เป็นคำนามอยู่หน้า of, economy ถูกต้องเพราะทำหน้าที่เป็นคำนามอยู่หลัง the)"
          },
          {
            "id": "cw15-16",
            "segments": [
              {
                "text": "COVID-19 cases are "
              },
              {
                "text": "raising",
                "n": 1
              },
              {
                "text": " and experts predict that a peak is "
              },
              {
                "text": "three weeks away",
                "n": 2
              },
              {
                "text": ", with "
              },
              {
                "text": "as many as",
                "n": 3
              },
              {
                "text": " 3.5 million of Taiwan's 24.5 million people expected to "
              },
              {
                "text": "eventually",
                "n": 4
              },
              {
                "text": " be infected."
              }
            ],
            "answer": 1,
            "explanation": "raising ไม่ถูกต้อง แก้ไขเป็น rising เพราะ raising มาจาก raise ซึ่งเป็นกริยาที่ต้องการกรรม แต่จำนวนเคสโควิดเพิ่มขึ้นเอง จึงไม่มีกรรมตามหลัง (three weeks away ถูกต้องเพราะหมายถึงเวลาอีกสามสัปดาห์ข้างหน้า, as many as ถูกต้องเพราะเป็นการเปรียบเทียบขั้นปกตินำหน้าจำนวน, eventually ถูกต้องเพราะเป็น Adverb ขยาย infected)"
          },
          {
            "id": "cw15-17",
            "segments": [
              {
                "text": "The Loch Ness Lake holds "
              },
              {
                "text": "more water",
                "n": 1
              },
              {
                "text": " than all the lakes in England and there is "
              },
              {
                "text": "water enough",
                "n": 2
              },
              {
                "text": " here to submerge "
              },
              {
                "text": "every",
                "n": 3
              },
              {
                "text": " human being "
              },
              {
                "text": "on",
                "n": 4
              },
              {
                "text": " the planet."
              }
            ],
            "answer": 2,
            "explanation": "water enough ไม่ถูกต้อง แก้ไขเป็น enough water เพราะ enough จะวางหน้าคำนามเสมอ (more water ถูกต้องเพราะใช้คู่กับ than ที่ตามมาด้านหลัง, every ถูกต้องเพราะ every + คำนามเอกพจน์ human being, on ถูกต้องเพราะ on the planet แปลว่า บนดาวเคราะห์ดวงนี้)"
          },
          {
            "id": "cw15-18",
            "segments": [
              {
                "text": "James Cameron "
              },
              {
                "text": "says",
                "n": 1
              },
              {
                "text": " that 'The Way of Water' is "
              },
              {
                "text": "successful enough",
                "n": 2
              },
              {
                "text": " to make the "
              },
              {
                "text": "next",
                "n": 3
              },
              {
                "text": " three Avatar movies, "
              },
              {
                "text": "expecting",
                "n": 4
              },
              {
                "text": " to be released in 2024, 2026, and 2028."
              }
            ],
            "answer": 4,
            "explanation": "expecting ไม่ถูกต้อง แก้ไขเป็น expected เพราะกริยา expect กำลังขยายคำนาม movies ซึ่งไม่สามารถทำกริยา release เองได้ ตามหลัก Past Participle (says ถูกต้องเพราะประธานเอกพจน์ตามหลัก Present Simple, successful enough ถูกต้องเพราะเป็นไปตามโครงสร้าง Adjective + enough, next ถูกต้องเพราะหมายถึงภาพยนตร์ 3 เรื่องถัดไป)"
          },
          {
            "id": "cw15-19",
            "segments": [
              {
                "text": "Lower fertility rate and "
              },
              {
                "text": "aging",
                "n": 1
              },
              {
                "text": " population have become worldwide "
              },
              {
                "text": "concerns",
                "n": 2
              },
              {
                "text": " but Denmark has assisted "
              },
              {
                "text": "seniors",
                "n": 3
              },
              {
                "text": " to land a job and "
              },
              {
                "text": "engaging",
                "n": 4
              },
              {
                "text": " in social activities."
              }
            ],
            "answer": 4,
            "explanation": "engaging ไม่ถูกต้อง แก้ไขเป็น to engage เพราะตามหลักโครงสร้างคู่ขนาน คำที่อยู่หน้าและหลัง and ควรอยู่ในโครงสร้างเดียวกัน เมื่อกริยาตัวหน้าคือ to land กริยาตัวหลังก็ควรอยู่ในรูป To-Infinitive เช่นกัน (aging ถูกต้องเพราะเป็น Adjective ขยาย population, concerns ถูกต้องเพราะเติม s ได้เนื่องจากมีความกังวลหลายอย่าง, seniors ถูกต้องเพราะหมายถึงผู้สูงวัยและอยู่ในรูปพหูพจน์)"
          },
          {
            "id": "cw15-20",
            "segments": [
              {
                "text": "A "
              },
              {
                "text": "2-weeks-old",
                "n": 1
              },
              {
                "text": " kitten becomes more "
              },
              {
                "text": "aware of",
                "n": 2
              },
              {
                "text": " the surroundings and will begin to interact "
              },
              {
                "text": "more",
                "n": 3
              },
              {
                "text": " with "
              },
              {
                "text": "its",
                "n": 4
              },
              {
                "text": " siblings."
              }
            ],
            "answer": 1,
            "explanation": "2-weeks-old ไม่ถูกต้อง แก้ไขเป็น 2-week-old เพราะตัวเลขทำหน้าที่เป็น Adjective ขยายคำนาม kitten (ลูกแมวอายุ 2 สัปดาห์) คำว่า week จึงไม่ต้องเติม s (aware of ถูกต้องเพราะ aware ใช้คู่กับ of เสมอ, more ถูกต้องเพราะสอดคล้องกับความหมายที่มี more อยู่ในประโยคแรกแล้ว, its ถูกต้องเพราะหมายถึงประธาน A kitten ซึ่งเป็นเอกพจน์)"
          }
        ]
      },
      {
        "title": "บทที่ 16: เทคนิคในการทำข้อสอบ CU-TEP Writing (Error Identification)",
        "referenceHtml": "<h4>เทคนิคในการทำข้อสอบ CU-TEP Writing (Error Identification)</h4><p>สำหรับข้อสอบ Error Identification หรือที่เรียกสั้นๆ ว่า “ข้อสอบจับผิด” แต่ละคนก็มีมุมมองต่อข้อสอบลักษณะนี้แตกต่างกันไป คนที่ชอบก็จะมองว่าเป็นของหวาน คือรู้สึกสนุกและชอบฝึกทำข้อสอบนี้เป็นประจำ เพราะเมื่อทำถึงจุดหนึ่ง ก็จะสามารถจับทางข้อสอบรูปแบบนี้ได้ (แต่แน่นอนว่า จุดหนึ่งของแต่ละคนก็ไม่เท่ากัน) ในทางตรงกันข้าม หลายคนก็มองว่าต้อง “จำใจและทำใจ” ที่ต้องทำข้อสอบแบบนี้และผ่านเกณฑ์ให้ได้</p><p>ดังนั้น ในบทนี้จะนำเสนอกลยุทธ์หรือหลักคิดที่มุ่งตอบโจทย์แก่คนทั้งสองกลุ่มนี้ เพื่อเป็นแนวทางในการทำแบบฝึกหัดและข้อสอบจริงอย่างแม่นยำที่สุดและภายในเวลาที่กำหนด</p><ul><li>จดจำเรื่องเด่น</li><li>มองเห็นกุญแจ</li><li>แลหน้า-หลัง</li></ul><h4>1. จดจำเรื่องเด่น</h4><p>สิ่งที่เรามักจะรู้สึกกังวลเวลาทำข้อสอบ Error Identification ก็คือกลัวว่าจะจำกฎไวยากรณ์ไม่ได้ทั้งหมด และไม่รู้ว่าจะเจอไวยากรณ์เรื่องไหนบ้าง สิ่งสำคัญที่จะช่วยให้สบายใจมากขึ้นก็คือ ไวยากรณ์บางเรื่องสามารถอ่านผ่านๆ ได้ เพราะมักจะไม่ออกสอบ เช่น</p><ul><li><b>Tense</b>: ที่เราเรียนกันคือ Tense 12 แบบ แต่ Tense ที่เรามักพบในข้อสอบนั้นมีเพียงประมาณ 7-8 รูปเท่านั้น ได้แก่ Present (3): Present Simple, Present Continuous, Present Perfect / Past (3): Past Simple, Past Continuous, Past Perfect / Future (2): Future Simple, Future Continuous</li><li><b>Article</b>: เรื่อง A – An – The เป็นเรื่องที่เราเรียนและใช้กันมานาน ผ่านการเขียนเป็นหลัก และมักเจอปัญหาที่ไม่สามารถจำกฎเกณฑ์ได้ทั้งหมด อย่างไรก็ตาม ขอให้สบายใจได้ว่าสำหรับ Error Identification แทบจะไม่ใช้ Article ในการสอบเลย หมายความว่าอาจมีการขีดเส้นใต้เป็นตัวเลือก แต่โดยมากมักไม่ใช่ตัวเลือกที่ผิด</li><li><b>การเลือกใช้คำ (Word of Choice)</b>: เช่น make หรือ do — ในข้อสอบ Error Identification ของสถาบันต่างๆ ในประเทศไทย มักไม่ค่อยออกในจุดนี้ แต่จะมุ่งเน้นการออกข้อสอบวัดเรื่องกฎไวยากรณ์เป็นหลัก</li></ul><p>หากจะวิเคราะห์ตัวเลือก make ในประโยคตัวอย่างข้อ 1 ด้านล่าง ให้ดูเรื่องไวยากรณ์เป็นหลัก ได้แก่ การใช้รูปพหูพจน์นี้ถูกต้องหรือไม่ รูป Present Simple นี้ถูกต้องหรือไม่ ใช้ Active Voice หรือควรจะเป็น Passive Voice — โดยไม่ต้องวิเคราะห์ว่าในประโยคนี้ควรใช้ make หรือ do</p><h4>2. มองเห็นกุญแจ</h4><p>ในข้อสอบแต่ละข้อจะมีกุญแจซ่อนอยู่ ซึ่งโดยส่วนมาก (อย่างน้อยเกินครึ่งหนึ่งของจำนวนข้อสอบในแต่ละชุด) มักจะขีดเส้นใต้คำสำคัญ หรือหัวข้อไวยากรณ์ที่เราเรียนรู้ เช่น much-many / few-little / since-for / due to-because เป็นต้น ขอให้ระวังและตรวจสอบก่อนเลย เพราะมีโอกาสที่จะเป็นจุดที่ผิดได้สูงมาก เพราะคำเหล่านี้มีหลักเกณฑ์ กฎการใช้ชัดเจน เช่น much ใช้กับคำนามนับไม่ได้ ในขณะที่ many ใช้กับคำนามนับได้พหูพจน์ ดังนั้น หากหาคำนามเจอ ก็จะตรวจสอบได้ทันทีว่าควรใช้ much หรือ many</p><h4>3. แลหน้า-หลัง</h4><p>นอกจากคำสำคัญ (กุญแจ) แล้ว สิ่งที่จะช่วยเราได้มากก็คือ คำที่อยู่หน้าและหลังของคำที่ขีดเส้นใต้ ซึ่งโดยมาก หากมองดีๆ จะพบว่าเป็นรูปแบบไวยากรณ์ที่มาเป็นโครงสร้าง เช่น หากพบว่าคำที่ขีดเส้นใต้อยู่ระหว่างคำว่า are และ by ก็จะสันนิษฐานได้ทันทีว่าน่าจะเป็นประโยครูปแบบ Passive Voice</p><p>จากหลักการทั้ง 3 ข้อ จะพบว่าหากเราลองเปิดใจและปฏิบัติตาม นอกจากจะทำให้ทำข้อสอบถูกและมั่นใจแล้ว เราจะรู้สึกสบายใจที่น่าจะสามารถทำข้อสอบได้ตามเวลาที่กำหนดอีกด้วย</p>",
        "questions": [
          {
            "id": "cw16-1",
            "segments": [
              {
                "text": "Some jellyfish "
              },
              {
                "text": "make",
                "n": 1
              },
              {
                "text": " daily journeys from "
              },
              {
                "text": "deep",
                "n": 2
              },
              {
                "text": " water to the surface and back, while "
              },
              {
                "text": "others",
                "n": 3
              },
              {
                "text": " migrate "
              },
              {
                "text": "horizontal",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 4,
            "explanation": "horizontal ไม่ถูกต้อง แก้ไขเป็น horizontally เพราะทำหน้าที่เป็น Adverb ขยายกริยา migrate ไม่ใช่ Adjective (make, deep, others ถูกต้องแล้ว — จุดที่ผิดในข้อนี้ไม่เกี่ยวกับการเลือกใช้คำ make หรือ do แต่เป็นเรื่องรูปคำ Adverb/Adjective)"
          },
          {
            "id": "cw16-2",
            "segments": [
              {
                "text": "Many",
                "n": 1
              },
              {
                "text": " heavy work that was once "
              },
              {
                "text": "done",
                "n": 2
              },
              {
                "text": " by hand can now be done more "
              },
              {
                "text": "easily",
                "n": 3
              },
              {
                "text": " with the help of "
              },
              {
                "text": "automation",
                "n": 4
              },
              {
                "text": " or machines."
              }
            ],
            "answer": 1,
            "explanation": "Many ไม่ถูกต้อง แก้ไขเป็น much เพราะคำนามที่ตามมาคือ work ซึ่งเป็นคำนามนับไม่ได้ (เป็นตัวอย่างของหลัก 'มองเห็นกุญแจ' — เห็นคำว่า Many ต้องตรวจสอบทันทีว่าคำนามที่ตามมาคืออะไร) (done, easily, automation ถูกต้องแล้ว)"
          },
          {
            "id": "cw16-3",
            "segments": [
              {
                "text": "The "
              },
              {
                "text": "disastrous",
                "n": 1
              },
              {
                "text": " and violent "
              },
              {
                "text": "conflicts",
                "n": 2
              },
              {
                "text": " derive from poverty and discrimination while both issues are "
              },
              {
                "text": "causing",
                "n": 3
              },
              {
                "text": " by the rich "
              },
              {
                "text": "West",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 3,
            "explanation": "causing ไม่ถูกต้อง แก้ไขเป็น caused เพราะคำหน้าและหลัง คือ are และ by บ่งบอกว่าเป็นโครงสร้าง Passive Voice (เป็นตัวอย่างของหลัก 'แลหน้า-หลัง') (disastrous, conflicts, West ถูกต้องแล้ว)"
          }
        ]
      },
      {
        "title": "แบบทดสอบชุดที่ 1",
        "referenceHtml": "<p>แบบทดสอบเสมือนจริงรูปแบบ Error Identification จำนวน 30 ข้อ พร้อมเฉลยและคำอธิบายละเอียดทุกตัวเลือก</p>",
        "questions": [
          {
            "id": "set1-1",
            "segments": [
              {
                "text": "A woman in New Zealand "
              },
              {
                "text": "needed",
                "n": 1
              },
              {
                "text": " surgery and 14 stitches "
              },
              {
                "text": "on",
                "n": 2
              },
              {
                "text": " her face "
              },
              {
                "text": "after",
                "n": 3
              },
              {
                "text": " she was attacked by a crocodile while "
              },
              {
                "text": "walked",
                "n": 4
              },
              {
                "text": " her dog."
              }
            ],
            "answer": 4,
            "explanation": "walked ไม่ถูกต้อง แก้ไขเป็น walking เพราะหลังคำว่า while มักตามด้วยประโยค (while + Subject + Verb) หรือตามด้วย V-ing (while + V-ing) (needed ถูกต้องเพราะเหตุการณ์เกิดขึ้นในอดีต, on ถูกต้องเพราะ 14 stitches on her face คือเย็บแผล 14 เข็มบนใบหน้า, after ถูกต้องเพราะบอกลำดับเวลาหลังถูกจระเข้ทำร้าย)"
          },
          {
            "id": "set1-2",
            "segments": [
              {
                "text": "Beijing's subway system is "
              },
              {
                "text": "second",
                "n": 1
              },
              {
                "text": " only "
              },
              {
                "text": "to",
                "n": 2
              },
              {
                "text": " Tokyo in terms of rider "
              },
              {
                "text": "density",
                "n": 3
              },
              {
                "text": ", with 4.1 billion rides "
              },
              {
                "text": "were taken",
                "n": 4
              },
              {
                "text": " in 2020."
              }
            ],
            "answer": 4,
            "explanation": "were taken ไม่ถูกต้อง แก้ไขเป็น taken เพราะตั้งแต่เครื่องหมาย comma เป็นต้นไปเป็นส่วนขยายที่ไม่มีประธาน จึงไม่สามารถใช้กริยาแท้ were taken ได้ ต้องใช้ Past Participle คือ taken (second ถูกต้องเพราะบอกลำดับที่สอง, to ถูกต้องเพราะเป็น preposition บอกว่าเป็นรองแค่โตเกียว, density ถูกต้องเพราะเป็นคำนามแปลว่า ความหนาแน่น)"
          },
          {
            "id": "set1-3",
            "segments": [
              {
                "text": "Those",
                "n": 1
              },
              {
                "text": " who want to grow cannabis for "
              },
              {
                "text": "commercial purposes",
                "n": 2
              },
              {
                "text": " must be Thai nationals "
              },
              {
                "text": "aged",
                "n": 3
              },
              {
                "text": " at least 20 years and they must seek "
              },
              {
                "text": "permit",
                "n": 4
              },
              {
                "text": " from authorities."
              }
            ],
            "answer": 4,
            "explanation": "permit ไม่ถูกต้อง แก้ไขเป็น permission เพราะ seek เป็นกริยาที่ต้องการกรรมเป็นคำนาม ควรแก้ไขเป็น permission (Those ถูกต้องเพราะเป็นประธานที่แปลว่า กลุ่มคน, commercial purposes ถูกต้องเพราะ commercial ขยาย purposes, aged ถูกต้องเพราะเป็น Adjective ขยาย nationals ซึ่งวางไว้หลังคำนามที่ขยายได้)"
          },
          {
            "id": "set1-4",
            "segments": [
              {
                "text": "A man "
              },
              {
                "text": "has been arrested",
                "n": 1
              },
              {
                "text": " after "
              },
              {
                "text": "repeat",
                "n": 2
              },
              {
                "text": " punching a cat "
              },
              {
                "text": "in",
                "n": 3
              },
              {
                "text": " the face in "
              },
              {
                "text": "a",
                "n": 4
              },
              {
                "text": " public park."
              }
            ],
            "answer": 2,
            "explanation": "repeat ไม่ถูกต้อง แก้ไขเป็น repeatedly เพราะอยู่หน้าคำว่า punching ซึ่งเป็นกริยา จึงควรเป็น Adverb ขยายกริยา (has been arrested ถูกต้องเพราะประธานถูกกระทำจึงเป็น Passive Voice, in ถูกต้องเพราะ in the face หมายถึงต่อยเข้าที่หน้า, a ถูกต้องเพราะนำหน้าคำนามที่ไม่เฉพาะเจาะจง)"
          },
          {
            "id": "set1-5",
            "segments": [
              {
                "text": "Two women and "
              },
              {
                "text": "their",
                "n": 1
              },
              {
                "text": " pets had a miraculous "
              },
              {
                "text": "escape",
                "n": 2
              },
              {
                "text": " after a tree crashed "
              },
              {
                "text": "through",
                "n": 3
              },
              {
                "text": " their home in Maryland as they "
              },
              {
                "text": "watched",
                "n": 4
              },
              {
                "text": " TV."
              }
            ],
            "answer": 4,
            "explanation": "watched ไม่ถูกต้อง แก้ไขเป็น were watching เพราะเหตุการณ์นี้กำลังดำเนินอยู่ขณะต้นไม้ล้มทับบ้าน (สังเกตคำว่า as ที่มักนำหน้า Continuous Tense) (their ถูกต้องเพราะหมายถึง Two women ที่เป็นพหูพจน์, escape ถูกต้องเพราะทำหน้าที่คำนาม แปลว่า การหลบหนี, through ถูกต้องเพราะหมายถึงต้นไม้ล้มทะลุกลางบ้าน)"
          },
          {
            "id": "set1-6",
            "segments": [
              {
                "text": "A "
              },
              {
                "text": "80-year-old",
                "n": 1
              },
              {
                "text": " South Carolina woman "
              },
              {
                "text": "who",
                "n": 2
              },
              {
                "text": " was robbed of her life "
              },
              {
                "text": "saving",
                "n": 3
              },
              {
                "text": " by a Jamaican lottery scam says she "
              },
              {
                "text": "has been paid",
                "n": 4
              },
              {
                "text": " back only $356 of the $200,000 she has owed."
              }
            ],
            "answer": 3,
            "explanation": "saving ไม่ถูกต้อง แก้ไขเป็น savings เพราะ life savings เป็นคำนามเฉพาะที่อยู่ในรูปพหูพจน์เสมอ (80-year-old ถูกต้องเพราะขยายอายุด้วยเครื่องหมาย hyphen, who ถูกต้องเพราะขยายคำนาม woman ที่เป็นคน, has been paid ถูกต้องเพราะยังไม่ได้รับเงินคืน จึงเป็น Passive Voice ในรูป Present Perfect)"
          },
          {
            "id": "set1-7",
            "segments": [
              {
                "text": "Rhinoceros poaching in Africa could cause a "
              },
              {
                "text": "species",
                "n": 1
              },
              {
                "text": " to collapse quickly — perhaps "
              },
              {
                "text": "even before",
                "n": 2
              },
              {
                "text": " wildlife authorities "
              },
              {
                "text": "become",
                "n": 3
              },
              {
                "text": " fully aware of "
              },
              {
                "text": "a",
                "n": 4
              },
              {
                "text": " problem."
              }
            ],
            "answer": 4,
            "explanation": "a ไม่ถูกต้อง แก้ไขเป็น the เพราะหมายถึงปัญหาการล่าแรดที่กล่าวถึงไปแล้วก่อนหน้า จึงต้องชี้เฉพาะด้วย the (species ถูกต้องเพราะเติม s ได้ทั้งเอกพจน์และพหูพจน์, even before ถูกต้องเพราะเป็นคำเชื่อมบอกเวลาที่รวดเร็วมาก, become ถูกต้องเพราะผันตามประธานพหูพจน์ authorities)"
          },
          {
            "id": "set1-8",
            "segments": [
              {
                "text": "A surfer has made a "
              },
              {
                "text": "remarkable escape",
                "n": 1
              },
              {
                "text": " from the jaws of a shark by "
              },
              {
                "text": "gouging",
                "n": 2
              },
              {
                "text": " its eyes before driving "
              },
              {
                "text": "him",
                "n": 3
              },
              {
                "text": " more than an hour "
              },
              {
                "text": "for help",
                "n": 4
              },
              {
                "text": " in far north Miami."
              }
            ],
            "answer": 3,
            "explanation": "him ไม่ถูกต้อง แก้ไขเป็น himself เพราะนักโต้คลื่นขับรถพาตัวเองไปหาหมอ ต้องใช้ reflexive pronoun himself (remarkable escape ถูกต้องเพราะเป็น Adjective ขยาย escape, gouging ถูกต้องเพราะกริยาหลัง by อยู่ในรูป V-ing, for help ถูกต้องเพราะ for + Noun แปลว่า เพื่อขอความช่วยเหลือ)"
          },
          {
            "id": "set1-9",
            "segments": [
              {
                "text": "Package sales",
                "n": 1
              },
              {
                "text": " to South Korea had dropped dramatically "
              },
              {
                "text": "over the past",
                "n": 2
              },
              {
                "text": " week after more tourists were "
              },
              {
                "text": "unable of",
                "n": 3
              },
              {
                "text": " received "
              },
              {
                "text": "refunds",
                "n": 4
              },
              {
                "text": " from tour companies."
              }
            ],
            "answer": 3,
            "explanation": "unable of ไม่ถูกต้อง แก้ไขเป็น unable to เพราะ unable ต้องใช้คู่กับ to เสมอ (Package sales ถูกต้องเพราะหมายถึงการขายแพ็กเกจทัวร์, over the past ถูกต้องเพราะหมายถึงเป็นเวลากว่าสัปดาห์ที่ผ่านมา, refunds ถูกต้องเพราะหมายถึงเงินคืนจากบริษัททัวร์)"
          },
          {
            "id": "set1-10",
            "segments": [
              {
                "text": "A suspension bridge "
              },
              {
                "text": "was collapsed",
                "n": 1
              },
              {
                "text": " into a river in "
              },
              {
                "text": "southwestern",
                "n": 2
              },
              {
                "text": " Germany on Friday plunging the vehicles traveling across "
              },
              {
                "text": "it",
                "n": 3
              },
              {
                "text": " into the water below and "
              },
              {
                "text": "killing",
                "n": 4
              },
              {
                "text": " a 16-year-old girl."
              }
            ],
            "answer": 1,
            "explanation": "was collapsed ไม่ถูกต้อง แก้ไขเป็น collapsed เพราะสะพานถล่มลงมาเอง ไม่ได้ถูกกระทำ จึงต้องใช้ Active Voice (southwestern ถูกต้องเพราะเป็นทิศตะวันตกเฉียงใต้, it ถูกต้องเพราะหมายถึง A suspension bridge ที่เป็นเอกพจน์, killing ถูกต้องเพราะเป็น Present Participle ขยายประโยคแรก)"
          },
          {
            "id": "set1-11",
            "segments": [
              {
                "text": "As "
              },
              {
                "text": "Thai workers",
                "n": 1
              },
              {
                "text": " feel the pinch of soaring "
              },
              {
                "text": "living",
                "n": 2
              },
              {
                "text": " expenses, the government has announced "
              },
              {
                "text": "plans",
                "n": 3
              },
              {
                "text": " to "
              },
              {
                "text": "rise",
                "n": 4
              },
              {
                "text": " the daily minimum wage."
              }
            ],
            "answer": 4,
            "explanation": "rise ไม่ถูกต้อง แก้ไขเป็น raise เพราะ rise เป็นกริยาที่ไม่ต้องการกรรม แต่ในที่นี้ต้องการกริยาที่ตามด้วยกรรม (ทำให้ค่าแรงสูงขึ้น) จึงต้องใช้ raise (Thai workers ถูกต้องเพราะหมายถึงคนทำงานชาวไทย, living ถูกต้องเพราะขยาย expenses หมายถึงค่าครองชีพ, plans ถูกต้องเพราะเป็นคำนามพหูพจน์)"
          },
          {
            "id": "set1-12",
            "segments": [
              {
                "text": "Ukraine is "
              },
              {
                "text": "preparing",
                "n": 1
              },
              {
                "text": " for possible "
              },
              {
                "text": "intensified attacks",
                "n": 2
              },
              {
                "text": " by Russia on Wednesday, "
              },
              {
                "text": "when",
                "n": 3
              },
              {
                "text": " marks six months "
              },
              {
                "text": "since",
                "n": 4
              },
              {
                "text": " the invasion began."
              }
            ],
            "answer": 3,
            "explanation": "when ไม่ถูกต้อง แก้ไขเป็น which เพราะ when เป็นคำเชื่อมที่ต้องตามด้วยประโยค แต่ตำแหน่งนี้ต้องการ Relative Pronoun (preparing ถูกต้องเพราะยูเครนเป็นผู้กระทำเอง, intensified attacks ถูกต้องเพราะ attacks เป็นคำนามที่ intensified ขยาย, since ถูกต้องเพราะบอกว่าตั้งแต่การรุกรานเริ่มต้นขึ้น)"
          },
          {
            "id": "set1-13",
            "segments": [
              {
                "text": "Shipments of "
              },
              {
                "text": "home appliances",
                "n": 1
              },
              {
                "text": " in Japan rose in July "
              },
              {
                "text": "from a year",
                "n": 2
              },
              {
                "text": " earlier "
              },
              {
                "text": "because of",
                "n": 3
              },
              {
                "text": " factories in Shanghai restarted production after coronavirus restrictions "
              },
              {
                "text": "were lifted",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 3,
            "explanation": "because of ไม่ถูกต้อง แก้ไขเป็น because เพราะสิ่งที่ตามมาเป็นประโยค (factories ... restarted) จึงต้องใช้ because ไม่ใช่ because of (home appliances ถูกต้องเพราะหมายถึงเครื่องใช้ในบ้าน, from a year ถูกต้องเพราะหมายถึงจากปีก่อนหน้านี้, were lifted ถูกต้องเพราะมาตรการถูกยกเลิก จึงเป็น Passive Voice)"
          },
          {
            "id": "set1-14",
            "segments": [
              {
                "text": "British",
                "n": 1
              },
              {
                "text": " consumer price inflation "
              },
              {
                "text": "is set",
                "n": 2
              },
              {
                "text": " to peak at 18 percent in early 2023 – nine "
              },
              {
                "text": "time",
                "n": 3
              },
              {
                "text": " the Bank of England's target, "
              },
              {
                "text": "according to",
                "n": 4
              },
              {
                "text": " an economist at US bank Citi."
              }
            ],
            "answer": 3,
            "explanation": "time ไม่ถูกต้อง แก้ไขเป็น times เพราะ time ในความหมายว่า เท่า/ครั้ง ของตัวเลขสามารถเติม s ได้ (British ถูกต้องเพราะขยาย consumer หมายถึงผู้บริโภคชาวอังกฤษ, is set ถูกต้องเพราะ set เป็นรูปเดียวกันทั้ง 3 ช่อง, according to ถูกต้องเพราะใช้คู่กันเสมอเมื่ออ้างอิงแหล่งข้อมูล)"
          },
          {
            "id": "set1-15",
            "segments": [
              {
                "text": "Apple Inc. plans to begin "
              },
              {
                "text": "manufacturing",
                "n": 1
              },
              {
                "text": " the iPhone 14 in India "
              },
              {
                "text": "about",
                "n": 2
              },
              {
                "text": " two months after the product's initial release "
              },
              {
                "text": "out of",
                "n": 3
              },
              {
                "text": " China, "
              },
              {
                "text": "narrowed",
                "n": 4
              },
              {
                "text": " the gap between the two countries."
              }
            ],
            "answer": 4,
            "explanation": "narrowed ไม่ถูกต้อง แก้ไขเป็น narrowing เพราะอยู่หลังเครื่องหมาย comma และทำหน้าที่ขยายประโยคหลัก จึงต้องอยู่ในรูป Present Participle (manufacturing ถูกต้องเพราะหลัง begin ตามด้วย V-ing ได้, about ถูกต้องเพราะบอกจำนวนคร่าวๆ, out of ถูกต้องเพราะหมายถึงออกจากประเทศจีน)"
          },
          {
            "id": "set1-16",
            "segments": [
              {
                "text": "In recent years",
                "n": 1
              },
              {
                "text": ", Beijing has threatened force "
              },
              {
                "text": "against",
                "n": 2
              },
              {
                "text": " the Taiwanese "
              },
              {
                "text": "if",
                "n": 3
              },
              {
                "text": " they declare "
              },
              {
                "text": "independent",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 4,
            "explanation": "independent ไม่ถูกต้อง แก้ไขเป็น independence เพราะ declare ต้องการกรรมที่เป็นคำนาม (declare independence แปลว่า ประกาศอิสรภาพ) (In recent years ถูกต้องเพราะหมายถึงไม่กี่ปีที่ผ่านมา, against ถูกต้องเพราะเป็น preposition บอกการต่อต้าน, if ถูกต้องเพราะบอกเงื่อนไข)"
          },
          {
            "id": "set1-17",
            "segments": [
              {
                "text": "Japanese obsession "
              },
              {
                "text": "with",
                "n": 1
              },
              {
                "text": " packaging has "
              },
              {
                "text": "culture roots",
                "n": 2
              },
              {
                "text": " related to concepts of "
              },
              {
                "text": "presentation",
                "n": 3
              },
              {
                "text": " and respect, especially when "
              },
              {
                "text": "giving gifts",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 2,
            "explanation": "culture roots ไม่ถูกต้อง แก้ไขเป็น cultural roots เพราะต้องใช้ Adjective (cultural) ขยายคำนาม roots (with ถูกต้องเพราะ obsession ใช้คู่กับ with, presentation ถูกต้องเพราะเป็นคำนาม, giving gifts ถูกต้องเพราะตามหลัง when สามารถตามด้วย V-ing ได้)"
          },
          {
            "id": "set1-18",
            "segments": [
              {
                "text": "While",
                "n": 1
              },
              {
                "text": " the impact on humans "
              },
              {
                "text": "are",
                "n": 2
              },
              {
                "text": " still unknown, microplastics "
              },
              {
                "text": "have been detected",
                "n": 3
              },
              {
                "text": " in blood, placenta, and "
              },
              {
                "text": "breast milk",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 2,
            "explanation": "are ไม่ถูกต้อง แก้ไขเป็น is เพราะประธานคือ the impact ซึ่งเป็นเอกพจน์ (While ถูกต้องเพราะเชื่อมประโยคความหมาย ในขณะที่, have been detected ถูกต้องเพราะเป็น Passive Voice, breast milk ถูกต้องเพราะหมายถึงน้ำนมแม่)"
          },
          {
            "id": "set1-19",
            "segments": [
              {
                "text": "Air New Zealand say that the "
              },
              {
                "text": "worse",
                "n": 1
              },
              {
                "text": " of the coronavirus crisis "
              },
              {
                "text": "is now",
                "n": 2
              },
              {
                "text": " behind them, "
              },
              {
                "text": "even though",
                "n": 3
              },
              {
                "text": " they posted annual losses for a third year "
              },
              {
                "text": "in a row",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 1,
            "explanation": "worse ไม่ถูกต้อง แก้ไขเป็น worst เพราะมี the นำหน้า บ่งบอกการเปรียบเทียบขั้นสูงสุด (is now ถูกต้องเพราะแสดง Present Tense, even though ถูกต้องเพราะตามด้วยประโยคได้, in a row ถูกต้องเพราะแปลว่า ต่อเนื่องติดต่อกัน)"
          },
          {
            "id": "set1-20",
            "segments": [
              {
                "text": "With vast distances and "
              },
              {
                "text": "lack of",
                "n": 1
              },
              {
                "text": " an inter-city rail network, flying is the only "
              },
              {
                "text": "realistic",
                "n": 2
              },
              {
                "text": " way to "
              },
              {
                "text": "get around",
                "n": 3
              },
              {
                "text": " Greenland if you are "
              },
              {
                "text": "on",
                "n": 4
              },
              {
                "text": " a hurry."
              }
            ],
            "answer": 4,
            "explanation": "on ไม่ถูกต้อง แก้ไขเป็น in เพราะสำนวนที่แปลว่ากำลังรีบร้อนคือ in a hurry (lack of ถูกต้องเพราะทำหน้าที่คำนามใช้กับคำนาม, realistic ถูกต้องเพราะเป็น Adjective ขยาย way, get around ถูกต้องเพราะแปลว่า เดินทางไปรอบๆ)"
          },
          {
            "id": "set1-21",
            "segments": [
              {
                "text": "People who increased the "
              },
              {
                "text": "amount",
                "n": 1
              },
              {
                "text": " of alcohol they drank had a "
              },
              {
                "text": "higher",
                "n": 2
              },
              {
                "text": " risk of all cancers than the group that "
              },
              {
                "text": "did",
                "n": 3
              },
              {
                "text": " no changes to their "
              },
              {
                "text": "drinking habits",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 3,
            "explanation": "did ไม่ถูกต้อง แก้ไขเป็น made เพราะสำนวนที่แปลว่า ไม่เปลี่ยนแปลงอะไรเลย คือ made no changes (amount ถูกต้องเพราะใช้กับคำนามนับไม่ได้ alcohol, higher ถูกต้องเพราะมี than ตามหลังบ่งบอกขั้นกว่า, drinking habits ถูกต้องเพราะ drinking เป็น Adjective ขยาย habits)"
          },
          {
            "id": "set1-22",
            "segments": [
              {
                "text": "Mack Rutherford has "
              },
              {
                "text": "broken",
                "n": 1
              },
              {
                "text": " two Guinness World Records, becoming the youngest person to fly "
              },
              {
                "text": "around",
                "n": 2
              },
              {
                "text": " the world solo, "
              },
              {
                "text": "as well",
                "n": 3
              },
              {
                "text": " the youngest "
              },
              {
                "text": "to circumnavigate",
                "n": 4
              },
              {
                "text": " the globe in a microlight plane."
              }
            ],
            "answer": 3,
            "explanation": "as well ไม่ถูกต้อง แก้ไขเป็น as well as เพราะต้องการสื่อว่า นอกจากจะเป็นคนที่อายุน้อยที่สุดที่บินรอบโลกแล้ว ยังเป็นคนที่อายุน้อยที่สุดที่บินด้วยเครื่องบินไมโครไลต์ด้วย (broken ถูกต้องเพราะอยู่ในรูป Present Perfect Tense, around ถูกต้อง, to circumnavigate ถูกต้อง)"
          },
          {
            "id": "set1-23",
            "segments": [
              {
                "text": "China issued its first national "
              },
              {
                "text": "drought",
                "n": 1
              },
              {
                "text": " last week, after "
              },
              {
                "text": "areas",
                "n": 2
              },
              {
                "text": " in the Yangtze Delta region and Sichuan in "
              },
              {
                "text": "southwest",
                "n": 3
              },
              {
                "text": " China experienced weeks of extreme "
              },
              {
                "text": "hot",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 4,
            "explanation": "hot ไม่ถูกต้อง แก้ไขเป็น heat เพราะตำแหน่งนี้ต้องการคำนาม (สังเกตจาก extreme ที่เป็น Adjective นำหน้า) (drought ถูกต้องเพราะแปลว่า ความแห้งแล้ง และเป็นคำนาม, areas ถูกต้องเพราะความแห้งแล้งเกิดในหลายพื้นที่จึงเป็นพหูพจน์, southwest ถูกต้องเพราะเป็น Adjective ขยาย China)"
          },
          {
            "id": "set1-24",
            "segments": [
              {
                "text": "Britney Spears has released her "
              },
              {
                "text": "first",
                "n": 1
              },
              {
                "text": " new music since "
              },
              {
                "text": "being released",
                "n": 2
              },
              {
                "text": " from a conservatorship that "
              },
              {
                "text": "controlled",
                "n": 3
              },
              {
                "text": " almost every "
              },
              {
                "text": "aspects",
                "n": 4
              },
              {
                "text": " of her life."
              }
            ],
            "answer": 4,
            "explanation": "aspects ไม่ถูกต้อง แก้ไขเป็น aspect เพราะ every ต้องตามด้วยคำนามเอกพจน์ (first ถูกต้อง, being released ถูกต้องเพราะหมายถึงได้รับการปลดปล่อยจากการควบคุม เป็น Passive Voice, controlled ถูกต้องเพราะการควบคุมจบลงแล้วในอดีต)"
          },
          {
            "id": "set1-25",
            "segments": [
              {
                "text": "A few",
                "n": 1
              },
              {
                "text": " years ago, the 'dopamine fast' trend found "
              },
              {
                "text": "a number of",
                "n": 2
              },
              {
                "text": " followers "
              },
              {
                "text": "especially",
                "n": 3
              },
              {
                "text": " in the tech industry, "
              },
              {
                "text": "as",
                "n": 4
              },
              {
                "text": " Silicon Valley."
              }
            ],
            "answer": 4,
            "explanation": "as ไม่ถูกต้อง แก้ไขเป็น such as เพราะต้องการยกตัวอย่างอุตสาหกรรมเทคโนโลยี (A few ถูกต้องเพราะตามด้วยคำนามพหูพจน์เสมอ, a number of ถูกต้องเพราะต้องการคำนามพหูพจน์, especially ถูกต้องเพราะเป็น Adverb ขยายประโยค)"
          },
          {
            "id": "set1-26",
            "segments": [
              {
                "text": "Anyone "
              },
              {
                "text": "they",
                "n": 1
              },
              {
                "text": " can suffer "
              },
              {
                "text": "under",
                "n": 2
              },
              {
                "text": " the isolation of remote work, spending "
              },
              {
                "text": "workdays",
                "n": 3
              },
              {
                "text": " with only a webcam to contact people they "
              },
              {
                "text": "once",
                "n": 4
              },
              {
                "text": " saw all the time."
              }
            ],
            "answer": 1,
            "explanation": "they ไม่ถูกต้อง แก้ไขโดยตัดออก เพราะประธานของประโยคนี้คือ Anyone ซึ่งไม่จำเป็นต้องมี Pronoun ซ้ำตามหลัง (under ถูกต้องเพราะ under the isolation แปลว่า ภายใต้การแยกตัว, workdays ถูกต้องเพราะแปลว่า วันทำงาน, once ถูกต้องเพราะเป็น Adverb ขยายกริยา saw)"
          },
          {
            "id": "set1-27",
            "segments": [
              {
                "text": "Pakistan is racing to prevent "
              },
              {
                "text": "further loss",
                "n": 1
              },
              {
                "text": " of life from floodwater, threatening "
              },
              {
                "text": "to cover",
                "n": 2
              },
              {
                "text": " up to "
              },
              {
                "text": "the",
                "n": 3
              },
              {
                "text": " third of the country of 220 million people "
              },
              {
                "text": "by the end of",
                "n": 4
              },
              {
                "text": " the monsoon season."
              }
            ],
            "answer": 3,
            "explanation": "the ไม่ถูกต้อง แก้ไขเป็น a เพราะความหมายในโจทย์คือน้ำท่วมเศษ 1 ใน 3 ของพื้นที่ (a third) ไม่ใช่อันดับที่ 3 (the third) (further loss ถูกต้องเพราะ further ขยาย loss, to cover ถูกต้องเพราะตามหลัง threatening, by the end of ถูกต้องเพราะแปลว่า ภายในช่วงเวลาสิ้นสุด)"
          },
          {
            "id": "set1-28",
            "segments": [
              {
                "text": "Although there are campaigns "
              },
              {
                "text": "warn",
                "n": 1
              },
              {
                "text": " parents about the "
              },
              {
                "text": "dangers",
                "n": 2
              },
              {
                "text": " of small lithium batteries, visits to emergency rooms "
              },
              {
                "text": "as a result of",
                "n": 3
              },
              {
                "text": " battery poisonings keep "
              },
              {
                "text": "increasing",
                "n": 4
              },
              {
                "text": " every year."
              }
            ],
            "answer": 1,
            "explanation": "warn ไม่ถูกต้อง แก้ไขเป็น warning เพราะทำหน้าที่ขยายคำนาม campaigns จึงต้องเป็น Present Participle (dangers ถูกต้องเพราะเป็นคำนามพหูพจน์, as a result of ถูกต้องเพราะเป็นสำนวนแปลว่า เป็นผลมาจาก, increasing ถูกต้องเพราะ keep ตามด้วย V-ing)"
          },
          {
            "id": "set1-29",
            "segments": [
              {
                "text": "South Korean authorities "
              },
              {
                "text": "admitted",
                "n": 1
              },
              {
                "text": " that they "
              },
              {
                "text": "had not",
                "n": 2
              },
              {
                "text": " guidelines to handle the huge crowds that gathered for Halloween festivities in Itaewon where "
              },
              {
                "text": "over",
                "n": 3
              },
              {
                "text": " 100 people have died in a crush among huge "
              },
              {
                "text": "crowds",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 2,
            "explanation": "had not ไม่ถูกต้อง แก้ไขเป็น had no เพราะคำที่ตามมาคือ guidelines ซึ่งเป็นคำนาม ไม่ใช่กริยา (admitted ถูกต้องเพราะเหตุการณ์จบลงแล้ว, over ถูกต้องเพราะนำหน้าตัวเลขแปลว่า มากกว่า, crowds ถูกต้องเพราะหมายถึงผู้คนหลายกลุ่ม)"
          },
          {
            "id": "set1-30",
            "segments": [
              {
                "text": "A doctor has been suspended from "
              },
              {
                "text": "duty",
                "n": 1
              },
              {
                "text": " at Chiang Saen Hospital and "
              },
              {
                "text": "is facing",
                "n": 2
              },
              {
                "text": " an investigation "
              },
              {
                "text": "from",
                "n": 3
              },
              {
                "text": " the Medical Council of Thailand after a loud "
              },
              {
                "text": "argue",
                "n": 4
              },
              {
                "text": " with a patient."
              }
            ],
            "answer": 4,
            "explanation": "argue ไม่ถูกต้อง แก้ไขเป็น argument เพราะตำแหน่งนี้ต้องการคำนามตามโครงสร้าง a + Adjective (loud) + Noun (duty ถูกต้องเพราะแปลว่า หน้าที่, is facing ถูกต้องเพราะประธานเอกพจน์ A doctor, from ถูกต้องเพราะเป็นบุพบทบอกว่าถูกสอบสวนโดยหน่วยงานใด)"
          }
        ]
      },
      {
        "title": "แบบทดสอบชุดที่ 2",
        "referenceHtml": "<p>แบบทดสอบเสมือนจริงรูปแบบ Error Identification จำนวน 30 ข้อ พร้อมเฉลยและคำอธิบายละเอียดทุกตัวเลือก</p>",
        "questions": [
          {
            "id": "set2-1",
            "segments": [
              {
                "text": "Chinese authorities charged 28 people and "
              },
              {
                "text": "detained",
                "n": 1
              },
              {
                "text": " eight police officials "
              },
              {
                "text": "followed",
                "n": 2
              },
              {
                "text": " a brutal assault on "
              },
              {
                "text": "a group of",
                "n": 3
              },
              {
                "text": " women earlier this summer that provoked widespread "
              },
              {
                "text": "anger",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 2,
            "explanation": "followed ไม่ถูกต้อง แก้ไขเป็น following เพราะประโยคมีกริยาแท้แล้ว 2 ตัวคือ charged และ detained ตำแหน่งนี้จึงควรเป็นคำบุพบทที่แปลว่า หลังจาก (detained ถูกต้องเพราะเป็น Past Tense, a group of ถูกต้องเพราะเป็นการบอกขอบเขตของประโยคในรูปเอกพจน์, anger ถูกต้องเพราะเป็นคำนามตามหลัง widespread)"
          },
          {
            "id": "set2-2",
            "segments": [
              {
                "text": "Negative economic "
              },
              {
                "text": "grow",
                "n": 1
              },
              {
                "text": " in this year's first half "
              },
              {
                "text": "may be",
                "n": 2
              },
              {
                "text": " a foreshock to a "
              },
              {
                "text": "much deeper",
                "n": 3
              },
              {
                "text": " downturn that could "
              },
              {
                "text": "last",
                "n": 4
              },
              {
                "text": " into 2024."
              }
            ],
            "answer": 1,
            "explanation": "grow ไม่ถูกต้อง แก้ไขเป็น growth เพราะตำแหน่งนี้ต้องการคำนามมาเป็นประธานของประโยค (may be ถูกต้องเพราะ may ตามด้วย Infinitive, much deeper ถูกต้องเพราะ much เพิ่มระดับ deeper ให้มากขึ้น, last ถูกต้องเพราะเป็นกริยาแปลว่า คงอยู่ยาวนานต่อเนื่อง)"
          },
          {
            "id": "set2-3",
            "segments": [
              {
                "text": "Lazada is preparing "
              },
              {
                "text": "to make",
                "n": 1
              },
              {
                "text": " its first foray into Europe, building on the "
              },
              {
                "text": "success",
                "n": 2
              },
              {
                "text": " of e-commerce platform in Southeast Asia, "
              },
              {
                "text": "that",
                "n": 3
              },
              {
                "text": " it seeks to "
              },
              {
                "text": "take on",
                "n": 4
              },
              {
                "text": " rivals such as Amazon and Shopee."
              }
            ],
            "answer": 3,
            "explanation": "that ไม่ถูกต้อง แก้ไขเป็น as เพราะถ้าใช้ that เป็น Relative Pronoun จะไม่มีเครื่องหมาย comma นำหน้า ในที่นี้ที่ถูกต้องคือ as ซึ่งแปลว่า ในขณะที่ (to make ถูกต้องเพราะ prepare ตามด้วย To-Infinitive, success ถูกต้องเพราะเป็นคำนามตามหลัง the, take on ถูกต้องเพราะแปลว่า แข่งขัน ต่อสู้)"
          },
          {
            "id": "set2-4",
            "segments": [
              {
                "text": "The pandemic and technological "
              },
              {
                "text": "advancements",
                "n": 1
              },
              {
                "text": " have begun to shift "
              },
              {
                "text": "some",
                "n": 2
              },
              {
                "text": " employers' mindsets to one "
              },
              {
                "text": "so that",
                "n": 3
              },
              {
                "text": " is more open and "
              },
              {
                "text": "trusting",
                "n": 4
              },
              {
                "text": " of their workforces."
              }
            ],
            "answer": 3,
            "explanation": "so that ไม่ถูกต้อง แก้ไขเป็น that เพราะตำแหน่งนี้ต้องการ Relative Pronoun ที่ขยายคำว่า one (mindsets) ไม่ใช่คำเชื่อม so that (advancements ถูกต้องเพราะเป็นคำนามพหูพจน์ตามหลัง technological, some ถูกต้องเพราะเป็น Adjective, trusting ถูกต้องเพราะขนานกับ open ตามหลักโครงสร้างคู่ขนาน)"
          },
          {
            "id": "set2-5",
            "segments": [
              {
                "text": "When Microsoft "
              },
              {
                "text": "trialed",
                "n": 1
              },
              {
                "text": " a four-day week with no "
              },
              {
                "text": "lost",
                "n": 2
              },
              {
                "text": " of pay in their Japan office, the company claimed "
              },
              {
                "text": "productivity",
                "n": 3
              },
              {
                "text": " went up "
              },
              {
                "text": "by",
                "n": 4
              },
              {
                "text": " 40% and electricity costs fell by 23%."
              }
            ],
            "answer": 2,
            "explanation": "lost ไม่ถูกต้อง แก้ไขเป็น loss เพราะหลัง no ต้องตามด้วยคำนาม (trialed ถูกต้องเพราะเป็นกริยาแปลว่า ทดลอง อยู่ในรูป Past Tense, productivity ถูกต้องเพราะเป็นคำนามตามหลัง claimed, by ถูกต้องเพราะใช้นำหน้าตัวเลขบอกปริมาณ)"
          },
          {
            "id": "set2-6",
            "segments": [
              {
                "text": "After steady rain from "
              },
              {
                "text": "late",
                "n": 1
              },
              {
                "text": " Tuesday afternoon, "
              },
              {
                "text": "many",
                "n": 2
              },
              {
                "text": " roads were inundated with "
              },
              {
                "text": "the",
                "n": 3
              },
              {
                "text": " water reported to be over one meter "
              },
              {
                "text": "depth",
                "n": 4
              },
              {
                "text": " in some areas of Pathum Thani."
              }
            ],
            "answer": 4,
            "explanation": "depth ไม่ถูกต้อง แก้ไขเป็น deep เพราะตำแหน่งนี้ต้องการ Adjective ขยาย one meter เพื่อบอกว่าน้ำท่วมลึกกว่า 1 เมตร (late ถูกต้องเพราะบอกช่วงเวลาบ่ายวันอังคาร, many ถูกต้องเพราะขยายคำนามพหูพจน์ roads, the ถูกต้องเพราะชี้เฉพาะว่าเป็นน้ำจากฝนที่ตก)"
          },
          {
            "id": "set2-7",
            "segments": [
              {
                "text": "An old woman who slipped and "
              },
              {
                "text": "fell",
                "n": 1
              },
              {
                "text": " into the Chao Phraya River was found alive and "
              },
              {
                "text": "save",
                "n": 2
              },
              {
                "text": " four hours later and 20 kilometers downstream, "
              },
              {
                "text": "clutching",
                "n": 3
              },
              {
                "text": " the side of a "
              },
              {
                "text": "floating",
                "n": 4
              },
              {
                "text": " fish basket."
              }
            ],
            "answer": 2,
            "explanation": "save ไม่ถูกต้อง แก้ไขเป็น safe เพราะตำแหน่งนี้ต้องการ Adjective ตามหลังกริยา found (ขนานกับ alive ที่เป็น Adjective เช่นกัน) (fell ถูกต้องเพราะเป็นกริยาช่อง 2 ไม่เติม -ed, clutching ถูกต้องเพราะเป็น Present Participle ขยายประธาน, floating ถูกต้องเพราะเป็น Adjective ขยาย fish basket)"
          },
          {
            "id": "set2-8",
            "segments": [
              {
                "text": "A football match at Cadiz was halted "
              },
              {
                "text": "for",
                "n": 1
              },
              {
                "text": " 50 minutes "
              },
              {
                "text": "because",
                "n": 2
              },
              {
                "text": " a fan "
              },
              {
                "text": "had",
                "n": 3
              },
              {
                "text": " a medical emergency and "
              },
              {
                "text": "taken",
                "n": 4
              },
              {
                "text": " to hospital by ambulance."
              }
            ],
            "answer": 4,
            "explanation": "taken ไม่ถูกต้อง แก้ไขเป็น was taken เพราะตำแหน่งนี้ต้องการกริยาแท้ในรูป Passive Voice (แฟนบอลถูกนำตัวส่งโรงพยาบาล) (for ถูกต้องเพราะบอกความยาวนานของเวลา, because ถูกต้องเพราะตามด้วยประโยค, had ถูกต้องเพราะบ่งบอกเหตุการณ์ในอดีต)"
          },
          {
            "id": "set2-9",
            "segments": [
              {
                "text": "Japan has barred "
              },
              {
                "text": "most",
                "n": 1
              },
              {
                "text": " foreign visitors to "
              },
              {
                "text": "slow",
                "n": 2
              },
              {
                "text": " the spread of Covid, however "
              },
              {
                "text": "the number of",
                "n": 3
              },
              {
                "text": " foreign tourists "
              },
              {
                "text": "was allowed",
                "n": 4
              },
              {
                "text": " to enter the country was raised to 50,000 per day this month."
              }
            ],
            "answer": 4,
            "explanation": "was allowed ไม่ถูกต้อง แก้ไขเป็น allowed เพราะประโยคมีกริยาแท้อยู่แล้วคือ was raised ตำแหน่งนี้จึงควรลดรูปเป็น Past Participle เพื่อขยายประธาน (most ถูกต้องเพราะตามด้วยคำนามได้ แปลว่า ส่วนใหญ่, slow ถูกต้องเพราะเป็นกริยาใน To-Infinitive, the number of ถูกต้องเพราะแปลว่า จำนวน)"
          },
          {
            "id": "set2-10",
            "segments": [
              {
                "text": "An associate professor "
              },
              {
                "text": "at",
                "n": 1
              },
              {
                "text": " Portland State University, "
              },
              {
                "text": "whose",
                "n": 2
              },
              {
                "text": " specializes in East Asian popular culture said that the "
              },
              {
                "text": "use",
                "n": 3
              },
              {
                "text": " of English terms in the lyrics to Korean songs may sound "
              },
              {
                "text": "too sexual",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 2,
            "explanation": "whose ไม่ถูกต้อง แก้ไขเป็น who เพราะ specializes ทำหน้าที่เป็นกริยา จึงต้องใช้ Relative Pronoun who ไม่ใช่ whose ซึ่งแสดงความเป็นเจ้าของ (at ถูกต้องเพราะบอกว่าอาจารย์ทำงานอยู่ที่มหาวิทยาลัยใด, use ถูกต้องเพราะเป็นคำนามตามหลัง the, too sexual ถูกต้องเพราะหมายถึงสื่อไปในทางเพศมากเกินไป)"
          },
          {
            "id": "set2-11",
            "segments": [
              {
                "text": "The government has instructed agencies to monitor "
              },
              {
                "text": "flood-prone",
                "n": 1
              },
              {
                "text": " areas and "
              },
              {
                "text": "clearly",
                "n": 2
              },
              {
                "text": " possible "
              },
              {
                "text": "obstructions",
                "n": 3
              },
              {
                "text": " in drainage systems "
              },
              {
                "text": "as well as",
                "n": 4
              },
              {
                "text": " riverbanks."
              }
            ],
            "answer": 2,
            "explanation": "clearly ไม่ถูกต้อง แก้ไขเป็น clear เพราะตามหลักโครงสร้างคู่ขนานกับ to monitor ที่อยู่ก่อนหน้า (to monitor ... and (to) clear ...) ตำแหน่งนี้จึงควรเป็นกริยา clear (flood-prone ถูกต้องเพราะเป็น Adjective ขยาย areas, obstructions ถูกต้องเพราะเป็นคำนามพหูพจน์ แปลว่า สิ่งกีดขวาง, as well as ถูกต้องเพราะมีความหมายเหมือน and)"
          },
          {
            "id": "set2-12",
            "segments": [
              {
                "text": "After slamming "
              },
              {
                "text": "into",
                "n": 1
              },
              {
                "text": " the Philippines, Noru is predicted to make landfall as "
              },
              {
                "text": "a",
                "n": 2
              },
              {
                "text": " super typhoon before Friday and "
              },
              {
                "text": "then",
                "n": 3
              },
              {
                "text": " subside to a severe typhoon as it "
              },
              {
                "text": "made",
                "n": 4
              },
              {
                "text": " its way inland."
              }
            ],
            "answer": 4,
            "explanation": "made ไม่ถูกต้อง แก้ไขเป็น makes เพราะพายุยังไม่เข้าสู่แผ่นดิน และกริยาอื่นในประโยคอยู่ในรูป Present Simple Tense ทั้งหมด (into ถูกต้องเพราะหมายถึงพายุพัดเข้าสู่ประเทศ, a ถูกต้องเพราะนำหน้าคำนาม typhoon, then ถูกต้องเพราะแปลว่า หลังจากนั้น)"
          },
          {
            "id": "set2-13",
            "segments": [
              {
                "text": "Robots can work "
              },
              {
                "text": "virtually",
                "n": 1
              },
              {
                "text": " nonstop, "
              },
              {
                "text": "unlike",
                "n": 2
              },
              {
                "text": " human workers who need "
              },
              {
                "text": "costly",
                "n": 3
              },
              {
                "text": " perks like health benefits, "
              },
              {
                "text": "times",
                "n": 4
              },
              {
                "text": " to eat and sleep, and wages."
              }
            ],
            "answer": 4,
            "explanation": "times ไม่ถูกต้อง แก้ไขเป็น time เพราะตำแหน่งนี้หมายถึงเวลาในการกินและนอน ซึ่งเป็นคำนามนับไม่ได้ ไม่เติม s (virtually ถูกต้องเพราะเป็น Adverb ขยาย nonstop, unlike ถูกต้องเพราะนำหน้าคำนามได้, costly ถูกต้องเพราะเป็น Adjective ขยาย perks)"
          },
          {
            "id": "set2-14",
            "segments": [
              {
                "text": "Although",
                "n": 1
              },
              {
                "text": " their potential benefits, many people "
              },
              {
                "text": "are worried",
                "n": 2
              },
              {
                "text": " about the effects that "
              },
              {
                "text": "automation",
                "n": 3
              },
              {
                "text": " of simple labor tasks may have on the "
              },
              {
                "text": "economy",
                "n": 4
              },
              {
                "text": " and workforce."
              }
            ],
            "answer": 1,
            "explanation": "Although ไม่ถูกต้อง แก้ไขเป็น Despite เพราะ Although ต้องตามด้วยประโยค แต่ their potential benefits เป็นเพียงกลุ่มคำนาม (are worried ถูกต้องเพราะบ่งบอกความรู้สึกของประธาน, automation ถูกต้องเพราะเป็นคำนามตามหลัง that, economy ถูกต้องเพราะเป็นคำนามตามหลัง the)"
          },
          {
            "id": "set2-15",
            "segments": [
              {
                "text": "Every years",
                "n": 1
              },
              {
                "text": ", more businesses replace their "
              },
              {
                "text": "unskilled",
                "n": 2
              },
              {
                "text": " workers with automated machines and "
              },
              {
                "text": "these",
                "n": 3
              },
              {
                "text": " workers have to learn new skills to "
              },
              {
                "text": "adapt to",
                "n": 4
              },
              {
                "text": " changes."
              }
            ],
            "answer": 1,
            "explanation": "Every years ไม่ถูกต้อง แก้ไขเป็น Every year เพราะ every ต้องตามด้วยคำนามเอกพจน์ (unskilled ถูกต้องเพราะเป็น Adjective ขยาย workers, these ถูกต้องเพราะนำหน้าคำนามพหูพจน์, adapt to ถูกต้องเพราะกริยา adapt ใช้กับบุพบท to เสมอ)"
          },
          {
            "id": "set2-16",
            "segments": [
              {
                "text": "Various methods "
              },
              {
                "text": "have developed",
                "n": 1
              },
              {
                "text": " to support the global campaign "
              },
              {
                "text": "against",
                "n": 2
              },
              {
                "text": " climate change, ranging "
              },
              {
                "text": "from",
                "n": 3
              },
              {
                "text": " adopting carbon capture to "
              },
              {
                "text": "using",
                "n": 4
              },
              {
                "text": " clean energy at the petroleum platform."
              }
            ],
            "answer": 1,
            "explanation": "have developed ไม่ถูกต้อง แก้ไขเป็น have been developed เพราะประธาน methods ไม่สามารถทำกริยานี้ได้เอง จึงต้องอยู่ในรูป Passive Voice (against ถูกต้องเพราะเป็นบุพบทแปลว่า ต่อต้าน, from ถูกต้องเพราะใช้คู่กับ range เสมอ, using ถูกต้องเพราะขนานกับ adopting ตามโครงสร้าง from...to...)"
          },
          {
            "id": "set2-17",
            "segments": [
              {
                "text": "Tom Brady and supermodel Gisele Bündchen are getting "
              },
              {
                "text": "divorced",
                "n": 1
              },
              {
                "text": " after 13 years of "
              },
              {
                "text": "marry",
                "n": 2
              },
              {
                "text": " but they "
              },
              {
                "text": "will continue",
                "n": 3
              },
              {
                "text": " to work together as parents to "
              },
              {
                "text": "take care of",
                "n": 4
              },
              {
                "text": " their children."
              }
            ],
            "answer": 2,
            "explanation": "marry ไม่ถูกต้อง แก้ไขเป็น marriage เพราะตำแหน่งนี้ต้องการคำนามตามหลัง years of (divorced ถูกต้องเพราะตามหลัง getting บ่งบอกการเปลี่ยนสถานะ, will continue ถูกต้องเพราะบ่งบอกอนาคต, take care of ถูกต้องเพราะแปลว่า ดูแล)"
          },
          {
            "id": "set2-18",
            "segments": [
              {
                "text": "Most ancient "
              },
              {
                "text": "civilizations",
                "n": 1
              },
              {
                "text": " had no word for the color blue, "
              },
              {
                "text": "possibly",
                "n": 2
              },
              {
                "text": " because blue doesn't appear much in nature – "
              },
              {
                "text": "they",
                "n": 3
              },
              {
                "text": " aren't blue animals and blue flowers are "
              },
              {
                "text": "mostly",
                "n": 4
              },
              {
                "text": " human creations."
              }
            ],
            "answer": 3,
            "explanation": "they ไม่ถูกต้อง แก้ไขเป็น there เพราะ they ไม่ได้หมายถึงคำนามใดในประโยค ต้องใช้ there aren't เพื่อให้ความหมายสมบูรณ์ (civilizations ถูกต้องเพราะเติม s ตามหลัง Most, possibly ถูกต้องเพราะขยาย because, mostly ถูกต้องเพราะเป็น Adverb ขยาย are)"
          },
          {
            "id": "set2-19",
            "segments": [
              {
                "text": "Regions, "
              },
              {
                "text": "which",
                "n": 1
              },
              {
                "text": " like South-East Asia or Latin America "
              },
              {
                "text": "have seen",
                "n": 2
              },
              {
                "text": " a great "
              },
              {
                "text": "increase",
                "n": 3
              },
              {
                "text": " in online enrollment and a "
              },
              {
                "text": "rise",
                "n": 4
              },
              {
                "text": " in university applications after the pandemic."
              }
            ],
            "answer": 1,
            "explanation": "which ไม่ถูกต้อง แก้ไขเป็น like (ตัดคำเชื่อมออก) เพราะความหมายต้องการยกตัวอย่างภูมิภาค ไม่ใช่การใช้ Relative Pronoun (have seen ถูกต้องเพราะเป็น Present Perfect Tense บ่งบอกเหตุการณ์ต่อเนื่องถึงปัจจุบัน, increase ถูกต้องเพราะเป็นคำนามตามหลัง great, rise ถูกต้องเพราะเป็นคำนามตามหลัง a)"
          },
          {
            "id": "set2-20",
            "segments": [
              {
                "text": "Small mammals, "
              },
              {
                "text": "including",
                "n": 1
              },
              {
                "text": " rodents, "
              },
              {
                "text": "may",
                "n": 2
              },
              {
                "text": " swarm locally on occasions probably "
              },
              {
                "text": "because",
                "n": 3
              },
              {
                "text": " their predators have become "
              },
              {
                "text": "rarely",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 4,
            "explanation": "rarely ไม่ถูกต้อง แก้ไขเป็น rare เพราะ become เป็น Linking Verb ต้องตามด้วย Adjective (including ถูกต้องเพราะแปลว่า รวมทั้ง, may ถูกต้องเพราะเป็นกริยาของประธาน small mammals, because ถูกต้องเพราะบอกเหตุผล)"
          },
          {
            "id": "set2-21",
            "segments": [
              {
                "text": "In Japan and Australia, hydroquinone "
              },
              {
                "text": "has been removed",
                "n": 1
              },
              {
                "text": " from "
              },
              {
                "text": "over-the-counter",
                "n": 2
              },
              {
                "text": " skin products and substituted with other chemicals "
              },
              {
                "text": "due to",
                "n": 3
              },
              {
                "text": " concerns about "
              },
              {
                "text": "healthy risks",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 4,
            "explanation": "healthy risks ไม่ถูกต้อง แก้ไขเป็น health risks เพราะ health risks เป็นคำที่ใช้คู่กันแปลว่า ความเสี่ยงทางด้านสุขภาพ ไม่ใช่ healthy ที่แปลว่า มีสุขภาพดี (has been removed ถูกต้องเพราะเป็น Passive Voice, over-the-counter ถูกต้องเพราะแปลว่า ที่วางขายทั่วไป, due to ถูกต้องเพราะเป็นบุพบทแสดงเหตุผล)"
          },
          {
            "id": "set2-22",
            "segments": [
              {
                "text": "Lightening creams are not effectively "
              },
              {
                "text": "regulating",
                "n": 1
              },
              {
                "text": " in Jamaica, "
              },
              {
                "text": "where",
                "n": 2
              },
              {
                "text": " roadside vendors are selling "
              },
              {
                "text": "unlabeled",
                "n": 3
              },
              {
                "text": " tubes and ointments from cardboard boxes along sidewalks in market "
              },
              {
                "text": "districts",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 1,
            "explanation": "regulating ไม่ถูกต้อง แก้ไขเป็น regulated เพราะประธานคือครีมฟอกผิวขาวซึ่งถูกควบคุม ไม่ได้ทำกริยาเอง จึงต้องเป็น Passive Voice (where ถูกต้องเพราะขยายสถานที่จาไมกา, unlabeled ถูกต้องเพราะเป็น Adjective ขยาย tubes, districts ถูกต้องเพราะหมายถึงหลายเขต)"
          },
          {
            "id": "set2-23",
            "segments": [
              {
                "text": "With "
              },
              {
                "text": "hundreds",
                "n": 1
              },
              {
                "text": " of homes flooded in Windsor, "
              },
              {
                "text": "safe officials",
                "n": 2
              },
              {
                "text": " are warning residents to wear protective "
              },
              {
                "text": "clothing",
                "n": 3
              },
              {
                "text": " like rubber boots every time they "
              },
              {
                "text": "walk through",
                "n": 4
              },
              {
                "text": " floodwater."
              }
            ],
            "answer": 2,
            "explanation": "safe officials ไม่ถูกต้อง แก้ไขเป็น safety officials เพราะหมายถึงเจ้าหน้าที่ดูแลความปลอดภัย ซึ่งเป็น Compound Noun (hundreds ถูกต้องเพราะเป็นจำนวน, clothing ถูกต้องเพราะเป็นคำนามตามหลัง protective, walk through ถูกต้องเพราะแปลว่า เดินฝ่า)"
          },
          {
            "id": "set2-24",
            "segments": [
              {
                "text": "Emirates "
              },
              {
                "text": "have announced",
                "n": 1
              },
              {
                "text": " plans to debut its new A380 aircraft "
              },
              {
                "text": "featuring",
                "n": 2
              },
              {
                "text": " its "
              },
              {
                "text": "latest",
                "n": 3
              },
              {
                "text": " premium economy cabins to "
              },
              {
                "text": "five new cities",
                "n": 4
              },
              {
                "text": " from December."
              }
            ],
            "answer": 1,
            "explanation": "have announced ไม่ถูกต้อง แก้ไขเป็น has announced เพราะประธาน Emirates เป็นเอกพจน์ (สังเกตจากคำสรรพนาม its ในประโยค) (featuring ถูกต้องเพราะเป็น Present Participle ขยาย aircraft, latest ถูกต้องเพราะหมายถึงรุ่นล่าสุด, five new cities ถูกต้องเพราะหมายถึงเส้นทางการบิน 5 เมืองใหม่)"
          },
          {
            "id": "set2-25",
            "segments": [
              {
                "text": "Research",
                "n": 1
              },
              {
                "text": " shows that melatonin may "
              },
              {
                "text": "help",
                "n": 2
              },
              {
                "text": " people with insomnia to fall asleep "
              },
              {
                "text": "slight",
                "n": 3
              },
              {
                "text": " faster and may have bigger benefits for "
              },
              {
                "text": "those",
                "n": 4
              },
              {
                "text": " with delayed sleep phase syndrome."
              }
            ],
            "answer": 3,
            "explanation": "slight ไม่ถูกต้อง แก้ไขเป็น slightly เพราะตำแหน่งนี้ต้องการ Adverb ขยาย faster ซึ่งเป็น Adjective (Research ถูกต้องเพราะเป็นคำนามนับไม่ได้ ไม่ต้องมี Article นำหน้า, help ถูกต้องเพราะ may ตามด้วยกริยารูป infinitive without to, those ถูกต้องเพราะใช้แทนบุคคลอื่นๆ)"
          },
          {
            "id": "set2-26",
            "segments": [
              {
                "text": "Guangzhou "
              },
              {
                "text": "has become",
                "n": 1
              },
              {
                "text": " the first Chinese city "
              },
              {
                "text": "and bans",
                "n": 2
              },
              {
                "text": " the sale and consumption of dog and cat meat "
              },
              {
                "text": "after",
                "n": 3
              },
              {
                "text": " the coronavirus outbreak "
              },
              {
                "text": "was linked",
                "n": 4
              },
              {
                "text": " to wildlife meat."
              }
            ],
            "answer": 2,
            "explanation": "and bans ไม่ถูกต้อง แก้ไขเป็น to ban เพราะต้องการสื่อว่ากวางโจวเป็นเมืองแรกของจีนที่จะห้ามการขายและรับประทานเนื้อหมาและแมว (has become ถูกต้องเพราะประธานเอกพจน์อยู่ในรูป Present Perfect Tense, after ถูกต้องเพราะบอกลำดับเหตุการณ์, was linked ถูกต้องเพราะแปลว่า ถูกเชื่อมโยงเข้ากับเนื้อสัตว์ป่า)"
          },
          {
            "id": "set2-27",
            "segments": [
              {
                "text": "Many "
              },
              {
                "text": "nonfood",
                "n": 1
              },
              {
                "text": " companies in Thailand have started to diversify into "
              },
              {
                "text": "wellness food",
                "n": 2
              },
              {
                "text": " "
              },
              {
                "text": "despite",
                "n": 3
              },
              {
                "text": " the pandemic has encourages people to "
              },
              {
                "text": "take more",
                "n": 4
              },
              {
                "text": " food supplement."
              }
            ],
            "answer": 3,
            "explanation": "despite ไม่ถูกต้อง แก้ไขเป็น because เพราะความหมายในประโยคเป็นเหตุผล (โรคระบาดส่งเสริมให้คนกินอาหารเสริมมากขึ้น) ไม่ใช่ความขัดแย้งกัน (nonfood ถูกต้องเพราะเป็น Adjective ขยาย companies, wellness food ถูกต้องเพราะเป็นคำนามเฉพาะ, take more ถูกต้องเพราะ take ตามหลัง to และ more ขยาย food)"
          },
          {
            "id": "set2-28",
            "segments": [
              {
                "text": "Walk",
                "n": 1
              },
              {
                "text": " is a great form of "
              },
              {
                "text": "exercise",
                "n": 2
              },
              {
                "text": " that can help you lose weight and is "
              },
              {
                "text": "associated with",
                "n": 3
              },
              {
                "text": " "
              },
              {
                "text": "lower",
                "n": 4
              },
              {
                "text": " levels of belly fat."
              }
            ],
            "answer": 1,
            "explanation": "Walk ไม่ถูกต้อง แก้ไขเป็น Walking เพราะตำแหน่งนี้ต้องการคำนามมาเป็นประธานของประโยค (exercise ถูกต้องเพราะเป็นคำนามตามหลัง of, associated with ถูกต้องเพราะกริยา associated ใช้กับ with, lower ถูกต้องเพราะขยายคำนาม levels)"
          },
          {
            "id": "set2-29",
            "segments": [
              {
                "text": "In major cities, the "
              },
              {
                "text": "major",
                "n": 1
              },
              {
                "text": " source of air pollution is "
              },
              {
                "text": "not longer",
                "n": 2
              },
              {
                "text": " from factories, "
              },
              {
                "text": "rather",
                "n": 3
              },
              {
                "text": " it is from vehicle "
              },
              {
                "text": "exhaust pipes",
                "n": 4
              },
              {
                "text": "."
              }
            ],
            "answer": 2,
            "explanation": "not longer ไม่ถูกต้อง แก้ไขเป็น no longer เพราะสำนวนที่แปลว่า ไม่อีกต่อไปแล้ว คือ no longer (major ถูกต้องเพราะเป็น Adjective ขยาย source, rather ถูกต้องเพราะแปลว่า เกิดจากสิ่งอื่นมากกว่า, exhaust pipes ถูกต้องเพราะแปลว่า ท่อไอเสีย)"
          },
          {
            "id": "set2-30",
            "segments": [
              {
                "text": "When you go to a dental clinic for "
              },
              {
                "text": "anything",
                "n": 1
              },
              {
                "text": " from a regular cleaning to a root canal, the dentists "
              },
              {
                "text": "use generally",
                "n": 2
              },
              {
                "text": " a small, "
              },
              {
                "text": "hand-held",
                "n": 3
              },
              {
                "text": " concave mirror to see teeth and "
              },
              {
                "text": "other areas",
                "n": 4
              },
              {
                "text": " in your mouth."
              }
            ],
            "answer": 2,
            "explanation": "use generally ไม่ถูกต้อง แก้ไขเป็น generally use เพราะ generally เป็น Adverb ที่ปกติจะวางไว้หน้าคำกริยา (anything ถูกต้องเพราะกล่าวถึงโดยรวม, hand-held ถูกต้องเพราะเป็น Adjective ขยาย concave mirror, other areas ถูกต้องเพราะ other ตามด้วยคำนามพหูพจน์)"
          }
        ]
      }
    ],
  },
};
