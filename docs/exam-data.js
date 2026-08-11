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

  listening.tapescript: string (optional)
      full transcript text for the recording(s), shown in a collapsible
      "Tapescript" panel under the audio player on both the quiz and
      results pages. Paste transcript text directly into this field in
      your editor.

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
            "tapescript":
              "FORM 1 — Listening Comprehension Test\n" +
              "This is the Chulalongkorn University Listening Comprehension Test. The test consists of 3 parts. Each part of the test will be spoken only once. Listen carefully to what the speakers say. You may take notes if you wish. Then, the questions will be asked. For each question, there will be 4 choices: 1, 2, 3 and 4. The four choices are printed in your test booklet. Decide which choice is the best answer. Then, find the number of the question on your answer sheet and blacken the space that corresponds to the answer you have chosen.\n" +
              "\n" +
              "First, listen to the following example.\n" +
              "\n" +
              "You will hear:\n" +
              "(Woman) There was a large crowd at the auction. You must have collected a lot of money for your fund raising.\n" +
              "(Man) Not as much as we would have liked.\n" +
              "(Narrator) What does the man mean?\n" +
              "\n" +
              "You will read:\n" +
              "1. He didn't have much fun at the auction.\n" +
              "2. A lot of people sold more things than he did.\n" +
              "3. He didn't collect as much money as the woman.\n" +
              "4. They didn't make as much money as they had hoped.\n" +
              "\n" +
              "The correct answer is Number 4, so you should blacken Number 4 on your answer sheet.\n" +
              "\n" +
              "PART I\n" +
              "Directions: You will hear short conversations between two people. After each conversation, a question will be asked. You will hear the conversation only once, so you must listen carefully to what each speaker says. After you hear the conversation and the question, read the four choices and choose the one which best answers the question.\n" +
              "\n" +
              "Question 1.\n" +
              "W: I really think our new project is going to be a big success!\n" +
              "M: I wish I could share your enthusiasm.\n" +
              "(Narrator) How does the man most likely feel?\n" +
              "\n" +
              "Question 2.\n" +
              "M: How was your exchange program? Was it a good experience?\n" +
              "W: I'd do it again in a heartbeat!\n" +
              "(Narrator) What can be INFERRED from the conversation?\n" +
              "\n" +
              "Question 3.\n" +
              "W: OK, I've stitched up the cut. Make sure to keep the area dry. You should take antibiotics for a few days to make sure it doesn't get infected.\n" +
              "M: From now on I will be more careful with kitchen knives. Umm...when can you remove the stitches?\n" +
              "(Narrator) Where are the two speakers?\n" +
              "\n" +
              "Question 4.\n" +
              "M: When is Michael going to be here? I told everyone to be here at 7.\n" +
              "W: Well, he usually leaves work at 5 p.m., and it's about 30 minutes' drive from there. He said he'd make a quick stop to get a bottle of wine first though. Anyhow, he'll be here before everyone arrives for sure.\n" +
              "(Narrator) What time can they most likely expect to see Michael?\n" +
              "\n" +
              "Question 5.\n" +
              "M: What should we have for dinner—Thai, Japanese, Italian, or steak?\n" +
              "W: Another steak dinner, and I'll go 'moo'.\n" +
              "(Narrator) What does the woman imply?\n" +
              "\n" +
              "Question 6.\n" +
              "W: I want to make a birthday cake for Pam, but we've run out of butter.\n" +
              "M: If you can wait, I'll pick some up on the way back home from work tonight.\n" +
              "(Narrator) What is the man most likely going to do next?\n" +
              "\n" +
              "Question 7.\n" +
              "M: I just finished putting together the project report, and now I need to prepare slides for the presentation. I can do simple slides, but I want to do something more fancy.\n" +
              "W: Peter is the one you should talk to.\n" +
              "(Narrator) What does the woman mean?\n" +
              "\n" +
              "Question 8.\n" +
              "W: I ran into your old buddy Kenneth. He runs a restaurant near my office.\n" +
              "M: The last time I saw him was when we played against each other in a college basketball game. He broke his ankle and had to be taken to the hospital.\n" +
              "(Narrator) When was the last time the man saw Kenneth?\n" +
              "\n" +
              "Question 9.\n" +
              "W: John's throwing a party at his house tonight. Do you want to come and wish him happy birthday?\n" +
              "M: I have an assignment which is due tomorrow.\n" +
              "(Narrator) What is the man most likely going to do tonight?\n" +
              "\n" +
              "Question 10.\n" +
              "M: Would you like to go trekking in the mountains? Think about it—fresh air, wild animals, the peace and quiet...\n" +
              "W: I'm afraid that's not my cup of tea.\n" +
              "(Narrator) What does the woman mean?\n" +
              "\n" +
              "Question 11.\n" +
              "W: I have a lot of old books and magazines that I want to get rid of.\n" +
              "M: The local library would appreciate them, I think.\n" +
              "(Narrator) What is the man implying?\n" +
              "\n" +
              "Question 12.\n" +
              "W: Hey, isn't your flight at 11? You should get going—it's already half past nine.\n" +
              "M: It's in the evening.\n" +
              "(Narrator) What time is the man's flight?\n" +
              "\n" +
              "Question 13.\n" +
              "M: How was the film you saw yesterday—Child's Play, right? Was it fun?\n" +
              "W: I actually thought it was a film for kids, but as it turned out it was about an evil toy, and it's very, very bloody.\n" +
              "(Narrator) What kind of film is it?\n" +
              "\n" +
              "Question 14.\n" +
              "W: The faucet in the kitchen's dripping and the water pressure is so weak I can't water the lawn.\n" +
              "M: You'd better call Mr. Larson then.\n" +
              "(Narrator) Who is Mr. Larson most likely to be?\n" +
              "\n" +
              "Question 15.\n" +
              "W: Do you know anything about the merger?\n" +
              "M: We're clearly being kept in the dark about it.\n" +
              "(Narrator) How much does the man know about the merger?\n" +
              "\n" +
              "PART II\n" +
              "Directions: In this part, you will hear longer conversations between two people. After each conversation, some questions will be asked. You will hear the conversations and the questions only once, so listen carefully to what is said. After you hear the question, read the four choices and choose the one which best answers the question.\n" +
              "\n" +
              "Conversation 1\n" +
              "Woman: Hey, Barry. I'm afraid I can't make it to the opera tonight. Remember when I said Helen was flying in on Saturday? Well, she's actually arriving this evening. I'm going to go get her right now.\n" +
              "Man: I'm not surprised. Your sister is always getting the dates of things wrong. I still remember last year when she showed up at the coffee shop to attend my birthday party, but she was two days late!\n" +
              "Woman: Yeah, that's Helen. Our mother says I got the good memory in the family, while she got the good looks!\n" +
              "Man: (laughs) Smart man. Anyway, let's go to the opera next week. I'll take you out to dinner afterwards. My treat. We can even go to that Italian restaurant you love.\n" +
              "Woman: Great. I'll get their most expensive pasta! (laughs) Anyway, tell Helen I said hello when you go pick her up.\n" +
              "\n" +
              "Question 16. What is the relationship between the woman and Helen?\n" +
              "Question 17. What can be INFERRED about the woman?\n" +
              "Question 18. Where will the woman likely go next?\n" +
              "\n" +
              "Conversation 2\n" +
              "Woman: Excuse me, can you tell me which aisle I can find pink salt in?\n" +
              "Man: Well, the salt and other seasonings like black pepper and five-spice powder are in aisle six, but unfortunately, we do not carry pink salt, ma'am. Aside from regular white salt, we have only black salt and celery salt.\n" +
              "Woman: Oh no! What a shame. Well, the recipe I'm using recommended using pink salt, but it said it's all right to substitute some other salt in. Or I suppose I could put in some onion powder or black pepper. I'll go over to aisle six and pick some up.\n" +
              "Man: Yes, ma'am. I'm sorry to have to tell you that we've just run out of black pepper today, though. We'll restock it tomorrow, however.\n" +
              "Woman: Ah, I see. The decision is made for me, then, since there is only one thing left. I hope the seafood soup I'm making for my family will taste good with this addition.\n" +
              "Man: I'm sure that will taste delicious, ma'am. Actually, my father adds five-spice powder to his. My entire family loves it. I'm sure your family will love yours too.\n" +
              "\n" +
              "Question 19. Where are the speakers?\n" +
              "Question 20. What has the woman decided to add to her seafood soup?\n" +
              "Question 21. What can be INFERRED about the woman's soup?\n" +
              "\n" +
              "Conversation 3\n" +
              "Man: Hey, give me a moment to catch my breath! You keep hitting the ball at my head!\n" +
              "Woman: I am not! You're just really bad at tennis. Maybe if you raised your racket once in a while and hit the ball instead of running away from it, you wouldn't be so exhausted!\n" +
              "Man: That's not nice! This is only my third time playing this sport. Not all of us can be high school tennis champions like you!\n" +
              "Woman: You don't see me complaining when you're better than me in badminton or swimming. Come on. Get up. I want to finish the game before the sun sets. We won't be able to see anything in the next five minutes. This court isn't very well-lit.\n" +
              "Man: You know, maybe we should try a sport that neither of us is good at, so we're on equal footing. How about boxing?\n" +
              "Woman: Well, I'm sorry to tell you this, but I was a boxing champion at university!\n" +
              "\n" +
              "Question 22. What are the speakers currently doing?\n" +
              "Question 23. What can be INFERRED from the conversation?\n" +
              "Question 24. How many times has the man played tennis?\n" +
              "\n" +
              "PART III\n" +
              "Directions: In this part of the test, you will hear two talks. After each talk, you will be asked some questions. You will hear each talk and the questions only once, so listen carefully to what is said. After you hear each question, read the four choices and choose the one which best answers the question.\n" +
              "\n" +
              "Talk I\n" +
              "One social media user's complaint about a restaurant in the Turkish capital city of Istanbul that does not allow children sparked a public debate on child-free restaurants. There were numerous messages of support for the woman, who said that the owners refused to let her child in the restaurant, claiming their establishment was not open to those fourteen years and younger. The young mother said she was embarrassed and upset by the ban, and many social media users voiced their objection at how the owners treated her and her child. However, there were an equal number of messages that supported the ban on children in restaurants. People who advocate child-free restaurants said that customers should be permitted to enjoy a nice meal free of noisy and disruptive children. Some social media users said that they would happily pay more money to eat their food in a restaurant with a quiet atmosphere. Opponents to child-free restaurants say children and their families have the same rights as others, and that this is a form of discrimination. While child-free restaurants have been successfully launched in various countries, including the United States and Germany, the concept is not actually allowed under Turkish law. Legal experts says Turkish hotels and restaurants cannot commit discrimination, and customers have a right to file complaints to relevant authorities, such as ministries and municipalities in charge of issuing permits to such businesses. Businesses that violate this law may face fines. According to the country's consumer protection laws, without a justifiable reason, a business cannot refuse to serve a customer.\n" +
              "\n" +
              "Question 25. According to the talk, what is the main reason people support child-free restaurants?\n" +
              "Question 26. According to the talk, in which country has child-free restaurants been opened successfully?\n" +
              "Question 27. What can be INFERRED from the talk?\n" +
              "\n" +
              "Talk II\n" +
              "If you are forgetful or make mistakes when in a hurry, a large-scale study in the United States found that meditation could help you to become less likely to make errors. The research tested how a form of meditation called \"open monitoring meditation\" altered brain activity in a way that suggests increased error recognition. The researchers were amazed to see how just one session of guided open monitoring meditation was able to help produce changes to brain activity in people who had never meditated previously. They discovered that just 20 minutes of this form of meditation was able to enhance the brain's ability to detect and pay attention to mistakes. According to the study's authors, open monitoring meditation differs from other forms of meditation because people are asked to focus awareness on their feelings, thoughts or sensations as they occur in their minds and bodies. Other forms of meditation have the person focus on a single object, commonly their breath, but in open monitoring meditation, people sit quietly and pay careful attention to the direction of their thoughts instead of looking at their surroundings or an object. The findings of the study also suggest that different forms of meditation can have different effects on the brain and thoughts, although there is currently a lack of research in this area.\n" +
              "\n" +
              "Question 28. This talk mainly discusses __________.\n" +
              "Question 29. When people practice open monitoring meditation, what is focused on?\n" +
              "Question 30. Based on this talk, who may benefit from open monitoring meditation?\n" +
              "\n" +
              "End of the Listening Test",
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
                                    "text": "Prices of "
                              },
                              {
                                    "text": "some",
                                    "n": 1
                              },
                              {
                                    "text": " essential food items, such as rice and cooking oil, have "
                              },
                              {
                                    "text": "raised",
                                    "n": 2
                              },
                              {
                                    "text": " by 5% to as "
                              },
                              {
                                    "text": "much",
                                    "n": 3
                              },
                              {
                                    "text": " as 20% in "
                              },
                              {
                                    "text": "recent",
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
                                    "text": "The expert committee "
                              },
                              {
                                    "text": "on",
                                    "n": 1
                              },
                              {
                                    "text": " COVID-19 vaccination "
                              },
                              {
                                    "text": "has recommended",
                                    "n": 2
                              },
                              {
                                    "text": " that "
                              },
                              {
                                    "text": "the two",
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
                                    "text": " raspberries easily absorb water, "
                              },
                              {
                                    "text": "it is",
                                    "n": 2
                              },
                              {
                                    "text": " best to wash them "
                              },
                              {
                                    "text": "with",
                                    "n": 3
                              },
                              {
                                    "text": " cool water immediately before "
                              },
                              {
                                    "text": "eating",
                                    "n": 4
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
                                    "text": " dwindling "
                              },
                              {
                                    "text": "native Australian",
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
                                    "text": " could be the oldest English coin "
                              },
                              {
                                    "text": "ever found",
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
                                    "text": ", the US, EU and UK recently provided $8.5 bn "
                              },
                              {
                                    "text": "to help",
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
                                    "text": " fossil fuels such as oil, gas, and coal releases carbon dioxide into "
                              },
                              {
                                    "text": "the",
                                    "n": 2
                              },
                              {
                                    "text": " atmosphere, trapping heat "
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
                                    "text": " know you are trying "
                              },
                              {
                                    "text": "to focus",
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
                                    "text": "The world’s "
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
                                    "text": " kopi luwak, which is harvested "
                              },
                              {
                                    "text": "after digested",
                                    "n": 3
                              },
                              {
                                    "text": " and excreted by the Asian palm civet, a "
                              },
                              {
                                    "text": "small catlike",
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
                                    "text": " since the ancient "
                              },
                              {
                                    "text": "times",
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
                                    "text": " malls in Auckland when they decided "
                              },
                              {
                                    "text": "to reopen",
                                    "n": 3
                              },
                              {
                                    "text": " for the first time "
                              },
                              {
                                    "text": "in",
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
                                    "text": "Sweden’s "
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
                                    "text": " the government and her budget failed "
                              },
                              {
                                    "text": "to pass",
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
                                    "text": " after a "
                              },
                              {
                                    "text": "group",
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
                                    "text": "Octopuses, crabs and lobsters are capable "
                              },
                              {
                                    "text": "of",
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
                                    "text": " has added the creatures "
                              },
                              {
                                    "text": "to",
                                    "n": 3
                              },
                              {
                                    "text": " a list of sentient beings "
                              },
                              {
                                    "text": "to be given",
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
                                    "text": " quality time with children has significant benefits "
                              },
                              {
                                    "text": "for",
                                    "n": 2
                              },
                              {
                                    "text": " them, "
                              },
                              {
                                    "text": "including",
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
                                    "text": " opportunities throughout your day "
                              },
                              {
                                    "text": "to express",
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
                                    "text": " already pledged "
                              },
                              {
                                    "text": "to offer",
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
                                    "text": " join the US and other major "
                              },
                              {
                                    "text": "energy-consuming",
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
                                    "text": " dead animal carcasses "
                              },
                              {
                                    "text": "for",
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
                                    "text": "Cognitive behavioral sleep "
                              },
                              {
                                    "text": "training",
                                    "n": 1
                              },
                              {
                                    "text": " can teach you "
                              },
                              {
                                    "text": "how to",
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
                                    "text": "Scientists have uncovered one of the "
                              },
                              {
                                    "text": "earliest examples",
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
                                    "text": " stuck underground was suspended "
                              },
                              {
                                    "text": "owing to",
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
                                    "text": " rock art is common in the Arabian Peninsula, some of the "
                              },
                              {
                                    "text": "carvings",
                                    "n": 2
                              },
                              {
                                    "text": " in Al Jassasiya, Qatar’s largest rock art site, are "
                              },
                              {
                                    "text": "unique",
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
    // FORM 2 — Listening (Q1-30) & Writing (Q91-120) transcribed from
    // Practice Test III photos (data/IMG_7799–7809). The printed test
    // book only shows answer choices for Listening (no spoken prompt
    // text) and no answer key for either section, so prompt/answer/
    // explanation are left blank (null / "") to be filled in later.
    // Reading (cloze + comprehension) is intentionally left empty.
    // ---------------------------------------------------------------
    {
      id: "form2",
      label: "Form 2",
      listening: {
        expectedCount: 30,
        audioParts: [
          { id: "F2-L1", label: "Part 1 — Short Conversations", src: "mp3/F2.3.mp3" },
        ],
        tapescript:
          "FORM 2 — Listening Comprehension Test\n" +
          "This is the Chulalongkorn University Listening Comprehension Test. The test consists of 3 parts. Each part of the test will be spoken only once. Listen carefully to what the speakers say. You may take notes if you wish. Then, the questions will be asked. For each question, there will be 4 choices: 1, 2, 3 and 4 — choices are printed in your test booklet. Decide which choice is the best answer. Then, find the number of the question on your answer sheet and blacken the space that corresponds to the answer you have chosen.\n" +
          "\n" +
          "First, listen to the following example.\n" +
          "\n" +
          "(Woman) There was a large crowd at the auction. You must have collected a lot of money for your fund raising.\n" +
          "(Man) Not as much as we would have liked.\n" +
          "(Narrator) What does the man mean?\n" +
          "\n" +
          "You will read:\n" +
          "1. He didn't have much fun at the auction.\n" +
          "2. A lot of people sold more things than he did.\n" +
          "3. He didn't collect as much money as the woman.\n" +
          "4. They didn't make as much money as they had hoped.\n" +
          "\n" +
          "The correct answer is Number 4, so you should blacken Number 4 on your answer sheet.\n" +
          "\n" +
          "PART I\n" +
          "Directions: You will hear short dialogues between two people. After each dialogue, a question will be asked. You will hear each dialogue only once. After hearing the dialogue and the question, select your answer from the four choices.\n" +
          "\n" +
          "Question 1.\n" +
          "W: Do you want to go trekking this weekend?\n" +
          "M: I'm so worn out. I've been doing overtime the whole week this term. Why don't you ask Kylie?\n" +
          "(Narrator) What is the man most likely going to do this weekend?\n" +
          "\n" +
          "Question 2.\n" +
          "M: Hey, shouldn't you be at the library working on your assignment?\n" +
          "W: Why should I? It's not due until the end of the week.\n" +
          "\n" +
          "Question 3.\n" +
          "W: Steve, I have some questions about the project. Do you have a few minutes?\n" +
          "M: Yolanda's the person to talk to. She has been involved in it from the get-go.\n" +
          "(Narrator) Why does the man suggest the woman talk to Yolanda?\n" +
          "\n" +
          "Question 4.\n" +
          "M: Hi there! I don't see you around much these days. Let's have dinner sometime next week.\n" +
          "W: I'd love to, but I have English classes Monday through Wednesday and work part-time at a restaurant Friday to Sunday.\n" +
          "(Narrator) What day is the woman free?\n" +
          "\n" +
          "Question 5.\n" +
          "W: There's so much to do before the product launch. I'm only halfway done with the press release and haven't started emailing invitations to the guests yet.\n" +
          "M: Don't worry, I'm on it.\n" +
          "(Narrator) What is the woman most likely going to do next?\n" +
          "\n" +
          "Question 6.\n" +
          "W: Thanks, I guess I'm in the right profession, eh?\n" +
          "M: Those pictures of wildflowers are truly beautiful. You captured the light so well.\n" +
          "(Narrator) What is most likely the man's job?\n" +
          "\n" +
          "Question 7.\n" +
          "M: Where's Jenny? She should have been here ages ago. She's irresponsible.\n" +
          "W: You are one to talk!\n" +
          "(Narrator) What does the woman mean?\n" +
          "\n" +
          "Question 8.\n" +
          "W: Excuse me, do you offer discounts for purchases of 10 items or more?\n" +
          "M: We give a 15% discount for bulk purchases of 20 items or more.\n" +
          "(Narrator) How many items does the woman need to buy to get a discount?", // Q9-30 to be added as pages are transcribed
        questions: [
          {
            id: "f2-lis-1",
            partId: null,
            passageTitle: "Part I",
            passage: "Directions: You will hear short conversations between two people. After each conversation, a question will be asked. You will hear the conversation only once, so you must listen carefully to what each speaker says. After you hear the conversation and the question, read the four choices and choose the one which best answers the question.",
            prompt: "",
            choices: ["Go trekking", "Do overtime", "Rest at home", "Ask Kylie for help"],
            answer: 2,
            explanation: "คำตอบที่ถูกคือข้อ 3 ฝ่ายหญิงชวนฝ่ายชายไปเดินป่าสัปดาห์นี้ แต่ฝ่ายชายตอบว่าสัปดาห์นี้เหนื่อยมากเพราะทำงานล่วงเวลาตลอด จึงอนุมานได้ว่าฝ่ายชายน่าจะพักผ่อนอยู่ที่บ้าน",
          },
          {
            id: "f2-lis-2",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: ["Lazy", "Calm", "Curious", "Visionary"],
            answer: 0,
            explanation: "คำตอบที่ถูกคือข้อ 1 ฝ่ายชายถามว่าไม่ทำงานที่ต้องส่งครูใช่ไหม แต่ฝ่ายหญิงตอบว่ากำลังพักสัปดาห์ จึงอนุมานได้ว่าเธอมีนิสัยเกียจคร้าน",
          },
          {
            id: "f2-lis-3",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: [
              "Yolinda has time to talk.",
              "He is too busy right now.",
              "He doesn't know Yolinda well.",
              "Yolinda knows the project well.",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกคือข้อ 4 ฝ่ายหญิงมีคำถามเกี่ยวกับโครงการและถามว่าฝ่ายชายพอจะมีคำตอบไหม เขาตอบว่าควรไปคุยกับโยลินดาเพราะเธอจับโครงการนี้มาตั้งแต่เริ่มต้น (get-go)",
          },
          {
            id: "f2-lis-4",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: ["Tuesday", "Saturday", "Thursday", "Wednesday"],
            answer: 2,
            explanation: "คำตอบที่ถูกคือข้อ 3 ฝ่ายหญิงเรียนภาษาอังกฤษภาคค่ำวันจันทร์ถึงวันพุธและทำงานที่ร้านอาหารวันศุกร์ถึงวันอาทิตย์ เธอจึงว่างเพียงวันพฤหัสบดี",
          },
          {
            id: "f2-lis-5",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: [
              "Check her emails",
              "Prepare a press release",
              "Go to the product launch",
              "Email invitations to the guests",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกคือข้อ 4 ฝ่ายหญิงบ่นว่ามีงานยุ่งมาก ยังไม่ได้ส่งอีเมล์เชิญแขกเลย เดี๋ยวเธอจะจัดการเรื่องนั้นให้ (ส่งอีเมล์เชิญแขก)",
          },
          {
            id: "f2-lis-6",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: ["A florist", "A sculpture", "An electrician", "A photographer"],
            answer: 3,
            explanation: "คำตอบที่ถูกคือข้อ 4 ฝ่ายชายชมภาพถ่ายดอกไม้ป่าว่าสวยงามและจัดแสงเก่ง ฝ่ายหญิงบอกว่าถ้าเช่นนั้นเขาน่าจะเลือกอาชีพถูกแล้ว หมายความว่าเขาน่าจะเป็นช่างภาพ",
          },
          {
            id: "f2-lis-7",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: [
              "The man is always late.",
              "The man knows Jenny well.",
              "The man is always punctual.",
              "The man should talk to Jenny.",
            ],
            answer: 0,
            explanation: 'คำตอบที่ถูกคือข้อ 1 ฝ่ายชายบ่นว่าเจนนี่มาสายและไม่มีความรับผิดชอบ แต่ฝ่ายหญิงพูดว่า "You are one to talk!" หมายความว่าฝ่ายชายเองก็ไม่ต่างกัน (มาสายเช่นกัน)',
          },
          {
            id: "f2-lis-8",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: ["10", "15", "20", "50"],
            answer: 2,
            explanation: "คำตอบที่ถูกคือข้อ 3 ฝ่ายชายถามว่าถ้าซื้อ 10 ชิ้นจะได้รับส่วนลดหรือไม่ ฝ่ายหญิงตอบว่าถ้าซื้อ 20 ชิ้นจะได้ส่วนลด 15%",
          },
          {
            id: "f2-lis-9",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: ["Cold", "Rainy", "Sunny", "Cloudy"],
            answer: 1,
            explanation: "คำตอบที่ถูกคือข้อ 2 ฝ่ายหญิงบ่นว่าท้องฟ้าไม่มีเมฆสักก้อน แต่เธอก็อุตส่าห์ใส่เสื้อกันฝนและสวมรองเท้าบูท ขณะที่ฝ่ายชายเตรียมร่มมาด้วย หมายความว่าทั้งสองฟังพยากรณ์อากาศที่เตือนว่าฝนจะตก",
          },
          {
            id: "f2-lis-10",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: [
              "The new job will be a lot harder.",
              "The news cannot be confirmed yet.",
              "She hasn't processed the application.",
              "She hasn't yet been chosen as the winner.",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกคือข้อ 4 ฝ่ายชายแสดงความยินดีกับฝ่ายหญิงที่ได้รับแจ้งว่าจะได้รับตำแหน่งรางวัลผู้จัดการฝ่ายขายแห่งปี แต่ฝ่ายหญิงตอบว่าเธอยังไม่ได้รับเลือกให้เป็นผู้ชนะรางวัล",
          },
          {
            id: "f2-lis-11",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: [
              "It has a nice layout.",
              "It contains irrelevant information.",
              "It's missing extracurricular activities.",
              "It lacks information about her internship experience.",
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกคือข้อ 3 ฝ่ายชายบอกว่าใน resume ของฝ่ายหญิงมีรายละเอียดเกี่ยวกับคอร์สเรียนและกิจกรรมฝึกงาน แต่ไม่มีข้อมูลเกี่ยวกับกิจกรรมเสริมหลักสูตร (extracurricular activities)",
          },
          {
            id: "f2-lis-12",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: [
              "The car is very small.",
              "The car was very cheap.",
              "The car is very spacious.",
              "The car was very expensive.",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกคือข้อ 4 ฝ่ายชายบอกว่า \"It costs me an arm and a leg.\" หมายถึงเขาต้องจ่ายค่ารถราคาแพงมาก สำนวน cost an arm and a leg มีความหมายว่าแพงมาก",
          },
          {
            id: "f2-lis-13",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: [
              "Lucy is a great cook.",
              "Lucy is making pizza for dinner.",
              "The man doesn't smell anything bad.",
              "The man doesn't want to eat what Lucy cooked.",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกคือข้อ 4 ฝ่ายชายกระซิบว่าอย่าพูดดังเพราะลูซี่ทำอาหารอยู่ในครัว และถามว่าเขาควรสั่งพิซซ่าไหม จึงอนุมานได้ว่าเขาไม่อยากรับประทานอาหารที่ลูซี่ทำ",
          },
          {
            id: "f2-lis-14",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: [
              "He doesn't work there.",
              "Bob has a company car.",
              "He doesn't know much about fixing cars.",
              "The woman should contact another department.",
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกคือข้อ 3 ฝ่ายชายพูดว่า \"It's not my department.\" ซึ่งเป็นสำนวนหมายความว่าไม่ใช่เรื่องที่เขาถนัด เมื่อฝ่ายหญิงขอให้เขาช่วยตรวจสอบเสียงดังในรถ",
          },
          {
            id: "f2-lis-15",
            partId: null,
            passageTitle: "Part I",
            prompt: "",
            choices: ["A passenger", "A pedestrian", "An eye doctor", "A driving school instructor"],
            answer: 3,
            explanation: "คำตอบที่ถูกคือข้อ 4 ฝ่ายหญิงเตือนฝ่ายชายให้ลดความเร็วเพราะมีทางม้าลายข้างหน้า และบอกว่าถ้าเขาช่วยไม่ได้เธอจะไม่ได้รับใบอนุญาตขับขี่ เธอจึงน่าจะเป็นครูสอนขับรถ",
          },
          {
            id: "f2-lis-16",
            partId: null,
            passageTitle: "Part II — Conversation 1",
            passage: "Directions: In this part, you will hear longer conversations between two people. After each conversation, some questions will be asked. You will hear the conversations and the questions only once, so listen carefully to what is said. After you hear the question, read the four choices and choose the one which best answers the question.",
            prompt: "",
            choices: ["Water grass", "Clean his car", "Water flowers", "Clean his engine"],
            answer: 3,
            explanation: "คำตอบที่ถูกคือข้อ 4 ฝ่ายชายกล่าวว่าจะ \"wash the engine of my car\" เมื่อฝ่ายหญิงถามว่าจะใช้สายยางทำอะไร",
          },
          {
            id: "f2-lis-17",
            partId: null,
            passageTitle: "Part II — Conversation 1",
            prompt: "",
            choices: [
              "They are expensive.",
              "They destroy plastic.",
              "They are fire-resistant.",
              "They are completely natural.",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกคือข้อ 1 ฝ่ายหญิงกล่าวว่าผลิตภัณฑ์ทำความสะอาดเครื่องยนต์ (degreaser) ที่ใช้นั้น a little pricey เช่นเดียวกับฝ่ายชายที่บอกว่า costs quite a bit",
          },
          {
            id: "f2-lis-18",
            partId: null,
            passageTitle: "Part II — Conversation 1",
            prompt: "",
            choices: [
              "He enjoys gardening.",
              "He is a wealthy person.",
              "He is visiting his parents.",
              "He cares about the environment.",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกคือข้อ 4 ฝ่ายชายกล่าวว่าเขาใช้ degreaser ที่ไม่ทำลายสิ่งแวดล้อม",
          },
          {
            id: "f2-lis-19",
            partId: null,
            passageTitle: "Part II — Conversation 2",
            prompt: "",
            choices: ["The post office", "A travel agency", "A clothing shop", "The supermarket"],
            answer: 0,
            explanation: "คำตอบที่ถูกคือข้อ 1 ฝ่ายหญิงกล่าวว่าจะส่งกล่องไปต่างประเทศและมีการพูดถึงการติดแสตมป์",
          },
          {
            id: "f2-lis-20",
            partId: null,
            passageTitle: "Part II — Conversation 2",
            prompt: "",
            choices: ["Hats", "Pants", "Gloves", "Scarves"],
            answer: 3,
            explanation: "คำตอบที่ถูกคือข้อ 4 ฝ่ายหญิงบอกว่าในกล่องมี pants, socks, gloves และ hats จึงหมายความว่าไม่มี scarves อยู่ในกล่อง",
          },
          {
            id: "f2-lis-21",
            partId: null,
            passageTitle: "Part II — Conversation 2",
            prompt: "",
            choices: [
              "She lives in Holland.",
              "She is a grandmother.",
              "She knows how to knit.",
              "She bought the scarf she is wearing.",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกคือข้อ 4 She bought the scarf she is wearing เธอไม่ได้เป็นคนถักผ้าพันคอเอง",
          },
          {
            id: "f2-lis-22",
            partId: null,
            passageTitle: "Part II — Conversation 3",
            prompt: "",
            choices: ["Mother and son", "Uncle and niece", "Brother and sister", "Husband and wife"],
            answer: 0,
            explanation: "คำตอบที่ถูกคือข้อ 1 Mother and son ฝ่ายหญิงพูดกับฝ่ายชายว่า \"I did not raise you this way.\" หมายความว่าแม่ไม่ได้เลี้ยงเธอมาแบบนี้",
          },
          {
            id: "f2-lis-23",
            partId: null,
            passageTitle: "Part II — Conversation 3",
            prompt: "",
            choices: ["Tennis", "Soccer", "Baseball", "Basketball"],
            answer: 3,
            explanation: "คำตอบที่ถูกคือข้อ 4 Basketball เมื่อฝ่ายหญิงบอกฝ่ายชายว่าห้ามใส่ basketball shorts ฝ่ายชายแย้งว่าทำไมเขาจะใส่กางเกงขาสั้นสำหรับเล่นบาสเกตบอลไม่ได้ ซึ่งคำว่า ones ในที่นี้หมายถึง shorts",
          },
          {
            id: "f2-lis-24",
            partId: null,
            passageTitle: "Part II — Conversation 3",
            prompt: "",
            choices: ["A wedding", "A graduation", "A sports game", "A birthday party"],
            answer: 0,
            explanation: "คำตอบที่ถูกคือข้อ 1 บทสนทนากล่าวถึงคนที่กำลัง getting married และฝ่ายชายถกกันเรื่องเสื้อผ้าที่จะสวมไปงาน formal event ซึ่งท้ายบทสนทนาระบุว่าเป็นงานแต่งงาน",
          },
          {
            id: "f2-lis-25",
            partId: null,
            passageTitle: "Part III — Talk I",
            passage: "Directions: In this part of the test, you will hear two talks. After each talk, you will be asked some questions. You will hear each talk and the questions only once, so listen carefully to what is said. After you hear each question, read the four choices and choose the one which best answers the question.",
            prompt: "",
            choices: [
              "How avocados aid eye function",
              "How avocados help the elderly's health",
              "Using avocados to reduce eye infections",
              "Reducing eye inflammation with avocados",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกคือข้อ 1 How avocados aid eye function บทพูดนี้เกี่ยวกับงานวิจัยที่มุ่งดูว่าการรับประทานอะโวคาโดมีผลต่อการทำงานของสายตาอย่างไร โดยกล่าวว่า \"A study found that eating one whole avocado a day helps improve eye function in healthy adults.\"",
          },
          {
            id: "f2-lis-26",
            partId: null,
            passageTitle: "Part III — Talk I",
            prompt: "",
            choices: [
              "They ate one avocado each day for half a year.",
              "There were no participants who were older than 50 years.",
              "There was a mixture of both healthy and unhealthy people.",
              "They could choose to eat avocados, potatoes, or chickpeas.",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกคือข้อ 1 They ate one avocado each day for half a year ในบทพูดกล่าวว่า \"They were asked to eat one whole avocado daily for a period of six months.\" ซึ่ง they ในที่นี้คือผู้เข้าร่วมงานวิจัย",
          },
          {
            id: "f2-lis-27",
            partId: null,
            passageTitle: "Part III — Talk I",
            prompt: "",
            choices: [
              "have less unsaturated fat than other foods",
              "should be eaten whole for maximum benefit",
              "can increase the amount of lutein in the eyes",
              "improve digestion, immunity, and concentration",
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกคือข้อ 3 can increase the amount of lutein in the eyes ผลวิจัยพบว่าตาของกลุ่มทดลองมีลูทีนมากกว่าเดิม 25%",
          },
          {
            id: "f2-lis-28",
            partId: null,
            passageTitle: "Part III — Talk II",
            prompt: "",
            choices: [
              "Dog owners in Korea",
              "Owners of dangerous dogs",
              "Trainers of aggressive dogs",
              "People who do not leash their dogs",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกคือข้อ 1 Dog owners in Korea บทพูดนี้เกี่ยวกับกฎหมายใหม่ที่เจ้าของสุนัขทุกคนในเกาหลีต้องปฏิบัติตาม",
          },
          {
            id: "f2-lis-29",
            partId: null,
            passageTitle: "Part III — Talk II",
            prompt: "",
            choices: [
              "stay away from schools for young children",
              "attend safety education classes for six months",
              "make sure their dogs do not leave the house alone",
              "keep their dogs on a leash that is shorter than two meters",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกคือข้อ 2 attend safety education classes for six months เจ้าของสุนัขที่ดุร้ายต้อง take three hours of safety education each year หมายถึงเข้ารับการอบรมเรื่องความปลอดภัยปีละ 3 ชั่วโมง",
          },
          {
            id: "f2-lis-30",
            partId: null,
            passageTitle: "Part III — Talk II",
            prompt: "",
            choices: [
              "They are clearer.",
              "They are easier to enforce.",
              "They do not include prison time.",
              "They were issued by a different ministry.",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกคือข้อ 1 They are clearer กฎเดิม lack clarity หรือขาดความชัดเจน",
          },
        ],
      },

      reading: {
        expectedCount: 60,
        // Cloze Test — Victim Blaming (Q31-45). Transcribed from Practice
        // Test III photos. Choices for all 15 blanks are transcribed;
        // answers/explanations are left blank (null / "") to be filled
        // in later.
        questions: [
          {
            id: "f2-rea-31",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (31).",
            choices: ["apply", "confine", "integrate", "contribute"],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 apply โดยปกติแล้ว คำว่า apply แปลว่า ประยุกต์ใช้ สมัคร หรือ ทา แต่ในบริบทนี้ ตรงกับความหมายใน Longman Dictionary ที่ว่า to have an effect on or to concern a particular person, group, or situation เราสามารถแปลประโยค \"Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can apply to cases of rape and sexual assault, but also to more mundane crimes\" ได้ว่าการกล่าวโทษเหยื่อมีหลายรูปแบบ บ่อยครั้งมักสังเกตเห็นได้ยากหรือเป็นสิ่งที่เราทำไปโดยไม่รู้ตัว การกล่าวโทษเหยื่อเป็นสิ่งที่เกิดขึ้นได้กับคดีข่มขืนหรือคดีล่วงละเมิดทางเพศ รวมถึงคดีทั่ว ๆ ไปด้วยเช่นกัน ตัวเลือกอื่น: 2. confine จำกัดขอบเขต 3. integrate รวมเข้าไว้ด้วยกัน 4. contribute ก่อให้เกิด มีส่วนช่วย ทำประโยชน์ให้",
          },
          {
            id: "f2-rea-32",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (32).",
            choices: ["yet", "then", "otherwise", "Meanwhile"],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 then แปลว่า หลังจากนั้น ด้วยเหตุนั้น ใช้พูดถึงเหตุการณ์ที่เกิดขึ้นหลังอีกเหตุการณ์หนึ่ง ในที่นี้เป็นการพูดถึงเหตุการณ์ที่เหยื่อถูกล้วงกระเป๋า จากนั้นกลับถูกประณามหรือกล่าวโทษว่าเป็นเพราะเหยื่อเองที่ประมาทเลินเล่อและตัดสินใจใส่กระเป๋าสตางค์ของตัวเองไว้ในกระเป๋ากางเกงด้านหลัง",
          },
          {
            id: "f2-rea-33",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (33).",
            choices: ["audacity", "endurance", "recklessness", "procrastination"],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 3 recklessness แปลว่า ความประมาท การไม่คำนึงถึงผลที่จะตามมาเท่าที่ควร ซึ่งมีความหมายเข้ากับบริบทในประโยคนี้ ตัวเลือกอื่น: 1. audacity ความกล้า มุทะลุ 2. endurance ความอดทน 4. procrastination การผัดวันประกันพรุ่ง",
          },
          {
            id: "f2-rea-34",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (34).",
            choices: ["had done", "ought to do", "will have done", "could have done"],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 4 could have done เนื่องจากเป็นการกล่าวถึงเหตุการณ์ที่เกิดขึ้นในอดีต ประโยค \"Any time someone defaults to questioning what a victim could have done differently to prevent a crime, they are participating, to a certain degree, in the culture of victim blaming.\" มีความหมายว่าหากมีใครตั้งข้อสงสัยเกี่ยวกับการกระทำของเหยื่อในทำนองที่ว่าเหยื่อน่าจะทำอะไรให้ต่างออกไป (ในจุดนี้เป็นการกล่าวถึงเหตุการณ์ที่เกิดขึ้นไปแล้ว) เพื่อจะได้ไม่เกิดเหตุการณ์ร้าย ๆ หรือการกระทำผิดขึ้น ในระดับหนึ่งถือว่าบุคคลผู้นั้นมีการกล่าวโทษเหยื่อ (victim blaming) แล้ว",
          },
          {
            id: "f2-rea-35",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (35).",
            choices: ["degree", "conclusion", "possibility", "moderation"],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 degree เพราะ to a certain degree แปลว่า ในระดับหนึ่ง ในประโยคนี้ทำหน้าที่ขยาย verb phrase ที่ว่า are participating in the culture of victim blaming",
          },
          {
            id: "f2-rea-36",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (36).",
            choices: ["detecting", "implying", "stipulating", "predetermining"],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 implying บอกเป็นนัย เพราะการประณามหรือกล่าวโทษเหยื่อนั้นหมายรวมถึงการพูด การบอกเป็นนัยหรือการปฏิบัติต่อเหยื่อราวกับว่าสิ่งที่เหยื่อพูดหรือทำนั้นเป็นเหตุให้เกิดเหตุการณ์ร้ายแรงขึ้น แทนที่จะโทษผู้ที่ลงมือทำร้าย ตัวเลือกอื่น: 1. detecting ตรวจพบ 3. stipulating กำหนด ระบุ 4. predetermining กำหนดไว้ล่วงหน้า",
          },
          {
            id: "f2-rea-37",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (37).",
            choices: ["abusive", "persistent", "vulnerable", "misleading"],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 abusive แปลว่า ที่โหดร้ายทารุณ ที่หยาบคาย เพราะมีความหมายเข้ากับบริบทนี้ ตัวเลือกอื่น: 2. persistent ที่ยังคงอยู่นาน ที่ทำต่อไปอย่างไม่ลดละ เรื้อรัง 3. vulnerable ที่อ่อนแอ เปราะบาง ถูกโจมตีได้ง่าย 4. misleading ที่ทำให้เข้าใจผิด ที่ทำให้เชื่อแบบผิด ๆ",
          },
          {
            id: "f2-rea-38",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (38).",
            choices: ["instead of", "regardless of", "on account of", "at the expense of"],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 instead of แทนที่จะ เพราะประโยคนี้มีความหมายว่า การประณามหรือกล่าวโทษเหยื่อนั้นหมายรวมถึงการพูด การบอกเป็นนัยหรือการปฏิบัติต่อเหยื่อราวกับว่าสิ่งที่เหยื่อพูดหรือทำนั้นเป็นเหตุให้เกิดเหตุการณ์ร้ายแรงขึ้น แทนที่จะโทษคนที่ทำร้าย ตัวเลือกอื่น: 2. regardless of โดยไม่คำนึงถึง 3. on account of เพราะ เนื่องจาก 4. at the expense of โดยแลกมาด้วย",
          },
          {
            id: "f2-rea-39",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (39).",
            choices: ["harmed", "may harm", "could have harmed", "would have harmed"],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 harmed เพราะตำแหน่งนี้ควรเป็นการเล่าถึงเหตุการณ์ที่เกิดขึ้นไปแล้วในอดีต (simple past tense กริยาช่อง 2) ตัวเลือกอื่น: 2. may harm แปลว่าอาจจะทำร้ายในปัจจุบันหรือในอนาคต 3. could have harmed แปลว่า อาจจะทำร้ายไปแล้วในอดีต 4. would have harmed แปลว่า อาจจะทำร้ายไปแล้วในอดีต (แต่ไม่ได้ทำ) ประโยคนี้แปลว่า การประณามหรือกล่าวโทษเหยื่อนั้นหมายรวมถึงการพูด การบอกเป็นนัย หรือการปฏิบัติต่อเหยื่อราวกับว่าสิ่งที่เหยื่อพูดหรือทำนั้นเป็นเหตุให้เกิดเหตุการณ์ร้ายแรงขึ้น แทนที่จะโทษคนที่ทำร้าย (ไปแล้วในอดีต)",
          },
          {
            id: "f2-rea-40",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (40).",
            choices: ["contributed", "is contributing", "that contributing", "which contributes"],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 4 which contributes ในประโยค \"One psychological phenomenon which contributes to this tendency to lay the blame on the victim is known as the fundamental attribution error.\" อนุประโยคย่อย which contributes to this tendency to lay the blame on the victim เป็น relative clause ทำหน้าที่ขยายนามวลี (noun phrase) One psychological phenomenon ที่อยู่ข้างหน้า เหตุผลที่ต้องตอบ 4. which contributes เพราะในประโยคนี้มีกริยาแท้ (finite verb) คือ is known อยู่แล้ว จะเติมตัวเลือก 1. is contributing และ 2. was contributed ซึ่งเป็นรูปกริยาแท้อีกไม่ได้ ส่วน 3. that contributing ถือเป็นตัวเลือกที่ผิด เพราะหลังคำว่า that ที่เป็น relative pronoun ควรต้องตามด้วยกริยาแท้ แต่ contributing ไม่ใช่กริยาแท้",
          },
          {
            id: "f2-rea-41",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (41).",
            choices: ["vary", "variety", "various", "variables"],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 4 variables แปลว่า ตัวแปร เพราะตำแหน่งนี้ต้องการคำนามที่ทำหน้าที่เป็นกรรมของกริยา ignoring นอกจากนี้ คำนามในตำแหน่งนี้ต้องเป็นคำนามที่ relative clause \"that also might have played a role\" ที่อยู่ด้านหลังขยายด้วย (ตามหลักไวยากรณ์แล้ว relative clause มีหน้าที่ขยายคำนามที่อยู่ด้านหน้า) เราไม่สามารถตอบตัวเลือกอื่นได้ เช่น vary เพราะเป็น verb ส่วนคำว่า various เป็น adjective ส่วนคำว่า variety แม้จะเป็น noun แต่หมายถึงความหลากหลาย ซึ่งไม่เข้ากับบริบทนี้",
          },
          {
            id: "f2-rea-42",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (42).",
            choices: ["in return", "for example", "in other words", "on the other hand"],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 for example เนื่องจากประโยคนี้เป็นการยกตัวอย่าง ตัวเลือกอื่น: 1. in return หมายถึง เพื่อเป็นการตอบแทนหรือแลกเปลี่ยน 3. in other words หมายถึง กล่าวอีกนัยหนึ่ง 4. on the other hand หมายถึง ในทางตรงกันข้าม",
          },
          {
            id: "f2-rea-43",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (43).",
            choices: ["despite", "whereas", "however", "as opposed to"],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 3 however แปลว่า อย่างไรก็ตาม เพราะประโยคนี้สื่อความหมายที่ขัดแย้งกับประโยคก่อนหน้า กล่าวคือ เมื่อเพื่อนสอบตก เรามักโทษพฤติกรรมหรือลักษณะนิสัยของเพื่อนว่าไม่ขยัน ไม่ตั้งใจเรียนหรือเกียจคร้าน แต่พอถึงคราวที่ตัวเราเองสอบตก เรามักโทษเหตุปัจจัยภายนอก เช่น อากาศในห้องสอบร้อนเกินไปทำให้ขาดสมาธิ หรืออาจารย์ให้คะแนนไม่ยุติธรรม เป็นต้น",
          },
          {
            id: "f2-rea-44",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (44).",
            choices: ["Irrelevance", "misconduct", "negligibility", "performance"],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 4 performance แปลว่า สมรรถนะ ประสิทธิภาพในการเรียนหรือการทำงาน เพราะเป็นคำที่มีความหมายเข้ากับบริบทนี้ที่สุด ตัวเลือกอื่น: 1. irrelevance ความไม่เกี่ยวข้อง 2. misconduct การประพฤติตัวไม่เหมาะสม การประพฤติผิด 3. negligibility สิ่งเล็กน้อย ไม่สำคัญ",
          },
          {
            id: "f2-rea-45",
            type: "cloze",
            passageTitle: "Cloze Test — Victim Blaming",
            passage:
              "Victim blaming comes in many forms, and is oftentimes subtle and unconscious. It can _____(31)_____ to cases of rape and sexual assault, but also to more mundane crimes, like a person who gets pickpocketed and is _____(32)_____ chided for their _____(33)_____ and decision to carry their wallet in their back pocket. Any time someone defaults to questioning what a victim _____(34)_____ differently to prevent a crime, they are participating, to a certain _____(35)_____, in the culture of victim blaming.\n\nVictim blaming can be defined as someone saying, _____(36)_____, or treating a person who has experienced harmful or _____(37)_____ behavior, e.g. a survivor of sexual violence, like it was a result of something they did or said, _____(38)_____ placing the responsibility where it belongs: on the person who _____(39)_____ them. One psychological phenomenon _____(40)_____ to this tendency to lay the blame on the victim is known as the fundamental attribution error. This bias involves attributing other people's behaviors to internal, personal characteristics while ignoring external forces and _____(41)_____ that also might have played a role. When a classmate flunks a test, _____(42)_____, you probably attribute their behavior to a variety of internal characteristics. You might believe that the other student didn't study hard enough, or is just plain lazy. If you were to fail a test, _____(43)_____, what would you blame your poor _____(44)_____ on? In many cases, people blame their failings on external _____(45)_____. You might protest that the room was too hot and you couldn't concentrate, or that the teacher didn't grade the test fairly.",
            prompt: "Choose the best word or phrase to fill in blank (45).",
            choices: ["sources", "properties", "authorities", "justifications"],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 sources สาเหตุจากภายนอก ตัวเลือกอื่น: 2. properties คุณสมบัติ ทรัพย์สิน 3. authorities ผู้มีอำนาจหน้าที่ อำนาจหน้าที่ ผู้เชี่ยวชาญ 4. justifications การให้เหตุผลอธิบาย",
          },
          {
            id: "f2-rea-46",
            type: "comprehension",
            passageTitle: "Reading Passage — Raising Teenagers",
            passage:
              "Teenagers go through a series of changes. Their lives are typically filled with emotional, physical, and social upheaval. This knowledge aids parents in navigating their children's new and challenging developmental stages.\n\nRaising teenagers is not much different from first-year parenthood. When raising our newborn, we tried to keep our days as joyful as possible. Of course, sometimes we succeeded; sometimes we failed. There was a lot of push-pull in my own mothering experience with teenage children. My children still really need me to hold their hands, but they are adamant that they know how to go to their destination. This can leave us parents feel perplexed and incompetent.\n\nTeenagers frequently rebel and oppose parental rules as they grow more autonomous. Nonetheless, their impulsivity and immaturity can be expected. If parents believe their children are simply growing up, they should not perceive their actions as personal attacks on them. You may assist teens to acquire maturity by adjusting some restrictions and granting additional privileges as they demonstrate improved judgment. Parents must accept that parenthood is more difficult than they anticipated.\n\nThe key to good parenting is open communication and a willingness to accept the pain of significant problems that can't be fixed promptly for a teenager. Remember that teens can be idealistic, energetic, and fun. Raising them might give you a similar sense of fulfillment.",
            prompt: "What is the BEST title of the text?",
            choices: [
              "Raising Teens with Special Needs",
              "Whirlwind Teens and Overwhelmed Parents",
              "Embracing the Daunting Task of Raising Teens",
              "How to Compose Yourself around Immature Teens",
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 3 ชื่อเรื่องที่เหมาะสมกับใจความหลักของเรื่องคือ \"Embracing the Daunting Task of Raising Teens\" หรือการเปิดรับงานที่ท้าทายในการเลี้ยงดูวัยรุ่น",
          },
          {
            id: "f2-rea-47",
            type: "comprehension",
            passageTitle: "Reading Passage — Raising Teenagers",
            passage:
              "Teenagers go through a series of changes. Their lives are typically filled with emotional, physical, and social upheaval. This knowledge aids parents in navigating their children's new and challenging developmental stages.\n\nRaising teenagers is not much different from first-year parenthood. When raising our newborn, we tried to keep our days as joyful as possible. Of course, sometimes we succeeded; sometimes we failed. There was a lot of push-pull in my own mothering experience with teenage children. My children still really need me to hold their hands, but they are adamant that they know how to go to their destination. This can leave us parents feel perplexed and incompetent.\n\nTeenagers frequently rebel and oppose parental rules as they grow more autonomous. Nonetheless, their impulsivity and immaturity can be expected. If parents believe their children are simply growing up, they should not perceive their actions as personal attacks on them. You may assist teens to acquire maturity by adjusting some restrictions and granting additional privileges as they demonstrate improved judgment. Parents must accept that parenthood is more difficult than they anticipated.\n\nThe key to good parenting is open communication and a willingness to accept the pain of significant problems that can't be fixed promptly for a teenager. Remember that teens can be idealistic, energetic, and fun. Raising them might give you a similar sense of fulfillment.",
            prompt: 'The word "adamant" (line 8) is closest in meaning to _____.',
            choices: ["tolerant", "insistent", "innocent", "reluctant"],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 insistent (adj.) มีความหมายว่า ยืนยัน ยืนกราน ซึ่งเข้ากับบริบทของประโยคในเรื่อง \"My children still really need me to hold their hands, but they are adamant that they know how to go to their destination.\" ที่ว่าลูก ๆ ของผู้เขียนยังต้องการพ่อแม่ให้อยู่เคียงข้าง แต่พวกเขายืนกรานชัดเจนว่าพวกเขารู้ว่าจะบรรลุเป้าหมายได้อย่างไร",
          },
          {
            id: "f2-rea-48",
            type: "comprehension",
            passageTitle: "Reading Passage — Raising Teenagers",
            passage:
              "Teenagers go through a series of changes. Their lives are typically filled with emotional, physical, and social upheaval. This knowledge aids parents in navigating their children's new and challenging developmental stages.\n\nRaising teenagers is not much different from first-year parenthood. When raising our newborn, we tried to keep our days as joyful as possible. Of course, sometimes we succeeded; sometimes we failed. There was a lot of push-pull in my own mothering experience with teenage children. My children still really need me to hold their hands, but they are adamant that they know how to go to their destination. This can leave us parents feel perplexed and incompetent.\n\nTeenagers frequently rebel and oppose parental rules as they grow more autonomous. Nonetheless, their impulsivity and immaturity can be expected. If parents believe their children are simply growing up, they should not perceive their actions as personal attacks on them. You may assist teens to acquire maturity by adjusting some restrictions and granting additional privileges as they demonstrate improved judgment. Parents must accept that parenthood is more difficult than they anticipated.\n\nThe key to good parenting is open communication and a willingness to accept the pain of significant problems that can't be fixed promptly for a teenager. Remember that teens can be idealistic, energetic, and fun. Raising them might give you a similar sense of fulfillment.",
            prompt: "Based on the text, which of the following is NOT said to be a characteristic of teenagers?",
            choices: [
              "They can be unpredictable at times.",
              "They tend to disobey the rules set by their parents.",
              "They no longer rely on their parents for emotional support.",
              "They can act immaturely while gaining greater independence.",
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 3 \"They no longer rely on their parents for emotional support.\" เด็กวัยรุ่นไม่ต้องพึ่งพาการให้กำลังใจจากพ่อแม่อีกต่อไป",
          },
          {
            id: "f2-rea-49",
            type: "comprehension",
            passageTitle: "Reading Passage — Raising Teenagers",
            passage:
              "Teenagers go through a series of changes. Their lives are typically filled with emotional, physical, and social upheaval. This knowledge aids parents in navigating their children's new and challenging developmental stages.\n\nRaising teenagers is not much different from first-year parenthood. When raising our newborn, we tried to keep our days as joyful as possible. Of course, sometimes we succeeded; sometimes we failed. There was a lot of push-pull in my own mothering experience with teenage children. My children still really need me to hold their hands, but they are adamant that they know how to go to their destination. This can leave us parents feel perplexed and incompetent.\n\nTeenagers frequently rebel and oppose parental rules as they grow more autonomous. Nonetheless, their impulsivity and immaturity can be expected. If parents believe their children are simply growing up, they should not perceive their actions as personal attacks on them. You may assist teens to acquire maturity by adjusting some restrictions and granting additional privileges as they demonstrate improved judgment. Parents must accept that parenthood is more difficult than they anticipated.\n\nThe key to good parenting is open communication and a willingness to accept the pain of significant problems that can't be fixed promptly for a teenager. Remember that teens can be idealistic, energetic, and fun. Raising them might give you a similar sense of fulfillment.",
            prompt: "The author suggests that compared to raising babies, parenting teenagers _____.",
            choices: [
              "can be more rewarding",
              "involves the same challenging stages",
              "requires similar understanding and effort",
              "has fewer chances of things going wrong",
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 3 ผู้เขียนมองว่าการเลี้ยงดูเด็กวัยรุ่นและเด็กทารกล้วนต้องอาศัยความเข้าใจและความพยายามแบบเดียวกัน",
          },
          {
            id: "f2-rea-50",
            type: "comprehension",
            passageTitle: "Reading Passage — Raising Teenagers",
            passage:
              "Teenagers go through a series of changes. Their lives are typically filled with emotional, physical, and social upheaval. This knowledge aids parents in navigating their children's new and challenging developmental stages.\n\nRaising teenagers is not much different from first-year parenthood. When raising our newborn, we tried to keep our days as joyful as possible. Of course, sometimes we succeeded; sometimes we failed. There was a lot of push-pull in my own mothering experience with teenage children. My children still really need me to hold their hands, but they are adamant that they know how to go to their destination. This can leave us parents feel perplexed and incompetent.\n\nTeenagers frequently rebel and oppose parental rules as they grow more autonomous. Nonetheless, their impulsivity and immaturity can be expected. If parents believe their children are simply growing up, they should not perceive their actions as personal attacks on them. You may assist teens to acquire maturity by adjusting some restrictions and granting additional privileges as they demonstrate improved judgment. Parents must accept that parenthood is more difficult than they anticipated.\n\nThe key to good parenting is open communication and a willingness to accept the pain of significant problems that can't be fixed promptly for a teenager. Remember that teens can be idealistic, energetic, and fun. Raising them might give you a similar sense of fulfillment.",
            prompt: "Which of the following BEST describes the tone of the text?",
            choices: ["Skeptical", "Nostalgic", "Optimistic", "Emotional"],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 3 น้ำเสียง Optimistic คือ มีการมองประเด็น/ปัญหาในแง่ดี ดังจะเห็นได้จากตอนท้ายของเรื่องที่ว่าการเลี้ยงดูวัยรุ่นอาจให้ความรู้สึกที่ดีในด้านต่าง ๆ พลังแห่งความเยาว์วัยของวัยรุ่นสามารถช่วยเติมเต็มพ่อแม่ได้ ส่วน Nostalgic = ชวนให้ระลึกถึงอดีต, Skeptical = มีความสงสัย ไม่เชื่อ, Emotional = ใช้อารมณ์ ใส่อารมณ์",
          },
          {
            id: "f2-rea-51",
            type: "comprehension",
            passageTitle: "Reading Passage — Internet Censorship",
            passage:
              "The purpose of internet censorship is to control or suppress information published online. Despite the fact that it can be misused to limit freedom of expression, the advantages of increased government control over the internet outweigh the disadvantages. First of all, internet censorship protects children from accessing harmful and inappropriate information. Most users have the decency and common sense not to post something online that society would consider unhealthy or inappropriate content. The key here is \"most users\". Internet users come in all varieties.\n\nInternet censorship offers a means of limiting the number of harmful videos or other forms of offensive content children have access to. In simple terms, internet censorship provides a tool to limit access or even block access to content that can cause irreparable harm to young people. Internet censorship also minimizes the risk of identity theft and other cybercrimes. In this digital era, people store a lot of their personal and private information on their computers. If they don't have the proper knowledge of passwords and privacy policies, internet users can leave themselves very vulnerable. Limiting the amount of information put online can certainly assist in minimizing the threat of these cyber-attacks. Criminals have become very good accessing certain information, such as a person's driver's license, mailing address, and Social Security number. With these tidbits, a number of financial crimes can be committed. If internet censorship is designed to prevent access to the information used to commit cybercrimes, there is clearly an advantage to it. The World Economic Forum has even pressured countries to implement more control over internet traffic for this reason.\n\nFinally, internet censorship can limit the amount of misleading or fake news that is posted online. With news media sites springing up all over the web, it can be hard to know what news is real and what is fake. Established news outlets like CNN, Fox, and CNBC are not the only players on the web anymore. There are countless sites that are just looking to cash in on providing false or misleading articles online. ____________, the amount of fake news that appears online could be reduced.",
            prompt: "What is the main idea of this text?",
            choices: [
              "There are several benefits of internet censorship.",
              "Internet censorship has both advantages and disadvantages.",
              "The drawbacks of internet censorship outweigh its benefits.",
              "Imposing internet censorship is against freedom of the press.",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 There are several benefits of internet censorship. คำถามข้อนี้ถามถึงใจความสำคัญของบทความนี้ ถึงแม้ว่าบทความนี้จะขึ้นต้นว่าการเซนเซอร์ข้อมูลบนอินเทอร์เน็ตมีทั้งข้อดีและข้อเสีย แต่เนื้อหาส่วนใหญ่ของบทความนี้จะกล่าวถึงข้อดีของการเซนเซอร์ข้อมูลบนอินเทอร์เน็ตเป็นหลัก ข้อ 1 จึงเป็นคำตอบที่ถูกต้อง",
          },
          {
            id: "f2-rea-52",
            type: "comprehension",
            passageTitle: "Reading Passage — Internet Censorship",
            passage:
              "The purpose of internet censorship is to control or suppress information published online. Despite the fact that it can be misused to limit freedom of expression, the advantages of increased government control over the internet outweigh the disadvantages. First of all, internet censorship protects children from accessing harmful and inappropriate information. Most users have the decency and common sense not to post something online that society would consider unhealthy or inappropriate content. The key here is \"most users\". Internet users come in all varieties.\n\nInternet censorship offers a means of limiting the number of harmful videos or other forms of offensive content children have access to. In simple terms, internet censorship provides a tool to limit access or even block access to content that can cause irreparable harm to young people. Internet censorship also minimizes the risk of identity theft and other cybercrimes. In this digital era, people store a lot of their personal and private information on their computers. If they don't have the proper knowledge of passwords and privacy policies, internet users can leave themselves very vulnerable. Limiting the amount of information put online can certainly assist in minimizing the threat of these cyber-attacks. Criminals have become very good accessing certain information, such as a person's driver's license, mailing address, and Social Security number. With these tidbits, a number of financial crimes can be committed. If internet censorship is designed to prevent access to the information used to commit cybercrimes, there is clearly an advantage to it. The World Economic Forum has even pressured countries to implement more control over internet traffic for this reason.\n\nFinally, internet censorship can limit the amount of misleading or fake news that is posted online. With news media sites springing up all over the web, it can be hard to know what news is real and what is fake. Established news outlets like CNN, Fox, and CNBC are not the only players on the web anymore. There are countless sites that are just looking to cash in on providing false or misleading articles online. ____________, the amount of fake news that appears online could be reduced.",
            prompt:
              "The first paragraph (lines 1-11) suggests that internet censorship is necessary because ____________.",
            choices: [
              "it can prevent abuse of freedom of the press",
              "it aligns with international efforts to curb cybercrime",
              "most users tend to post indecent content on the internet",
              "some users lack the decency not to post offensive content online",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 4 some users lack the decency not to post offensive content online ผู้เขียนชี้ว่าการเซนเซอร์ข้อมูลบนอินเทอร์เน็ตเป็นสิ่งจำเป็นเพราะผู้ใช้งานบางส่วนไม่รู้จักความเหมาะสมในการโพสต์เนื้อหาที่ก้าวร้าวหรือสร้างความขุ่นเคืองแก่ผู้อื่นบนอินเทอร์เน็ต",
          },
          {
            id: "f2-rea-53",
            type: "comprehension",
            passageTitle: "Reading Passage — Internet Censorship",
            passage:
              "The purpose of internet censorship is to control or suppress information published online. Despite the fact that it can be misused to limit freedom of expression, the advantages of increased government control over the internet outweigh the disadvantages. First of all, internet censorship protects children from accessing harmful and inappropriate information. Most users have the decency and common sense not to post something online that society would consider unhealthy or inappropriate content. The key here is \"most users\". Internet users come in all varieties.\n\nInternet censorship offers a means of limiting the number of harmful videos or other forms of offensive content children have access to. In simple terms, internet censorship provides a tool to limit access or even block access to content that can cause irreparable harm to young people. Internet censorship also minimizes the risk of identity theft and other cybercrimes. In this digital era, people store a lot of their personal and private information on their computers. If they don't have the proper knowledge of passwords and privacy policies, internet users can leave themselves very vulnerable. Limiting the amount of information put online can certainly assist in minimizing the threat of these cyber-attacks. Criminals have become very good accessing certain information, such as a person's driver's license, mailing address, and Social Security number. With these tidbits, a number of financial crimes can be committed. If internet censorship is designed to prevent access to the information used to commit cybercrimes, there is clearly an advantage to it. The World Economic Forum has even pressured countries to implement more control over internet traffic for this reason.\n\nFinally, internet censorship can limit the amount of misleading or fake news that is posted online. With news media sites springing up all over the web, it can be hard to know what news is real and what is fake. Established news outlets like CNN, Fox, and CNBC are not the only players on the web anymore. There are countless sites that are just looking to cash in on providing false or misleading articles online. ____________, the amount of fake news that appears online could be reduced.",
            prompt: 'What is the word "vulnerable" (line 15) closest in meaning to?',
            choices: ["Deadly", "Exposed", "Sensitive", "Protected"],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 Exposed คำว่า vulnerable ในที่นี้มีความหมายว่า เปิดเผยในที่สาธารณะ ซึ่งสอดคล้องกับความหมายของคำว่า exposed ส่วนคำว่า deadly แปลว่า อันตรายร้ายแรง sensitive แปลว่า อ่อนไหวหรืออ่อนแอ และ protected แปลว่า มีการป้องกัน",
          },
          {
            id: "f2-rea-54",
            type: "comprehension",
            passageTitle: "Reading Passage — Internet Censorship",
            passage:
              "The purpose of internet censorship is to control or suppress information published online. Despite the fact that it can be misused to limit freedom of expression, the advantages of increased government control over the internet outweigh the disadvantages. First of all, internet censorship protects children from accessing harmful and inappropriate information. Most users have the decency and common sense not to post something online that society would consider unhealthy or inappropriate content. The key here is \"most users\". Internet users come in all varieties.\n\nInternet censorship offers a means of limiting the number of harmful videos or other forms of offensive content children have access to. In simple terms, internet censorship provides a tool to limit access or even block access to content that can cause irreparable harm to young people. Internet censorship also minimizes the risk of identity theft and other cybercrimes. In this digital era, people store a lot of their personal and private information on their computers. If they don't have the proper knowledge of passwords and privacy policies, internet users can leave themselves very vulnerable. Limiting the amount of information put online can certainly assist in minimizing the threat of these cyber-attacks. Criminals have become very good accessing certain information, such as a person's driver's license, mailing address, and Social Security number. With these tidbits, a number of financial crimes can be committed. If internet censorship is designed to prevent access to the information used to commit cybercrimes, there is clearly an advantage to it. The World Economic Forum has even pressured countries to implement more control over internet traffic for this reason.\n\nFinally, internet censorship can limit the amount of misleading or fake news that is posted online. With news media sites springing up all over the web, it can be hard to know what news is real and what is fake. Established news outlets like CNN, Fox, and CNBC are not the only players on the web anymore. There are countless sites that are just looking to cash in on providing false or misleading articles online. ____________, the amount of fake news that appears online could be reduced.",
            prompt: "What can be done to minimize the threat of cybercrime?",
            choices: [
              "Refrain from online activities",
              "Implement total internet censorship",
              "Remove the personal information from all websites",
              "Restrict the amount of private information put online",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 4 Restrict the amount of private information put online คำถามข้อนี้ถามว่าเราจะปลอดภัยจากอาชญากรรมไซเบอร์ได้อย่างไร ซึ่งตรงกับคำตอบข้อ 4",
          },
          {
            id: "f2-rea-55",
            type: "comprehension",
            passageTitle: "Reading Passage — Internet Censorship",
            passage:
              "The purpose of internet censorship is to control or suppress information published online. Despite the fact that it can be misused to limit freedom of expression, the advantages of increased government control over the internet outweigh the disadvantages. First of all, internet censorship protects children from accessing harmful and inappropriate information. Most users have the decency and common sense not to post something online that society would consider unhealthy or inappropriate content. The key here is \"most users\". Internet users come in all varieties.\n\nInternet censorship offers a means of limiting the number of harmful videos or other forms of offensive content children have access to. In simple terms, internet censorship provides a tool to limit access or even block access to content that can cause irreparable harm to young people. Internet censorship also minimizes the risk of identity theft and other cybercrimes. In this digital era, people store a lot of their personal and private information on their computers. If they don't have the proper knowledge of passwords and privacy policies, internet users can leave themselves very vulnerable. Limiting the amount of information put online can certainly assist in minimizing the threat of these cyber-attacks. Criminals have become very good accessing certain information, such as a person's driver's license, mailing address, and Social Security number. With these tidbits, a number of financial crimes can be committed. If internet censorship is designed to prevent access to the information used to commit cybercrimes, there is clearly an advantage to it. The World Economic Forum has even pressured countries to implement more control over internet traffic for this reason.\n\nFinally, internet censorship can limit the amount of misleading or fake news that is posted online. With news media sites springing up all over the web, it can be hard to know what news is real and what is fake. Established news outlets like CNN, Fox, and CNBC are not the only players on the web anymore. There are countless sites that are just looking to cash in on providing false or misleading articles online. ____________, the amount of fake news that appears online could be reduced.",
            prompt: 'The phrase "these tidbits" (line 19) refers to ____________.',
            choices: ["criminals", "cyber attacks", "certain information", "falsified information"],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 3 certain information คำว่า tidbits ในที่นี้มีความหมายว่า ข้อมูลเล็ก ๆ น้อย ๆ ที่น่าสนใจ ตรงกับคำว่า certain information ในข้อ 3",
          },
          {
            id: "f2-rea-56",
            type: "comprehension",
            passageTitle: "Reading Passage — Internet Censorship",
            passage:
              "The purpose of internet censorship is to control or suppress information published online. Despite the fact that it can be misused to limit freedom of expression, the advantages of increased government control over the internet outweigh the disadvantages. First of all, internet censorship protects children from accessing harmful and inappropriate information. Most users have the decency and common sense not to post something online that society would consider unhealthy or inappropriate content. The key here is \"most users\". Internet users come in all varieties.\n\nInternet censorship offers a means of limiting the number of harmful videos or other forms of offensive content children have access to. In simple terms, internet censorship provides a tool to limit access or even block access to content that can cause irreparable harm to young people. Internet censorship also minimizes the risk of identity theft and other cybercrimes. In this digital era, people store a lot of their personal and private information on their computers. If they don't have the proper knowledge of passwords and privacy policies, internet users can leave themselves very vulnerable. Limiting the amount of information put online can certainly assist in minimizing the threat of these cyber-attacks. Criminals have become very good accessing certain information, such as a person's driver's license, mailing address, and Social Security number. With these tidbits, a number of financial crimes can be committed. If internet censorship is designed to prevent access to the information used to commit cybercrimes, there is clearly an advantage to it. The World Economic Forum has even pressured countries to implement more control over internet traffic for this reason.\n\nFinally, internet censorship can limit the amount of misleading or fake news that is posted online. With news media sites springing up all over the web, it can be hard to know what news is real and what is fake. Established news outlets like CNN, Fox, and CNBC are not the only players on the web anymore. There are countless sites that are just looking to cash in on providing false or misleading articles online. ____________, the amount of fake news that appears online could be reduced.",
            prompt:
              "The author mentions The World Economic Forum in Paragraph 2 (lines 12-23) to ____________.",
            choices: [
              "highlight the impact of cybercrime on business",
              "demonstrate the growing concern over cybercrime",
              "urge governments across the world to fight cybercrime",
              "exemplify an organization established to deal with cybercrime",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 demonstrate the growing concern over cybercrime ผู้เขียนเอ่ยถึง The World Economic Forum เพื่อย้ำถึงความกังวลในเรื่องอาชญากรรมไซเบอร์ที่เพิ่มมากขึ้น",
          },
          {
            id: "f2-rea-57",
            type: "comprehension",
            passageTitle: "Reading Passage — Internet Censorship",
            passage:
              "The purpose of internet censorship is to control or suppress information published online. Despite the fact that it can be misused to limit freedom of expression, the advantages of increased government control over the internet outweigh the disadvantages. First of all, internet censorship protects children from accessing harmful and inappropriate information. Most users have the decency and common sense not to post something online that society would consider unhealthy or inappropriate content. The key here is \"most users\". Internet users come in all varieties.\n\nInternet censorship offers a means of limiting the number of harmful videos or other forms of offensive content children have access to. In simple terms, internet censorship provides a tool to limit access or even block access to content that can cause irreparable harm to young people. Internet censorship also minimizes the risk of identity theft and other cybercrimes. In this digital era, people store a lot of their personal and private information on their computers. If they don't have the proper knowledge of passwords and privacy policies, internet users can leave themselves very vulnerable. Limiting the amount of information put online can certainly assist in minimizing the threat of these cyber-attacks. Criminals have become very good accessing certain information, such as a person's driver's license, mailing address, and Social Security number. With these tidbits, a number of financial crimes can be committed. If internet censorship is designed to prevent access to the information used to commit cybercrimes, there is clearly an advantage to it. The World Economic Forum has even pressured countries to implement more control over internet traffic for this reason.\n\nFinally, internet censorship can limit the amount of misleading or fake news that is posted online. With news media sites springing up all over the web, it can be hard to know what news is real and what is fake. Established news outlets like CNN, Fox, and CNBC are not the only players on the web anymore. There are countless sites that are just looking to cash in on providing false or misleading articles online. ____________, the amount of fake news that appears online could be reduced.",
            prompt: "Why are more websites publishing fake or misleading news?",
            choices: [
              "To gain profit",
              "To commit cybercrimes",
              "To add excitement to the news",
              "To replace established news outlets",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 To gain profit บรรดาเว็บไซต์ต่าง ๆ มีการเผยแพร่ข่าวปลอมและข่าวที่สร้างความเข้าใจผิดเพื่อหวังกำไร",
          },
          {
            id: "f2-rea-58",
            type: "comprehension",
            passageTitle: "Reading Passage — Internet Censorship",
            passage:
              "The purpose of internet censorship is to control or suppress information published online. Despite the fact that it can be misused to limit freedom of expression, the advantages of increased government control over the internet outweigh the disadvantages. First of all, internet censorship protects children from accessing harmful and inappropriate information. Most users have the decency and common sense not to post something online that society would consider unhealthy or inappropriate content. The key here is \"most users\". Internet users come in all varieties.\n\nInternet censorship offers a means of limiting the number of harmful videos or other forms of offensive content children have access to. In simple terms, internet censorship provides a tool to limit access or even block access to content that can cause irreparable harm to young people. Internet censorship also minimizes the risk of identity theft and other cybercrimes. In this digital era, people store a lot of their personal and private information on their computers. If they don't have the proper knowledge of passwords and privacy policies, internet users can leave themselves very vulnerable. Limiting the amount of information put online can certainly assist in minimizing the threat of these cyber-attacks. Criminals have become very good accessing certain information, such as a person's driver's license, mailing address, and Social Security number. With these tidbits, a number of financial crimes can be committed. If internet censorship is designed to prevent access to the information used to commit cybercrimes, there is clearly an advantage to it. The World Economic Forum has even pressured countries to implement more control over internet traffic for this reason.\n\nFinally, internet censorship can limit the amount of misleading or fake news that is posted online. With news media sites springing up all over the web, it can be hard to know what news is real and what is fake. Established news outlets like CNN, Fox, and CNBC are not the only players on the web anymore. There are countless sites that are just looking to cash in on providing false or misleading articles online. ____________, the amount of fake news that appears online could be reduced.",
            prompt: "Which of the following would BEST be added in the blank in the last paragraph (line 29)?",
            choices: [
              "By protecting personal information",
              "Without the enforcement of internet censorship",
              "By enacting a reasonable program of internet controls",
              "Through the strict use of automated internet censorship tools",
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 3 By enacting a reasonable program of internet controls คำถามข้อนี้ถามว่าประโยคใดเหมาะสมที่จะเติมลงในช่องว่างเพื่อให้มีความสอดคล้องกัน ประโยคที่ตามหลังมา \"the amount of fake news that appears online could be reduced\" หมายความว่าการเซนเซอร์อาจช่วยลดจำนวนของข่าวปลอมบนออนไลน์ได้ ดังนั้น By enacting a reasonable program of internet controls หรือการบังคับใช้กฎหมายเซนเซอร์ข้อมูลทางอินเทอร์เน็ตที่สมเหตุสมผล จึงเป็นคำตอบที่เหมาะสมที่สุด",
          },
          {
            id: "f2-rea-59",
            type: "comprehension",
            passageTitle: "Reading Passage — Internet Censorship",
            passage:
              "The purpose of internet censorship is to control or suppress information published online. Despite the fact that it can be misused to limit freedom of expression, the advantages of increased government control over the internet outweigh the disadvantages. First of all, internet censorship protects children from accessing harmful and inappropriate information. Most users have the decency and common sense not to post something online that society would consider unhealthy or inappropriate content. The key here is \"most users\". Internet users come in all varieties.\n\nInternet censorship offers a means of limiting the number of harmful videos or other forms of offensive content children have access to. In simple terms, internet censorship provides a tool to limit access or even block access to content that can cause irreparable harm to young people. Internet censorship also minimizes the risk of identity theft and other cybercrimes. In this digital era, people store a lot of their personal and private information on their computers. If they don't have the proper knowledge of passwords and privacy policies, internet users can leave themselves very vulnerable. Limiting the amount of information put online can certainly assist in minimizing the threat of these cyber-attacks. Criminals have become very good accessing certain information, such as a person's driver's license, mailing address, and Social Security number. With these tidbits, a number of financial crimes can be committed. If internet censorship is designed to prevent access to the information used to commit cybercrimes, there is clearly an advantage to it. The World Economic Forum has even pressured countries to implement more control over internet traffic for this reason.\n\nFinally, internet censorship can limit the amount of misleading or fake news that is posted online. With news media sites springing up all over the web, it can be hard to know what news is real and what is fake. Established news outlets like CNN, Fox, and CNBC are not the only players on the web anymore. There are countless sites that are just looking to cash in on providing false or misleading articles online. ____________, the amount of fake news that appears online could be reduced.",
            prompt: "This text would most likely be found in ____________.",
            choices: [
              "a school newsletter",
              "the IT section of an online newspaper",
              "a website dedicated to internet-related issues",
              "a chapter in a business and technology textbook",
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 3 a website dedicated to internet-related issues คำถามข้อนี้ถามว่าบทความนี้น่าจะพบได้จากที่ใด คำตอบคือในเว็บไซต์เกี่ยวกับประเด็นที่เกี่ยวข้องกับอินเทอร์เน็ต เนื่องจากเนื้อหาในบทความมีใจความสำคัญเกี่ยวกับข้อดีของการเซนเซอร์ข้อมูลบนอินเทอร์เน็ต",
          },
          {
            id: "f2-rea-60",
            type: "comprehension",
            passageTitle: "Reading Passage — Internet Censorship",
            passage:
              "The purpose of internet censorship is to control or suppress information published online. Despite the fact that it can be misused to limit freedom of expression, the advantages of increased government control over the internet outweigh the disadvantages. First of all, internet censorship protects children from accessing harmful and inappropriate information. Most users have the decency and common sense not to post something online that society would consider unhealthy or inappropriate content. The key here is \"most users\". Internet users come in all varieties.\n\nInternet censorship offers a means of limiting the number of harmful videos or other forms of offensive content children have access to. In simple terms, internet censorship provides a tool to limit access or even block access to content that can cause irreparable harm to young people. Internet censorship also minimizes the risk of identity theft and other cybercrimes. In this digital era, people store a lot of their personal and private information on their computers. If they don't have the proper knowledge of passwords and privacy policies, internet users can leave themselves very vulnerable. Limiting the amount of information put online can certainly assist in minimizing the threat of these cyber-attacks. Criminals have become very good accessing certain information, such as a person's driver's license, mailing address, and Social Security number. With these tidbits, a number of financial crimes can be committed. If internet censorship is designed to prevent access to the information used to commit cybercrimes, there is clearly an advantage to it. The World Economic Forum has even pressured countries to implement more control over internet traffic for this reason.\n\nFinally, internet censorship can limit the amount of misleading or fake news that is posted online. With news media sites springing up all over the web, it can be hard to know what news is real and what is fake. Established news outlets like CNN, Fox, and CNBC are not the only players on the web anymore. There are countless sites that are just looking to cash in on providing false or misleading articles online. ____________, the amount of fake news that appears online could be reduced.",
            prompt: "What is the tone of the text?",
            choices: ["Skeptical", "Persuasive", "Informative", "Light-hearted"],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 Persuasive ทัศนคติของผู้เขียนที่ถ่ายทอดออกมาในบทความนี้ออกไปในทางโน้มน้าวให้ผู้อ่านเห็นด้วยกับการเซนเซอร์ข้อมูลบนอินเทอร์เน็ต ส่วน Skeptical หมายถึงมีความเคลือบแคลง Informative หมายถึงให้ข้อมูล Light-hearted หมายถึงเบาสมอง",
          },
          {
            id: "f2-rea-61",
            type: "comprehension",
            passageTitle: "Reading Passage — Smart Garments and Carbon Nanotube Threads",
            passage:
              "Over the years, we have seen many examples of smart garments packed with technology to monitor different aspects of a wearer's physical wellbeing. Recently, Rice University researchers have developed a new material they say is as soft as cotton but as strong as Kevlar and as conductive as many metals. It can be worn and washed like normal clothing and could eventually turn athletic apparel into smart wearables.\n\nThe technology used is called carbon nanotube threads. These threads work in the same way as the wires in an electrocardiogram (EKG) monitoring device, which measures heart rhythms to detect heart conditions. But instead of having to be patched onto the skin, they can be sewn into a t-shirt and worn like normal athletic wear. Unlike wires, the threads can comfortably move with the wearer. They can also be washed, stretched, and worn repeatedly without breaking down.\n\nThe Rice University lab has previously developed carbon nanotube fibers and explored their potential in cochlear implants, flexible antennas, and repairing broken electrical circuits in the heart. ____________ For this latest iteration, the researchers used a rope-making device to bundle the filaments together. These bundles were then woven into a fiber. From there, the fibers could be sewn into fabric. A zig-zag pattern was used so that they wouldn't break when stretched. The resulting smart shirt provides soft, wearable sensors for noninvasive and continuous electrocardiogram monitoring. With a few tweaks, apparel with these fibers could eventually be able to track other vital signs, according to the researchers.\n\nThough likely a ways off from going into production for consumers, the material could eventually help replace bulky EKG Holter monitors in medical settings and heart-rate monitoring watches and chest straps for athletes, in addition to other potential uses. \"You just don't find soft, flexible, threadlike materials that are comfortable to the touch, that you can work with, that you can build a bridge out of it or you can build a powerline out of it, but you can also run it through a sewing machine,\" said a member of the research team. \"Nothing else behaves like this.\"",
            prompt: "What does the text mainly discuss?",
            choices: [
              "How carbon nanotube threads were developed",
              "Functions of an electrocardiogram monitoring device",
              "A new material that could turn regular shirts into heart monitors",
              "Characteristics of smart garments and their potential applications",
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 3 A new material that could turn regular shirts into heart monitors คำถามข้อนี้ถามว่าบทความนี้เกี่ยวกับเรื่องอะไร คำตอบที่ถูกต้องคือเกี่ยวกับวัสดุใหม่ชนิดหนึ่งซึ่งสามารถนำไปถักทอเป็นเสื้อผ้าที่ตรวจจับการทำงานของหัวใจของผู้สวมใส่ได้",
          },
          {
            id: "f2-rea-62",
            type: "comprehension",
            passageTitle: "Reading Passage — Smart Garments and Carbon Nanotube Threads",
            passage:
              "Over the years, we have seen many examples of smart garments packed with technology to monitor different aspects of a wearer's physical wellbeing. Recently, Rice University researchers have developed a new material they say is as soft as cotton but as strong as Kevlar and as conductive as many metals. It can be worn and washed like normal clothing and could eventually turn athletic apparel into smart wearables.\n\nThe technology used is called carbon nanotube threads. These threads work in the same way as the wires in an electrocardiogram (EKG) monitoring device, which measures heart rhythms to detect heart conditions. But instead of having to be patched onto the skin, they can be sewn into a t-shirt and worn like normal athletic wear. Unlike wires, the threads can comfortably move with the wearer. They can also be washed, stretched, and worn repeatedly without breaking down.\n\nThe Rice University lab has previously developed carbon nanotube fibers and explored their potential in cochlear implants, flexible antennas, and repairing broken electrical circuits in the heart. ____________ For this latest iteration, the researchers used a rope-making device to bundle the filaments together. These bundles were then woven into a fiber. From there, the fibers could be sewn into fabric. A zig-zag pattern was used so that they wouldn't break when stretched. The resulting smart shirt provides soft, wearable sensors for noninvasive and continuous electrocardiogram monitoring. With a few tweaks, apparel with these fibers could eventually be able to track other vital signs, according to the researchers.\n\nThough likely a ways off from going into production for consumers, the material could eventually help replace bulky EKG Holter monitors in medical settings and heart-rate monitoring watches and chest straps for athletes, in addition to other potential uses. \"You just don't find soft, flexible, threadlike materials that are comfortable to the touch, that you can work with, that you can build a bridge out of it or you can build a powerline out of it, but you can also run it through a sewing machine,\" said a member of the research team. \"Nothing else behaves like this.\"",
            prompt: "According to the text, what is one of the reasons for incorporating technology into apparel?",
            choices: [
              "To measure people's physical health",
              "To improve athletes' physical endurance",
              "To allow smart garments to be effectively packed",
              "To manipulate the wearer's performance and behaviors",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 To measure people's physical health คำถามข้อนี้ถามว่าเหตุผลหลักข้อหนึ่งของการผสานเทคโนโลยีต่าง ๆ ไว้ในเสื้อผ้าคืออะไร คำตอบที่ถูกต้องคือเพื่อวัดสุขภาพร่างกายของผู้สวมใส่",
          },
          {
            id: "f2-rea-63",
            type: "comprehension",
            passageTitle: "Reading Passage — Smart Garments and Carbon Nanotube Threads",
            passage:
              "Over the years, we have seen many examples of smart garments packed with technology to monitor different aspects of a wearer's physical wellbeing. Recently, Rice University researchers have developed a new material they say is as soft as cotton but as strong as Kevlar and as conductive as many metals. It can be worn and washed like normal clothing and could eventually turn athletic apparel into smart wearables.\n\nThe technology used is called carbon nanotube threads. These threads work in the same way as the wires in an electrocardiogram (EKG) monitoring device, which measures heart rhythms to detect heart conditions. But instead of having to be patched onto the skin, they can be sewn into a t-shirt and worn like normal athletic wear. Unlike wires, the threads can comfortably move with the wearer. They can also be washed, stretched, and worn repeatedly without breaking down.\n\nThe Rice University lab has previously developed carbon nanotube fibers and explored their potential in cochlear implants, flexible antennas, and repairing broken electrical circuits in the heart. ____________ For this latest iteration, the researchers used a rope-making device to bundle the filaments together. These bundles were then woven into a fiber. From there, the fibers could be sewn into fabric. A zig-zag pattern was used so that they wouldn't break when stretched. The resulting smart shirt provides soft, wearable sensors for noninvasive and continuous electrocardiogram monitoring. With a few tweaks, apparel with these fibers could eventually be able to track other vital signs, according to the researchers.\n\nThough likely a ways off from going into production for consumers, the material could eventually help replace bulky EKG Holter monitors in medical settings and heart-rate monitoring watches and chest straps for athletes, in addition to other potential uses. \"You just don't find soft, flexible, threadlike materials that are comfortable to the touch, that you can work with, that you can build a bridge out of it or you can build a powerline out of it, but you can also run it through a sewing machine,\" said a member of the research team. \"Nothing else behaves like this.\"",
            prompt: "To illustrate the strength of the newly developed material, the researchers ____________.",
            choices: [
              "compare it to Kevlar",
              "explain the use of a zig-zag pattern",
              "refer to their previous research on the material",
              "mention the incorporation of carbon nanotube threads",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 compare it to Kevlar คำถามข้อนี้ถามว่าทีมนักวิจัยแสดงถึงความแข็งแรงของวัสดุที่พัฒนาขึ้นใหม่นี้อย่างไร คำตอบคือ เปรียบเทียบกับ Kevlar ซึ่งเป็นเส้นใยสังเคราะห์ที่มีความแข็งแรงคงทน",
          },
          {
            id: "f2-rea-64",
            type: "comprehension",
            passageTitle: "Reading Passage — Smart Garments and Carbon Nanotube Threads",
            passage:
              "Over the years, we have seen many examples of smart garments packed with technology to monitor different aspects of a wearer's physical wellbeing. Recently, Rice University researchers have developed a new material they say is as soft as cotton but as strong as Kevlar and as conductive as many metals. It can be worn and washed like normal clothing and could eventually turn athletic apparel into smart wearables.\n\nThe technology used is called carbon nanotube threads. These threads work in the same way as the wires in an electrocardiogram (EKG) monitoring device, which measures heart rhythms to detect heart conditions. But instead of having to be patched onto the skin, they can be sewn into a t-shirt and worn like normal athletic wear. Unlike wires, the threads can comfortably move with the wearer. They can also be washed, stretched, and worn repeatedly without breaking down.\n\nThe Rice University lab has previously developed carbon nanotube fibers and explored their potential in cochlear implants, flexible antennas, and repairing broken electrical circuits in the heart. ____________ For this latest iteration, the researchers used a rope-making device to bundle the filaments together. These bundles were then woven into a fiber. From there, the fibers could be sewn into fabric. A zig-zag pattern was used so that they wouldn't break when stretched. The resulting smart shirt provides soft, wearable sensors for noninvasive and continuous electrocardiogram monitoring. With a few tweaks, apparel with these fibers could eventually be able to track other vital signs, according to the researchers.\n\nThough likely a ways off from going into production for consumers, the material could eventually help replace bulky EKG Holter monitors in medical settings and heart-rate monitoring watches and chest straps for athletes, in addition to other potential uses. \"You just don't find soft, flexible, threadlike materials that are comfortable to the touch, that you can work with, that you can build a bridge out of it or you can build a powerline out of it, but you can also run it through a sewing machine,\" said a member of the research team. \"Nothing else behaves like this.\"",
            prompt: "It can be INFERRED from Paragraph 2 (lines 7-12) that carbon nanotube threads ____________.",
            choices: [
              "must be in constant contact with the skin",
              "are less expensive than an electrocardiogram monitoring device",
              "can replace the wires in an electrocardiogram monitoring device",
              "can be used to detect cardiac problems by monitoring heart beats",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 4 can be used to detect cardiac problems by monitoring heart beats คำถามข้อนี้ถามว่าเราสามารถอนุมานเกี่ยวกับ carbon nanotube threads ได้อย่างไรจากเนื้อหาในย่อหน้าที่ 2 คำตอบคือ วัสดุดังกล่าวสามารถตรวจจับความผิดปกติของการทำงานของหัวใจได้ เพราะในเรื่องกล่าวว่าวัสดุนี้ทำงานแบบเดียวกันกับ wires ซึ่งอยู่ในเครื่อง EKG",
          },
          {
            id: "f2-rea-65",
            type: "comprehension",
            passageTitle: "Reading Passage — Smart Garments and Carbon Nanotube Threads",
            passage:
              "Over the years, we have seen many examples of smart garments packed with technology to monitor different aspects of a wearer's physical wellbeing. Recently, Rice University researchers have developed a new material they say is as soft as cotton but as strong as Kevlar and as conductive as many metals. It can be worn and washed like normal clothing and could eventually turn athletic apparel into smart wearables.\n\nThe technology used is called carbon nanotube threads. These threads work in the same way as the wires in an electrocardiogram (EKG) monitoring device, which measures heart rhythms to detect heart conditions. But instead of having to be patched onto the skin, they can be sewn into a t-shirt and worn like normal athletic wear. Unlike wires, the threads can comfortably move with the wearer. They can also be washed, stretched, and worn repeatedly without breaking down.\n\nThe Rice University lab has previously developed carbon nanotube fibers and explored their potential in cochlear implants, flexible antennas, and repairing broken electrical circuits in the heart. ____________ For this latest iteration, the researchers used a rope-making device to bundle the filaments together. These bundles were then woven into a fiber. From there, the fibers could be sewn into fabric. A zig-zag pattern was used so that they wouldn't break when stretched. The resulting smart shirt provides soft, wearable sensors for noninvasive and continuous electrocardiogram monitoring. With a few tweaks, apparel with these fibers could eventually be able to track other vital signs, according to the researchers.\n\nThough likely a ways off from going into production for consumers, the material could eventually help replace bulky EKG Holter monitors in medical settings and heart-rate monitoring watches and chest straps for athletes, in addition to other potential uses. \"You just don't find soft, flexible, threadlike materials that are comfortable to the touch, that you can work with, that you can build a bridge out of it or you can build a powerline out of it, but you can also run it through a sewing machine,\" said a member of the research team. \"Nothing else behaves like this.\"",
            prompt: "Which of the following is NOT a benefit of the new wearable sensors mentioned in the text?",
            choices: [
              "They are comfortable to wear.",
              "They can be easily mass produced.",
              "They can be used over and over again.",
              "Data on heart activity can continuously be gathered.",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 They can be easily mass produced. คำถามข้อนี้ถามว่าข้อใดไม่ใช่ข้อดีของ wearable sensors ที่กล่าวถึงในบทความนี้ คำตอบคือ การสามารถผลิตเป็นจำนวนมากได้ง่าย",
          },
          {
            id: "f2-rea-66",
            type: "comprehension",
            passageTitle: "Reading Passage — Smart Garments and Carbon Nanotube Threads",
            passage:
              "Over the years, we have seen many examples of smart garments packed with technology to monitor different aspects of a wearer's physical wellbeing. Recently, Rice University researchers have developed a new material they say is as soft as cotton but as strong as Kevlar and as conductive as many metals. It can be worn and washed like normal clothing and could eventually turn athletic apparel into smart wearables.\n\nThe technology used is called carbon nanotube threads. These threads work in the same way as the wires in an electrocardiogram (EKG) monitoring device, which measures heart rhythms to detect heart conditions. But instead of having to be patched onto the skin, they can be sewn into a t-shirt and worn like normal athletic wear. Unlike wires, the threads can comfortably move with the wearer. They can also be washed, stretched, and worn repeatedly without breaking down.\n\nThe Rice University lab has previously developed carbon nanotube fibers and explored their potential in cochlear implants, flexible antennas, and repairing broken electrical circuits in the heart. ____________ For this latest iteration, the researchers used a rope-making device to bundle the filaments together. These bundles were then woven into a fiber. From there, the fibers could be sewn into fabric. A zig-zag pattern was used so that they wouldn't break when stretched. The resulting smart shirt provides soft, wearable sensors for noninvasive and continuous electrocardiogram monitoring. With a few tweaks, apparel with these fibers could eventually be able to track other vital signs, according to the researchers.\n\nThough likely a ways off from going into production for consumers, the material could eventually help replace bulky EKG Holter monitors in medical settings and heart-rate monitoring watches and chest straps for athletes, in addition to other potential uses. \"You just don't find soft, flexible, threadlike materials that are comfortable to the touch, that you can work with, that you can build a bridge out of it or you can build a powerline out of it, but you can also run it through a sewing machine,\" said a member of the research team. \"Nothing else behaves like this.\"",
            prompt: "Which of the following statements BEST fits the blank in Paragraph 3 (line 15)?",
            choices: [
              "Worked into an athletic shirt, the fibers use their metal-like conductivity to act as integrated electrodes",
              "At the time, the original fibers were incredibly fine, so they could not be used with any current manufacturing equipment",
              "The team conducted experiments that compared the ability of its smart shirt to record live heart rate data to a typical chest-strap monitor",
              "The fibers use their metal-like conductivity to act as integrated electrodes and signal transmission wires, opening up some interesting potential uses",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 At the time, the original fibers were incredibly fine, so they could not be used with any current manufacturing equipment. คำถามข้อนี้ถามว่าประโยคใดเหมาะสมที่จะนำไปเติมช่องว่างในย่อหน้าที่ 3 มากที่สุด จะเห็นว่าเนื้อหาในตอนต้นของย่อหน้านี้พูดถึงงานวิจัยเพื่อพัฒนา carbon nanotube fibers ที่เกิดขึ้นก่อนหน้านี้ จากนั้นจึงอธิบายรายละเอียดเกี่ยวกับงานวิจัยใหม่ที่เกิดขึ้นเพื่อพัฒนา carbon nanotube fibers ให้สามารถนำมาใช้กับ sewing machine ได้ ดังนั้น เนื้อหาที่ขาดหายไปในย่อหน้าที่ 2 คือรายละเอียดเกี่ยวกับงานวิจัยก่อนหน้า ซึ่งระบุเกี่ยวกับปัญหาที่เส้นใยดังกล่าวไม่สามารถนำไปใช้กับ sewing machine ได้",
          },
          {
            id: "f2-rea-67",
            type: "comprehension",
            passageTitle: "Reading Passage — Smart Garments and Carbon Nanotube Threads",
            passage:
              "Over the years, we have seen many examples of smart garments packed with technology to monitor different aspects of a wearer's physical wellbeing. Recently, Rice University researchers have developed a new material they say is as soft as cotton but as strong as Kevlar and as conductive as many metals. It can be worn and washed like normal clothing and could eventually turn athletic apparel into smart wearables.\n\nThe technology used is called carbon nanotube threads. These threads work in the same way as the wires in an electrocardiogram (EKG) monitoring device, which measures heart rhythms to detect heart conditions. But instead of having to be patched onto the skin, they can be sewn into a t-shirt and worn like normal athletic wear. Unlike wires, the threads can comfortably move with the wearer. They can also be washed, stretched, and worn repeatedly without breaking down.\n\nThe Rice University lab has previously developed carbon nanotube fibers and explored their potential in cochlear implants, flexible antennas, and repairing broken electrical circuits in the heart. ____________ For this latest iteration, the researchers used a rope-making device to bundle the filaments together. These bundles were then woven into a fiber. From there, the fibers could be sewn into fabric. A zig-zag pattern was used so that they wouldn't break when stretched. The resulting smart shirt provides soft, wearable sensors for noninvasive and continuous electrocardiogram monitoring. With a few tweaks, apparel with these fibers could eventually be able to track other vital signs, according to the researchers.\n\nThough likely a ways off from going into production for consumers, the material could eventually help replace bulky EKG Holter monitors in medical settings and heart-rate monitoring watches and chest straps for athletes, in addition to other potential uses. \"You just don't find soft, flexible, threadlike materials that are comfortable to the touch, that you can work with, that you can build a bridge out of it or you can build a powerline out of it, but you can also run it through a sewing machine,\" said a member of the research team. \"Nothing else behaves like this.\"",
            prompt: "What does \"they\" (line 18) refer to?",
            choices: [
              "Fibers",
              "Wearers",
              "Researchers",
              "Electrical circuits",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 Fibers จากรายละเอียดในบทความ เส้นใย (fiber) จะถูกทอเป็นผืนผ้า (fabric) ลายซิกแซกเพื่อไม่ให้เส้นใยขาดง่ายตอนยืด",
          },
          {
            id: "f2-rea-68",
            type: "comprehension",
            passageTitle: "Reading Passage — Smart Garments and Carbon Nanotube Threads",
            passage:
              "Over the years, we have seen many examples of smart garments packed with technology to monitor different aspects of a wearer's physical wellbeing. Recently, Rice University researchers have developed a new material they say is as soft as cotton but as strong as Kevlar and as conductive as many metals. It can be worn and washed like normal clothing and could eventually turn athletic apparel into smart wearables.\n\nThe technology used is called carbon nanotube threads. These threads work in the same way as the wires in an electrocardiogram (EKG) monitoring device, which measures heart rhythms to detect heart conditions. But instead of having to be patched onto the skin, they can be sewn into a t-shirt and worn like normal athletic wear. Unlike wires, the threads can comfortably move with the wearer. They can also be washed, stretched, and worn repeatedly without breaking down.\n\nThe Rice University lab has previously developed carbon nanotube fibers and explored their potential in cochlear implants, flexible antennas, and repairing broken electrical circuits in the heart. ____________ For this latest iteration, the researchers used a rope-making device to bundle the filaments together. These bundles were then woven into a fiber. From there, the fibers could be sewn into fabric. A zig-zag pattern was used so that they wouldn't break when stretched. The resulting smart shirt provides soft, wearable sensors for noninvasive and continuous electrocardiogram monitoring. With a few tweaks, apparel with these fibers could eventually be able to track other vital signs, according to the researchers.\n\nThough likely a ways off from going into production for consumers, the material could eventually help replace bulky EKG Holter monitors in medical settings and heart-rate monitoring watches and chest straps for athletes, in addition to other potential uses. \"You just don't find soft, flexible, threadlike materials that are comfortable to the touch, that you can work with, that you can build a bridge out of it or you can build a powerline out of it, but you can also run it through a sewing machine,\" said a member of the research team. \"Nothing else behaves like this.\"",
            prompt: "With some modification, the researchers hope that garments using interwoven carbon nanotube fibers will be able to ____________.",
            choices: [
              "repair damaged hearts",
              "be tracked more easily",
              "detect important organs",
              "measure other vital signs",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 4 measure other vital signs คำถามข้อนี้ถามว่าทีมนักวิจัยคาดว่าเสื้อผ้าที่มีการถักทอเส้นใย carbon nanotube เข้าไปจะทำสิ่งใดได้เมื่อมีการปรับเปลี่ยนบางอย่าง คำตอบคือ เสื้อผ้าดังกล่าวจะสามารถวัดหรือตรวจจับสัญญาณเตือนหรือความผิดปกติที่สำคัญอื่น ๆ นอกเหนือจากการทำงานของหัวใจ",
          },
          {
            id: "f2-rea-69",
            type: "comprehension",
            passageTitle: "Reading Passage — Smart Garments and Carbon Nanotube Threads",
            passage:
              "Over the years, we have seen many examples of smart garments packed with technology to monitor different aspects of a wearer's physical wellbeing. Recently, Rice University researchers have developed a new material they say is as soft as cotton but as strong as Kevlar and as conductive as many metals. It can be worn and washed like normal clothing and could eventually turn athletic apparel into smart wearables.\n\nThe technology used is called carbon nanotube threads. These threads work in the same way as the wires in an electrocardiogram (EKG) monitoring device, which measures heart rhythms to detect heart conditions. But instead of having to be patched onto the skin, they can be sewn into a t-shirt and worn like normal athletic wear. Unlike wires, the threads can comfortably move with the wearer. They can also be washed, stretched, and worn repeatedly without breaking down.\n\nThe Rice University lab has previously developed carbon nanotube fibers and explored their potential in cochlear implants, flexible antennas, and repairing broken electrical circuits in the heart. ____________ For this latest iteration, the researchers used a rope-making device to bundle the filaments together. These bundles were then woven into a fiber. From there, the fibers could be sewn into fabric. A zig-zag pattern was used so that they wouldn't break when stretched. The resulting smart shirt provides soft, wearable sensors for noninvasive and continuous electrocardiogram monitoring. With a few tweaks, apparel with these fibers could eventually be able to track other vital signs, according to the researchers.\n\nThough likely a ways off from going into production for consumers, the material could eventually help replace bulky EKG Holter monitors in medical settings and heart-rate monitoring watches and chest straps for athletes, in addition to other potential uses. \"You just don't find soft, flexible, threadlike materials that are comfortable to the touch, that you can work with, that you can build a bridge out of it or you can build a powerline out of it, but you can also run it through a sewing machine,\" said a member of the research team. \"Nothing else behaves like this.\"",
            prompt: "The word \"bulky\" (line 24) is closest in meaning to ____________.",
            choices: [
              "large",
              "robust",
              "high-priced",
              "sophisticated",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 large คำถามข้อนี้ถามว่าคำว่า bulky ในย่อหน้าที่ 4 มีความหมายใกล้เคียงกับคำใดมากที่สุด คำว่า bulky ในที่นี้ใช้บรรยายลักษณะของเครื่อง EKG ว่ามีขนาดใหญ่เทอะทะ ดังนั้นคำที่มีความหมายใกล้เคียงที่สุดคือคำว่า large ซึ่งแปลว่ามีขนาดใหญ่",
          },
          {
            id: "f2-rea-70",
            type: "comprehension",
            passageTitle: "Reading Passage — Smart Garments and Carbon Nanotube Threads",
            passage:
              "Over the years, we have seen many examples of smart garments packed with technology to monitor different aspects of a wearer's physical wellbeing. Recently, Rice University researchers have developed a new material they say is as soft as cotton but as strong as Kevlar and as conductive as many metals. It can be worn and washed like normal clothing and could eventually turn athletic apparel into smart wearables.\n\nThe technology used is called carbon nanotube threads. These threads work in the same way as the wires in an electrocardiogram (EKG) monitoring device, which measures heart rhythms to detect heart conditions. But instead of having to be patched onto the skin, they can be sewn into a t-shirt and worn like normal athletic wear. Unlike wires, the threads can comfortably move with the wearer. They can also be washed, stretched, and worn repeatedly without breaking down.\n\nThe Rice University lab has previously developed carbon nanotube fibers and explored their potential in cochlear implants, flexible antennas, and repairing broken electrical circuits in the heart. ____________ For this latest iteration, the researchers used a rope-making device to bundle the filaments together. These bundles were then woven into a fiber. From there, the fibers could be sewn into fabric. A zig-zag pattern was used so that they wouldn't break when stretched. The resulting smart shirt provides soft, wearable sensors for noninvasive and continuous electrocardiogram monitoring. With a few tweaks, apparel with these fibers could eventually be able to track other vital signs, according to the researchers.\n\nThough likely a ways off from going into production for consumers, the material could eventually help replace bulky EKG Holter monitors in medical settings and heart-rate monitoring watches and chest straps for athletes, in addition to other potential uses. \"You just don't find soft, flexible, threadlike materials that are comfortable to the touch, that you can work with, that you can build a bridge out of it or you can build a powerline out of it, but you can also run it through a sewing machine,\" said a member of the research team. \"Nothing else behaves like this.\"",
            prompt: "Based on the text, what can be predicted about the new material in the future?",
            choices: [
              "It will change people's behaviors.",
              "It will play an important role in medical settings.",
              "Research will be conducted to explore uses in other areas.",
              "It will soon be commercially available to consumers for various purposes.",
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 3 Research will be conducted to explore uses in other areas. คำถามข้อนี้ถามว่าเราสามารถคาดการณ์เกี่ยวกับวัสดุชนิดใหม่นี้ได้อย่างไร จากเนื้อหาในย่อหน้าสุดท้ายเรายังไม่สามารถนำวัสดุนี้มาผลิตใช้งานสำหรับผู้บริโภคได้ในเร็ว ๆ นี้ ดังนั้น จึงคาดการณ์ได้ว่านักวิจัยจะทำการศึกษาเพิ่มเติมเพื่อหาวิธีนำวัสดุนี้ไปใช้งานด้านต่าง ๆ ในอนาคต",
          },
          {
            id: "f2-rea-71",
            type: "comprehension",
            passageTitle: "Reading Passage — Noise Pollution and Wildfires",
            passage:
              "Noise pollution and deadly wildfires could cause widespread damage to us and our planet, ____________, according to The Frontiers Report published by the UN Environment Programme (UNEP). The report identifies and offers solutions to two environmental issues that deserve attention and action from governments and the public at large.\n\nUnwanted, prolonged, and high-level sounds from road traffic, railways, or leisure activities, impair human health and well-being, according to the report. Chronic annoyance and sleep disturbance caused by traffic can result in severe heart disease and metabolic disorders among young people as well as the elderly. Noise pollution also threatens animals by altering the communication and behavior of various species, including birds, insects, and amphibians.\n\nThe report encourages urban planners to prioritize noise reduction by investing in urban infrastructure that creates positive soundscapes such as tree belts, green walls, and more green spaces in cities. London's Ultra-Low Emission Zone, Berlin's new cycle lanes on wide roads, and Egypt's national plan to combat noise, are positive examples that should be followed.\n\nWith respect to wildfires, the report states that in the past two decades, an average of 423 million hectares of the Earth's land surface has been burned annually. This is about the size of the European Union. The report also predicts that dangerous wildfires will likely become more frequent, intense, and longer lasting. Climate change can cause extreme wildfires and generate lightning that can ignite other fires far beyond the fire front. Long-term effects on human health and well-being extend beyond people who have fought wildfires, or those who have been evacuated and have lost homes. People with pre-existing illness, women, children, and the poor have also been impacted. At the same time, black carbon and other pollutants generated from wildfires can contaminate water sources, speed up glacier melt, and trigger landslides.\n\nTo address this, the report calls for greater investment in reducing wildfire risks, developing prevention measures, and improving remote sensing technologies, such as satellites and radar.",
            prompt: "What is the BEST title for the text?",
            choices: [
              "Wildlife Impacted by Noise Pollution and Wildfires",
              "Noise Pollution and Deadly Wildfires: The Unsolvable Problems",
              "Environmental Concerns Caused by Noise Pollution and Wildfires",
              "The Effects of Noise Pollution and Wildfires and How to Tackle Them",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 4 The Effects of Noise Pollution and Wildfires and How to Tackle Them ชื่อเรื่องที่เหมาะสมที่สุดสำหรับบทความนี้คือ \"ผลกระทบของมลพิษทางเสียงและไฟป่า และแนวทางการแก้ไขปัญหา\"",
          },
          {
            id: "f2-rea-72",
            type: "comprehension",
            passageTitle: "Reading Passage — Noise Pollution and Wildfires",
            passage:
              "Noise pollution and deadly wildfires could cause widespread damage to us and our planet, ____________, according to The Frontiers Report published by the UN Environment Programme (UNEP). The report identifies and offers solutions to two environmental issues that deserve attention and action from governments and the public at large.\n\nUnwanted, prolonged, and high-level sounds from road traffic, railways, or leisure activities, impair human health and well-being, according to the report. Chronic annoyance and sleep disturbance caused by traffic can result in severe heart disease and metabolic disorders among young people as well as the elderly. Noise pollution also threatens animals by altering the communication and behavior of various species, including birds, insects, and amphibians.\n\nThe report encourages urban planners to prioritize noise reduction by investing in urban infrastructure that creates positive soundscapes such as tree belts, green walls, and more green spaces in cities. London's Ultra-Low Emission Zone, Berlin's new cycle lanes on wide roads, and Egypt's national plan to combat noise, are positive examples that should be followed.\n\nWith respect to wildfires, the report states that in the past two decades, an average of 423 million hectares of the Earth's land surface has been burned annually. This is about the size of the European Union. The report also predicts that dangerous wildfires will likely become more frequent, intense, and longer lasting. Climate change can cause extreme wildfires and generate lightning that can ignite other fires far beyond the fire front. Long-term effects on human health and well-being extend beyond people who have fought wildfires, or those who have been evacuated and have lost homes. People with pre-existing illness, women, children, and the poor have also been impacted. At the same time, black carbon and other pollutants generated from wildfires can contaminate water sources, speed up glacier melt, and trigger landslides.\n\nTo address this, the report calls for greater investment in reducing wildfire risks, developing prevention measures, and improving remote sensing technologies, such as satellites and radar.",
            prompt: "Which of the following BEST fits the blank in Paragraph 1 (line 2)?",
            choices: [
              "in order for the problems to be prevented",
              "so these issues need to be urgently dealt with",
              "and they could adversely affect the oceans and marine animals",
              "but these are not as significant as other environmental problems",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 so these issues need to be urgently dealt with อนุประโยคที่เหมาะสมจะเติมลงในช่องว่างในย่อหน้าแรก (บรรทัดที่ 2) คือ \"ดังนั้น ปัญหาเหล่านี้จึงควรได้รับการแก้ไขอย่างเร่งด่วน\" เนื่องจากประโยคก่อนหน้าสอดคล้องกับอนุประโยคที่กล่าวว่า \"มลพิษทางเสียงและไฟป่าที่อันตรายสามารถสร้างความเสียหายในวงกว้าง\" โดยอนุประโยคทั้งสองมีความเชื่อมโยงเป็นเหตุและผลกัน",
          },
          {
            id: "f2-rea-73",
            type: "comprehension",
            passageTitle: "Reading Passage — Noise Pollution and Wildfires",
            passage:
              "Noise pollution and deadly wildfires could cause widespread damage to us and our planet, ____________, according to The Frontiers Report published by the UN Environment Programme (UNEP). The report identifies and offers solutions to two environmental issues that deserve attention and action from governments and the public at large.\n\nUnwanted, prolonged, and high-level sounds from road traffic, railways, or leisure activities, impair human health and well-being, according to the report. Chronic annoyance and sleep disturbance caused by traffic can result in severe heart disease and metabolic disorders among young people as well as the elderly. Noise pollution also threatens animals by altering the communication and behavior of various species, including birds, insects, and amphibians.\n\nThe report encourages urban planners to prioritize noise reduction by investing in urban infrastructure that creates positive soundscapes such as tree belts, green walls, and more green spaces in cities. London's Ultra-Low Emission Zone, Berlin's new cycle lanes on wide roads, and Egypt's national plan to combat noise, are positive examples that should be followed.\n\nWith respect to wildfires, the report states that in the past two decades, an average of 423 million hectares of the Earth's land surface has been burned annually. This is about the size of the European Union. The report also predicts that dangerous wildfires will likely become more frequent, intense, and longer lasting. Climate change can cause extreme wildfires and generate lightning that can ignite other fires far beyond the fire front. Long-term effects on human health and well-being extend beyond people who have fought wildfires, or those who have been evacuated and have lost homes. People with pre-existing illness, women, children, and the poor have also been impacted. At the same time, black carbon and other pollutants generated from wildfires can contaminate water sources, speed up glacier melt, and trigger landslides.\n\nTo address this, the report calls for greater investment in reducing wildfire risks, developing prevention measures, and improving remote sensing technologies, such as satellites and radar.",
            prompt: "What is the word \"impair\" (line 7) is closest in meaning to?",
            choices: [
              "Risk",
              "Harm",
              "Exhaust",
              "Decrease",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 Harm คำว่า \"impair\" ในบรรทัดที่ 7 แปลว่า ทำให้แย่ลง จึงมีความหมายใกล้เคียงกับข้อ 2 \"Harm\" (ทำให้อ่อนแอลง) มากที่สุด",
          },
          {
            id: "f2-rea-74",
            type: "comprehension",
            passageTitle: "Reading Passage — Noise Pollution and Wildfires",
            passage:
              "Noise pollution and deadly wildfires could cause widespread damage to us and our planet, ____________, according to The Frontiers Report published by the UN Environment Programme (UNEP). The report identifies and offers solutions to two environmental issues that deserve attention and action from governments and the public at large.\n\nUnwanted, prolonged, and high-level sounds from road traffic, railways, or leisure activities, impair human health and well-being, according to the report. Chronic annoyance and sleep disturbance caused by traffic can result in severe heart disease and metabolic disorders among young people as well as the elderly. Noise pollution also threatens animals by altering the communication and behavior of various species, including birds, insects, and amphibians.\n\nThe report encourages urban planners to prioritize noise reduction by investing in urban infrastructure that creates positive soundscapes such as tree belts, green walls, and more green spaces in cities. London's Ultra-Low Emission Zone, Berlin's new cycle lanes on wide roads, and Egypt's national plan to combat noise, are positive examples that should be followed.\n\nWith respect to wildfires, the report states that in the past two decades, an average of 423 million hectares of the Earth's land surface has been burned annually. This is about the size of the European Union. The report also predicts that dangerous wildfires will likely become more frequent, intense, and longer lasting. Climate change can cause extreme wildfires and generate lightning that can ignite other fires far beyond the fire front. Long-term effects on human health and well-being extend beyond people who have fought wildfires, or those who have been evacuated and have lost homes. People with pre-existing illness, women, children, and the poor have also been impacted. At the same time, black carbon and other pollutants generated from wildfires can contaminate water sources, speed up glacier melt, and trigger landslides.\n\nTo address this, the report calls for greater investment in reducing wildfire risks, developing prevention measures, and improving remote sensing technologies, such as satellites and radar.",
            prompt: "Which of the following is NOT mentioned as an effect of noise pollution on humans or animals?",
            choices: [
              "Irritability",
              "Aggressive behavior",
              "Problems with sleep",
              "Communication issues",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 Aggressive behavior ย่อหน้าที่ 2 ของบทความนี้กล่าวถึงผลกระทบของมลพิษทางเสียงที่มีต่อมนุษย์และสัตว์ ได้แก่ \"ความรู้สึกหงุดหงิดรำคาญต่อเนื่องยาวนาน\" (chronic annoyance) \"การรบกวนการนอน\" (sleep disturbance) และ \"การเปลี่ยนแปลงการสื่อสารของสัตว์\" (altering the communication) แต่ไม่ได้กล่าวถึง \"การแสดงพฤติกรรมก้าวร้าว\" (behaving aggressively) ดังนั้นข้อ 2 จึงเป็นคำตอบที่ถูกต้อง",
          },
          {
            id: "f2-rea-75",
            type: "comprehension",
            passageTitle: "Reading Passage — Noise Pollution and Wildfires",
            passage:
              "Noise pollution and deadly wildfires could cause widespread damage to us and our planet, ____________, according to The Frontiers Report published by the UN Environment Programme (UNEP). The report identifies and offers solutions to two environmental issues that deserve attention and action from governments and the public at large.\n\nUnwanted, prolonged, and high-level sounds from road traffic, railways, or leisure activities, impair human health and well-being, according to the report. Chronic annoyance and sleep disturbance caused by traffic can result in severe heart disease and metabolic disorders among young people as well as the elderly. Noise pollution also threatens animals by altering the communication and behavior of various species, including birds, insects, and amphibians.\n\nThe report encourages urban planners to prioritize noise reduction by investing in urban infrastructure that creates positive soundscapes such as tree belts, green walls, and more green spaces in cities. London's Ultra-Low Emission Zone, Berlin's new cycle lanes on wide roads, and Egypt's national plan to combat noise, are positive examples that should be followed.\n\nWith respect to wildfires, the report states that in the past two decades, an average of 423 million hectares of the Earth's land surface has been burned annually. This is about the size of the European Union. The report also predicts that dangerous wildfires will likely become more frequent, intense, and longer lasting. Climate change can cause extreme wildfires and generate lightning that can ignite other fires far beyond the fire front. Long-term effects on human health and well-being extend beyond people who have fought wildfires, or those who have been evacuated and have lost homes. People with pre-existing illness, women, children, and the poor have also been impacted. At the same time, black carbon and other pollutants generated from wildfires can contaminate water sources, speed up glacier melt, and trigger landslides.\n\nTo address this, the report calls for greater investment in reducing wildfire risks, developing prevention measures, and improving remote sensing technologies, such as satellites and radar.",
            prompt: "It is suggested in Paragraph 3 (lines 13-17) that trees ____________.",
            choices: [
              "can help beautify landscapes",
              "are capable of blocking noise",
              "increase noise levels in the city",
              "are the least effective in noise control",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 are capable of blocking noise ย่อหน้าที่ 3 กล่าวถึง The Frontiers Report ที่สนับสนุนให้สร้างโครงสร้างพื้นฐานต่าง ๆ เช่น กำแพงต้นไม้และเพิ่มพื้นที่สีเขียวให้มากขึ้นเพื่อช่วยลดเสียง ดังนั้น จึงอาจสรุปได้ว่าต้นไม้ช่วยกันเสียงได้",
          },
          {
            id: "f2-rea-76",
            type: "comprehension",
            passageTitle: "Reading Passage — Noise Pollution and Wildfires",
            passage:
              "Noise pollution and deadly wildfires could cause widespread damage to us and our planet, ____________, according to The Frontiers Report published by the UN Environment Programme (UNEP). The report identifies and offers solutions to two environmental issues that deserve attention and action from governments and the public at large.\n\nUnwanted, prolonged, and high-level sounds from road traffic, railways, or leisure activities, impair human health and well-being, according to the report. Chronic annoyance and sleep disturbance caused by traffic can result in severe heart disease and metabolic disorders among young people as well as the elderly. Noise pollution also threatens animals by altering the communication and behavior of various species, including birds, insects, and amphibians.\n\nThe report encourages urban planners to prioritize noise reduction by investing in urban infrastructure that creates positive soundscapes such as tree belts, green walls, and more green spaces in cities. London's Ultra-Low Emission Zone, Berlin's new cycle lanes on wide roads, and Egypt's national plan to combat noise, are positive examples that should be followed.\n\nWith respect to wildfires, the report states that in the past two decades, an average of 423 million hectares of the Earth's land surface has been burned annually. This is about the size of the European Union. The report also predicts that dangerous wildfires will likely become more frequent, intense, and longer lasting. Climate change can cause extreme wildfires and generate lightning that can ignite other fires far beyond the fire front. Long-term effects on human health and well-being extend beyond people who have fought wildfires, or those who have been evacuated and have lost homes. People with pre-existing illness, women, children, and the poor have also been impacted. At the same time, black carbon and other pollutants generated from wildfires can contaminate water sources, speed up glacier melt, and trigger landslides.\n\nTo address this, the report calls for greater investment in reducing wildfire risks, developing prevention measures, and improving remote sensing technologies, such as satellites and radar.",
            prompt: "What does the word \"This\" (line 20) refer to?",
            choices: [
              "The burned area",
              "The average wildfire",
              "The Earth's land surface",
              "The occurrence of wildfires",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 The burned area คำสรรพนาม \"this\" ในบรรทัดที่ 20 กล่าวถึง \"พื้นที่ที่ถูกไฟป่าเผาทำลาย\" (the burned area) ในช่วงหลายทศวรรษที่ผ่านมา ซึ่งกินพื้นที่มากถึง 423 ล้านเฮกตาร์ เทียบได้กับขนาดของสหภาพยุโรป",
          },
          {
            id: "f2-rea-77",
            type: "comprehension",
            passageTitle: "Reading Passage — Noise Pollution and Wildfires",
            passage:
              "Noise pollution and deadly wildfires could cause widespread damage to us and our planet, ____________, according to The Frontiers Report published by the UN Environment Programme (UNEP). The report identifies and offers solutions to two environmental issues that deserve attention and action from governments and the public at large.\n\nUnwanted, prolonged, and high-level sounds from road traffic, railways, or leisure activities, impair human health and well-being, according to the report. Chronic annoyance and sleep disturbance caused by traffic can result in severe heart disease and metabolic disorders among young people as well as the elderly. Noise pollution also threatens animals by altering the communication and behavior of various species, including birds, insects, and amphibians.\n\nThe report encourages urban planners to prioritize noise reduction by investing in urban infrastructure that creates positive soundscapes such as tree belts, green walls, and more green spaces in cities. London's Ultra-Low Emission Zone, Berlin's new cycle lanes on wide roads, and Egypt's national plan to combat noise, are positive examples that should be followed.\n\nWith respect to wildfires, the report states that in the past two decades, an average of 423 million hectares of the Earth's land surface has been burned annually. This is about the size of the European Union. The report also predicts that dangerous wildfires will likely become more frequent, intense, and longer lasting. Climate change can cause extreme wildfires and generate lightning that can ignite other fires far beyond the fire front. Long-term effects on human health and well-being extend beyond people who have fought wildfires, or those who have been evacuated and have lost homes. People with pre-existing illness, women, children, and the poor have also been impacted. At the same time, black carbon and other pollutants generated from wildfires can contaminate water sources, speed up glacier melt, and trigger landslides.\n\nTo address this, the report calls for greater investment in reducing wildfire risks, developing prevention measures, and improving remote sensing technologies, such as satellites and radar.",
            prompt: "Between Paragraph 4 (lines 18-28) and the last paragraph (lines 29-31), the focus shifts from ____________.",
            choices: [
              "research on wildfires to its environmental implications",
              "effects of wildfires to solutions to the growing problem",
              "social impacts of wildfires to the effects of forestation on wildfires",
              "the global wildfire statistics to campaigns to raise environmental awareness",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 effects of wildfires to solutions to the growing problem ย่อหน้าที่ 4 ของบทความนี้พูดถึงผลกระทบของไฟป่าก่อนที่จะเปลี่ยนมาพูดถึงแนวทางการแก้ไขปัญหาในย่อหน้าสุดท้าย",
          },
          {
            id: "f2-rea-78",
            type: "comprehension",
            passageTitle: "Reading Passage — Noise Pollution and Wildfires",
            passage:
              "Noise pollution and deadly wildfires could cause widespread damage to us and our planet, ____________, according to The Frontiers Report published by the UN Environment Programme (UNEP). The report identifies and offers solutions to two environmental issues that deserve attention and action from governments and the public at large.\n\nUnwanted, prolonged, and high-level sounds from road traffic, railways, or leisure activities, impair human health and well-being, according to the report. Chronic annoyance and sleep disturbance caused by traffic can result in severe heart disease and metabolic disorders among young people as well as the elderly. Noise pollution also threatens animals by altering the communication and behavior of various species, including birds, insects, and amphibians.\n\nThe report encourages urban planners to prioritize noise reduction by investing in urban infrastructure that creates positive soundscapes such as tree belts, green walls, and more green spaces in cities. London's Ultra-Low Emission Zone, Berlin's new cycle lanes on wide roads, and Egypt's national plan to combat noise, are positive examples that should be followed.\n\nWith respect to wildfires, the report states that in the past two decades, an average of 423 million hectares of the Earth's land surface has been burned annually. This is about the size of the European Union. The report also predicts that dangerous wildfires will likely become more frequent, intense, and longer lasting. Climate change can cause extreme wildfires and generate lightning that can ignite other fires far beyond the fire front. Long-term effects on human health and well-being extend beyond people who have fought wildfires, or those who have been evacuated and have lost homes. People with pre-existing illness, women, children, and the poor have also been impacted. At the same time, black carbon and other pollutants generated from wildfires can contaminate water sources, speed up glacier melt, and trigger landslides.\n\nTo address this, the report calls for greater investment in reducing wildfire risks, developing prevention measures, and improving remote sensing technologies, such as satellites and radar.",
            prompt: "The final sentence of Paragraph 4 (lines 18-28) suggests which of the following?",
            choices: [
              "Wildfires are the main culprit of climate change.",
              "Wildfires pose greater harm to the environment than health risks.",
              "Pollutants generated from wildfires can cause serious noise pollution.",
              "Wildfire impact could contribute to environmental degradation in various ways.",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 4 Wildfire impact could contribute to environmental degradation in various ways. ประโยคสุดท้ายในย่อหน้าที่ 4 ชี้ว่าผลกระทบที่เกิดจากไฟป่าอาจสร้างความเสียหายแก่สิ่งแวดล้อมในหลายด้าน",
          },
          {
            id: "f2-rea-79",
            type: "comprehension",
            passageTitle: "Reading Passage — Noise Pollution and Wildfires",
            passage:
              "Noise pollution and deadly wildfires could cause widespread damage to us and our planet, ____________, according to The Frontiers Report published by the UN Environment Programme (UNEP). The report identifies and offers solutions to two environmental issues that deserve attention and action from governments and the public at large.\n\nUnwanted, prolonged, and high-level sounds from road traffic, railways, or leisure activities, impair human health and well-being, according to the report. Chronic annoyance and sleep disturbance caused by traffic can result in severe heart disease and metabolic disorders among young people as well as the elderly. Noise pollution also threatens animals by altering the communication and behavior of various species, including birds, insects, and amphibians.\n\nThe report encourages urban planners to prioritize noise reduction by investing in urban infrastructure that creates positive soundscapes such as tree belts, green walls, and more green spaces in cities. London's Ultra-Low Emission Zone, Berlin's new cycle lanes on wide roads, and Egypt's national plan to combat noise, are positive examples that should be followed.\n\nWith respect to wildfires, the report states that in the past two decades, an average of 423 million hectares of the Earth's land surface has been burned annually. This is about the size of the European Union. The report also predicts that dangerous wildfires will likely become more frequent, intense, and longer lasting. Climate change can cause extreme wildfires and generate lightning that can ignite other fires far beyond the fire front. Long-term effects on human health and well-being extend beyond people who have fought wildfires, or those who have been evacuated and have lost homes. People with pre-existing illness, women, children, and the poor have also been impacted. At the same time, black carbon and other pollutants generated from wildfires can contaminate water sources, speed up glacier melt, and trigger landslides.\n\nTo address this, the report calls for greater investment in reducing wildfire risks, developing prevention measures, and improving remote sensing technologies, such as satellites and radar.",
            prompt: "All of the following are mentioned as potential solutions to the wildfire problem EXCEPT ____________.",
            choices: [
              "minimizing wildfire hazards",
              "devising plans to prevent wildfires",
              "improving wildfire detection and monitoring tools",
              "mobilizing funds from the public to combat wildfires",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 4 mobilizing funds from the public to combat wildfires คำถามถามว่าทุกข้อเป็นแนวทางในการแก้ปัญหาไฟป่ายกเว้นข้อใด คำตอบคือ \"การระดมทุนจากภาคเอกชนเพื่อมาต่อสู้กับไฟป่า\" แม้ว่าย่อหน้าสุดท้ายจะพูดถึงการลงทุนกับปัญหานี้ให้มากขึ้น (greater investment) แต่ไม่ได้ระบุว่าต้องเป็นเงินทุนจากภาคเอกชน",
          },
          {
            id: "f2-rea-80",
            type: "comprehension",
            passageTitle: "Reading Passage — Noise Pollution and Wildfires",
            passage:
              "Noise pollution and deadly wildfires could cause widespread damage to us and our planet, ____________, according to The Frontiers Report published by the UN Environment Programme (UNEP). The report identifies and offers solutions to two environmental issues that deserve attention and action from governments and the public at large.\n\nUnwanted, prolonged, and high-level sounds from road traffic, railways, or leisure activities, impair human health and well-being, according to the report. Chronic annoyance and sleep disturbance caused by traffic can result in severe heart disease and metabolic disorders among young people as well as the elderly. Noise pollution also threatens animals by altering the communication and behavior of various species, including birds, insects, and amphibians.\n\nThe report encourages urban planners to prioritize noise reduction by investing in urban infrastructure that creates positive soundscapes such as tree belts, green walls, and more green spaces in cities. London's Ultra-Low Emission Zone, Berlin's new cycle lanes on wide roads, and Egypt's national plan to combat noise, are positive examples that should be followed.\n\nWith respect to wildfires, the report states that in the past two decades, an average of 423 million hectares of the Earth's land surface has been burned annually. This is about the size of the European Union. The report also predicts that dangerous wildfires will likely become more frequent, intense, and longer lasting. Climate change can cause extreme wildfires and generate lightning that can ignite other fires far beyond the fire front. Long-term effects on human health and well-being extend beyond people who have fought wildfires, or those who have been evacuated and have lost homes. People with pre-existing illness, women, children, and the poor have also been impacted. At the same time, black carbon and other pollutants generated from wildfires can contaminate water sources, speed up glacier melt, and trigger landslides.\n\nTo address this, the report calls for greater investment in reducing wildfire risks, developing prevention measures, and improving remote sensing technologies, such as satellites and radar.",
            prompt: "This text is most likely found in ____________.",
            choices: [
              "an environmental journal",
              "a consumer complaint site",
              "a government public records site",
              "a brochure published by a fire department",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 an environmental journal บทความนี้น่าจะปรากฏในวารสารด้านสิ่งแวดล้อม เนื่องจากบทความนี้กล่าวถึงผลกระทบของปัญหาสิ่งแวดล้อมต่อมนุษย์และธรรมชาติ ตลอดจนเสนอแนวทางการแก้ไขปัญหา",
          },
          {
            id: "f2-rea-81",
            type: "comprehension",
            passageTitle: "Reading Passage — Machu Picchu",
            passage:
              "In 1911, Yale archeologist Hiram Bingham and his team set out to find the lost city of Vilcabamba but would soon find themselves led to one of the most fascinating places the world had never known. On their expedition, the team stumbled upon a local farmer who told them about the old mountain ruins known as Machu Picchu—this would soon prove to be the Lost City of the Incas.\n\nEven with today's technology, scientists are baffled as to how the Incas built this city without steel, mortar, or wheels. The stones were cut so precisely and wedged so closely together that a credit card cannot be inserted between them. Although Machu Picchu was built on an earthquake-prone area, its 500 stone buildings are still standing today. When an earthquake occurs, the stones are said to \"dance;\" that is, they bounce through the tremors and then fall back into place. Without this building method, many famous buildings at Machu Picchu would have collapsed long ago.\n\n____________. Due to its proximity to Cusco, some archeologists presume Machu Picchu was a retreat for nobles from the demands of city life. Others argue this place might have been used for more practical purposes, such as for crop testing, trading, or even possibly a prison. Even so, archeologists have projected that Machu Picchu was only able to hold 750 people, and only 200 skeletons were found there. This low population number—paired with religious buildings on the site—leads researchers to believe today that its sole purpose was for spiritual and religious ceremonies.\n\nA trip to Machu Picchu is many things, but cheap is not one of them. Train tickets from Cusco can run approximately a hundred dollars each, and admission charges range from $120 to $150. Besides, a bus trip up and down the mountain costs another $50. If you do not mind a workout, however, you can walk up and down for free. The climb takes about 90 minutes and may be strenuous, yet the steep path offers extraordinary views of the Machu Picchu Historical Sanctuary, which looks almost as it did in Bingham's time.",
            prompt: "What would be the most appropriate title of the text?",
            choices: [
              "Machu Picchu and Its Dancing Stones",
              "Hiram Bingham: The Greatest Archeologist",
              "The Architectural Heritage of the Inca Empire",
              "A Trip to the Historic Sanctuary of Machu Picchu",
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 3 The Architectural Heritage of the Inca Empire คำถามข้อนี้ถามว่าข้อใดน่าจะเป็นชื่อที่เหมาะสมที่สุดของบทความนี้ คำตอบที่ถูกต้องคือตัวเลือกข้อที่ 3 เนื่องจากบทความนี้เกี่ยวกับ Machu Picchu ที่สร้างขึ้นด้วยความรู้ด้านสถาปัตยกรรมของชาว Incas คำตอบข้อนี้จึงครอบคลุมเนื้อหาสำคัญของบทความได้อย่างครบถ้วน",
          },
          {
            id: "f2-rea-82",
            type: "comprehension",
            passageTitle: "Reading Passage — Machu Picchu",
            passage:
              "In 1911, Yale archeologist Hiram Bingham and his team set out to find the lost city of Vilcabamba but would soon find themselves led to one of the most fascinating places the world had never known. On their expedition, the team stumbled upon a local farmer who told them about the old mountain ruins known as Machu Picchu—this would soon prove to be the Lost City of the Incas.\n\nEven with today's technology, scientists are baffled as to how the Incas built this city without steel, mortar, or wheels. The stones were cut so precisely and wedged so closely together that a credit card cannot be inserted between them. Although Machu Picchu was built on an earthquake-prone area, its 500 stone buildings are still standing today. When an earthquake occurs, the stones are said to \"dance;\" that is, they bounce through the tremors and then fall back into place. Without this building method, many famous buildings at Machu Picchu would have collapsed long ago.\n\n____________. Due to its proximity to Cusco, some archeologists presume Machu Picchu was a retreat for nobles from the demands of city life. Others argue this place might have been used for more practical purposes, such as for crop testing, trading, or even possibly a prison. Even so, archeologists have projected that Machu Picchu was only able to hold 750 people, and only 200 skeletons were found there. This low population number—paired with religious buildings on the site—leads researchers to believe today that its sole purpose was for spiritual and religious ceremonies.\n\nA trip to Machu Picchu is many things, but cheap is not one of them. Train tickets from Cusco can run approximately a hundred dollars each, and admission charges range from $120 to $150. Besides, a bus trip up and down the mountain costs another $50. If you do not mind a workout, however, you can walk up and down for free. The climb takes about 90 minutes and may be strenuous, yet the steep path offers extraordinary views of the Machu Picchu Historical Sanctuary, which looks almost as it did in Bingham's time.",
            prompt: "The word \"baffled\" (line 6) is closest in meaning to ____________.",
            choices: [
              "puzzled",
              "annoyed",
              "frightened",
              "disappointed",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 puzzled คำถามข้อนี้ถามว่าคำว่า baffled ในบรรทัดที่ 6 มีความหมายใกล้เคียงกับคำใดมากที่สุด คำตอบที่ถูกต้องคือตัวเลือกข้อที่ 1 ซึ่งแปลว่า รู้สึกสับสนหรือไม่เข้าใจ เช่นเดียวกับคำว่า baffled",
          },
          {
            id: "f2-rea-83",
            type: "comprehension",
            passageTitle: "Reading Passage — Machu Picchu",
            passage:
              "In 1911, Yale archeologist Hiram Bingham and his team set out to find the lost city of Vilcabamba but would soon find themselves led to one of the most fascinating places the world had never known. On their expedition, the team stumbled upon a local farmer who told them about the old mountain ruins known as Machu Picchu—this would soon prove to be the Lost City of the Incas.\n\nEven with today's technology, scientists are baffled as to how the Incas built this city without steel, mortar, or wheels. The stones were cut so precisely and wedged so closely together that a credit card cannot be inserted between them. Although Machu Picchu was built on an earthquake-prone area, its 500 stone buildings are still standing today. When an earthquake occurs, the stones are said to \"dance;\" that is, they bounce through the tremors and then fall back into place. Without this building method, many famous buildings at Machu Picchu would have collapsed long ago.\n\n____________. Due to its proximity to Cusco, some archeologists presume Machu Picchu was a retreat for nobles from the demands of city life. Others argue this place might have been used for more practical purposes, such as for crop testing, trading, or even possibly a prison. Even so, archeologists have projected that Machu Picchu was only able to hold 750 people, and only 200 skeletons were found there. This low population number—paired with religious buildings on the site—leads researchers to believe today that its sole purpose was for spiritual and religious ceremonies.\n\nA trip to Machu Picchu is many things, but cheap is not one of them. Train tickets from Cusco can run approximately a hundred dollars each, and admission charges range from $120 to $150. Besides, a bus trip up and down the mountain costs another $50. If you do not mind a workout, however, you can walk up and down for free. The climb takes about 90 minutes and may be strenuous, yet the steep path offers extraordinary views of the Machu Picchu Historical Sanctuary, which looks almost as it did in Bingham's time.",
            prompt: "Which of the following sentences could BEST fit the blank in Paragraph 3 (line 14)?",
            choices: [
              "Machu Picchu served many purposes during the Inca reign",
              "Much has been debated about the exact function of Machu Picchu",
              "Scholars have tried to study the way of life of the people living in Machu Picchu",
              "Studies reveal that Machu Picchu was inhabited by only a small number of people",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 Much has been debated about the exact function of Machu Picchu คำถามข้อนี้ถามว่าประโยคใดเหมาะสมที่จะเติมลงในช่องว่างในย่อหน้าที่ 3 มากที่สุด คำตอบที่ถูกต้องคือข้อ 2 เนื่องจากมีใจความที่สอดคล้องกับประโยคอื่น ๆ ในย่อหน้าเดียวกันที่กล่าวถึงการโต้แย้งของผู้ที่ศึกษาเกี่ยวกับวัตถุประสงค์ในการสร้าง Machu Picchu",
          },
          {
            id: "f2-rea-84",
            type: "comprehension",
            passageTitle: "Reading Passage — Machu Picchu",
            passage:
              "In 1911, Yale archeologist Hiram Bingham and his team set out to find the lost city of Vilcabamba but would soon find themselves led to one of the most fascinating places the world had never known. On their expedition, the team stumbled upon a local farmer who told them about the old mountain ruins known as Machu Picchu—this would soon prove to be the Lost City of the Incas.\n\nEven with today's technology, scientists are baffled as to how the Incas built this city without steel, mortar, or wheels. The stones were cut so precisely and wedged so closely together that a credit card cannot be inserted between them. Although Machu Picchu was built on an earthquake-prone area, its 500 stone buildings are still standing today. When an earthquake occurs, the stones are said to \"dance;\" that is, they bounce through the tremors and then fall back into place. Without this building method, many famous buildings at Machu Picchu would have collapsed long ago.\n\n____________. Due to its proximity to Cusco, some archeologists presume Machu Picchu was a retreat for nobles from the demands of city life. Others argue this place might have been used for more practical purposes, such as for crop testing, trading, or even possibly a prison. Even so, archeologists have projected that Machu Picchu was only able to hold 750 people, and only 200 skeletons were found there. This low population number—paired with religious buildings on the site—leads researchers to believe today that its sole purpose was for spiritual and religious ceremonies.\n\nA trip to Machu Picchu is many things, but cheap is not one of them. Train tickets from Cusco can run approximately a hundred dollars each, and admission charges range from $120 to $150. Besides, a bus trip up and down the mountain costs another $50. If you do not mind a workout, however, you can walk up and down for free. The climb takes about 90 minutes and may be strenuous, yet the steep path offers extraordinary views of the Machu Picchu Historical Sanctuary, which looks almost as it did in Bingham's time.",
            prompt: "All of the following are mentioned as possible reasons for the construction of Machu Picchu EXCEPT ____________.",
            choices: [
              "security",
              "business",
              "recreation",
              "agriculture",
            ],
            answer: 0,
            explanation: "คำตอบที่ถูกต้องคือ 1 security คำถามข้อนี้ถามว่า Machu Picchu สร้างขึ้นด้วยเหตุผลต่อไปนี้ยกเว้นข้อใด คำตอบที่ถูกต้องคือข้อ 1 เนื่องจากเหตุผลต่าง ๆ ที่กล่าวถึงในย่อหน้านี้ไม่มีเหตุผลด้านความมั่นคง (business = trading / recreation = retreat / agriculture = crop testing)",
          },
          {
            id: "f2-rea-85",
            type: "comprehension",
            passageTitle: "Reading Passage — Machu Picchu",
            passage:
              "In 1911, Yale archeologist Hiram Bingham and his team set out to find the lost city of Vilcabamba but would soon find themselves led to one of the most fascinating places the world had never known. On their expedition, the team stumbled upon a local farmer who told them about the old mountain ruins known as Machu Picchu—this would soon prove to be the Lost City of the Incas.\n\nEven with today's technology, scientists are baffled as to how the Incas built this city without steel, mortar, or wheels. The stones were cut so precisely and wedged so closely together that a credit card cannot be inserted between them. Although Machu Picchu was built on an earthquake-prone area, its 500 stone buildings are still standing today. When an earthquake occurs, the stones are said to \"dance;\" that is, they bounce through the tremors and then fall back into place. Without this building method, many famous buildings at Machu Picchu would have collapsed long ago.\n\n____________. Due to its proximity to Cusco, some archeologists presume Machu Picchu was a retreat for nobles from the demands of city life. Others argue this place might have been used for more practical purposes, such as for crop testing, trading, or even possibly a prison. Even so, archeologists have projected that Machu Picchu was only able to hold 750 people, and only 200 skeletons were found there. This low population number—paired with religious buildings on the site—leads researchers to believe today that its sole purpose was for spiritual and religious ceremonies.\n\nA trip to Machu Picchu is many things, but cheap is not one of them. Train tickets from Cusco can run approximately a hundred dollars each, and admission charges range from $120 to $150. Besides, a bus trip up and down the mountain costs another $50. If you do not mind a workout, however, you can walk up and down for free. The climb takes about 90 minutes and may be strenuous, yet the steep path offers extraordinary views of the Machu Picchu Historical Sanctuary, which looks almost as it did in Bingham's time.",
            prompt: "What is the most expensive part of the journey for a tourist to travel to Machu Picchu from Cusco?",
            choices: [
              "Bus fares",
              "Entry fees",
              "Train tickets",
              "Trekking permit charges",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 Entry fees คำถามข้อนี้ถามว่าค่าใช้จ่ายส่วนใดแพงที่สุดสำหรับนักท่องเที่ยวที่จะเดินทางไป Machu Picchu จาก Cusco คำตอบที่ถูกต้องคือข้อ 2 เพราะจากเนื้อหาของบทความ ค่าเข้าชม (admission charges) มีราคาสูงที่สุด (ประมาณ $120 ถึง $150)",
          },
          {
            id: "f2-rea-86",
            type: "comprehension",
            passageTitle: "Reading Passage — Machu Picchu",
            passage:
              "In 1911, Yale archeologist Hiram Bingham and his team set out to find the lost city of Vilcabamba but would soon find themselves led to one of the most fascinating places the world had never known. On their expedition, the team stumbled upon a local farmer who told them about the old mountain ruins known as Machu Picchu—this would soon prove to be the Lost City of the Incas.\n\nEven with today's technology, scientists are baffled as to how the Incas built this city without steel, mortar, or wheels. The stones were cut so precisely and wedged so closely together that a credit card cannot be inserted between them. Although Machu Picchu was built on an earthquake-prone area, its 500 stone buildings are still standing today. When an earthquake occurs, the stones are said to \"dance;\" that is, they bounce through the tremors and then fall back into place. Without this building method, many famous buildings at Machu Picchu would have collapsed long ago.\n\n____________. Due to its proximity to Cusco, some archeologists presume Machu Picchu was a retreat for nobles from the demands of city life. Others argue this place might have been used for more practical purposes, such as for crop testing, trading, or even possibly a prison. Even so, archeologists have projected that Machu Picchu was only able to hold 750 people, and only 200 skeletons were found there. This low population number—paired with religious buildings on the site—leads researchers to believe today that its sole purpose was for spiritual and religious ceremonies.\n\nA trip to Machu Picchu is many things, but cheap is not one of them. Train tickets from Cusco can run approximately a hundred dollars each, and admission charges range from $120 to $150. Besides, a bus trip up and down the mountain costs another $50. If you do not mind a workout, however, you can walk up and down for free. The climb takes about 90 minutes and may be strenuous, yet the steep path offers extraordinary views of the Machu Picchu Historical Sanctuary, which looks almost as it did in Bingham's time.",
            prompt: "According to the text, Machu Picchu ____________.",
            choices: [
              "was built in 1911",
              "was designed to endure the sudden ground shaking",
              "is extremely strong because it was reinforced with steel",
              "is located so high on the mountain that it is impossible to reach by hiking",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 was designed to endure the sudden ground shaking จากเนื้อหาในบทความ รายละเอียดที่กล่าวถึง Machu Picchu ที่ถูกต้องคือข้อ 2 ซึ่งระบุไว้ว่าก้อนหินที่ใช้สร้าง Machu Picchu ไม่พังทลายเมื่อเกิดแผ่นดินไหว",
          },
          {
            id: "f2-rea-87",
            type: "comprehension",
            passageTitle: "Reading Passage — Machu Picchu",
            passage:
              "In 1911, Yale archeologist Hiram Bingham and his team set out to find the lost city of Vilcabamba but would soon find themselves led to one of the most fascinating places the world had never known. On their expedition, the team stumbled upon a local farmer who told them about the old mountain ruins known as Machu Picchu—this would soon prove to be the Lost City of the Incas.\n\nEven with today's technology, scientists are baffled as to how the Incas built this city without steel, mortar, or wheels. The stones were cut so precisely and wedged so closely together that a credit card cannot be inserted between them. Although Machu Picchu was built on an earthquake-prone area, its 500 stone buildings are still standing today. When an earthquake occurs, the stones are said to \"dance;\" that is, they bounce through the tremors and then fall back into place. Without this building method, many famous buildings at Machu Picchu would have collapsed long ago.\n\n____________. Due to its proximity to Cusco, some archeologists presume Machu Picchu was a retreat for nobles from the demands of city life. Others argue this place might have been used for more practical purposes, such as for crop testing, trading, or even possibly a prison. Even so, archeologists have projected that Machu Picchu was only able to hold 750 people, and only 200 skeletons were found there. This low population number—paired with religious buildings on the site—leads researchers to believe today that its sole purpose was for spiritual and religious ceremonies.\n\nA trip to Machu Picchu is many things, but cheap is not one of them. Train tickets from Cusco can run approximately a hundred dollars each, and admission charges range from $120 to $150. Besides, a bus trip up and down the mountain costs another $50. If you do not mind a workout, however, you can walk up and down for free. The climb takes about 90 minutes and may be strenuous, yet the steep path offers extraordinary views of the Machu Picchu Historical Sanctuary, which looks almost as it did in Bingham's time.",
            prompt: "The word \"it\" (line 28) refers to ____________.",
            choices: [
              "a trip",
              "the path",
              "the climb",
              "Machu Picchu",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 the path คำถามข้อนี้ถามว่าคำว่า it ในบรรทัดที่ 28 หมายถึงคำใด คำตอบที่ถูกต้องคือข้อ 2 เนื่องจากข้อความส่วนนี้กล่าวว่า เส้นทาง (path) ที่นำไปสู่ Machu Picchu (ในปัจจุบัน) มีทิวทัศน์ที่สวยงามเกือบเหมือนเมื่อครั้งที่ Bingham มาสำรวจ",
          },
          {
            id: "f2-rea-88",
            type: "comprehension",
            passageTitle: "Reading Passage — Machu Picchu",
            passage:
              "In 1911, Yale archeologist Hiram Bingham and his team set out to find the lost city of Vilcabamba but would soon find themselves led to one of the most fascinating places the world had never known. On their expedition, the team stumbled upon a local farmer who told them about the old mountain ruins known as Machu Picchu—this would soon prove to be the Lost City of the Incas.\n\nEven with today's technology, scientists are baffled as to how the Incas built this city without steel, mortar, or wheels. The stones were cut so precisely and wedged so closely together that a credit card cannot be inserted between them. Although Machu Picchu was built on an earthquake-prone area, its 500 stone buildings are still standing today. When an earthquake occurs, the stones are said to \"dance;\" that is, they bounce through the tremors and then fall back into place. Without this building method, many famous buildings at Machu Picchu would have collapsed long ago.\n\n____________. Due to its proximity to Cusco, some archeologists presume Machu Picchu was a retreat for nobles from the demands of city life. Others argue this place might have been used for more practical purposes, such as for crop testing, trading, or even possibly a prison. Even so, archeologists have projected that Machu Picchu was only able to hold 750 people, and only 200 skeletons were found there. This low population number—paired with religious buildings on the site—leads researchers to believe today that its sole purpose was for spiritual and religious ceremonies.\n\nA trip to Machu Picchu is many things, but cheap is not one of them. Train tickets from Cusco can run approximately a hundred dollars each, and admission charges range from $120 to $150. Besides, a bus trip up and down the mountain costs another $50. If you do not mind a workout, however, you can walk up and down for free. The climb takes about 90 minutes and may be strenuous, yet the steep path offers extraordinary views of the Machu Picchu Historical Sanctuary, which looks almost as it did in Bingham's time.",
            prompt: "It can be INFERRED from the text that ____________.",
            choices: [
              "there were only monks living in Machu Picchu",
              "the Incas had advanced knowledge in construction",
              "Machu Picchu will never be destroyed by a natural calamity",
              "Hiram Bingham was the first person who knew of the existence of Machu Picchu",
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 2 the Incas had advanced knowledge in construction คำถามข้อนี้ถามว่าเราสามารถสรุปอะไรได้จากบทความนี้ คำตอบที่ถูกต้องคือข้อ 2 เนื่องจากในย่อหน้าที่ 2 มีเนื้อความที่ระบุว่า หากปราศจากวิธีการที่ (ชาว Inca) ใช้สร้าง Machu Picchu สิ่งก่อสร้างหลายแห่งที่นี่คงพังทลายไปนานแล้ว (เนื่องจากแผ่นดินไหว)",
          },
          {
            id: "f2-rea-89",
            type: "comprehension",
            passageTitle: "Reading Passage — Machu Picchu",
            passage:
              "In 1911, Yale archeologist Hiram Bingham and his team set out to find the lost city of Vilcabamba but would soon find themselves led to one of the most fascinating places the world had never known. On their expedition, the team stumbled upon a local farmer who told them about the old mountain ruins known as Machu Picchu—this would soon prove to be the Lost City of the Incas.\n\nEven with today's technology, scientists are baffled as to how the Incas built this city without steel, mortar, or wheels. The stones were cut so precisely and wedged so closely together that a credit card cannot be inserted between them. Although Machu Picchu was built on an earthquake-prone area, its 500 stone buildings are still standing today. When an earthquake occurs, the stones are said to \"dance;\" that is, they bounce through the tremors and then fall back into place. Without this building method, many famous buildings at Machu Picchu would have collapsed long ago.\n\n____________. Due to its proximity to Cusco, some archeologists presume Machu Picchu was a retreat for nobles from the demands of city life. Others argue this place might have been used for more practical purposes, such as for crop testing, trading, or even possibly a prison. Even so, archeologists have projected that Machu Picchu was only able to hold 750 people, and only 200 skeletons were found there. This low population number—paired with religious buildings on the site—leads researchers to believe today that its sole purpose was for spiritual and religious ceremonies.\n\nA trip to Machu Picchu is many things, but cheap is not one of them. Train tickets from Cusco can run approximately a hundred dollars each, and admission charges range from $120 to $150. Besides, a bus trip up and down the mountain costs another $50. If you do not mind a workout, however, you can walk up and down for free. The climb takes about 90 minutes and may be strenuous, yet the steep path offers extraordinary views of the Machu Picchu Historical Sanctuary, which looks almost as it did in Bingham's time.",
            prompt: "This text is most likely found in a/an ____________.",
            choices: [
              "academic journal of architecture",
              "chapter in a social science textbook",
              "newspaper column about lost civilizations",
              "website introducing world-famous tourist attractions",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 4 website introducing world-famous tourist attractions คำถามข้อนี้ถามว่าบทความนี้น่าจะพบได้ที่ใด คำตอบที่ถูกต้องคือข้อ 4 เนื่องจากบทความนี้มีเนื้อหาเกี่ยวกับ Machu Picchu ซึ่งเป็นสถานที่ท่องเที่ยว (tourist attraction) ชื่อดังอันดับต้น ๆ ของโลก",
          },
          {
            id: "f2-rea-90",
            type: "comprehension",
            passageTitle: "Reading Passage — Machu Picchu",
            passage:
              "In 1911, Yale archeologist Hiram Bingham and his team set out to find the lost city of Vilcabamba but would soon find themselves led to one of the most fascinating places the world had never known. On their expedition, the team stumbled upon a local farmer who told them about the old mountain ruins known as Machu Picchu—this would soon prove to be the Lost City of the Incas.\n\nEven with today's technology, scientists are baffled as to how the Incas built this city without steel, mortar, or wheels. The stones were cut so precisely and wedged so closely together that a credit card cannot be inserted between them. Although Machu Picchu was built on an earthquake-prone area, its 500 stone buildings are still standing today. When an earthquake occurs, the stones are said to \"dance;\" that is, they bounce through the tremors and then fall back into place. Without this building method, many famous buildings at Machu Picchu would have collapsed long ago.\n\n____________. Due to its proximity to Cusco, some archeologists presume Machu Picchu was a retreat for nobles from the demands of city life. Others argue this place might have been used for more practical purposes, such as for crop testing, trading, or even possibly a prison. Even so, archeologists have projected that Machu Picchu was only able to hold 750 people, and only 200 skeletons were found there. This low population number—paired with religious buildings on the site—leads researchers to believe today that its sole purpose was for spiritual and religious ceremonies.\n\nA trip to Machu Picchu is many things, but cheap is not one of them. Train tickets from Cusco can run approximately a hundred dollars each, and admission charges range from $120 to $150. Besides, a bus trip up and down the mountain costs another $50. If you do not mind a workout, however, you can walk up and down for free. The climb takes about 90 minutes and may be strenuous, yet the steep path offers extraordinary views of the Machu Picchu Historical Sanctuary, which looks almost as it did in Bingham's time.",
            prompt: "What is the tone of the text?",
            choices: [
              "Critical",
              "Nostalgic",
              "Persuasive",
              "Informative",
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 4 Informative คำถามข้อนี้ถามว่าบทความนี้มีลักษณะการเขียนเชิงใด คำตอบที่ถูกต้องคือข้อ 4 เนื่องจากเนื้อหาเป็นการให้ข้อเท็จจริงเกี่ยวกับ Machu Picchu ไม่ว่าจะเป็นการค้นพบ การก่อสร้าง วัตถุประสงค์ในการสร้าง และข้อมูลเกี่ยวกับการเดินทางไปยังสถานที่แห่งนี้",
          },
        ],
      },

      writing: {
        expectedCount: 30,
        questions: [
          {
            id: "f2-wri-91",
            segments: [
              { text: "Besides", n: 1 },
              { text: " hospitalization and death, COVID-19 infection poses " },
              { text: "others", n: 2 },
              { text: " significant risks " },
              { text: "for", n: 3 },
              { text: " children, " },
              { text: "including", n: 4 },
              { text: " the risk of Multisystem Inflammatory Syndrome in Children (MIS-C)." },
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 2 ในที่นี้ต้องใช้คุณศัพท์ (adjective) other เพราะตามด้วยนามวลี (noun phrase) significant risks",
          },
          {
            id: "f2-wri-92",
            segments: [
              { text: "Dalian, a leading port for seafood " },
              { text: "shipments", n: 1 },
              { text: " in China, has " },
              { text: "ordered", n: 2 },
              { text: " all businesses " },
              { text: "handle", n: 3 },
              { text: " imported frozen foods to suspend " },
              { text: "operations", n: 4 },
              { text: "." },
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 3 ประโยคนี้มีประธานคือ Dalian กริยาคือ has ordered และกรรม (object) คือ all businesses ดังนั้น กริยา handle จึงต้องเป็นส่วนขยายในรูป -ing คือ handling ซึ่งลดรูปมาจาก relative clause คือ which handle",
          },
          {
            id: "f2-wri-93",
            segments: [
              { text: "There's " },
              { text: "an", n: 1 },
              { text: " evidence to suggest that " },
              { text: "certain", n: 2 },
              { text: " attitudes and behaviors can " },
              { text: "spread", n: 3 },
              { text: " from one person to a group of people quite easily, " },
              { text: "especially", n: 4 },
              { text: " in work contexts." },
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 1 evidence เป็นนามนับไม่ได้ จึงใช้คำนำหน้านาม an ไม่ได้ ต้องแก้เป็น There's evidence ...",
          },
          {
            id: "f2-wri-94",
            segments: [
              { text: "The volleyball used as a prop in the 2000 film Cast Away " },
              { text: "depicting", n: 1 },
              { text: " Tom Hanks as a lone survivor " },
              { text: "was stuck", n: 2 },
              { text: " on a " },
              { text: "deserted", n: 3 },
              { text: " island has sold " },
              { text: "at", n: 4 },
              { text: " auction for a staggering $308,000." },
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 2 ประโยคนี้มีประธานคือ The volleyball และกริยาคือ has sold ดังนั้น was stuck จึงเป็นส่วนขยายของนามวลี a lone survivor จึงต้องใช้ who was stuck หรือตัด who was ออก เหลือเพียง stuck ส่วน as ในที่นี้เป็น preposition ตามด้วยนามวลี a lone survivor แปลว่า เป็นผู้รอดชีวิตเพียงลำพัง",
          },
          {
            id: "f2-wri-95",
            segments: [
              { text: "Forests are excellent at " },
              { text: "soaking", n: 1 },
              { text: " CO2 up from the atmosphere, " },
              { text: "it is", n: 2 },
              { text: " one reason why campaigners and scientists emphasize the need " },
              { text: "to protect", n: 3 },
              { text: " the natural world " },
              { text: "by", n: 4 },
              { text: " reducing deforestation." },
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 2 ประโยคนี้มีประธานคือ Forests และกริยาคือ are ซึ่งตามด้วย complement ในรูปของคุณศัพท์วลี (adjective phrase) ... excellent at soaking CO2 up from the atmosphere ดังนั้น ข้อความส่วนที่เหลือหลังเครื่องหมาย comma ต้องอยู่ในรูป which is หรือตัด which is ออก เหลือเพียงนามวลี one reason ...",
          },
          {
            id: "f2-wri-96",
            segments: [
              { text: "With big, googly eyes and " },
              { text: "a", n: 1 },
              { text: " cheerful personality, Robin is an " },
              { text: "AI-based", n: 2 },
              { text: " companion designed to " },
              { text: "easy", n: 3 },
              { text: " anxiety and loneliness " },
              { text: "among", n: 4 },
              { text: " children in hospitals and clinics." },
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 3 ... designed to ตามด้วยกริยาช่องที่ 1 จึงต้องเปลี่ยนคุณศัพท์ easy เป็นกริยา ease",
          },
          {
            id: "f2-wri-97",
            segments: [
              { text: "Legend has " },
              { text: "it", n: 1 },
              { text: " that a goatherder first discovered coffee when his goats " },
              { text: "ate", n: 2 },
              { text: " some coffee cherries " },
              { text: "and", n: 3 },
              { text: " went a bit " },
              { text: "wildly", n: 4 },
              { text: " with the caffeine high." },
            ],
            answer: 4,
            explanation: "คำตอบที่ถูกต้องคือ 4 กริยา went ซึ่งเป็นกริยาช่อง 2 ของ go ในที่นี้เป็น linking verb จึงต้องใช้กับคุณศัพท์ wild ไม่ใช่ wildly",
          },
          {
            id: "f2-wri-98",
            segments: [
              { text: "While New Zealand " },
              { text: "has criticized", n: 1 },
              { text: " for a slow start to " },
              { text: "its", n: 2 },
              { text: " vaccination campaign, " },
              { text: "nearly", n: 3 },
              { text: " 80 per cent of the eligible population " },
              { text: "has", n: 4 },
              { text: " now received a second dose." },
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 1 ในที่นี้หมายถึง ประเทศนิวซีแลนด์ถูกวิจารณ์ จึงต้องอยู่ในรูป passive คือ has been criticized",
          },
          {
            id: "f2-wri-99",
            segments: [
              { text: "While", n: 1 },
              { text: " many strict rules " },
              { text: "protect", n: 2 },
              { text: " people from physical harm from computer equipment such as overheating, sharp components or electric shocks, there " },
              { text: "have", n: 3 },
              { text: " no " },
              { text: "such", n: 4 },
              { text: " rules for cyber-breaches." },
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 3 ต้องใช้ there are หมายถึง มี ไม่ใช่ there have",
          },
          {
            id: "f2-wri-100",
            segments: [
              { text: "Vertebrates, " },
              { text: "animals", n: 1 },
              { text: " with a backbone, " },
              { text: "can be classify", n: 2 },
              { text: " as sentient in new animal welfare " },
              { text: "legislation", n: 3 },
              { text: " currently under " },
              { text: "debate", n: 4 },
              { text: " in the United Kingdom." },
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 2 ประธานของประโยคคือ Vertebrates ถูกจัดเป็นสัตว์ที่มีความรู้สึกเจ็บปวดได้ตามกฎหมายคุ้มครองสัตว์ฉบับใหม่ จึงต้องอยู่ในรูป passive เป็น ... are classified as ...",
          },
          {
            id: "f2-wri-101",
            segments: [
              { text: "Whether " },
              { text: "there are", n: 1 },
              { text: " service providers, coworkers, friends or family, there are many people in our lives " },
              { text: "who", n: 2 },
              { text: " take action " },
              { text: "to meet", n: 3 },
              { text: " our " },
              { text: "needs", n: 4 },
              { text: "." },
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 1 ในที่นี้ต้องใช้ whether it is หรือ whether it be หมายถึง ไม่ว่าจะเป็น...",
          },
          {
            id: "f2-wri-102",
            segments: [
              { text: "India has repeatedly expressed " },
              { text: "concern", n: 1 },
              { text: " at the supply of oil being artificially " },
              { text: "adjusted", n: 2 },
              { text: " below demand levels by oil " },
              { text: "produced", n: 3 },
              { text: " countries, leading to " },
              { text: "rising prices", n: 4 },
              { text: "." },
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 3 ต้องใช้ oil producing countries หมายถึง ประเทศที่ผลิตน้ำมัน",
          },
          {
            id: "f2-wri-103",
            segments: [
              { text: "Only three species of bee in the world have evolved to " },
              { text: "getting", n: 1 },
              { text: " their protein " },
              { text: "exclusively", n: 2 },
              { text: " from dead meat, " },
              { text: "and", n: 3 },
              { text: " they live only in " },
              { text: "tropical", n: 4 },
              { text: " rainforests." },
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 1 ต้องใช้ to get เพื่อแสดงวัตถุประสงค์ว่า มีวิวัฒนาการเพื่อ...",
          },
          {
            id: "f2-wri-104",
            segments: [
              { text: "Major depression is very " },
              { text: "common", n: 1 },
              { text: " among older adults and is " },
              { text: "associated", n: 2 },
              { text: " with an " },
              { text: "increased", n: 3 },
              { text: " risk of cognitive decline, disability, " },
              { text: "suicidal", n: 4 },
              { text: " and all-cause mortality." },
            ],
            answer: 4,
            explanation: "คำตอบที่ถูกต้องคือ 4 suicidal เป็นคำคุณศัพท์ ในที่นี้ต้องใช้คำนาม suicide เพื่อให้โครงสร้างคู่ขนานกับคำนามอื่น ๆ ซึ่งเชื่อมด้วย and",
          },
          {
            id: "f2-wri-105",
            segments: [
              { text: "The US scientists " },
              { text: "who", n: 1 },
              { text: " created the first living robots say the life forms, " },
              { text: "called as", n: 2 },
              { text: " xenobots, can " },
              { text: "now", n: 3 },
              { text: " reproduce in a way " },
              { text: "not seen", n: 4 },
              { text: " in plants and animals." },
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 2 ต้องใช้ known as หมายถึง เรียกว่า หากใช้ called ไม่ต้องมี as",
          },
          {
            id: "f2-wri-106",
            segments: [
              { text: "Spanning " },
              { text: "across", n: 1 },
              { text: " the slopes of Erusheti, looming over a lush valley " },
              { text: "scored", n: 2 },
              { text: " by the Kura river, Vardzia " },
              { text: "where", n: 3 },
              { text: " Georgia's most " },
              { text: "remarkable", n: 4 },
              { text: " cave city." },
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 3 ประโยคนี้มีประธานคือ Vardzia แต่ยังขาดกริยาแท้ของประโยค ดังนั้นจึงต้องเปลี่ยน where เป็น is",
          },
          {
            id: "f2-wri-107",
            segments: [
              { text: "The holiday shopping season is a " },
              { text: "prime", n: 1 },
              { text: " opportunity for cyber criminals to " },
              { text: "make", n: 2 },
              { text: " advantage of unsuspecting shoppers " },
              { text: "through", n: 3 },
              { text: " fake websites, malicious links, " },
              { text: "and even", n: 4 },
              { text: " fake charities." },
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 2 ต้องใช้ take advantage of ซึ่งเป็นสำนวนหมายถึง ใช้ประโยชน์หรือเอาเปรียบ",
          },
          {
            id: "f2-wri-108",
            segments: [
              { text: "Before the 2019 pandemic, Macao's government " },
              { text: "obtains", n: 1 },
              { text: " more than 80% of " },
              { text: "its", n: 2 },
              { text: " tax " },
              { text: "revenues", n: 3 },
              { text: " from " },
              { text: "the", n: 4 },
              { text: " gambling industry." },
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 1 ประโยคนี้กล่าวถึงเหตุการณ์ในอดีตที่จบไปแล้ว จึงต้องใช้กริยาช่อง 2 คือ obtained",
          },
          {
            id: "f2-wri-109",
            segments: [
              { text: "A Dubai-based company has " },
              { text: "created", n: 1 },
              { text: " Aqua Pods, " },
              { text: "they", n: 2 },
              { text: " can be used " },
              { text: "as", n: 3 },
              { text: " " },
              { text: "floating", n: 4 },
              { text: " supermarkets and living spaces." },
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 3 ประโยคนี้มีประธานคือ A Dubai-based company กริยาแท้คือ has created และกรรมคือ Aqua Pods จึงต้องเปลี่ยน they เป็น which เพื่อเป็น adjective clause ขยายนาม Aqua Pods",
          },
          {
            id: "f2-wri-110",
            segments: [
              { text: "Rising", n: 1 },
              { text: " temperatures and extreme weather " },
              { text: "event", n: 2 },
              { text: " exacerbated by climate change are making farming conditions " },
              { text: "increasingly", n: 3 },
              { text: " challenging and " },
              { text: "disrupting", n: 4 },
              { text: " food distribution." },
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 2 event เป็นนามนับได้ จึงต้องอยู่ในรูปพหูพจน์ events",
          },
          {
            id: "f2-wri-111",
            segments: [
              { text: "Desert farming " },
              { text: "has existed", n: 1 },
              { text: " for thousands of years, " },
              { text: "but", n: 2 },
              { text: " not all desert plants " },
              { text: "do not", n: 3 },
              { text: " provide the nutrition needed " },
              { text: "to feed", n: 4 },
              { text: " the growing population." },
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 3 ต้องเอา do not ออก เพราะมีคำว่า not อยู่หน้าประธาน all desert plants แล้ว",
          },
          {
            id: "f2-wri-112",
            segments: [
              { text: "All", n: 1 },
              { text: " types of leukemia are cancers of white blood cells " },
              { text: "they", n: 2 },
              { text: " start in the " },
              { text: "spongy", n: 3 },
              { text: " center of bone " },
              { text: "called", n: 4 },
              { text: " bone marrow." },
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 2 คำว่า they หมายถึง all types of leukemia ซึ่งเป็นประธานของประโยคนี้ และมีกริยา 2 คำ คือ are และ start จึงควรใช้ and แทนคำว่า they เพื่อเชื่อมระหว่าง are และ start หากใช้ they จะทำให้ประโยคนี้มี 2 clauses โดยที่ไม่มีคำเชื่อมหรือเครื่องหมายวรรคตอนที่ถูกต้อง ซึ่งเรียกความผิดแบบนี้ว่า run-on",
          },
          {
            id: "f2-wri-113",
            segments: [
              { text: "Expectant mothers " },
              { text: "by", n: 1 },
              { text: " sexually " },
              { text: "transmitted", n: 2 },
              { text: " infections are " },
              { text: "more likely", n: 3 },
              { text: " to give birth " },
              { text: "prematurely", n: 4 },
              { text: "." },
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 1 ต้องใช้ with เพื่อหมายถึง คุณแม่ตั้งครรภ์ที่ติดโรคทางเพศสัมพันธ์",
          },
          {
            id: "f2-wri-114",
            segments: [
              { text: "The Philippines is home " },
              { text: "to", n: 1 },
              { text: " 7,641 islands, " },
              { text: "making", n: 2 },
              { text: " " },
              { text: "it", n: 3 },
              { text: " the world's " },
              { text: "largest second", n: 4 },
              { text: " archipelagic nation." },
            ],
            answer: 4,
            explanation: "คำตอบที่ถูกต้องคือ 4 the world's second largest archipelagic nation หมายถึงประเทศหมู่เกาะที่ใหญ่เป็นอันดับสองของโลก คำว่า second ขยายคำว่า largest จึงควรอยู่หน้า largest",
          },
          {
            id: "f2-wri-115",
            segments: [
              { text: "The Taj Mahal, a 17th Century mausoleum in Agra city, was " },
              { text: "builded", n: 1 },
              { text: " by Mughal emperor Shah Jahan " },
              { text: "in", n: 2 },
              { text: " memory of his queen Mumtaz " },
              { text: "who", n: 3 },
              { text: " died while giving birth " },
              { text: "to", n: 4 },
              { text: " their 14th child." },
            ],
            answer: 1,
            explanation: "คำตอบที่ถูกต้องคือ 1 กริยา build มีรูปกริยา 3 ช่องคือ build built built ในที่นี้ต้องใช้กริยาช่อง 3 built ในโครงสร้างของ passive คือ be + V3 เพื่อหมายถึง ทัชมาฮาลถูกสร้าง จึงต้องใช้ว่า was built",
          },
          {
            id: "f2-wri-116",
            segments: [
              { text: "Right now, " },
              { text: "sectors", n: 1 },
              { text: " from retail and hospitality " },
              { text: "to", n: 2 },
              { text: " knowledge work and healthcare are seeing " },
              { text: "it", n: 3 },
              { text: " an exodus of " },
              { text: "workers", n: 4 },
              { text: "." },
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 3 กริยา are seeing มีกรรม (object) คือ an exodus of workers จึงไม่ควรมี it ต่อท้าย",
          },
          {
            id: "f2-wri-117",
            segments: [
              { text: "Self-driving", n: 1 },
              { text: " vehicles are " },
              { text: "steadily", n: 2 },
              { text: " becoming a reality " },
              { text: "although", n: 3 },
              { text: " the many hurdles still to be " },
              { text: "overcome", n: 4 },
              { text: "." },
            ],
            answer: 3,
            explanation: "คำตอบที่ถูกต้องคือ 3 although ต้องตามด้วยอนุประโยค (clause) คือประกอบด้วยประธานและกริยา แต่ในที่นี้ the many hurdles still to be overcome เป็นเพียงนามวลี จึงต้องเปลี่ยน although เป็น despite",
          },
          {
            id: "f2-wri-118",
            segments: [
              { text: "An Australian firm which claims " },
              { text: "to have", n: 1 },
              { text: " a database of more than 10 billion facial images " },
              { text: "are", n: 2 },
              { text: " facing a fine over its " },
              { text: "handling", n: 3 },
              { text: " of personal " },
              { text: "data", n: 4 },
              { text: " in the UK." },
            ],
            answer: 2,
            explanation: "คำตอบที่ถูกต้องคือ 2 ประธานของกริยา are facing คือ An Australian firm ไม่ใช่ images หมายถึง บริษัทออสเตรเลียแห่งหนึ่งกำลังประสบกับการถูกปรับ ดังนั้นจึงต้องใช้ is facing",
          },
          {
            id: "f2-wri-119",
            segments: [
              { text: "Japan has banned " },
              { text: "incoming", n: 1 },
              { text: " flights from " },
              { text: "abroad", n: 2 },
              { text: " in response to the international alarm " },
              { text: "over", n: 3 },
              { text: " the Omicron variant " },
              { text: "was", n: 4 },
              { text: " first detected in South Africa." },
            ],
            answer: 4,
            explanation: "คำตอบที่ถูกต้องคือ 4 the omicron variant เป็น object ของบุพบท over จึงตามด้วยกริยาแท้ was first detected ทันทีเลยไม่ได้ ต้องอยู่ในโครงสร้างที่เป็นส่วนขยาย คือ which was first detected หรือตัด which was ออก เหลือเพียง over the omicron variant first detected ...",
          },
          {
            id: "f2-wri-120",
            segments: [
              { text: "Companies around the world are racing " },
              { text: "to create", n: 1 },
              { text: " a new generation of computers " },
              { text: "that", n: 2 },
              { text: " could revolutionize " },
              { text: "complex", n: 3 },
              { text: " tasks such as " },
              { text: "develop", n: 4 },
              { text: " new drugs and medicines." },
            ],
            answer: 4,
            explanation: "คำตอบที่ถูกต้องคือ 4 such as หมายถึง เช่น ใช้ในการยกตัวอย่าง ต้องตามด้วยนามวลี ดังนั้น กริยา develop จึงต้องอยู่ในรูป -ing เป็น developing ในที่นี้หมายความว่า งานที่ซับซ้อน เช่น การพัฒนายาใหม่ ๆ",
          },
        ],
      },
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
          { id: "F3-L1", label: "Part 1 — Short Conversations", src: "mp3/F3.3.mp3" },
        ],
        tapescript:
          "FORM 3 — Listening Comprehension Test\n" +
          "This is the Chulalongkorn University Listening Comprehension Test. The test consists of 3 parts. Each part of the test will be spoken only once. Listen carefully to what the speakers say. You may take notes if you wish. Then, the questions will be asked. For each question, there will be 4 choices: 1, 2, 3 and 4. The four choices are printed in your test booklet. Decide which choice is the best answer. Then, find the number of the question on your answer sheet and blacken the space that corresponds to the answer you have chosen.\n" +
          "\n" +
          "First, listen to the following example.\n" +
          "\n" +
          "You will hear:\n" +
          "(Woman) There was a large crowd at the auction. You must have collected a lot of money for your fund raising.\n" +
          "(Man) Not as much as we would have liked.\n" +
          "(Narrator) What does the man mean?\n" +
          "\n" +
          "You will read:\n" +
          "1. He didn't have much fun at the auction.\n" +
          "2. A lot of people sold more things than he did.\n" +
          "3. He didn't collect as much money as the woman.\n" +
          "4. They didn't make as much money as they had hoped.\n" +
          "\n" +
          "The correct answer is Number 4, so you should blacken Number 4 on your answer sheet.\n" +
          "\n" +
          "PART I\n" +
          "Directions: You will hear short conversations between two people. After each conversation, a question will be asked. You will hear the conversation only once, so you must listen carefully to what each speaker says. After you hear the conversation and the question, read the four choices and choose the one which best answers the question.\n" +
          "\n" +
          "Question 1.\n" +
          "W: Sheila wants to start a business, and she asked me to be her partner.\n" +
          "M: If I were you, I'd think twice before agreeing to that.\n" +
          "(Narrator) What does the man most likely mean?\n" +
          "\n" +
          "Question 2.\n" +
          "M: This is the best Italian restaurant in the city.\n" +
          "W: I beg to differ.\n" +
          "(Narrator) What does the woman mean?\n" +
          "\n" +
          "Question 3.\n" +
          "W: I wish there were 40 hours in a day. I don't seem to get anything done!\n" +
          "M: Hey, you should really take it easy.\n" +
          "(Narrator) What does the man mean?\n" +
          "\n" +
          "Question 4.\n" +
          "M: Peter's not at his desk today. Do you know where I can find him?\n" +
          "W: Oh. He's in charge of the exhibition, so he'll be at the venue until the end of the week getting things ready for the event this weekend. If it's something urgent, you can find him there or just wait till he comes in next week.\n" +
          "(Narrator) What day will Peter be at the office?\n" +
          "\n" +
          "Question 5.\n" +
          "M: I hate to ask, but a new game console just came out that I really want. I'm 10,000 baht short though.\n" +
          "W: You're asking me? Do you think I have that kind of money lying around?\n" +
          "(Narrator) What does the woman mean?\n" +
          "\n" +
          "Question 6.\n" +
          "W: Did you hear that Global Airways wants to offer shares to the public?\n" +
          "M: I heard. I don't suggest buying any though. Apparently the company has been in the red for some time now.\n" +
          "(Narrator) What does the man say about the company?\n" +
          "\n" +
          "Question 7.\n" +
          "M: Umm...I'm a size 44 usually, but I think it's a bit tight around the torso.\n" +
          "W: Let me see if we still have a bigger size in stock.\n" +
          "(Narrator) Who is the woman most likely to be?\n" +
          "\n" +
          "Question 8.\n" +
          "W: This skin cream has good reviews, but can I really believe these online testimonials?\n" +
          "M: My friend Ellen swears by it.\n" +
          "(Narrator) What does the man say about Ellen?\n" +
          "\n" +
          "Question 9.\n" +
          "W: Have you seen my reading glasses? Maybe I left them at work.\n" +
          "M: Weren't you wearing them while reading the paper at breakfast?\n" +
          "(Narrator) Where should the woman look for her glasses?\n" +
          "\n" +
          "Question 10.\n" +
          "M: Hey, what do you say we try bungee-jumping? They say it gives such an adrenaline rush!\n" +
          "W: You go ahead. I think you're out of your mind.\n" +
          "(Narrator) How would the woman most likely describe the man?\n" +
          "\n" +
          "Question 11.\n" +
          "W: So, John, how do you find living in a dormitory? It must be a big change from when you lived with your family. For me, the biggest change is having to do my own laundry and cooking. I really hate that.\n" +
          "M: I don't mind that, but I do find it very hard to get used to having a roommate.\n" +
          "(Narrator) How does the man feel about living in a dormitory?\n" +
          "\n" +
          "Question 12.\n" +
          "W: Now that everyone's here, let's get the meeting started. The agenda and details about the exhibition venues are in the folder right in front of you. I know you are all very busy, so let's finish this meeting by 3 p.m. Ken, could you take the minutes?\n" +
          "M: Of course.\n" +
          "(Narrator) Who most likely is Ken?\n" +
          "\n" +
          "Question 13.\n" +
          "W: Excuse me, who do I talk to if I want to book a meeting room?\n" +
          "M: That'll be Sarah, but she's not at her desk right now. If you leave your contact number, I'll tell her to get back to you.\n" +
          "(Narrator) What is the man most likely going to do next?\n" +
          "\n" +
          "Question 14.\n" +
          "W: Finally, we've arrived! Wow...the beach looks so nice! What shall we do first—go for a stroll? Or do you fancy a swim?\n" +
          "M: It's been a long drive. Let's check out the restaurant first.\n" +
          "(Narrator) What can be INFERRED about the man?\n" +
          "\n" +
          "Question 15.\n" +
          "W: Excuse me, is there another seat I can move to? The man next to me is snoring and I can't sleep.\n" +
          "M: I'm really sorry, but the flight is fully booked. I'm afraid there's nothing I can do.\n" +
          "(Narrator) Where are the two speakers?\n" +
          "\n" +
          "PART II\n" +
          "Directions: In this part, you will hear longer conversations between two people. After each conversation, some questions will be asked. You will hear the conversations and the questions only once, so listen carefully to what is said. After you hear the question, read the four choices and choose the one which best answers the question.\n" +
          "\n" +
          "Conversation 1\n" +
          "Man: All right, ma'am, here is the antifungal medicine for your skin infection.\n" +
          "Woman: Ah yes, thank you. Is it a cream or a gel?\n" +
          "Man: It's a gel, ma'am. Would you prefer a cream? This medication is also available as a pill or even an injection although. You'll have to go back to the hospital for that one though.\n" +
          "Woman: No, a gel is fine. Last month, when I had a similar skin infection, my doctor prescribed the cream, and I hated it. It smelled horrible.\n" +
          "Man: Our customers do tell us the gel has a more pleasant scent than the cream. Now, will you be paying in cash or with a credit card?\n" +
          "Woman: Cash. My husband borrowed my credit card and hasn't given it back to me yet!\n" +
          "\n" +
          "Question 16. Where are the speakers?\n" +
          "Question 17. What is TRUE about the woman?\n" +
          "Question 18. Which form of medicine can the man NOT offer the woman?\n" +
          "\n" +
          "Conversation 2\n" +
          "Man: Hey, Celia, I need to ask you a big favor. Can you drive out to the airport and pick up Carina tomorrow?\n" +
          "Woman: Sure I can, but I'm sure she'd prefer seeing her boyfriend instead of her sister first after six months in another country. I mean, I love her, but she must miss you more!\n" +
          "Man: I hope so. I've really missed her, too, but I'm planning a huge surprise for her. I'll need that time to finish setting it up.\n" +
          "Woman: Wait! Does this mean what I think it means? Should my parents and I get ready to attend a wedding?\n" +
          "Man: Definitely! By this time next year, if things go well, Carina will be my wife, and you're going to be my sister-in-law.\n" +
          "Woman: Of course, things will go well! I'm so excited that you're going to propose to Carina. She's going to be so happy tomorrow! I bet she won't even be jet lagged, which is great because I always get the worst jet lag when I come back from overseas.\n" +
          "\n" +
          "Question 19. What is the man planning to do?\n" +
          "Question 20. What will be the man's future relationship with the woman?\n" +
          "Question 21. What is NOT TRUE about the woman?\n" +
          "\n" +
          "Conversation 3\n" +
          "Woman: Is this a new recipe? The pie tastes different.\n" +
          "Man: Yes, I added a cup of strawberries along with the cloudberries, blackberries, and raspberries this time. What do you think? Do you like it?\n" +
          "Woman: I do. It's a bit more sour than the original pie, but I like it. The color is also very pretty. The top of the pie looks like a rare jewel.\n" +
          "Man: Thanks. Do you think Elizabeth will like it? I'm going to bake it for her birthday next week. She says she doesn't want a cake at her party this year.\n" +
          "Woman: I've only met your girlfriend once. I highly doubt I am the best person to ask if she will like this pie. In my opinion, though, I bet she will. Who doesn't like eating pie? It's a great party food. And I bet that this will taste even better with some vanilla ice cream.\n" +
          "Man: Good idea. I have some in the refrigerator. Let's try it.\n" +
          "\n" +
          "Question 22. What can be INFERRED about the woman?\n" +
          "Question 23. All of the following berries are in the pie EXCEPT __________.\n" +
          "Question 24. What will the speakers do next?\n" +
          "\n" +
          "PART III\n" +
          "Directions: In this part of the test, you will hear two talks. After each talk, you will be asked some questions. You will hear each talk and the questions only once, so listen carefully to what is said. After you hear each question, read the four choices and choose the one which best answers the question.\n" +
          "\n" +
          "Talk I\n" +
          "For a long time, mushrooms have been a staple food during the autumn season in Japan. There is evidence of mushrooms being regularly consumed by the Japanese people as far back as 4,000 years ago. Mushrooms are highly-valued by the Japanese for their taste, smell, and nutritional properties, which include high concentrations of minerals like potassium and copper. In recent years, mushrooms have been found to reduce the effects of numerous diseases like obesity, which are mainly the result of unhealthy lifestyles. The humid Japanese climate supports over 5,000 varieties of mushrooms, but over 4,000 of these are poisonous or inedible. Aside from their health benefits, fresh and dried mushrooms are beneficial to Japanese cooking, as they add great flavor and fragrance to many Japanese dishes. Another benefit is that they can be used in a variety of dishes. For example, wood ear mushrooms are often put in soups, while butterscotch mushrooms and ram's head mushrooms are frequently seen in cold salads.\n" +
          "\n" +
          "Question 25. The people who would be most interested in this talk are people who are __________.\n" +
          "Question 26. Which is NOT mentioned as a benefit of mushrooms?\n" +
          "Question 27. Which mushrooms are often eaten in cold dishes?\n" +
          "\n" +
          "Talk II\n" +
          "Parabens are a type of chemical preservative used by the skincare industry to increase how long products such as sunscreen, soaps, lotions, and creams can last and stay usable. However, beauty products for the hair and lips may contain parabens as well. These parabens can mimic the human hormone estrogen. This means that they may interfere with the hormone balance of people's bodies, even if the person is not female. The estrogenic activity of parabens has been shown to interfere with the way that people's body's hormones work. This is cause for concern because it could mean parabens influence reproductive activities, like pregnancy and menstruation. Research has also shown that parabens can be easily absorbed through the skin, and daily application of beauty products with parabens can cause them to accumulate in people's systems. Steady exposure to parabens may play a part in the growth of breast cancer cells in women. Some people may also experience an allergic reaction to parabens, resulting in redness or itchiness. Over the past decade, the side effects of long-term exposure to parabens have become a source of anxiety among consumers who want safe products. While nearly all beauty products use some kind of preservatives to make their products last longer, paraben-free cosmetics may be safer to use.\n" +
          "\n" +
          "Question 28. What is the main topic of this text?\n" +
          "Question 29. Which product would be LEAST likely to contain parabens based on the talk?\n" +
          "Question 30. Which of the following is NOT mentioned as being a possible effect of parabens?\n" +
          "\n" +
          "End of the Listening Test",
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
      listening: {
        expectedCount: 30,
        audioParts: [
          { id: "F4-L1", label: "Part 1 — Short Conversations", src: "mp3/F4.3.mp3" },
        ],
        tapescript:
          "FORM 4 — Listening Comprehension Test\n" +
          "This is the Chulalongkorn University Listening Comprehension Test. The test consists of 3 parts. Each part of the test will be spoken only once. Listen carefully to what the speakers say. You may take notes if you wish. Then, the questions will be asked. For each question, there will be 4 choices: 1, 2, 3 and 4. The four choices are printed in your test booklet. Decide which choice is the best answer. Then, find the number of the question on your answer sheet and blacken the space that corresponds to the answer you have chosen.\n" +
          "\n" +
          "First, listen to the following example.\n" +
          "\n" +
          "You will hear:\n" +
          "(Woman) There was a large crowd at the auction. You must have collected a lot of money for your fund raising.\n" +
          "(Man) Not as much as we would have liked.\n" +
          "(Narrator) What does the man mean?\n" +
          "\n" +
          "You will read:\n" +
          "1. He didn't have much fun at the auction.\n" +
          "2. A lot of people sold more things than he did.\n" +
          "3. He didn't collect as much money as the woman.\n" +
          "4. They didn't make as much money as they had hoped.\n" +
          "\n" +
          "The correct answer is Number 4, so you should blacken Number 4 on your answer sheet.\n" +
          "\n" +
          "PART I\n" +
          "Directions: You will hear short conversations between two people. After each conversation, a question will be asked. You will hear the conversation only once, so you must listen carefully to what each speaker says. After you hear the conversation and the question, read the four choices and choose the one which best answers the question.\n" +
          "\n" +
          "Question 1.\n" +
          "W: Who's that man you were talking to? You two seem close.\n" +
          "M: A colleague from work? Stephen? He lives next door.\n" +
          "(Narrator) Who is Stephen?\n" +
          "\n" +
          "Question 2.\n" +
          "M: Jenny, why is it that you never volunteer answers in class?\n" +
          "W: I don't want to lose face if I give a wrong answer.\n" +
          "(Narrator) What does the woman mean?\n" +
          "\n" +
          "Question 3.\n" +
          "W: How come you've never invited me to your parties?\n" +
          "M: (sounding surprised) Oh, do you want to come? We usually just drink and play cards all night. I didn't think it was your scene.\n" +
          "(Narrator) Why hasn't the man invited the woman to his parties?\n" +
          "\n" +
          "Question 4.\n" +
          "M: Did you have time to look at the report I put on your desk?\n" +
          "W: It looks nicely done, and the data is accurate, but there may still be a few typos.\n" +
          "(Narrator) What does the woman most likely want the man to do about the report?\n" +
          "\n" +
          "Question 5.\n" +
          "W: Hmm... I'm afraid the cut is pretty deep. You'll need stitches. I'll also need you to come in to change the dressing every day for the first few days. You really ought to be more careful with knives.\n" +
          "M: I shouldn't watch TV and chop at the same time, should I?\n" +
          "(Narrator) Who is the woman most likely to be?\n" +
          "\n" +
          "Question 6.\n" +
          "W: How was the match last night?\n" +
          "M: I felt like my heart jumped out of my chest!\n" +
          "(Narrator) How did the man most likely feel?\n" +
          "\n" +
          "Question 7.\n" +
          "M: I need someone to be the emcee for this year's annual conference.\n" +
          "W: What's wrong with Carla?\n" +
          "(Narrator) What can be INFERRED from the conversation?\n" +
          "\n" +
          "Question 8.\n" +
          "W: Every time I see Lisa she asks me when I plan to get married. I really don't think it's any of her business.\n" +
          "M: I know. She always wants to know what's going on in other people's lives.\n" +
          "(Narrator) How can Lisa be best described?\n" +
          "\n" +
          "Question 9.\n" +
          "W: What do you want to do when you graduate?\n" +
          "M: Well, I don't have anything specific in mind—anything that allows me to travel and meet people would be great.\n" +
          "(Narrator) What kind of job would the man most likely enjoy?\n" +
          "\n" +
          "Question 10.\n" +
          "M: Oh no, it's Thursday already! The report's due tomorrow, right?\n" +
          "W: You haven't handed it in? It was due yesterday.\n" +
          "(Narrator) What day is the due date for the report?\n" +
          "\n" +
          "Question 11.\n" +
          "W: Congratulations! I heard your community playground proposal got approved by the committee.\n" +
          "M: Thanks. I had to jump through all sorts of hoops to do it.\n" +
          "(Narrator) What does the man mean?\n" +
          "\n" +
          "Question 12.\n" +
          "W: Don't you just hate it when people make an appointment, confirm it, and then cancel at the last minute?\n" +
          "M: Oh, I can't stand those people. Most of the time they don't even say they're sorry.\n" +
          "(Narrator) How does the man most likely feel?\n" +
          "\n" +
          "Question 13.\n" +
          "W: John, sorry to ask but something came up, and I won't be able to present the project to the client tomorrow morning. Will you do it? I have everything prepared already.\n" +
          "M: I'll have to see if I can move things around. Can I let you know by the end of the day?\n" +
          "(Narrator) What is the man most likely going to do next?\n" +
          "\n" +
          "Question 14.\n" +
          "W: You're going to Pam's housewarming party this Saturday, right? I'm thinking of taking my car, but I'm really bad with directions. The party might be over by the time I find my way there.\n" +
          "M: Why don't you just come pick me up then?\n" +
          "(Narrator) What can be INFERRED from the conversation?\n" +
          "\n" +
          "Question 15.\n" +
          "W: Good morning, sir. What can I get you? The Norwegian trout just came in. We also have salmon and Pacific cod.\n" +
          "M: I'm having a barbecue so maybe 2 pounds of minced beef and some ribs.\n" +
          "(Narrator) Where most likely are the two speakers?\n" +
          "\n" +
          "PART II\n" +
          "Directions: In this part, you will hear longer conversations between two people. After each conversation, some questions will be asked. You will hear the conversations and the questions only once, so listen carefully to what is said. After you hear the question, read the four choices and choose the one which best answers the question.\n" +
          "\n" +
          "Conversation 1\n" +
          "Woman: Bridget asked if we are going to the party on Saturday. The restaurant needs a head count.\n" +
          "Man: Party? What party? Her birthday was last month. We went to that Chinese restaurant that had that awful chicken dish. It tasted like soggy cardboard.\n" +
          "Woman: It's not her birthday party. It's a party to celebrate her getting promoted. She just became a supervisor.\n" +
          "Man: Oh, good for her! I know how long and hard she worked for it. I'm so happy she got promoted! Count me in, unless we are going back to that Chinese restaurant. I wouldn't mind another Chinese place, but I'll order some pork instead!\n" +
          "Woman: It's a Lebanese place this time, and they don't have pork. Expect there to be chicken though. You know my sister loves chicken!\n" +
          "\n" +
          "Question 16. What is the party celebrating?\n" +
          "Question 17. Where will the party be held?\n" +
          "Question 18. What is NOT TRUE about the party?\n" +
          "\n" +
          "Conversation 2\n" +
          "Woman: Did you take my car? I told you not to borrow it without my permission. Mom and dad taught us to respect other people's property. Don't you remember?\n" +
          "Man: Don't lecture me. Dad told us that we can borrow each other's stuff for emergencies. He asked me to pick up some groceries after my Finnish class, and I didn't think I could transport everything with my motorcycle.\n" +
          "Woman: You don't study Finnish on Tuesdays! Besides, I only see a dozen eggs and a bag of carrots. You couldn't fit these in the basket on your motorcycle?\n" +
          "Man: I already put the cans of tuna fish and lettuce in the cupboard! And I left the durian in your car, though. It was too heavy for me to carry in by myself.\n" +
          "Woman: I'm going to complain to mom about this. She's going to punish you for sure! I bet she'll make you wash my car.\n" +
          "\n" +
          "Question 19. What is the relationship between the speakers?\n" +
          "Question 20. What is TRUE about the man?\n" +
          "Question 21. Which of the following did the man purchase?\n" +
          "\n" +
          "Conversation 3\n" +
          "Man: Good afternoon. Can I help you with anything?\n" +
          "Woman: Yes, please. I need you to call me a taxi to Central Rama 3. I want to buy some bedsheets at that shopping mall.\n" +
          "Man: Certainly, ma'am. Is there anything else I can assist you with?\n" +
          "Woman: There is, actually. Could you tell the housekeeping service to bring up some fresh towels for my husband? Oh, and we'll need a wakeup call at 6 A.M. tomorrow. We want to get an early start. I'm dying to go sightseeing at the Grand Palace.\n" +
          "Man: That won't be a problem, ma'am. Let me call you that taxi now. Would you like me to ring your room when it arrives?\n" +
          "Woman: No, I'll pop downstairs and wait in the lobby. Don't forget to talk to the housekeeping service, alright?\n" +
          "\n" +
          "Question 22. Where are the speakers?\n" +
          "Question 23. What do both the woman and her husband want?\n" +
          "Question 24. What will the woman do next?\n" +
          "\n" +
          "PART III\n" +
          "Directions: In this part of the test, you will hear two talks. After each talk, you will be asked some questions. You will hear each talk and the questions only once, so listen carefully to what is said. After you hear each question, read the four choices and choose the one which best answers the question.\n" +
          "\n" +
          "Talk I\n" +
          "The sodium consumption of the average Japanese adult is approximately twice the amount that is recommended by the World Health Organization. While the body does need sodium to function, only a small amount is necessary. Consuming too much sodium can raise one's blood pressure, which is a major risk factor for both heart disease and stroke. The solution for Japanese adults' overconsumption of salt would then seem to be the reduction of the amount of salt used in cooking. However, since salt is a major component of traditional Japanese cuisine, decreasing the amount of salt in recipes negatively affects the taste of the food. Researchers at one Japanese food company have teamed up with a major university in Tokyo to develop a pair of electric chopsticks that could help solve this problem. Using the power of a device worn on the wrist, one of the chopsticks delivers a weak electrical charge that enhances the flavor of salt in reduced-salt foods. The amount of electricity used is very low and is not enough to affect the human body, but it can adjust the function of ions like sodium chloride in order to alter the perception of taste. This adjustment can be used to either make the taste of food stronger or milder. In taste tests, people on reduced sodium diets experienced greater flavor when using these chopsticks.\n" +
          "\n" +
          "Question 25. What does the talk mainly discuss?\n" +
          "Question 26. All of the following are true about the chopsticks mentioned EXCEPT __________.\n" +
          "Question 27. Based on the talk, which of the following people should use the chopsticks?\n" +
          "\n" +
          "Talk II\n" +
          "On the morning of March 18, 1990, two men dressed as police officers parked their vehicle near the employee entrance of the Isabella Stewart Gardner Museum in Boston, Massachusetts, in the United States. The two men pushed the museum buzzer and said they were responding to a disturbance. They asked to enter the museum. Although it was against the rules, the security guard on duty permitted them through this side entrance. The two fake policemen asked the guard to step away from his watch desk. They then handcuffed and tied up both him and another security guard in the museum's basement. Eighty-one minutes later, the thieves left with thirteen works of art whose value totaled half a billion U.S. dollars. To this day, the crime remains unsolved. The museum offers a 10 million U.S. dollar reward for any information that would help lead to the safe return of the stolen art. These pieces include paintings by Dutch artists, an ancient Chinese bronze beaker, and charcoal sketches. However, a separate reward of 100,000 U.S. dollars is also being offered for information that leads to the return of a bronze eagle statue. If you have any information, you should contact the museum directly via email.\n" +
          "\n" +
          "Question 28. Who is this talk aimed at?\n" +
          "Question 29. What mistake did the guard on duty at the Isabella Stewart Gardner Museum make?\n" +
          "Question 30. For which artwork can someone receive a reward of 100,000 U.S. dollars?\n" +
          "\n" +
          "End of the Listening Test",
        questions: [],
      },
      reading: { expectedCount: 60, questions: [] },
      writing: { expectedCount: 30, questions: [] },
    },
  ],
};
