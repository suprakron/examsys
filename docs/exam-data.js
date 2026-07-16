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

  mp3 files in mp3/ are added incrementally per form's Listening Part 1/2/3
  recordings as they become available — see each form's listening.audioParts
  for which file backs which part. Form 1 currently only has its Part 1
  recording (mp3/F1.3.mp3); Parts 2–3 audio can be added the same way once
  supplied.

  Form 1 is real content transcribed from exam-part1.docx (CU-TEP Practice
  Test III). Form 3's questions below are still SAMPLE data (see
  meta.isSample), reused from the Tips & Tricks guide just to exercise the
  UI end to end. Replace/extend per form as real content becomes available.

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
    // FORM 1 — from exam-part1.docx (CU-TEP Practice Test III, "Form 1")
    // ---------------------------------------------------------------
    {
      "id": "form1",
      "label": "Form 1",
      "listening": {
            "expectedCount": 30,
            "audioParts": [
                  {
                        "id": "F1-L1",
                        "label": "Part 1 — Short Conversations",
                        "src": "mp3/F1.3.mp3"
                  }
            ],
            "questions": [
                  {
                        "id": "f1-lis-1",
                        "partId": "F1-L1",
                        "prompt": "How does the man feel?",
                        "choices": [
                              "Excited",
                              "Interested",
                              "Sympathetic",
                              "Unenthusiastic"
                        ],
                        "answer": 3,
                        "explanation": "สำนวน I wish I could + verb แปลว่าผู้พูดปรารถนาจะทำสิ่งใดสิ่งหนึ่ง ในที่นี้ผู้ชายกล่าวว่าอยากมีความรู้สึกกระตือรือร้นเหมือนฝ่ายหญิง หรืออีกนัยหนึ่งคือตัวเขาเองไม่ได้รู้สึกตื่นเต้นเลย คำตอบจึงเป็นข้อ 4 Unenthusiastic"
                  },
                  {
                        "id": "f1-lis-2",
                        "partId": "F1-L1",
                        "prompt": "What does the woman think about the exchange program?",
                        "choices": [
                              "The woman enjoyed the experience.",
                              "The woman was nervous about the program.",
                              "The woman managed the program successfully.",
                              "The woman has joined the program multiple times."
                        ],
                        "answer": 0,
                        "explanation": "สำนวน in a heartbeat แปลว่าโดยทันที ฝ่ายหญิงบอกว่าถ้าไปได้อีกครั้งเธอจะไปทันที แสดงว่าเธอชอบประสบการณ์ที่ได้จากโครงการแลกเปลี่ยนมาก คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-lis-3",
                        "partId": "F1-L1",
                        "prompt": "Where does this conversation most likely take place?",
                        "choices": [
                              "At a clinic",
                              "In a kitchen",
                              "At a drugstore",
                              "At a tailor shop"
                        ],
                        "answer": 0,
                        "explanation": "บทสนทนามีคำว่า stitch up the cut (เย็บแผล) และ take antibiotics (ทานยาฆ่าเชื้อ) ทำให้ทราบว่าอยู่ที่คลินิก คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-lis-4",
                        "partId": "F1-L1",
                        "prompt": "What time will Michael most likely arrive?",
                        "choices": [
                              "5:00 p.m.",
                              "5:30 p.m.",
                              "6:30 p.m.",
                              "7:00 p.m."
                        ],
                        "answer": 2,
                        "explanation": "ไมเคิลออกจากที่ทำงานเวลา 5 โมงเย็นและใช้เวลาเดินทางประมาณ 30 นาที แต่จะแวะซื้อไวน์ก่อน จึงน่าจะมาถึงราว 6.30 น. ก่อนแขกคนอื่นที่จะมาถึงตอน 1 ทุ่ม คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-lis-5",
                        "partId": "F1-L1",
                        "prompt": "What does the woman mean?",
                        "choices": [
                              "She is not hungry.",
                              "She wants more choices.",
                              "She's had steak many times.",
                              "She wants to have steak for dinner."
                        ],
                        "answer": 2,
                        "explanation": "ฝ่ายหญิงตอบว่าถ้าต้องกินสเต็กอีกมื้อเธอจะร้องเสียงเหมือนวัวแน่ๆ หมายความว่าเธอทานสเต็กบ่อยมากแล้ว คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-lis-6",
                        "partId": "F1-L1",
                        "prompt": "What will the man most likely do next?",
                        "choices": [
                              "Go home",
                              "Go to work",
                              "Get the ingredients",
                              "Get a birthday cake"
                        ],
                        "answer": 1,
                        "explanation": "ฝ่ายชายบอกว่าจะซื้อเนยให้ก่อนกลับบ้านหลังเลิกงาน แสดงว่าตอนนี้เขากำลังจะไปทำงาน คำตอบคือข้อ 2"
                  },
                  {
                        "id": "f1-lis-7",
                        "partId": "F1-L1",
                        "prompt": "What does the woman imply about Peter?",
                        "choices": [
                              "Peter is their boss.",
                              "Peter is good at making slides.",
                              "The man needs to report to Peter.",
                              "She doesn't have time to talk right now."
                        ],
                        "answer": 1,
                        "explanation": "ฝ่ายชายอยากทำสไลด์นำเสนองานให้สวยงาม ฝ่ายหญิงแนะนำให้ไปคุยกับปีเตอร์ สื่อว่าปีเตอร์ทำสไลด์เก่ง คำตอบคือข้อ 2"
                  },
                  {
                        "id": "f1-lis-8",
                        "partId": "F1-L1",
                        "prompt": "Where did the man last see Kenneth?",
                        "choices": [
                              "In college",
                              "At the office",
                              "At the hospital",
                              "At the restaurant"
                        ],
                        "answer": 0,
                        "explanation": "ฝ่ายชายพูดว่าเจอเคนเน็ธครั้งสุดท้ายตอนแข่งบาสเกตบอลสมัยเรียนมหาวิทยาลัย คำตอบคือข้อ 1 In college"
                  },
                  {
                        "id": "f1-lis-9",
                        "partId": "F1-L1",
                        "prompt": "What will the man most likely do tonight?",
                        "choices": [
                              "Going to John's house",
                              "Submitting his assignment",
                              "Working on his assignment",
                              "Wishing John a happy birthday"
                        ],
                        "answer": 2,
                        "explanation": "ฝ่ายหญิงชวนไปงานปาร์ตี้ แต่ฝ่ายชายตอบว่ามีงานต้องส่งพรุ่งนี้เช้า จึงอนุมานได้ว่าคืนนี้เขาจะนั่งทำงานที่ต้องส่ง คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-lis-10",
                        "partId": "F1-L1",
                        "prompt": "Why does the woman decline the man's invitation?",
                        "choices": [
                              "She is tired of trekking.",
                              "She has misplaced her cup.",
                              "She is scared of wild animals.",
                              "She doesn't like to go trekking."
                        ],
                        "answer": 3,
                        "explanation": "ฝ่ายชายชวนไปเดินป่า ฝ่ายหญิงปฏิเสธโดยบอกว่านั่นไม่ใช่สิ่งที่เธอชอบ สำนวน someone's cup of tea หมายถึงสิ่งที่คนนั้นชอบหรือถนัด คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-lis-11",
                        "partId": "F1-L1",
                        "prompt": "What does the man suggest the woman do?",
                        "choices": [
                              "The woman should donate her books.",
                              "The woman can find old books at the local library.",
                              "The woman can turn her house into a local library.",
                              "The woman should throw away her old magazines."
                        ],
                        "answer": 0,
                        "explanation": "ฝ่ายหญิงมีหนังสือและนิตยสารเก่าที่อยากกำจัดออกจากบ้าน ฝ่ายชายบอกอ้อมๆ ว่าห้องสมุดน่าจะต้องการ หมายถึงเธอควรนำไปบริจาคให้ห้องสมุด คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-lis-12",
                        "partId": "F1-L1",
                        "prompt": "What time does the man's flight actually leave?",
                        "choices": [
                              "9:00 a.m.",
                              "9:30 p.m.",
                              "11:00 a.m.",
                              "11:00 p.m."
                        ],
                        "answer": 3,
                        "explanation": "ฝ่ายหญิงเตือนให้ไปสนามบินเพราะคิดว่าเครื่องออก 11 โมงเช้า ตอนนั้นเป็นเวลา 9.30 แล้ว แต่ฝ่ายชายบอกว่าเครื่องออกตอนกลางคืนต่างหาก คือ 11 p.m. ไม่ใช่ 11 a.m. คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-lis-13",
                        "partId": "F1-L1",
                        "prompt": "What type of movie did they watch?",
                        "choices": [
                              "Horror",
                              "Comedy",
                              "Documentary",
                              "Children's film"
                        ],
                        "answer": 0,
                        "explanation": "ฝ่ายหญิงบอกว่าภาพยนตร์ที่ไปดูเมื่อวานแทนที่จะเป็นภาพยนตร์สำหรับเด็ก กลับเป็นเรื่องราวของทหารที่ถูกทรมานในสงครามโลกครั้งที่ 2 และมีเลือดท่วมจอ จึงเป็นภาพยนตร์ประเภทสยองขวัญ คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-lis-14",
                        "partId": "F1-L1",
                        "prompt": "What is Mr. Larson's profession?",
                        "choices": [
                              "A plumber",
                              "A gardener",
                              "A contractor",
                              "An electrician"
                        ],
                        "answer": 0,
                        "explanation": "ก๊อกน้ำมีน้ำหยดและแรงดันน้ำต่ำจนรดน้ำสนามหญ้าไม่ได้ ฝ่ายชายแนะนำให้โทรตามคุณลาร์สัน จึงอนุมานได้ว่าคุณลาร์สันเป็นช่างประปา คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-lis-15",
                        "partId": "F1-L1",
                        "prompt": "What does the man mean?",
                        "choices": [
                              "He knows all about it.",
                              "He knows a lot about it.",
                              "He knows a little about it.",
                              "He knows nothing about it."
                        ],
                        "answer": 3,
                        "explanation": "ฝ่ายหญิงถามว่ารู้เรื่องการควบรวมบริษัทไหม ฝ่ายชายตอบด้วยสำนวน in the dark ซึ่งหมายถึงไม่รู้เรื่องนั้นเลย คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-lis-16",
                        "partId": "F1-L2",
                        "prompt": "What is the relationship between the two speakers?",
                        "choices": [
                              "They are friends.",
                              "They are siblings.",
                              "They are work colleagues.",
                              "They are mother and daughter."
                        ],
                        "answer": 1,
                        "explanation": "ฝ่ายหญิงใช้คำว่า our mother เมื่อพูดถึงตัวเองและเฮเลน แสดงว่าทั้งคู่เป็นพี่น้องกัน คำตอบคือข้อ 2"
                  },
                  {
                        "id": "f1-lis-17",
                        "partId": "F1-L2",
                        "prompt": "What does the woman say about herself?",
                        "choices": [
                              "She is an attractive person.",
                              "She is an intelligent person.",
                              "She is good at being punctual.",
                              "She is good at remembering things."
                        ],
                        "answer": 3,
                        "explanation": "ฝ่ายหญิงบอกว่าแม่เคยพูดว่าเธอเป็นคนความจำดีที่สุดในครอบครัว (I got the good memory in the family) คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-lis-18",
                        "partId": "F1-L2",
                        "prompt": "Where will the woman most likely go now?",
                        "choices": [
                              "The opera",
                              "The airport",
                              "A restaurant",
                              "A coffee shop"
                        ],
                        "answer": 1,
                        "explanation": "บทสนทนานี้เกี่ยวกับผู้หญิงที่ต้องยกเลิกแผนไปดูโอเปร่ากับฝ่ายชาย เพราะลืมว่าเฮเลนจะบินมาถึงวันนี้ เธอจึงต้องรีบไปรับที่สนามบิน คำตอบคือข้อ 2"
                  },
                  {
                        "id": "f1-lis-19",
                        "partId": "F1-L2",
                        "prompt": "Where does this conversation take place?",
                        "choices": [
                              "In a restaurant",
                              "In a coffee shop",
                              "In a supermarket",
                              "In a cooking school"
                        ],
                        "answer": 2,
                        "explanation": "บทสนทนาเกี่ยวกับการหาเกลือและเครื่องปรุง ทั้งสองใช้คำว่า aisle (ทางเดินระหว่างชั้นวางสินค้า) ฝ่ายชายเรียกฝ่ายหญิงว่า ma'am และพูดถึงการ restock สินค้า คำตอบคือข้อ 3 In a supermarket"
                  },
                  {
                        "id": "f1-lis-20",
                        "partId": "F1-L2",
                        "prompt": "What will the woman most likely buy?",
                        "choices": [
                              "Pink salt",
                              "Black pepper",
                              "Onion powder",
                              "Five-spice powder"
                        ],
                        "answer": 2,
                        "explanation": "ฝ่ายหญิงกล่าวว่าจะเลือกระหว่าง onion powder กับ black pepper แต่ black pepper หมด ดังนั้นคำตอบคือข้อ 3 Onion powder"
                  },
                  {
                        "id": "f1-lis-21",
                        "partId": "F1-L2",
                        "prompt": "What does the woman say about the soup she is making?",
                        "choices": [
                              "It is loved by her family.",
                              "It is from her father's recipe.",
                              "It is being served to her family.",
                              "It has been made many times before."
                        ],
                        "answer": 2,
                        "explanation": "ฝ่ายหญิงกล่าวว่า I hope the seafood soup I'm making for my family will taste good with this addition. หมายถึงเธอกำลังทำซุปนี้ให้ครอบครัวรับประทาน คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-lis-22",
                        "partId": "F1-L2",
                        "prompt": "What sport are they playing?",
                        "choices": [
                              "Running",
                              "Swimming",
                              "Playing tennis",
                              "Playing badminton"
                        ],
                        "answer": 2,
                        "explanation": "ฝ่ายหญิงกล่าวว่า You're just really bad at tennis. และยังกล่าวถึง ball, racket และ court ซึ่งล้วนเกี่ยวข้องกับเทนนิส คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-lis-23",
                        "partId": "F1-L2",
                        "prompt": "Why does the woman want to hurry?",
                        "choices": [
                              "It will be cold soon.",
                              "It will be dark soon.",
                              "The man excels in boxing.",
                              "The speakers are professional athletes."
                        ],
                        "answer": 1,
                        "explanation": "ฝ่ายหญิงอยากเล่นให้จบก่อนพระอาทิตย์ตก โดยพูดว่า We won't be able to see anything in the next five minutes. คำตอบคือข้อ 2"
                  },
                  {
                        "id": "f1-lis-24",
                        "partId": "F1-L2",
                        "prompt": "How many times has the man played this sport, including today?",
                        "choices": [
                              "Two",
                              "Five",
                              "Four",
                              "Three"
                        ],
                        "answer": 3,
                        "explanation": "ฝ่ายชายกล่าวว่า This is only my third time playing this sport. คำตอบคือข้อ 4 Three"
                  },
                  {
                        "id": "f1-lis-25",
                        "partId": "F1-L3",
                        "prompt": "According to the talk, why do people support child-free restaurants?",
                        "choices": [
                              "The lack of noise",
                              "The quality of the food",
                              "The friendly atmosphere",
                              "The longer opening hours"
                        ],
                        "answer": 0,
                        "explanation": "บทพูดนี้เกี่ยวกับการโต้เถียงบนสื่อสังคมออนไลน์เรื่องร้านอาหารที่ไม่อนุญาตให้เด็กเข้า เหตุผลหลักของผู้สนับสนุนคือต้องการรับประทานอาหารในบรรยากาศที่เงียบสงบ คำตอบคือข้อ 1 The lack of noise"
                  },
                  {
                        "id": "f1-lis-26",
                        "partId": "F1-L3",
                        "prompt": "In which country, besides the United States, have child-free restaurants been successfully launched?",
                        "choices": [
                              "Turkey",
                              "Hungary",
                              "Germany",
                              "The United Kingdom"
                        ],
                        "answer": 2,
                        "explanation": "บทพูดกล่าวว่า child-free restaurants have been successfully launched in various countries, including the United States and Germany คำตอบคือข้อ 3 Germany"
                  },
                  {
                        "id": "f1-lis-27",
                        "partId": "F1-L3",
                        "prompt": "What does the talk say about child-free restaurants in Turkey?",
                        "choices": [
                              "Child-free restaurants are illegal in Turkey.",
                              "Child-free restaurants require special permits.",
                              "People advocate child-free restaurants due to their cleanliness.",
                              "The main reason people oppose child-free restaurants is their expense."
                        ],
                        "answer": 0,
                        "explanation": "บทพูดกล่าวว่าแม้ร้านอาหารปลอดเด็กจะประสบความสำเร็จในหลายประเทศ แต่แนวคิดนี้ผิดกฎหมายในตุรกี (the concept is not actually allowed under Turkish law) คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-lis-28",
                        "partId": "F1-L3",
                        "prompt": "What is this talk mainly about?",
                        "choices": [
                              "a study on meditation",
                              "a meditation program",
                              "a reason for meditation",
                              "a new meditation technique"
                        ],
                        "answer": 0,
                        "explanation": "บทพูดนี้เกี่ยวกับงานวิจัยเรื่องการทำสมาธิ โดยกล่าวถึง a large-scale study in the United States คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-lis-29",
                        "partId": "F1-L3",
                        "prompt": "According to the talk, what does open monitoring meditation ask people to focus on?",
                        "choices": [
                              "An object",
                              "Their breath",
                              "Their thoughts",
                              "The environment"
                        ],
                        "answer": 2,
                        "explanation": "open monitoring meditation ต่างจากการทำสมาธิแบบอื่นตรงที่เน้นความคิดของตนเอง จากข้อความ people are asked to focus awareness on their feelings, thoughts or sensation คำตอบคือข้อ 3 Their thoughts"
                  },
                  {
                        "id": "f1-lis-30",
                        "partId": "F1-L3",
                        "prompt": "Who would benefit most from open monitoring meditation, according to the talk?",
                        "choices": [
                              "People who feel anxiety",
                              "People who are error-prone",
                              "People who are accident-prone",
                              "People who cannot concentrate"
                        ],
                        "answer": 1,
                        "explanation": "งานวิจัยพบว่า open monitoring meditation ช่วยให้สังเกตเห็นข้อผิดพลาดได้ดีขึ้น จากข้อความ this form of meditation was able to enhance the brain's ability to detect and pay attention to mistakes คำตอบคือข้อ 2"
                  }
            ]
      },
      "reading": {
            "expectedCount": 60,
            "questions": [
                  {
                        "id": "f1-rea-31",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (31).",
                        "choices": [
                              "at which",
                              "in which",
                              "about what",
                              "over whether"
                        ],
                        "answer": 3,
                        "explanation": "The debate over whether AI will replace humans in the workforce หมายถึงการถกเถียงประเด็นที่ว่า AI จะเข้ามาทดแทนมนุษย์หรือไม่ ตัวเลือก in which, at which หรือ about what ไม่เหมาะกับข้อความนี้ คำตอบคือข้อ 4 over whether"
                  },
                  {
                        "id": "f1-rea-32",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (32).",
                        "choices": [
                              "so",
                              "while",
                              "meanwhile",
                              "providing that"
                        ],
                        "answer": 1,
                        "explanation": "while แปลว่า ในขณะที่ ใช้เชื่อมข้อความที่ขัดแย้งกัน เพราะเนื้อความหน้าและหลังขัดแย้งกัน: AI will replace humans for most repetitive and labor tasks, while humans will excel at soft skills... คำตอบคือข้อ 2 while"
                  },
                  {
                        "id": "f1-rea-33",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (33).",
                        "choices": [
                              "excel",
                              "exceed",
                              "escalate",
                              "enhance"
                        ],
                        "answer": 0,
                        "explanation": "excel แปลว่า ทำได้ดี มีทักษะสูง สอดคล้องกับบริบท ตัวเลือกอื่น: exceed = เกิน, escalate = เพิ่มขึ้น/บานปลาย, enhance = เสริมให้ดีขึ้น คำตอบคือข้อ 1 excel"
                  },
                  {
                        "id": "f1-rea-34",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (34).",
                        "choices": [
                              "assumes",
                              "outweighs",
                              "oversimplifies",
                              "underperforms"
                        ],
                        "answer": 2,
                        "explanation": "oversimplifies แปลว่า อธิบายในลักษณะที่ง่ายเกินไป เพราะผู้เขียนมองว่าการอธิบายบทบาทของ AI แบบสองขั้วนั้นง่ายเกินความเป็นจริง ตัวเลือกอื่น: assumes = คาดเดา, outweighs = มีน้ำหนัก/ความสำคัญมากกว่า, underperforms = ทำผลงานได้ไม่ดีเท่าที่ควร คำตอบคือข้อ 3 oversimplifies"
                  },
                  {
                        "id": "f1-rea-35",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (35).",
                        "choices": [
                              "despite",
                              "namely",
                              "although",
                              "on account of"
                        ],
                        "answer": 1,
                        "explanation": "namely แปลว่า นั่นคือ กล่าวคือ เพราะหลังคำว่า by เป็นการให้รายละเอียดเพิ่มเติมว่า AI จะช่วยมนุษย์พัฒนาอะไรได้บ้าง (emotional intelligence, soft skills, communication skills) คำตอบคือข้อ 2 namely"
                  },
                  {
                        "id": "f1-rea-36",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (36).",
                        "choices": [
                              "combine",
                              "combined",
                              "combining",
                              "to combine"
                        ],
                        "answer": 2,
                        "explanation": "combining เพราะเป็นโครงสร้างคู่ขนาน (parallel structure) กับคำว่า Leveraging ที่อยู่ในรูป V-ing คำตอบคือข้อ 3 combining"
                  },
                  {
                        "id": "f1-rea-37",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (37).",
                        "choices": [
                              "reasoning",
                              "processing",
                              "automating",
                              "incorporating"
                        ],
                        "answer": 1,
                        "explanation": "processing แปลว่า ประมวลผล สอดคล้องกับบริบทที่พูดถึงการวิเคราะห์ข้อมูลการสื่อสาร ตัวเลือกอื่น: reasoning = ใช้เหตุผล, automating = ทำให้เป็นอัตโนมัติ, incorporating = รวมเข้าไว้ คำตอบคือข้อ 2 processing"
                  },
                  {
                        "id": "f1-rea-38",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (38).",
                        "choices": [
                              "influence",
                              "influences",
                              "influencing",
                              "they influence"
                        ],
                        "answer": 0,
                        "explanation": "influence เพราะตำแหน่งนี้ต้องเป็นกริยาแท้ที่ผันตามประธานพหูพจน์ (tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features) คำตอบคือข้อ 1 influence"
                  },
                  {
                        "id": "f1-rea-39",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (39).",
                        "choices": [
                              "base",
                              "loyalty",
                              "relations",
                              "conversations"
                        ],
                        "answer": 3,
                        "explanation": "conversations คำที่ช่วยบ่งชี้คือวลี either voice, video, or text ที่ตามมา ประโยคนี้หมายถึงการที่ AI วิเคราะห์บทสนทนากับลูกค้าไม่ว่าจะอยู่ในรูปแบบเสียง วิดีโอ หรือข้อความ คำตอบคือข้อ 4 conversations"
                  },
                  {
                        "id": "f1-rea-40",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (40).",
                        "choices": [
                              "apparent",
                              "negligible",
                              "plausible",
                              "representative"
                        ],
                        "answer": 0,
                        "explanation": "apparent แปลว่า ชัดเจน เห็นหรือเข้าใจได้ง่าย ประโยคนี้หมายถึงรูปแบบการสื่อสารที่มีประสิทธิภาพซึ่งไม่ใช่สิ่งที่เห็นได้โดยง่ายด้วยตาเปล่า คำตอบคือข้อ 1 apparent"
                  },
                  {
                        "id": "f1-rea-41",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (41).",
                        "choices": [
                              "deals",
                              "costs",
                              "revenue",
                              "payments"
                        ],
                        "answer": 0,
                        "explanation": "close deals แปลว่า ปิดการขายหรือเจรจาซื้อขายได้สำเร็จ ตัวเลือกอื่น: costs = ต้นทุน, revenue = รายได้, payments = การจ่ายเงิน คำตอบคือข้อ 1 deals"
                  },
                  {
                        "id": "f1-rea-42",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (42).",
                        "choices": [
                              "require",
                              "required",
                              "requiring",
                              "will require"
                        ],
                        "answer": 2,
                        "explanation": "requiring เพราะตำแหน่งนี้ต้องการ present participle (V-ing) ขยาย noun phrase คือ Many professional roles ไม่ใช่กริยาแท้ (finite verb) เพราะกริยาแท้ของประโยคคือ will benefit from คำตอบคือข้อ 3 requiring"
                  },
                  {
                        "id": "f1-rea-43",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (43).",
                        "choices": [
                              "isolating",
                              "pursuing",
                              "counseling",
                              "manufacturing"
                        ],
                        "answer": 2,
                        "explanation": "counseling แปลว่า งานให้คำปรึกษา เป็นตัวอย่างอาชีพที่ต้องใช้ทักษะการสื่อสารที่ดี ตัวเลือกอื่น: isolating = การโดดเดี่ยว, pursuing = การไล่ตาม, manufacturing = การผลิต คำตอบคือข้อ 3 counseling"
                  },
                  {
                        "id": "f1-rea-44",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (44).",
                        "choices": [
                              "Indeed",
                              "Likewise",
                              "Above all",
                              "On the other hand"
                        ],
                        "answer": 0,
                        "explanation": "Indeed แปลว่า ที่จริงแล้ว ใช้ขึ้นต้นประโยคเพื่อให้ข้อมูลเพิ่มเติมสนับสนุนประเด็นก่อนหน้า ตัวเลือกอื่น: Likewise = ในทำนองเดียวกัน, Above all = เหนือสิ่งอื่นใด, On the other hand = ในทางตรงกันข้าม คำตอบคือข้อ 1 Indeed"
                  },
                  {
                        "id": "f1-rea-45",
                        "type": "cloze",
                        "passageTitle": "Cloze Test — AI and Human Communication Skills",
                        "passage": "The debate _____(31)_____ AI will replace humans in the workforce often boils down to a handy, twofold explanation: AI will replace humans for most repetitive and labor tasks, _____(32)_____ humans will _____(33)_____ at soft skills like creative communication and relationship-building. While some of this is true — humans and machines will each play to their strengths — it probably _____(34)_____ AI's role in our professional lives. We believe AI will help humans do better human work, _____(35)_____ by helping us improve our emotional intelligence, soft skills, and interpersonal communication skills.\n\nLeveraging advances in emotion detection, natural language processing, and computer vision, and _____(36)_____ it with psychology and linguistics, AI algorithms have become better at detecting, analyzing, and _____(37)_____ how tone, pitch, facial expression, eye contact, body language, and dozens of other verbal and non-verbal communication features _____(38)_____ communication.\n\nBy letting AI tap into your customer _____(39)_____ — either voice, video, or text, AI can take complex and often puzzling data and find patterns in effective communication not _____(40)_____ to the naked eye. For example, a sales data analysis firm has analyzed interactions between salespeople and customers to help sales professionals communicate better and close more _____(41)_____. The potential of these technologies goes beyond sales and customer success. Many professional roles _____(42)_____ strong communication skills, including leadership, public speaking, public relations, customer service, _____(43)_____, teaching, language learning, and bedside manner will benefit from AI that measures emotional intelligence. _____(44)_____, the combined market size for emotion detection and conversational AI are _____(45)_____ to grow to more than $60 billion in ten years' time.",
                        "prompt": "Choose the best word or phrase to fill in blank (45).",
                        "choices": [
                              "obliged",
                              "projected",
                              "measured",
                              "suspended"
                        ],
                        "answer": 1,
                        "explanation": "are projected to grow to more than $60 billion หมายถึง คาดการณ์ว่าจะเติบโตแตะระดับ 60,000 ล้านดอลลาร์ ตัวเลือกอื่น: obliged = ถูกบังคับให้ต้องทำ, measured = วัด/ตวง, suspended = ระงับชั่วคราว คำตอบคือข้อ 2 projected"
                  },
                  {
                        "id": "f1-rea-46",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Cleaning and Mental Health",
                        "passage": "After years of working and studying from home, many people started to realize that seeing a clean and tidy home helps them unwind and even elevates their mood when they are feeling down. Studies have shown that cleaning—or the lack thereof—can directly affect mental health. While a household cleanout as a means of fighting depression is an excellent concept in theory, it must be approached with caution in practice.\n\nFirst of all, if you are feeling down and want to keep your living space tidy but just can't find the motivation to do so, start small. Small steps toward a cleaner environment make the process more achievable and less stressful, even if it is just dusting in the bedroom one day and mopping floors the following day. The most important thing is the uplifting experience that tiny steps taken toward organizing your environment provide.\n\nOf course, there will be times when things do not go as planned and the thought of cleaning is just too much. When such a feeling pays a visit, we need extra tools in our toolbox to help de-stress and get through our day. It is unwise to put your mental health in the hands of a single activity and our cleaning routine should not be our sole lifeline.\n\nRemember, you should always seek assistance from a mental health specialist or your doctor if you are seriously depressed. Also, if you cannot tell whether your cleaning habits are healthy or not, they can help analyze and assess which behaviors are beneficial and which might require modification.",
                        "prompt": "What is the main idea of the text?",
                        "choices": [
                              "Cleaning up your house can have a positive effect on mental wellness.",
                              "Working and studying from home has had a great impact on mental health.",
                              "A person's mental state determines whether they should undertake housework.",
                              "People with mental health conditions should be cautious about doing household chores."
                        ],
                        "answer": 0,
                        "explanation": "ใจความสำคัญของเรื่องคือการทำความสะอาดบ้านมีผลโดยตรงต่อสุขภาพจิต จากประโยค Studies have shown that cleaning—or the lack thereof—can directly affect mental health คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-rea-47",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Cleaning and Mental Health",
                        "passage": "After years of working and studying from home, many people started to realize that seeing a clean and tidy home helps them unwind and even elevates their mood when they are feeling down. Studies have shown that cleaning—or the lack thereof—can directly affect mental health. While a household cleanout as a means of fighting depression is an excellent concept in theory, it must be approached with caution in practice.\n\nFirst of all, if you are feeling down and want to keep your living space tidy but just can't find the motivation to do so, start small. Small steps toward a cleaner environment make the process more achievable and less stressful, even if it is just dusting in the bedroom one day and mopping floors the following day. The most important thing is the uplifting experience that tiny steps taken toward organizing your environment provide.\n\nOf course, there will be times when things do not go as planned and the thought of cleaning is just too much. When such a feeling pays a visit, we need extra tools in our toolbox to help de-stress and get through our day. It is unwise to put your mental health in the hands of a single activity and our cleaning routine should not be our sole lifeline.\n\nRemember, you should always seek assistance from a mental health specialist or your doctor if you are seriously depressed. Also, if you cannot tell whether your cleaning habits are healthy or not, they can help analyze and assess which behaviors are beneficial and which might require modification.",
                        "prompt": "According to the article, what is NOT true about people with mental health issues and house cleaning?",
                        "choices": [
                              "They should first address their mental health before cleaning.",
                              "It is acceptable to complete only one household chore per day.",
                              "Positive emotions should take priority over the size of the task.",
                              "It is not healthy to have a big plan to complete cleaning in one day."
                        ],
                        "answer": 0,
                        "explanation": "ในย่อหน้า 2 ผู้เขียนไม่ได้กล่าวว่าต้องจัดการปัญหาสุขภาพจิตให้เรียบร้อยก่อนจึงจะทำความสะอาดได้ แต่แนะนำให้เริ่มจากงานเล็กๆ และให้ความสำคัญกับความรู้สึกด้านบวกมากกว่าขนาดของงาน คำตอบ (ข้อที่ไม่ตรง) คือข้อ 1"
                  },
                  {
                        "id": "f1-rea-48",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Cleaning and Mental Health",
                        "passage": "After years of working and studying from home, many people started to realize that seeing a clean and tidy home helps them unwind and even elevates their mood when they are feeling down. Studies have shown that cleaning—or the lack thereof—can directly affect mental health. While a household cleanout as a means of fighting depression is an excellent concept in theory, it must be approached with caution in practice.\n\nFirst of all, if you are feeling down and want to keep your living space tidy but just can't find the motivation to do so, start small. Small steps toward a cleaner environment make the process more achievable and less stressful, even if it is just dusting in the bedroom one day and mopping floors the following day. The most important thing is the uplifting experience that tiny steps taken toward organizing your environment provide.\n\nOf course, there will be times when things do not go as planned and the thought of cleaning is just too much. When such a feeling pays a visit, we need extra tools in our toolbox to help de-stress and get through our day. It is unwise to put your mental health in the hands of a single activity and our cleaning routine should not be our sole lifeline.\n\nRemember, you should always seek assistance from a mental health specialist or your doctor if you are seriously depressed. Also, if you cannot tell whether your cleaning habits are healthy or not, they can help analyze and assess which behaviors are beneficial and which might require modification.",
                        "prompt": "What is the writer's suggestion when house cleaning becomes impossible?",
                        "choices": [
                              "Bring out a toolbox and get to work on something.",
                              "Purchase new cleaning equipment to make chores more enjoyable.",
                              "Give up on house cleaning and find another activity to replace it in the future.",
                              "Have additional activities besides cleaning the house which help you unwind."
                        ],
                        "answer": 3,
                        "explanation": "ผู้เขียนแนะนำว่าเมื่อรู้สึกไม่อยากทำความสะอาดบ้าน ควรมีกิจกรรมอื่นๆ เป็นทางเลือกเพื่อช่วยผ่อนคลายความเครียดด้วย ไม่ควรพึ่งพากิจกรรมเดียว คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-rea-49",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Cleaning and Mental Health",
                        "passage": "After years of working and studying from home, many people started to realize that seeing a clean and tidy home helps them unwind and even elevates their mood when they are feeling down. Studies have shown that cleaning—or the lack thereof—can directly affect mental health. While a household cleanout as a means of fighting depression is an excellent concept in theory, it must be approached with caution in practice.\n\nFirst of all, if you are feeling down and want to keep your living space tidy but just can't find the motivation to do so, start small. Small steps toward a cleaner environment make the process more achievable and less stressful, even if it is just dusting in the bedroom one day and mopping floors the following day. The most important thing is the uplifting experience that tiny steps taken toward organizing your environment provide.\n\nOf course, there will be times when things do not go as planned and the thought of cleaning is just too much. When such a feeling pays a visit, we need extra tools in our toolbox to help de-stress and get through our day. It is unwise to put your mental health in the hands of a single activity and our cleaning routine should not be our sole lifeline.\n\nRemember, you should always seek assistance from a mental health specialist or your doctor if you are seriously depressed. Also, if you cannot tell whether your cleaning habits are healthy or not, they can help analyze and assess which behaviors are beneficial and which might require modification.",
                        "prompt": "The word \"tools\" (paragraph 3) is closest in meaning to",
                        "choices": [
                              "gadgets",
                              "activities",
                              "appliances",
                              "possessions"
                        ],
                        "answer": 1,
                        "explanation": "คำว่า \"tools\" ในบริบทนี้หมายถึงกิจกรรมอื่นๆ ที่ช่วยผ่อนคลายความเครียด ไม่ใช่อุปกรณ์จริง จึงใกล้เคียงกับคำว่า activities มากที่สุด คำตอบคือข้อ 2"
                  },
                  {
                        "id": "f1-rea-50",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Cleaning and Mental Health",
                        "passage": "After years of working and studying from home, many people started to realize that seeing a clean and tidy home helps them unwind and even elevates their mood when they are feeling down. Studies have shown that cleaning—or the lack thereof—can directly affect mental health. While a household cleanout as a means of fighting depression is an excellent concept in theory, it must be approached with caution in practice.\n\nFirst of all, if you are feeling down and want to keep your living space tidy but just can't find the motivation to do so, start small. Small steps toward a cleaner environment make the process more achievable and less stressful, even if it is just dusting in the bedroom one day and mopping floors the following day. The most important thing is the uplifting experience that tiny steps taken toward organizing your environment provide.\n\nOf course, there will be times when things do not go as planned and the thought of cleaning is just too much. When such a feeling pays a visit, we need extra tools in our toolbox to help de-stress and get through our day. It is unwise to put your mental health in the hands of a single activity and our cleaning routine should not be our sole lifeline.\n\nRemember, you should always seek assistance from a mental health specialist or your doctor if you are seriously depressed. Also, if you cannot tell whether your cleaning habits are healthy or not, they can help analyze and assess which behaviors are beneficial and which might require modification.",
                        "prompt": "What is the tone of the text?",
                        "choices": [
                              "Doubtful",
                              "Objective",
                              "Apathetic",
                              "Technical"
                        ],
                        "answer": 1,
                        "explanation": "น้ำเสียงของบทความเป็นแบบ Objective คือนำเสนอข้อมูลอย่างเป็นกลาง ไม่ใส่อารมณ์หรืออคติ คำตอบคือข้อ 2"
                  },
                  {
                        "id": "f1-rea-51",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Considerations About Homeschooling",
                        "passage": "Every educational system offers great opportunities for children to learn new information and skills, as well as harness their own unique qualities and interests. Homeschooling is no different than public school, private school, charter school, unschooling, and other models in that there are pros and cons.\n\nMore family time is spent on homeschooling as parents have a more direct role in their child's daily learning. Consequently, these parents will have the satisfaction that their children are learning, developing skills, and maturing in a way that aligns to their goals and values. However, \"they\" have to plan school-time and activities and handle the administrative work of being a teacher with less time each day for themselves. This could lead to a potential for more stress and fatigue by taking on parenting and teacher responsibilities.\n\nAdded financial costs must be dedicated to education in homeschooling. While there are many free resources available, homeschool supplies such as textbooks, books, paper, art supplies, computers, software, and other homeschool tools cost money. Furthermore, by having to dedicate more time to teaching children at home than working and earning, the family may suffer a loss in income. Careful budgeting and time management skills will be essential if parents are going to homeschool.\n\nWhat's more, since a child will no longer be in a public school environment and all learning will take place in the home, the family's lifestyle and pace will change. As more time will be dedicated to homeschooling, daily chores, errands, doctor's appointments, and typical household routines will need to be scheduled in coordination with the homeschooling plan.\n\nAnother important change is that even if parents normally spend a lot of time with their children, homeschooling parents spend even more time with their kids. The amount of time needed to spend on homeschooling is a major lifestyle change that needs to be considered when parents decide on whether or not to homeschool. Though there are many ways for parents to secure time for themselves, it is important for them to recognize that they will need to spend significantly more time with their children than they do currently.",
                        "prompt": "What is the main topic of the text?",
                        "choices": [
                              "Benefits of homeschooling",
                              "Parents' roles and homeschooling",
                              "Considerations about homeschooling",
                              "Comparison between homeschooling and other educational models"
                        ],
                        "answer": 2,
                        "explanation": "บทความนี้กล่าวถึงข้อดีและข้อเสียหลายด้านของ homeschooling (เวลา ค่าใช้จ่าย วิถีชีวิต) จึงเป็นการนำเสนอ 'ข้อพิจารณา' เกี่ยวกับ homeschooling คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-rea-52",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Considerations About Homeschooling",
                        "passage": "Every educational system offers great opportunities for children to learn new information and skills, as well as harness their own unique qualities and interests. Homeschooling is no different than public school, private school, charter school, unschooling, and other models in that there are pros and cons.\n\nMore family time is spent on homeschooling as parents have a more direct role in their child's daily learning. Consequently, these parents will have the satisfaction that their children are learning, developing skills, and maturing in a way that aligns to their goals and values. However, \"they\" have to plan school-time and activities and handle the administrative work of being a teacher with less time each day for themselves. This could lead to a potential for more stress and fatigue by taking on parenting and teacher responsibilities.\n\nAdded financial costs must be dedicated to education in homeschooling. While there are many free resources available, homeschool supplies such as textbooks, books, paper, art supplies, computers, software, and other homeschool tools cost money. Furthermore, by having to dedicate more time to teaching children at home than working and earning, the family may suffer a loss in income. Careful budgeting and time management skills will be essential if parents are going to homeschool.\n\nWhat's more, since a child will no longer be in a public school environment and all learning will take place in the home, the family's lifestyle and pace will change. As more time will be dedicated to homeschooling, daily chores, errands, doctor's appointments, and typical household routines will need to be scheduled in coordination with the homeschooling plan.\n\nAnother important change is that even if parents normally spend a lot of time with their children, homeschooling parents spend even more time with their kids. The amount of time needed to spend on homeschooling is a major lifestyle change that needs to be considered when parents decide on whether or not to homeschool. Though there are many ways for parents to secure time for themselves, it is important for them to recognize that they will need to spend significantly more time with their children than they do currently.",
                        "prompt": "All of the following are mentioned as sacrifices parents have to make for their children's successful homeschooling EXCEPT",
                        "choices": [
                              "family time",
                              "social status",
                              "financial security",
                              "physical and mental health"
                        ],
                        "answer": 1,
                        "explanation": "บทความกล่าวถึงเวลา (family time), ค่าใช้จ่าย/รายได้ (financial security) และความเครียด/ความเหนื่อยล้า (physical and mental health) แต่ไม่ได้กล่าวถึงสถานะทางสังคม คำตอบคือข้อ 2 social status"
                  },
                  {
                        "id": "f1-rea-53",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Considerations About Homeschooling",
                        "passage": "Every educational system offers great opportunities for children to learn new information and skills, as well as harness their own unique qualities and interests. Homeschooling is no different than public school, private school, charter school, unschooling, and other models in that there are pros and cons.\n\nMore family time is spent on homeschooling as parents have a more direct role in their child's daily learning. Consequently, these parents will have the satisfaction that their children are learning, developing skills, and maturing in a way that aligns to their goals and values. However, \"they\" have to plan school-time and activities and handle the administrative work of being a teacher with less time each day for themselves. This could lead to a potential for more stress and fatigue by taking on parenting and teacher responsibilities.\n\nAdded financial costs must be dedicated to education in homeschooling. While there are many free resources available, homeschool supplies such as textbooks, books, paper, art supplies, computers, software, and other homeschool tools cost money. Furthermore, by having to dedicate more time to teaching children at home than working and earning, the family may suffer a loss in income. Careful budgeting and time management skills will be essential if parents are going to homeschool.\n\nWhat's more, since a child will no longer be in a public school environment and all learning will take place in the home, the family's lifestyle and pace will change. As more time will be dedicated to homeschooling, daily chores, errands, doctor's appointments, and typical household routines will need to be scheduled in coordination with the homeschooling plan.\n\nAnother important change is that even if parents normally spend a lot of time with their children, homeschooling parents spend even more time with their kids. The amount of time needed to spend on homeschooling is a major lifestyle change that needs to be considered when parents decide on whether or not to homeschool. Though there are many ways for parents to secure time for themselves, it is important for them to recognize that they will need to spend significantly more time with their children than they do currently.",
                        "prompt": "The word \"they\" (paragraph 2) refers to",
                        "choices": [
                              "goals",
                              "values",
                              "parents",
                              "children"
                        ],
                        "answer": 2,
                        "explanation": "'they' ในประโยค 'they have to plan school-time and activities and handle the administrative work of being a teacher' หมายถึงผู้ปกครองที่ต้องวางแผนการเรียนและรับหน้าที่บริหารจัดการแบบครู คำตอบคือข้อ 3 parents"
                  },
                  {
                        "id": "f1-rea-54",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Considerations About Homeschooling",
                        "passage": "Every educational system offers great opportunities for children to learn new information and skills, as well as harness their own unique qualities and interests. Homeschooling is no different than public school, private school, charter school, unschooling, and other models in that there are pros and cons.\n\nMore family time is spent on homeschooling as parents have a more direct role in their child's daily learning. Consequently, these parents will have the satisfaction that their children are learning, developing skills, and maturing in a way that aligns to their goals and values. However, \"they\" have to plan school-time and activities and handle the administrative work of being a teacher with less time each day for themselves. This could lead to a potential for more stress and fatigue by taking on parenting and teacher responsibilities.\n\nAdded financial costs must be dedicated to education in homeschooling. While there are many free resources available, homeschool supplies such as textbooks, books, paper, art supplies, computers, software, and other homeschool tools cost money. Furthermore, by having to dedicate more time to teaching children at home than working and earning, the family may suffer a loss in income. Careful budgeting and time management skills will be essential if parents are going to homeschool.\n\nWhat's more, since a child will no longer be in a public school environment and all learning will take place in the home, the family's lifestyle and pace will change. As more time will be dedicated to homeschooling, daily chores, errands, doctor's appointments, and typical household routines will need to be scheduled in coordination with the homeschooling plan.\n\nAnother important change is that even if parents normally spend a lot of time with their children, homeschooling parents spend even more time with their kids. The amount of time needed to spend on homeschooling is a major lifestyle change that needs to be considered when parents decide on whether or not to homeschool. Though there are many ways for parents to secure time for themselves, it is important for them to recognize that they will need to spend significantly more time with their children than they do currently.",
                        "prompt": "What can be INFERRED from Paragraph 3?",
                        "choices": [
                              "Homeschooling is worth the extra expenses.",
                              "Homeschooling is better for wealthy families.",
                              "Homeschooling can cause financial burden for the family.",
                              "Homeschooling is less expensive than traditional school systems."
                        ],
                        "answer": 2,
                        "explanation": "ย่อหน้า 3 กล่าวว่า homeschooling ต้องมีค่าใช้จ่ายเพิ่มเติมทั้งอุปกรณ์การเรียนและรายได้ที่อาจสูญเสียไป จึงอนุมานได้ว่าอาจก่อให้เกิดภาระทางการเงินแก่ครอบครัว คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-rea-55",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Considerations About Homeschooling",
                        "passage": "Every educational system offers great opportunities for children to learn new information and skills, as well as harness their own unique qualities and interests. Homeschooling is no different than public school, private school, charter school, unschooling, and other models in that there are pros and cons.\n\nMore family time is spent on homeschooling as parents have a more direct role in their child's daily learning. Consequently, these parents will have the satisfaction that their children are learning, developing skills, and maturing in a way that aligns to their goals and values. However, \"they\" have to plan school-time and activities and handle the administrative work of being a teacher with less time each day for themselves. This could lead to a potential for more stress and fatigue by taking on parenting and teacher responsibilities.\n\nAdded financial costs must be dedicated to education in homeschooling. While there are many free resources available, homeschool supplies such as textbooks, books, paper, art supplies, computers, software, and other homeschool tools cost money. Furthermore, by having to dedicate more time to teaching children at home than working and earning, the family may suffer a loss in income. Careful budgeting and time management skills will be essential if parents are going to homeschool.\n\nWhat's more, since a child will no longer be in a public school environment and all learning will take place in the home, the family's lifestyle and pace will change. As more time will be dedicated to homeschooling, daily chores, errands, doctor's appointments, and typical household routines will need to be scheduled in coordination with the homeschooling plan.\n\nAnother important change is that even if parents normally spend a lot of time with their children, homeschooling parents spend even more time with their kids. The amount of time needed to spend on homeschooling is a major lifestyle change that needs to be considered when parents decide on whether or not to homeschool. Though there are many ways for parents to secure time for themselves, it is important for them to recognize that they will need to spend significantly more time with their children than they do currently.",
                        "prompt": "Why can homeschooling cause income loss for the family?",
                        "choices": [
                              "Parents have less time to earn income.",
                              "School supplies for homeschool are very costly.",
                              "Parents lack careful budgeting and management skills.",
                              "Children who are homeschooled cannot get free resources."
                        ],
                        "answer": 0,
                        "explanation": "จากประโยค 'by having to dedicate more time to teaching children at home than working and earning, the family may suffer a loss in income' คำตอบคือข้อ 1 Parents have less time to earn income."
                  },
                  {
                        "id": "f1-rea-56",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Considerations About Homeschooling",
                        "passage": "Every educational system offers great opportunities for children to learn new information and skills, as well as harness their own unique qualities and interests. Homeschooling is no different than public school, private school, charter school, unschooling, and other models in that there are pros and cons.\n\nMore family time is spent on homeschooling as parents have a more direct role in their child's daily learning. Consequently, these parents will have the satisfaction that their children are learning, developing skills, and maturing in a way that aligns to their goals and values. However, \"they\" have to plan school-time and activities and handle the administrative work of being a teacher with less time each day for themselves. This could lead to a potential for more stress and fatigue by taking on parenting and teacher responsibilities.\n\nAdded financial costs must be dedicated to education in homeschooling. While there are many free resources available, homeschool supplies such as textbooks, books, paper, art supplies, computers, software, and other homeschool tools cost money. Furthermore, by having to dedicate more time to teaching children at home than working and earning, the family may suffer a loss in income. Careful budgeting and time management skills will be essential if parents are going to homeschool.\n\nWhat's more, since a child will no longer be in a public school environment and all learning will take place in the home, the family's lifestyle and pace will change. As more time will be dedicated to homeschooling, daily chores, errands, doctor's appointments, and typical household routines will need to be scheduled in coordination with the homeschooling plan.\n\nAnother important change is that even if parents normally spend a lot of time with their children, homeschooling parents spend even more time with their kids. The amount of time needed to spend on homeschooling is a major lifestyle change that needs to be considered when parents decide on whether or not to homeschool. Though there are many ways for parents to secure time for themselves, it is important for them to recognize that they will need to spend significantly more time with their children than they do currently.",
                        "prompt": "The word \"errands\" (paragraph 4) is closest in meaning to",
                        "choices": [
                              "duties",
                              "practices",
                              "programs",
                              "responsibilities"
                        ],
                        "answer": 0,
                        "explanation": "errand(s) แปลว่า การไปทำธุระ ใกล้เคียงกับคำว่า duties (หน้าที่/ภาระที่ต้องไปทำ) มากที่สุด คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-rea-57",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Considerations About Homeschooling",
                        "passage": "Every educational system offers great opportunities for children to learn new information and skills, as well as harness their own unique qualities and interests. Homeschooling is no different than public school, private school, charter school, unschooling, and other models in that there are pros and cons.\n\nMore family time is spent on homeschooling as parents have a more direct role in their child's daily learning. Consequently, these parents will have the satisfaction that their children are learning, developing skills, and maturing in a way that aligns to their goals and values. However, \"they\" have to plan school-time and activities and handle the administrative work of being a teacher with less time each day for themselves. This could lead to a potential for more stress and fatigue by taking on parenting and teacher responsibilities.\n\nAdded financial costs must be dedicated to education in homeschooling. While there are many free resources available, homeschool supplies such as textbooks, books, paper, art supplies, computers, software, and other homeschool tools cost money. Furthermore, by having to dedicate more time to teaching children at home than working and earning, the family may suffer a loss in income. Careful budgeting and time management skills will be essential if parents are going to homeschool.\n\nWhat's more, since a child will no longer be in a public school environment and all learning will take place in the home, the family's lifestyle and pace will change. As more time will be dedicated to homeschooling, daily chores, errands, doctor's appointments, and typical household routines will need to be scheduled in coordination with the homeschooling plan.\n\nAnother important change is that even if parents normally spend a lot of time with their children, homeschooling parents spend even more time with their kids. The amount of time needed to spend on homeschooling is a major lifestyle change that needs to be considered when parents decide on whether or not to homeschool. Though there are many ways for parents to secure time for themselves, it is important for them to recognize that they will need to spend significantly more time with their children than they do currently.",
                        "prompt": "Homeschooling will lead to a change in a family's lifestyle and pace because",
                        "choices": [
                              "family members will communicate less",
                              "parents will have to do their own chores",
                              "family members will spend more time at home",
                              "children will be responsible for their own learning"
                        ],
                        "answer": 2,
                        "explanation": "การใช้เวลาที่บ้านมากขึ้นเป็นสาเหตุหลักที่นำไปสู่การเปลี่ยนแปลงกิจวัตรและการจัดตารางเวลาของครอบครัวตามที่กล่าวในย่อหน้า 4 คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-rea-58",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Considerations About Homeschooling",
                        "passage": "Every educational system offers great opportunities for children to learn new information and skills, as well as harness their own unique qualities and interests. Homeschooling is no different than public school, private school, charter school, unschooling, and other models in that there are pros and cons.\n\nMore family time is spent on homeschooling as parents have a more direct role in their child's daily learning. Consequently, these parents will have the satisfaction that their children are learning, developing skills, and maturing in a way that aligns to their goals and values. However, \"they\" have to plan school-time and activities and handle the administrative work of being a teacher with less time each day for themselves. This could lead to a potential for more stress and fatigue by taking on parenting and teacher responsibilities.\n\nAdded financial costs must be dedicated to education in homeschooling. While there are many free resources available, homeschool supplies such as textbooks, books, paper, art supplies, computers, software, and other homeschool tools cost money. Furthermore, by having to dedicate more time to teaching children at home than working and earning, the family may suffer a loss in income. Careful budgeting and time management skills will be essential if parents are going to homeschool.\n\nWhat's more, since a child will no longer be in a public school environment and all learning will take place in the home, the family's lifestyle and pace will change. As more time will be dedicated to homeschooling, daily chores, errands, doctor's appointments, and typical household routines will need to be scheduled in coordination with the homeschooling plan.\n\nAnother important change is that even if parents normally spend a lot of time with their children, homeschooling parents spend even more time with their kids. The amount of time needed to spend on homeschooling is a major lifestyle change that needs to be considered when parents decide on whether or not to homeschool. Though there are many ways for parents to secure time for themselves, it is important for them to recognize that they will need to spend significantly more time with their children than they do currently.",
                        "prompt": "Which of the following could BEST be added into the blank in the last paragraph (“even if parents normally spend a lot of time with their children, ___”)?",
                        "choices": [
                              "homeschooling parents have more freedom with their kids",
                              "homeschooling parents spend even more time with their kids",
                              "homeschooling parents are more flexible with timetables and schedules",
                              "homeschooling parents are able to choose the time to spend with their kids"
                        ],
                        "answer": 1,
                        "explanation": "ประโยคถัดไปพูดถึง 'The amount of time needed to spend on homeschooling...' ซึ่งเชื่อมโยงกับการที่ผู้ปกครองต้องใช้เวลากับลูกมากยิ่งขึ้นไปอีก คำตอบคือข้อ 2"
                  },
                  {
                        "id": "f1-rea-59",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Considerations About Homeschooling",
                        "passage": "Every educational system offers great opportunities for children to learn new information and skills, as well as harness their own unique qualities and interests. Homeschooling is no different than public school, private school, charter school, unschooling, and other models in that there are pros and cons.\n\nMore family time is spent on homeschooling as parents have a more direct role in their child's daily learning. Consequently, these parents will have the satisfaction that their children are learning, developing skills, and maturing in a way that aligns to their goals and values. However, \"they\" have to plan school-time and activities and handle the administrative work of being a teacher with less time each day for themselves. This could lead to a potential for more stress and fatigue by taking on parenting and teacher responsibilities.\n\nAdded financial costs must be dedicated to education in homeschooling. While there are many free resources available, homeschool supplies such as textbooks, books, paper, art supplies, computers, software, and other homeschool tools cost money. Furthermore, by having to dedicate more time to teaching children at home than working and earning, the family may suffer a loss in income. Careful budgeting and time management skills will be essential if parents are going to homeschool.\n\nWhat's more, since a child will no longer be in a public school environment and all learning will take place in the home, the family's lifestyle and pace will change. As more time will be dedicated to homeschooling, daily chores, errands, doctor's appointments, and typical household routines will need to be scheduled in coordination with the homeschooling plan.\n\nAnother important change is that even if parents normally spend a lot of time with their children, homeschooling parents spend even more time with their kids. The amount of time needed to spend on homeschooling is a major lifestyle change that needs to be considered when parents decide on whether or not to homeschool. Though there are many ways for parents to secure time for themselves, it is important for them to recognize that they will need to spend significantly more time with their children than they do currently.",
                        "prompt": "It is suggested in the last paragraph that the most important factor to be taken into consideration when adopting homeschooling is",
                        "choices": [
                              "learning goals",
                              "family lifestyle",
                              "financial resources",
                              "parents' personal time management"
                        ],
                        "answer": 3,
                        "explanation": "ย่อหน้าสุดท้ายเน้นย้ำเรื่องเวลาที่ผู้ปกครองต้องจัดสรรให้กับลูก ซึ่งเป็นเรื่องการบริหารเวลาส่วนตัวของผู้ปกครอง คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-rea-60",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Considerations About Homeschooling",
                        "passage": "Every educational system offers great opportunities for children to learn new information and skills, as well as harness their own unique qualities and interests. Homeschooling is no different than public school, private school, charter school, unschooling, and other models in that there are pros and cons.\n\nMore family time is spent on homeschooling as parents have a more direct role in their child's daily learning. Consequently, these parents will have the satisfaction that their children are learning, developing skills, and maturing in a way that aligns to their goals and values. However, \"they\" have to plan school-time and activities and handle the administrative work of being a teacher with less time each day for themselves. This could lead to a potential for more stress and fatigue by taking on parenting and teacher responsibilities.\n\nAdded financial costs must be dedicated to education in homeschooling. While there are many free resources available, homeschool supplies such as textbooks, books, paper, art supplies, computers, software, and other homeschool tools cost money. Furthermore, by having to dedicate more time to teaching children at home than working and earning, the family may suffer a loss in income. Careful budgeting and time management skills will be essential if parents are going to homeschool.\n\nWhat's more, since a child will no longer be in a public school environment and all learning will take place in the home, the family's lifestyle and pace will change. As more time will be dedicated to homeschooling, daily chores, errands, doctor's appointments, and typical household routines will need to be scheduled in coordination with the homeschooling plan.\n\nAnother important change is that even if parents normally spend a lot of time with their children, homeschooling parents spend even more time with their kids. The amount of time needed to spend on homeschooling is a major lifestyle change that needs to be considered when parents decide on whether or not to homeschool. Though there are many ways for parents to secure time for themselves, it is important for them to recognize that they will need to spend significantly more time with their children than they do currently.",
                        "prompt": "If the text continued, what kind of information could BEST be added in the next paragraph?",
                        "choices": [
                              "Benefits of homeschooling",
                              "Homeschooling management",
                              "The author's conclusion about homeschooling",
                              "Parents' roles and responsibilities in homeschooling"
                        ],
                        "answer": 2,
                        "explanation": "เนื้อหาทั้งบทความเป็นการชั่งน้ำหนักข้อดีข้อเสียของ homeschooling ย่อหน้าถัดไปที่เหมาะสมที่สุดคือบทสรุปของผู้เขียนเกี่ยวกับเรื่องนี้ คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-rea-61",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — An Idea to Keep Rovers Elevated Longer",
                        "passage": "Aerospace engineers are always looking for newer ways to support their experiments on extra-terrestrial bodies like the Moon and asteroids. One of the main impediments to their work is the lack of energy sources that will allow them to run equipment for a longer duration. Recently, engineers at MIT have envisioned a new concept to harness the Moon's natural charge to make a rover float across the lunar surface. In the absence of an atmosphere, both the Earth's companion and asteroids build electric fields through direct exposure to the Sun and surrounding plasma. This surface charge on the Moon is strong enough to levitate dust more than one meter above the ground. This is much like the way static electricity causes the human hair to stand upright.\n\nEngineers at NASA and other such space agencies have proposed that gliders could be built with wings made of Mylar, a material that naturally holds the same charge as surfaces on airless bodies. They reasoned that the similarly charged surfaces should repel each other with a force that lofts the glider off the ground. However, researchers also theorized that such design would likely be limited to smaller objects like asteroids and moons. The lift-force generated from this repulsion would be counteracted by the gravitational pull on larger planetary bodies.\n\nTo get around this size limitation, MIT researchers have thought of using tiny ion beams to increase the vehicle's charge and also boost the surface's repelling charge. They have done an initial feasibility study and built a retro-style, disc-shaped flying saucer. The study, published in the Journal of Spacecraft and Rockets, concluded that the ion boost should be strong enough to levitate a two-pound object on the Moon and Moon-like asteroids. The team also pointed out that this kind of ionic design uses very little power to generate a lot of voltage.\n\nPaulo Lozano, a co-author of the study, said that this idea will be beneficial for the lunar missions as scientists will not have to worry about wheels or moving parts of a levitating rover. About the topography of an asteroid, Lozano said that it could be very uneven, but as long as there is a controlled mechanism to keep the rover floating, it can cruise over very rough and unexplored terrain.",
                        "prompt": "What does the text mainly discuss?",
                        "choices": [
                              "An idea to keep rovers elevated longer",
                              "The adverse effects of the Moon's natural charge",
                              "Impediments to experiments on extra-terrestrial bodies",
                              "An aerospace project on how to use energy sources more efficiently"
                        ],
                        "answer": 0,
                        "explanation": "บทความนี้กล่าวถึงแนวคิดที่จะทำให้ยานสำรวจ (rover) สามารถลอยอยู่เหนือพื้นผิวดวงจันทร์และดาวเคราะห์น้อยได้นานขึ้นโดยไม่ต้องใช้ล้อหรือชิ้นส่วนเคลื่อนไหว คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-rea-62",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — An Idea to Keep Rovers Elevated Longer",
                        "passage": "Aerospace engineers are always looking for newer ways to support their experiments on extra-terrestrial bodies like the Moon and asteroids. One of the main impediments to their work is the lack of energy sources that will allow them to run equipment for a longer duration. Recently, engineers at MIT have envisioned a new concept to harness the Moon's natural charge to make a rover float across the lunar surface. In the absence of an atmosphere, both the Earth's companion and asteroids build electric fields through direct exposure to the Sun and surrounding plasma. This surface charge on the Moon is strong enough to levitate dust more than one meter above the ground. This is much like the way static electricity causes the human hair to stand upright.\n\nEngineers at NASA and other such space agencies have proposed that gliders could be built with wings made of Mylar, a material that naturally holds the same charge as surfaces on airless bodies. They reasoned that the similarly charged surfaces should repel each other with a force that lofts the glider off the ground. However, researchers also theorized that such design would likely be limited to smaller objects like asteroids and moons. The lift-force generated from this repulsion would be counteracted by the gravitational pull on larger planetary bodies.\n\nTo get around this size limitation, MIT researchers have thought of using tiny ion beams to increase the vehicle's charge and also boost the surface's repelling charge. They have done an initial feasibility study and built a retro-style, disc-shaped flying saucer. The study, published in the Journal of Spacecraft and Rockets, concluded that the ion boost should be strong enough to levitate a two-pound object on the Moon and Moon-like asteroids. The team also pointed out that this kind of ionic design uses very little power to generate a lot of voltage.\n\nPaulo Lozano, a co-author of the study, said that this idea will be beneficial for the lunar missions as scientists will not have to worry about wheels or moving parts of a levitating rover. About the topography of an asteroid, Lozano said that it could be very uneven, but as long as there is a controlled mechanism to keep the rover floating, it can cruise over very rough and unexplored terrain.",
                        "prompt": "The word \"harness\" (paragraph 1) is closest in meaning to",
                        "choices": [
                              "utilize",
                              "expose",
                              "optimize",
                              "suppress"
                        ],
                        "answer": 0,
                        "explanation": "คำว่า \"harness\" ในที่นี้หมายถึง นำมาใช้ประโยชน์ จากประโยคที่วิศวกรเล็งจะนำประจุธรรมชาติของดวงจันทร์มาใช้ทำให้ยานลอยตัวได้ คำตอบคือข้อ 1 utilize"
                  },
                  {
                        "id": "f1-rea-63",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — An Idea to Keep Rovers Elevated Longer",
                        "passage": "Aerospace engineers are always looking for newer ways to support their experiments on extra-terrestrial bodies like the Moon and asteroids. One of the main impediments to their work is the lack of energy sources that will allow them to run equipment for a longer duration. Recently, engineers at MIT have envisioned a new concept to harness the Moon's natural charge to make a rover float across the lunar surface. In the absence of an atmosphere, both the Earth's companion and asteroids build electric fields through direct exposure to the Sun and surrounding plasma. This surface charge on the Moon is strong enough to levitate dust more than one meter above the ground. This is much like the way static electricity causes the human hair to stand upright.\n\nEngineers at NASA and other such space agencies have proposed that gliders could be built with wings made of Mylar, a material that naturally holds the same charge as surfaces on airless bodies. They reasoned that the similarly charged surfaces should repel each other with a force that lofts the glider off the ground. However, researchers also theorized that such design would likely be limited to smaller objects like asteroids and moons. The lift-force generated from this repulsion would be counteracted by the gravitational pull on larger planetary bodies.\n\nTo get around this size limitation, MIT researchers have thought of using tiny ion beams to increase the vehicle's charge and also boost the surface's repelling charge. They have done an initial feasibility study and built a retro-style, disc-shaped flying saucer. The study, published in the Journal of Spacecraft and Rockets, concluded that the ion boost should be strong enough to levitate a two-pound object on the Moon and Moon-like asteroids. The team also pointed out that this kind of ionic design uses very little power to generate a lot of voltage.\n\nPaulo Lozano, a co-author of the study, said that this idea will be beneficial for the lunar missions as scientists will not have to worry about wheels or moving parts of a levitating rover. About the topography of an asteroid, Lozano said that it could be very uneven, but as long as there is a controlled mechanism to keep the rover floating, it can cruise over very rough and unexplored terrain.",
                        "prompt": "What contributes to the creation of a natural charge on airless bodies?",
                        "choices": [
                              "Mylar",
                              "Static electricity",
                              "Exposure to the Sun",
                              "Levitated dust on the surface"
                        ],
                        "answer": 2,
                        "explanation": "บทความระบุว่าดวงจันทร์และดาวเคราะห์น้อยสร้างสนามไฟฟ้าผ่านการได้รับแสง/พลังงานโดยตรงจากดวงอาทิตย์และพลาสมาโดยรอบ คำตอบคือข้อ 3 Exposure to the Sun"
                  },
                  {
                        "id": "f1-rea-64",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — An Idea to Keep Rovers Elevated Longer",
                        "passage": "Aerospace engineers are always looking for newer ways to support their experiments on extra-terrestrial bodies like the Moon and asteroids. One of the main impediments to their work is the lack of energy sources that will allow them to run equipment for a longer duration. Recently, engineers at MIT have envisioned a new concept to harness the Moon's natural charge to make a rover float across the lunar surface. In the absence of an atmosphere, both the Earth's companion and asteroids build electric fields through direct exposure to the Sun and surrounding plasma. This surface charge on the Moon is strong enough to levitate dust more than one meter above the ground. This is much like the way static electricity causes the human hair to stand upright.\n\nEngineers at NASA and other such space agencies have proposed that gliders could be built with wings made of Mylar, a material that naturally holds the same charge as surfaces on airless bodies. They reasoned that the similarly charged surfaces should repel each other with a force that lofts the glider off the ground. However, researchers also theorized that such design would likely be limited to smaller objects like asteroids and moons. The lift-force generated from this repulsion would be counteracted by the gravitational pull on larger planetary bodies.\n\nTo get around this size limitation, MIT researchers have thought of using tiny ion beams to increase the vehicle's charge and also boost the surface's repelling charge. They have done an initial feasibility study and built a retro-style, disc-shaped flying saucer. The study, published in the Journal of Spacecraft and Rockets, concluded that the ion boost should be strong enough to levitate a two-pound object on the Moon and Moon-like asteroids. The team also pointed out that this kind of ionic design uses very little power to generate a lot of voltage.\n\nPaulo Lozano, a co-author of the study, said that this idea will be beneficial for the lunar missions as scientists will not have to worry about wheels or moving parts of a levitating rover. About the topography of an asteroid, Lozano said that it could be very uneven, but as long as there is a controlled mechanism to keep the rover floating, it can cruise over very rough and unexplored terrain.",
                        "prompt": "What is the author's purpose in mentioning static electricity and the human hair at the end of the first paragraph?",
                        "choices": [
                              "To demonstrate that the Moon's natural charge is strong",
                              "To provide an example of how static electricity can affect humans",
                              "To illustrate how the Moon's surface charge works in levitating objects",
                              "To differentiate the Moon's surface charge from the Earth's static electricity"
                        ],
                        "answer": 2,
                        "explanation": "ผู้เขียนใช้ตัวอย่างไฟฟ้าสถิตที่ทำให้เส้นผมลุกชันเพื่อช่วยให้ผู้อ่านเห็นภาพว่าประจุไฟฟ้าบนพื้นผิวดวงจันทร์ทำให้วัตถุลอยตัวได้อย่างไร คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-rea-65",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — An Idea to Keep Rovers Elevated Longer",
                        "passage": "Aerospace engineers are always looking for newer ways to support their experiments on extra-terrestrial bodies like the Moon and asteroids. One of the main impediments to their work is the lack of energy sources that will allow them to run equipment for a longer duration. Recently, engineers at MIT have envisioned a new concept to harness the Moon's natural charge to make a rover float across the lunar surface. In the absence of an atmosphere, both the Earth's companion and asteroids build electric fields through direct exposure to the Sun and surrounding plasma. This surface charge on the Moon is strong enough to levitate dust more than one meter above the ground. This is much like the way static electricity causes the human hair to stand upright.\n\nEngineers at NASA and other such space agencies have proposed that gliders could be built with wings made of Mylar, a material that naturally holds the same charge as surfaces on airless bodies. They reasoned that the similarly charged surfaces should repel each other with a force that lofts the glider off the ground. However, researchers also theorized that such design would likely be limited to smaller objects like asteroids and moons. The lift-force generated from this repulsion would be counteracted by the gravitational pull on larger planetary bodies.\n\nTo get around this size limitation, MIT researchers have thought of using tiny ion beams to increase the vehicle's charge and also boost the surface's repelling charge. They have done an initial feasibility study and built a retro-style, disc-shaped flying saucer. The study, published in the Journal of Spacecraft and Rockets, concluded that the ion boost should be strong enough to levitate a two-pound object on the Moon and Moon-like asteroids. The team also pointed out that this kind of ionic design uses very little power to generate a lot of voltage.\n\nPaulo Lozano, a co-author of the study, said that this idea will be beneficial for the lunar missions as scientists will not have to worry about wheels or moving parts of a levitating rover. About the topography of an asteroid, Lozano said that it could be very uneven, but as long as there is a controlled mechanism to keep the rover floating, it can cruise over very rough and unexplored terrain.",
                        "prompt": "What does the text say about Mylar?",
                        "choices": [
                              "It can generate and hold lunar surface charge.",
                              "It is a material used to make gliders' wings more durable.",
                              "It creates an effect allowing gliders to float and remain in the air.",
                              "It is a type of material found naturally on the surface of airless bodies."
                        ],
                        "answer": 2,
                        "explanation": "Mylar เป็นวัสดุที่ทำให้ปีกเครื่องร่อนมีประจุแบบเดียวกับพื้นผิวดาวที่ไม่มีชั้นบรรยากาศ ทำให้เกิดแรงผลักที่ช่วยให้เครื่องร่อนลอยตัวอยู่ในอากาศได้ คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-rea-66",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — An Idea to Keep Rovers Elevated Longer",
                        "passage": "Aerospace engineers are always looking for newer ways to support their experiments on extra-terrestrial bodies like the Moon and asteroids. One of the main impediments to their work is the lack of energy sources that will allow them to run equipment for a longer duration. Recently, engineers at MIT have envisioned a new concept to harness the Moon's natural charge to make a rover float across the lunar surface. In the absence of an atmosphere, both the Earth's companion and asteroids build electric fields through direct exposure to the Sun and surrounding plasma. This surface charge on the Moon is strong enough to levitate dust more than one meter above the ground. This is much like the way static electricity causes the human hair to stand upright.\n\nEngineers at NASA and other such space agencies have proposed that gliders could be built with wings made of Mylar, a material that naturally holds the same charge as surfaces on airless bodies. They reasoned that the similarly charged surfaces should repel each other with a force that lofts the glider off the ground. However, researchers also theorized that such design would likely be limited to smaller objects like asteroids and moons. The lift-force generated from this repulsion would be counteracted by the gravitational pull on larger planetary bodies.\n\nTo get around this size limitation, MIT researchers have thought of using tiny ion beams to increase the vehicle's charge and also boost the surface's repelling charge. They have done an initial feasibility study and built a retro-style, disc-shaped flying saucer. The study, published in the Journal of Spacecraft and Rockets, concluded that the ion boost should be strong enough to levitate a two-pound object on the Moon and Moon-like asteroids. The team also pointed out that this kind of ionic design uses very little power to generate a lot of voltage.\n\nPaulo Lozano, a co-author of the study, said that this idea will be beneficial for the lunar missions as scientists will not have to worry about wheels or moving parts of a levitating rover. About the topography of an asteroid, Lozano said that it could be very uneven, but as long as there is a controlled mechanism to keep the rover floating, it can cruise over very rough and unexplored terrain.",
                        "prompt": "It can be INFERRED from Paragraph 2 that if a glider with the proposed design were sent out to a larger planetary body,",
                        "choices": [
                              "the glider's levitation height would be too high",
                              "the glider would crash due to the counteracting force",
                              "the force to levitate the glider would become stronger",
                              "the glider's wings would not be able to detect the planet's surface charge"
                        ],
                        "answer": 1,
                        "explanation": "ย่อหน้า 2 ระบุว่าแรงยกจากแรงผลักจะถูกหักล้างด้วยแรงโน้มถ่วงที่มากขึ้นบนดาวเคราะห์ขนาดใหญ่ จึงอนุมานได้ว่าเครื่องร่อนน่าจะตกและเสียหาย คำตอบคือข้อ 2"
                  },
                  {
                        "id": "f1-rea-67",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — An Idea to Keep Rovers Elevated Longer",
                        "passage": "Aerospace engineers are always looking for newer ways to support their experiments on extra-terrestrial bodies like the Moon and asteroids. One of the main impediments to their work is the lack of energy sources that will allow them to run equipment for a longer duration. Recently, engineers at MIT have envisioned a new concept to harness the Moon's natural charge to make a rover float across the lunar surface. In the absence of an atmosphere, both the Earth's companion and asteroids build electric fields through direct exposure to the Sun and surrounding plasma. This surface charge on the Moon is strong enough to levitate dust more than one meter above the ground. This is much like the way static electricity causes the human hair to stand upright.\n\nEngineers at NASA and other such space agencies have proposed that gliders could be built with wings made of Mylar, a material that naturally holds the same charge as surfaces on airless bodies. They reasoned that the similarly charged surfaces should repel each other with a force that lofts the glider off the ground. However, researchers also theorized that such design would likely be limited to smaller objects like asteroids and moons. The lift-force generated from this repulsion would be counteracted by the gravitational pull on larger planetary bodies.\n\nTo get around this size limitation, MIT researchers have thought of using tiny ion beams to increase the vehicle's charge and also boost the surface's repelling charge. They have done an initial feasibility study and built a retro-style, disc-shaped flying saucer. The study, published in the Journal of Spacecraft and Rockets, concluded that the ion boost should be strong enough to levitate a two-pound object on the Moon and Moon-like asteroids. The team also pointed out that this kind of ionic design uses very little power to generate a lot of voltage.\n\nPaulo Lozano, a co-author of the study, said that this idea will be beneficial for the lunar missions as scientists will not have to worry about wheels or moving parts of a levitating rover. About the topography of an asteroid, Lozano said that it could be very uneven, but as long as there is a controlled mechanism to keep the rover floating, it can cruise over very rough and unexplored terrain.",
                        "prompt": "Repulsion will likely occur when",
                        "choices": [
                              "like charges interact",
                              "the gravitational pull is strong",
                              "a glider is lofted off the ground",
                              "a small asteroid generates its lift-force"
                        ],
                        "answer": 0,
                        "explanation": "จากข้อความ 'the similarly charged surfaces should repel each other' แรงผลักจะเกิดขึ้นเมื่อประจุที่เหมือนกันมีปฏิสัมพันธ์กัน คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-rea-68",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — An Idea to Keep Rovers Elevated Longer",
                        "passage": "Aerospace engineers are always looking for newer ways to support their experiments on extra-terrestrial bodies like the Moon and asteroids. One of the main impediments to their work is the lack of energy sources that will allow them to run equipment for a longer duration. Recently, engineers at MIT have envisioned a new concept to harness the Moon's natural charge to make a rover float across the lunar surface. In the absence of an atmosphere, both the Earth's companion and asteroids build electric fields through direct exposure to the Sun and surrounding plasma. This surface charge on the Moon is strong enough to levitate dust more than one meter above the ground. This is much like the way static electricity causes the human hair to stand upright.\n\nEngineers at NASA and other such space agencies have proposed that gliders could be built with wings made of Mylar, a material that naturally holds the same charge as surfaces on airless bodies. They reasoned that the similarly charged surfaces should repel each other with a force that lofts the glider off the ground. However, researchers also theorized that such design would likely be limited to smaller objects like asteroids and moons. The lift-force generated from this repulsion would be counteracted by the gravitational pull on larger planetary bodies.\n\nTo get around this size limitation, MIT researchers have thought of using tiny ion beams to increase the vehicle's charge and also boost the surface's repelling charge. They have done an initial feasibility study and built a retro-style, disc-shaped flying saucer. The study, published in the Journal of Spacecraft and Rockets, concluded that the ion boost should be strong enough to levitate a two-pound object on the Moon and Moon-like asteroids. The team also pointed out that this kind of ionic design uses very little power to generate a lot of voltage.\n\nPaulo Lozano, a co-author of the study, said that this idea will be beneficial for the lunar missions as scientists will not have to worry about wheels or moving parts of a levitating rover. About the topography of an asteroid, Lozano said that it could be very uneven, but as long as there is a controlled mechanism to keep the rover floating, it can cruise over very rough and unexplored terrain.",
                        "prompt": "Which of the following statements BEST fits the blank at the beginning of Paragraph 3?",
                        "choices": [
                              "MIT engineers have recently pioneered the development of ionic thrusters to propel and physically maneuver small satellites in space.",
                              "Researchers at MIT predicted that a small rover, weighing about two pounds, could achieve levitation of about one centimeter off the ground.",
                              "To get around this size limitation, MIT researchers have thought of using tiny ion beams to increase the vehicle's charge and also boost the surface's repelling charge.",
                              "To be sure the model represented what could happen in a real environment in space, researchers at MIT ran a simple scenario using a small hexagonal test vehicle."
                        ],
                        "answer": 2,
                        "explanation": "ท้ายย่อหน้า 2 กล่าวถึงข้อจำกัดเรื่องขนาดของดาวเคราะห์ ประโยคที่เหมาะสมที่สุดสำหรับต้นย่อหน้า 3 จึงต้องพูดถึงวิธีที่นักวิจัยคิดค้นเพื่อแก้ปัญหาข้อจำกัดดังกล่าว คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-rea-69",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — An Idea to Keep Rovers Elevated Longer",
                        "passage": "Aerospace engineers are always looking for newer ways to support their experiments on extra-terrestrial bodies like the Moon and asteroids. One of the main impediments to their work is the lack of energy sources that will allow them to run equipment for a longer duration. Recently, engineers at MIT have envisioned a new concept to harness the Moon's natural charge to make a rover float across the lunar surface. In the absence of an atmosphere, both the Earth's companion and asteroids build electric fields through direct exposure to the Sun and surrounding plasma. This surface charge on the Moon is strong enough to levitate dust more than one meter above the ground. This is much like the way static electricity causes the human hair to stand upright.\n\nEngineers at NASA and other such space agencies have proposed that gliders could be built with wings made of Mylar, a material that naturally holds the same charge as surfaces on airless bodies. They reasoned that the similarly charged surfaces should repel each other with a force that lofts the glider off the ground. However, researchers also theorized that such design would likely be limited to smaller objects like asteroids and moons. The lift-force generated from this repulsion would be counteracted by the gravitational pull on larger planetary bodies.\n\nTo get around this size limitation, MIT researchers have thought of using tiny ion beams to increase the vehicle's charge and also boost the surface's repelling charge. They have done an initial feasibility study and built a retro-style, disc-shaped flying saucer. The study, published in the Journal of Spacecraft and Rockets, concluded that the ion boost should be strong enough to levitate a two-pound object on the Moon and Moon-like asteroids. The team also pointed out that this kind of ionic design uses very little power to generate a lot of voltage.\n\nPaulo Lozano, a co-author of the study, said that this idea will be beneficial for the lunar missions as scientists will not have to worry about wheels or moving parts of a levitating rover. About the topography of an asteroid, Lozano said that it could be very uneven, but as long as there is a controlled mechanism to keep the rover floating, it can cruise over very rough and unexplored terrain.",
                        "prompt": "What does \"it\" (paragraph 4) refer to?",
                        "choices": [
                              "The rover",
                              "The asteroid",
                              "The topography",
                              "The controlled mechanism"
                        ],
                        "answer": 0,
                        "explanation": "จากอนุประโยค '...it can cruise over very rough and unexplored terrain' มีเพียง 'the rover' เท่านั้นที่แทนที่ด้วย it แล้วสื่อความได้สอดคล้องกับบริบท คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-rea-70",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — An Idea to Keep Rovers Elevated Longer",
                        "passage": "Aerospace engineers are always looking for newer ways to support their experiments on extra-terrestrial bodies like the Moon and asteroids. One of the main impediments to their work is the lack of energy sources that will allow them to run equipment for a longer duration. Recently, engineers at MIT have envisioned a new concept to harness the Moon's natural charge to make a rover float across the lunar surface. In the absence of an atmosphere, both the Earth's companion and asteroids build electric fields through direct exposure to the Sun and surrounding plasma. This surface charge on the Moon is strong enough to levitate dust more than one meter above the ground. This is much like the way static electricity causes the human hair to stand upright.\n\nEngineers at NASA and other such space agencies have proposed that gliders could be built with wings made of Mylar, a material that naturally holds the same charge as surfaces on airless bodies. They reasoned that the similarly charged surfaces should repel each other with a force that lofts the glider off the ground. However, researchers also theorized that such design would likely be limited to smaller objects like asteroids and moons. The lift-force generated from this repulsion would be counteracted by the gravitational pull on larger planetary bodies.\n\nTo get around this size limitation, MIT researchers have thought of using tiny ion beams to increase the vehicle's charge and also boost the surface's repelling charge. They have done an initial feasibility study and built a retro-style, disc-shaped flying saucer. The study, published in the Journal of Spacecraft and Rockets, concluded that the ion boost should be strong enough to levitate a two-pound object on the Moon and Moon-like asteroids. The team also pointed out that this kind of ionic design uses very little power to generate a lot of voltage.\n\nPaulo Lozano, a co-author of the study, said that this idea will be beneficial for the lunar missions as scientists will not have to worry about wheels or moving parts of a levitating rover. About the topography of an asteroid, Lozano said that it could be very uneven, but as long as there is a controlled mechanism to keep the rover floating, it can cruise over very rough and unexplored terrain.",
                        "prompt": "What can logically be predicted to happen next as a result of the study?",
                        "choices": [
                              "Hovering rovers could be developed and tested on the surface of the Moon and asteroids.",
                              "The topography of asteroids will be taken into account in the development of future rovers.",
                              "Soil samples collected from extra-terrestrial bodies will be sent back to Earth for investigation.",
                              "Wheels and moving parts of rovers might be further developed to better handle uneven and bumpy areas."
                        ],
                        "answer": 0,
                        "explanation": "เนื่องจากทีมวิจัยพบวิธีทำให้ยานลอยตัวได้สำเร็จแม้บนดาวเคราะห์ที่ใหญ่ขึ้น จึงมีความเป็นไปได้ว่าจะมีการพัฒนาและทดสอบยานสำรวจแบบลอยตัวบนดวงจันทร์และดาวเคราะห์น้อยต่อไป คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-rea-71",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Vesuvius",
                        "passage": "Vesuvius is one of Europe's most dangerous volcanoes. More than three million people live in its immediate vicinity. In the past, there were explosive eruptions that destroyed entire towns in the area. So, the pressing question is: When will Vesuvius erupt again and how strong could the eruption be?\n\nTo answer this question, a group of researchers has taken a close look at the largest eruptions of Vesuvius over the last 10,000 years. This allows them to better assess whether a dangerous event might be expected in the foreseeable future. The eruptions studied include the Avellino eruption of 3,950 years ago and the eruption of AD 79 that buried the Roman cities of Pompeii and Herculaneum. The former is considered a possible worst case scenario for future eruptions.\n\nIn their study, the researchers determined the age of garnet crystals present in the volcanic deposits. This mineral is stored in the magma chamber, a pool of hot melted rock underneath Vesuvius. Knowing the age of these minerals makes it possible to infer how long magma resided in this chamber before the volcano erupted. Garnet is an unusual choice for determining the age of volcanic ejecta. Researchers typically use zircons, which are tiny accessory minerals found in many igneous rocks formed from lava. Magma from Vesuvius, however, is lacking in zircons, but it is rich in garnet. To determine the age of the garnets, the researchers used the radioactive elements uranium and thorium.\n\nAlong with the researchers' attempt to determine the age of the minerals, Vesuvius and its activity are monitored around the clock in order to avoid any nasty surprises. Every earthquake around the volcano is measured. Gases emitted from fumaroles are analyzed. Ground deformation, which is an indicator of underground activity, is observed. There is also an emergency plan outlining how to evacuate the greater Naples area should the surveillance conclude that an eruption is imminent.",
                        "prompt": "What is the main topic of the text?",
                        "choices": [
                              "The history of Mount Vesuvius",
                              "The minerals found underneath Vesuvius",
                              "The evacuation plan for Vesuvius residents",
                              "The prediction of Vesuvius's future eruptions"
                        ],
                        "answer": 3,
                        "explanation": "บทความนี้เกี่ยวกับการทำนายว่าภูเขาไฟ Vesuvius จะระเบิดอีกครั้งเมื่อใดและรุนแรงเพียงใด คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-rea-72",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Vesuvius",
                        "passage": "Vesuvius is one of Europe's most dangerous volcanoes. More than three million people live in its immediate vicinity. In the past, there were explosive eruptions that destroyed entire towns in the area. So, the pressing question is: When will Vesuvius erupt again and how strong could the eruption be?\n\nTo answer this question, a group of researchers has taken a close look at the largest eruptions of Vesuvius over the last 10,000 years. This allows them to better assess whether a dangerous event might be expected in the foreseeable future. The eruptions studied include the Avellino eruption of 3,950 years ago and the eruption of AD 79 that buried the Roman cities of Pompeii and Herculaneum. The former is considered a possible worst case scenario for future eruptions.\n\nIn their study, the researchers determined the age of garnet crystals present in the volcanic deposits. This mineral is stored in the magma chamber, a pool of hot melted rock underneath Vesuvius. Knowing the age of these minerals makes it possible to infer how long magma resided in this chamber before the volcano erupted. Garnet is an unusual choice for determining the age of volcanic ejecta. Researchers typically use zircons, which are tiny accessory minerals found in many igneous rocks formed from lava. Magma from Vesuvius, however, is lacking in zircons, but it is rich in garnet. To determine the age of the garnets, the researchers used the radioactive elements uranium and thorium.\n\nAlong with the researchers' attempt to determine the age of the minerals, Vesuvius and its activity are monitored around the clock in order to avoid any nasty surprises. Every earthquake around the volcano is measured. Gases emitted from fumaroles are analyzed. Ground deformation, which is an indicator of underground activity, is observed. There is also an emergency plan outlining how to evacuate the greater Naples area should the surveillance conclude that an eruption is imminent.",
                        "prompt": "According to the first paragraph, Vesuvius is considered a dangerous volcano because ___.",
                        "choices": [
                              "it has shown constant signs of eruptive activities",
                              "millions of people have refused to leave its vicinity",
                              "it will erupt again soon with more catastrophic effects",
                              "it has erupted before and wiped out whole residential areas"
                        ],
                        "answer": 3,
                        "explanation": "ย่อหน้าแรกระบุว่าในอดีตภูเขาไฟลูกนี้เคยระเบิดและทำลายเมืองทั้งหมดในละแวกนั้น (there were explosive eruptions that destroyed entire towns) คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-rea-73",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Vesuvius",
                        "passage": "Vesuvius is one of Europe's most dangerous volcanoes. More than three million people live in its immediate vicinity. In the past, there were explosive eruptions that destroyed entire towns in the area. So, the pressing question is: When will Vesuvius erupt again and how strong could the eruption be?\n\nTo answer this question, a group of researchers has taken a close look at the largest eruptions of Vesuvius over the last 10,000 years. This allows them to better assess whether a dangerous event might be expected in the foreseeable future. The eruptions studied include the Avellino eruption of 3,950 years ago and the eruption of AD 79 that buried the Roman cities of Pompeii and Herculaneum. The former is considered a possible worst case scenario for future eruptions.\n\nIn their study, the researchers determined the age of garnet crystals present in the volcanic deposits. This mineral is stored in the magma chamber, a pool of hot melted rock underneath Vesuvius. Knowing the age of these minerals makes it possible to infer how long magma resided in this chamber before the volcano erupted. Garnet is an unusual choice for determining the age of volcanic ejecta. Researchers typically use zircons, which are tiny accessory minerals found in many igneous rocks formed from lava. Magma from Vesuvius, however, is lacking in zircons, but it is rich in garnet. To determine the age of the garnets, the researchers used the radioactive elements uranium and thorium.\n\nAlong with the researchers' attempt to determine the age of the minerals, Vesuvius and its activity are monitored around the clock in order to avoid any nasty surprises. Every earthquake around the volcano is measured. Gases emitted from fumaroles are analyzed. Ground deformation, which is an indicator of underground activity, is observed. There is also an emergency plan outlining how to evacuate the greater Naples area should the surveillance conclude that an eruption is imminent.",
                        "prompt": "What does \"This\" (paragraph 2) refer to?",
                        "choices": [
                              "Predicting the next Vesuvius eruption",
                              "Studying the previous major eruptions of Vesuvius",
                              "Investigating the formation of the Vesuvius volcano",
                              "Estimating the violence of the next Vesuvius eruption"
                        ],
                        "answer": 1,
                        "explanation": "\"This\" หมายถึงการศึกษาการระเบิดครั้งใหญ่ของ Vesuvius ที่เกิดขึ้นก่อนหน้านี้ ซึ่งช่วยให้นักวิจัยประเมินได้ว่าจะมีเหตุการณ์อันตรายเกิดขึ้นในอนาคตหรือไม่ คำตอบคือข้อ 2"
                  },
                  {
                        "id": "f1-rea-74",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Vesuvius",
                        "passage": "Vesuvius is one of Europe's most dangerous volcanoes. More than three million people live in its immediate vicinity. In the past, there were explosive eruptions that destroyed entire towns in the area. So, the pressing question is: When will Vesuvius erupt again and how strong could the eruption be?\n\nTo answer this question, a group of researchers has taken a close look at the largest eruptions of Vesuvius over the last 10,000 years. This allows them to better assess whether a dangerous event might be expected in the foreseeable future. The eruptions studied include the Avellino eruption of 3,950 years ago and the eruption of AD 79 that buried the Roman cities of Pompeii and Herculaneum. The former is considered a possible worst case scenario for future eruptions.\n\nIn their study, the researchers determined the age of garnet crystals present in the volcanic deposits. This mineral is stored in the magma chamber, a pool of hot melted rock underneath Vesuvius. Knowing the age of these minerals makes it possible to infer how long magma resided in this chamber before the volcano erupted. Garnet is an unusual choice for determining the age of volcanic ejecta. Researchers typically use zircons, which are tiny accessory minerals found in many igneous rocks formed from lava. Magma from Vesuvius, however, is lacking in zircons, but it is rich in garnet. To determine the age of the garnets, the researchers used the radioactive elements uranium and thorium.\n\nAlong with the researchers' attempt to determine the age of the minerals, Vesuvius and its activity are monitored around the clock in order to avoid any nasty surprises. Every earthquake around the volcano is measured. Gases emitted from fumaroles are analyzed. Ground deformation, which is an indicator of underground activity, is observed. There is also an emergency plan outlining how to evacuate the greater Naples area should the surveillance conclude that an eruption is imminent.",
                        "prompt": "The last sentence in Paragraph 2 suggests that future Vesuvius eruptions ___.",
                        "choices": [
                              "could be prevented if accurately assessed",
                              "could be the worst volcanic eruptions in history",
                              "might cause the same magnitude of disaster as the AD 79 eruption",
                              "could be as strong as the eruption occurring in Avellino 3,950 years ago"
                        ],
                        "answer": 3,
                        "explanation": "ประโยคสุดท้ายของย่อหน้า 2 กล่าวถึง Avellino eruption ว่าเป็น 'a possible worst case scenario for future eruptions' จึงสื่อว่าการระเบิดในอนาคตอาจรุนแรงเทียบเท่าการระเบิดครั้งนั้น คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-rea-75",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Vesuvius",
                        "passage": "Vesuvius is one of Europe's most dangerous volcanoes. More than three million people live in its immediate vicinity. In the past, there were explosive eruptions that destroyed entire towns in the area. So, the pressing question is: When will Vesuvius erupt again and how strong could the eruption be?\n\nTo answer this question, a group of researchers has taken a close look at the largest eruptions of Vesuvius over the last 10,000 years. This allows them to better assess whether a dangerous event might be expected in the foreseeable future. The eruptions studied include the Avellino eruption of 3,950 years ago and the eruption of AD 79 that buried the Roman cities of Pompeii and Herculaneum. The former is considered a possible worst case scenario for future eruptions.\n\nIn their study, the researchers determined the age of garnet crystals present in the volcanic deposits. This mineral is stored in the magma chamber, a pool of hot melted rock underneath Vesuvius. Knowing the age of these minerals makes it possible to infer how long magma resided in this chamber before the volcano erupted. Garnet is an unusual choice for determining the age of volcanic ejecta. Researchers typically use zircons, which are tiny accessory minerals found in many igneous rocks formed from lava. Magma from Vesuvius, however, is lacking in zircons, but it is rich in garnet. To determine the age of the garnets, the researchers used the radioactive elements uranium and thorium.\n\nAlong with the researchers' attempt to determine the age of the minerals, Vesuvius and its activity are monitored around the clock in order to avoid any nasty surprises. Every earthquake around the volcano is measured. Gases emitted from fumaroles are analyzed. Ground deformation, which is an indicator of underground activity, is observed. There is also an emergency plan outlining how to evacuate the greater Naples area should the surveillance conclude that an eruption is imminent.",
                        "prompt": "Which of the following is NOT TRUE about the garnet crystals found in Vesuvius's volcano deposits?",
                        "choices": [
                              "Their amount is less than that of zircons.",
                              "They were originally in the magma chamber.",
                              "They are being used in the study to forecast the next volcanic eruption.",
                              "Their age could suggest how long the magma remained in the chamber before eruption."
                        ],
                        "answer": 0,
                        "explanation": "บทความไม่ได้เปรียบเทียบปริมาณของ garnet กับ zircon ในทางตรงกันข้าม แมกมาของ Vesuvius มี garnet มากแต่ขาด zircon จึงเป็นข้อที่ไม่ตรงกับเนื้อหา คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-rea-76",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Vesuvius",
                        "passage": "Vesuvius is one of Europe's most dangerous volcanoes. More than three million people live in its immediate vicinity. In the past, there were explosive eruptions that destroyed entire towns in the area. So, the pressing question is: When will Vesuvius erupt again and how strong could the eruption be?\n\nTo answer this question, a group of researchers has taken a close look at the largest eruptions of Vesuvius over the last 10,000 years. This allows them to better assess whether a dangerous event might be expected in the foreseeable future. The eruptions studied include the Avellino eruption of 3,950 years ago and the eruption of AD 79 that buried the Roman cities of Pompeii and Herculaneum. The former is considered a possible worst case scenario for future eruptions.\n\nIn their study, the researchers determined the age of garnet crystals present in the volcanic deposits. This mineral is stored in the magma chamber, a pool of hot melted rock underneath Vesuvius. Knowing the age of these minerals makes it possible to infer how long magma resided in this chamber before the volcano erupted. Garnet is an unusual choice for determining the age of volcanic ejecta. Researchers typically use zircons, which are tiny accessory minerals found in many igneous rocks formed from lava. Magma from Vesuvius, however, is lacking in zircons, but it is rich in garnet. To determine the age of the garnets, the researchers used the radioactive elements uranium and thorium.\n\nAlong with the researchers' attempt to determine the age of the minerals, Vesuvius and its activity are monitored around the clock in order to avoid any nasty surprises. Every earthquake around the volcano is measured. Gases emitted from fumaroles are analyzed. Ground deformation, which is an indicator of underground activity, is observed. There is also an emergency plan outlining how to evacuate the greater Naples area should the surveillance conclude that an eruption is imminent.",
                        "prompt": "What should be inserted in the blank to make the sentence logical?",
                        "choices": [
                              "To crystalize zircons",
                              "To break down the igneous rocks",
                              "To determine the age of the garnets",
                              "To estimate the period of volcanic eruption"
                        ],
                        "answer": 2,
                        "explanation": "ประโยคถัดมากล่าวถึงการใช้ธาตุกัมมันตรังสียูเรเนียมและทอเรียม ซึ่งเป็นวิธีมาตรฐานในการหาอายุของแร่ ช่องว่างจึงควรเติมด้วยจุดประสงค์ 'เพื่อหาอายุของ garnet' คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-rea-77",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Vesuvius",
                        "passage": "Vesuvius is one of Europe's most dangerous volcanoes. More than three million people live in its immediate vicinity. In the past, there were explosive eruptions that destroyed entire towns in the area. So, the pressing question is: When will Vesuvius erupt again and how strong could the eruption be?\n\nTo answer this question, a group of researchers has taken a close look at the largest eruptions of Vesuvius over the last 10,000 years. This allows them to better assess whether a dangerous event might be expected in the foreseeable future. The eruptions studied include the Avellino eruption of 3,950 years ago and the eruption of AD 79 that buried the Roman cities of Pompeii and Herculaneum. The former is considered a possible worst case scenario for future eruptions.\n\nIn their study, the researchers determined the age of garnet crystals present in the volcanic deposits. This mineral is stored in the magma chamber, a pool of hot melted rock underneath Vesuvius. Knowing the age of these minerals makes it possible to infer how long magma resided in this chamber before the volcano erupted. Garnet is an unusual choice for determining the age of volcanic ejecta. Researchers typically use zircons, which are tiny accessory minerals found in many igneous rocks formed from lava. Magma from Vesuvius, however, is lacking in zircons, but it is rich in garnet. To determine the age of the garnets, the researchers used the radioactive elements uranium and thorium.\n\nAlong with the researchers' attempt to determine the age of the minerals, Vesuvius and its activity are monitored around the clock in order to avoid any nasty surprises. Every earthquake around the volcano is measured. Gases emitted from fumaroles are analyzed. Ground deformation, which is an indicator of underground activity, is observed. There is also an emergency plan outlining how to evacuate the greater Naples area should the surveillance conclude that an eruption is imminent.",
                        "prompt": "Which is NOT one of the preventive measures being taken to deal with a possible eruption of Vesuvius?",
                        "choices": [
                              "Setting up a volcano emergency plan",
                              "Monitoring signs of Vesuvius's activities",
                              "Studying the age of minerals found in Vesuvius",
                              "Prohibiting people from living in close proximity to Vesuvius"
                        ],
                        "answer": 3,
                        "explanation": "ย่อหน้าสุดท้ายกล่าวถึงการวัดแผ่นดินไหว วิเคราะห์แก๊ส สังเกตการเปลี่ยนรูปพื้นดิน และแผนอพยพ แต่ไม่มีการห้ามประชาชนอาศัยอยู่ใกล้ภูเขาไฟ คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-rea-78",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Vesuvius",
                        "passage": "Vesuvius is one of Europe's most dangerous volcanoes. More than three million people live in its immediate vicinity. In the past, there were explosive eruptions that destroyed entire towns in the area. So, the pressing question is: When will Vesuvius erupt again and how strong could the eruption be?\n\nTo answer this question, a group of researchers has taken a close look at the largest eruptions of Vesuvius over the last 10,000 years. This allows them to better assess whether a dangerous event might be expected in the foreseeable future. The eruptions studied include the Avellino eruption of 3,950 years ago and the eruption of AD 79 that buried the Roman cities of Pompeii and Herculaneum. The former is considered a possible worst case scenario for future eruptions.\n\nIn their study, the researchers determined the age of garnet crystals present in the volcanic deposits. This mineral is stored in the magma chamber, a pool of hot melted rock underneath Vesuvius. Knowing the age of these minerals makes it possible to infer how long magma resided in this chamber before the volcano erupted. Garnet is an unusual choice for determining the age of volcanic ejecta. Researchers typically use zircons, which are tiny accessory minerals found in many igneous rocks formed from lava. Magma from Vesuvius, however, is lacking in zircons, but it is rich in garnet. To determine the age of the garnets, the researchers used the radioactive elements uranium and thorium.\n\nAlong with the researchers' attempt to determine the age of the minerals, Vesuvius and its activity are monitored around the clock in order to avoid any nasty surprises. Every earthquake around the volcano is measured. Gases emitted from fumaroles are analyzed. Ground deformation, which is an indicator of underground activity, is observed. There is also an emergency plan outlining how to evacuate the greater Naples area should the surveillance conclude that an eruption is imminent.",
                        "prompt": "The last paragraph suggests that the authorities in charge of Vesuvius are ___ the volcano and its activity.",
                        "choices": [
                              "fearful of",
                              "amazed by",
                              "unaware of",
                              "vigilant about"
                        ],
                        "answer": 3,
                        "explanation": "การเฝ้าติดตามภูเขาไฟตลอดเวลาในทุกด้าน (แผ่นดินไหว แก๊ส การเปลี่ยนรูปพื้นดิน แผนอพยพ) แสดงถึงความระมัดระวังและเฝ้าสังเกตอย่างใกล้ชิด (vigilant) คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-rea-79",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Vesuvius",
                        "passage": "Vesuvius is one of Europe's most dangerous volcanoes. More than three million people live in its immediate vicinity. In the past, there were explosive eruptions that destroyed entire towns in the area. So, the pressing question is: When will Vesuvius erupt again and how strong could the eruption be?\n\nTo answer this question, a group of researchers has taken a close look at the largest eruptions of Vesuvius over the last 10,000 years. This allows them to better assess whether a dangerous event might be expected in the foreseeable future. The eruptions studied include the Avellino eruption of 3,950 years ago and the eruption of AD 79 that buried the Roman cities of Pompeii and Herculaneum. The former is considered a possible worst case scenario for future eruptions.\n\nIn their study, the researchers determined the age of garnet crystals present in the volcanic deposits. This mineral is stored in the magma chamber, a pool of hot melted rock underneath Vesuvius. Knowing the age of these minerals makes it possible to infer how long magma resided in this chamber before the volcano erupted. Garnet is an unusual choice for determining the age of volcanic ejecta. Researchers typically use zircons, which are tiny accessory minerals found in many igneous rocks formed from lava. Magma from Vesuvius, however, is lacking in zircons, but it is rich in garnet. To determine the age of the garnets, the researchers used the radioactive elements uranium and thorium.\n\nAlong with the researchers' attempt to determine the age of the minerals, Vesuvius and its activity are monitored around the clock in order to avoid any nasty surprises. Every earthquake around the volcano is measured. Gases emitted from fumaroles are analyzed. Ground deformation, which is an indicator of underground activity, is observed. There is also an emergency plan outlining how to evacuate the greater Naples area should the surveillance conclude that an eruption is imminent.",
                        "prompt": "The word \"imminent\" is closest in meaning to ___.",
                        "choices": [
                              "at hand",
                              "off-guard",
                              "under threat",
                              "out of control"
                        ],
                        "answer": 0,
                        "explanation": "imminent แปลว่า ใกล้จะเกิดขึ้น ใกล้เคียงกับ \"at hand\" ที่แปลว่าใกล้จะถึง คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-rea-80",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Vesuvius",
                        "passage": "Vesuvius is one of Europe's most dangerous volcanoes. More than three million people live in its immediate vicinity. In the past, there were explosive eruptions that destroyed entire towns in the area. So, the pressing question is: When will Vesuvius erupt again and how strong could the eruption be?\n\nTo answer this question, a group of researchers has taken a close look at the largest eruptions of Vesuvius over the last 10,000 years. This allows them to better assess whether a dangerous event might be expected in the foreseeable future. The eruptions studied include the Avellino eruption of 3,950 years ago and the eruption of AD 79 that buried the Roman cities of Pompeii and Herculaneum. The former is considered a possible worst case scenario for future eruptions.\n\nIn their study, the researchers determined the age of garnet crystals present in the volcanic deposits. This mineral is stored in the magma chamber, a pool of hot melted rock underneath Vesuvius. Knowing the age of these minerals makes it possible to infer how long magma resided in this chamber before the volcano erupted. Garnet is an unusual choice for determining the age of volcanic ejecta. Researchers typically use zircons, which are tiny accessory minerals found in many igneous rocks formed from lava. Magma from Vesuvius, however, is lacking in zircons, but it is rich in garnet. To determine the age of the garnets, the researchers used the radioactive elements uranium and thorium.\n\nAlong with the researchers' attempt to determine the age of the minerals, Vesuvius and its activity are monitored around the clock in order to avoid any nasty surprises. Every earthquake around the volcano is measured. Gases emitted from fumaroles are analyzed. Ground deformation, which is an indicator of underground activity, is observed. There is also an emergency plan outlining how to evacuate the greater Naples area should the surveillance conclude that an eruption is imminent.",
                        "prompt": "This text would most likely appear in ___.",
                        "choices": [
                              "a travel blog",
                              "an evacuation brochure",
                              "an e-book on historical sites",
                              "a website on dealing with natural disasters"
                        ],
                        "answer": 3,
                        "explanation": "เนื้อหาเน้นข้อมูลเชิงวิทยาศาสตร์เกี่ยวกับการเฝ้าระวังและคาดการณ์ภัยพิบัติ เหมาะกับเว็บไซต์ที่ให้ข้อมูลเกี่ยวกับการรับมือภัยธรรมชาติ คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-rea-81",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Rasputin",
                        "passage": "Grigory Efimovich Rasputin is one of the most mysterious figures in Russian history. Born to a peasant family in a small village in Siberia around 1869, Rasputin received little schooling and probably never learned to read or write. Even as a child, rumors among the local populace were that he possessed supernatural powers. Despite marrying and fathering several children, he abandoned family life in his early 20s and traveled around Europe and the Middle East in search of Orthodox Christian religious devotion.\n\nIn 1903, Rasputin's wanderings brought him to St. Petersburg, where he arrived with a reputation as a mystic healer. Two years later, he was introduced to Russian Czar Nicholas II and his wife, Alexandra, who were desperate to find a cure for their son's hemophilia (a bleeding disorder). They called Rasputin to the palace, and after his session with the young boy, the bleeding seemed to stop for some time. Some historians have speculated that the bleeding likely stopped as an unintentional result of Rasputin's insistence on disallowing the administration of aspirin (a known blood-thinning agent), and not any mystical powers he may have had. Alexandra was amazed and immediately enlisted the services of Rasputin as a close adviser.\n\nBecause of his constant presence in the royal court, whispers grew that Rasputin was acting as a puppet master over the royal couple. Nobles and government officials tried to warn Alexandra of Rasputin's undue influence, but she continued to defend him. This caused much resentment among noblemen and officials.\n\nA group of nobles led by Prince Felix Yussupov finally plotted to eliminate Rasputin. On the night of December 30, 1916, they invited Rasputin to dinner and poisoned his food, dessert, and wine with cyanide. However, he showed no symptoms that it was having an effect on him. The conspirators proceeded to shoot Rasputin who, according to legend, still drew breath after a barrage of bullets and only died after he was thrown into an ice-cold river to drown. However, autopsy reports show that no poison was found in Rasputin's system and that he seems to have died from a single bullet to the head.",
                        "prompt": "What would be the most appropriate title of the text?",
                        "choices": [
                              "The Life and Death of Rasputin",
                              "A Road to Rasputin's Political Power",
                              "Rasputin: An Influential Russian Figure",
                              "Rasputin and His Mystical Healing Power"
                        ],
                        "answer": 0,
                        "explanation": "เนื้อหาครอบคลุมตั้งแต่ชีวิตช่วงต้นจนถึงการเสียชีวิตของราสปูติน จึงเหมาะกับชื่อเรื่อง The Life and Death of Rasputin คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-rea-82",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Rasputin",
                        "passage": "Grigory Efimovich Rasputin is one of the most mysterious figures in Russian history. Born to a peasant family in a small village in Siberia around 1869, Rasputin received little schooling and probably never learned to read or write. Even as a child, rumors among the local populace were that he possessed supernatural powers. Despite marrying and fathering several children, he abandoned family life in his early 20s and traveled around Europe and the Middle East in search of Orthodox Christian religious devotion.\n\nIn 1903, Rasputin's wanderings brought him to St. Petersburg, where he arrived with a reputation as a mystic healer. Two years later, he was introduced to Russian Czar Nicholas II and his wife, Alexandra, who were desperate to find a cure for their son's hemophilia (a bleeding disorder). They called Rasputin to the palace, and after his session with the young boy, the bleeding seemed to stop for some time. Some historians have speculated that the bleeding likely stopped as an unintentional result of Rasputin's insistence on disallowing the administration of aspirin (a known blood-thinning agent), and not any mystical powers he may have had. Alexandra was amazed and immediately enlisted the services of Rasputin as a close adviser.\n\nBecause of his constant presence in the royal court, whispers grew that Rasputin was acting as a puppet master over the royal couple. Nobles and government officials tried to warn Alexandra of Rasputin's undue influence, but she continued to defend him. This caused much resentment among noblemen and officials.\n\nA group of nobles led by Prince Felix Yussupov finally plotted to eliminate Rasputin. On the night of December 30, 1916, they invited Rasputin to dinner and poisoned his food, dessert, and wine with cyanide. However, he showed no symptoms that it was having an effect on him. The conspirators proceeded to shoot Rasputin who, according to legend, still drew breath after a barrage of bullets and only died after he was thrown into an ice-cold river to drown. However, autopsy reports show that no poison was found in Rasputin's system and that he seems to have died from a single bullet to the head.",
                        "prompt": "The word \"wanderings\" is closest in meaning to ___.",
                        "choices": [
                              "doubts",
                              "powers",
                              "journeys",
                              "experiences"
                        ],
                        "answer": 2,
                        "explanation": "wanderings แปลว่าการเดินทางท่องไปในที่ต่างๆ ใกล้เคียงกับคำว่า journeys มากที่สุด คำตอบคือข้อ 3"
                  },
                  {
                        "id": "f1-rea-83",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Rasputin",
                        "passage": "Grigory Efimovich Rasputin is one of the most mysterious figures in Russian history. Born to a peasant family in a small village in Siberia around 1869, Rasputin received little schooling and probably never learned to read or write. Even as a child, rumors among the local populace were that he possessed supernatural powers. Despite marrying and fathering several children, he abandoned family life in his early 20s and traveled around Europe and the Middle East in search of Orthodox Christian religious devotion.\n\nIn 1903, Rasputin's wanderings brought him to St. Petersburg, where he arrived with a reputation as a mystic healer. Two years later, he was introduced to Russian Czar Nicholas II and his wife, Alexandra, who were desperate to find a cure for their son's hemophilia (a bleeding disorder). They called Rasputin to the palace, and after his session with the young boy, the bleeding seemed to stop for some time. Some historians have speculated that the bleeding likely stopped as an unintentional result of Rasputin's insistence on disallowing the administration of aspirin (a known blood-thinning agent), and not any mystical powers he may have had. Alexandra was amazed and immediately enlisted the services of Rasputin as a close adviser.\n\nBecause of his constant presence in the royal court, whispers grew that Rasputin was acting as a puppet master over the royal couple. Nobles and government officials tried to warn Alexandra of Rasputin's undue influence, but she continued to defend him. This caused much resentment among noblemen and officials.\n\nA group of nobles led by Prince Felix Yussupov finally plotted to eliminate Rasputin. On the night of December 30, 1916, they invited Rasputin to dinner and poisoned his food, dessert, and wine with cyanide. However, he showed no symptoms that it was having an effect on him. The conspirators proceeded to shoot Rasputin who, according to legend, still drew breath after a barrage of bullets and only died after he was thrown into an ice-cold river to drown. However, autopsy reports show that no poison was found in Rasputin's system and that he seems to have died from a single bullet to the head.",
                        "prompt": "What can be INFERRED from the information in Paragraph 2?",
                        "choices": [
                              "Rasputin possessed mystical healing abilities.",
                              "Hemophilia was a common disease at that time.",
                              "Rasputin was a doctor with extensive medical knowledge.",
                              "Czar Nicholas II's son had taken aspirin before meeting Rasputin."
                        ],
                        "answer": 3,
                        "explanation": "นักประวัติศาสตร์สันนิษฐานว่าเลือดหยุดไหลเพราะราสปูตินห้ามให้แอสไพริน (ยาที่ทำให้เลือดไหลไม่หยุด) จึงอนุมานได้ว่าบุตรของซาร์น่าจะเคยได้รับแอสไพรินมาก่อนหน้านั้น คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-rea-84",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Rasputin",
                        "passage": "Grigory Efimovich Rasputin is one of the most mysterious figures in Russian history. Born to a peasant family in a small village in Siberia around 1869, Rasputin received little schooling and probably never learned to read or write. Even as a child, rumors among the local populace were that he possessed supernatural powers. Despite marrying and fathering several children, he abandoned family life in his early 20s and traveled around Europe and the Middle East in search of Orthodox Christian religious devotion.\n\nIn 1903, Rasputin's wanderings brought him to St. Petersburg, where he arrived with a reputation as a mystic healer. Two years later, he was introduced to Russian Czar Nicholas II and his wife, Alexandra, who were desperate to find a cure for their son's hemophilia (a bleeding disorder). They called Rasputin to the palace, and after his session with the young boy, the bleeding seemed to stop for some time. Some historians have speculated that the bleeding likely stopped as an unintentional result of Rasputin's insistence on disallowing the administration of aspirin (a known blood-thinning agent), and not any mystical powers he may have had. Alexandra was amazed and immediately enlisted the services of Rasputin as a close adviser.\n\nBecause of his constant presence in the royal court, whispers grew that Rasputin was acting as a puppet master over the royal couple. Nobles and government officials tried to warn Alexandra of Rasputin's undue influence, but she continued to defend him. This caused much resentment among noblemen and officials.\n\nA group of nobles led by Prince Felix Yussupov finally plotted to eliminate Rasputin. On the night of December 30, 1916, they invited Rasputin to dinner and poisoned his food, dessert, and wine with cyanide. However, he showed no symptoms that it was having an effect on him. The conspirators proceeded to shoot Rasputin who, according to legend, still drew breath after a barrage of bullets and only died after he was thrown into an ice-cold river to drown. However, autopsy reports show that no poison was found in Rasputin's system and that he seems to have died from a single bullet to the head.",
                        "prompt": "Which of the following sentences could BEST be added to the blank in Paragraph 3?",
                        "choices": [
                              "This caused much resentment among noblemen and officials",
                              "The press and journalists at the time started to call him \"mad monk\"",
                              "The country's elites eventually became used to his presence in the royal court",
                              "Historians believed Rasputin continued to see his family in Siberia during this time"
                        ],
                        "answer": 0,
                        "explanation": "ประโยคก่อนหน้ากล่าวถึงขุนนางพยายามเตือนอเล็กซานดราแต่เธอยังคงปกป้องราสปูติน การกระทำเช่นนี้ย่อมก่อให้เกิดความไม่พอใจในหมู่ขุนนางและข้าราชการ คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-rea-85",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Rasputin",
                        "passage": "Grigory Efimovich Rasputin is one of the most mysterious figures in Russian history. Born to a peasant family in a small village in Siberia around 1869, Rasputin received little schooling and probably never learned to read or write. Even as a child, rumors among the local populace were that he possessed supernatural powers. Despite marrying and fathering several children, he abandoned family life in his early 20s and traveled around Europe and the Middle East in search of Orthodox Christian religious devotion.\n\nIn 1903, Rasputin's wanderings brought him to St. Petersburg, where he arrived with a reputation as a mystic healer. Two years later, he was introduced to Russian Czar Nicholas II and his wife, Alexandra, who were desperate to find a cure for their son's hemophilia (a bleeding disorder). They called Rasputin to the palace, and after his session with the young boy, the bleeding seemed to stop for some time. Some historians have speculated that the bleeding likely stopped as an unintentional result of Rasputin's insistence on disallowing the administration of aspirin (a known blood-thinning agent), and not any mystical powers he may have had. Alexandra was amazed and immediately enlisted the services of Rasputin as a close adviser.\n\nBecause of his constant presence in the royal court, whispers grew that Rasputin was acting as a puppet master over the royal couple. Nobles and government officials tried to warn Alexandra of Rasputin's undue influence, but she continued to defend him. This caused much resentment among noblemen and officials.\n\nA group of nobles led by Prince Felix Yussupov finally plotted to eliminate Rasputin. On the night of December 30, 1916, they invited Rasputin to dinner and poisoned his food, dessert, and wine with cyanide. However, he showed no symptoms that it was having an effect on him. The conspirators proceeded to shoot Rasputin who, according to legend, still drew breath after a barrage of bullets and only died after he was thrown into an ice-cold river to drown. However, autopsy reports show that no poison was found in Rasputin's system and that he seems to have died from a single bullet to the head.",
                        "prompt": "The word \"it\" (paragraph 4) refers to ___.",
                        "choices": [
                              "food",
                              "wine",
                              "dessert",
                              "cyanide"
                        ],
                        "answer": 3,
                        "explanation": "ตามด้วย 'that it was having an effect on him' ซึ่งหมายถึงยาพิษไซยาไนด์ที่ถูกใส่ในอาหาร ของหวาน และไวน์ คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-rea-86",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Rasputin",
                        "passage": "Grigory Efimovich Rasputin is one of the most mysterious figures in Russian history. Born to a peasant family in a small village in Siberia around 1869, Rasputin received little schooling and probably never learned to read or write. Even as a child, rumors among the local populace were that he possessed supernatural powers. Despite marrying and fathering several children, he abandoned family life in his early 20s and traveled around Europe and the Middle East in search of Orthodox Christian religious devotion.\n\nIn 1903, Rasputin's wanderings brought him to St. Petersburg, where he arrived with a reputation as a mystic healer. Two years later, he was introduced to Russian Czar Nicholas II and his wife, Alexandra, who were desperate to find a cure for their son's hemophilia (a bleeding disorder). They called Rasputin to the palace, and after his session with the young boy, the bleeding seemed to stop for some time. Some historians have speculated that the bleeding likely stopped as an unintentional result of Rasputin's insistence on disallowing the administration of aspirin (a known blood-thinning agent), and not any mystical powers he may have had. Alexandra was amazed and immediately enlisted the services of Rasputin as a close adviser.\n\nBecause of his constant presence in the royal court, whispers grew that Rasputin was acting as a puppet master over the royal couple. Nobles and government officials tried to warn Alexandra of Rasputin's undue influence, but she continued to defend him. This caused much resentment among noblemen and officials.\n\nA group of nobles led by Prince Felix Yussupov finally plotted to eliminate Rasputin. On the night of December 30, 1916, they invited Rasputin to dinner and poisoned his food, dessert, and wine with cyanide. However, he showed no symptoms that it was having an effect on him. The conspirators proceeded to shoot Rasputin who, according to legend, still drew breath after a barrage of bullets and only died after he was thrown into an ice-cold river to drown. However, autopsy reports show that no poison was found in Rasputin's system and that he seems to have died from a single bullet to the head.",
                        "prompt": "A group of nobles killed Rasputin because of his ___.",
                        "choices": [
                              "religious belief",
                              "supernatural powers",
                              "poor family background",
                              "relationship with Alexandra"
                        ],
                        "answer": 3,
                        "explanation": "เหตุผลหลักคือกลุ่มขุนนางไม่พอใจอิทธิพลของราสปูตินที่มีต่ออเล็กซานดราและราชสำนัก คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-rea-87",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Rasputin",
                        "passage": "Grigory Efimovich Rasputin is one of the most mysterious figures in Russian history. Born to a peasant family in a small village in Siberia around 1869, Rasputin received little schooling and probably never learned to read or write. Even as a child, rumors among the local populace were that he possessed supernatural powers. Despite marrying and fathering several children, he abandoned family life in his early 20s and traveled around Europe and the Middle East in search of Orthodox Christian religious devotion.\n\nIn 1903, Rasputin's wanderings brought him to St. Petersburg, where he arrived with a reputation as a mystic healer. Two years later, he was introduced to Russian Czar Nicholas II and his wife, Alexandra, who were desperate to find a cure for their son's hemophilia (a bleeding disorder). They called Rasputin to the palace, and after his session with the young boy, the bleeding seemed to stop for some time. Some historians have speculated that the bleeding likely stopped as an unintentional result of Rasputin's insistence on disallowing the administration of aspirin (a known blood-thinning agent), and not any mystical powers he may have had. Alexandra was amazed and immediately enlisted the services of Rasputin as a close adviser.\n\nBecause of his constant presence in the royal court, whispers grew that Rasputin was acting as a puppet master over the royal couple. Nobles and government officials tried to warn Alexandra of Rasputin's undue influence, but she continued to defend him. This caused much resentment among noblemen and officials.\n\nA group of nobles led by Prince Felix Yussupov finally plotted to eliminate Rasputin. On the night of December 30, 1916, they invited Rasputin to dinner and poisoned his food, dessert, and wine with cyanide. However, he showed no symptoms that it was having an effect on him. The conspirators proceeded to shoot Rasputin who, according to legend, still drew breath after a barrage of bullets and only died after he was thrown into an ice-cold river to drown. However, autopsy reports show that no poison was found in Rasputin's system and that he seems to have died from a single bullet to the head.",
                        "prompt": "Which of the following information is NOT true about Rasputin?",
                        "choices": [
                              "He could not read.",
                              "He was married at a young age.",
                              "He believed in Orthodox Christianity.",
                              "He was originally from St. Petersburg."
                        ],
                        "answer": 3,
                        "explanation": "บทความระบุว่าราสปูตินเกิดในหมู่บ้านเล็กๆ ในไซบีเรีย และเดินทางมาถึงเซนต์ปีเตอร์สเบิร์กในปี 1903 ไม่ได้เกิดที่นั่น คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-rea-88",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Rasputin",
                        "passage": "Grigory Efimovich Rasputin is one of the most mysterious figures in Russian history. Born to a peasant family in a small village in Siberia around 1869, Rasputin received little schooling and probably never learned to read or write. Even as a child, rumors among the local populace were that he possessed supernatural powers. Despite marrying and fathering several children, he abandoned family life in his early 20s and traveled around Europe and the Middle East in search of Orthodox Christian religious devotion.\n\nIn 1903, Rasputin's wanderings brought him to St. Petersburg, where he arrived with a reputation as a mystic healer. Two years later, he was introduced to Russian Czar Nicholas II and his wife, Alexandra, who were desperate to find a cure for their son's hemophilia (a bleeding disorder). They called Rasputin to the palace, and after his session with the young boy, the bleeding seemed to stop for some time. Some historians have speculated that the bleeding likely stopped as an unintentional result of Rasputin's insistence on disallowing the administration of aspirin (a known blood-thinning agent), and not any mystical powers he may have had. Alexandra was amazed and immediately enlisted the services of Rasputin as a close adviser.\n\nBecause of his constant presence in the royal court, whispers grew that Rasputin was acting as a puppet master over the royal couple. Nobles and government officials tried to warn Alexandra of Rasputin's undue influence, but she continued to defend him. This caused much resentment among noblemen and officials.\n\nA group of nobles led by Prince Felix Yussupov finally plotted to eliminate Rasputin. On the night of December 30, 1916, they invited Rasputin to dinner and poisoned his food, dessert, and wine with cyanide. However, he showed no symptoms that it was having an effect on him. The conspirators proceeded to shoot Rasputin who, according to legend, still drew breath after a barrage of bullets and only died after he was thrown into an ice-cold river to drown. However, autopsy reports show that no poison was found in Rasputin's system and that he seems to have died from a single bullet to the head.",
                        "prompt": "How did Rasputin die?",
                        "choices": [
                              "He was shot.",
                              "He was poisoned.",
                              "He drowned in a cold river.",
                              "He suffered from a severe disease."
                        ],
                        "answer": 0,
                        "explanation": "แม้จะถูกวางยาพิษและถูกโยนลงแม่น้ำ แต่รายงานการชันสูตรพบว่าไม่มีพิษในร่างกายของเขาและเขาเสียชีวิตจากบาดแผลกระสุนปืนนัดเดียว คำตอบคือข้อ 1"
                  },
                  {
                        "id": "f1-rea-89",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Rasputin",
                        "passage": "Grigory Efimovich Rasputin is one of the most mysterious figures in Russian history. Born to a peasant family in a small village in Siberia around 1869, Rasputin received little schooling and probably never learned to read or write. Even as a child, rumors among the local populace were that he possessed supernatural powers. Despite marrying and fathering several children, he abandoned family life in his early 20s and traveled around Europe and the Middle East in search of Orthodox Christian religious devotion.\n\nIn 1903, Rasputin's wanderings brought him to St. Petersburg, where he arrived with a reputation as a mystic healer. Two years later, he was introduced to Russian Czar Nicholas II and his wife, Alexandra, who were desperate to find a cure for their son's hemophilia (a bleeding disorder). They called Rasputin to the palace, and after his session with the young boy, the bleeding seemed to stop for some time. Some historians have speculated that the bleeding likely stopped as an unintentional result of Rasputin's insistence on disallowing the administration of aspirin (a known blood-thinning agent), and not any mystical powers he may have had. Alexandra was amazed and immediately enlisted the services of Rasputin as a close adviser.\n\nBecause of his constant presence in the royal court, whispers grew that Rasputin was acting as a puppet master over the royal couple. Nobles and government officials tried to warn Alexandra of Rasputin's undue influence, but she continued to defend him. This caused much resentment among noblemen and officials.\n\nA group of nobles led by Prince Felix Yussupov finally plotted to eliminate Rasputin. On the night of December 30, 1916, they invited Rasputin to dinner and poisoned his food, dessert, and wine with cyanide. However, he showed no symptoms that it was having an effect on him. The conspirators proceeded to shoot Rasputin who, according to legend, still drew breath after a barrage of bullets and only died after he was thrown into an ice-cold river to drown. However, autopsy reports show that no poison was found in Rasputin's system and that he seems to have died from a single bullet to the head.",
                        "prompt": "This text is most likely found in a/an ___.",
                        "choices": [
                              "academic journal of mythology",
                              "chapter in a social science textbook",
                              "newspaper column about Russian politics",
                              "biography of important people in Russian history"
                        ],
                        "answer": 3,
                        "explanation": "เนื้อหาเล่าประวัติชีวิตของบุคคลสำคัญในประวัติศาสตร์รัสเซียอย่างละเอียด เหมาะกับหนังสือชีวประวัติ คำตอบคือข้อ 4"
                  },
                  {
                        "id": "f1-rea-90",
                        "type": "comprehension",
                        "passageTitle": "Reading Passage — Rasputin",
                        "passage": "Grigory Efimovich Rasputin is one of the most mysterious figures in Russian history. Born to a peasant family in a small village in Siberia around 1869, Rasputin received little schooling and probably never learned to read or write. Even as a child, rumors among the local populace were that he possessed supernatural powers. Despite marrying and fathering several children, he abandoned family life in his early 20s and traveled around Europe and the Middle East in search of Orthodox Christian religious devotion.\n\nIn 1903, Rasputin's wanderings brought him to St. Petersburg, where he arrived with a reputation as a mystic healer. Two years later, he was introduced to Russian Czar Nicholas II and his wife, Alexandra, who were desperate to find a cure for their son's hemophilia (a bleeding disorder). They called Rasputin to the palace, and after his session with the young boy, the bleeding seemed to stop for some time. Some historians have speculated that the bleeding likely stopped as an unintentional result of Rasputin's insistence on disallowing the administration of aspirin (a known blood-thinning agent), and not any mystical powers he may have had. Alexandra was amazed and immediately enlisted the services of Rasputin as a close adviser.\n\nBecause of his constant presence in the royal court, whispers grew that Rasputin was acting as a puppet master over the royal couple. Nobles and government officials tried to warn Alexandra of Rasputin's undue influence, but she continued to defend him. This caused much resentment among noblemen and officials.\n\nA group of nobles led by Prince Felix Yussupov finally plotted to eliminate Rasputin. On the night of December 30, 1916, they invited Rasputin to dinner and poisoned his food, dessert, and wine with cyanide. However, he showed no symptoms that it was having an effect on him. The conspirators proceeded to shoot Rasputin who, according to legend, still drew breath after a barrage of bullets and only died after he was thrown into an ice-cold river to drown. However, autopsy reports show that no poison was found in Rasputin's system and that he seems to have died from a single bullet to the head.",
                        "prompt": "What is the tone of the text?",
                        "choices": [
                              "Tragic",
                              "Factual",
                              "Admiring",
                              "Mysterious"
                        ],
                        "answer": 1,
                        "explanation": "เนื้อหานำเสนอข้อเท็จจริงตามลำดับเหตุการณ์โดยไม่ใส่อารมณ์หรือความคิดเห็นส่วนตัว จึงมีน้ำเสียงแบบ Factual คำตอบคือข้อ 2"
                  }
            ]
      },
      "writing": {
            "expectedCount": 30,
            "questions": [
                  {
                        "id": "f1-wri-91",
                        "segments": [
                              {
                                    "text": "Prices ",
                                    "n": 1
                              },
                              {
                                    "text": "of some essential food items, such as rice and cooking oil, have "
                              },
                              {
                                    "text": "raised",
                                    "n": 2
                              },
                             {
                                    "text": "by 5% to as "
                              },
                              {
                                    "text": "  much",
                                    "n": 3
                              },
                             {
                                    "text": "as 20% in "
                              },
                              {
                                    "text": "  recent",
                                    "n": 4
                              },
                              {
                                    "text": " months."
                              }
                        ],
                        "answer": 2,
                        "explanation": "\"raised\" เป็น transitive verb (ต้องมีกรรมมารับ) แต่ประโยคนี้ไม่มีกรรม ต้องใช้ \"risen\" (V3 ของ rise ซึ่งเป็น intransitive verb) แทน"
                  },
                  {
                        "id": "f1-wri-92",
                        "segments": [
                              {
                                    "text": "The expert committee on",
                                    "n": 1
                              },
                              {
                                    "text": " COVID-19 vaccination has "
                              },
                              {
                                    "text": "recommended",
                                    "n": 2
                              },
                              {
                                    "text": " that the two",
                                    "n": 3
                              },
                              {
                                    "text": " mRNA vaccines can be used "
                              },
                              {
                                    "text": "interchangeable",
                                    "n": 4
                              },
                              {
                                    "text": "."
                              }
                        ],
                        "answer": 4,
                        "explanation": "ตำแหน่งนี้ต้องขยายกริยา \"be used\" ด้วย adverb ไม่ใช่ adjective จึงต้องแก้ \"interchangeable\" เป็น \"interchangeably\""
                  },
                  {
                        "id": "f1-wri-93",
                        "segments": [
                              {
                                    "text": "Because of",
                                    "n": 1
                              },
                              {
                                    "text": " raspberries easily absorb water, it "
                              },
                              {
                                    "text": "is",
                                    "n": 2
                              },
                              {
                                    "text": " best to wash them with",
                                    "n": 3
                              },
                              {
                                    "text": " cool water immediately before "
                              },
                              {
                                    "text": "eating",
                                    "n": 4
                              },
                              {
                                    "text": "."
                              }
                        ],
                        "answer": 1,
                        "explanation": "\"Because of\" เป็น preposition ต้องตามด้วยคำนาม แต่ตามด้วยอนุประโยค (raspberries easily absorb water) จึงต้องใช้ conjunction \"Because\" แทน"
                  },
                  {
                        "id": "f1-wri-94",
                        "segments": [
                              {
                                    "text": "Gardeners are "
                              },
                              {
                                    "text": "encouraged",
                                    "n": 1
                              },
                              {
                                    "text": " to plant endemic species in "
                              },
                              {
                                    "text": "a",
                                    "n": 2
                              },
                              {
                                    "text": " bid to help "
                              },
                              {
                                    "text": "saving",
                                    "n": 3
                              },
                              {
                                    "text": " dwindling native "
                              },
                              {
                                    "text": "Australian",
                                    "n": 4
                              },
                              {
                                    "text": " bee populations."
                              }
                        ],
                        "answer": 3,
                        "explanation": "หลัง \"help\" ตามด้วยกริยารูป infinitive (to + verb หรือ bare infinitive) ไม่ใช้ V-ing จึงต้องแก้ \"saving\" เป็น \"save\""
                  },
                  {
                        "id": "f1-wri-95",
                        "segments": [
                              {
                                    "text": "Museums "
                              },
                              {
                                    "text": "are",
                                    "n": 1
                              },
                              {
                                    "text": " places filled with relics of "
                              },
                              {
                                    "text": "the past",
                                    "n": 2
                              },
                              {
                                    "text": " and "
                              },
                              {
                                    "text": "interested",
                                    "n": 3
                              },
                              {
                                    "text": " exhibits filled with knowledge "
                              },
                              {
                                    "text": "waiting",
                                    "n": 4
                              },
                              {
                                    "text": " to be learned."
                              }
                        ],
                        "answer": 3,
                        "explanation": "exhibits เป็นสิ่งที่ก่อให้เกิดความสนใจ (ผู้กระทำ) จึงต้องใช้ adjective ลงท้าย -ing คือ interesting ไม่ใช่ -ed ซึ่งใช้กับสิ่งที่รู้สึก จึงต้องแก้ interested เป็น interesting"
                  },
                  {
                        "id": "f1-wri-96",
                        "segments": [
                              {
                                    "text": "Experts say "
                              },
                              {
                                    "text": "having",
                                    "n": 1
                              },
                              {
                                    "text": " close friends at work can "
                              },
                              {
                                    "text": "have",
                                    "n": 2
                              },
                              {
                                    "text": " beneficial for your job satisfaction, but they can "
                              },
                              {
                                    "text": "negatively",
                                    "n": 3
                              },
                              {
                                    "text": " influence you "
                              },
                              {
                                    "text": "if",
                                    "n": 4
                              },
                              {
                                    "text": " they are unhappy."
                              }
                        ],
                        "answer": 2,
                        "explanation": "\"can have beneficial\" ผิดโครงสร้าง ต้องใช้ verb to be คือ \"can be beneficial\" จึงต้องแก้ \"have\" เป็น \"be\""
                  },
                  {
                        "id": "f1-wri-97",
                        "segments": [
                              {
                                    "text": "Archaeologists",
                                    "n": 1
                              },
                              {
                                    "text": " in eastern Newfoundland "
                              },
                              {
                                    "text": "have",
                                    "n": 2
                              },
                              {
                                    "text": " unearthed "
                              },
                              {
                                    "text": "which",
                                    "n": 3
                              },
                              {
                                    "text": " could be the oldest English coin ever "
                              },
                              {
                                    "text": "found",
                                    "n": 4
                              },
                              {
                                    "text": " in Canada."
                              }
                        ],
                        "answer": 3,
                        "explanation": "\"which\" ต้องมีคำนามข้างหน้าให้อ้างถึง (antecedent) แต่ในที่นี้ไม่มี จึงต้องใช้ \"what\" ซึ่งเป็น noun clause ทำหน้าที่เป็นกรรมของ unearthed แทน"
                  },
                  {
                        "id": "f1-wri-98",
                        "segments": [
                              {
                                    "text": "Poorer nations need financial support to help "
                              },
                              {
                                    "text": "it",
                                    "n": 1
                              },
                              {
                                    "text": " move towards greener energy; "
                              },
                              {
                                    "text": "for instance",
                                    "n": 2
                              },
                              {
                                    "text": ", the US, EU and UK recently provided $8.5 bn to "
                              },
                              {
                                    "text": "help",
                                    "n": 3
                              },
                              {
                                    "text": " South Africa phase out coal "
                              },
                              {
                                    "text": "use",
                                    "n": 4
                              },
                              {
                                    "text": "."
                              }
                        ],
                        "answer": 1,
                        "explanation": "\"Poorer nations\" เป็นพหูพจน์ สรรพนามแทนจึงต้องเป็น \"them\" ไม่ใช่ \"it\" ซึ่งเป็นเอกพจน์"
                  },
                  {
                        "id": "f1-wri-99",
                        "segments": [
                              {
                                    "text": "Burned",
                                    "n": 1
                              },
                              {
                                    "text": " fossil fuels such as oil, gas, and coal "
                              },
                              {
                                    "text": "releases",
                                    "n": 2
                              },
                              {
                                    "text": " carbon dioxide into the atmosphere, trapping heat "
                              },
                              {
                                    "text": "and",
                                    "n": 3
                              },
                              {
                                    "text": " raising global "
                              },
                              {
                                    "text": "temperatures",
                                    "n": 4
                              },
                              {
                                    "text": "."
                              }
                        ],
                        "answer": 1,
                        "explanation": "\"Burning fossil fuels\" ทำหน้าที่เป็นประธานของประโยค (gerund phrase) ซึ่งเป็นผู้กระทำการปล่อย CO2 จึงต้องใช้ V-ing \"Burning\" ไม่ใช่ V3 \"Burned\""
                  },
                  {
                        "id": "f1-wri-100",
                        "segments": [
                              {
                                    "text": "Reading",
                                    "n": 1
                              },
                              {
                                    "text": " can be a serious challenge for tens of millions of people, "
                              },
                              {
                                    "text": "whether",
                                    "n": 2
                              },
                              {
                                    "text": " they struggle with "
                              },
                              {
                                    "text": "comprehension",
                                    "n": 3
                              },
                              {
                                    "text": " difficulties, poor vision, dyslexia, or other "
                              },
                              {
                                    "text": "issue",
                                    "n": 4
                              },
                              {
                                    "text": "."
                              }
                        ],
                        "answer": 4,
                        "explanation": "รายการ \"comprehension difficulties, poor vision, dyslexia, or other issue\" ต้องขนานกันเป็นพหูพจน์ทั้งหมด จึงต้องแก้ \"issue\" เป็น \"issues\""
                  },
                  {
                        "id": "f1-wri-101",
                        "segments": [
                              {
                                    "text": "TimeChi, a mouse-sized desk gadget, "
                              },
                              {
                                    "text": "enables",
                                    "n": 1
                              },
                              {
                                    "text": " a do-not-disturb feature on your devices and apps and "
                              },
                              {
                                    "text": "display",
                                    "n": 2
                              },
                              {
                                    "text": " a light to let "
                              },
                              {
                                    "text": "others",
                                    "n": 3
                              },
                              {
                                    "text": " know you are trying to "
                              },
                              {
                                    "text": "focus",
                                    "n": 4
                              },
                              {
                                    "text": "."
                              }
                        ],
                        "answer": 2,
                        "explanation": "กริยาแท้ตัวที่สองต้องผัน -s ให้สอดคล้องกับประธานเอกพจน์ \"TimeChi\" เช่นเดียวกับ enables จึงต้องแก้ \"display\" เป็น \"displays\""
                  },
                  {
                        "id": "f1-wri-102",
                        "segments": [
                              {
                                    "text": "The world's "
                              },
                              {
                                    "text": "most",
                                    "n": 1
                              },
                              {
                                    "text": " expensive coffee is a type "
                              },
                              {
                                    "text": "called",
                                    "n": 2
                              },
                              {
                                    "text": " kopi luwak, which is harvested after "
                              },
                              {
                                    "text": "digested",
                                    "n": 3
                              },
                              {
                                    "text": " and excreted by the Asian palm civet, a small "
                              },
                              {
                                    "text": "catlike",
                                    "n": 4
                              },
                              {
                                    "text": " mammal."
                              }
                        ],
                        "answer": 3,
                        "explanation": "หลัง \"after\" เมื่อประธานของอนุประโยคถูกกระทำ (ถูกย่อย) ต้องใช้ passive gerund \"being digested\" ไม่ใช่ V3 เปล่าๆ"
                  },
                  {
                        "id": "f1-wri-103",
                        "segments": [
                              {
                                    "text": "Entertainment and leisure activities "
                              },
                              {
                                    "text": "had",
                                    "n": 1
                              },
                              {
                                    "text": " been "
                              },
                              {
                                    "text": "a",
                                    "n": 2
                              },
                              {
                                    "text": " part of culture in one form or "
                              },
                              {
                                    "text": "another",
                                    "n": 3
                              },
                              {
                                    "text": " since "
                              },
                              {
                                    "text": "the ancient times",
                                    "n": 4
                              },
                              {
                                    "text": "."
                              }
                        ],
                        "answer": 1,
                        "explanation": "\"since\" บ่งบอกช่วงเวลาที่เริ่มในอดีตและต่อเนื่องถึงปัจจุบัน ต้องใช้ present perfect tense \"have been\" ไม่ใช่ past perfect \"had been\""
                  },
                  {
                        "id": "f1-wri-104",
                        "segments": [
                              {
                                    "text": "Shoppers "
                              },
                              {
                                    "text": "reportedly",
                                    "n": 1
                              },
                              {
                                    "text": " queued up overnight "
                              },
                              {
                                    "text": "where",
                                    "n": 2
                              },
                              {
                                    "text": " malls in Auckland when they decided to "
                              },
                              {
                                    "text": "reopen",
                                    "n": 3
                              },
                              {
                                    "text": " for the first time in",
                                    "n": 4
                              },
                              {
                                    "text": " 3 months."
                              }
                        ],
                        "answer": 2,
                        "explanation": "\"where\" ใช้เชื่อมอนุประโยค แต่ตำแหน่งนี้ต้องการคำบุพบทบอกสถานที่หน้าคำนาม \"malls\" เช่น \"outside\" จึงต้องแก้ \"where\" เป็นคำบุพบทที่ถูกต้อง"
                  },
                  {
                        "id": "f1-wri-105",
                        "segments": [
                              {
                                    "text": "Sweden's "
                              },
                              {
                                    "text": "first",
                                    "n": 1
                              },
                              {
                                    "text": " ever female prime minister resigned "
                              },
                              {
                                    "text": "after",
                                    "n": 2
                              },
                              {
                                    "text": " her coalition partner "
                              },
                              {
                                    "text": "quitted",
                                    "n": 3
                              },
                              {
                                    "text": " the government and her budget failed to "
                              },
                              {
                                    "text": "pass",
                                    "n": 4
                              },
                              {
                                    "text": "."
                              }
                        ],
                        "answer": 3,
                        "explanation": "\"quit\" เป็น irregular verb ที่รูป past tense เหมือนเดิมทุกรูป (quit-quit-quit) ไม่เติม -ed จึงต้องแก้ \"quitted\" เป็น \"quit\""
                  },
                  {
                        "id": "f1-wri-106",
                        "segments": [
                              {
                                    "text": "Cyber-criminals "
                              },
                              {
                                    "text": "who",
                                    "n": 1
                              },
                              {
                                    "text": " are "
                              },
                              {
                                    "text": "increasingly",
                                    "n": 2
                              },
                              {
                                    "text": " targeting "
                              },
                              {
                                    "text": "products",
                                    "n": 3
                              },
                              {
                                    "text": " from phones and smart TVs to home speakers and "
                              },
                              {
                                    "text": "internet-connected",
                                    "n": 4
                              },
                              {
                                    "text": " dishwashers."
                              }
                        ],
                        "answer": 1,
                        "explanation": "\"who\" ทำให้ทั้งประโยคเหลือเพียงอนุประโยคขยายโดยไม่มีกริยาแท้ (main verb) ของประธาน \"Cyber-criminals\" ต้องตัด \"who\" ออกเพื่อให้ \"are targeting\" เป็นกริยาแท้ของประโยค"
                  },
                  {
                        "id": "f1-wri-107",
                        "segments": [
                              {
                                    "text": "About 30 teenagers "
                              },
                              {
                                    "text": "injured",
                                    "n": 1
                              },
                              {
                                    "text": " after "
                              },
                              {
                                    "text": "a group",
                                    "n": 2
                              },
                              {
                                    "text": " of piranhas launched a feeding frenzy "
                              },
                              {
                                    "text": "against",
                                    "n": 3
                              },
                              {
                                    "text": " unsuspecting "
                              },
                              {
                                    "text": "swimmers",
                                    "n": 4
                              },
                              {
                                    "text": "."
                              }
                        ],
                        "answer": 1,
                        "explanation": "\"teenagers\" เป็นผู้ถูกกระทำ (ถูกทำให้บาดเจ็บ) ต้องใช้ passive voice \"were injured\" ไม่ใช่ active \"injured\""
                  },
                  {
                        "id": "f1-wri-108",
                        "segments": [
                              {
                                    "text": "Octopuses, crabs and lobsters are capable of",
                                    "n": 1
                              },
                              {
                                    "text": " experiencing pain or suffering, "
                              },
                              {
                                    "text": "this",
                                    "n": 2
                              },
                              {
                                    "text": " has added the creatures to",
                                    "n": 3
                              },
                              {
                                    "text": " a list of sentient beings to be given",
                                    "n": 4
                              },
                              {
                                    "text": " protection under new animal welfare laws."
                              }
                        ],
                        "answer": 2,
                        "explanation": "ประโยคนี้เป็น comma splice (นำสองประโยคมาต่อกันด้วยเครื่องหมายจุลภาคโดยไม่มีคำเชื่อม) ต้องแก้ \"this\" เป็น relative pronoun \"which\" เพื่อเชื่อมอนุประโยคแทน"
                  },
                  {
                        "id": "f1-wri-109",
                        "segments": [
                              {
                                    "text": "Spending",
                                    "n": 1
                              },
                              {
                                    "text": " quality time with children has significant benefits for",
                                    "n": 2
                              },
                              {
                                    "text": " them, including",
                                    "n": 3
                              },
                              {
                                    "text": " better grades, mental health and social "
                              },
                              {
                                    "text": "competent",
                                    "n": 4
                              },
                              {
                                    "text": "."
                              }
                        ],
                        "answer": 4,
                        "explanation": "\"better grades, mental health and social competent\" ต้องเป็นคำนามขนานกันทั้งหมด \"competent\" เป็น adjective จึงต้องแก้เป็นคำนาม \"competence\""
                  },
                  {
                        "id": "f1-wri-110",
                        "segments": [
                              {
                                    "text": "An",
                                    "n": 1
                              },
                              {
                                    "text": " important aspect of "
                              },
                              {
                                    "text": "practicing",
                                    "n": 2
                              },
                              {
                                    "text": " gratitude regularly is becoming aware "
                              },
                              {
                                    "text": "at",
                                    "n": 3
                              },
                              {
                                    "text": " opportunities throughout your day to "
                              },
                              {
                                    "text": "express",
                                    "n": 4
                              },
                              {
                                    "text": " gratitude."
                              }
                        ],
                        "answer": 3,
                        "explanation": "\"aware\" ต้องตามด้วยบุพบท \"of\" (aware of) ไม่ใช่ \"at\" จึงต้องแก้ \"at\" เป็น \"of\""
                  },
                  {
                        "id": "f1-wri-111",
                        "segments": [
                              {
                                    "text": "Numerous airlines "
                              },
                              {
                                    "text": "have",
                                    "n": 1
                              },
                              {
                                    "text": " already pledged to "
                              },
                              {
                                    "text": "offer",
                                    "n": 2
                              },
                              {
                                    "text": " carbon-neutral travel and explore "
                              },
                              {
                                    "text": "alternative",
                                    "n": 3
                              },
                              {
                                    "text": " fuels to reduce "
                              },
                              {
                                    "text": "a",
                                    "n": 4
                              },
                              {
                                    "text": " pollution."
                              }
                        ],
                        "answer": 4,
                        "explanation": "\"pollution\" เป็น uncountable noun ไม่ใช้ article \"a\" นำหน้า จึงต้องตัด \"a\" ออก"
                  },
                  {
                        "id": "f1-wri-112",
                        "segments": [
                              {
                                    "text": "China confirmed "
                              },
                              {
                                    "text": "that would",
                                    "n": 1
                              },
                              {
                                    "text": " join the US and other major energy-consuming",
                                    "n": 2
                              },
                              {
                                    "text": " nations in "
                              },
                              {
                                    "text": "releasing",
                                    "n": 3
                              },
                              {
                                    "text": " strategic oil reserves to try to cool high prices and "
                              },
                              {
                                    "text": "tame",
                                    "n": 4
                              },
                              {
                                    "text": " inflation."
                              }
                        ],
                        "answer": 1,
                        "explanation": "noun clause หลัง \"confirmed\" ต้องมีประธานของตัวเอง จึงต้องเติม \"it\" เข้าไปเป็น \"that it would join\" ไม่ใช่ \"that would join\""
                  },
                  {
                        "id": "f1-wri-113",
                        "segments": [
                              {
                                    "text": "The vast majority of bees "
                              },
                              {
                                    "text": "feed",
                                    "n": 1
                              },
                              {
                                    "text": " on pollen and nectar, "
                              },
                              {
                                    "text": "but",
                                    "n": 2
                              },
                              {
                                    "text": " certain species have evolved to feast on meat, "
                              },
                              {
                                    "text": "substitute",
                                    "n": 3
                              },
                              {
                                    "text": " dead animal carcasses for",
                                    "n": 4
                              },
                              {
                                    "text": " flower meadows."
                              }
                        ],
                        "answer": 3,
                        "explanation": "ตำแหน่งนี้ต้องใช้ present participle \"substituting\" ต่อเนื่องจาก \"feast on meat\" ในฐานะ participle phrase ไม่ใช่ bare verb \"substitute\""
                  },
                  {
                        "id": "f1-wri-114",
                        "segments": [
                              {
                                    "text": "Cognitive behavioral sleep training",
                                    "n": 1
                              },
                              {
                                    "text": " can teach you how to",
                                    "n": 2
                              },
                              {
                                    "text": " break bad habits in order to "
                              },
                              {
                                    "text": "prepare",
                                    "n": 3
                              },
                              {
                                    "text": " your mind and body for a good "
                              },
                              {
                                    "text": "night sleep",
                                    "n": 4
                              },
                              {
                                    "text": "."
                              }
                        ],
                        "answer": 4,
                        "explanation": "สำนวน \"a good night's sleep\" ต้องมีเครื่องหมาย apostrophe -'s แสดงความเป็นเจ้าของ จึงต้องแก้ \"night sleep\" เป็น \"night's sleep\""
                  },
                  {
                        "id": "f1-wri-115",
                        "segments": [
                              {
                                    "text": "Food banks in London "
                              },
                              {
                                    "text": "have",
                                    "n": 1
                              },
                              {
                                    "text": " reported a surge of "
                              },
                              {
                                    "text": "visits",
                                    "n": 2
                              },
                              {
                                    "text": " in recent weeks, with more working professionals "
                              },
                              {
                                    "text": "seek",
                                    "n": 3
                              },
                              {
                                    "text": " help with "
                              },
                              {
                                    "text": "groceries",
                                    "n": 4
                              },
                              {
                                    "text": "."
                              }
                        ],
                        "answer": 3,
                        "explanation": "\"with + กรรม + V-ing\" (absolute phrase) ตำแหน่งนี้ต้องใช้ V-ing \"seeking\" ไม่ใช่ bare verb \"seek\""
                  },
                  {
                        "id": "f1-wri-116",
                        "segments": [
                              {
                                    "text": "While",
                                    "n": 1
                              },
                              {
                                    "text": " demand for large yachts "
                              },
                              {
                                    "text": "has",
                                    "n": 2
                              },
                              {
                                    "text": " steadily grown over the past few decades, sales have "
                              },
                              {
                                    "text": "shot up",
                                    "n": 3
                              },
                              {
                                    "text": " considerably since last year due to the increasing number of billionaires "
                              },
                              {
                                    "text": "emerge",
                                    "n": 4
                              },
                              {
                                    "text": "."
                              }
                        ],
                        "answer": 4,
                        "explanation": "\"emerge\" ตำแหน่งนี้ต้องใช้ present participle \"emerging\" เพื่อขยาย \"billionaires\" ในฐานะ participle phrase ไม่ใช่ bare verb"
                  },
                  {
                        "id": "f1-wri-117",
                        "segments": [
                              {
                                    "text": "Scientists have uncovered one of the earliest "
                              },
                              {
                                    "text": "examples",
                                    "n": 1
                              },
                              {
                                    "text": " of spillover – when a disease jumps from an animal to a human – and it "
                              },
                              {
                                    "text": "has happened",
                                    "n": 2
                              },
                              {
                                    "text": " to a Neanderthal man "
                              },
                              {
                                    "text": "who",
                                    "n": 3
                              },
                              {
                                    "text": " likely got sick "
                              },
                              {
                                    "text": "butchering",
                                    "n": 4
                              },
                              {
                                    "text": " raw meat."
                              }
                        ],
                        "answer": 2,
                        "explanation": "เหตุการณ์นี้เกิดขึ้นและจบแล้วในอดีต (สมัยมนุษย์นีแอนเดอร์ทัล) จึงต้องใช้ past simple tense \"happened\" ไม่ใช่ present perfect \"has happened\""
                  },
                  {
                        "id": "f1-wri-118",
                        "segments": [
                              {
                                    "text": "At least",
                                    "n": 1
                              },
                              {
                                    "text": " 11 people died in an accident at a coal mine in Siberia and an operation to rescue "
                              },
                              {
                                    "text": "them",
                                    "n": 2
                              },
                              {
                                    "text": " stuck underground was suspended owing to",
                                    "n": 3
                              },
                              {
                                    "text": " the risk of "
                              },
                              {
                                    "text": "an",
                                    "n": 4
                              },
                              {
                                    "text": " explosion."
                              }
                        ],
                        "answer": 2,
                        "explanation": "\"them\" ตามด้วยส่วนขยาย \"stuck underground\" ซึ่งมีความหมายว่า \"ผู้ที่ติดอยู่ใต้ดิน\" ต้องใช้ \"those\" (those stuck underground) แทน \"them\""
                  },
                  {
                        "id": "f1-wri-119",
                        "segments": [
                              {
                                    "text": "Collisions between "
                              },
                              {
                                    "text": "aircrafts",
                                    "n": 1
                              },
                              {
                                    "text": " and larger birds, such as geese, can pose "
                              },
                              {
                                    "text": "serious",
                                    "n": 2
                              },
                              {
                                    "text": " danger, particularly "
                              },
                              {
                                    "text": "if",
                                    "n": 3
                              },
                              {
                                    "text": " the animals are "
                              },
                              {
                                    "text": "sucked",
                                    "n": 4
                              },
                              {
                                    "text": " into the engines."
                              }
                        ],
                        "answer": 1,
                        "explanation": "\"aircraft\" เป็นคำนามที่มีรูปเอกพจน์และพหูพจน์เหมือนกัน ไม่เติม -s จึงต้องแก้ \"aircrafts\" เป็น \"aircraft\""
                  },
                  {
                        "id": "f1-wri-120",
                        "segments": [
                              {
                                    "text": "Although",
                                    "n": 1
                              },
                              {
                                    "text": " rock art is common in the Arabian Peninsula, some of the carvings "
                              },
                              {
                                    "text": "in",
                                    "n": 2
                              },
                              {
                                    "text": " Al Jassasiya, Qatar's largest rock art site, "
                              },
                              {
                                    "text": "are unique",
                                    "n": 3
                              },
                              {
                                    "text": " and cannot be found "
                              },
                              {
                                    "text": "nowhere",
                                    "n": 4
                              },
                              {
                                    "text": " else."
                              }
                        ],
                        "answer": 4,
                        "explanation": "\"cannot be found nowhere else\" เป็น double negative (ปฏิเสธซ้อนปฏิเสธ) ซึ่งไม่ถูกต้องตามหลักไวยากรณ์ ต้องแก้ \"nowhere\" เป็น \"anywhere\""
                  }
            ]
      }
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
