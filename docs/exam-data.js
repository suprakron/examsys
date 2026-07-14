/*
  CU-TEP Practice Test — question bank
  =====================================
  This file is the ONLY place you need to edit to add real exam content.
  exam.html reads everything from window.EXAM_DATA — the UI does not need
  to change when you add more forms or questions.

  STRUCTURE
  ---------
  There are 4 forms (test sets), e.g. Form 1–4. Each form has 3 parts:
    - listening : 30 questions  (15 Short Conversations + 9 Longer Conversations + 6 Monologues)
    - reading   : 60 questions  (15 Cloze Test + 45 Reading Comprehension)
    - writing   : 30 questions  (Error Identification)
  => 120 questions per form.

  mp3 files are named "F{part}.{form}.mp3", e.g. F1.3.mp3 = Listening Part 1
  of Form 3. Only Form 3's listening audio exists in mp3/ so far.

  Every question below is SAMPLE data (see meta.isSample), reused from the
  Tips & Tricks guide just to exercise the UI end to end. Replace/extend
  per form as real content becomes available, and flip isSample to false
  once a form is complete.

  ---------------------------------------------------------------
  SCHEMA (per form)
  ---------------------------------------------------------------
  listening.audioParts: [{ id, label, src }]
      one entry per recording (normally 3: Part 1/2/3).

  listening.questions / reading.questions: [{
      id, partId (listening: id of the audioPart, or null if unmatched yet),
      type: (reading only) "cloze" | "comprehension",
      passageTitle, passage: (reading only, or null),
      prompt, promptTh (optional),
      choices: [string, string, string, string],
      answer: index 0-3,
      explanation: Thai explanation shown in the review screen
  }]

  writing.questions: [{
      id,
      segments: [{ text } | { text, n }]  // n = 1-4 marks a selectable/underlined part
      answer: the n (1-4) that contains the error,
      explanation
  }]
*/

function emptyPart(expected) {
  return { expectedCount: expected, audioParts: undefined, questions: [] };
}

