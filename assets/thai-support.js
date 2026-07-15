window.SMCP_THAI_TRANSLATIONS = {
  "u1-main": {
    "title": "ภาพรวม: ตัวบ่งชี้ข้อความคือป้ายกำกับความปลอดภัย",
    "summary": "ตัวบ่งชี้ช่วยให้ผู้ฟังรู้วัตถุประสงค์ของข้อความก่อนรับรายละเอียด จึงลดความกำกวมเมื่อสัญญาณไม่ชัดหรือสถานการณ์เร่งด่วน.",
    "html": "<p>ตัวบ่งชี้ข้อความ (message marker) ไม่ใช่คำตกแต่ง แต่เป็น <strong>ป้ายกำกับหน้าที่ของข้อความ</strong> ที่วางไว้ก่อนรายละเอียด ผู้ฟังจึงรู้ทันทีว่าข้อความต่อไปเป็นคำสั่ง คำแนะนำ คำเตือน ข้อมูล คำถาม คำตอบ คำขอ หรือความตั้งใจ</p>\n<p>หลักคิดที่สำคัญที่สุดคือให้ถามตนเองก่อนพูดว่า <strong>“วัตถุประสงค์ของข้อความนี้คืออะไร?”</strong> จากนั้นเลือกตัวบ่งชี้เพียงชนิดเดียวที่ตรงที่สุด แล้วใช้รูปประโยคที่สอดคล้องกับตัวบ่งชี้นั้น</p>\n<ul><li>ผู้ฟังต้องลงมือทำ → Instruction หรือ Request</li><li>มีอันตราย → Warning</li><li>แจ้งข้อเท็จจริง → Information</li><li>แจ้งแผนในอนาคต → Intention</li></ul>"
  },
  "u1-grammar": {
    "title": "ไวยากรณ์: ตัวบ่งชี้ควบคุมรูปประโยค",
    "summary": "เมื่อตัวบ่งชี้เปลี่ยน รูปประโยคและระดับอำนาจของข้อความก็เปลี่ยนตาม จึงไม่ควรผสมหลายวัตถุประสงค์ในประโยคเดียว.",
    "html": "<p>ตัวบ่งชี้แต่ละชนิดเชื่อมกับโครงสร้างไวยากรณ์ที่ต่างกัน การเลือกตัวบ่งชี้ที่ถูกต้องจึงช่วยเลือกประโยคที่ถูกต้องด้วย</p>\n<table><tr><th>ตัวบ่งชี้</th><th>รูปประโยคที่ใช้บ่อย</th></tr><tr><td>Instruction</td><td>คำกริยารูปคำสั่ง เช่น Reduce speed.</td></tr><tr><td>Advice</td><td>should หรือคำแนะนำสั้น ๆ</td></tr><tr><td>Warning</td><td>ข้อความอันตรายตรงประเด็น</td></tr><tr><td>Information</td><td>ประโยคบอกเล่าข้อเท็จจริงหรือสถานะ</td></tr><tr><td>Question</td><td>คำถามตรงครั้งละหนึ่งประเด็น</td></tr><tr><td>Answer</td><td>คำตอบตรงหรือการทวนคำสั่ง</td></tr><tr><td>Request</td><td>I require… / I request permission to…</td></tr><tr><td>Intention</td><td>I will + คำกริยา</td></tr></table>"
  },
  "u1-instruction": {
    "title": "Instruction: คำสั่งและการกระทำที่ต้องทำ",
    "summary": "ใช้คำกริยารูปคำสั่งและระบุการกระทำให้วัดผลได้ อย่าทำให้คำสั่งฟังเหมือนคำถามสุภาพ.",
    "html": "<p>หลัง <strong>Instruction</strong> ใช้คำกริยารูปพื้นฐาน เช่น <em>Reduce speed to six knots.</em> หรือรูปห้าม <em>Do not enter the fairway.</em> คำสั่งควรระบุการกระทำ เป้าหมาย ตัวเลข หรือเวลาที่ชัดเจน ไม่ควรถามว่า “Can you…?” เพราะอาจฟังเหมือนเป็นทางเลือก</p>"
  },
  "u1-advice": {
    "title": "Advice: คำแนะนำเพื่อความปลอดภัย",
    "summary": "Advice แนะนำสิ่งที่ควรทำ แต่ระดับอำนาจต่างจาก Instruction จึงควรแยกให้ชัด.",
    "html": "<p>หลัง <strong>Advice</strong> มักใช้ <em>should</em> หรือคำแนะนำสั้น เช่น <em>You should keep clear of the traffic lane.</em> และ <em>Navigate with caution.</em> ใช้เมื่อผู้พูดแนะนำแนวทางที่ปลอดภัย แต่ไม่ได้ออกคำสั่งโดยตรง</p>"
  },
  "u1-warning": {
    "title": "Warning: แจ้งอันตรายทันที",
    "summary": "เริ่มด้วยอันตราย ไม่เกริ่นยาว และใช้ Present Continuous เมื่ออันตรายกำลังพัฒนา.",
    "html": "<p>หลัง <strong>Warning</strong> ให้ระบุอันตรายทันที เช่น <em>Risk of collision exists.</em> หรือ <em>You are standing into shallow water.</em> ใช้ Present Simple สำหรับความเสี่ยงทั่วไป และ Present Continuous เมื่ออันตรายกำลังเกิดขึ้นหรือเพิ่มขึ้น</p>"
  },
  "u1-information": {
    "title": "Information: ข้อเท็จจริง สถานะ และการสังเกต",
    "summary": "เลือก tense ตามเวลา: ข้อมูลคงที่ใช้ Present Simple เหตุการณ์กำลังเกิดใช้ Present Continuous และสถานะอุปกรณ์มักใช้ Passive Voice.",
    "html": "<p><strong>Information</strong> ใช้รายงานข้อมูลที่ตรวจสอบได้ เช่น ตำแหน่ง กินน้ำลึก สถานะเครื่องจักร หรือเหตุการณ์ที่เกิดขึ้นแล้ว เลือก tense ให้สัมพันธ์กับเวลา และหลีกเลี่ยงการแทรกคำสั่งไว้ภายใต้ Information</p>"
  },
  "u1-question": {
    "title": "Question: ขอข้อมูลที่เฉพาะเจาะจง",
    "summary": "ถามครั้งละหนึ่งเรื่องและใช้คำถามตรง ไม่ใช้ Question เมื่อต้องการความช่วยเหลือหรือบริการ.",
    "html": "<p>หลัง <strong>Question</strong> ให้ถามข้อมูลที่ต้องการโดยตรง เช่น <em>What are your intentions?</em> หรือ <em>What is your present course?</em> หากต้องการ tug หรือ pilot ให้ใช้ <strong>Request</strong> ไม่ใช่ Question</p>"
  },
  "u1-answer": {
    "title": "Answer: ตอบตรงและทวนข้อมูลสำคัญ",
    "summary": "คำตอบต้องมีข้อมูลครบพอให้ตรวจสอบ ไม่ควรตอบเพียง OK ในเรื่องที่มีผลต่อความปลอดภัย.",
    "html": "<p><strong>Answer</strong> ใช้ตอบคำถามหรือทวนคำสั่ง เช่น <em>My present course is zero-eight-five degrees.</em> การทวนรายละเอียดสำคัญช่วยให้ผู้ส่งตรวจสอบความเข้าใจและแก้ไขได้ทันที</p>"
  },
  "u1-request": {
    "title": "Request: ขอความช่วยเหลือ บริการ หรืออนุญาต",
    "summary": "ระบุสิ่งที่ต้องการตรง ๆ ด้วย I require หรือ I request permission to.",
    "html": "<p>หลัง <strong>Request</strong> ใช้รูปแบบที่ชัด เช่น <em>I require tug assistance.</em> หรือ <em>I request permission to enter the fairway.</em> ควรระบุจำนวน ประเภท หรือระดับความเร่งด่วนเมื่อมีข้อมูล</p>"
  },
  "u1-intention": {
    "title": "Intention: แจ้งแผนการปฏิบัติของเรือ",
    "summary": "ใช้ I will + คำกริยา เพื่อให้แผนชัดและสั้นกว่าภาษาพูดทั่วไป.",
    "html": "<p>หลัง <strong>Intention</strong> ใช้ <em>I will + base verb</em> เช่น <em>I will alter course to starboard.</em> หรือ <em>I will pass astern of you.</em> หลีกเลี่ยง “maybe” หรือ “I am thinking to…” เพราะทำให้แผนไม่แน่นอน</p>"
  },
  "u1-core": {
    "title": "ระบบตัดสินใจเลือกตัวบ่งชี้",
    "summary": "เริ่มจากวัตถุประสงค์ของข้อความ ไม่ใช่เริ่มจากคำศัพท์ที่จำได้ และตรวจว่าประโยคมีหน้าที่เดียวชัดเจน.",
    "html": "<p>ใช้ลำดับคิดต่อไปนี้ก่อนพูด:</p><ol><li>ระบุสถานการณ์และผู้ฟัง</li><li>กำหนดวัตถุประสงค์หลักเพียงหนึ่งอย่าง</li><li>เลือกตัวบ่งชี้</li><li>สร้างประโยคสั้นด้วยคำมาตรฐาน</li><li>เพิ่มตัวเลข ตำแหน่ง เวลา หรือการทวนคำสั่งตามความจำเป็น</li></ol><p>หากประโยคมีทั้งคำสั่งและข้อมูล ควรแบ่งเป็นสอง message units แทนการรวมกันจนความหมายคลุมเครือ</p>"
  },
  "u1-scenario": {
    "title": "แนวทางวิเคราะห์สถานการณ์รวมตัวบ่งชี้ทั้ง 8",
    "summary": "แยกสถานการณ์เป็นช่วง ๆ แล้วกำหนดวัตถุประสงค์ของแต่ละข้อความ ก่อนเขียนบทสนทนาที่ใช้ตัวบ่งชี้ครบ.",
    "html": "<p>อย่าพยายามใส่ตัวบ่งชี้ทั้ง 8 ลงในประโยคเดียว ให้แบ่งสถานการณ์ตามเหตุการณ์ เช่น VTS ให้คำสั่ง เรือรายงานสถานะ เรือถามข้อมูล VTS ตอบ เรือขอความช่วยเหลือ และเรือแจ้งความตั้งใจ</p><p>คำตอบที่ดีต้องอธิบายได้ว่า <strong>ทำไม</strong> ตัวบ่งชี้แต่ละคำจึงเหมาะกับข้อความนั้น และต้องใช้รูปไวยากรณ์ที่สอดคล้องกัน</p>"
  },
  "u2-main": {
    "title": "ภาพรวม: เปลี่ยนภาษาพูดทั่วไปเป็นภาษาวิทยุที่ควบคุมได้",
    "summary": "การติดต่อ VHF ประจำวันต้องมีโครงสร้าง: เรียกสถานี ระบุตัวตน แจ้งหน้าที่ของข้อความ ให้ข้อมูล และปิดการติดต่ออย่างถูกต้อง.",
    "html": "<p>การสื่อสารประจำวันเป็นพื้นฐานของเหตุการณ์ที่ซับซ้อนทั้งหมด การเรียกที่ดีต้องทำให้ชัดว่า <strong>ใครเรียกใคร</strong> และต้องส่งข้อมูลเป็นช่วงสั้น ๆ ที่สามารถทวนได้</p><p>นิสัยที่ควรฝึกคืออ่านตัวเลขแยกหลัก ใช้ phonetic alphabet เมื่อจำเป็น รายงานตำแหน่งด้วยจุดอ้างอิง และไม่ใส่หลายคำถามใน transmission เดียว</p>"
  },
  "u2-grammar": {
    "title": "ไวยากรณ์ VHF: สั้น ตรง และคาดเดาโครงสร้างได้",
    "summary": "ไวยากรณ์มีหน้าที่ทำให้วัตถุประสงค์ชัด ไม่ได้มีไว้สร้างประโยคสุภาพยาว ๆ.",
    "html": "<p>ข้อความ VHF ควรแบ่งเป็นหน่วย: station called → station calling → marker → details → Over/Out. โครงสร้างที่คงที่ช่วยให้ผู้ฟังรับข้อมูลได้แม้มีเสียงรบกวน</p><p>เนื้อหาหลักของหน่วยนี้คือ Imperative, Present Simple, direct questions, short answers และการใช้ Over/Out อย่างถูกต้อง</p>"
  },
  "u2-imperative": {
    "title": "Imperative สำหรับควบคุมการติดต่อ",
    "summary": "ใช้คำกริยารูปพื้นฐาน เช่น Change, Speak, Stand by และ Do not + verb สำหรับข้อห้าม.",
    "html": "<p>คำสั่งวิทยุไม่จำเป็นต้องมีประธานหรือคำสุภาพยาว เช่น <em>Change to channel one-two.</em> และ <em>Stand by on channel one-two.</em> การพูดสั้นช่วยลดการใช้ช่องสัญญาณและลดความคลาดเคลื่อน</p>"
  },
  "u2-present-simple": {
    "title": "Present Simple สำหรับข้อมูลคงที่ของเรือ",
    "summary": "ใช้รายงานข้อมูลประจำ เช่น call sign, draught, cargo และการปฏิบัติปกติ ไม่ใช้ Present Continuous กับข้อมูลถาวร.",
    "html": "<p>ตัวอย่าง: <em>My maximum draught is seven decimal eight metres.</em> และ <em>We maintain listening watch on channel one-six.</em> Present Continuous เหมาะกับสิ่งที่กำลังเกิด ไม่ใช่ข้อมูลประจำของเรือ</p>"
  },
  "u2-questions": {
    "title": "การถามและตอบข้อมูลประจำ",
    "summary": "ถามครั้งละหนึ่งข้อมูลด้วย What is…? หรือ Are you…? และตอบด้วยข้อมูลตรง ไม่อธิบายเกินจำเป็น.",
    "html": "<p>คำถามที่ดี เช่น <em>What is your ETA at pilot station?</em> คำตอบควรทวนหัวข้อ เช่น <em>My ETA at pilot station is one-six-three-zero local time.</em> เมื่อขออนุญาตหรือบริการ ให้ใช้ Request แยกจาก Question</p>"
  },
  "u2-over-out": {
    "title": "Over และ Out",
    "summary": "Over หมายถึงรอคำตอบ ส่วน Out หมายถึงจบการติดต่อ จึงห้ามใช้ “Over and out” พร้อมกัน.",
    "html": "<p>เลือกคำปิดตามหน้าที่ของข้อความ: ใช้ <strong>Over</strong> เมื่อผู้ฟังต้องตอบ และใช้ <strong>Out</strong> เมื่อการแลกเปลี่ยนเสร็จสิ้น การใช้ทั้งสองคำพร้อมกันเป็นการส่งสัญญาณที่ขัดกัน</p>"
  },
  "u2-errors": {
    "title": "ข้อผิดพลาดไวยากรณ์ที่พบบ่อย",
    "summary": "หลีกเลี่ยงประโยคยาว ตัวเลขไม่ชัด และ tense ที่ไม่เหมาะกับข้อมูลคงที่.",
    "html": "<p>แทน “Could you maybe tell me…” ด้วยคำถามตรง แทน “Go to twelve” ด้วย <em>Change to channel one-two.</em> และแทน “My call sign is being…” ด้วย <em>My call sign is…</em></p>"
  },
  "u2-core": {
    "title": "Radio Check และระดับ Readability 1–5",
    "summary": "ขอ radio check บนช่องที่เหมาะสม และตอบด้วยระดับมาตรฐาน ไม่ใช้คำคลุมเครืออย่าง “I hear you fine.”",
    "html": "<p>ระดับ 1 = ฟังไม่ได้, 2 = ฟังได้เป็นบางครั้ง, 3 = ฟังได้ด้วยความยาก, 4 = ฟังได้, 5 = ฟังได้ชัดสมบูรณ์ การตรวจควรสั้นและไม่รบกวนช่อง distress/safety โดยไม่จำเป็น</p>"
  },
  "u2-scenario": {
    "title": "แนวทางตอบสถานการณ์ VHF และ VTS",
    "summary": "จัดลำดับข้อมูล: ตัวตน ตำแหน่ง course/speed draught ETA และทวนคำสั่งเปลี่ยนช่องอย่างชัดเจน.",
    "html": "<p>ในการเขียนบทสนทนา ให้แสดงการเรียกบน channel one-six การย้ายไป working channel การตรวจ readability และรายงานข้อมูลที่ VTS ขอ ใช้ phonetic alphabet สำหรับ call sign และปิดด้วย Over หรือ Out ตามบริบท</p>"
  },
  "u3-main": {
    "title": "ภาพรวม: จัดลำดับความสำคัญก่อนเลือกภาษา",
    "summary": "ก่อนสร้างข้อความต้องจำแนกให้ถูกว่าเป็น MAYDAY, PAN-PAN หรือ SECURITE เพราะระดับความสำคัญกำหนดช่องทางและเนื้อหาที่ต้องส่ง.",
    "html": "<p>เหตุฉุกเฉินต้องสื่อสารอย่างมีโครงสร้าง ไม่ใช่ด้วยอารมณ์ ผู้พูดควรรายงาน vessel identity, position, nature of emergency, assistance required และ persons on board ตามลำดับ</p><p>สถานการณ์สามารถเปลี่ยนระดับได้ เช่น เริ่มจาก PAN-PAN เมื่อเครื่องจักรขัดข้อง แล้วเปลี่ยนเป็น MAYDAY หากเกิดไฟไหม้หรือเสี่ยงต่อชีวิต</p>"
  },
  "u3-grammar": {
    "title": "ไวยากรณ์เหตุฉุกเฉิน: ความสามารถ ข้อบังคับ และเหตุการณ์ที่กำลังพัฒนา",
    "summary": "ใช้ cannot เพื่อบอกข้อจำกัด must/must not สำหรับข้อบังคับ และ Present Continuous สำหรับเหตุที่กำลังรุนแรงขึ้น.",
    "html": "<p>ไวยากรณ์ต้องช่วยให้ศูนย์ช่วยเหลือทราบว่าลูกเรือทำอะไรได้หรือไม่ได้ สิ่งใดต้องทำทันที และสถานการณ์เปลี่ยนอย่างไร ควรหลีกเลี่ยง contractions และคำไม่แน่นอน</p>"
  },
  "u3-can-cannot": {
    "title": "can / cannot สำหรับความสามารถของเรือ",
    "summary": "ใช้ cannot แบบเต็มเพื่อให้ได้ยินชัด เช่น I cannot steer หรือ I cannot control flooding.",
    "html": "<p><strong>can</strong> ระบุความสามารถที่ยังมีอยู่ ส่วน <strong>cannot</strong> ระบุข้อจำกัดที่มีผลต่อการช่วยเหลือหรือการเดินเรือ ควรตามด้วยคำกริยาที่เฉพาะเจาะจง เช่น steer, manoeuvre, proceed, control</p>"
  },
  "u3-must": {
    "title": "must / must not สำหรับข้อบังคับและข้อห้าม",
    "summary": "ใช้เมื่อการกระทำเป็นสิ่งจำเป็นเพื่อความปลอดภัย ไม่ใช้คำอ่อนอย่าง maybe หรือ try to.",
    "html": "<p>ตัวอย่าง: <em>Crew must proceed to muster stations.</em> และ <em>Personnel must not enter the engine room.</em> ในเหตุฉุกเฉิน ความชัดเจนของหน้าที่สำคัญกว่าความสุภาพ</p>"
  },
  "u3-require": {
    "title": "require / request / need ในการขอความช่วยเหลือ",
    "summary": "รูปมาตรฐานคือ Request. I require… พร้อมระบุชนิดความช่วยเหลือและความเร่งด่วน.",
    "html": "<p>เช่น <em>I require immediate assistance.</em>, <em>I require medical evacuation.</em> และ <em>I require tug assistance.</em> คำว่า “We need help” กว้างเกินไปและไม่บอกประเภทการตอบสนองที่ต้องการ</p>"
  },
  "u3-present-cont": {
    "title": "Present Continuous สำหรับเหตุที่กำลังเกิด",
    "summary": "ใช้รายงานไฟที่กำลังลุกลาม น้ำที่กำลังเข้า เรือที่กำลังเอียง หรือกำลังลอยไปยังอันตราย.",
    "html": "<p>ตัวอย่าง: <em>Fire is spreading to accommodation.</em> และ <em>Vessel is drifting towards shallow water.</em> รูปนี้แสดงว่าความเสี่ยงยังไม่หยุดและผู้รับต้องติดตามการเปลี่ยนแปลง</p>"
  },
  "u3-message-order": {
    "title": "ลำดับข้อความฉุกเฉิน",
    "summary": "ส่ง priority signal → identity → position → nature → assistance → persons on board → useful information → Over.",
    "html": "<p>ลำดับคงที่ช่วยให้สถานีชายฝั่งและ SAR จดข้อมูลสำคัญได้เร็ว แม้การส่งจะขาดช่วง ตำแหน่งควรมาเร็วและอ่านตัวเลขอย่างเป็นระบบ</p>"
  },
  "u3-errors": {
    "title": "ข้อผิดพลาดฉุกเฉินที่พบบ่อย",
    "summary": "อย่าใช้ priority ผิด อย่าลืมตำแหน่ง และอย่าใช้ประโยคอารมณ์แทนข้อมูลที่วัดได้.",
    "html": "<p>แทน “Everything is bad” ด้วย nature of distress และ assistance required ที่ชัด หากเป็นคำเตือนหมอกให้ใช้ SECURITE ไม่ใช่ MAYDAY และหากสถานการณ์รุนแรงขึ้นต้องประกาศการเปลี่ยนระดับทันที</p>"
  },
  "u3-core": {
    "title": "ระบบ 3 ระดับ: MAYDAY, PAN-PAN, SECURITE",
    "summary": "MAYDAY = อันตรายร้ายแรงใกล้เกิด, PAN-PAN = เหตุเร่งด่วน, SECURITE = ข้อมูลความปลอดภัยสำหรับการเดินเรือหรืออากาศ.",
    "html": "<p>การเลือกผิดอาจรบกวนช่องฉุกเฉินหรือทำให้การช่วยเหลือล่าช้า ผู้เรียนต้องอธิบายเหตุผลของการเลือก priority ได้ ไม่ใช่จำเพียงชื่อ</p>"
  },
  "u3-scenario": {
    "title": "แนวทางวิเคราะห์สถานการณ์ที่ทวีความรุนแรง",
    "summary": "ระบุจุดที่สถานการณ์เปลี่ยนจาก urgency เป็น distress แล้วเขียนข้อความใหม่ให้ครบองค์ประกอบ.",
    "html": "<p>เปรียบเทียบข้อมูลก่อนและหลังการเปลี่ยนระดับ เช่น จากเครื่องจักรหยุดแต่ยังควบคุมได้ ไปสู่ไฟไหม้ที่ควบคุมไม่ได้ จากนั้นแก้ nature of emergency, assistance required และ intention ให้สอดคล้องกับความเสี่ยงใหม่</p>"
  },
  "u4-main": {
    "title": "ภาพรวม: ความแม่นยำในน่านน้ำจำกัด",
    "summary": "คำเล็ก ๆ เช่น on, above, to และ alongside มีผลต่อด้าน ความสูง และตำแหน่ง จึงเป็นข้อมูลความปลอดภัย ไม่ใช่เพียงไวยากรณ์.",
    "html": "<p>การรับส่ง pilot เกิดใกล้น้ำตื้น การจราจร และตัวเรือขนาดเล็ก ความผิดพลาดเรื่อง port/starboard ความสูงบันได หรือเวลาอาจก่ออุบัติเหตุได้ ผู้เรียนต้องรายงานและทวนรายละเอียดทุกจุด</p>"
  },
  "u4-grammar": {
    "title": "ไวยากรณ์ Pilotage: ตำแหน่ง การเคลื่อนที่ คำสั่ง และความพร้อม",
    "summary": "ใช้ prepositions ให้ตรงความสัมพันธ์ ใช้ imperative สำหรับ helm/engine orders และใช้ will สำหรับแผนที่ชัดเจน.",
    "html": "<p>หน่วยนี้เน้นการบอก “ที่ไหน ไปทางไหน สูงเท่าไร และพร้อมหรือยัง” คำตอบควรมี side, height, station และ time ครบเมื่อเกี่ยวข้อง</p>"
  },
  "u4-place": {
    "title": "Prepositions of place สำหรับ pilot ladder",
    "summary": "on = อยู่บนด้าน, above = สูงกว่า, alongside = อยู่ข้างเรือ, at = จุดเฉพาะ.",
    "html": "<p>เช่น <em>Rig pilot ladder on starboard side, two metres above water.</em> การเปลี่ยน preposition อาจเปลี่ยนตำแหน่งจริง จึงต้องฝึกพร้อมภาพหรือสถานการณ์</p>"
  },
  "u4-movement": {
    "title": "Prepositions of movement สำหรับการเข้าเทียบ",
    "summary": "to, from, into, out of, towards และ past แสดงเส้นทางสัมพันธ์กับ fairway, buoy และ berth.",
    "html": "<p>ตัวอย่าง: <em>Proceed to pilot boarding ground Alpha.</em>, <em>Enter the fairway with caution.</em> และ <em>Pass Buoy Charlie on your port side.</em> ควรระบุจุดอ้างอิงชัดเจน</p>"
  },
  "u4-imperatives": {
    "title": "Imperatives สำหรับ helm และ engine orders",
    "summary": "คำสั่งต้องสั้นและทวนแบบคำต่อคำ เช่น Port ten, Midships, Dead slow ahead.",
    "html": "<p>ห้ามเปลี่ยนเป็นภาษาพูด เช่น “Turn left a little.” ผู้รับทวนคำสั่งทันที และเมื่อทำสำเร็จอาจรายงานผล เช่น <em>Course zero-nine-zero steadied.</em></p>"
  },
  "u4-future": {
    "title": "Future arrangements และ Intention",
    "summary": "ใช้ I will + verb สำหรับแผนการเคลื่อนเรือ และ will be + past participle สำหรับการจัดเตรียมอุปกรณ์.",
    "html": "<p>เช่น <em>I will make a lee on port side.</em> และ <em>Pilot ladder will be rigged on starboard side.</em> รูปประโยคต้องชัดว่าเป็นแผนของเรือหรือสถานะที่คาดว่าจะพร้อม</p>"
  },
  "u4-readiness": {
    "title": "การรายงานความพร้อม",
    "summary": "ใช้ ready to + verb หรือ is/are + past participle เพื่อบอกว่าสามารถเริ่มปฏิบัติได้.",
    "html": "<p>เช่น <em>Fore station ready to let go anchor.</em> และ <em>Pilot ladder is rigged.</em> หากยังไม่พร้อม ให้ระบุสิ่งที่ขาดหรือเวลาที่คาดว่าจะพร้อม</p>"
  },
  "u4-errors": {
    "title": "ข้อผิดพลาด Pilotage ที่พบบ่อย",
    "summary": "หลีกเลี่ยง left/right, ห้ามละด้านหรือความสูง และอย่าตอบเพียง OK.",
    "html": "<p>คำตอบที่ปลอดภัยต้องทวนรายละเอียด เช่น <em>Rigging pilot ladder on starboard side, two metres above water.</em> เพื่อให้ผู้ส่งตรวจสอบได้</p>"
  },
  "u4-core": {
    "title": "Standard Helm and Engine Orders",
    "summary": "คำสั่งมาตรฐานลดความเสี่ยงจากสำเนียงและเสียงรบกวน ต้องทวนทันทีและรายงานเมื่อคำสั่งถูกดำเนินการ.",
    "html": "<p>ฝึกเป็นวงจร: order → exact read-back → execution report. ตัวอย่างคำสั่งสำคัญ ได้แก่ Port ten, Hard-a-starboard, Midships, Steady, Stop engine และ Dead slow astern</p>"
  },
  "u4-scenario": {
    "title": "แนวทางตอบสถานการณ์ Pilot Boarding และ Tug",
    "summary": "แยกการสื่อสารเป็น VHF arrangement, deck preparation, helm/engine orders และ tug coordination.",
    "html": "<p>คำตอบควรระบุ ETA, boarding ground, side, ladder height, lee side, tug position และ read-back ทุกคำสั่งสำคัญ หลีกเลี่ยงการรวมหลายคำสั่งโดยไม่มีการตอบรับ</p>"
  },
  "u5-main": {
    "title": "ภาพรวม: VHF สนับสนุน COLREGs แต่ไม่แทนที่",
    "summary": "ใช้วิทยุเพื่อแชร์ข้อมูล เตือนความเสี่ยง ถามความตั้งใจ และแจ้งการกระทำ แต่ความรับผิดชอบตาม COLREGs ยังคงอยู่.",
    "html": "<p>การตกลงทางวิทยุที่คลุมเครืออาจสร้างความมั่นใจผิด ผู้เรียนต้องใช้ข้อมูล radar/visual ที่วัดได้ และดำเนินการตามหน้าที่ give-way หรือ stand-on อย่างถูกต้อง</p>"
  },
  "u5-grammar": {
    "title": "ไวยากรณ์ Collision Avoidance: ความตั้งใจ เงื่อนไข และข้อมูลเรดาร์",
    "summary": "ใช้ will สำหรับแผน if-clause สำหรับเงื่อนไขสั้น และโครงสร้างคงที่สำหรับ bearing/range/CPA/TCPA.",
    "html": "<p>เป้าหมายคือเปลี่ยนภาพจราจรให้เป็นคำพูดที่วัดได้ ไม่ใช้คำว่า near, soon, right หรือ a little โดยไม่มีตัวเลขสนับสนุน</p>"
  },
  "u5-will": {
    "title": "will สำหรับความตั้งใจที่ชัด",
    "summary": "ใช้ Intention. I will + verb เพื่อแจ้งการเปลี่ยน course/speed หรือ passing arrangement.",
    "html": "<p>เช่น <em>I will alter course to starboard and pass astern of you.</em> ควรระบุทิศทางและการกระทำที่สังเกตได้ หลีกเลี่ยง “I try” หรือ “maybe”</p>"
  },
  "u5-conditionals": {
    "title": "if-clause สำหรับการประสานงาน",
    "summary": "ใช้ if + Present Simple, will + verb อย่างสั้น โดยไม่สร้างข้อตกลงที่ขัด COLREGs.",
    "html": "<p>เช่น <em>If you maintain course and speed, I will pass astern of you.</em> ประโยคนี้ต้องสอดคล้องกับการประเมินความเสี่ยงและการกระทำที่ปลอดภัยจริง</p>"
  },
  "u5-radar": {
    "title": "Radar-to-Speech Grammar",
    "summary": "รายงาน target position → bearing → range → CPA → TCPA → risk/action ตามลำดับ.",
    "html": "<p>ตัวอย่าง: <em>Target on starboard bow, bearing zero-four-five degrees, range four decimal zero miles, CPA zero decimal three miles in twelve minutes.</em> รูปแบบคงที่ช่วยให้ bridge team เข้าใจภาพเดียวกัน</p>"
  },
  "u5-warning": {
    "title": "Warning Grammar",
    "summary": "ระบุอันตรายตรง ๆ และใช้ Present Continuous เมื่อเรือกำลังเข้าสู่อันตราย.",
    "html": "<p>เช่น <em>Warning. Risk of collision exists.</em> หรือ <em>You are standing into shallow water.</em> คำเตือนไม่ควรซ่อนอยู่หลังคำเกริ่นยาว</p>"
  },
  "u5-vague": {
    "title": "หลีกเลี่ยงคำเปรียบเทียบที่กำกวม",
    "summary": "แทน near/soon/left/right/a little ด้วย bearing, range, degrees, knots และ minutes.",
    "html": "<p>“You are too close” ควรเปลี่ยนเป็น <em>CPA is zero decimal two miles.</em> และ “turn right a little” ควรเปลี่ยนเป็น <em>Alter course to starboard ten degrees.</em></p>"
  },
  "u5-errors": {
    "title": "ข้อผิดพลาด Collision Avoidance ที่พบบ่อย",
    "summary": "อย่าใช้ tense ผิด อย่าขาดข้อมูล และอย่าใช้คำสัญญาไม่ชัดเจน.",
    "html": "<p>แยกให้ชัดระหว่าง <em>I will alter course</em> (แผน) กับ <em>I am altering course now</em> (กำลังทำ) และตรวจว่าข้อมูล radar ที่รายงานเป็นข้อมูลล่าสุด</p>"
  },
  "u5-core": {
    "title": "Radar-to-Speech และ COLREG Awareness",
    "summary": "ทุกข้อความควรยืนยันภาพจราจร ไม่ใช่แทนการเฝ้าระวัง การ plotting หรือการปฏิบัติตามกฎ.",
    "html": "<p>การกระทำหลีกเลี่ยงควร early, substantial และ readily apparent. VHF ใช้เมื่อช่วยลดความไม่แน่นอน แต่ไม่ควรทำให้ OOW หยุดประเมิน radar, AIS, visual bearing และสถานการณ์โดยรวม</p>"
  },
  "u5-scenario": {
    "title": "แนวทางวิเคราะห์ Crossing Situation",
    "summary": "ระบุ give-way/stand-on จากสถานการณ์ ประเมิน bearing/range/CPA/TCPA แล้วเขียน Warning, Question, Intention และ Answer ที่สอดคล้องกัน.",
    "html": "<p>คำตอบที่ดีต้องแสดงข้อมูลก่อนการกระทำ การแจ้งการกระทำ และการติดตามผลหลังเปลี่ยน course/speed พร้อมย้ำว่าการติดต่อไม่ลดหน้าที่ตาม COLREGs</p>"
  },
  "u6-main": {
    "title": "ภาพรวม: การสื่อสารภายในคือการควบคุมความเสี่ยง",
    "summary": "คำสั่งและ read-back ใช้ควบคุมเชือก winch tug pull pump และ suspended load ซึ่งล้วนมีพลังงานอันตราย.",
    "html": "<p>ในพื้นที่เสียงดังและมีแรงดึงสูง คำว่า “OK” ไม่เพียงพอ วงจรสื่อสารต้องมี order → read-back → status/confirmation และ correction เมื่อข้อมูลไม่ตรง</p>"
  },
  "u6-grammar": {
    "title": "ไวยากรณ์ Mooring/Cargo: สั่ง กำลังทำ และทำเสร็จ",
    "summary": "Imperative = คำสั่ง, Present Continuous = กำลังทำ, Passive/Present Perfect = สถานะหรือผลที่เสร็จแล้ว.",
    "html": "<p>ผู้เรียนต้องแยกเวลาและสถานะให้ชัด เพราะ bridge ต้องรู้ว่า action ยังดำเนินอยู่หรือเสร็จพร้อมใช้งานแล้ว</p>"
  },
  "u6-passive": {
    "title": "Passive Voice สำหรับรายงานสถานะ",
    "summary": "ใช้เมื่อสถานะของ line, hatch, valve หรือ hose สำคัญกว่าผู้ที่ทำ.",
    "html": "<p>เช่น <em>All lines are made fast.</em>, <em>Hatch covers are secured.</em> และ <em>The manifold valve is closed.</em> รูปนี้ตอบคำถามว่า “ตอนนี้สถานะเป็นอย่างไร?”</p>"
  },
  "u6-present-perfect": {
    "title": "Present Perfect สำหรับงานที่เพิ่งเสร็จและมีผลตอนนี้",
    "summary": "ใช้ has/have been + past participle เพื่อรายงาน completion และ readiness.",
    "html": "<p>เช่น <em>The cargo hose has been connected and checked.</em> และ <em>The snap-back zone has been cleared.</em> เน้นผลปัจจุบัน ไม่ใช่เพียงเหตุการณ์ในอดีต</p>"
  },
  "u6-imperatives": {
    "title": "Imperatives สำหรับคำสั่ง mooring/cargo",
    "summary": "ใช้คำกริยา + object ที่เฉพาะ เช่น Heave in the head line, Stop cargo pump number two.",
    "html": "<p>อย่าใช้ “pull the rope” หรือ “do it now” เพราะไม่บอกชนิด line หรือ equipment ที่ต้องควบคุม คำสั่งห้ามควรระบุพื้นที่หรืออันตรายชัดเจน</p>"
  },
  "u6-present-cont": {
    "title": "Present Continuous สำหรับ action in progress",
    "summary": "ใช้ใน read-back และ live update เช่น Heaving in… หรือ Cargo loading is continuing…",
    "html": "<p>รูปนี้บอกว่าการกระทำเริ่มแล้วแต่ยังไม่เสร็จ Bridge จึงยังไม่ควรตีความว่า line made fast หรือ operation complete</p>"
  },
  "u6-closed-loop": {
    "title": "Closed-loop Grammar",
    "summary": "ผู้ส่งใช้ imperative ผู้รับทวนด้วย exact order หรือ Present Continuous แล้วรายงาน status.",
    "html": "<p>ตัวอย่าง: <strong>Instruction.</strong> Slack away the aft spring. → <strong>Answer.</strong> Slacking away the aft spring. → <strong>Information.</strong> Aft spring is slack. หากผิดให้ใช้ <em>Correction.</em> ทันที</p>"
  },
  "u6-errors": {
    "title": "ข้อผิดพลาด Mooring/Cargo ที่พบบ่อย",
    "summary": "อย่าใช้ rope แบบกว้าง ๆ อย่าตอบ OK และอย่ารายงาน completion ก่อนงานเสร็จจริง.",
    "html": "<p>ทุกคำตอบควรมี action + object เช่น <em>Heaving in the forward spring.</em> และทุก safety warning ควรระบุ hazard เช่น <em>Keep clear of snap-back zone.</em></p>"
  },
  "u6-core": {
    "title": "Closed-Loop Communication และ Read-back",
    "summary": "ข้อความไม่สมบูรณ์จนกว่าผู้รับจะทวนถูกและผู้ส่งตรวจสอบได้.",
    "html": "<p>ระบบนี้ลดการดึงผิดเส้น การเปิดวาล์วผิดตัว และการเริ่ม pump ก่อนพร้อม ควรฝึกภายใต้เสียงรบกวนและสถานการณ์ที่มีคำสั่งคล้ายกันเพื่อให้เกิดนิสัยจริง</p>"
  },
  "u6-scenario": {
    "title": "แนวทางตอบสถานการณ์ Unmooring และ Cargo Status",
    "summary": "แยก status report, operational order, read-back, safety warning และ completion report ให้ชัด.",
    "html": "<p>ตรวจว่า line แต่ละเส้นใช้ชื่อถูกต้อง ผู้รับทวน action/object ครบ และรายงานสถานะหลังดำเนินการ อย่าถือว่า stevedores clear หรือ hatch secured หากยังไม่มีรายงาน</p>"
  },
  "u7-main": {
    "title": "ภาพรวม: ขยายข้อความย่อโดยไม่เปลี่ยนความหมาย",
    "summary": "NAVTEX มีข้อมูลสั้นและหนาแน่น ผู้เรียนต้องรักษา hazard, area, position, time, movement และ advice ตามต้นฉบับ.",
    "html": "<p>ทักษะหลักคือการแปลง abbreviation เป็น spoken SMCP โดยไม่เติมข้อมูลที่ไม่มีและไม่ขยายระดับอันตรายเกินจริง ควรอ่านตัวเลขและพิกัดอย่างเป็นระบบ</p>"
  },
  "u7-grammar": {
    "title": "ไวยากรณ์ Weather/NAVTEX: คำบรรยาย Passive และข้อมูลตำแหน่ง",
    "summary": "ใช้คำคุณศัพท์มาตรฐาน คำวิเศษณ์บอกการเปลี่ยนแปลง Passive Voice สำหรับ hazard report และรูปแบบคงที่ของ position/time.",
    "html": "<p>ภาษาควรเป็นกลางและวัดได้ เช่น poor visibility, wind rapidly increasing, buoy light is extinguished ไม่ใช้ “very bad weather”</p>"
  },
  "u7-adjectives": {
    "title": "Adjectives สำหรับอากาศและ sea state",
    "summary": "ใช้คำมาตรฐาน เช่น good/moderate/poor visibility, rough sea, gale-force wind.",
    "html": "<p>คำคุณศัพท์ควรบอกประเภทและระดับที่มีความหมายทางปฏิบัติ หลีกเลี่ยง bad, big, terrible เพราะไม่ช่วยให้ผู้เดินเรือประเมินความเสี่ยง</p>"
  },
  "u7-adverbs": {
    "title": "Adverbs สำหรับการเปลี่ยนและความเข้ม",
    "summary": "rapidly, gradually, locally, temporarily และ approximately ช่วยอธิบายการเปลี่ยนแปลงอย่างควบคุม.",
    "html": "<p>เช่น <em>Wind is rapidly increasing.</em> และ <em>Visibility temporarily reduced by squalls.</em> คำวิเศษณ์ต้องไม่ทำให้ความหมายของ forecast เปลี่ยน</p>"
  },
  "u7-passive": {
    "title": "Passive Structures ในคำเตือน",
    "summary": "ใช้เมื่อ hazard สำคัญกว่าผู้รายงาน เช่น container reported, light extinguished, area affected.",
    "html": "<p>Passive Voice ทำให้ข้อความสั้นและมุ่งที่สภาพการเดินเรือ เช่น <em>Drifting container reported in position…</em> ผู้เรียนควรระบุแหล่งข้อมูลเฉพาะเมื่อจำเป็นต่อความน่าเชื่อถือ</p>"
  },
  "u7-navtex": {
    "title": "การขยาย NAVTEX abbreviation",
    "summary": "ขยาย VIS, WND, PSN, KEEP CLR และคำย่ออื่นเป็นประโยคเต็มโดยคงข้อมูลเดิม.",
    "html": "<p>ขั้นตอน: ระบุประเภทข้อความ → พื้นที่ → hazard → position/time → movement/weather → advice. หากต้นฉบับไม่บอกข้อมูล ห้ามเดาหรือเติม</p>"
  },
  "u7-position": {
    "title": "Position และ Time Grammar",
    "summary": "อ่าน degrees/minutes ทิศ N/S/E/W และ UTC ทีละหลักอย่างเป็นระบบ.",
    "html": "<p>แทน “near here” ด้วยพิกัดหรือ bearing/distance จากจุดอ้างอิง อ่าน decimal ว่า “decimal” และรายงานเวลาสี่หลักพร้อม UTC หรือ local time ให้ชัด</p>"
  },
  "u7-errors": {
    "title": "ข้อผิดพลาด Weather/NAVTEX ที่พบบ่อย",
    "summary": "อย่าใช้คำกว้าง อย่าเปลี่ยน area และอย่ารายงานสิ่งที่ไม่ได้อยู่ในข้อความต้นฉบับ.",
    "html": "<p>แทน “something floating somewhere” ด้วย hazard + position และแทน “storm everywhere” ด้วย forecast area ที่ระบุจริง ความแม่นยำสำคัญกว่าความน่าตื่นเต้น</p>"
  },
  "u7-core": {
    "title": "NAVTEX Decoding",
    "summary": "แยก message type, affected area, position, time, hazard และ recommended action ก่อนพูด.",
    "html": "<p>การ decode ที่ดีควรตรวจทุกส่วนกับข้อความต้นฉบับ หลังแปลงเป็น spoken English ให้ทวนพิกัดและตัวเลขอีกครั้งเพื่อป้องกันการอ่านผิด</p>"
  },
  "u7-scenario": {
    "title": "แนวทางตอบสถานการณ์ NAVTEX และ SECURITE",
    "summary": "ถอดข้อความย่อเป็นข้อมูลทีละส่วน แล้วสร้าง broadcast ที่มี Warning, Information และ Advice.",
    "html": "<p>คำตอบควรอ่าน unlit buoy, drifting container, wind/visibility และตำแหน่งแยกกันอย่างชัดเจน จากนั้นรวมเป็น SECURITE broadcast ที่ไม่เติมข้อมูลนอกต้นฉบับ</p>"
  }
};
