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
      }
    ],
  },
};