window.EXAM_DATA = {
  meta: { title: "CU-TEP Practice Test", isSample: true },

  forms: [
    // ---------------------------------------------------------------
    // FORM 1 — not filled in yet
    // ---------------------------------------------------------------
    {
      id: "form1",
      label: "Form 1",
      listening: { expectedCount: 30, audioParts: [], questions: [] },
      reading: { expectedCount: 60, questions: [] },
      writing: { expectedCount: 30, questions: [] },
    },

    // ---------------------------------------------------------------
    // FORM 2 — not filled in yet
    // ---------------------------------------------------------------
    {
      id: "form2",
      label: "Form 2",
      listening: { expectedCount: 30, audioParts: [], questions: [] },
      reading: { expectedCount: 60, questions: [] },
      writing: { expectedCount: 30, questions: [] },
    },

    // ---------------------------------------------------------------
    // FORM 3 — has the 3 mp3 recordings + sample questions (demo data)
    // ---------------------------------------------------------------
    {
      id: "form3",
      label: "Form 3",
      listening: {
        expectedCount: 30,
        audioParts: [
          { id: "F3-L1", label: "Part 1 — Short Conversations", src: "mp3/F1.3.mp3" },
          { id: "F3-L2", label: "Part 2 — Longer Conversations", src: "mp3/F2.3.mp3" },
          { id: "F3-L3", label: "Part 3 — Monologues / Short Talks", src: "mp3/F3.3.mp3" },
        ],
        // Sample questions below are NOT yet matched to timestamps in the
        // recordings above — they are placeholders to demo the UI only.
        questions: [
          {
            id: "f3-lis-1",
            partId: null,
            prompt: "What is the talk mainly about?",
            choices: [
              "Defining post-holiday blues",
              "Preventing post-holiday blues",
              "Diagnosing post-holiday blues",
              "Coping with post-holiday blues",
            ],
            answer: 3,
            explanation:
              "ทุกตัวเลือกมีคำว่า post-holiday blues จึงต้องดูว่าบทพูดเน้นประเด็นใด สังเกต transition signals — first of all, secondly, thirdly, lastly and above all — ล้วนนำเสนอวิธีรับมือ ดังนั้นคำตอบคือข้อ 4",
          },
          {
            id: "f3-lis-2",
            partId: null,
            prompt: "Which of the following is NOT mentioned as a treatment for post-holiday blues?",
            choices: [
              "Getting enough exercise",
              "Writing about your holiday",
              "Scheduling the next holiday",
              "Trying to get rid of the blues",
            ],
            answer: 3,
            explanation:
              "ตัวเลือก 1–3 ล้วนเป็นสิ่งที่พูดแนะนำ ส่วนข้อ 4 ผู้พูดบอกว่าอย่าบังคับตัวเองให้กำจัดความรู้สึกนี้ — ตรงข้ามกับที่ตัวเลือกบอก จึงเป็นคำตอบ",
          },
          {
            id: "f3-lis-3",
            partId: null,
            prompt:
              "How does the woman feel toward the man?\n(Man: Okay, your laptop is now working again. / Woman: That's unbelievable. You're a gem.)",
            choices: [
              "He is valuable.",
              "He is very helpful.",
              "He is hard to believe.",
              "He is unbelievably fast.",
            ],
            answer: 1,
            explanation:
              "สำนวน You're a gem. ใช้ชมเชยคนที่ช่วยเหลือเราเป็นอย่างดี ไม่ได้แปลตรงตัวว่า 'เป็นอัญมณี' คำตอบคือข้อ 2",
          },
          {
            id: "f3-lis-4",
            partId: null,
            prompt:
              "What does the woman mean?\n(Man: Our boss never listens. Convincing him to agree with us is nearly impossible. / Woman: You can say that again!)",
            choices: [
              "She shares the man's opinion.",
              "She wants the man to repeat what he said.",
              "She asks the man to convince the boss again.",
              "She thinks it is impossible to listen to the man.",
            ],
            answer: 0,
            explanation:
              "You can say that again! เป็นสำนวนแปลว่า 'เห็นด้วยอย่างยิ่ง' ไม่ใช่การขอให้พูดซ้ำ คำตอบคือข้อ 1",
          },
          {
            id: "f3-lis-5",
            partId: null,
            prompt:
              "Where are the two speakers likely to go next?\n(Woman: Our class starts in about half an hour, but I'm starving. How about we go grab a quick bite? / Man: That sounds great!)",
            choices: ["Home", "Canteen", "Restroom", "Classroom"],
            answer: 1,
            explanation:
              "I'm starving = หิวมาก, grab a quick bite = ไปกินอะไรเร็ว ๆ เมื่อรวมกับข้อจำกัดเรื่องเวลา สถานที่ที่สมเหตุสมผลที่สุดคือโรงอาหาร (canteen)",
          },
        ],
      },

      reading: {
        expectedCount: 60,
        questions: [
          {
            id: "f3-rea-1",
            type: "comprehension",
            passageTitle: "Sample passage — Childhood obesity",
            passage:
              "Children become overweight and obese for a variety of reasons. The most common causes are genetic factors, lack of physical activity, unhealthy eating patterns, or a combination of these causes... A child's diet and activity level play an important role in determining a child's weight. Today, many children spend a lot of time being inactive — for example, the average child spends about 4 hours a day watching television.",
            prompt: "What does the text mainly discuss?",
            choices: [
              "Causes of obesity in children",
              "Treatments for childhood obesity",
              "The history of childhood obesity",
              "How television affects children's health",
            ],
            answer: 0,
            explanation:
              "คำที่พบซ้ำ ๆ คือ children/child, overweight/obesity, reasons/cause/risk — สรุปได้ว่าบทความพูดถึงสาเหตุของโรคอ้วนในเด็ก",
          },
          {
            id: "f3-rea-2",
            type: "comprehension",
            passageTitle: "Sample passage — Migratory birds",
            passage:
              "Biologists have long linked body size and temperature. In colder climates, it pays to be big because having a smaller surface area relative to one's volume reduces heat loss through the skin... Many species of North American migratory birds are getting smaller, Winger and colleagues reported in 2020 in Ecology Letters. Climate change is the likely culprit, Winger says, but since migrators experience a wide range of conditions while globe-trotting, other factors such as shrinking habitats that birds may encounter can't be ruled out.",
            prompt:
              "According to Winger, apart from climate change, what is the other possible factor for birds getting smaller?",
            choices: ["Migration", "Air pollution", "Global ecology", "Declining habitats"],
            answer: 3,
            explanation:
              "คำสำคัญคือ Winger, climate change, factor — อ่านบริบทรอบคำเหล่านี้พบว่า shrinking habitats ถูกกล่าวถึงเป็นอีกปัจจัยหนึ่ง ซึ่งมีความหมายเดียวกับ declining habitats",
          },
          {
            id: "f3-rea-3",
            type: "comprehension",
            passageTitle: "Sample passage — Social media",
            passage:
              "Social media may trigger feelings of inadequacy. People may feel as though their life or appearance does not compare favorably with that of others on social media, leading to feelings of envy and dissatisfaction. A study found that high social media usage increases rather than decreases feelings of loneliness. Additionally, social media can facilitate cyberbullying and create unhealthy self-centeredness and distance from friends and family.",
            prompt: "What can be INFERRED from the text?",
            choices: [
              "Social media issues have been intensified in the past decade.",
              "Cyberbullying has been found to lead to suicide among teenagers.",
              "People generally like to compare themselves with others in real life.",
              "Reducing social media use helps people feel less lonely and isolated.",
            ],
            answer: 3,
            explanation:
              "หลักฐานคือประโยค 'high social media usage increases rather than decreases feelings of loneliness' — จึงอนุมานย้อนกลับได้ว่าการลดการใช้งานช่วยลดความรู้สึกโดดเดี่ยว",
          },
          {
            id: "f3-rea-4",
            type: "comprehension",
            passageTitle: "Sample passage — Urbanization",
            passage:
              "The promise of jobs and prosperity, among other factors, pulls people to cities. Half of the global population already lives in cities, and by 2050 two-thirds of the world's people are expected to live in urban areas. But in cities, two of the most pressing problems facing the world today also come together: poverty and environmental degradation... Strong city planning will be essential in managing these and other difficulties as the world's urban areas swell.",
            prompt: "Based on the text, what is the author's tone?",
            choices: ["Cynical", "Optimistic", "Concerned", "Enthusiastic"],
            answer: 2,
            explanation:
              "เนื้อหาเป็นไปในเชิงลบ กล่าวถึงปัญหามากมายที่จะเกิดขึ้น และท้ายย่อหน้าแนะนำให้มีการวางแผนรับมือ — น้ำเสียงจึงเป็นความกังวล (Concerned)",
          },
        ],
      },

      writing: {
        expectedCount: 30,
        // Error Identification: tap the numbered segment that contains the mistake.
        questions: [
          {
            id: "f3-wri-1",
            segments: [
              { text: "With the negative comments I received, I " },
              { text: "have no idea", n: 1 },
              { text: " " },
              { text: "what I should", n: 2 },
              { text: " do and " },
              { text: "where could I", n: 3 },
              { text: " seek " },
              { text: "for any help", n: 4 },
              { text: "." },
            ],
            answer: 3,
            explanation:
              "โครงสร้างหน้าและหลัง 'and' ต้องเป็นแบบเดียวกัน — 'what I should' เป็น noun clause แบบบอกเล่าถูกต้องแล้ว ส่วน 'where could I' สลับกริยาช่วยไว้หน้าประธานแบบประโยคคำถาม ต้องแก้เป็น 'where I could'",
          },
          {
            id: "f3-wri-2",
            segments: [
              { text: "Even though the system " },
              { text: "can regard", n: 1 },
              { text: " as a new and innovative work upgrade, I " },
              { text: "should not receive", n: 2 },
              { text: " a compliment " },
              { text: "without attributing", n: 3 },
              { text: " the success to " },
              { text: "the team's", n: 4 },
              { text: " efforts." },
            ],
            answer: 1,
            explanation:
              "ประธานคือ 'the system' ซึ่งถูกพิจารณา (ถูกกระทำ) ไม่สามารถกระทำกริยา 'regard' ได้เอง ต้องใช้ passive: 'can be regarded'",
          },
          {
            id: "f3-wri-3",
            segments: [
              { text: "By 2050, half of the species on Earth " },
              { text: "will become", n: 1 },
              { text: " " },
              { text: "extinct", n: 2 },
              { text: ", " },
              { text: "considering", n: 3 },
              { text: " current environmental measures which fail to " },
              { text: "efficiently cope", n: 4 },
              { text: " with severe issues of global warming." },
            ],
            answer: 1,
            explanation:
              "'By 2050' เป็นคำบอกเวลาที่ระบุจุดสิ้นสุดชัดเจนในอนาคต จึงต้องใช้ future perfect tense: 'will have become' ('extinct' ถูกต้องแล้วเพราะ become เป็น linking verb ตามด้วย adjective)",
          },
          {
            id: "f3-wri-4",
            segments: [
              { text: "As a matter of fact, Jim " },
              { text: "must blame", n: 1 },
              { text: " for " },
              { text: "proposing", n: 2 },
              { text: " conflicting figures that " },
              { text: "caused", n: 3 },
              { text: " a huge " },
              { text: "financial loss", n: 4 },
              { text: " for the company." },
            ],
            answer: 0,
            explanation:
              "Jim คือผู้ถูกตำหนิ (ถูกกระทำ) เมื่อ passive มี modal verb ต้องใช้ Subject + modal + be + V3 จึงต้องแก้เป็น 'must be blamed'",
          },
          {
            id: "f3-wri-5",
            segments: [
              { text: "Despite " },
              { text: "it is", n: 1 },
              { text: " the world's major exporter of agricultural products, Brazil is a country " },
              { text: "plagued", n: 2 },
              { text: " by " },
              { text: "chronic", n: 3 },
              { text: " and " },
              { text: "widespread poverty", n: 4 },
              { text: "." },
            ],
            answer: 0,
            explanation:
              "'Despite' เป็น preposition ต้องตามด้วยคำนามหรือ gerund (V-ing) เท่านั้น ไม่ใช่อนุประโยค จึงต้องแก้เป็น 'being' (หรือใช้ 'Despite the fact that' แล้วตามด้วยอนุประโยคแทน)",
          },
          {
            id: "f3-wri-6",
            segments: [
              { text: "If " },
              { text: "you are", n: 1 },
              { text: " the US president, " },
              { text: "would you propose", n: 2 },
              { text: " a new economic plan to help the country " },
              { text: "survive", n: 3 },
              { text: " the " },
              { text: "financial crisis", n: 4 },
              { text: " after COVID-19?" },
            ],
            answer: 0,
            explanation:
              "เป็นการสมมติที่ตรงข้ามกับความจริงในปัจจุบัน (Type II) — เมื่อกริยาแท้เป็น verb to be ต้องใช้ 'were' เสมอไม่ว่าประธานจะเป็นอะไร",
          },
        ],
      },
    },

    // ---------------------------------------------------------------
    // FORM 4 — not filled in yet
    // ---------------------------------------------------------------
    {
      id: "form4",
      label: "Form 4",
      listening: { expectedCount: 30, audioParts: [], questions: [] },
      reading: { expectedCount: 60, questions: [] },
      writing: { expectedCount: 30, questions: [] },
    },
  ],
};
