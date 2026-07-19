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
    overviewHtml: "<h4>CU-TEP Reading Test Outline</h4>\n<h4>\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e02\u0e2d\u0e07\u0e04\u0e33\u0e16\u0e32\u0e21 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e04\u0e33\u0e16\u0e32\u0e21</h4>\n<p>\u0e43\u0e19\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a CU-TEP \u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19 (Reading) \u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e16\u0e39\u0e01\u0e41\u0e1a\u0e48\u0e07\u0e2d\u0e2d\u0e01\u0e40\u0e1b\u0e47\u0e19 3 \u0e2a\u0e48\u0e27\u0e19 \u0e44\u0e14\u0e49\u0e41\u0e01\u0e48 \u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e40\u0e15\u0e34\u0e21\u0e04\u0e33\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 (Cloze Test) \u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e31\u0e49\u0e19 (Short Passage) \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e22\u0e32\u0e27 (Long Passage) \u0e01\u0e32\u0e23\u0e2a\u0e2d\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e19\u0e35\u0e49\u0e43\u0e0a\u0e49\u0e40\u0e27\u0e25\u0e32\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 70 \u0e19\u0e32\u0e17\u0e35 (1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07 10 \u0e19\u0e32\u0e17\u0e35) \u0e21\u0e35\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 60 \u0e02\u0e49\u0e2d \u0e42\u0e14\u0e22\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e40\u0e15\u0e34\u0e21\u0e04\u0e33\u0e43\u0e19\u0e0a\u0e48\u0e2d\u0e07\u0e27\u0e48\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 (Cloze Test) \u0e21\u0e35\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 15 \u0e02\u0e49\u0e2d \u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e31\u0e49\u0e19\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 5 \u0e02\u0e49\u0e2d \u0e41\u0e25\u0e30\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e22\u0e32\u0e27\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 40 \u0e02\u0e49\u0e2d (\u0e23\u0e27\u0e21\u0e40\u0e1b\u0e47\u0e19 45 \u0e02\u0e49\u0e2d\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07) \u0e17\u0e31\u0e49\u0e07\u0e19\u0e35\u0e49\u0e08\u0e33\u0e19\u0e27\u0e19\u0e02\u0e49\u0e2d\u0e02\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e25\u0e30\u0e2a\u0e48\u0e27\u0e19\u0e2d\u0e32\u0e08\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19\u0e44\u0e1b\u0e43\u0e19\u0e41\u0e15\u0e48\u0e25\u0e30\u0e1b\u0e35 \u0e41\u0e15\u0e48\u0e08\u0e30\u0e44\u0e21\u0e48\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19\u0e21\u0e32\u0e01</p>\n\n<p>\u0e43\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19 (Reading Test) \u0e08\u0e30\u0e21\u0e35\u0e01\u0e32\u0e23\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e2b\u0e25\u0e31\u0e01\u0e44\u0e27\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c\u0e43\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e02\u0e2d\u0e07 Cloze Test \u0e01\u0e32\u0e23\u0e17\u0e33\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e19\u0e35\u0e49 \u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e08\u0e30\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e43\u0e19 3 \u0e14\u0e49\u0e32\u0e19 \u0e04\u0e37\u0e2d \u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e14\u0e49\u0e32\u0e19\u0e04\u0e33\u0e28\u0e31\u0e1e\u0e17\u0e4c (Vocabulary) \u0e04\u0e27\u0e32\u0e21\u0e2a\u0e2d\u0e14\u0e04\u0e25\u0e49\u0e2d\u0e07\u0e02\u0e2d\u0e07\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e42\u0e14\u0e22\u0e23\u0e27\u0e21 (Meaning Coherence) \u0e41\u0e25\u0e30\u0e2b\u0e25\u0e31\u0e01\u0e44\u0e27\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c (Grammar) \u0e42\u0e14\u0e22\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e08\u0e30\u0e40\u0e19\u0e49\u0e19\u0e43\u0e2b\u0e49\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e41\u0e25\u0e49\u0e27\u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e33\u0e2b\u0e23\u0e37\u0e2d\u0e27\u0e25\u0e35\u0e08\u0e32\u0e01\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e17\u0e35\u0e48\u0e43\u0e2b\u0e49\u0e21\u0e32 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e15\u0e34\u0e21\u0e43\u0e2b\u0e49\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e2a\u0e21\u0e1a\u0e39\u0e23\u0e13\u0e4c\u0e17\u0e31\u0e49\u0e07\u0e14\u0e49\u0e32\u0e19\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e41\u0e25\u0e30\u0e2b\u0e25\u0e31\u0e01\u0e44\u0e27\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29 \u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e43\u0e19\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e21\u0e31\u0e01\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e17\u0e35\u0e48\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e43\u0e01\u0e25\u0e49\u0e40\u0e04\u0e35\u0e22\u0e07\u0e01\u0e31\u0e19 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e33\u0e17\u0e35\u0e48\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e01\u0e31\u0e1a\u0e1a\u0e23\u0e34\u0e1a\u0e17 (Word Choice) \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e17\u0e33\u0e04\u0e27\u0e32\u0e21\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e27\u0e48\u0e32\u0e04\u0e33\u0e43\u0e14\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e17\u0e35\u0e48\u0e08\u0e30\u0e17\u0e33\u0e43\u0e2b\u0e49\u0e22\u0e48\u0e2d\u0e2b\u0e19\u0e49\u0e32\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e2a\u0e21\u0e1a\u0e39\u0e23\u0e13\u0e4c \u0e2a\u0e23\u0e38\u0e1b\u0e41\u0e19\u0e27\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19 (Reading) \u0e44\u0e14\u0e49\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49</p>\n\n<p><b>1. Reading-Cloze Test</b> \u0e43\u0e19 CU-TEP \u0e08\u0e30\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e2b\u0e25\u0e31\u0e01 6 \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e04\u0e37\u0e2d</p>\n<ul>\n<li>\u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e04\u0e27\u0e32\u0e21 (Relative Pronouns)</li>\n<li>\u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21\u0e0a\u0e35\u0e49\u0e40\u0e09\u0e1e\u0e32\u0e30 (Demonstrative Pronoun)</li>\n<li>\u0e04\u0e33\u0e04\u0e38\u0e13\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 (Possessive Adjectives)</li>\n<li>\u0e04\u0e33\u0e2a\u0e31\u0e19\u0e18\u0e32\u0e19 \u0e2b\u0e23\u0e37\u0e2d \u0e04\u0e33\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21 (Subordinating Conjunctions)</li>\n<li>\u0e04\u0e33\u0e1a\u0e38\u0e1e\u0e1a\u0e17 (Prepositions)</li>\n<li>\u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21 (Word Choice)</li>\n</ul>\n\n<p><b>2. Reading Short Passages</b> (\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e31\u0e49\u0e19) \u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e31\u0e49\u0e19\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e08\u0e30\u0e16\u0e39\u0e01\u0e04\u0e31\u0e14\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e21\u0e32\u0e08\u0e32\u0e01\u0e2b\u0e25\u0e32\u0e01\u0e2b\u0e25\u0e32\u0e22\u0e2a\u0e32\u0e02\u0e32 \u0e2d\u0e32\u0e08\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e04\u0e27\u0e49\u0e32\u0e17\u0e32\u0e07\u0e27\u0e34\u0e0a\u0e32\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e21\u0e48\u0e46 \u0e2b\u0e23\u0e37\u0e2d\u0e1b\u0e23\u0e30\u0e40\u0e14\u0e47\u0e19\u0e17\u0e32\u0e07\u0e2a\u0e31\u0e07\u0e04\u0e21 \u0e01\u0e48\u0e2d\u0e19\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e04\u0e27\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a\u0e17\u0e38\u0e01\u0e02\u0e49\u0e2d\u0e01\u0e48\u0e2d\u0e19 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e08\u0e38\u0e14\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e2d\u0e07\u0e2b\u0e32\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e44\u0e21\u0e48\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e01\u0e48\u0e2d\u0e19\u0e15\u0e2d\u0e1a\u0e04\u0e33\u0e16\u0e32\u0e21 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1a\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 \u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e19\u0e35\u0e49\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 5 \u0e02\u0e49\u0e2d</p>\n\n<p><b>3. Reading Long Passages</b> (\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e22\u0e32\u0e27) \u0e21\u0e35\u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e04\u0e25\u0e49\u0e32\u0e22\u0e01\u0e31\u0e1a\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e31\u0e49\u0e19 \u0e40\u0e1e\u0e35\u0e22\u0e07\u0e41\u0e15\u0e48\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e30\u0e21\u0e35\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 (Details) \u0e2b\u0e23\u0e37\u0e2d\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e04\u0e27\u0e32\u0e21\u0e04\u0e34\u0e14\u0e2b\u0e25\u0e31\u0e01 (Supporting Idea) \u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19 \u0e43\u0e19\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a CU-TEP \u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e41\u0e22\u0e01\u0e41\u0e22\u0e30\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e43\u0e2b\u0e49\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e25\u0e38\u0e21 \u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e23\u0e08\u0e31\u0e1a\u0e43\u0e08\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e25\u0e31\u0e01\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e43\u0e2b\u0e49\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08</p>\n\n<p>\u0e2b\u0e25\u0e31\u0e01\u0e43\u0e19\u0e01\u0e32\u0e23\u0e17\u0e33\u0e04\u0e27\u0e32\u0e21\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 (Passage) \u0e21\u0e35\u0e04\u0e33\u0e16\u0e32\u0e21\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e2b\u0e25\u0e31\u0e01 6 \u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17 \u0e04\u0e37\u0e2d</p>\n<ul>\n<li>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e2b\u0e32\u0e41\u0e19\u0e27\u0e04\u0e34\u0e14\u0e2b\u0e25\u0e31\u0e01\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u2014 \u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e40\u0e19\u0e49\u0e19\u0e16\u0e32\u0e21\u0e2b\u0e32\u0e43\u0e08\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e21\u0e31\u0e01\u0e21\u0e35\u0e04\u0e33\u0e16\u0e32\u0e21\u0e27\u0e48\u0e32 Main...</li>\n</ul>\n\n\n<h4>\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e2b\u0e25\u0e31\u0e01 6 \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e02\u0e2d\u0e07 Reading-Cloze Test</h4>\n\n<p><b>1. \u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e04\u0e27\u0e32\u0e21 (Relative Pronouns)</b></p>\n<p>\u0e1b\u0e23\u0e30\u0e1e\u0e31\u0e19\u0e18\u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21 (Relative Pronouns) \u0e04\u0e37\u0e2d \u0e04\u0e33\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e41\u0e17\u0e19\u0e04\u0e33\u0e19\u0e32\u0e21\u0e17\u0e35\u0e48\u0e01\u0e25\u0e48\u0e32\u0e27\u0e16\u0e36\u0e07\u0e21\u0e32\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32 \u0e41\u0e25\u0e30\u0e17\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e17\u0e35\u0e48\u0e15\u0e32\u0e21\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e02\u0e49\u0e32\u0e01\u0e31\u0e1a\u0e04\u0e33\u0e19\u0e32\u0e21\u0e02\u0e49\u0e32\u0e07\u0e2b\u0e19\u0e49\u0e32</p>\n\n<p><b>2. \u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21\u0e0a\u0e35\u0e49\u0e40\u0e09\u0e1e\u0e32\u0e30 (Demonstrative Pronoun)</b></p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>\u0e04\u0e33</th><th>\u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49</th><th>\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07</th></tr>\n<tr><td>This</td><td>\u0e43\u0e0a\u0e49\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e19\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e01\u0e25\u0e49\u0e15\u0e31\u0e27 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c (Singular)</td><td>This football season will be better than the last one.</td></tr>\n<tr><td>These</td><td>\u0e43\u0e0a\u0e49\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e19\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e01\u0e25\u0e49\u0e15\u0e31\u0e27 \u0e40\u0e1b\u0e47\u0e19\u0e1e\u0e2b\u0e39\u0e1e\u0e08\u0e19\u0e4c (Plural)</td><td>These dresses will not fit your size.<br>I am planning to finish these paper works.</td></tr>\n<tr><td>That</td><td>\u0e43\u0e0a\u0e49\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e19\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e01\u0e25\u0e49 (\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e01\u0e25) \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c (Singular)</td><td>I think that history lesson by Prof. Chuck is very interesting.</td></tr>\n<tr><td>Those</td><td>\u0e43\u0e0a\u0e49\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e19\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e01\u0e25\u0e49 (\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e01\u0e25) \u0e40\u0e1b\u0e47\u0e19\u0e1e\u0e2b\u0e39\u0e1e\u0e08\u0e19\u0e4c (Plural)</td><td>Those helicopters fly from Bangkok to Singapore.<br>Do you think those fruits are good?</td></tr>\n<tr><td>One</td><td>\u0e43\u0e0a\u0e49\u0e41\u0e17\u0e19\u0e04\u0e33\u0e19\u0e32\u0e21\u0e19\u0e31\u0e1a\u0e44\u0e14\u0e49 (Countable nouns) \u0e17\u0e31\u0e49\u0e07\u0e04\u0e19 \u0e2a\u0e31\u0e15\u0e27\u0e4c \u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07 \u0e17\u0e35\u0e48\u0e01\u0e25\u0e48\u0e32\u0e27\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c (Singular)</td><td>What kind of computer do you like? The cheap one.<br>Jim will go to Andy's birthday party. Let's go to that one.</td></tr>\n<tr><td>Ones</td><td>\u0e43\u0e0a\u0e49\u0e41\u0e17\u0e19\u0e04\u0e33\u0e19\u0e32\u0e21\u0e19\u0e31\u0e1a\u0e44\u0e14\u0e49 (Countable nouns) \u0e17\u0e31\u0e49\u0e07\u0e04\u0e19 \u0e2a\u0e31\u0e15\u0e27\u0e4c \u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07 \u0e17\u0e35\u0e48\u0e01\u0e25\u0e48\u0e32\u0e27\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e1b\u0e47\u0e19\u0e1e\u0e2b\u0e39\u0e1e\u0e08\u0e19\u0e4c (Plural)</td><td>I applied to several schools, both local and international ones.</td></tr>\n</table></div>\n<p class=\"note\">\u0e19\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49 this/these \u0e0a\u0e35\u0e49\u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e41\u0e25\u0e49\u0e27 \u0e22\u0e31\u0e07\u0e43\u0e0a\u0e49\u0e2d\u0e49\u0e32\u0e07\u0e16\u0e36\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27\u0e44\u0e14\u0e49\u0e14\u0e49\u0e27\u0e22 \u0e40\u0e0a\u0e48\u0e19 \"This football season will be better than the last one.\" (\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e24\u0e14\u0e39\u0e01\u0e32\u0e25\u0e41\u0e02\u0e48\u0e07\u0e02\u0e31\u0e19\u0e1f\u0e38\u0e15\u0e1a\u0e2d\u0e25\u0e04\u0e23\u0e31\u0e49\u0e07\u0e19\u0e35\u0e49\u0e17\u0e35\u0e48\u0e01\u0e33\u0e25\u0e31\u0e07\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19) \u0e41\u0e25\u0e30 \"I think those history lessons by Prof. Chuck are very interesting.\" (\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e1a\u0e17\u0e40\u0e23\u0e35\u0e22\u0e19\u0e27\u0e34\u0e0a\u0e32\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e4c\u0e2b\u0e25\u0e32\u0e22\u0e46 \u0e04\u0e25\u0e32\u0e2a\u0e17\u0e35\u0e48\u0e40\u0e23\u0e35\u0e22\u0e19\u0e08\u0e1a\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27\u0e08\u0e32\u0e01\u0e2d\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c\u0e0a\u0e31\u0e04)</p>\n\n<p><b>3. \u0e04\u0e33\u0e04\u0e38\u0e13\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 (Possessive Adjectives)</b></p>\n<p>\u0e04\u0e33\u0e04\u0e38\u0e13\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07\u0e43\u0e19\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e43\u0e2b\u0e49\u0e2a\u0e2d\u0e14\u0e04\u0e25\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e1e\u0e39\u0e14\u0e41\u0e25\u0e30\u0e08\u0e33\u0e19\u0e27\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e33\u0e19\u0e32\u0e21\u0e17\u0e35\u0e48\u0e15\u0e32\u0e21\u0e21\u0e32 \u0e14\u0e31\u0e07\u0e15\u0e32\u0e23\u0e32\u0e07</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>\u0e1c\u0e39\u0e49\u0e1e\u0e39\u0e14 (Person)</th><th>\u0e08\u0e33\u0e19\u0e27\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e33\u0e19\u0e32\u0e21</th><th>Possessive Adjective</th><th>\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07</th></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 1 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 (1st person)</td><td>\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c</td><td>my</td><td>My house is the white one down the street.</td></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 1 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 \u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e25\u0e38\u0e48\u0e21 (1st person - Group)</td><td>\u0e1e\u0e2b\u0e39\u0e1e\u0e08\u0e19\u0e4c</td><td>our</td><td>Our team will win the football match this time.</td></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 2 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 (2nd person)</td><td>\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c</td><td>your</td><td>I think your computer is slower than it used to be.</td></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 3 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 \u0e40\u0e1b\u0e47\u0e19\u0e1c\u0e39\u0e49\u0e0a\u0e32\u0e22 (3rd person - Male)</td><td>\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c</td><td>his</td><td>Yesterday, Chai got a new cell phone from his cousin.</td></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 3 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 \u0e40\u0e1b\u0e47\u0e19\u0e1c\u0e39\u0e49\u0e2b\u0e0d\u0e34\u0e07 (3rd person - Female)</td><td>\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c</td><td>her</td><td>Her friend, Jenny, is getting married this week.</td></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 3 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 \u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e21\u0e35\u0e40\u0e1e\u0e28</td><td>\u0e40\u0e2d\u0e01\u0e1e\u0e08\u0e19\u0e4c</td><td>its</td><td>People are now aware of Genetically Modified Organisms and its danger.</td></tr>\n<tr><td>\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48 3 \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07 \u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e25\u0e38\u0e48\u0e21 (3rd person - Group)</td><td>\u0e1e\u0e2b\u0e39\u0e1e\u0e08\u0e19\u0e4c</td><td>their</td><td>The rock band, Radiohead, will perform at Bangna center. I bet their fans will be overwhelming.</td></tr>\n</table></div>\n\n<p><b>4. \u0e04\u0e33\u0e2a\u0e31\u0e19\u0e18\u0e32\u0e19 \u0e2b\u0e23\u0e37\u0e2d \u0e04\u0e33\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21 (Subordinate Conjunctions)</b></p>\n<p>\u0e04\u0e33\u0e2a\u0e31\u0e19\u0e18\u0e32\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e40\u0e23\u0e35\u0e22\u0e01\u0e2d\u0e35\u0e01\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e27\u0e48\u0e32 Subordinator \u0e43\u0e0a\u0e49\u0e19\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e2d\u0e19\u0e38\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04 (Subordinate Clause/Dependent Clause) \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e17\u0e35\u0e48\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e2a\u0e21\u0e1a\u0e39\u0e23\u0e13\u0e4c \u0e15\u0e49\u0e2d\u0e07\u0e2d\u0e32\u0e28\u0e31\u0e22\u0e2d\u0e35\u0e01\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e21\u0e32\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a\u0e16\u0e49\u0e27\u0e19 \u0e42\u0e14\u0e22\u0e04\u0e33\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e2a\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e40\u0e02\u0e49\u0e32\u0e14\u0e49\u0e27\u0e22\u0e01\u0e31\u0e19</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Conjunction</th><th>\u0e41\u0e1b\u0e25\u0e27\u0e48\u0e32</th></tr>\n<tr><td>after</td><td>\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01</td></tr>\n<tr><td>although</td><td>\u0e16\u0e36\u0e07\u0e41\u0e21\u0e49\u0e27\u0e48\u0e32</td></tr>\n<tr><td>as</td><td>\u0e02\u0e13\u0e30\u0e17\u0e35\u0e48, \u0e14\u0e31\u0e07\u0e17\u0e35\u0e48, \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e27\u0e48\u0e32</td></tr>\n<tr><td>as if</td><td>\u0e23\u0e32\u0e27\u0e01\u0e31\u0e1a, \u0e1b\u0e23\u0e30\u0e2b\u0e19\u0e36\u0e48\u0e07, \u0e40\u0e2a\u0e21\u0e37\u0e2d\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07</td></tr>\n<tr><td>as long as</td><td>\u0e15\u0e23\u0e32\u0e1a\u0e40\u0e17\u0e48\u0e32\u0e17\u0e35\u0e48</td></tr>\n<tr><td>as though</td><td>\u0e23\u0e32\u0e27\u0e01\u0e31\u0e1a</td></tr>\n<tr><td>because</td><td>\u0e40\u0e1e\u0e23\u0e32\u0e30\u0e27\u0e48\u0e32, \u0e40\u0e1e\u0e23\u0e32\u0e30</td></tr>\n<tr><td>before</td><td>\u0e01\u0e48\u0e2d\u0e19</td></tr>\n<tr><td>even if</td><td>\u0e41\u0e21\u0e49\u0e27\u0e48\u0e32, \u0e16\u0e49\u0e32\u0e2b\u0e32\u0e01\u0e27\u0e48\u0e32</td></tr>\n<tr><td>even though</td><td>\u0e17\u0e31\u0e49\u0e07\u0e46 \u0e17\u0e35\u0e48, \u0e16\u0e36\u0e07\u0e41\u0e21\u0e49\u0e27\u0e48\u0e32</td></tr>\n<tr><td>so that</td><td>\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e27\u0e48\u0e32</td></tr>\n<tr><td>that</td><td>\u0e17\u0e35\u0e48, \u0e27\u0e48\u0e32</td></tr>\n<tr><td>though</td><td>\u0e16\u0e36\u0e07\u0e41\u0e21\u0e49\u0e27\u0e48\u0e32</td></tr>\n<tr><td>till</td><td>\u0e08\u0e19\u0e01\u0e27\u0e48\u0e32, \u0e08\u0e19\u0e01\u0e23\u0e30\u0e17\u0e31\u0e48\u0e07</td></tr>\n<tr><td>unless</td><td>\u0e40\u0e27\u0e49\u0e19\u0e41\u0e15\u0e48, \u0e19\u0e2d\u0e01\u0e08\u0e32\u0e01</td></tr>\n<tr><td>until</td><td>\u0e08\u0e19\u0e01\u0e27\u0e48\u0e32, \u0e08\u0e19\u0e01\u0e23\u0e30\u0e17\u0e31\u0e48\u0e07</td></tr>\n<tr><td>when</td><td>\u0e40\u0e21\u0e37\u0e48\u0e2d, \u0e02\u0e13\u0e30\u0e17\u0e35\u0e48, \u0e43\u0e19\u0e40\u0e27\u0e25\u0e32\u0e17\u0e35\u0e48</td></tr>\n<tr><td>whenever</td><td>\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e23\u0e01\u0e47\u0e15\u0e32\u0e21</td></tr>\n<tr><td>where</td><td>\u0e43\u0e19\u0e17\u0e35\u0e48\u0e0b\u0e36\u0e48\u0e07</td></tr>\n<tr><td>while</td><td>\u0e43\u0e19\u0e02\u0e13\u0e30\u0e17\u0e35\u0e48</td></tr>\n</table></div>\n<p>He went to the interview as if he had been preparing for it.<br>\nUnless Suda is present, we will cancel the seminar in 30 minutes.<br>\nMy mom goes to the supermarket every weekend so that the food will be stocked for the rest of the week.</p>\n\n<p><b>5. \u0e04\u0e33\u0e1a\u0e38\u0e1e\u0e1a\u0e17 (Prepositions)</b></p>\n<p>\u0e04\u0e33\u0e1a\u0e38\u0e1e\u0e1a\u0e17 \u0e04\u0e37\u0e2d \u0e04\u0e33\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e04\u0e33\u0e19\u0e32\u0e21 \u0e04\u0e33\u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21 \u0e04\u0e33\u0e04\u0e38\u0e13\u0e28\u0e31\u0e1e\u0e17\u0e4c \u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e33\u0e01\u0e23\u0e34\u0e22\u0e32\u0e27\u0e34\u0e40\u0e28\u0e29\u0e13\u0e4c \u0e17\u0e35\u0e48\u0e17\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e23\u0e23\u0e21\u0e02\u0e2d\u0e07\u0e1a\u0e38\u0e1e\u0e1a\u0e17 (Object of the preposition) \u0e40\u0e02\u0e49\u0e32\u0e01\u0e31\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e02\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04 \u0e21\u0e35\u0e17\u0e31\u0e49\u0e07\u0e41\u0e1a\u0e1a\u0e04\u0e33\u0e40\u0e14\u0e35\u0e22\u0e27 (One-Word Prepositions) \u0e41\u0e25\u0e30\u0e41\u0e1a\u0e1a\u0e27\u0e25\u0e35 (Phrasal Prepositions)</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>One-Word Prepositions</th></tr>\n<tr><td>About, Above, After, Against, Before, During, Except, For, Like, Of, Onto, Regarding, Since, On, Near, Across, Between, Among, Until, Upon, Within</td></tr>\n</table></div>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Phrasal Prepositions</th></tr>\n<tr><td>According to, As well as, Because of, By way of, In place of, In spite of, Instead of, Next to, On account of, Out of, With regard to</td></tr>\n</table></div>\n<p>He went to the interview as if he had been preparing for it. \u0e40\u0e02\u0e32\u0e44\u0e1b\u0e2a\u0e31\u0e21\u0e20\u0e32\u0e29\u0e13\u0e4c\u0e07\u0e32\u0e19\u0e23\u0e32\u0e27\u0e01\u0e31\u0e1a\u0e27\u0e48\u0e32\u0e40\u0e02\u0e32\u0e44\u0e14\u0e49\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21\u0e15\u0e31\u0e27\u0e44\u0e27\u0e49\u0e41\u0e25\u0e49\u0e27<br>\nUnless Suda is present, we will cancel the seminar in 30 minutes. \u0e40\u0e27\u0e49\u0e19\u0e41\u0e15\u0e48\u0e2a\u0e38\u0e14\u0e32\u0e08\u0e30\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48 \u0e1e\u0e27\u0e01\u0e40\u0e23\u0e32\u0e08\u0e30\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e01\u0e32\u0e23\u0e2a\u0e31\u0e21\u0e21\u0e19\u0e32\u0e43\u0e19\u0e2d\u0e35\u0e01 30 \u0e19\u0e32\u0e17\u0e35<br>\nMy mom goes to the supermarket every weekend so that the food will be stocked for the rest of the week. \u0e41\u0e21\u0e48\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14\u0e17\u0e38\u0e01\u0e27\u0e31\u0e19\u0e2a\u0e38\u0e14\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e08\u0e30\u0e44\u0e14\u0e49\u0e21\u0e35\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e40\u0e01\u0e47\u0e1a\u0e44\u0e27\u0e49\u0e15\u0e25\u0e2d\u0e14\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e25\u0e37\u0e2d</p>\n<p class=\"note\">\u0e04\u0e33\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e17\u0e35\u0e48\u0e04\u0e27\u0e23\u0e23\u0e39\u0e49: if (\u0e16\u0e49\u0e32\u0e2b\u0e32\u0e01\u0e27\u0e48\u0e32, \u0e2a\u0e21\u0e21\u0e38\u0e15\u0e34\u0e27\u0e48\u0e32), if only (\u0e41\u0e21\u0e49\u0e19\u0e27\u0e48\u0e32\u0e40\u0e1e\u0e35\u0e22\u0e07), in order that (\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e27\u0e48\u0e32), once (\u0e17\u0e31\u0e19\u0e17\u0e35\u0e17\u0e35\u0e48), whereas (\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e14\u0e49\u0e27\u0e22, \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e40\u0e2b\u0e15\u0e38\u0e27\u0e48\u0e32 \u2014 \u0e17\u0e32\u0e07\u0e01\u0e32\u0e23), wherever (\u0e43\u0e19\u0e17\u0e38\u0e01\u0e46 \u0e17\u0e35\u0e48), since (\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48, \u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01)</p>\n\n<p><b>6. \u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21 (Word Choice)</b></p>\n<p>\u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21 \u0e04\u0e37\u0e2d \u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e33\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e21\u0e32\u0e40\u0e15\u0e34\u0e21\u0e43\u0e19\u0e0a\u0e48\u0e2d\u0e07\u0e27\u0e48\u0e32\u0e07 \u0e42\u0e14\u0e22\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e21\u0e31\u0e01\u0e21\u0e35\u0e2b\u0e19\u0e49\u0e32\u0e15\u0e32\u0e04\u0e25\u0e49\u0e32\u0e22\u0e01\u0e31\u0e19 \u0e41\u0e15\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e1e\u0e34\u0e08\u0e32\u0e23\u0e13\u0e32\u0e1a\u0e23\u0e34\u0e1a\u0e17 (Context) \u0e02\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e17\u0e31\u0e49\u0e07\u0e14\u0e49\u0e32\u0e19\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22 (Meaning) \u0e41\u0e25\u0e30\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e17\u0e32\u0e07\u0e44\u0e27\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c (Function) \u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e01\u0e31\u0e19</p>\n<p><b>\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e17\u0e35\u0e48 1</b></p>\n<p>This report ___ how the eruption affects the surrounding terrain.<br>\n(A) discusses &nbsp; (B) creates &nbsp; (C) shows &nbsp; (D) says</p>\n<p>\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e04\u0e37\u0e2d\u0e02\u0e49\u0e2d (A) discusses \u0e40\u0e1e\u0e23\u0e32\u0e30 \"discusses\" \u0e2b\u0e21\u0e32\u0e22\u0e16\u0e36\u0e07\u0e01\u0e25\u0e48\u0e32\u0e27\u0e16\u0e36\u0e07/\u0e2d\u0e20\u0e34\u0e1b\u0e23\u0e32\u0e22\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e43\u0e19\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19 \u0e15\u0e23\u0e07\u0e01\u0e31\u0e1a\u0e1a\u0e23\u0e34\u0e1a\u0e17\u0e17\u0e35\u0e48\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07\u0e1c\u0e25\u0e01\u0e23\u0e30\u0e17\u0e1a\u0e02\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e1b\u0e30\u0e17\u0e38 \u0e2a\u0e48\u0e27\u0e19 show \u0e21\u0e31\u0e01\u0e43\u0e0a\u0e49\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e41\u0e2a\u0e14\u0e07\u0e2d\u0e2d\u0e01\u0e17\u0e32\u0e07\u0e01\u0e32\u0e22\u0e20\u0e32\u0e1e (physical action) \u0e41\u0e25\u0e30 creates/says \u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23</p>\n<p><b>\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e17\u0e35\u0e48 2</b></p>\n<p>In the past three months, a new ___ of low-priced computers has been released.<br>\n(A) newly promotion &nbsp; (B) new promotion &nbsp; (C) new promotional &nbsp; (D) newly promoted</p>\n<p>\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e04\u0e37\u0e2d\u0e02\u0e49\u0e2d (B) new promotion \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e19\u0e35\u0e49\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e19\u0e32\u0e21 (Noun) \u0e17\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e23\u0e30\u0e18\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e01\u0e23\u0e34\u0e22\u0e32 \"has been released\" \u0e08\u0e36\u0e07\u0e15\u0e49\u0e2d\u0e07\u0e02\u0e22\u0e32\u0e22\u0e14\u0e49\u0e27\u0e22\u0e04\u0e33\u0e04\u0e38\u0e13\u0e28\u0e31\u0e1e\u0e17\u0e4c \"new\" (\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48 \"newly\" \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e23\u0e34\u0e22\u0e32\u0e27\u0e34\u0e40\u0e28\u0e29\u0e13\u0e4c) \u0e2a\u0e48\u0e27\u0e19\u0e02\u0e49\u0e2d (C) \"promotional\" \u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e04\u0e38\u0e13\u0e28\u0e31\u0e1e\u0e17\u0e4c \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e04\u0e33\u0e19\u0e32\u0e21 \u0e08\u0e36\u0e07\u0e43\u0e0a\u0e49\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e43\u0e19\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e19\u0e35\u0e49</p>\n\n<h4>\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a Cloze Test 1</h4>\n<p class=\"note\">The following passage is for Questions 31\u201338</p>\n<p>The discovery of the protein, which is called TRAP and which is ___(31)___ by immune cells ___(32)___ fat tissue, provides new insights into the chronic fat tissue inflammation ___(33)___ characterizes obesity.</p>\n<p>Using both cell cultures and mice ___(34)___, the researchers have shown that TRAP ___(35)___ the formation of new fat cells and can thus precipitate the development of obesity. The results also show that patients with obesity have excessive levels of TRAP.</p>\n<p>In malignant obesity, the fat cells are enlarged and less sensitive to insulin, which can lead to high glucose levels and type II diabetes. The scientists were able to show, ___(36)___, that in mice TRAP gives rise to more benign fat cells of a normal size and metabolism.</p>\n<p>\"The protein ___(37)___ useful in the treatment of conditions involving morbid cachexia, such as certain cancer diseases,\" says Professor Goran Andersson who has led the study with Professor Peter Arner. \"The discovery can also lead to new ways of treating obesity based ___(38)___ the inhibition of this protein's effect.\"</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>#</th><th>Choices</th><th>\u0e40\u0e09\u0e25\u0e22</th></tr>\n<tr><td>31</td><td>(A) hidden (B) placed (C) secreted (D) created</td><td>(C) secreted = \u0e02\u0e31\u0e1a\u0e2d\u0e2d\u0e01\u0e21\u0e32</td></tr>\n<tr><td>32</td><td>(A) against (B) in (C) at (D) among</td><td>(B) in = \u0e0b\u0e36\u0e48\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19 (Preposition)</td></tr>\n<tr><td>33</td><td>(A) that (B) when (C) whereas (D) what</td><td>(A) that = \u0e17\u0e35\u0e48 (Relative Pronoun)</td></tr>\n<tr><td>34</td><td>(A) reports (B) studies (C) projects (D) stories</td><td>(B) studies = \u0e01\u0e32\u0e23\u0e28\u0e36\u0e01\u0e29\u0e32\u0e04\u0e49\u0e19\u0e04\u0e27\u0e49\u0e32 (Word Choice)</td></tr>\n<tr><td>35</td><td>(A) communicates (B) stimulates (C) rejects (D) motivates</td><td>(B) stimulates = \u0e01\u0e23\u0e30\u0e15\u0e38\u0e49\u0e19 (Word Choice)</td></tr>\n<tr><td>36</td><td>(A) therefore (B) though (C) as if (D) however</td><td>(D) however = \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\u0e01\u0e47\u0e15\u0e32\u0e21/\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\u0e01\u0e47\u0e14\u0e35</td></tr>\n<tr><td>37</td><td>(A) harmfully (B) extremely (C) potentially (D) superficially</td><td>(C) potentially = \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e21\u0e35\u0e28\u0e31\u0e01\u0e22\u0e20\u0e32\u0e1e/\u0e21\u0e35\u0e42\u0e2d\u0e01\u0e32\u0e2a\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1b\u0e44\u0e14\u0e49 (Word Choice)</td></tr>\n<tr><td>38</td><td>(A) on (B) at (C) upon (D) in</td><td>(A) on = \u0e1a\u0e19\u0e1e\u0e37\u0e49\u0e19\u0e10\u0e32\u0e19\u0e02\u0e2d\u0e07</td></tr>\n</table></div>\n<p class=\"note\">\u0e2a\u0e23\u0e38\u0e1b\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07: \u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e1e\u0e1a\u0e42\u0e1b\u0e23\u0e15\u0e35\u0e19\u0e17\u0e35\u0e48\u0e2b\u0e25\u0e31\u0e48\u0e07\u0e2d\u0e2d\u0e01\u0e21\u0e32\u0e08\u0e32\u0e01\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e20\u0e39\u0e21\u0e34\u0e04\u0e38\u0e49\u0e21\u0e01\u0e31\u0e19\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e22\u0e37\u0e48\u0e2d\u0e44\u0e02\u0e21\u0e31\u0e19 \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e23\u0e35\u0e22\u0e01\u0e27\u0e48\u0e32 TRAP \u0e43\u0e2b\u0e49\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e0a\u0e34\u0e07\u0e25\u0e36\u0e01\u0e43\u0e2b\u0e21\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e2d\u0e31\u0e01\u0e40\u0e2a\u0e1a\u0e40\u0e23\u0e37\u0e49\u0e2d\u0e23\u0e31\u0e07\u0e02\u0e2d\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e22\u0e37\u0e48\u0e2d\u0e44\u0e02\u0e21\u0e31\u0e19\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e02\u0e2d\u0e07\u0e42\u0e23\u0e04\u0e2d\u0e49\u0e27\u0e19 \u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e17\u0e14\u0e25\u0e2d\u0e07\u0e43\u0e19\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e40\u0e1e\u0e32\u0e30\u0e40\u0e25\u0e35\u0e49\u0e22\u0e07\u0e41\u0e25\u0e30\u0e2b\u0e19\u0e39\u0e17\u0e14\u0e25\u0e2d\u0e07 \u0e19\u0e31\u0e01\u0e27\u0e34\u0e08\u0e31\u0e22\u0e1e\u0e1a\u0e27\u0e48\u0e32 TRAP \u0e01\u0e23\u0e30\u0e15\u0e38\u0e49\u0e19\u0e01\u0e32\u0e23\u0e01\u0e48\u0e2d\u0e15\u0e31\u0e27\u0e02\u0e2d\u0e07\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e44\u0e02\u0e21\u0e31\u0e19\u0e43\u0e2b\u0e21\u0e48 \u0e41\u0e25\u0e30\u0e2d\u0e32\u0e08\u0e19\u0e33\u0e44\u0e1b\u0e2a\u0e39\u0e48\u0e01\u0e32\u0e23\u0e40\u0e01\u0e34\u0e14\u0e42\u0e23\u0e04\u0e2d\u0e49\u0e27\u0e19 \u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22\u0e42\u0e23\u0e04\u0e2d\u0e49\u0e27\u0e19\u0e21\u0e35\u0e23\u0e30\u0e14\u0e31\u0e1a TRAP \u0e2a\u0e39\u0e07\u0e01\u0e27\u0e48\u0e32\u0e1b\u0e01\u0e15\u0e34 \u0e43\u0e19\u0e42\u0e23\u0e04\u0e2d\u0e49\u0e27\u0e19\u0e23\u0e38\u0e19\u0e41\u0e23\u0e07 \u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e44\u0e02\u0e21\u0e31\u0e19\u0e21\u0e35\u0e02\u0e19\u0e32\u0e14\u0e43\u0e2b\u0e0d\u0e48\u0e41\u0e25\u0e30\u0e15\u0e2d\u0e1a\u0e2a\u0e19\u0e2d\u0e07\u0e15\u0e48\u0e2d\u0e2d\u0e34\u0e19\u0e0b\u0e39\u0e25\u0e34\u0e19\u0e19\u0e49\u0e2d\u0e22\u0e25\u0e07 \u0e19\u0e33\u0e44\u0e1b\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e19\u0e49\u0e33\u0e15\u0e32\u0e25\u0e43\u0e19\u0e40\u0e25\u0e37\u0e2d\u0e14\u0e2a\u0e39\u0e07\u0e41\u0e25\u0e30\u0e40\u0e1a\u0e32\u0e2b\u0e27\u0e32\u0e19\u0e0a\u0e19\u0e34\u0e14\u0e17\u0e35\u0e48 2 \u0e41\u0e15\u0e48\u0e43\u0e19\u0e2b\u0e19\u0e39\u0e17\u0e14\u0e25\u0e2d\u0e07 TRAP \u0e01\u0e25\u0e31\u0e1a\u0e17\u0e33\u0e43\u0e2b\u0e49\u0e40\u0e01\u0e34\u0e14\u0e40\u0e0b\u0e25\u0e25\u0e4c\u0e44\u0e02\u0e21\u0e31\u0e19\u0e02\u0e19\u0e32\u0e14\u0e1b\u0e01\u0e15\u0e34\u0e41\u0e25\u0e30\u0e21\u0e35\u0e23\u0e30\u0e1a\u0e1a\u0e40\u0e1c\u0e32\u0e1c\u0e25\u0e32\u0e0d\u0e17\u0e35\u0e48\u0e14\u0e35\u0e02\u0e36\u0e49\u0e19 \u0e28\u0e32\u0e2a\u0e15\u0e23\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c Goran Andersson \u0e1c\u0e39\u0e49\u0e19\u0e33\u0e01\u0e32\u0e23\u0e28\u0e36\u0e01\u0e29\u0e32\u0e23\u0e48\u0e27\u0e21\u0e01\u0e31\u0e1a\u0e28\u0e32\u0e2a\u0e15\u0e23\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c Peter Arner \u0e01\u0e25\u0e48\u0e32\u0e27\u0e27\u0e48\u0e32\u0e42\u0e1b\u0e23\u0e15\u0e35\u0e19\u0e19\u0e35\u0e49\u0e2d\u0e32\u0e08\u0e21\u0e35\u0e28\u0e31\u0e01\u0e22\u0e20\u0e32\u0e1e\u0e43\u0e19\u0e01\u0e32\u0e23\u0e23\u0e31\u0e01\u0e29\u0e32\u0e20\u0e32\u0e27\u0e30\u0e1c\u0e2d\u0e21\u0e41\u0e2b\u0e49\u0e07\u0e23\u0e38\u0e19\u0e41\u0e23\u0e07\u0e08\u0e32\u0e01\u0e42\u0e23\u0e04\u0e21\u0e30\u0e40\u0e23\u0e47\u0e07\u0e1a\u0e32\u0e07\u0e0a\u0e19\u0e34\u0e14 \u0e41\u0e25\u0e30\u0e2d\u0e32\u0e08\u0e19\u0e33\u0e44\u0e1b\u0e2a\u0e39\u0e48\u0e41\u0e19\u0e27\u0e17\u0e32\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e43\u0e19\u0e01\u0e32\u0e23\u0e23\u0e31\u0e01\u0e29\u0e32\u0e42\u0e23\u0e04\u0e2d\u0e49\u0e27\u0e19\u0e42\u0e14\u0e22\u0e01\u0e32\u0e23\u0e22\u0e31\u0e1a\u0e22\u0e31\u0e49\u0e07\u0e24\u0e17\u0e18\u0e34\u0e4c\u0e02\u0e2d\u0e07\u0e42\u0e1b\u0e23\u0e15\u0e35\u0e19\u0e19\u0e35\u0e49</p>\n\n<h4>\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a Cloze Test 2</h4>\n<p class=\"note\">The following passage is for Questions 39\u201345</p>\n<p>As chief of neurosurgery for a small city hospital, I've never had a phone call bring me good news, and this night held true to form. The emergency room had just ___(39)___ 2 a.m. \u2014 I will call Rachel. I ___(40)___ a rather 22-year-old convenience store clerk earlier with a rather ___(41)___ problem. She could not move her legs. According to the ER physician, Rachel noticed that she could not roll over in bed and, ___(42)___ the fog of sleep finally cleared, discovered that she had two lifeless legs where her lower extremities used to be. She lived alone and, not wishing to disturb her parents living miles away, managed to crawl to her nightstand and phone directly for an ambulance. When I arrived, Rachel was still strapped to a spinal board, the right sleeve of her nightgown rolled ___(43)___ to allow for the intravenous line. \"Does anything hurt?\" I asked. \"No,\" she said, shrugging. \"I really feel fine... except for ___(44)___ leg thing.\"</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>#</th><th>Choices</th><th>\u0e40\u0e09\u0e25\u0e22</th></tr>\n<tr><td>39</td><td>(A) at (B) on (C) during (D) in</td><td>(A) at = \u0e15\u0e2d\u0e19\u0e0a\u0e48\u0e27\u0e07\u0e40\u0e27\u0e25\u0e32 (Preposition)</td></tr>\n<tr><td>40</td><td>(A) ignored (B) brought in (C) admitted (D) accepted</td><td>(C) admitted = \u0e23\u0e31\u0e1a\u0e40\u0e02\u0e49\u0e32\u0e23\u0e31\u0e01\u0e29\u0e32\u0e43\u0e19\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 (Word Choice)</td></tr>\n<tr><td>41</td><td>(A) whose (B) who (C) whom (D) which</td><td>(C) whom = \u0e1c\u0e39\u0e49\u0e0b\u0e36\u0e48\u0e07 (Relative Pronoun)</td></tr>\n<tr><td>42</td><td>(A) new (B) annoying (C) pleasing (D) continuing</td><td>(B) annoying = \u0e19\u0e48\u0e32\u0e23\u0e33\u0e04\u0e32\u0e0d (Word Choice)</td></tr>\n<tr><td>43</td><td>(A) unless (B) if (C) because (D) when</td><td>(D) when = \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e15\u0e2d\u0e19\u0e17\u0e35\u0e48 (Subordinate Conjunction)</td></tr>\n<tr><td>44</td><td>(A) on (B) up (C) off (D) under</td><td>(B) up = \u0e21\u0e49\u0e27\u0e19\u0e02\u0e36\u0e49\u0e19</td></tr>\n<tr><td>45</td><td>(A) this (B) these (C) those (D) that</td><td>(A) this = \u0e2d\u0e31\u0e19\u0e19\u0e35\u0e49 (Demonstrative Pronoun)</td></tr>\n</table></div>\n<p class=\"note\">\u0e2a\u0e23\u0e38\u0e1b\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07: \u0e14\u0e34\u0e09\u0e31\u0e19\u0e43\u0e19\u0e10\u0e32\u0e19\u0e30\u0e2b\u0e31\u0e27\u0e2b\u0e19\u0e49\u0e32\u0e2b\u0e19\u0e48\u0e27\u0e22\u0e28\u0e31\u0e25\u0e22\u0e01\u0e23\u0e23\u0e21\u0e1b\u0e23\u0e30\u0e2a\u0e32\u0e17\u0e02\u0e2d\u0e07\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e40\u0e25\u0e47\u0e01\u0e46 \u0e41\u0e2b\u0e48\u0e07\u0e2b\u0e19\u0e36\u0e48\u0e07 \u0e44\u0e21\u0e48\u0e40\u0e04\u0e22\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e41\u0e08\u0e49\u0e07\u0e02\u0e48\u0e32\u0e27\u0e14\u0e35\u0e40\u0e25\u0e22 \u0e41\u0e25\u0e30\u0e04\u0e37\u0e19\u0e19\u0e35\u0e49\u0e01\u0e47\u0e40\u0e0a\u0e48\u0e19\u0e01\u0e31\u0e19 \u0e2b\u0e49\u0e2d\u0e07\u0e09\u0e38\u0e01\u0e40\u0e09\u0e34\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e07\u0e23\u0e31\u0e1a\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e15\u0e2d\u0e19\u0e15\u0e35\u0e2a\u0e2d\u0e07\u0e1e\u0e2d\u0e14\u0e35 \u0e14\u0e34\u0e09\u0e31\u0e19\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e41\u0e08\u0e49\u0e07\u0e43\u0e2b\u0e49\u0e44\u0e1b\u0e14\u0e39\u0e41\u0e25\u0e40\u0e23\u0e40\u0e0a\u0e25 \u0e40\u0e2a\u0e21\u0e35\u0e22\u0e19\u0e23\u0e49\u0e32\u0e19\u0e2a\u0e30\u0e14\u0e27\u0e01\u0e0b\u0e37\u0e49\u0e2d\u0e27\u0e31\u0e22 22 \u0e1b\u0e35 \u0e0b\u0e36\u0e48\u0e07\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e14\u0e49\u0e27\u0e22\u0e2d\u0e32\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e04\u0e48\u0e2d\u0e19\u0e02\u0e49\u0e32\u0e07\u0e19\u0e48\u0e32\u0e23\u0e33\u0e04\u0e32\u0e0d \u0e04\u0e37\u0e2d\u0e02\u0e22\u0e31\u0e1a\u0e02\u0e32\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49 \u0e41\u0e1e\u0e17\u0e22\u0e4c\u0e2b\u0e49\u0e2d\u0e07\u0e09\u0e38\u0e01\u0e40\u0e09\u0e34\u0e19\u0e43\u0e2b\u0e49\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e27\u0e48\u0e32\u0e40\u0e23\u0e40\u0e0a\u0e25\u0e2a\u0e31\u0e07\u0e40\u0e01\u0e15\u0e27\u0e48\u0e32\u0e15\u0e19\u0e40\u0e2d\u0e07\u0e1e\u0e25\u0e34\u0e01\u0e15\u0e31\u0e27\u0e1a\u0e19\u0e40\u0e15\u0e35\u0e22\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49 \u0e41\u0e25\u0e30\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e07\u0e48\u0e27\u0e07\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e19\u0e2d\u0e19\u0e2b\u0e25\u0e31\u0e1a\u0e08\u0e32\u0e07\u0e2b\u0e32\u0e22\u0e44\u0e1b \u0e08\u0e36\u0e07\u0e1e\u0e1a\u0e27\u0e48\u0e32\u0e02\u0e32\u0e17\u0e31\u0e49\u0e07\u0e2a\u0e2d\u0e07\u0e02\u0e49\u0e32\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e41\u0e23\u0e07\u0e40\u0e25\u0e22 \u0e40\u0e18\u0e2d\u0e2d\u0e32\u0e28\u0e31\u0e22\u0e2d\u0e22\u0e39\u0e48\u0e04\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27\u0e41\u0e25\u0e30\u0e44\u0e21\u0e48\u0e2d\u0e22\u0e32\u0e01\u0e23\u0e1a\u0e01\u0e27\u0e19\u0e1e\u0e48\u0e2d\u0e41\u0e21\u0e48\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e01\u0e25 \u0e08\u0e36\u0e07\u0e04\u0e25\u0e32\u0e19\u0e44\u0e1b\u0e42\u0e17\u0e23\u0e40\u0e23\u0e35\u0e22\u0e01\u0e23\u0e16\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e14\u0e49\u0e27\u0e22\u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07 \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e14\u0e34\u0e09\u0e31\u0e19\u0e21\u0e32\u0e16\u0e36\u0e07 \u0e40\u0e23\u0e40\u0e0a\u0e25\u0e22\u0e31\u0e07\u0e16\u0e39\u0e01\u0e21\u0e31\u0e14\u0e15\u0e34\u0e14\u0e01\u0e31\u0e1a\u0e01\u0e23\u0e30\u0e14\u0e32\u0e19\u0e23\u0e2d\u0e07\u0e2b\u0e25\u0e31\u0e07 \u0e41\u0e02\u0e19\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e04\u0e25\u0e38\u0e21\u0e19\u0e2d\u0e19\u0e02\u0e49\u0e32\u0e07\u0e02\u0e27\u0e32\u0e16\u0e39\u0e01\u0e21\u0e49\u0e27\u0e19\u0e02\u0e36\u0e49\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e1b\u0e34\u0e14\u0e17\u0e32\u0e07\u0e43\u0e2b\u0e49\u0e2a\u0e32\u0e22\u0e19\u0e49\u0e33\u0e40\u0e01\u0e25\u0e37\u0e2d \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e16\u0e32\u0e21\u0e27\u0e48\u0e32\u0e40\u0e08\u0e47\u0e1a\u0e15\u0e23\u0e07\u0e44\u0e2b\u0e19\u0e44\u0e2b\u0e21 \u0e40\u0e18\u0e2d\u0e15\u0e2d\u0e1a\u0e27\u0e48\u0e32\u0e44\u0e21\u0e48\u0e40\u0e08\u0e47\u0e1a \u0e23\u0e39\u0e49\u0e2a\u0e36\u0e01\u0e42\u0e2d\u0e40\u0e04\u0e14\u0e35 \u0e22\u0e01\u0e40\u0e27\u0e49\u0e19\u0e01\u0e47\u0e41\u0e15\u0e48\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e02\u0e32\u0e02\u0e49\u0e32\u0e07\u0e19\u0e35\u0e49\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19</p>\n\n<h4>Reading Review: Short and Long Passages</h4>\n<p>\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e2d\u0e1a CU-TEP \u0e2a\u0e48\u0e27\u0e19 Short and Long Passages \u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e1a\u0e17\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e49\u0e19\u0e41\u0e25\u0e30\u0e22\u0e32\u0e27 \u0e1a\u0e17\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e49\u0e19\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 1 \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 5 \u0e04\u0e33\u0e16\u0e32\u0e21 \u0e2a\u0e48\u0e27\u0e19\u0e1a\u0e17\u0e04\u0e27\u0e32\u0e21\u0e22\u0e32\u0e27\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 4 \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e25\u0e30 7-8 \u0e04\u0e33\u0e16\u0e32\u0e21 \u0e01\u0e48\u0e2d\u0e19\u0e2d\u0e48\u0e32\u0e19\u0e1a\u0e17\u0e04\u0e27\u0e32\u0e21 \u0e04\u0e27\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e43\u0e2b\u0e49\u0e04\u0e23\u0e1a\u0e17\u0e38\u0e01\u0e02\u0e49\u0e2d\u0e01\u0e48\u0e2d\u0e19 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e17\u0e23\u0e32\u0e1a\u0e08\u0e38\u0e14\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e33\u0e16\u0e32\u0e21\u0e41\u0e25\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e44\u0e14\u0e49\u0e15\u0e23\u0e07\u0e1b\u0e23\u0e30\u0e40\u0e14\u0e47\u0e19\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19 \u0e04\u0e33\u0e16\u0e32\u0e21\u0e43\u0e19\u0e2a\u0e48\u0e27\u0e19 Reading \u0e17\u0e31\u0e49\u0e07\u0e2a\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49 \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e41\u0e1a\u0e48\u0e07\u0e2d\u0e2d\u0e01\u0e40\u0e1b\u0e47\u0e19 6 \u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e2b\u0e25\u0e31\u0e01 \u0e14\u0e31\u0e07\u0e19\u0e35\u0e49</p>\n\n<p><b>1. \u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e16\u0e32\u0e21\u0e43\u0e08\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 (Main Idea)</b></p>\n<p>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e27\u0e48\u0e32\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e20\u0e32\u0e1e\u0e23\u0e27\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e43\u0e08\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48 \u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e1e\u0e1a\u0e1a\u0e48\u0e2d\u0e22 \u0e44\u0e14\u0e49\u0e41\u0e01\u0e48</p>\n<ul>\n<li>What is the main idea of the passage?</li>\n<li>Which of the following contains the main idea of the passage?</li>\n<li>What is the article about?</li>\n<li>What is mainly discussed in the passage?</li>\n<li>What can be the conclusion of this passage?</li>\n<li>What is the main purpose of the passage?</li>\n</ul>\n\n<p><b>2. \u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e16\u0e32\u0e21\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e02\u0e2d\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 (Detailed Questions)</b></p>\n<p>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e16\u0e32\u0e21\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e22\u0e48\u0e2d\u0e22\u0e17\u0e35\u0e48\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e43\u0e08\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e25\u0e31\u0e01 \u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e23\u0e01\u0e25\u0e31\u0e1a\u0e44\u0e1b\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e08\u0e32\u0e01\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e42\u0e14\u0e22\u0e15\u0e23\u0e07 \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e49\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27\u0e43\u0e19\u0e01\u0e32\u0e23\u0e15\u0e2d\u0e1a \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e04\u0e33\u0e16\u0e32\u0e21 \u0e44\u0e14\u0e49\u0e41\u0e01\u0e48</p>\n<ul>\n<li>Which of the following is discussed in the passage?</li>\n<li>What can the reader learn from the passage?</li>\n<li>According to the passage, ...?</li>\n</ul>\n\n<p><b>3. \u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e16\u0e32\u0e21\u0e2d\u0e49\u0e32\u0e07\u0e2d\u0e34\u0e07\u0e43\u0e19\u0e22\u0e48\u0e2d\u0e2b\u0e19\u0e49\u0e32 (Word Reference)</b></p>\n<p>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e16\u0e32\u0e21\u0e16\u0e36\u0e07\u0e04\u0e33\u0e19\u0e32\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e33\u0e2a\u0e33\u0e04\u0e31\u0e0d (keyword) \u0e17\u0e35\u0e48\u0e04\u0e33\u0e2a\u0e23\u0e23\u0e1e\u0e19\u0e32\u0e21\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e2d\u0e49\u0e32\u0e07\u0e2d\u0e34\u0e07\u0e16\u0e36\u0e07 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2b\u0e25\u0e35\u0e01\u0e40\u0e25\u0e35\u0e48\u0e22\u0e07\u0e01\u0e32\u0e23\u0e1e\u0e39\u0e14\u0e0b\u0e49\u0e33\u0e04\u0e33\u0e40\u0e14\u0e34\u0e21</p>\n<p class=\"note\">\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07: \"Mr. Suthon is trying to get a ride to Pattaya this morning from his house in Sathon. However, he might not make it on time since the traffic around the area is pretty bad.\"<br>\n\u0e04\u0e33\u0e27\u0e48\u0e32 \"he\" \u0e2b\u0e21\u0e32\u0e22\u0e16\u0e36\u0e07 Mr. Suthon \u0e41\u0e25\u0e30\u0e04\u0e33\u0e27\u0e48\u0e32 \"the area\" \u0e2b\u0e21\u0e32\u0e22\u0e16\u0e36\u0e07\u0e1a\u0e23\u0e34\u0e40\u0e27\u0e13 Sathon Rd. \u0e17\u0e35\u0e48\u0e01\u0e25\u0e48\u0e32\u0e27\u0e16\u0e36\u0e07\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32</p>\n\n<p><b>4. \u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e16\u0e2d\u0e14\u0e04\u0e27\u0e32\u0e21\u0e08\u0e32\u0e01\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 (Word/Sentence Restatement)</b></p>\n<p>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e16\u0e2d\u0e14\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e23\u0e38\u0e1b\u0e04\u0e27\u0e32\u0e21\u0e08\u0e32\u0e01\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e41\u0e15\u0e48\u0e41\u0e2a\u0e14\u0e07\u0e2d\u0e2d\u0e01\u0e21\u0e32\u0e43\u0e19\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e04\u0e33\u0e2b\u0e23\u0e37\u0e2d\u0e27\u0e25\u0e35\u0e17\u0e35\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e44\u0e1b\u0e08\u0e32\u0e01\u0e15\u0e49\u0e19\u0e09\u0e1a\u0e31\u0e1a \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e04\u0e33\u0e16\u0e32\u0e21 \u0e44\u0e14\u0e49\u0e41\u0e01\u0e48</p>\n<ul>\n<li>According to the passage, which of the following can be inferred?</li>\n<li>The author suggests that ...?</li>\n<li>What can be implied from the passage?</li>\n<li>In the first/second paragraph, we learn that ...?</li>\n<li>What does it mean by ... (\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e08\u0e32\u0e01\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07) ...?</li>\n<li>From the passage, ... (\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e08\u0e32\u0e01\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07) ... means ...?</li>\n</ul>\n\n<p><b>5. \u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e16\u0e32\u0e21\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19/\u0e1b\u0e0f\u0e34\u0e40\u0e2a\u0e18 (Affirmation/Denial Question)</b></p>\n<p>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e08\u0e30\u0e16\u0e32\u0e21\u0e2b\u0e32\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e15\u0e23\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e1a\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e01\u0e25\u0e48\u0e32\u0e27\u0e44\u0e27\u0e49\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e42\u0e14\u0e22\u0e21\u0e31\u0e01\u0e21\u0e35\u0e04\u0e33\u0e27\u0e48\u0e32 NOT \u0e2b\u0e23\u0e37\u0e2d EXCEPT \u0e43\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21 \u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e15\u0e49\u0e2d\u0e07\u0e19\u0e33\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e15\u0e48\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e44\u0e1b\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e01\u0e31\u0e1a\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e27\u0e48\u0e32\u0e15\u0e23\u0e07\u0e01\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48</p>\n<p class=\"note\">\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07: According to the passage, which of the following is not included in the accounting service?<br>\n(A) Merchandise management &nbsp; (B) Product delivery &nbsp; (C) Tax service &nbsp; (D) Issue invoice<br>\n\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e04\u0e37\u0e2d\u0e02\u0e49\u0e2d (B) Product delivery \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e25\u0e48\u0e32\u0e27\u0e16\u0e36\u0e07\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e27\u0e48\u0e32\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e25\u0e38\u0e21 merchandise management (\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32), issue invoice (\u0e01\u0e32\u0e23\u0e2d\u0e2d\u0e01\u0e43\u0e1a\u0e2a\u0e48\u0e07\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32), tax service (\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e20\u0e32\u0e29\u0e35), \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e19\u0e33\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e41\u0e25\u0e30\u0e43\u0e1a\u0e2a\u0e31\u0e48\u0e07\u0e0b\u0e37\u0e49\u0e2d\u0e40\u0e02\u0e49\u0e32\u0e10\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e0b\u0e36\u0e48\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32 (Product delivery) \u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e17\u0e35\u0e48\u0e01\u0e25\u0e48\u0e32\u0e27\u0e16\u0e36\u0e07</p>\n\n<p><b>6. \u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e16\u0e32\u0e21\u0e08\u0e38\u0e14\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e08\u0e15\u0e19\u0e32\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e35\u0e22\u0e19 (Passage Objectives and Intention)</b></p>\n<p>\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e42\u0e14\u0e22\u0e23\u0e27\u0e21\u0e17\u0e35\u0e48\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e04\u0e34\u0e14\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e15\u0e48\u0e2d\u0e22\u0e2d\u0e14\u0e08\u0e32\u0e01\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e43\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e27\u0e48\u0e32\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e35\u0e22\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2a\u0e37\u0e48\u0e2d\u0e2d\u0e30\u0e44\u0e23 \u0e21\u0e35\u0e40\u0e08\u0e15\u0e19\u0e32\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23 \u0e2b\u0e23\u0e37\u0e2d\u0e17\u0e34\u0e49\u0e07\u0e17\u0e49\u0e32\u0e22\u0e44\u0e27\u0e49\u0e43\u0e2b\u0e49\u0e04\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23 \u0e42\u0e14\u0e22\u0e08\u0e30\u0e44\u0e21\u0e48\u0e1a\u0e2d\u0e01\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e44\u0e27\u0e49\u0e15\u0e23\u0e07\u0e46 \u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e08\u0e36\u0e07\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e17\u0e31\u0e01\u0e29\u0e30\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2b\u0e32\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e43\u0e2b\u0e49\u0e44\u0e14\u0e49\u0e21\u0e32\u0e01\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e27\u0e48\u0e32\u0e08\u0e38\u0e14\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e35\u0e22\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23</p>\n<ol>\n<li>\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e27\u0e34\u0e17\u0e22\u0e32\u0e01\u0e32\u0e23 \u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35 \u0e27\u0e34\u0e0a\u0e32\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e21\u0e48\u0e46 \u2014 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e1a\u0e2d\u0e01\u0e01\u0e25\u0e48\u0e32\u0e27 (To inform)</li>\n<li>\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e21\u0e32\u0e08\u0e32\u0e01\u0e04\u0e14\u0e35\u0e2d\u0e32\u0e0a\u0e0d\u0e32\u0e01\u0e23\u0e23\u0e21 \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e02\u0e20\u0e32\u0e1e \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27\u0e42\u0e23\u0e04 \u2014 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e15\u0e37\u0e2d\u0e19 (To warn) / \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22 (To explain or describe)</li>\n<li>\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e31\u0e07\u0e04\u0e21 \u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e0a\u0e35\u0e27\u0e34\u0e15 \u0e40\u0e28\u0e23\u0e29\u0e10\u0e01\u0e34\u0e08 \u2014 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e27\u0e34\u0e08\u0e32\u0e23\u0e13\u0e4c (To analyze) / \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e04\u0e34\u0e14\u0e40\u0e2b\u0e47\u0e19 (To demonstrate) / \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e33\u0e40\u0e2a\u0e19\u0e2d (To present) / \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e0a\u0e31\u0e01\u0e08\u0e39\u0e07\u0e43\u0e08 (To convince/persuade) / \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e27\u0e34\u0e08\u0e32\u0e23\u0e13\u0e4c (To criticize)</li>\n</ol>\n<p>\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\u0e01\u0e47\u0e14\u0e35 \u0e16\u0e49\u0e32\u0e25\u0e2d\u0e07\u0e1e\u0e34\u0e08\u0e32\u0e23\u0e13\u0e32\u0e16\u0e36\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e21\u0e35\u0e08\u0e38\u0e14\u0e1b\u0e23\u0e30\u0e2a\u0e07\u0e04\u0e4c\u0e15\u0e49\u0e2d\u0e07\u0e08\u0e14\u0e08\u0e33\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e19\u0e35\u0e49 \u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e23\u0e1e\u0e34\u0e08\u0e32\u0e23\u0e13\u0e32\u0e27\u0e48\u0e32\u0e2a\u0e48\u0e27\u0e19\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e19\u0e37\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e2a\u0e36\u0e01\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e35\u0e22\u0e19 \u0e41\u0e1a\u0e48\u0e07\u0e2d\u0e2d\u0e01\u0e40\u0e1b\u0e47\u0e19 3 \u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e43\u0e2b\u0e0d\u0e48\u0e46 \u0e04\u0e37\u0e2d \u0e43\u0e19\u0e17\u0e32\u0e07\u0e1a\u0e27\u0e01 (Positive) \u0e43\u0e19\u0e17\u0e32\u0e07\u0e01\u0e25\u0e32\u0e07 (Neutral) \u0e41\u0e25\u0e30\u0e43\u0e19\u0e17\u0e32\u0e07\u0e25\u0e1a (Negative)</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Positive Attitude/Tone</th><th>Neutral Attitude/Tone</th><th>Negative Attitude/Tone</th></tr>\n<tr><td>Optimistic (\u0e17\u0e35\u0e48\u0e21\u0e2d\u0e07\u0e42\u0e25\u0e01\u0e43\u0e19\u0e41\u0e07\u0e48\u0e14\u0e35)</td><td>Indifferent (\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07, \u0e40\u0e09\u0e22\u0e46)</td><td>Anxious (\u0e17\u0e35\u0e48\u0e27\u0e34\u0e15\u0e01\u0e01\u0e31\u0e07\u0e27\u0e25)</td></tr>\n<tr><td>Passionate (\u0e17\u0e35\u0e48\u0e01\u0e23\u0e30\u0e15\u0e37\u0e2d\u0e23\u0e37\u0e2d\u0e23\u0e49\u0e19)</td><td>Impartial (\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e40\u0e02\u0e49\u0e32\u0e02\u0e49\u0e32\u0e07\u0e1d\u0e48\u0e32\u0e22\u0e43\u0e14)</td><td>Frustrated (\u0e17\u0e35\u0e48\u0e2b\u0e07\u0e38\u0e14\u0e2b\u0e07\u0e34\u0e14)</td></tr>\n</table></div>\n\n<h4>\u0e01\u0e25\u0e22\u0e38\u0e17\u0e18\u0e4c\u0e01\u0e32\u0e23\u0e17\u0e33\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19 (Strategies for Reading Test)</h4>\n<p>\u0e01\u0e32\u0e23\u0e17\u0e33\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e19\u0e31\u0e49\u0e19 \u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e15\u0e49\u0e2d\u0e07\u0e1d\u0e36\u0e01\u0e17\u0e33\u0e04\u0e27\u0e32\u0e21\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e43\u0e19\u0e40\u0e27\u0e25\u0e32\u0e17\u0e35\u0e48\u0e08\u0e33\u0e01\u0e31\u0e14 \u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e15\u0e49\u0e2d\u0e07\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2d\u0e48\u0e32\u0e19 scan \u0e2b\u0e23\u0e37\u0e2d\u0e01\u0e27\u0e32\u0e14\u0e2a\u0e32\u0e22\u0e15\u0e32\u0e2b\u0e32\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e42\u0e14\u0e22\u0e23\u0e27\u0e21\u0e02\u0e2d\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e23\u0e27\u0e14\u0e40\u0e23\u0e47\u0e27 \u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e16\u0e2d\u0e14\u0e04\u0e27\u0e32\u0e21\u0e04\u0e34\u0e14\u0e2b\u0e23\u0e37\u0e2d\u0e2b\u0e32\u0e04\u0e33\u0e2b\u0e21\u0e32\u0e22\u0e1e\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19 (matching) \u0e01\u0e47\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e35\u0e01\u0e17\u0e31\u0e01\u0e29\u0e30\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e22\u0e32\u0e27 \u0e21\u0e35\u0e40\u0e17\u0e04\u0e19\u0e34\u0e04\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49</p>\n<div class=\"tbl-wrap\"><table>\n<tr><th>Positive Tone</th><th>Negative/Critical Tone</th></tr>\n<tr><td>Cheerful (\u0e17\u0e35\u0e48\u0e2a\u0e14\u0e0a\u0e37\u0e48\u0e19, \u0e23\u0e48\u0e32\u0e40\u0e23\u0e34\u0e07)</td><td>Critical (\u0e17\u0e35\u0e48\u0e04\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e07)</td></tr>\n<tr><td>Enthusiastic (\u0e17\u0e35\u0e48\u0e01\u0e23\u0e30\u0e15\u0e37\u0e2d\u0e23\u0e37\u0e2d\u0e23\u0e49\u0e19)</td><td>Disappointed (\u0e17\u0e35\u0e48\u0e1c\u0e34\u0e14\u0e2b\u0e27\u0e31\u0e07)</td></tr>\n<tr><td>Overwhelmed (\u0e17\u0e35\u0e48\u0e23\u0e39\u0e49\u0e2a\u0e36\u0e01\u0e17\u0e48\u0e27\u0e21\u0e17\u0e49\u0e19)</td><td></td></tr>\n</table></div>\n<ol>\n<li>\u0e15\u0e23\u0e27\u0e08\u0e14\u0e39\u0e04\u0e33\u0e16\u0e32\u0e21\u0e02\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e01\u0e48\u0e2d\u0e19\u0e27\u0e48\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e43\u0e14\u0e08\u0e32\u0e01 6 \u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e14\u0e31\u0e07\u0e01\u0e25\u0e48\u0e32\u0e27 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e27\u0e34\u0e18\u0e35\u0e2b\u0e32\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e43\u0e2b\u0e49\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21</li>\n<li>\u0e16\u0e49\u0e32\u0e04\u0e33\u0e16\u0e32\u0e21\u0e16\u0e32\u0e21\u0e16\u0e36\u0e07\u0e04\u0e33\u0e2b\u0e23\u0e37\u0e2d\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e08\u0e38\u0e14 (\u0e40\u0e0a\u0e48\u0e19\u0e16\u0e32\u0e21\u0e27\u0e48\u0e32 What is true about antibody? \u0e2b\u0e23\u0e37\u0e2d\u0e23\u0e30\u0e1a\u0e38\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e43\u0e19 line \u0e15\u0e48\u0e32\u0e07\u0e46) \u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e2a\u0e2d\u0e1a\u0e01\u0e27\u0e32\u0e14\u0e2a\u0e32\u0e22\u0e15\u0e32 (scan) \u0e2b\u0e32\u0e04\u0e33\u0e19\u0e31\u0e49\u0e19\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e48\u0e2d\u0e19 \u0e41\u0e25\u0e49\u0e27\u0e04\u0e48\u0e2d\u0e22\u0e2d\u0e48\u0e32\u0e19\u0e1a\u0e23\u0e34\u0e1a\u0e17\u0e23\u0e2d\u0e1a\u0e02\u0e49\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e04\u0e33\u0e19\u0e31\u0e49\u0e19\u0e42\u0e14\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2b\u0e32\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07 \u0e44\u0e21\u0e48\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e2d\u0e48\u0e32\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14</li>\n<li>\u0e2a\u0e31\u0e07\u0e40\u0e01\u0e15\u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e02\u0e36\u0e49\u0e19\u0e15\u0e49\u0e19\u0e14\u0e49\u0e27\u0e22 Why, How, What \u0e43\u0e2b\u0e49\u0e14\u0e35 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e08\u0e30\u0e1a\u0e48\u0e07\u0e1a\u0e2d\u0e01\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e02\u0e2d\u0e07\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23</li>\n<li>\u0e2d\u0e22\u0e48\u0e32\u0e14\u0e48\u0e27\u0e19\u0e15\u0e2d\u0e1a\u0e08\u0e32\u0e01\u0e04\u0e27\u0e32\u0e21\u0e23\u0e39\u0e49\u0e40\u0e14\u0e34\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e32\u0e14\u0e40\u0e14\u0e32\u0e40\u0e2d\u0e32\u0e40\u0e2d\u0e07 \u0e15\u0e49\u0e2d\u0e07\u0e2b\u0e32\u0e2b\u0e25\u0e31\u0e01\u0e10\u0e32\u0e19\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e08\u0e32\u0e01\u0e43\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e40\u0e2a\u0e21\u0e2d</li>\n<li>\u0e2d\u0e48\u0e32\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e43\u0e2b\u0e49\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e04\u0e23\u0e1a\u0e16\u0e49\u0e27\u0e19 \u0e42\u0e14\u0e22\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e21\u0e35 NOT \u0e2b\u0e23\u0e37\u0e2d EXCEPT \u0e15\u0e49\u0e2d\u0e07\u0e19\u0e33\u0e41\u0e15\u0e48\u0e25\u0e30\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e44\u0e1b\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e01\u0e31\u0e1a\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e25\u0e30\u0e02\u0e49\u0e2d</li>\n<li>\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e1d\u0e36\u0e01\u0e1d\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e2a\u0e21\u0e48\u0e33\u0e40\u0e2a\u0e21\u0e2d\u0e41\u0e25\u0e30\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e20\u0e32\u0e1e\u0e23\u0e27\u0e21\u0e02\u0e2d\u0e07\u0e42\u0e08\u0e17\u0e22\u0e4c\u0e41\u0e15\u0e48\u0e25\u0e30\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e41\u0e25\u0e49\u0e27 \u0e08\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e17\u0e33\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e44\u0e14\u0e49\u0e23\u0e27\u0e14\u0e40\u0e23\u0e47\u0e27\u0e41\u0e25\u0e30\u0e41\u0e21\u0e48\u0e19\u0e22\u0e33\u0e02\u0e36\u0e49\u0e19</li>\n</ol>",
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
      }
    ],
  },
};
