// ===== 工作场景课程数据 =====
const workData = [
  {
    day: 1,
    category: "work",
    level: 1,
    title: "Daily Stand-up Meeting",
    titleCn: "每日站会",
    dialogue: [
      { speaker: "A", role: "Scrum Master", en: "Good morning, everyone. Let's start our daily stand-up.", cn: "大家早上好，我们开始每日站会吧。", keyWords: ["stand-up"], grammar: "Let's + 动词原形，表示建议" },
      { speaker: "B", role: "Developer Tom", en: "Yesterday I finished the login page design.", cn: "昨天我完成了登录页面的设计。", keyWords: ["finished", "login page"], grammar: "一般过去时: finished" },
      { speaker: "A", role: "Scrum Master", en: "Great. What's your plan for today?", cn: "很好。你今天的计划是什么？", keyWords: ["plan"] },
      { speaker: "B", role: "Developer Tom", en: "Today I'll work on the API integration.", cn: "今天我会做API对接。", keyWords: ["work on", "API integration"], grammar: "will + 动词原形，表示将来计划" },
      { speaker: "A", role: "Scrum Master", en: "Any blockers?", cn: "有什么阻碍吗？", keyWords: ["blockers"] },
      { speaker: "B", role: "Developer Tom", en: "No blockers so far. Everything is on track.", cn: "目前没有阻碍，一切都在正轨上。", keyWords: ["on track"] },
      { speaker: "A", role: "Scrum Master", en: "Lisa, how about you?", cn: "Lisa，你呢？", keyWords: [] },
      { speaker: "C", role: "Developer Lisa", en: "I'm still working on the database migration. I might need some help from Tom.", cn: "我还在做数据库迁移。可能需要Tom帮忙。", keyWords: ["database migration", "need some help"], grammar: "might + 动词原形，表示可能" },
      { speaker: "A", role: "Scrum Master", en: "Tom, can you help Lisa after lunch?", cn: "Tom，你午饭后能帮Lisa吗？", keyWords: ["help", "after lunch"] },
      { speaker: "B", role: "Developer Tom", en: "Sure, no problem.", cn: "当然，没问题。", keyWords: ["no problem"] }
    ],
    vocabulary: [
      { word: "stand-up", phonetic: "/ˈstænd ʌp/", meaning: "站会（敏捷开发中的每日简短会议）", example: "We have a stand-up every morning at 9.", exampleCn: "我们每天早上9点有站会。" },
      { word: "blocker", phonetic: "/ˈblɒkər/", meaning: "阻碍，障碍", example: "Is there any blocker preventing you from finishing the task?", exampleCn: "有什么阻碍你完成任务的吗？" },
      { word: "on track", phonetic: "/ɒn træk/", meaning: "在正轨上，按计划进行", example: "The project is on track for the deadline.", exampleCn: "项目按计划在截止日期前推进。" },
      { word: "API integration", phonetic: "/ˌeɪ piː ˈaɪ ˌɪntɪˈɡreɪʃn/", meaning: "API对接/集成", example: "The API integration will take about two days.", exampleCn: "API对接大约需要两天。" },
      { word: "database migration", phonetic: "/ˈdeɪtəbeɪs maɪˈɡreɪʃn/", meaning: "数据库迁移", example: "We need to complete the database migration before the release.", exampleCn: "我们需要在发布前完成数据库迁移。" },
      { word: "work on", phonetic: "/wɜːk ɒn/", meaning: "从事，处理", example: "I'm working on a new feature this week.", exampleCn: "这周我在做一个新功能。" }
    ],
    exercises: [
      { type: "choice", question: "Let's start our daily ___.", options: ["stand-up", "sit-down", "meeting-up", "check-up"], answer: 0, explanation: "daily stand-up 是敏捷开发中的每日站会" },
      { type: "choice", question: "Everything is on ___.", options: ["track", "road", "way", "line"], answer: 0, explanation: "on track 意为按计划进行" },
      { type: "fill", sentence: "I'll ___ on the API integration today.", answer: "work", hint: "从事/处理", acceptableAnswers: ["work"] },
      { type: "choice", question: "Any ___ preventing progress?", options: ["blockers", "blocks", "barriers", "walls"], answer: 0, explanation: "blocker 是项目管理中常用的表示阻碍的词" },
      { type: "fill", sentence: "Yesterday I ___ the login page design.", answer: "finished", hint: "完成（过去式）", acceptableAnswers: ["finished", "completed"] },
      { type: "choice", question: "I ___ need some help from Tom.", options: ["might", "must", "should", "would"], answer: 0, explanation: "might 表示可能，语气比较委婉" }
    ],
    rolePlay: {
      scenario: "你是一名开发者，在每日站会上汇报工作进展。Scrum Master会问你昨天做了什么、今天计划做什么、有没有阻碍。",
      scenarioEn: "You are a developer reporting your progress at the daily stand-up meeting.",
      role: "Developer",
      lines: [
        { speaker: "other", en: "Good morning! Let's start the stand-up. What did you do yesterday?", cn: "早上好！我们开始站会吧。你昨天做了什么？" },
        { speaker: "user", cn: "说你昨天完成了用户注册功能", en: "Yesterday I finished the user registration feature.", keywords: ["finished", "registration"] },
        { speaker: "other", en: "Nice work. What's your plan for today?", cn: "做得好。你今天计划做什么？" },
        { speaker: "user", cn: "说你今天要做API对接", en: "Today I'll work on the API integration.", keywords: ["work on", "API"] },
        { speaker: "other", en: "Sounds good. Any blockers?", cn: "听起来不错。有什么阻碍吗？" },
        { speaker: "user", cn: "说没有阻碍，一切按计划进行", en: "No blockers. Everything is on track.", keywords: ["on track"] }
      ]
    }
  },
  {
    day: 2,
    category: "work",
    level: 1,
    title: "Self Introduction in Team",
    titleCn: "团队自我介绍",
    dialogue: [
      { speaker: "A", role: "Team Lead", en: "Hey everyone, we have a new team member joining us today. Please welcome yourself!", cn: "大家好，今天有一位新同事加入我们。请做下自我介绍吧！", keyWords: ["new team member", "welcome"], grammar: "we have + 名词 + doing，表示有某人正在做某事" },
      { speaker: "B", role: "New Employee", en: "Hi everyone! My name is Kevin. I'm really excited to be here.", cn: "大家好！我叫Kevin。我很高兴来到这里。", keyWords: ["excited", "be here"], grammar: "I'm excited to + 动词原形，表示很高兴做某事" },
      { speaker: "A", role: "Team Lead", en: "Could you tell us a bit about your background?", cn: "能跟我们简单介绍一下你的背景吗？", keyWords: ["background"], grammar: "Could you + 动词原形? 礼貌请求" },
      { speaker: "B", role: "New Employee", en: "Sure. I graduated from Peking University with a degree in Computer Science. I have three years of experience in front-end development.", cn: "好的。我毕业于北京大学计算机科学专业。我有三年的前端开发经验。", keyWords: ["graduated", "degree", "experience", "front-end development"] },
      { speaker: "C", role: "Colleague Amy", en: "That's great! What technologies are you familiar with?", cn: "很棒！你熟悉哪些技术？", keyWords: ["technologies", "familiar with"] },
      { speaker: "B", role: "New Employee", en: "I mainly work with React and TypeScript. I also have some experience with Node.js.", cn: "我主要用React和TypeScript。我也有一些Node.js的经验。", keyWords: ["mainly", "work with", "some experience"] },
      { speaker: "C", role: "Colleague Amy", en: "Perfect, we use React here too. You'll fit right in.", cn: "太好了，我们这里也用React。你会很快适应的。", keyWords: ["fit right in"] },
      { speaker: "B", role: "New Employee", en: "That's good to hear. I'm looking forward to working with all of you.", cn: "很高兴听到这个。我期待和大家一起工作。", keyWords: ["looking forward to"], grammar: "look forward to + doing/名词，表示期待" },
      { speaker: "A", role: "Team Lead", en: "We're glad to have you on the team. If you have any questions, feel free to ask.", cn: "很高兴你加入团队。如果有任何问题，随时问。", keyWords: ["glad to have you", "feel free to"] }
    ],
    vocabulary: [
      { word: "background", phonetic: "/ˈbækɡraʊnd/", meaning: "背景，经历", example: "Could you tell me about your professional background?", exampleCn: "你能介绍一下你的职业背景吗？" },
      { word: "degree", phonetic: "/dɪˈɡriː/", meaning: "学位", example: "She has a degree in Software Engineering.", exampleCn: "她拥有软件工程学位。" },
      { word: "experience", phonetic: "/ɪkˈspɪəriəns/", meaning: "经验", example: "I have five years of experience in this field.", exampleCn: "我在这个领域有五年经验。" },
      { word: "familiar with", phonetic: "/fəˈmɪliər wɪð/", meaning: "熟悉", example: "Are you familiar with agile development?", exampleCn: "你熟悉敏捷开发吗？" },
      { word: "fit in", phonetic: "/fɪt ɪn/", meaning: "融入，适应", example: "It took me a month to fit in with the new team.", exampleCn: "我花了一个月才融入新团队。" },
      { word: "look forward to", phonetic: "/lʊk ˈfɔːwəd tuː/", meaning: "期待", example: "I look forward to hearing from you.", exampleCn: "我期待收到你的回复。" }
    ],
    exercises: [
      { type: "choice", question: "I'm really ___ to be here.", options: ["excited", "exciting", "excite", "excites"], answer: 0, explanation: "excited 是形容词，描述人的感受；exciting描述事物" },
      { type: "fill", sentence: "I have three years of ___ in front-end development.", answer: "experience", hint: "经验", acceptableAnswers: ["experience"] },
      { type: "choice", question: "What technologies are you ___ with?", options: ["familiar", "known", "used", "learned"], answer: 0, explanation: "be familiar with 是固定搭配，表示熟悉" },
      { type: "fill", sentence: "I'm looking ___ to working with all of you.", answer: "forward", hint: "期待（look ___ to）", acceptableAnswers: ["forward"] },
      { type: "choice", question: "If you have any questions, feel ___ to ask.", options: ["free", "good", "happy", "easy"], answer: 0, explanation: "feel free to 是固定搭配，表示随意、不要客气" },
      { type: "fill", sentence: "I graduated from Peking University with a ___ in Computer Science.", answer: "degree", hint: "学位", acceptableAnswers: ["degree"] }
    ],
    rolePlay: {
      scenario: "你是一位新入职的程序员，今天是你的第一天。团队负责人请你在早会上做自我介绍，包括你的名字、学历背景、工作经验和技术栈。",
      scenarioEn: "You are a new programmer on your first day. The team lead asks you to introduce yourself at the morning meeting.",
      role: "New Employee",
      lines: [
        { speaker: "other", en: "Welcome to the team! Could you introduce yourself?", cn: "欢迎加入团队！你能做个自我介绍吗？" },
        { speaker: "user", cn: "说你的名字，表示很高兴加入", en: "Hi, I'm Kevin. I'm really excited to join the team.", keywords: ["excited", "join"] },
        { speaker: "other", en: "Great! What's your background?", cn: "太好了！你的背景是什么？" },
        { speaker: "user", cn: "介绍你的学历和工作经验", en: "I graduated from Wuhan University. I have two years of experience in back-end development.", keywords: ["graduated", "experience"] },
        { speaker: "other", en: "Nice! What technologies do you use?", cn: "不错！你用什么技术？" },
        { speaker: "user", cn: "说你主要用Java和Spring Boot", en: "I mainly work with Java and Spring Boot.", keywords: ["mainly", "work with"] }
      ]
    }
  },
  {
    day: 3,
    category: "work",
    level: 1,
    title: "Asking for Help",
    titleCn: "向同事求助",
    dialogue: [
      { speaker: "A", role: "Developer Mike", en: "Hey Lisa, do you have a minute? I need some help.", cn: "嘿Lisa，你有空吗？我需要一些帮助。", keyWords: ["have a minute", "need some help"], grammar: "Do you have a minute? 询问对方是否有空的常用表达" },
      { speaker: "B", role: "Developer Lisa", en: "Sure, what's up?", cn: "当然，怎么了？", keyWords: ["what's up"] },
      { speaker: "A", role: "Developer Mike", en: "I'm having trouble with a CSS layout issue. The sidebar won't stay fixed on scroll.", cn: "我遇到一个CSS布局问题。侧边栏在滚动时不会固定。", keyWords: ["having trouble with", "CSS layout", "fixed"], grammar: "I'm having trouble with... 表示在某方面遇到困难" },
      { speaker: "B", role: "Developer Lisa", en: "Have you tried using position: sticky?", cn: "你试过用position: sticky吗？", keyWords: ["Have you tried"], grammar: "Have you tried + doing? 现在完成时，询问是否尝试过" },
      { speaker: "A", role: "Developer Mike", en: "Yes, but it doesn't seem to work. I think there might be an overflow issue.", cn: "试过了，但好像不起作用。我觉得可能有overflow的问题。", keyWords: ["doesn't seem to work", "overflow issue"] },
      { speaker: "B", role: "Developer Lisa", en: "Let me take a look at your code. Can you share your screen?", cn: "让我看看你的代码。你能分享一下屏幕吗？", keyWords: ["take a look", "share your screen"] },
      { speaker: "A", role: "Developer Mike", en: "Sure, give me a second.", cn: "好的，稍等一下。", keyWords: ["give me a second"] },
      { speaker: "B", role: "Developer Lisa", en: "I see the problem. The parent container has overflow: hidden. That's why sticky doesn't work.", cn: "我看到问题了。父容器设置了overflow: hidden。这就是sticky不起作用的原因。", keyWords: ["I see the problem", "parent container", "That's why"] },
      { speaker: "A", role: "Developer Mike", en: "Oh, I see! That makes sense. Thank you so much!", cn: "哦，我明白了！难怪。非常感谢！", keyWords: ["That makes sense"] },
      { speaker: "B", role: "Developer Lisa", en: "No worries. Feel free to reach out if you run into any other issues.", cn: "没事。如果你遇到其他问题，随时找我。", keyWords: ["No worries", "reach out", "run into"] }
    ],
    vocabulary: [
      { word: "have a minute", phonetic: "/hæv ə ˈmɪnɪt/", meaning: "有空吗", example: "Do you have a minute? I'd like to discuss something.", exampleCn: "你有空吗？我想讨论一下。" },
      { word: "have trouble with", phonetic: "/hæv ˈtrʌbl wɪð/", meaning: "在...方面有困难", example: "I'm having trouble with the new build system.", exampleCn: "我在新的构建系统上遇到了困难。" },
      { word: "take a look", phonetic: "/teɪk ə lʊk/", meaning: "看一看", example: "Can you take a look at my pull request?", exampleCn: "你能看看我的PR吗？" },
      { word: "share your screen", phonetic: "/ʃeər jɔːr skriːn/", meaning: "分享屏幕", example: "Could you share your screen so I can see the error?", exampleCn: "你能分享屏幕让我看看报错吗？" },
      { word: "make sense", phonetic: "/meɪk sens/", meaning: "有道理，说得通", example: "That explanation makes sense.", exampleCn: "那个解释说得通。" },
      { word: "reach out", phonetic: "/riːtʃ aʊt/", meaning: "联系，找（某人）", example: "Feel free to reach out to me anytime.", exampleCn: "随时联系我。" },
      { word: "run into", phonetic: "/rʌn ˈɪntuː/", meaning: "遇到（问题）", example: "Did you run into any issues during testing?", exampleCn: "你在测试中遇到什么问题了吗？" }
    ],
    exercises: [
      { type: "choice", question: "Do you ___ a minute? I need some help.", options: ["have", "get", "take", "give"], answer: 0, explanation: "Do you have a minute? 是询问对方是否有空的固定表达" },
      { type: "fill", sentence: "I'm having ___ with a CSS layout issue.", answer: "trouble", hint: "困难", acceptableAnswers: ["trouble", "problems"] },
      { type: "choice", question: "Have you ___ using position: sticky?", options: ["tried", "try", "trying", "tries"], answer: 0, explanation: "Have you tried + doing? 现在完成时，询问是否尝试过" },
      { type: "fill", sentence: "Let me take a ___ at your code.", answer: "look", hint: "看", acceptableAnswers: ["look"] },
      { type: "choice", question: "That ___ sense. Thank you!", options: ["makes", "does", "has", "gives"], answer: 0, explanation: "make sense 是固定搭配，表示有道理" },
      { type: "fill", sentence: "Feel free to ___ out if you run into any issues.", answer: "reach", hint: "联系（reach ___）", acceptableAnswers: ["reach"] }
    ],
    rolePlay: {
      scenario: "你在写代码时遇到了一个bug，程序报了一个你看不懂的错误。你决定去找有经验的同事帮忙看看。",
      scenarioEn: "You encountered a bug and need to ask an experienced colleague for help.",
      role: "Developer",
      lines: [
        { speaker: "other", en: "Hey, what's going on?", cn: "嘿，怎么了？" },
        { speaker: "user", cn: "说你遇到了一个bug，需要帮忙", en: "I'm having trouble with a bug. Do you have a minute?", keywords: ["having trouble", "have a minute"] },
        { speaker: "other", en: "Sure, what kind of error are you getting?", cn: "当然，你遇到什么样的错误？" },
        { speaker: "user", cn: "说程序报了一个空指针错误，你不知道原因", en: "I'm getting a null pointer error, but I don't know why.", keywords: ["null pointer", "don't know why"] },
        { speaker: "other", en: "Can you share your screen so I can take a look?", cn: "你能分享屏幕让我看看吗？" },
        { speaker: "user", cn: "同意并表示感谢", en: "Sure, let me share my screen. Thanks a lot for your help!", keywords: ["share", "screen", "thanks"] }
      ]
    }
  },
  {
    day: 4,
    category: "work",
    level: 2,
    title: "Email Communication",
    titleCn: "邮件沟通",
    dialogue: [
      { speaker: "A", role: "Developer Kevin", en: "Hey Amy, did you see the email from the product manager about the new requirements?", cn: "嘿Amy，你看到产品经理关于新需求的邮件了吗？", keyWords: ["email", "product manager", "requirements"] },
      { speaker: "B", role: "Developer Amy", en: "Yes, I just read it. The deadline seems really tight.", cn: "看了，我刚读完。截止日期看起来真的很紧。", keyWords: ["deadline", "tight"] },
      { speaker: "A", role: "Developer Kevin", en: "I agree. I think we should reply and ask for more details about the scope.", cn: "我同意。我觉得我们应该回复邮件，问一下具体范围。", keyWords: ["reply", "details", "scope"], grammar: "should + 动词原形，表示建议" },
      { speaker: "B", role: "Developer Amy", en: "Good idea. Can you draft the reply? Make sure to CC the team lead.", cn: "好主意。你能起草回复吗？记得抄送团队负责人。", keyWords: ["draft", "reply", "CC"], grammar: "Make sure to + 动词原形，表示确保做某事" },
      { speaker: "A", role: "Developer Kevin", en: "Sure. I'll keep it professional and to the point.", cn: "好的。我会写得专业、简洁。", keyWords: ["professional", "to the point"] },
      { speaker: "B", role: "Developer Amy", en: "Also, could you attach the current timeline? That way they can see our constraints.", cn: "另外，你能附上目前的时间表吗？这样他们能看到我们的限制。", keyWords: ["attach", "timeline", "constraints"] },
      { speaker: "A", role: "Developer Kevin", en: "Will do. Should I also mention that we need the design specs before we can start?", cn: "好的。我是不是也应该提一下我们需要设计稿才能开始？", keyWords: ["mention", "design specs"] },
      { speaker: "B", role: "Developer Amy", en: "Definitely. That's a key dependency. Oh, and please use a clear subject line like 'Re: New Feature Requirements — Questions and Timeline'.", cn: "当然。那是一个关键依赖项。哦，请用一个清晰的主题行，比如 'Re: New Feature Requirements — Questions and Timeline'。", keyWords: ["dependency", "subject line"] },
      { speaker: "A", role: "Developer Kevin", en: "Got it. I'll send it out before lunch and follow up if we don't get a response by tomorrow.", cn: "明白了。我午饭前发出去，如果明天还没收到回复我会跟进。", keyWords: ["send it out", "follow up", "response"] },
      { speaker: "B", role: "Developer Amy", en: "Sounds like a plan. Thanks, Kevin.", cn: "听起来不错。谢谢你，Kevin。", keyWords: ["Sounds like a plan"] }
    ],
    vocabulary: [
      { word: "CC", phonetic: "/siː siː/", meaning: "抄送", example: "Please CC me on that email.", exampleCn: "那封邮件请抄送我。" },
      { word: "draft", phonetic: "/drɑːft/", meaning: "起草，草稿", example: "I'll draft the email and send it for your review.", exampleCn: "我会起草邮件发给你审阅。" },
      { word: "subject line", phonetic: "/ˈsʌbdʒekt laɪn/", meaning: "邮件主题行", example: "Use a clear subject line so people know what the email is about.", exampleCn: "用一个清晰的主题行，让人知道邮件讲什么。" },
      { word: "follow up", phonetic: "/ˈfɒloʊ ʌp/", meaning: "跟进", example: "I'll follow up with the client next week.", exampleCn: "我下周会跟客户跟进。" },
      { word: "attachment", phonetic: "/əˈtætʃmənt/", meaning: "附件", example: "Please find the report in the attachment.", exampleCn: "请查看附件中的报告。" },
      { word: "to the point", phonetic: "/tuː ðə pɔɪnt/", meaning: "简洁明了", example: "Keep your email short and to the point.", exampleCn: "邮件要简短、切中要点。" }
    ],
    exercises: [
      { type: "choice", question: "Can you ___ the reply? I'll review it before sending.", options: ["draft", "write down", "note", "draw"], answer: 0, explanation: "draft 在邮件场景中表示起草" },
      { type: "fill", sentence: "Make sure to ___ the team lead on the email.", answer: "CC", hint: "抄送", acceptableAnswers: ["CC", "cc", "copy"] },
      { type: "choice", question: "I'll ___ up if we don't get a response.", options: ["follow", "keep", "catch", "pick"], answer: 0, explanation: "follow up 是跟进的固定搭配" },
      { type: "fill", sentence: "Please ___ the current timeline to the email.", answer: "attach", hint: "附上", acceptableAnswers: ["attach"] },
      { type: "choice", question: "The deadline seems really ___.", options: ["tight", "close", "short", "small"], answer: 0, explanation: "tight deadline 表示截止日期很紧" },
      { type: "fill", sentence: "Please use a clear ___ line for the email.", answer: "subject", hint: "主题", acceptableAnswers: ["subject"] }
    ],
    rolePlay: {
      scenario: "产品经理给你发了一封邮件，提了一些新需求但信息不完整。你需要回复邮件，礼貌地询问更多细节，并说明你的时间限制。",
      scenarioEn: "The product manager sent you an email with incomplete requirements. You need to reply politely asking for details.",
      role: "Developer",
      lines: [
        { speaker: "other", en: "Hey, did you read the PM's email about the new feature?", cn: "嘿，你看了产品经理关于新功能的邮件了吗？" },
        { speaker: "user", cn: "说你看了，但觉得信息不够详细", en: "Yes, I read it. But I think we need more details about the requirements.", keywords: ["read", "more details"] },
        { speaker: "other", en: "I agree. Are you going to reply?", cn: "我同意。你要回复吗？" },
        { speaker: "user", cn: "说你会起草回复，礼貌地询问具体范围和截止日期", en: "I'll draft a reply to ask about the scope and deadline.", keywords: ["draft", "scope", "deadline"] },
        { speaker: "other", en: "Good idea. Don't forget to CC the team lead.", cn: "好主意。别忘了抄送团队负责人。" },
        { speaker: "user", cn: "说你会抄送，并且如果没收到回复会跟进", en: "I'll CC the team lead and follow up if there's no response.", keywords: ["CC", "follow up"] }
      ]
    }
  },
  {
    day: 5,
    category: "work",
    level: 2,
    title: "Scheduling a Meeting",
    titleCn: "安排会议",
    dialogue: [
      { speaker: "A", role: "Developer Kevin", en: "We need to schedule a meeting to discuss the database design. When are you available?", cn: "我们需要安排一个会议讨论数据库设计。你什么时候有空？", keyWords: ["schedule a meeting", "available"], grammar: "When are you available? 询问对方何时有空" },
      { speaker: "B", role: "Developer Lisa", en: "Let me check my calendar. I'm free tomorrow afternoon after 2 PM.", cn: "让我看看我的日历。我明天下午两点以后有空。", keyWords: ["check my calendar", "free"] },
      { speaker: "A", role: "Developer Kevin", en: "How about 2:30? I'll book the meeting room on the third floor.", cn: "两点半怎么样？我来预定三楼的会议室。", keyWords: ["How about", "book the meeting room"], grammar: "How about + 时间/名词? 提出建议" },
      { speaker: "B", role: "Developer Lisa", en: "That works for me. How long do you think it will take?", cn: "我可以。你觉得会开多久？", keyWords: ["works for me", "how long"] },
      { speaker: "A", role: "Developer Kevin", en: "About an hour should be enough. I'll send out a calendar invite.", cn: "大约一个小时应该够了。我会发日历邀请。", keyWords: ["should be enough", "calendar invite"] },
      { speaker: "B", role: "Developer Lisa", en: "Should we invite the backend team as well?", cn: "我们是不是也应该邀请后端团队？", keyWords: ["invite", "backend team"] },
      { speaker: "A", role: "Developer Kevin", en: "Good point. I'll add Tom and Sarah to the invite. Could you prepare the ER diagram?", cn: "说得对。我会把Tom和Sarah加到邀请里。你能准备一下ER图吗？", keyWords: ["Good point", "prepare", "ER diagram"] },
      { speaker: "B", role: "Developer Lisa", en: "Sure. I'll also put together an agenda so we can stay focused.", cn: "好的。我也会整理一个议程，这样我们可以保持专注。", keyWords: ["put together", "agenda", "stay focused"] },
      { speaker: "A", role: "Developer Kevin", en: "Perfect. Let me know if the time doesn't work for anyone.", cn: "好的。如果时间有人不合适的话告诉我。", keyWords: ["Let me know", "doesn't work"] },
      { speaker: "B", role: "Developer Lisa", en: "Will do. See you tomorrow then.", cn: "好的。那明天见。", keyWords: ["Will do"] }
    ],
    vocabulary: [
      { word: "schedule", phonetic: "/ˈʃedjuːl/", meaning: "安排，计划", example: "Let's schedule a meeting for next Monday.", exampleCn: "我们安排下周一开个会吧。" },
      { word: "available", phonetic: "/əˈveɪləbl/", meaning: "有空的", example: "Are you available for a quick call this afternoon?", exampleCn: "你今天下午有空打个电话吗？" },
      { word: "calendar invite", phonetic: "/ˈkælɪndər ɪnˈvaɪt/", meaning: "日历邀请", example: "I'll send you a calendar invite with the meeting link.", exampleCn: "我会发日历邀请给你，里面有会议链接。" },
      { word: "agenda", phonetic: "/əˈdʒendə/", meaning: "议程", example: "Let's go through the agenda for today's meeting.", exampleCn: "我们来看一下今天会议的议程。" },
      { word: "book", phonetic: "/bʊk/", meaning: "预定（会议室等）", example: "I've booked the conference room for 3 PM.", exampleCn: "我预定了下午三点的会议室。" },
      { word: "works for me", phonetic: "/wɜːks fɔːr miː/", meaning: "我可以，适合我", example: "Friday at 10 works for me.", exampleCn: "周五十点我可以。" }
    ],
    exercises: [
      { type: "choice", question: "We need to ___ a meeting to discuss the design.", options: ["schedule", "make", "do", "set"], answer: 0, explanation: "schedule a meeting 是安排会议的标准表达" },
      { type: "fill", sentence: "Let me check my ___. I'm free tomorrow afternoon.", answer: "calendar", hint: "日历", acceptableAnswers: ["calendar", "schedule"] },
      { type: "choice", question: "That ___ for me. I can make it at 2:30.", options: ["works", "fits", "goes", "does"], answer: 0, explanation: "works for me 是口语中表示可以、合适的表达" },
      { type: "fill", sentence: "I'll send out a calendar ___ to everyone.", answer: "invite", hint: "邀请", acceptableAnswers: ["invite", "invitation"] },
      { type: "choice", question: "I'll put together an ___ so we can stay focused.", options: ["agenda", "plan", "list", "schedule"], answer: 0, explanation: "agenda 专指会议议程" },
      { type: "fill", sentence: "I'll ___ the meeting room on the third floor.", answer: "book", hint: "预定", acceptableAnswers: ["book", "reserve"] }
    ],
    rolePlay: {
      scenario: "你需要和前端同事讨论一个界面设计方案，你打算安排一个30分钟的会议。你需要确定时间、预定会议室、发送邀请。",
      scenarioEn: "You need to schedule a 30-minute meeting with a front-end colleague to discuss a UI design.",
      role: "Developer",
      lines: [
        { speaker: "other", en: "Hey, you mentioned we need to discuss the UI design?", cn: "嘿，你说我们需要讨论UI设计？" },
        { speaker: "user", cn: "说是的，问对方什么时候有空", en: "Yes, we need to schedule a meeting. When are you available?", keywords: ["schedule", "available"] },
        { speaker: "other", en: "I'm free Thursday morning. How about 10 AM?", cn: "我周四上午有空。十点怎么样？" },
        { speaker: "user", cn: "说十点可以，你会预定会议室", en: "10 AM works for me. I'll book the meeting room.", keywords: ["works for me", "book"] },
        { speaker: "other", en: "Great. Should I prepare anything?", cn: "好的。我需要准备什么吗？" },
        { speaker: "user", cn: "请对方准备设计稿，你会发日历邀请", en: "Please prepare the design mockup. I'll send a calendar invite.", keywords: ["prepare", "calendar invite"] }
      ]
    }
  },
  {
    day: 6,
    category: "work",
    level: 2,
    title: "Project Status Update",
    titleCn: "项目进度汇报",
    dialogue: [
      { speaker: "A", role: "Project Manager", en: "Let's go over the project status. Kevin, can you give us an update on the backend?", cn: "我们来过一下项目进度。Kevin，你能更新一下后端的情况吗？", keyWords: ["go over", "project status", "give us an update"] },
      { speaker: "B", role: "Developer Kevin", en: "Sure. The user authentication module is about 80% complete. We're currently doing unit testing.", cn: "好的。用户认证模块大约完成了80%。我们目前在做单元测试。", keyWords: ["authentication", "80% complete", "unit testing"], grammar: "be about X% complete 表示完成了大约百分之几" },
      { speaker: "A", role: "Project Manager", en: "Are we still on schedule for the release?", cn: "我们还能按计划发布吗？", keyWords: ["on schedule", "release"] },
      { speaker: "B", role: "Developer Kevin", en: "We're slightly behind schedule. We ran into some unexpected issues with the third-party API.", cn: "我们稍微有点落后。我们在第三方API上遇到了一些意外问题。", keyWords: ["behind schedule", "ran into", "unexpected issues", "third-party API"] },
      { speaker: "A", role: "Project Manager", en: "How much of a delay are we looking at?", cn: "我们预计会延迟多少？", keyWords: ["delay", "looking at"], grammar: "How much of a + 名词，询问程度" },
      { speaker: "B", role: "Developer Kevin", en: "About two to three days. I've already escalated the issue to the vendor.", cn: "大约两到三天。我已经把问题升级给了供应商。", keyWords: ["escalated", "vendor"] },
      { speaker: "A", role: "Project Manager", en: "OK. Lisa, what about the frontend progress?", cn: "好的。Lisa，前端进展怎么样？", keyWords: ["progress"] },
      { speaker: "C", role: "Developer Lisa", en: "The dashboard page is done. I'm now working on the report module. It should be finished by Friday.", cn: "仪表盘页面已经完成了。我现在在做报表模块。应该在周五前完成。", keyWords: ["dashboard", "done", "report module", "finished by Friday"] },
      { speaker: "A", role: "Project Manager", en: "Great. Let's aim to have everything ready for QA testing by next Monday.", cn: "很好。我们争取在下周一前让所有东西准备好给QA测试。", keyWords: ["aim to", "QA testing"] },
      { speaker: "B", role: "Developer Kevin", en: "Understood. I'll keep you posted on the API issue.", cn: "明白了。API的问题我会随时跟你更新。", keyWords: ["keep you posted"] }
    ],
    vocabulary: [
      { word: "on schedule", phonetic: "/ɒn ˈʃedjuːl/", meaning: "按计划", example: "The project is on schedule for the Q2 release.", exampleCn: "项目按计划在第二季度发布。" },
      { word: "behind schedule", phonetic: "/bɪˈhaɪnd ˈʃedjuːl/", meaning: "落后于计划", example: "We're two days behind schedule due to a bug.", exampleCn: "由于一个bug我们落后了两天。" },
      { word: "escalate", phonetic: "/ˈeskəleɪt/", meaning: "升级（问题），上报", example: "If the issue persists, we should escalate it to management.", exampleCn: "如果问题持续存在，我们应该上报给管理层。" },
      { word: "delay", phonetic: "/dɪˈleɪ/", meaning: "延迟，推迟", example: "There might be a one-week delay in the delivery.", exampleCn: "交付可能会延迟一周。" },
      { word: "keep someone posted", phonetic: "/kiːp ˈpoʊstɪd/", meaning: "随时通知某人最新情况", example: "Keep me posted on any changes.", exampleCn: "有什么变化随时告诉我。" },
      { word: "QA testing", phonetic: "/kjuː eɪ ˈtestɪŋ/", meaning: "质量保证测试", example: "We need to finish QA testing before the release.", exampleCn: "我们需要在发布前完成QA测试。" }
    ],
    exercises: [
      { type: "choice", question: "We're slightly ___ schedule due to unexpected issues.", options: ["behind", "after", "late", "back"], answer: 0, explanation: "behind schedule 是落后于计划的固定搭配" },
      { type: "fill", sentence: "The user authentication module is about 80% ___.", answer: "complete", hint: "完成", acceptableAnswers: ["complete", "done", "finished"] },
      { type: "choice", question: "I've already ___ the issue to the vendor.", options: ["escalated", "raised", "sent", "pushed"], answer: 0, explanation: "escalate 表示将问题升级给更高层级或外部" },
      { type: "fill", sentence: "I'll keep you ___ on the API issue.", answer: "posted", hint: "通知（keep someone ___）", acceptableAnswers: ["posted", "updated"] },
      { type: "choice", question: "Let's ___ to have everything ready by Monday.", options: ["aim", "try", "plan", "hope"], answer: 0, explanation: "aim to 表示争取做到" },
      { type: "fill", sentence: "How much of a ___ are we looking at?", answer: "delay", hint: "延迟", acceptableAnswers: ["delay"] }
    ],
    rolePlay: {
      scenario: "你的项目经理在周会上询问你负责的模块进度。你需要汇报完成情况、遇到的问题以及预计时间。",
      scenarioEn: "Your project manager asks for your module's status at the weekly meeting.",
      role: "Developer",
      lines: [
        { speaker: "other", en: "Can you give us an update on your module?", cn: "你能更新一下你负责的模块的情况吗？" },
        { speaker: "user", cn: "说你的模块完成了大约70%，正在做集成测试", en: "The module is about 70% complete. I'm currently doing integration testing.", keywords: ["70% complete", "integration testing"] },
        { speaker: "other", en: "Are we on schedule?", cn: "我们在按计划进行吗？" },
        { speaker: "user", cn: "说稍微有点落后，遇到了一些第三方接口问题", en: "We're slightly behind schedule. We ran into some issues with the third-party API.", keywords: ["behind schedule", "ran into"] },
        { speaker: "other", en: "How much of a delay?", cn: "大概延迟多久？" },
        { speaker: "user", cn: "说大约延迟两天，你会随时更新情况", en: "About two days. I'll keep you posted.", keywords: ["two days", "keep you posted"] }
      ]
    }
  },
  {
    day: 7,
    category: "work",
    level: 2,
    title: "Task Assignment",
    titleCn: "任务分配",
    dialogue: [
      { speaker: "A", role: "Team Lead", en: "OK team, let's go through this week's task assignments. We have several things to deliver before Friday.", cn: "好的团队，我们来过一下这周的任务分配。周五之前我们有好几件事要交付。", keyWords: ["task assignments", "deliver"], grammar: "let's go through... 表示让我们一起过一下" },
      { speaker: "B", role: "Developer Kevin", en: "Sure. What's the top priority?", cn: "好的。最高优先级是什么？", keyWords: ["top priority"] },
      { speaker: "A", role: "Team Lead", en: "The payment integration is the most urgent. Kevin, I'd like you to take the lead on that.", cn: "支付集成是最紧急的。Kevin，我想让你负责这个。", keyWords: ["most urgent", "take the lead"], grammar: "I'd like you to + 动词原形，委婉地分配任务" },
      { speaker: "B", role: "Developer Kevin", en: "Got it. Do I have anyone to pair with on this?", cn: "明白了。有人和我一起做吗？", keyWords: ["pair with"] },
      { speaker: "A", role: "Team Lead", en: "Yes, Sarah will assist you with the testing part. Sarah, is that OK with you?", cn: "是的，Sarah会协助你做测试部分。Sarah，你可以吗？", keyWords: ["assist", "is that OK with you"] },
      { speaker: "C", role: "Developer Sarah", en: "No problem. I'll start writing test cases once Kevin sets up the framework.", cn: "没问题。Kevin搭好框架后我就开始写测试用例。", keyWords: ["test cases", "sets up", "framework"], grammar: "once + 从句，表示一旦...就..." },
      { speaker: "A", role: "Team Lead", en: "Lisa, could you handle the user notification feature? It's medium priority.", cn: "Lisa，你能处理用户通知功能吗？这个是中等优先级。", keyWords: ["handle", "notification", "medium priority"] },
      { speaker: "D", role: "Developer Lisa", en: "Sure, I can take that on. What's the expected deadline?", cn: "好的，我可以接。预期截止日期是什么？", keyWords: ["take that on", "expected deadline"] },
      { speaker: "A", role: "Team Lead", en: "By Wednesday would be ideal. Let me know if you need more time.", cn: "周三前最理想。如果需要更多时间告诉我。", keyWords: ["would be ideal", "Let me know"] },
      { speaker: "D", role: "Developer Lisa", en: "Wednesday should be doable. I'll keep you updated.", cn: "周三应该可以。我会随时更新你。", keyWords: ["doable", "keep you updated"] },
      { speaker: "A", role: "Team Lead", en: "Great. If anyone runs into any blockers, bring it up in the daily stand-up.", cn: "很好。如果谁遇到阻碍，在每日站会上提出来。", keyWords: ["runs into", "bring it up"] }
    ],
    vocabulary: [
      { word: "priority", phonetic: "/praɪˈɒrɪti/", meaning: "优先级", example: "Bug fixes are our top priority this week.", exampleCn: "修复bug是我们本周的最高优先级。" },
      { word: "take the lead", phonetic: "/teɪk ðə liːd/", meaning: "负责，带头", example: "Who's going to take the lead on this project?", exampleCn: "谁来负责这个项目？" },
      { word: "pair with", phonetic: "/peər wɪð/", meaning: "与...配对工作", example: "I'll pair with Tom on the code review.", exampleCn: "我会和Tom一起做代码审查。" },
      { word: "take on", phonetic: "/teɪk ɒn/", meaning: "接手，承担", example: "I can take on that task if no one else is available.", exampleCn: "如果没有其他人有空，我可以接这个任务。" },
      { word: "doable", phonetic: "/ˈduːəbl/", meaning: "可行的，做得到的", example: "The timeline is tight but doable.", exampleCn: "时间很紧但是可行的。" },
      { word: "bring up", phonetic: "/brɪŋ ʌp/", meaning: "提出（话题/问题）", example: "I'll bring up the issue at the next meeting.", exampleCn: "我会在下次会议上提出这个问题。" }
    ],
    exercises: [
      { type: "choice", question: "The payment integration is the most ___.", options: ["urgent", "important", "serious", "critical"], answer: 0, explanation: "urgent 强调紧急性，需要尽快处理" },
      { type: "fill", sentence: "Kevin, I'd like you to take the ___ on that.", answer: "lead", hint: "负责/带头", acceptableAnswers: ["lead"] },
      { type: "choice", question: "Wednesday should be ___.", options: ["doable", "possible", "available", "ready"], answer: 0, explanation: "doable 表示可行的，常用于评估任务是否能完成" },
      { type: "fill", sentence: "Lisa, could you ___ the notification feature?", answer: "handle", hint: "处理", acceptableAnswers: ["handle"] },
      { type: "choice", question: "If anyone ___ into blockers, bring it up.", options: ["runs", "gets", "comes", "goes"], answer: 0, explanation: "run into 表示遇到（问题）" },
      { type: "fill", sentence: "I can ___ that on. What's the expected deadline?", answer: "take", hint: "接手（___ on）", acceptableAnswers: ["take"] }
    ],
    rolePlay: {
      scenario: "你是团队负责人，需要给三位同事分配本周的任务。有一个紧急的支付功能、一个中等优先级的通知功能、以及一个低优先级的文档更新。",
      scenarioEn: "You are the team lead assigning tasks to three colleagues for this week.",
      role: "Team Lead",
      lines: [
        { speaker: "other", en: "What are the tasks for this week?", cn: "这周有什么任务？" },
        { speaker: "user", cn: "说最高优先级是支付功能，让Tom负责", en: "The payment feature is our top priority. Tom, I'd like you to take the lead on that.", keywords: ["top priority", "take the lead"] },
        { speaker: "other", en: "Got it. What's the deadline?", cn: "明白了。截止日期是什么？" },
        { speaker: "user", cn: "说周四前完成最理想，然后把通知功能分配给Lisa", en: "By Thursday would be ideal. Lisa, could you handle the notification feature?", keywords: ["would be ideal", "handle"] },
        { speaker: "other", en: "Sure, I can take that on. Anything else?", cn: "好的，我可以接。还有别的吗？" },
        { speaker: "user", cn: "说文档更新优先级低，如果有阻碍在站会上提出", en: "The documentation update is low priority. If anyone runs into blockers, bring it up in the stand-up.", keywords: ["low priority", "bring it up"] }
      ]
    }
  },
  {
    day: 8,
    category: "work",
    level: 3,
    title: "Sprint Planning",
    titleCn: "迭代计划会",
    dialogue: [
      { speaker: "A", role: "Scrum Master", en: "Welcome to the sprint planning session. We have 20 story points to allocate for this two-week sprint.", cn: "欢迎参加迭代计划会。这个两周的迭代我们有20个故事点可以分配。", keyWords: ["sprint planning", "story points", "allocate"], grammar: "have + 数量 + to + 动词原形，表示有多少可以用于做某事" },
      { speaker: "B", role: "Developer Kevin", en: "Before we start, should we review the backlog and identify the high-priority items?", cn: "在我们开始之前，是不是应该先看一下待办列表，找出高优先级的项。", keyWords: ["review", "backlog", "identify", "high-priority"] },
      { speaker: "A", role: "Scrum Master", en: "Good idea. The product owner has already prioritized the backlog. Let's pull up the board.", cn: "好主意。产品负责人已经排好了优先级。我们打开看板吧。", keyWords: ["product owner", "prioritized", "pull up", "board"] },
      { speaker: "C", role: "Developer Lisa", en: "I see the user profile redesign is at the top. How many story points should we estimate for that?", cn: "我看到用户资料页重新设计排在最前面。我们估算多少故事点？", keyWords: ["redesign", "estimate", "story points"] },
      { speaker: "B", role: "Developer Kevin", en: "Based on the acceptance criteria, I'd say it's about 5 points. There's quite a bit of front-end work involved.", cn: "根据验收标准，我估计大概5个点。涉及不少前端工作。", keyWords: ["acceptance criteria", "involved"], grammar: "Based on + 名词，表示根据" },
      { speaker: "C", role: "Developer Lisa", en: "I agree with 5 points. We also need to factor in code review and QA time.", cn: "我同意5个点。我们还需要把代码审查和QA时间算进去。", keyWords: ["factor in", "code review"] },
      { speaker: "A", role: "Scrum Master", en: "OK, 5 points for the profile redesign. What about the notification system? Any concerns about that one?", cn: "好的，用户资料页重设计5个点。通知系统呢？对这个有什么顾虑吗？", keyWords: ["concerns"] },
      { speaker: "B", role: "Developer Kevin", en: "The notification system is more complex. I'd estimate 8 points. We need to implement both push notifications and in-app messages.", cn: "通知系统更复杂。我估计8个点。我们需要同时实现推送通知和应用内消息。", keyWords: ["complex", "implement", "push notifications", "in-app messages"] },
      { speaker: "C", role: "Developer Lisa", en: "That sounds right. We should also add a 3-point task for the bug fixes from last sprint.", cn: "听起来没问题。我们还应该加一个3个点的任务来修复上个迭代遗留的bug。", keyWords: ["bug fixes", "last sprint"] },
      { speaker: "A", role: "Scrum Master", en: "So that's 5 plus 8 plus 3, which gives us 16 points. We have 4 more points of capacity. Any suggestions?", cn: "那就是5加8加3，总共16个点。我们还剩4个点的容量。有什么建议吗？", keyWords: ["capacity", "suggestions"] },
      { speaker: "B", role: "Developer Kevin", en: "We could tackle the performance optimization task. It's been in the backlog for a while.", cn: "我们可以做性能优化任务。这个在待办列表里放了一段时间了。", keyWords: ["tackle", "performance optimization", "for a while"] },
      { speaker: "A", role: "Scrum Master", en: "Sounds good. Let's commit to these items and update the sprint board. Everyone clear on their responsibilities?", cn: "听起来不错。我们就确定这些项目，更新迭代看板。大家都清楚自己的职责吗？", keyWords: ["commit to", "sprint board", "responsibilities"] }
    ],
    vocabulary: [
      { word: "story point", phonetic: "/ˈstɔːri pɔɪnt/", meaning: "故事点（敏捷开发中衡量工作量的单位）", example: "This task is estimated at 3 story points.", exampleCn: "这个任务估算为3个故事点。" },
      { word: "backlog", phonetic: "/ˈbæklɒɡ/", meaning: "待办列表", example: "Let's review the product backlog before the meeting.", exampleCn: "会议前我们先看看产品待办列表。" },
      { word: "acceptance criteria", phonetic: "/əkˈseptəns kraɪˈtɪəriə/", meaning: "验收标准", example: "Make sure the acceptance criteria are clearly defined.", exampleCn: "确保验收标准定义清晰。" },
      { word: "factor in", phonetic: "/ˈfæktər ɪn/", meaning: "把...考虑在内", example: "We need to factor in the testing time.", exampleCn: "我们需要把测试时间算进去。" },
      { word: "capacity", phonetic: "/kəˈpæsɪti/", meaning: "容量，产能", example: "Our team capacity for this sprint is 30 story points.", exampleCn: "我们团队这个迭代的产能是30个故事点。" },
      { word: "commit to", phonetic: "/kəˈmɪt tuː/", meaning: "承诺完成", example: "Let's only commit to tasks we can realistically finish.", exampleCn: "我们只承诺那些我们能切实完成的任务。" }
    ],
    exercises: [
      { type: "choice", question: "We have 20 ___ points to allocate for this sprint.", options: ["story", "task", "work", "effort"], answer: 0, explanation: "story point 是敏捷开发中用于估算工作量的术语" },
      { type: "fill", sentence: "Should we review the ___ and identify the high-priority items?", answer: "backlog", hint: "待办列表", acceptableAnswers: ["backlog"] },
      { type: "choice", question: "We need to ___ in code review and QA time.", options: ["factor", "count", "add", "put"], answer: 0, explanation: "factor in 表示把某因素考虑在内" },
      { type: "fill", sentence: "Based on the acceptance ___, I'd say it's about 5 points.", answer: "criteria", hint: "标准", acceptableAnswers: ["criteria"] },
      { type: "choice", question: "We have 4 more points of ___.", options: ["capacity", "ability", "space", "room"], answer: 0, explanation: "capacity 在项目管理中表示团队的产能/容量" },
      { type: "fill", sentence: "Let's ___ to these items and update the sprint board.", answer: "commit", hint: "承诺", acceptableAnswers: ["commit"] }
    ],
    rolePlay: {
      scenario: "你参加团队的迭代计划会，需要估算任务的故事点、讨论优先级、以及确认团队产能。Scrum Master引导会议。",
      scenarioEn: "You are participating in a sprint planning meeting, estimating story points and discussing priorities.",
      role: "Developer",
      lines: [
        { speaker: "other", en: "Let's start sprint planning. We have 25 story points for this sprint. What should we tackle first?", cn: "开始迭代计划吧。这个迭代我们有25个故事点。我们先做什么？" },
        { speaker: "user", cn: "建议先看待办列表，找出高优先级的项目", en: "Let's review the backlog and identify the high-priority items first.", keywords: ["review", "backlog", "high-priority"] },
        { speaker: "other", en: "Good idea. The search feature is at the top. How many points do you estimate?", cn: "好主意。搜索功能排在最前面。你估算多少个点？" },
        { speaker: "user", cn: "根据验收标准估计大约8个点，还需要把测试时间算进去", en: "Based on the acceptance criteria, I'd estimate about 8 points. We should also factor in testing time.", keywords: ["acceptance criteria", "estimate", "factor in"] },
        { speaker: "other", en: "That sounds right. We still have 17 points left. Any other suggestions?", cn: "有道理。我们还剩17个点。还有什么建议？" },
        { speaker: "user", cn: "建议做性能优化任务，这个在待办列表里放了很久了", en: "We could tackle the performance optimization task. It's been in the backlog for a while.", keywords: ["tackle", "performance optimization", "backlog"] }
      ]
    }
  },
  {
    day: 9,
    category: "work",
    level: 3,
    title: "Cross-team Collaboration",
    titleCn: "跨团队协作",
    dialogue: [
      { speaker: "A", role: "Backend Lead Kevin", en: "Thanks for setting up this meeting. We need to align on the API contract between our teams.", cn: "感谢安排这个会议。我们需要在两个团队之间对齐API契约。", keyWords: ["align on", "API contract"], grammar: "align on + 名词，表示就某事达成一致" },
      { speaker: "B", role: "Frontend Lead Lisa", en: "Absolutely. Our team has been blocked for two days because the endpoint specifications keep changing.", cn: "确实。我们团队因为接口规范不断变化被阻塞了两天。", keyWords: ["blocked", "endpoint specifications", "keep changing"] },
      { speaker: "A", role: "Backend Lead Kevin", en: "I apologize for the confusion. We had to make some changes due to security requirements.", cn: "对于造成的混乱我很抱歉。由于安全需求我们不得不做一些改动。", keyWords: ["apologize", "confusion", "security requirements"] },
      { speaker: "B", role: "Frontend Lead Lisa", en: "I understand, but going forward, could you notify us before making any breaking changes?", cn: "我理解，但是以后在做任何破坏性更改之前能通知我们吗？", keyWords: ["going forward", "notify", "breaking changes"], grammar: "going forward 表示从现在开始/今后" },
      { speaker: "A", role: "Backend Lead Kevin", en: "That's fair. I propose we set up a shared documentation channel where we log all API changes.", cn: "说得对。我提议我们建一个共享文档频道来记录所有API变更。", keyWords: ["propose", "shared documentation", "log"] },
      { speaker: "B", role: "Frontend Lead Lisa", en: "That would be very helpful. We should also have a weekly sync meeting to discuss any upcoming changes.", cn: "那会很有帮助。我们还应该有一个每周同步会来讨论即将到来的变更。", keyWords: ["weekly sync", "upcoming changes"] },
      { speaker: "A", role: "Backend Lead Kevin", en: "Agreed. And for critical changes, let's use a versioned API approach so we don't break the existing integration.", cn: "同意。对于关键性的变更，我们用版本化API的方式，这样就不会破坏现有的集成。", keyWords: ["versioned API", "break", "existing integration"] },
      { speaker: "B", role: "Frontend Lead Lisa", en: "That sounds like a solid plan. Who should be the main point of contact on your side?", cn: "听起来是个靠谱的方案。你们那边谁是主要对接人？", keyWords: ["solid plan", "point of contact"] },
      { speaker: "A", role: "Backend Lead Kevin", en: "I'll be the primary contact. But if I'm not available, you can reach out to Tom. He's familiar with the codebase.", cn: "我是主要联系人。但如果我不在，你可以找Tom。他熟悉代码库。", keyWords: ["primary contact", "reach out to"] },
      { speaker: "B", role: "Frontend Lead Lisa", en: "Perfect. Let's also set up a shared Slack channel so both teams can communicate in real time.", cn: "很好。我们也建一个共享的Slack频道，这样两个团队可以实时沟通。", keyWords: ["shared Slack channel", "communicate", "in real time"] },
      { speaker: "A", role: "Backend Lead Kevin", en: "Great idea. I'll create the channel today and add everyone. Let's make sure this kind of miscommunication doesn't happen again.", cn: "好主意。我今天创建频道并添加所有人。确保这种沟通问题不再发生。", keyWords: ["miscommunication"] }
    ],
    vocabulary: [
      { word: "align on", phonetic: "/əˈlaɪn ɒn/", meaning: "就...达成一致", example: "We need to align on the technical approach before coding.", exampleCn: "在编码前我们需要就技术方案达成一致。" },
      { word: "breaking change", phonetic: "/ˈbreɪkɪŋ tʃeɪndʒ/", meaning: "破坏性更改", example: "This update includes a breaking change to the API.", exampleCn: "这次更新包含一个API的破坏性更改。" },
      { word: "point of contact", phonetic: "/pɔɪnt əv ˈkɒntækt/", meaning: "对接人，联系人", example: "Who is the main point of contact for this project?", exampleCn: "这个项目的主要对接人是谁？" },
      { word: "going forward", phonetic: "/ˈɡoʊɪŋ ˈfɔːwərd/", meaning: "今后，从现在开始", example: "Going forward, let's document all decisions.", exampleCn: "今后我们把所有决策都记录下来。" },
      { word: "sync meeting", phonetic: "/sɪŋk ˈmiːtɪŋ/", meaning: "同步会", example: "Let's have a quick sync meeting to share updates.", exampleCn: "我们开个快速同步会分享一下进展。" },
      { word: "miscommunication", phonetic: "/ˌmɪskəˌmjuːnɪˈkeɪʃn/", meaning: "沟通失误", example: "The delay was caused by a miscommunication between teams.", exampleCn: "延迟是由于团队间的沟通失误造成的。" }
    ],
    exercises: [
      { type: "choice", question: "We need to ___ on the API contract between our teams.", options: ["align", "agree", "match", "meet"], answer: 0, explanation: "align on 是职场中常用的表示达成一致的表达" },
      { type: "fill", sentence: "Could you notify us before making any ___ changes?", answer: "breaking", hint: "破坏性的", acceptableAnswers: ["breaking"] },
      { type: "choice", question: "Who should be the main point of ___ on your side?", options: ["contact", "person", "reach", "touch"], answer: 0, explanation: "point of contact 是指定联系人的固定表达" },
      { type: "fill", sentence: "___ forward, let's use a versioned API approach.", answer: "Going", hint: "今后", acceptableAnswers: ["Going"] },
      { type: "choice", question: "Let's set up a weekly ___ meeting to discuss changes.", options: ["sync", "update", "check", "talk"], answer: 0, explanation: "sync meeting 是同步会，用于团队间信息共享" },
      { type: "fill", sentence: "The delay was caused by a ___ between teams.", answer: "miscommunication", hint: "沟通失误", acceptableAnswers: ["miscommunication"] }
    ],
    rolePlay: {
      scenario: "你是前端组的负责人，需要和后端组的负责人沟通API接口问题。后端最近改了接口导致前端出错，你需要协商一个更好的协作流程。",
      scenarioEn: "You are the frontend lead discussing API issues with the backend lead to establish a better collaboration process.",
      role: "Frontend Lead",
      lines: [
        { speaker: "other", en: "Hi, I heard your team has been having issues with our API changes.", cn: "嗨，我听说你们团队在我们的API变更上遇到了问题。" },
        { speaker: "user", cn: "说是的，你们团队被阻塞了两天，因为接口规范变了没通知", en: "Yes, our team has been blocked for two days because the endpoint specifications changed without notice.", keywords: ["blocked", "endpoint specifications", "without notice"] },
        { speaker: "other", en: "I'm sorry about that. How can we improve our process?", cn: "对此很抱歉。我们怎么改进流程？" },
        { speaker: "user", cn: "建议建一个共享文档来记录所有API变更，并且设一个每周同步会", en: "I propose we set up shared documentation to log all API changes and have a weekly sync meeting.", keywords: ["shared documentation", "log", "weekly sync"] },
        { speaker: "other", en: "That sounds reasonable. Who should be the point of contact?", cn: "听起来很合理。谁做联系人？" },
        { speaker: "user", cn: "说你是前端的对接人，请问后端那边谁负责", en: "I'll be the point of contact on our side. Who's the primary contact on yours?", keywords: ["point of contact", "primary contact"] }
      ]
    }
  },
  {
    day: 10,
    category: "work",
    level: 3,
    title: "Project Retrospective",
    titleCn: "项目复盘",
    dialogue: [
      { speaker: "A", role: "Scrum Master", en: "Alright everyone, let's start our sprint retrospective. As usual, we'll discuss what went well, what didn't, and what we can improve.", cn: "好了各位，我们开始迭代复盘会吧。和往常一样，我们讨论哪些做得好、哪些做得不好、以及可以改进的地方。", keyWords: ["retrospective", "what went well", "improve"], grammar: "what went well / what didn't 过去时总结" },
      { speaker: "B", role: "Developer Kevin", en: "I think our communication improved a lot this sprint. The daily stand-ups were more effective.", cn: "我觉得这个迭代我们的沟通改进了很多。每日站会更有效率了。", keyWords: ["communication improved", "effective"] },
      { speaker: "C", role: "Developer Lisa", en: "I agree. The shared documentation channel also helped reduce misunderstandings between teams.", cn: "我同意。共享文档频道也帮助减少了团队间的误解。", keyWords: ["reduce misunderstandings"] },
      { speaker: "A", role: "Scrum Master", en: "That's great to hear. Now, what about the things that didn't go so well?", cn: "很高兴听到这个。那么，有哪些做得不好的地方呢？", keyWords: ["didn't go so well"] },
      { speaker: "B", role: "Developer Kevin", en: "We underestimated the complexity of the notification system. It ended up taking almost twice the estimated time.", cn: "我们低估了通知系统的复杂度。最终花了差不多两倍的预估时间。", keyWords: ["underestimated", "complexity", "twice the estimated time"] },
      { speaker: "C", role: "Developer Lisa", en: "Also, the code review process was a bottleneck. PRs were sitting in the queue for too long.", cn: "另外，代码审查流程是一个瓶颈。PR在队列里等了太长时间。", keyWords: ["bottleneck", "PRs", "queue"] },
      { speaker: "A", role: "Scrum Master", en: "Valid points. Let's come up with some action items. Any ideas on how to speed up code reviews?", cn: "说得好。我们来想一些改进措施。有什么办法加快代码审查吗？", keyWords: ["action items", "speed up"] },
      { speaker: "C", role: "Developer Lisa", en: "I suggest we set a rule that PRs should be reviewed within 24 hours. We could also rotate reviewers.", cn: "我建议我们设一个规则，PR应该在24小时内审查。我们也可以轮换审查人。", keyWords: ["set a rule", "rotate reviewers"], grammar: "suggest + (that) + 主语 + 动词原形，虚拟语气建议" },
      { speaker: "B", role: "Developer Kevin", en: "For the estimation issue, I think we should break down complex tasks into smaller sub-tasks before estimating.", cn: "关于估算的问题，我认为我们应该把复杂任务拆成更小的子任务后再估算。", keyWords: ["break down", "sub-tasks"] },
      { speaker: "A", role: "Scrum Master", en: "Those are excellent suggestions. Let me document these as action items. Kevin, can you own the task breakdown improvement?", cn: "这些建议都很好。让我把这些记录为改进措施。Kevin，你能负责任务拆分改进吗？", keyWords: ["document", "own"] },
      { speaker: "B", role: "Developer Kevin", en: "Sure, I'll create a template for task breakdown and share it with the team.", cn: "好的，我会创建一个任务拆分模板并分享给团队。", keyWords: ["template", "share"] },
      { speaker: "A", role: "Scrum Master", en: "And Lisa, could you draft the code review guidelines?", cn: "Lisa，你能起草代码审查指南吗？", keyWords: ["guidelines"] },
      { speaker: "C", role: "Developer Lisa", en: "Absolutely. I'll have it ready by next Monday.", cn: "当然。我下周一之前准备好。", keyWords: ["have it ready"] },
      { speaker: "A", role: "Scrum Master", en: "Great job, everyone. Overall, this was a productive sprint. Let's carry these improvements into the next one.", cn: "大家做得很好。总体来说，这是一个高效的迭代。让我们把这些改进带到下一个迭代中。", keyWords: ["productive", "carry into"] }
    ],
    vocabulary: [
      { word: "retrospective", phonetic: "/ˌretrəˈspektɪv/", meaning: "复盘，回顾会", example: "We hold a retrospective at the end of every sprint.", exampleCn: "我们在每个迭代结束时举行复盘会。" },
      { word: "bottleneck", phonetic: "/ˈbɒtlnek/", meaning: "瓶颈", example: "Testing has become a bottleneck in our workflow.", exampleCn: "测试已经成为我们工作流程中的瓶颈。" },
      { word: "underestimate", phonetic: "/ˌʌndərˈestɪmeɪt/", meaning: "低估", example: "We underestimated how long the migration would take.", exampleCn: "我们低估了迁移所需的时间。" },
      { word: "action item", phonetic: "/ˈækʃn ˈaɪtəm/", meaning: "改进措施，行动项", example: "Let's list the action items from today's meeting.", exampleCn: "我们列一下今天会议的行动项。" },
      { word: "break down", phonetic: "/breɪk daʊn/", meaning: "拆分，分解", example: "Let's break down this large task into smaller ones.", exampleCn: "我们把这个大任务拆成小任务吧。" },
      { word: "productive", phonetic: "/prəˈdʌktɪv/", meaning: "高效的，富有成效的", example: "It was a very productive meeting.", exampleCn: "这是一次非常高效的会议。" }
    ],
    exercises: [
      { type: "choice", question: "Let's discuss what went well and what we can ___.", options: ["improve", "change", "fix", "update"], answer: 0, explanation: "improve 表示改进，是复盘会的核心词汇" },
      { type: "fill", sentence: "We ___ the complexity of the notification system.", answer: "underestimated", hint: "低估（过去式）", acceptableAnswers: ["underestimated"] },
      { type: "choice", question: "The code review process was a ___.", options: ["bottleneck", "problem", "block", "issue"], answer: 0, explanation: "bottleneck 瓶颈，形象地描述流程中的卡点" },
      { type: "fill", sentence: "Let's come up with some action ___ for improvement.", answer: "items", hint: "项目/条目", acceptableAnswers: ["items"] },
      { type: "choice", question: "We should ___ down complex tasks into smaller sub-tasks.", options: ["break", "cut", "split", "tear"], answer: 0, explanation: "break down 是将大任务拆分的标准表达" },
      { type: "fill", sentence: "Overall, this was a ___ sprint.", answer: "productive", hint: "高效的", acceptableAnswers: ["productive"] }
    ],
    rolePlay: {
      scenario: "你参加项目复盘会。Scrum Master让大家分享这个迭代做得好的和需要改进的地方，然后提出具体改进措施。",
      scenarioEn: "You are in a sprint retrospective sharing what went well, what didn't, and proposing improvements.",
      role: "Developer",
      lines: [
        { speaker: "other", en: "Let's start the retrospective. What went well this sprint?", cn: "我们开始复盘吧。这个迭代什么做得好？" },
        { speaker: "user", cn: "说团队沟通改进了很多，站会更高效了", en: "I think our communication improved a lot. The daily stand-ups were more effective.", keywords: ["communication improved", "effective"] },
        { speaker: "other", en: "Good. What about things that didn't go well?", cn: "好。有哪些做得不好的？" },
        { speaker: "user", cn: "说低估了任务复杂度，代码审查也是瓶颈", en: "We underestimated the task complexity, and the code review process was a bottleneck.", keywords: ["underestimated", "bottleneck"] },
        { speaker: "other", en: "What improvements do you suggest?", cn: "你建议怎么改进？" },
        { speaker: "user", cn: "建议把复杂任务拆分，并设置PR必须24小时内审查的规则", en: "I suggest we break down complex tasks into smaller ones and set a rule that PRs should be reviewed within 24 hours.", keywords: ["break down", "set a rule", "24 hours"] }
      ]
    }
  }
];

// ===== 旅游场景课程数据 =====
const travelData = [
  {
    day: 1,
    category: "travel",
    level: 1,
    title: "Airport Check-in",
    titleCn: "机场值机",
    dialogue: [
      { speaker: "A", role: "Traveler", en: "Hi, I'd like to check in for my flight to London.", cn: "你好，我想办理去伦敦的航班值机。", keyWords: ["check in", "flight"], grammar: "I'd like to = I would like to，礼貌表达" },
      { speaker: "B", role: "Agent", en: "Sure. May I see your passport and booking confirmation?", cn: "好的，请出示您的护照和预订确认。", keyWords: ["passport", "booking confirmation"], grammar: "May I...? 礼貌请求" },
      { speaker: "A", role: "Traveler", en: "Here you go.", cn: "给你。", keyWords: ["Here you go"] },
      { speaker: "B", role: "Agent", en: "Would you like a window seat or an aisle seat?", cn: "您想要靠窗还是靠过道的座位？", keyWords: ["window seat", "aisle seat"], grammar: "Would you like A or B? 选择疑问句" },
      { speaker: "A", role: "Traveler", en: "A window seat, please.", cn: "请给我靠窗的座位。", keyWords: ["window seat"] },
      { speaker: "B", role: "Agent", en: "How many bags are you checking in?", cn: "您要托运几件行李？", keyWords: ["checking in", "bags"] },
      { speaker: "A", role: "Traveler", en: "Just one suitcase.", cn: "就一个行李箱。", keyWords: ["suitcase"] },
      { speaker: "B", role: "Agent", en: "Please place it on the scale. It's 20 kilos — within the limit.", cn: "请放到秤上。20公斤——没有超重。", keyWords: ["scale", "within the limit"] },
      { speaker: "B", role: "Agent", en: "Here's your boarding pass. Gate B12, boarding starts at 2:30 PM.", cn: "这是您的登机牌。B12登机口，下午2:30开始登机。", keyWords: ["boarding pass", "gate"], grammar: "starts at + 时间，表示在某时开始" },
      { speaker: "A", role: "Traveler", en: "Thank you very much!", cn: "非常感谢！", keyWords: [] }
    ],
    vocabulary: [
      { word: "check in", phonetic: "/tʃek ɪn/", meaning: "值机，办理登机手续", example: "You can check in online 24 hours before the flight.", exampleCn: "你可以在航班起飞前24小时在线值机。" },
      { word: "boarding pass", phonetic: "/ˈbɔːdɪŋ pɑːs/", meaning: "登机牌", example: "Please show your boarding pass at the gate.", exampleCn: "请在登机口出示登机牌。" },
      { word: "aisle seat", phonetic: "/aɪl siːt/", meaning: "靠过道的座位", example: "I prefer an aisle seat so I can stretch my legs.", exampleCn: "我喜欢靠过道的座位，这样可以伸腿。" },
      { word: "window seat", phonetic: "/ˈwɪndoʊ siːt/", meaning: "靠窗座位", example: "Can I have a window seat? I love watching the clouds.", exampleCn: "能给我靠窗的座位吗？我喜欢看云。" },
      { word: "suitcase", phonetic: "/ˈsuːtkeɪs/", meaning: "行李箱", example: "My suitcase is too heavy. I need to take something out.", exampleCn: "我的行李箱太重了，需要拿些东西出来。" },
      { word: "gate", phonetic: "/ɡeɪt/", meaning: "登机口", example: "The gate has changed from A5 to B12.", exampleCn: "登机口从A5改到B12了。" },
      { word: "booking confirmation", phonetic: "/ˈbʊkɪŋ ˌkɒnfəˈmeɪʃn/", meaning: "预订确认", example: "Please bring your booking confirmation to the counter.", exampleCn: "请把预订确认带到柜台。" }
    ],
    exercises: [
      { type: "choice", question: "I'd like to ___ in for my flight.", options: ["check", "sign", "log", "get"], answer: 0, explanation: "check in 是办理值机的固定搭配" },
      { type: "choice", question: "Would you like a window seat or an ___ seat?", options: ["aisle", "isle", "hall", "side"], answer: 0, explanation: "aisle seat 靠过道座位，注意 aisle 的拼写" },
      { type: "fill", sentence: "Here's your ___. Gate B12.", answer: "boarding pass", hint: "登机牌", acceptableAnswers: ["boarding pass"] },
      { type: "choice", question: "How many bags are you ___ in?", options: ["checking", "bringing", "taking", "carrying"], answer: 0, explanation: "checking in bags 是托运行李的说法" },
      { type: "fill", sentence: "May I see your ___ and booking confirmation?", answer: "passport", hint: "护照", acceptableAnswers: ["passport"] },
      { type: "choice", question: "It's 20 kilos — ___ the limit.", options: ["within", "inside", "under", "below"], answer: 0, explanation: "within the limit 表示在限制范围内" }
    ],
    rolePlay: {
      scenario: "你到机场柜台办理值机手续，目的地是纽约。你想要一个靠窗的座位，有一个行李箱要托运。",
      scenarioEn: "You are at the airport counter checking in for a flight to New York.",
      role: "Traveler",
      lines: [
        { speaker: "other", en: "Hello! Where are you flying to today?", cn: "你好！您今天要飞去哪里？" },
        { speaker: "user", cn: "说你要办理去纽约的航班值机", en: "I'd like to check in for my flight to New York.", keywords: ["check in", "New York"] },
        { speaker: "other", en: "May I see your passport, please?", cn: "请出示您的护照。" },
        { speaker: "user", cn: "说给你，然后表示想要靠窗的座位", en: "Here you go. Can I have a window seat, please?", keywords: ["window seat"] },
        { speaker: "other", en: "Of course. How many bags are you checking in?", cn: "当然。您要托运几件行李？" },
        { speaker: "user", cn: "说只有一个行李箱", en: "Just one suitcase.", keywords: ["suitcase"] },
        { speaker: "other", en: "Here's your boarding pass. Gate A8, boarding at 3 PM. Have a nice flight!", cn: "这是您的登机牌。A8登机口，下午3点登机。祝飞行愉快！" },
        { speaker: "user", cn: "表示感谢", en: "Thank you very much!", keywords: ["Thank you"] }
      ]
    }
  },
  {
    day: 2,
    category: "travel",
    level: 1,
    title: "Hotel Check-in",
    titleCn: "酒店入住",
    dialogue: [
      { speaker: "A", role: "Guest", en: "Good evening. I have a reservation under the name Li Wei.", cn: "晚上好。我有一个预订，名字是李伟。", keyWords: ["reservation", "under the name"], grammar: "under the name 以...的名字预订" },
      { speaker: "B", role: "Receptionist", en: "Welcome! Let me look that up. Could I see your ID, please?", cn: "欢迎！让我查一下。请出示您的证件好吗？", keyWords: ["look that up", "ID"], grammar: "Could I see...? 礼貌请求" },
      { speaker: "A", role: "Guest", en: "Here's my passport.", cn: "这是我的护照。", keyWords: ["passport"] },
      { speaker: "B", role: "Receptionist", en: "I found your booking. A double room for three nights, checking out on Friday. Is that correct?", cn: "找到您的预订了。双人房三晚，周五退房。对吗？", keyWords: ["double room", "checking out"], grammar: "现在分词 checking out 表示计划中的动作" },
      { speaker: "A", role: "Guest", en: "Yes, that's right. Does the room have Wi-Fi?", cn: "是的，没错。房间有Wi-Fi吗？", keyWords: ["Wi-Fi"] },
      { speaker: "B", role: "Receptionist", en: "Yes, free Wi-Fi is available throughout the hotel. The password is on the card in your room.", cn: "是的，整个酒店都有免费Wi-Fi。密码在房间的卡片上。", keyWords: ["free Wi-Fi", "available", "password"] },
      { speaker: "A", role: "Guest", en: "Great. What time is breakfast served?", cn: "太好了。早餐几点供应？", keyWords: ["breakfast", "served"], grammar: "What time is...served? 询问供应时间" },
      { speaker: "B", role: "Receptionist", en: "Breakfast is from 7 to 10 AM in the restaurant on the second floor.", cn: "早餐在二楼餐厅，早上7点到10点供应。", keyWords: ["second floor"] },
      { speaker: "B", role: "Receptionist", en: "Here's your key card. Your room is 508, on the fifth floor. The elevator is on your right.", cn: "这是您的房卡。您的房间是508，在五楼。电梯在您右边。", keyWords: ["key card", "elevator"] },
      { speaker: "A", role: "Guest", en: "Thank you. Is there a gym in the hotel?", cn: "谢谢。酒店里有健身房吗？", keyWords: ["gym"] }
    ],
    vocabulary: [
      { word: "reservation", phonetic: "/ˌrezərˈveɪʃn/", meaning: "预订", example: "I'd like to make a reservation for two nights.", exampleCn: "我想预订两晚。" },
      { word: "check out", phonetic: "/tʃek aʊt/", meaning: "退房", example: "What time do I need to check out?", exampleCn: "我需要几点退房？" },
      { word: "double room", phonetic: "/ˈdʌbl ruːm/", meaning: "双人房", example: "We'd like a double room with a sea view.", exampleCn: "我们想要一间海景双人房。" },
      { word: "key card", phonetic: "/kiː kɑːrd/", meaning: "房卡", example: "You need the key card to access the elevator.", exampleCn: "你需要房卡才能使用电梯。" },
      { word: "available", phonetic: "/əˈveɪləbl/", meaning: "可用的", example: "Is room service available 24 hours?", exampleCn: "客房服务是24小时的吗？" },
      { word: "elevator", phonetic: "/ˈelɪveɪtər/", meaning: "电梯", example: "Take the elevator to the fifth floor.", exampleCn: "乘电梯到五楼。" }
    ],
    exercises: [
      { type: "choice", question: "I have a ___ under the name Li Wei.", options: ["reservation", "preservation", "conservation", "observation"], answer: 0, explanation: "reservation 意为预订，是酒店常用词" },
      { type: "fill", sentence: "Here's your ___. Your room is 508.", answer: "key card", hint: "房卡", acceptableAnswers: ["key card", "keycard"] },
      { type: "choice", question: "A double room for three nights, ___ out on Friday.", options: ["checking", "checked", "check", "checks"], answer: 0, explanation: "checking out 现在分词表示计划中的退房动作" },
      { type: "fill", sentence: "What time is breakfast ___?", answer: "served", hint: "供应", acceptableAnswers: ["served"] },
      { type: "choice", question: "Free Wi-Fi is ___ throughout the hotel.", options: ["available", "accessible", "reachable", "obtainable"], answer: 0, explanation: "available 表示可用的，是最常见的搭配" },
      { type: "fill", sentence: "The ___ is on your right.", answer: "elevator", hint: "电梯", acceptableAnswers: ["elevator", "lift"] }
    ],
    rolePlay: {
      scenario: "你到达酒店前台，告知预订信息，询问Wi-Fi和早餐时间。",
      scenarioEn: "You arrive at the hotel front desk to check in with your reservation.",
      role: "Guest",
      lines: [
        { speaker: "other", en: "Good evening! Welcome to Grand Hotel. Do you have a reservation?", cn: "晚上好！欢迎来到格兰酒店。您有预订吗？" },
        { speaker: "user", cn: "说你有预订，名字是你的名字", en: "Yes, I have a reservation under the name Li Wei.", keywords: ["reservation", "under the name"] },
        { speaker: "other", en: "Found it. A single room for two nights. Could I see your passport?", cn: "找到了。单人房两晚。能看一下您的护照吗？" },
        { speaker: "user", cn: "递上护照，并询问房间是否有Wi-Fi", en: "Here's my passport. Does the room have Wi-Fi?", keywords: ["passport", "Wi-Fi"] },
        { speaker: "other", en: "Yes, free Wi-Fi is available. Here's your key card, room 302.", cn: "是的，有免费Wi-Fi。这是您的房卡，302房间。" },
        { speaker: "user", cn: "感谢并询问早餐时间", en: "Thank you. What time is breakfast served?", keywords: ["breakfast", "served"] }
      ]
    }
  },
  {
    day: 3,
    category: "travel",
    level: 1,
    title: "Asking for Directions",
    titleCn: "问路",
    dialogue: [
      { speaker: "A", role: "Tourist", en: "Excuse me, could you tell me how to get to the nearest subway station?", cn: "打扰一下，你能告诉我怎么去最近的地铁站吗？", keyWords: ["Excuse me", "how to get to", "subway station"], grammar: "Could you tell me how to...? 礼貌问路句型" },
      { speaker: "B", role: "Local", en: "Sure! Go straight for two blocks, then turn left at the traffic light.", cn: "当然！直走两个街区，然后在红绿灯处左转。", keyWords: ["go straight", "blocks", "turn left", "traffic light"] },
      { speaker: "A", role: "Tourist", en: "Two blocks straight and then left?", cn: "直走两个街区然后左转？", keyWords: [] },
      { speaker: "B", role: "Local", en: "Yes. You'll see a big shopping mall on the corner. The station entrance is right next to it.", cn: "是的。你会看到拐角有一个大商场。地铁站入口就在旁边。", keyWords: ["shopping mall", "corner", "entrance", "next to"], grammar: "You'll see... 用将来时描述即将看到的地标" },
      { speaker: "A", role: "Tourist", en: "How far is it from here?", cn: "离这儿有多远？", keyWords: ["How far"], grammar: "How far is it? 询问距离" },
      { speaker: "B", role: "Local", en: "It's about a ten-minute walk.", cn: "走路大约十分钟。", keyWords: ["ten-minute walk"] },
      { speaker: "A", role: "Tourist", en: "Is there a bus that goes there?", cn: "有公交车去那儿吗？", keyWords: ["bus"] },
      { speaker: "B", role: "Local", en: "Yes, you can take bus number 42. The bus stop is just across the street.", cn: "有，你可以坐42路公交。公交站就在街对面。", keyWords: ["bus stop", "across the street"] },
      { speaker: "A", role: "Tourist", en: "That's very helpful. Thank you so much!", cn: "太有帮助了。非常感谢！", keyWords: ["helpful"] },
      { speaker: "B", role: "Local", en: "You're welcome. Enjoy your stay!", cn: "不客气。祝你玩得愉快！", keyWords: ["Enjoy your stay"] }
    ],
    vocabulary: [
      { word: "go straight", phonetic: "/ɡoʊ streɪt/", meaning: "直走", example: "Go straight for about 200 meters.", exampleCn: "直走大约200米。" },
      { word: "turn left", phonetic: "/tɜːrn left/", meaning: "左转", example: "Turn left at the next intersection.", exampleCn: "在下一个十字路口左转。" },
      { word: "traffic light", phonetic: "/ˈtræfɪk laɪt/", meaning: "红绿灯", example: "Stop at the traffic light and wait for green.", exampleCn: "在红绿灯处停下等绿灯。" },
      { word: "block", phonetic: "/blɒk/", meaning: "街区", example: "The restaurant is two blocks away.", exampleCn: "那家餐厅在两个街区外。" },
      { word: "across the street", phonetic: "/əˈkrɒs ðə striːt/", meaning: "在街对面", example: "The pharmacy is across the street from the bank.", exampleCn: "药店在银行对面。" },
      { word: "entrance", phonetic: "/ˈentrəns/", meaning: "入口", example: "The main entrance is on the north side.", exampleCn: "正门在北边。" },
      { word: "subway station", phonetic: "/ˈsʌbweɪ ˈsteɪʃn/", meaning: "地铁站", example: "The subway station is just around the corner.", exampleCn: "地铁站就在拐角处。" }
    ],
    exercises: [
      { type: "choice", question: "Could you tell me how to ___ to the museum?", options: ["get", "go", "arrive", "reach"], answer: 0, explanation: "how to get to 是问路的固定搭配" },
      { type: "fill", sentence: "Go ___ for two blocks, then turn left.", answer: "straight", hint: "直走", acceptableAnswers: ["straight"] },
      { type: "choice", question: "Turn left at the ___.", options: ["traffic light", "traffic lamp", "traffic sign", "traffic signal"], answer: 0, explanation: "traffic light 红绿灯，是最常用的说法" },
      { type: "fill", sentence: "It's about a ten-minute ___.", answer: "walk", hint: "步行", acceptableAnswers: ["walk"] },
      { type: "choice", question: "The bus stop is just ___ the street.", options: ["across", "cross", "through", "over"], answer: 0, explanation: "across the street 在街对面" },
      { type: "fill", sentence: "The station ___ is right next to the mall.", answer: "entrance", hint: "入口", acceptableAnswers: ["entrance"] }
    ],
    rolePlay: {
      scenario: "你在国外旅游，想去附近的博物馆但不知道路，向路人问路。",
      scenarioEn: "You are a tourist asking a local for directions to a nearby museum.",
      role: "Tourist",
      lines: [
        { speaker: "other", en: "Hi there! You look a bit lost. Can I help you?", cn: "嗨！你看起来有点迷路了。需要帮忙吗？" },
        { speaker: "user", cn: "问怎么去最近的博物馆", en: "Yes, please. Could you tell me how to get to the nearest museum?", keywords: ["how to get to", "museum"] },
        { speaker: "other", en: "Sure. Go straight for three blocks and turn right at the traffic light.", cn: "当然。直走三个街区，在红绿灯处右转。" },
        { speaker: "user", cn: "询问离这里有多远", en: "How far is it from here?", keywords: ["How far"] },
        { speaker: "other", en: "It's about a fifteen-minute walk. Or you can take bus number 15.", cn: "走路大约十五分钟。或者你可以坐15路公交。" },
        { speaker: "user", cn: "问公交站在哪里", en: "Where is the bus stop?", keywords: ["bus stop"] }
      ]
    }
  },
  {
    day: 4,
    category: "travel",
    level: 2,
    title: "Ordering Food",
    titleCn: "餐厅点餐",
    dialogue: [
      { speaker: "A", role: "Waiter", en: "Good evening. Welcome to La Bella. Do you have a reservation?", cn: "晚上好。欢迎来到La Bella。您有预订吗？", keyWords: ["reservation"] },
      { speaker: "B", role: "Diner", en: "No, we don't. Do you have a table for two?", cn: "没有。有两人桌吗？", keyWords: ["table for two"] },
      { speaker: "A", role: "Waiter", en: "Yes, please follow me. Here's the menu.", cn: "有的，请跟我来。这是菜单。", keyWords: ["menu"] },
      { speaker: "B", role: "Diner", en: "Thank you. What do you recommend?", cn: "谢谢。你推荐什么？", keyWords: ["recommend"], grammar: "What do you recommend? 询问推荐" },
      { speaker: "A", role: "Waiter", en: "Our grilled salmon is very popular, and the mushroom risotto is our chef's special today.", cn: "我们的烤三文鱼很受欢迎，蘑菇烩饭是今天的主厨特餐。", keyWords: ["grilled salmon", "mushroom risotto", "chef's special"] },
      { speaker: "B", role: "Diner", en: "I'll have the grilled salmon. And could I get a Caesar salad as a starter?", cn: "我要烤三文鱼。能来一份凯撒沙拉做前菜吗？", keyWords: ["starter", "Caesar salad"], grammar: "I'll have... 点餐常用表达" },
      { speaker: "A", role: "Waiter", en: "Of course. How would you like your salmon? Medium or well-done?", cn: "当然。三文鱼要几分熟？五分熟还是全熟？", keyWords: ["medium", "well-done"], grammar: "How would you like...? 询问偏好" },
      { speaker: "B", role: "Diner", en: "Medium, please. Also, I'm allergic to nuts. Does the salad contain any?", cn: "五分熟，谢谢。另外，我对坚果过敏。沙拉里有坚果吗？", keyWords: ["allergic to", "nuts", "contain"], grammar: "be allergic to 对...过敏" },
      { speaker: "A", role: "Waiter", en: "No, the Caesar salad is nut-free. Would you like anything to drink?", cn: "没有，凯撒沙拉不含坚果。您要喝点什么？", keyWords: ["nut-free"] },
      { speaker: "B", role: "Diner", en: "A glass of sparkling water, please.", cn: "请来一杯气泡水。", keyWords: ["sparkling water"] }
    ],
    vocabulary: [
      { word: "recommend", phonetic: "/ˌrekəˈmend/", meaning: "推荐", example: "Can you recommend a good local restaurant?", exampleCn: "你能推荐一家好的当地餐厅吗？" },
      { word: "starter", phonetic: "/ˈstɑːrtər/", meaning: "前菜，开胃菜", example: "I'll have the soup as a starter.", exampleCn: "我要汤做前菜。" },
      { word: "allergic to", phonetic: "/əˈlɜːrdʒɪk tuː/", meaning: "对…过敏", example: "I'm allergic to shellfish.", exampleCn: "我对贝类过敏。" },
      { word: "well-done", phonetic: "/ˌwel ˈdʌn/", meaning: "全熟", example: "I'd like my steak well-done, please.", exampleCn: "我的牛排要全熟。" },
      { word: "sparkling water", phonetic: "/ˈspɑːrklɪŋ ˈwɔːtər/", meaning: "气泡水", example: "Would you prefer still or sparkling water?", exampleCn: "您要纯净水还是气泡水？" },
      { word: "chef's special", phonetic: "/ʃefs ˈspeʃl/", meaning: "主厨特餐", example: "The chef's special today is grilled lamb.", exampleCn: "今天的主厨特餐是烤羊排。" }
    ],
    exercises: [
      { type: "choice", question: "What do you ___? We're not sure what to order.", options: ["recommend", "suggest", "advise", "propose"], answer: 0, explanation: "recommend 是餐厅最常用的询问推荐用词" },
      { type: "fill", sentence: "I'm ___ to nuts. Does this dish contain any?", answer: "allergic", hint: "过敏的", acceptableAnswers: ["allergic"] },
      { type: "choice", question: "Could I get a Caesar salad as a ___?", options: ["starter", "start", "beginning", "opening"], answer: 0, explanation: "starter 前菜、开胃菜" },
      { type: "fill", sentence: "How would you like your salmon? Medium or ___?", answer: "well-done", hint: "全熟", acceptableAnswers: ["well-done", "well done"] },
      { type: "choice", question: "A glass of ___ water, please.", options: ["sparkling", "sparkle", "sparky", "shining"], answer: 0, explanation: "sparkling water 气泡水" },
      { type: "fill", sentence: "Do you have a ___ for two?", answer: "table", hint: "桌子", acceptableAnswers: ["table"] }
    ],
    rolePlay: {
      scenario: "你在一家西餐厅点餐，想要一份牛排和一份沙拉，你对海鲜过敏，需要告知服务员。",
      scenarioEn: "You are ordering at a Western restaurant. You want a steak and a salad, and you need to mention your seafood allergy.",
      role: "Diner",
      lines: [
        { speaker: "other", en: "Good evening! Are you ready to order?", cn: "晚上好！准备好点餐了吗？" },
        { speaker: "user", cn: "询问服务员推荐什么", en: "What do you recommend?", keywords: ["recommend"] },
        { speaker: "other", en: "Our grilled steak is excellent. Would you like to try it?", cn: "我们的烤牛排很棒。您想试试吗？" },
        { speaker: "user", cn: "说要牛排，要五分熟，并说你对海鲜过敏", en: "I'll have the steak, medium please. And I'm allergic to seafood.", keywords: ["steak", "medium", "allergic"] },
        { speaker: "other", en: "Noted. Would you like a starter or any side dish?", cn: "好的。您要前菜或配菜吗？" },
        { speaker: "user", cn: "说要一份凯撒沙拉做前菜", en: "I'll have a Caesar salad as a starter, please.", keywords: ["Caesar salad", "starter"] }
      ]
    }
  },
  {
    day: 5,
    category: "travel",
    level: 2,
    title: "Taking a Taxi",
    titleCn: "打车",
    dialogue: [
      { speaker: "A", role: "Passenger", en: "Hi, could you take me to the Hilton Hotel on Main Street?", cn: "你好，能送我去主街的希尔顿酒店吗？", keyWords: ["take me to"], grammar: "Could you take me to...? 打车常用句型" },
      { speaker: "B", role: "Driver", en: "Sure, hop in. Do you know the exact address?", cn: "好的，上车吧。你知道具体地址吗？", keyWords: ["hop in", "exact address"] },
      { speaker: "A", role: "Passenger", en: "It's 200 Main Street, near the city center.", cn: "主街200号，靠近市中心。", keyWords: ["near the city center"] },
      { speaker: "B", role: "Driver", en: "Got it. It'll take about 20 minutes, depending on traffic.", cn: "明白了。大约需要20分钟，取决于交通状况。", keyWords: ["depending on traffic"], grammar: "depending on 取决于" },
      { speaker: "A", role: "Passenger", en: "Is there a lot of traffic at this hour?", cn: "这个时间交通拥堵吗？", keyWords: ["traffic"] },
      { speaker: "B", role: "Driver", en: "It's rush hour, so it might take a bit longer. I'll try to find a faster route.", cn: "现在是高峰期，可能会久一点。我尽量找一条更快的路。", keyWords: ["rush hour", "faster route"] },
      { speaker: "A", role: "Passenger", en: "Thank you. Could you turn on the air conditioning, please?", cn: "谢谢。能开一下空调吗？", keyWords: ["air conditioning"], grammar: "Could you + 动词? 礼貌请求" },
      { speaker: "B", role: "Driver", en: "Of course. Here we are — Hilton Hotel.", cn: "当然。到了——希尔顿酒店。", keyWords: ["Here we are"] },
      { speaker: "A", role: "Passenger", en: "How much is the fare?", cn: "车费多少？", keyWords: ["fare"] },
      { speaker: "B", role: "Driver", en: "That'll be $25. Do you need a receipt?", cn: "25美元。需要收据吗？", keyWords: ["receipt"] }
    ],
    vocabulary: [
      { word: "fare", phonetic: "/feər/", meaning: "车费", example: "The taxi fare from the airport was $40.", exampleCn: "从机场打车费用是40美元。" },
      { word: "rush hour", phonetic: "/rʌʃ aʊər/", meaning: "高峰时段", example: "Avoid taking a taxi during rush hour.", exampleCn: "避免在高峰时段打车。" },
      { word: "receipt", phonetic: "/rɪˈsiːt/", meaning: "收据", example: "Could I have a receipt, please?", exampleCn: "请给我一张收据好吗？" },
      { word: "route", phonetic: "/ruːt/", meaning: "路线", example: "Let's take a different route to avoid traffic.", exampleCn: "我们走另一条路以避开交通堵塞。" },
      { word: "air conditioning", phonetic: "/eər kənˈdɪʃənɪŋ/", meaning: "空调", example: "Could you turn up the air conditioning?", exampleCn: "能把空调开大一点吗？" },
      { word: "hop in", phonetic: "/hɒp ɪn/", meaning: "上车（口语）", example: "Hop in, I'll give you a ride.", exampleCn: "上车吧，我载你一程。" }
    ],
    exercises: [
      { type: "choice", question: "Could you ___ me to the airport?", options: ["take", "bring", "carry", "send"], answer: 0, explanation: "take me to 是打车时最常用的表达" },
      { type: "fill", sentence: "It'll take about 20 minutes, ___ on traffic.", answer: "depending", hint: "取决于", acceptableAnswers: ["depending"] },
      { type: "choice", question: "It's ___ hour, so there's a lot of traffic.", options: ["rush", "busy", "peak", "hurry"], answer: 0, explanation: "rush hour 高峰时段" },
      { type: "fill", sentence: "How much is the ___?", answer: "fare", hint: "车费", acceptableAnswers: ["fare"] },
      { type: "choice", question: "Do you need a ___?", options: ["receipt", "recipe", "receive", "record"], answer: 0, explanation: "receipt 收据，注意和 recipe（食谱）区分" },
      { type: "fill", sentence: "___ in! I'll take you there.", answer: "Hop", hint: "上车（口语）", acceptableAnswers: ["Hop"] }
    ],
    rolePlay: {
      scenario: "你在路边打了一辆出租车，要去机场，希望司机走最快的路线，并询问大概多少钱。",
      scenarioEn: "You hail a taxi on the street and need to get to the airport quickly.",
      role: "Passenger",
      lines: [
        { speaker: "other", en: "Where to?", cn: "去哪儿？" },
        { speaker: "user", cn: "说你要去机场", en: "Could you take me to the airport, please?", keywords: ["take me to", "airport"] },
        { speaker: "other", en: "Sure. It's rush hour though, might take about 40 minutes.", cn: "好的。不过现在是高峰期，可能要40分钟。" },
        { speaker: "user", cn: "请司机尽量找一条快的路线", en: "Could you try to find a faster route? I have a flight to catch.", keywords: ["faster route"] },
        { speaker: "other", en: "I'll do my best. Here we are, the airport.", cn: "我尽力。到了，机场。" },
        { speaker: "user", cn: "问车费多少并要一张收据", en: "How much is the fare? And could I have a receipt, please?", keywords: ["fare", "receipt"] }
      ]
    }
  },
  {
    day: 6,
    category: "travel",
    level: 2,
    title: "Shopping for Souvenirs",
    titleCn: "购买纪念品",
    dialogue: [
      { speaker: "A", role: "Shopper", en: "Hi, I'm looking for some souvenirs. Do you have anything typical of this area?", cn: "你好，我想买些纪念品。有什么这个地区的特色吗？", keyWords: ["souvenirs", "typical of"], grammar: "I'm looking for... 购物常用句型" },
      { speaker: "B", role: "Shop Owner", en: "Of course! We have handmade pottery, silk scarves, and local tea. They're all very popular with tourists.", cn: "当然！我们有手工陶器、丝巾和当地的茶叶。这些在游客中都很受欢迎。", keyWords: ["handmade", "pottery", "silk scarves", "popular with"] },
      { speaker: "A", role: "Shopper", en: "These scarves are beautiful. How much is this blue one?", cn: "这些丝巾很漂亮。这条蓝色的多少钱？", keyWords: ["How much"] },
      { speaker: "B", role: "Shop Owner", en: "That one is $35. It's made of 100% pure silk.", cn: "这条35美元。它是100%纯丝的。", keyWords: ["pure silk"] },
      { speaker: "A", role: "Shopper", en: "That's a bit expensive. Could you give me a discount if I buy two?", cn: "有点贵。如果我买两条能打折吗？", keyWords: ["discount", "a bit expensive"], grammar: "Could you give me a discount? 砍价表达" },
      { speaker: "B", role: "Shop Owner", en: "If you buy two, I can give you 10% off. That would be $63 for both.", cn: "如果买两条，我可以给你打九折。两条一共63美元。", keyWords: ["10% off"] },
      { speaker: "A", role: "Shopper", en: "That sounds fair. I'll take a blue one and a red one. Can I pay by credit card?", cn: "听起来很合理。我要一条蓝色和一条红色的。可以刷信用卡吗？", keyWords: ["I'll take", "credit card"], grammar: "I'll take... 决定购买" },
      { speaker: "B", role: "Shop Owner", en: "Yes, we accept Visa and Mastercard. Would you like me to wrap them as gifts?", cn: "可以，我们接受Visa和万事达。需要帮你包装成礼物吗？", keyWords: ["accept", "wrap", "gifts"] },
      { speaker: "A", role: "Shopper", en: "Yes, please. They're gifts for my family.", cn: "好的，请包装一下。它们是送给家人的礼物。", keyWords: ["gifts"] },
      { speaker: "B", role: "Shop Owner", en: "Here you go. I hope your family likes them!", cn: "给你。希望你家人喜欢！", keyWords: [] }
    ],
    vocabulary: [
      { word: "souvenir", phonetic: "/ˌsuːvəˈnɪər/", meaning: "纪念品", example: "I bought some souvenirs for my friends.", exampleCn: "我给朋友们买了一些纪念品。" },
      { word: "discount", phonetic: "/ˈdɪskaʊnt/", meaning: "折扣", example: "Is there a discount for students?", exampleCn: "学生有折扣吗？" },
      { word: "handmade", phonetic: "/ˌhændˈmeɪd/", meaning: "手工制作的", example: "This handmade jewelry is unique.", exampleCn: "这件手工首饰是独一无二的。" },
      { word: "wrap", phonetic: "/ræp/", meaning: "包装", example: "Could you wrap this as a gift, please?", exampleCn: "能帮我把这个包装成礼物吗？" },
      { word: "credit card", phonetic: "/ˈkredɪt kɑːrd/", meaning: "信用卡", example: "Do you accept credit cards?", exampleCn: "你们接受信用卡吗？" },
      { word: "pure silk", phonetic: "/pjʊər sɪlk/", meaning: "纯丝", example: "This scarf is made of pure silk.", exampleCn: "这条围巾是纯丝制作的。" }
    ],
    exercises: [
      { type: "choice", question: "I'm ___ for some souvenirs.", options: ["looking", "searching", "seeking", "finding"], answer: 0, explanation: "I'm looking for 是购物时最常用的表达" },
      { type: "fill", sentence: "Could you give me a ___ if I buy two?", answer: "discount", hint: "折扣", acceptableAnswers: ["discount"] },
      { type: "choice", question: "If you buy two, I can give you 10% ___.", options: ["off", "down", "less", "away"], answer: 0, explanation: "10% off 打九折" },
      { type: "fill", sentence: "Would you like me to ___ them as gifts?", answer: "wrap", hint: "包装", acceptableAnswers: ["wrap"] },
      { type: "choice", question: "Can I pay by ___ card?", options: ["credit", "debit", "bank", "money"], answer: 0, explanation: "credit card 信用卡，国外购物常用" },
      { type: "fill", sentence: "It's made of 100% ___ silk.", answer: "pure", hint: "纯的", acceptableAnswers: ["pure"] }
    ],
    rolePlay: {
      scenario: "你在一家纪念品店选购礼物送给朋友，想买一些有当地特色的东西，并尝试砍价。",
      scenarioEn: "You are shopping for souvenirs at a gift shop and want to negotiate a price.",
      role: "Shopper",
      lines: [
        { speaker: "other", en: "Welcome! Are you looking for anything special?", cn: "欢迎！您在找什么特别的东西吗？" },
        { speaker: "user", cn: "说你想买些有当地特色的纪念品", en: "I'm looking for some souvenirs that are typical of this area.", keywords: ["souvenirs", "typical"] },
        { speaker: "other", en: "We have beautiful handmade pottery. This one is $50.", cn: "我们有漂亮的手工陶器。这个50美元。" },
        { speaker: "user", cn: "觉得有点贵，问能否打折", en: "That's a bit expensive. Could you give me a discount?", keywords: ["expensive", "discount"] },
        { speaker: "other", en: "I can give you 15% off if you buy two.", cn: "如果买两个可以给你打八五折。" },
        { speaker: "user", cn: "同意并问能否刷信用卡", en: "Sounds good. I'll take two. Can I pay by credit card?", keywords: ["I'll take", "credit card"] }
      ]
    }
  },
  {
    day: 7,
    category: "travel",
    level: 2,
    title: "Buying Attraction Tickets",
    titleCn: "购买景点门票",
    dialogue: [
      { speaker: "A", role: "Visitor", en: "Hello, I'd like to buy tickets for the museum. How much is the admission?", cn: "你好，我想买博物馆的门票。门票多少钱？", keyWords: ["tickets", "admission"] },
      { speaker: "B", role: "Ticket Agent", en: "Adult tickets are $25, and student tickets are $15. Do you have a student ID?", cn: "成人票25美元，学生票15美元。您有学生证吗？", keyWords: ["adult tickets", "student tickets", "student ID"] },
      { speaker: "A", role: "Visitor", en: "No, I'm not a student. I'll take two adult tickets, please.", cn: "不是，我不是学生。请给我两张成人票。", keyWords: [] },
      { speaker: "B", role: "Ticket Agent", en: "Would you like an audio guide? It's an additional $8 per person.", cn: "您需要语音导览吗？每人另加8美元。", keyWords: ["audio guide", "additional"], grammar: "additional 额外的" },
      { speaker: "A", role: "Visitor", en: "Yes, we'll take two audio guides. What languages are available?", cn: "好的，我们要两个语音导览。有哪些语言？", keyWords: ["languages available"] },
      { speaker: "B", role: "Ticket Agent", en: "We have English, Chinese, Japanese, and Spanish.", cn: "我们有英语、中文、日语和西班牙语。", keyWords: [] },
      { speaker: "A", role: "Visitor", en: "Chinese, please. What are the opening hours?", cn: "中文的，谢谢。开放时间是什么？", keyWords: ["opening hours"], grammar: "What are the opening hours? 询问开放时间" },
      { speaker: "B", role: "Ticket Agent", en: "The museum is open from 9 AM to 6 PM. Last entry is at 5 PM.", cn: "博物馆开放时间是早上9点到下午6点。最后入场时间是下午5点。", keyWords: ["last entry"] },
      { speaker: "A", role: "Visitor", en: "Is photography allowed inside?", cn: "里面可以拍照吗？", keyWords: ["photography allowed"], grammar: "Is... allowed? 询问是否被允许" },
      { speaker: "B", role: "Ticket Agent", en: "Yes, but no flash photography, please. Enjoy your visit!", cn: "可以，但请不要使用闪光灯。祝参观愉快！", keyWords: ["flash photography"] }
    ],
    vocabulary: [
      { word: "admission", phonetic: "/ədˈmɪʃn/", meaning: "入场费，门票", example: "Admission to the park is free on Sundays.", exampleCn: "公园周日免费入场。" },
      { word: "audio guide", phonetic: "/ˈɔːdiəʊ ɡaɪd/", meaning: "语音导览", example: "The audio guide is available in eight languages.", exampleCn: "语音导览有八种语言可选。" },
      { word: "opening hours", phonetic: "/ˈəʊpənɪŋ ˈaʊərz/", meaning: "开放时间", example: "What are the opening hours of the gallery?", exampleCn: "画廊的开放时间是什么？" },
      { word: "last entry", phonetic: "/lɑːst ˈentri/", meaning: "最后入场时间", example: "Last entry is 30 minutes before closing.", exampleCn: "最后入场时间是闭馆前30分钟。" },
      { word: "flash photography", phonetic: "/flæʃ fəˈtɒɡrəfi/", meaning: "闪光灯拍照", example: "Flash photography is not allowed in the museum.", exampleCn: "博物馆内禁止使用闪光灯拍照。" },
      { word: "additional", phonetic: "/əˈdɪʃənl/", meaning: "额外的", example: "There's an additional charge for the special exhibition.", exampleCn: "特别展览需要额外收费。" }
    ],
    exercises: [
      { type: "choice", question: "How much is the ___ to the museum?", options: ["admission", "admission fee", "entry", "ticket"], answer: 0, explanation: "admission 入场费，常用于景点售票处" },
      { type: "fill", sentence: "Would you like an ___ guide?", answer: "audio", hint: "语音", acceptableAnswers: ["audio"] },
      { type: "choice", question: "It's an ___ $8 per person.", options: ["additional", "extra", "added", "more"], answer: 0, explanation: "additional 额外的" },
      { type: "fill", sentence: "What are the ___ hours?", answer: "opening", hint: "开放", acceptableAnswers: ["opening"] },
      { type: "choice", question: "Is ___ allowed inside?", options: ["photography", "photo", "picture", "camera"], answer: 0, explanation: "photography 拍照，正式用语" },
      { type: "fill", sentence: "Last ___ is at 5 PM.", answer: "entry", hint: "入场", acceptableAnswers: ["entry", "admission"] }
    ],
    rolePlay: {
      scenario: "你在一个著名景点的售票处买门票，想了解是否有学生优惠、开放时间以及能否拍照。",
      scenarioEn: "You are at the ticket counter of a famous attraction, asking about tickets and rules.",
      role: "Visitor",
      lines: [
        { speaker: "other", en: "Hello! Welcome to the National Art Gallery. How can I help you?", cn: "你好！欢迎来到国家美术馆。有什么可以帮您？" },
        { speaker: "user", cn: "说要买门票，并问多少钱", en: "I'd like to buy a ticket. How much is the admission?", keywords: ["ticket", "admission"] },
        { speaker: "other", en: "Adult tickets are $20. We also have audio guides for $5 each.", cn: "成人票20美元。我们还有语音导览，每个5美元。" },
        { speaker: "user", cn: "说要一张票和一个语音导览，问有没有中文的", en: "I'll take one ticket and one audio guide. Do you have it in Chinese?", keywords: ["audio guide", "Chinese"] },
        { speaker: "other", en: "Yes, we do. Here you go. Enjoy your visit!", cn: "有的。给您。祝参观愉快！" },
        { speaker: "user", cn: "问里面可以拍照吗", en: "Thank you. Is photography allowed inside?", keywords: ["photography", "allowed"] }
      ]
    }
  },
  {
    day: 8,
    category: "travel",
    level: 3,
    title: "Dealing with Lost Luggage",
    titleCn: "行李丢失",
    dialogue: [
      { speaker: "A", role: "Passenger", en: "Excuse me, my luggage didn't come out on the baggage carousel. I've been waiting for over 30 minutes.", cn: "打扰一下，我的行李没有出现在行李传送带上。我已经等了超过30分钟了。", keyWords: ["luggage", "baggage carousel"], grammar: "现在完成进行时: I've been waiting 表示一直在等" },
      { speaker: "B", role: "Airline Staff", en: "I'm sorry to hear that. May I see your boarding pass and baggage claim tag?", cn: "很抱歉听到这个消息。请出示您的登机牌和行李认领标签好吗？", keyWords: ["baggage claim tag"] },
      { speaker: "A", role: "Passenger", en: "Here they are. I flew in from Paris on flight BA256.", cn: "在这里。我乘BA256航班从巴黎飞来的。", keyWords: ["flew in from"] },
      { speaker: "B", role: "Airline Staff", en: "Let me check the system. It appears your suitcase was not loaded onto your flight. It's still in Paris.", cn: "让我查一下系统。看起来您的行李箱没有被装上您的航班。它还在巴黎。", keyWords: ["loaded onto", "appears"], grammar: "It appears... 看起来/似乎" },
      { speaker: "A", role: "Passenger", en: "That's really frustrating. When can I get it back?", cn: "这太让人沮丧了。我什么时候能拿回来？", keyWords: ["frustrating", "get it back"] },
      { speaker: "B", role: "Airline Staff", en: "We'll put it on the next flight, which arrives tomorrow morning at 10 AM. We can deliver it to your hotel.", cn: "我们会把它放到下一班航班上，明天早上10点到达。我们可以送到您的酒店。", keyWords: ["deliver", "next flight"] },
      { speaker: "A", role: "Passenger", en: "I need my medication and some clothes for tonight. What can you do about that?", cn: "我今晚需要我的药和一些衣物。你们能怎么解决？", keyWords: ["medication"], grammar: "What can you do about...? 询问解决方案" },
      { speaker: "B", role: "Airline Staff", en: "We can provide you with a toiletry kit and reimburse you up to $100 for essential purchases. Please keep all receipts.", cn: "我们可以提供洗漱包，并报销最多100美元的必需品购买费用。请保留所有收据。", keyWords: ["toiletry kit", "reimburse", "essential purchases", "receipts"] },
      { speaker: "A", role: "Passenger", en: "Alright. Could you also give me a reference number so I can track the status?", cn: "好的。能给我一个参考编号以便我追踪状态吗？", keyWords: ["reference number", "track the status"] },
      { speaker: "B", role: "Airline Staff", en: "Of course. Your reference number is BA-78432. You can check the status online or call our hotline at any time.", cn: "当然。您的参考编号是BA-78432。您可以随时在线查询状态或拨打我们的热线。", keyWords: ["hotline"] }
    ],
    vocabulary: [
      { word: "baggage carousel", phonetic: "/ˈbæɡɪdʒ ˌkærəˈsel/", meaning: "行李传送带", example: "Your luggage should appear on baggage carousel 3.", exampleCn: "您的行李应该在3号行李传送带上。" },
      { word: "baggage claim tag", phonetic: "/ˈbæɡɪdʒ kleɪm tæɡ/", meaning: "行李认领标签", example: "Keep your baggage claim tag until you collect your luggage.", exampleCn: "在取到行李之前请保留行李认领标签。" },
      { word: "reimburse", phonetic: "/ˌriːɪmˈbɜːrs/", meaning: "报销，补偿", example: "The airline will reimburse you for reasonable expenses.", exampleCn: "航空公司将报销您的合理开支。" },
      { word: "toiletry kit", phonetic: "/ˈtɔɪlətri kɪt/", meaning: "洗漱包", example: "The airline gave us a toiletry kit with basic items.", exampleCn: "航空公司给了我们一个装有基本用品的洗漱包。" },
      { word: "reference number", phonetic: "/ˈrefrəns ˈnʌmbər/", meaning: "参考编号", example: "Please quote your reference number when you call.", exampleCn: "打电话时请提供您的参考编号。" },
      { word: "frustrating", phonetic: "/ˈfrʌstreɪtɪŋ/", meaning: "令人沮丧的", example: "It's frustrating when flights are delayed.", exampleCn: "航班延误真令人沮丧。" }
    ],
    exercises: [
      { type: "choice", question: "My luggage didn't come out on the baggage ___.", options: ["carousel", "belt", "track", "line"], answer: 0, explanation: "baggage carousel 行李传送带" },
      { type: "fill", sentence: "May I see your baggage ___ tag?", answer: "claim", hint: "认领", acceptableAnswers: ["claim"] },
      { type: "choice", question: "We can ___ you up to $100 for essential purchases.", options: ["reimburse", "refund", "repay", "return"], answer: 0, explanation: "reimburse 报销，航空公司常用术语" },
      { type: "fill", sentence: "Could you give me a ___ number so I can track the status?", answer: "reference", hint: "参考", acceptableAnswers: ["reference", "tracking"] },
      { type: "choice", question: "It ___ your suitcase was not loaded onto the flight.", options: ["appears", "looks", "seems", "shows"], answer: 0, explanation: "It appears... 看起来/似乎，较正式的表达" },
      { type: "fill", sentence: "We can provide you with a ___ kit.", answer: "toiletry", hint: "洗漱用品", acceptableAnswers: ["toiletry"] }
    ],
    rolePlay: {
      scenario: "你的航班到达后发现行李没有出现在传送带上，你需要到航空公司服务台报告并了解补偿方案。",
      scenarioEn: "Your luggage is missing after your flight. You need to report it and ask about compensation.",
      role: "Passenger",
      lines: [
        { speaker: "other", en: "Hello, how can I assist you?", cn: "你好，有什么可以帮您？" },
        { speaker: "user", cn: "说你的行李没有出现在传送带上", en: "My luggage didn't come out on the baggage carousel. I've been waiting for a long time.", keywords: ["luggage", "baggage carousel"] },
        { speaker: "other", en: "I'm sorry. May I see your boarding pass and baggage claim tag?", cn: "很抱歉。请出示您的登机牌和行李认领标签。" },
        { speaker: "user", cn: "给他看证件，并说你今晚需要一些必需品", en: "Here they are. I need my medication and clothes for tonight. What can you do about that?", keywords: ["medication", "tonight"] },
        { speaker: "other", en: "We'll provide a toiletry kit and reimburse up to $100. Here's your reference number.", cn: "我们会提供洗漱包并报销最多100美元。这是您的参考编号。" },
        { speaker: "user", cn: "问行李什么时候能送到你的酒店", en: "When can you deliver it to my hotel?", keywords: ["deliver", "hotel"] }
      ]
    }
  },
  {
    day: 9,
    category: "travel",
    level: 3,
    title: "Medical Emergency",
    titleCn: "国外就医",
    dialogue: [
      { speaker: "A", role: "Patient", en: "Excuse me, I need to see a doctor. I've had a severe headache and fever since last night.", cn: "打扰一下，我需要看医生。从昨晚开始我就剧烈头痛并且发烧。", keyWords: ["see a doctor", "severe headache", "fever"], grammar: "现在完成时 I've had... since 从...以来一直" },
      { speaker: "B", role: "Receptionist", en: "I'm sorry to hear that. Do you have travel insurance?", cn: "很抱歉。您有旅行保险吗？", keyWords: ["travel insurance"] },
      { speaker: "A", role: "Patient", en: "Yes, here's my insurance card. I'm a tourist from China.", cn: "有的，这是我的保险卡。我是来自中国的游客。", keyWords: ["insurance card"] },
      { speaker: "B", role: "Receptionist", en: "Thank you. Please fill out this registration form. Are you allergic to any medication?", cn: "谢谢。请填写这张登记表。您对什么药物过敏吗？", keyWords: ["registration form", "allergic to", "medication"], grammar: "be allergic to 对...过敏" },
      { speaker: "A", role: "Patient", en: "I'm allergic to penicillin. Also, I've been taking some cold medicine I brought from home.", cn: "我对青霉素过敏。另外，我一直在吃从家里带来的感冒药。", keyWords: ["penicillin", "cold medicine"], grammar: "现在完成进行时 I've been taking 一直在吃" },
      { speaker: "C", role: "Doctor", en: "Hello, I'm Dr. Smith. Can you describe your symptoms in detail?", cn: "你好，我是史密斯医生。能详细描述一下你的症状吗？", keyWords: ["symptoms", "in detail"] },
      { speaker: "A", role: "Patient", en: "I have a bad headache, my temperature is around 39 degrees, and I feel dizzy and nauseous.", cn: "我头痛得厉害，体温大约39度，还感到头晕和恶心。", keyWords: ["temperature", "dizzy", "nauseous"] },
      { speaker: "C", role: "Doctor", en: "Let me examine you. I'll check your throat and listen to your breathing. Take a deep breath, please.", cn: "让我检查一下。我看看你的喉咙，听一下你的呼吸。请深呼吸。", keyWords: ["examine", "throat", "breathing", "deep breath"] },
      { speaker: "C", role: "Doctor", en: "It seems like a viral infection. I'll prescribe some medication. Make sure you drink plenty of fluids and rest.", cn: "看起来是病毒感染。我给你开些药。一定要多喝水并休息。", keyWords: ["viral infection", "prescribe", "fluids"], grammar: "Make sure you... 确保你..." },
      { speaker: "A", role: "Patient", en: "Thank you, Doctor. Where is the pharmacy? And can I get a medical certificate for my insurance claim?", cn: "谢谢医生。药房在哪里？我能开一张医疗证明用于保险理赔吗？", keyWords: ["pharmacy", "medical certificate", "insurance claim"] }
    ],
    vocabulary: [
      { word: "symptom", phonetic: "/ˈsɪmptəm/", meaning: "症状", example: "What are your main symptoms?", exampleCn: "你的主要症状是什么？" },
      { word: "prescribe", phonetic: "/prɪˈskraɪb/", meaning: "开处方", example: "The doctor prescribed antibiotics for the infection.", exampleCn: "医生开了抗生素治疗感染。" },
      { word: "nauseous", phonetic: "/ˈnɔːziəs/", meaning: "恶心的", example: "I feel nauseous after the long car ride.", exampleCn: "长途坐车后我感到恶心。" },
      { word: "viral infection", phonetic: "/ˈvaɪrəl ɪnˈfekʃn/", meaning: "病毒感染", example: "A viral infection usually goes away in a few days.", exampleCn: "病毒感染通常几天后就会好。" },
      { word: "insurance claim", phonetic: "/ɪnˈʃʊərəns kleɪm/", meaning: "保险理赔", example: "You need a receipt to file an insurance claim.", exampleCn: "你需要收据来申请保险理赔。" },
      { word: "pharmacy", phonetic: "/ˈfɑːrməsi/", meaning: "药房", example: "The nearest pharmacy is two blocks away.", exampleCn: "最近的药房在两个街区外。" },
      { word: "penicillin", phonetic: "/ˌpenɪˈsɪlɪn/", meaning: "青霉素", example: "I'm allergic to penicillin.", exampleCn: "我对青霉素过敏。" }
    ],
    exercises: [
      { type: "choice", question: "I've had a severe headache and fever ___ last night.", options: ["since", "from", "for", "during"], answer: 0, explanation: "since + 过去时间点，表示从...以来" },
      { type: "fill", sentence: "Can you describe your ___ in detail?", answer: "symptoms", hint: "症状", acceptableAnswers: ["symptoms"] },
      { type: "choice", question: "The doctor will ___ some medication for you.", options: ["prescribe", "describe", "subscribe", "inscribe"], answer: 0, explanation: "prescribe 开处方，注意与 describe（描述）区分" },
      { type: "fill", sentence: "I feel dizzy and ___.", answer: "nauseous", hint: "恶心的", acceptableAnswers: ["nauseous", "sick"] },
      { type: "choice", question: "Can I get a medical certificate for my insurance ___?", options: ["claim", "request", "demand", "charge"], answer: 0, explanation: "insurance claim 保险理赔" },
      { type: "fill", sentence: "Make sure you drink plenty of ___ and rest.", answer: "fluids", hint: "液体/水", acceptableAnswers: ["fluids", "water"] }
    ],
    rolePlay: {
      scenario: "你在国外旅行时感到身体不适，到当地医院看病，需要描述症状、告知过敏史，并询问保险相关事宜。",
      scenarioEn: "You feel sick while traveling abroad and visit a local hospital to see a doctor.",
      role: "Patient",
      lines: [
        { speaker: "other", en: "Hello, I'm Dr. Johnson. What brings you in today?", cn: "你好，我是约翰逊医生。今天怎么了？" },
        { speaker: "user", cn: "说你从昨晚开始头痛和发烧", en: "I've had a severe headache and fever since last night.", keywords: ["headache", "fever", "since"] },
        { speaker: "other", en: "I see. Do you have any other symptoms?", cn: "我了解了。还有其他症状吗？" },
        { speaker: "user", cn: "说你还感到头晕和恶心，并告知你对青霉素过敏", en: "I also feel dizzy and nauseous. And I'm allergic to penicillin.", keywords: ["dizzy", "nauseous", "allergic", "penicillin"] },
        { speaker: "other", en: "Let me examine you. It looks like a viral infection. I'll prescribe some medicine.", cn: "让我检查一下。看起来是病毒感染。我给你开点药。" },
        { speaker: "user", cn: "感谢医生并问在哪里取药，以及能否开医疗证明", en: "Thank you. Where is the pharmacy? And can I get a medical certificate for my insurance claim?", keywords: ["pharmacy", "medical certificate", "insurance claim"] }
      ]
    }
  },
  {
    day: 10,
    category: "travel",
    level: 3,
    title: "Changing Travel Plans",
    titleCn: "更改行程",
    dialogue: [
      { speaker: "A", role: "Traveler", en: "Hello, I need to change my flight. My original departure is tomorrow, but I need to leave a day earlier.", cn: "你好，我需要更改航班。我原来的出发日期是明天，但我需要提前一天走。", keyWords: ["change my flight", "original departure", "a day earlier"], grammar: "need to + 动词原形，表示需要做某事" },
      { speaker: "B", role: "Airline Agent", en: "I understand. Let me check the availability on today's flights. May I have your booking reference?", cn: "我明白了。让我查一下今天航班的余位。请提供您的预订编号。", keyWords: ["availability", "booking reference"] },
      { speaker: "A", role: "Traveler", en: "It's QR-45678. I also need to cancel my hotel reservation for tonight. Can you help with that?", cn: "编号是QR-45678。我还需要取消今晚的酒店预订。你能帮忙吗？", keyWords: ["cancel", "hotel reservation"] },
      { speaker: "B", role: "Airline Agent", en: "I can only help with the flight change. You'll need to contact the hotel directly. Now, there's a seat available on the 3 PM flight today.", cn: "我只能帮您改航班。酒店需要您直接联系。现在，今天下午3点的航班有空位。", keyWords: ["contact directly", "seat available"] },
      { speaker: "A", role: "Traveler", en: "That works for me. Is there a change fee?", cn: "那可以。有改签费吗？", keyWords: ["change fee"], grammar: "That works for me. 表示对我来说可以" },
      { speaker: "B", role: "Airline Agent", en: "Yes, there's a $75 change fee, and you'll need to pay a fare difference of $45. The total additional cost is $120.", cn: "有的，改签费75美元，另外还需支付45美元的票价差额。总共额外费用是120美元。", keyWords: ["change fee", "fare difference", "additional cost"] },
      { speaker: "A", role: "Traveler", en: "That's acceptable. I'll go ahead with the change. Can I also upgrade to business class?", cn: "可以接受。我要改签。我能升舱到商务舱吗？", keyWords: ["go ahead with", "upgrade", "business class"], grammar: "go ahead with 继续进行" },
      { speaker: "B", role: "Airline Agent", en: "Let me check. Business class is available, but the upgrade fee is $350. Would you still like to proceed?", cn: "让我查一下。商务舱有位，但升舱费用是350美元。您还要继续吗？", keyWords: ["upgrade fee", "proceed"] },
      { speaker: "A", role: "Traveler", en: "No, that's too expensive. I'll stick with economy. Just the flight change, please.", cn: "不了，太贵了。我还是经济舱吧。只改航班就好。", keyWords: ["stick with", "economy"], grammar: "stick with 坚持，继续选择" },
      { speaker: "B", role: "Airline Agent", en: "All done. Your new flight is today at 3 PM, gate C5. I've emailed you the updated itinerary.", cn: "都办好了。您的新航班是今天下午3点，C5登机口。我已经把更新后的行程发到您邮箱了。", keyWords: ["updated itinerary", "emailed"] }
    ],
    vocabulary: [
      { word: "booking reference", phonetic: "/ˈbʊkɪŋ ˈrefrəns/", meaning: "预订编号", example: "Your booking reference is printed on your confirmation email.", exampleCn: "您的预订编号印在确认邮件上。" },
      { word: "change fee", phonetic: "/tʃeɪndʒ fiː/", meaning: "改签费", example: "Most airlines charge a change fee for modifying your ticket.", exampleCn: "大多数航空公司会收取改签费。" },
      { word: "fare difference", phonetic: "/feər ˈdɪfrəns/", meaning: "票价差额", example: "You need to pay the fare difference when changing to a more expensive flight.", exampleCn: "改签到更贵的航班时需要支付票价差额。" },
      { word: "upgrade", phonetic: "/ʌpˈɡreɪd/", meaning: "升舱，升级", example: "Would you like to upgrade to first class?", exampleCn: "您想升舱到头等舱吗？" },
      { word: "itinerary", phonetic: "/aɪˈtɪnəreri/", meaning: "行程单", example: "I'll send you the updated itinerary by email.", exampleCn: "我会把更新后的行程单发到你邮箱。" },
      { word: "availability", phonetic: "/əˌveɪləˈbɪləti/", meaning: "可用性，余位", example: "Let me check the availability for tomorrow's flight.", exampleCn: "让我查一下明天航班的余位。" },
      { word: "proceed", phonetic: "/prəˈsiːd/", meaning: "继续，进行", example: "Would you like to proceed with the booking?", exampleCn: "您要继续预订吗？" }
    ],
    exercises: [
      { type: "choice", question: "I need to ___ my flight to an earlier date.", options: ["change", "exchange", "switch", "swap"], answer: 0, explanation: "change my flight 改签航班，最常用的表达" },
      { type: "fill", sentence: "May I have your booking ___?", answer: "reference", hint: "参考/编号", acceptableAnswers: ["reference"] },
      { type: "choice", question: "Is there a ___ fee for changing the ticket?", options: ["change", "charge", "cost", "price"], answer: 0, explanation: "change fee 改签费" },
      { type: "fill", sentence: "You'll need to pay a fare ___ of $45.", answer: "difference", hint: "差额", acceptableAnswers: ["difference"] },
      { type: "choice", question: "I'll ___ with economy class.", options: ["stick", "stay", "keep", "remain"], answer: 0, explanation: "stick with 坚持选择，继续使用" },
      { type: "fill", sentence: "I've emailed you the updated ___.", answer: "itinerary", hint: "行程单", acceptableAnswers: ["itinerary"] }
    ],
    rolePlay: {
      scenario: "你因为突发情况需要提前回国，到航空公司柜台改签航班，了解费用并做出决定。",
      scenarioEn: "You need to change your flight to return home earlier due to an emergency.",
      role: "Traveler",
      lines: [
        { speaker: "other", en: "Good morning. How can I help you today?", cn: "早上好。今天有什么可以帮您？" },
        { speaker: "user", cn: "说你需要改签航班，要提前一天出发", en: "I need to change my flight. I need to leave a day earlier than planned.", keywords: ["change", "flight", "earlier"] },
        { speaker: "other", en: "Let me check availability. There's a seat on this afternoon's flight. The change fee is $75 plus a $45 fare difference.", cn: "让我查一下余位。今天下午的航班有座位。改签费75美元加上45美元票价差额。" },
        { speaker: "user", cn: "问能否升舱到商务舱", en: "That's fine. Can I also upgrade to business class?", keywords: ["upgrade", "business class"] },
        { speaker: "other", en: "The upgrade fee is $400. Would you like to proceed?", cn: "升舱费用是400美元。您要继续吗？" },
        { speaker: "user", cn: "说太贵了，还是坚持经济舱", en: "No, that's too expensive. I'll stick with economy class.", keywords: ["stick with", "economy"] }
      ]
    }
  }
];

// ===== 生活场景课程数据 =====
const lifeData = [
  {
    day: 1,
    category: "life",
    level: 1,
    title: "Ordering Coffee",
    titleCn: "咖啡店点单",
    dialogue: [
      { speaker: "A", role: "Barista", en: "Hi! Welcome to Bean & Brew. What can I get for you?", cn: "嗨！欢迎来到Bean & Brew。您想要点什么？", keyWords: ["What can I get for you"], grammar: "What can I get for you? 服务行业常用问句" },
      { speaker: "B", role: "Customer", en: "Hi, can I have a latte, please?", cn: "你好，请给我一杯拿铁。", keyWords: ["latte"], grammar: "Can I have...? 点单常用句型" },
      { speaker: "A", role: "Barista", en: "Sure. What size would you like? Small, medium, or large?", cn: "好的。您要什么杯型？小杯、中杯还是大杯？", keyWords: ["size", "small", "medium", "large"] },
      { speaker: "B", role: "Customer", en: "Medium, please.", cn: "中杯，谢谢。", keyWords: ["medium"] },
      { speaker: "A", role: "Barista", en: "Would you like it hot or iced?", cn: "要热的还是冰的？", keyWords: ["hot", "iced"] },
      { speaker: "B", role: "Customer", en: "Iced, please. And could I get an extra shot of espresso?", cn: "冰的，谢谢。能多加一份浓缩咖啡吗？", keyWords: ["iced", "extra shot", "espresso"], grammar: "Could I get...? 比Can I更礼貌的请求" },
      { speaker: "A", role: "Barista", en: "No problem. Anything else? We have fresh muffins today.", cn: "没问题。还要别的吗？我们今天有新鲜的松饼。", keyWords: ["Anything else", "muffins"] },
      { speaker: "B", role: "Customer", en: "I'll also take a blueberry muffin.", cn: "我再要一个蓝莓松饼。", keyWords: ["blueberry muffin"], grammar: "I'll take... 表示决定要某物" },
      { speaker: "A", role: "Barista", en: "That'll be $7.50. Cash or card?", cn: "一共7.50美元。现金还是刷卡？", keyWords: ["Cash or card"] },
      { speaker: "B", role: "Customer", en: "Card, please. Here you go.", cn: "刷卡，谢谢。给你。", keyWords: ["card"] },
      { speaker: "A", role: "Barista", en: "Your name for the order?", cn: "请问您的名字？（写在杯子上）", keyWords: ["name for the order"] },
      { speaker: "B", role: "Customer", en: "It's Mike.", cn: "Mike。", keyWords: [] },
      { speaker: "A", role: "Barista", en: "Got it. Your order will be ready in a few minutes.", cn: "好的。您的单几分钟后就好。", keyWords: ["ready in a few minutes"] }
    ],
    vocabulary: [
      { word: "latte", phonetic: "/ˈlɑːteɪ/", meaning: "拿铁咖啡", example: "I usually order a latte with oat milk.", exampleCn: "我通常点一杯燕麦奶拿铁。" },
      { word: "extra shot", phonetic: "/ˈekstrə ʃɒt/", meaning: "额外一份浓缩", example: "I need an extra shot today — I'm so tired.", exampleCn: "今天我需要多加一份浓缩——太困了。" },
      { word: "iced", phonetic: "/aɪst/", meaning: "冰的", example: "Can I get an iced Americano?", exampleCn: "能给我一杯冰美式吗？" },
      { word: "muffin", phonetic: "/ˈmʌfɪn/", meaning: "松饼，玛芬蛋糕", example: "The chocolate muffin here is really good.", exampleCn: "这里的巧克力松饼真好吃。" },
      { word: "cash or card", phonetic: "/kæʃ ɔːr kɑːrd/", meaning: "现金还是刷卡", example: "Cash or card? — Card, please.", exampleCn: "现金还是刷卡？——刷卡，谢谢。" },
      { word: "for here or to go", phonetic: "/fɔːr hɪər ɔːr tuː ɡoʊ/", meaning: "堂食还是外带", example: "Is that for here or to go?", exampleCn: "堂食还是外带？" }
    ],
    exercises: [
      { type: "choice", question: "What can I ___ for you?", options: ["get", "take", "bring", "give"], answer: 0, explanation: "What can I get for you? 是服务行业常用问句" },
      { type: "choice", question: "Could I get an ___ shot of espresso?", options: ["extra", "more", "added", "plus"], answer: 0, explanation: "extra shot 表示多加一份浓缩" },
      { type: "fill", sentence: "What ___ would you like? Small, medium, or large?", answer: "size", hint: "尺寸/杯型", acceptableAnswers: ["size"] },
      { type: "choice", question: "Would you like it hot or ___?", options: ["iced", "ice", "cold", "cool"], answer: 0, explanation: "iced 是形容词，表示加冰的" },
      { type: "fill", sentence: "That'll be $7.50. Cash or ___?", answer: "card", hint: "卡", acceptableAnswers: ["card"] },
      { type: "choice", question: "Your order will be ___ in a few minutes.", options: ["ready", "done", "prepared", "finished"], answer: 0, explanation: "ready 表示准备好了，是最常用的说法" }
    ],
    rolePlay: {
      scenario: "你走进一家咖啡店，想点一杯冰美式咖啡（中杯），再加一个巧克力松饼，用刷卡支付。",
      scenarioEn: "You walk into a coffee shop to order an iced Americano and a chocolate muffin.",
      role: "Customer",
      lines: [
        { speaker: "other", en: "Good morning! What can I get for you?", cn: "早上好！您想要点什么？" },
        { speaker: "user", cn: "说你想要一杯冰美式咖啡", en: "Can I have an iced Americano, please?", keywords: ["iced", "Americano"] },
        { speaker: "other", en: "Sure! What size? Small, medium, or large?", cn: "好的！什么杯型？小杯、中杯还是大杯？" },
        { speaker: "user", cn: "说要中杯", en: "Medium, please.", keywords: ["Medium"] },
        { speaker: "other", en: "Got it. Anything else?", cn: "好的。还要别的吗？" },
        { speaker: "user", cn: "说你还要一个巧克力松饼", en: "I'll also take a chocolate muffin.", keywords: ["chocolate muffin"] },
        { speaker: "other", en: "That'll be $6.80. Cash or card?", cn: "一共6.80美元。现金还是刷卡？" },
        { speaker: "user", cn: "说刷卡", en: "Card, please.", keywords: ["Card"] }
      ]
    }
  },
  {
    day: 2,
    category: "life",
    level: 1,
    title: "Grocery Shopping",
    titleCn: "超市购物",
    dialogue: [
      { speaker: "A", role: "Shopper", en: "Excuse me, where can I find the dairy section?", cn: "打扰一下，请问乳制品区在哪？", keyWords: ["dairy section"], grammar: "Where can I find...? 询问位置的常用句型" },
      { speaker: "B", role: "Store Employee", en: "It's in aisle 3, on the left side.", cn: "在第3通道，左边。", keyWords: ["aisle", "left side"] },
      { speaker: "A", role: "Shopper", en: "Thanks. Do you have any organic milk?", cn: "谢谢。你们有有机牛奶吗？", keyWords: ["organic milk"], grammar: "Do you have...? 询问是否有某商品" },
      { speaker: "B", role: "Store Employee", en: "Yes, we do. It's on the top shelf.", cn: "有的。在最上面那层货架。", keyWords: ["top shelf"] },
      { speaker: "A", role: "Shopper", en: "Great. How much is it?", cn: "好的。多少钱？", keyWords: ["How much"] },
      { speaker: "B", role: "Store Employee", en: "It's $4.99 per carton. We also have a buy-one-get-one-free deal this week.", cn: "每盒4.99美元。这周还有买一送一的活动。", keyWords: ["per carton", "buy-one-get-one-free"], grammar: "buy-one-get-one-free 常见促销用语" },
      { speaker: "A", role: "Shopper", en: "Oh, that's a great deal! I'll take two then.", cn: "哦，太划算了！那我拿两盒。", keyWords: ["great deal", "I'll take"] },
      { speaker: "B", role: "Store Employee", en: "Sure. Would you like a shopping bag?", cn: "好的。您需要购物袋吗？", keyWords: ["shopping bag"] },
      { speaker: "A", role: "Shopper", en: "No, thanks. I brought my own bag. Where is the checkout counter?", cn: "不用了，谢谢。我自己带了袋子。收银台在哪？", keyWords: ["brought my own bag", "checkout counter"] },
      { speaker: "B", role: "Store Employee", en: "The checkout is at the front of the store. You can also use the self-checkout machines.", cn: "收银台在商店前面。您也可以用自助结账机。", keyWords: ["self-checkout"] }
    ],
    vocabulary: [
      { word: "aisle", phonetic: "/aɪl/", meaning: "通道，过道", example: "The cereal is in aisle 5.", exampleCn: "麦片在第5通道。" },
      { word: "dairy", phonetic: "/ˈdɛəri/", meaning: "乳制品", example: "The dairy section has milk, cheese, and yogurt.", exampleCn: "乳制品区有牛奶、奶酪和酸奶。" },
      { word: "organic", phonetic: "/ɔːrˈɡænɪk/", meaning: "有机的", example: "I prefer organic vegetables.", exampleCn: "我更喜欢有机蔬菜。" },
      { word: "checkout", phonetic: "/ˈtʃekaʊt/", meaning: "结账，收银台", example: "There's a long line at the checkout.", exampleCn: "收银台排了很长的队。" },
      { word: "buy-one-get-one-free", phonetic: "/baɪ wʌn ɡet wʌn friː/", meaning: "买一送一", example: "The shampoo is buy-one-get-one-free today.", exampleCn: "洗发水今天买一送一。" },
      { word: "shelf", phonetic: "/ʃelf/", meaning: "货架", example: "The cookies are on the bottom shelf.", exampleCn: "饼干在最下面那层货架。" }
    ],
    exercises: [
      { type: "choice", question: "Excuse me, where can I find the ___ section?", options: ["dairy", "diary", "daily", "daisy"], answer: 0, explanation: "dairy 是乳制品，注意和 diary（日记）区分" },
      { type: "fill", sentence: "It's in ___ 3, on the left side.", answer: "aisle", hint: "通道", acceptableAnswers: ["aisle"] },
      { type: "choice", question: "We have a ___-one-get-one-free deal this week.", options: ["buy", "get", "take", "pick"], answer: 0, explanation: "buy-one-get-one-free 买一送一" },
      { type: "fill", sentence: "It's $4.99 per ___.", answer: "carton", hint: "盒/箱", acceptableAnswers: ["carton"] },
      { type: "choice", question: "Where is the ___ counter?", options: ["checkout", "check-out", "checking", "check"], answer: 0, explanation: "checkout counter 收银台" },
      { type: "fill", sentence: "You can also use the self-___ machines.", answer: "checkout", hint: "结账", acceptableAnswers: ["checkout"] }
    ],
    rolePlay: {
      scenario: "你在超市里找不到鸡蛋，向店员询问位置。你还想知道有没有打折活动，最后去结账。",
      scenarioEn: "You are at a grocery store looking for eggs and asking about discounts.",
      role: "Shopper",
      lines: [
        { speaker: "other", en: "Hi, can I help you find something?", cn: "你好，需要我帮你找什么吗？" },
        { speaker: "user", cn: "问鸡蛋在哪里", en: "Yes, where can I find the eggs?", keywords: ["where", "eggs"] },
        { speaker: "other", en: "They're in aisle 2, next to the dairy section.", cn: "在第2通道，乳制品区旁边。" },
        { speaker: "user", cn: "问有没有什么优惠活动", en: "Are there any deals on eggs this week?", keywords: ["deals", "eggs"] },
        { speaker: "other", en: "Yes! They're buy-one-get-one-free.", cn: "有的！买一送一。" },
        { speaker: "user", cn: "说太好了，你要两盒，然后问收银台在哪", en: "Great, I'll take two. Where's the checkout?", keywords: ["take two", "checkout"] }
      ]
    }
  },
  {
    day: 3,
    category: "life",
    level: 1,
    title: "Making a Phone Call",
    titleCn: "打电话",
    dialogue: [
      { speaker: "A", role: "Caller (You)", en: "Hello, is this the customer service line?", cn: "你好，这是客服热线吗？", keyWords: ["customer service line"], grammar: "Is this...? 电话确认对方身份" },
      { speaker: "B", role: "Operator", en: "Yes, it is. How may I help you?", cn: "是的。请问有什么可以帮您？", keyWords: ["How may I help you"] },
      { speaker: "A", role: "Caller (You)", en: "I'd like to make a reservation at your restaurant for this Saturday.", cn: "我想预订你们餐厅这周六的位子。", keyWords: ["make a reservation"], grammar: "I'd like to... 表示礼貌请求" },
      { speaker: "B", role: "Operator", en: "Sure. How many people will be dining?", cn: "好的。请问几位用餐？", keyWords: ["how many people", "dining"] },
      { speaker: "A", role: "Caller (You)", en: "There will be four of us.", cn: "我们四个人。", keyWords: ["four of us"] },
      { speaker: "B", role: "Operator", en: "What time would you prefer?", cn: "您希望什么时间？", keyWords: ["What time", "prefer"] },
      { speaker: "A", role: "Caller (You)", en: "Around 7 PM, if possible.", cn: "大约晚上7点，如果可以的话。", keyWords: ["around", "if possible"], grammar: "if possible 表示委婉请求" },
      { speaker: "B", role: "Operator", en: "Let me check... Yes, we have a table available at 7. May I have your name, please?", cn: "我查一下……有的，7点有空位。请问您贵姓？", keyWords: ["available", "May I have your name"] },
      { speaker: "A", role: "Caller (You)", en: "It's under the name Johnson.", cn: "预订名字是Johnson。", keyWords: ["under the name"] },
      { speaker: "B", role: "Operator", en: "Got it. A table for four at 7 PM this Saturday, under Johnson. Is there anything else?", cn: "好的。这周六晚上7点，Johnson名下四人桌。还有其他需要吗？", keyWords: ["anything else"] }
    ],
    vocabulary: [
      { word: "reservation", phonetic: "/ˌrezərˈveɪʃn/", meaning: "预订，预约", example: "I have a reservation under the name Smith.", exampleCn: "我有一个Smith名下的预订。" },
      { word: "available", phonetic: "/əˈveɪləbl/", meaning: "可用的，有空的", example: "Is this table available?", exampleCn: "这张桌子有人吗？" },
      { word: "customer service", phonetic: "/ˈkʌstəmər ˈsɜːrvɪs/", meaning: "客户服务", example: "Please call customer service for help.", exampleCn: "如需帮助请致电客服。" },
      { word: "hold on", phonetic: "/hoʊld ɒn/", meaning: "等一下（电话用语）", example: "Hold on, please. I'll transfer your call.", exampleCn: "请稍等，我帮您转接。" },
      { word: "dining", phonetic: "/ˈdaɪnɪŋ/", meaning: "用餐", example: "How many people will be dining tonight?", exampleCn: "今晚几位用餐？" },
      { word: "under the name", phonetic: "/ˈʌndər ðə neɪm/", meaning: "以...的名字（预订）", example: "The reservation is under the name Lee.", exampleCn: "预订是在Lee名下。" }
    ],
    exercises: [
      { type: "choice", question: "I'd like to make a ___ at your restaurant.", options: ["reservation", "preservation", "conservation", "observation"], answer: 0, explanation: "make a reservation 预订" },
      { type: "fill", sentence: "How ___ I help you?", answer: "may", hint: "可以（礼貌用法）", acceptableAnswers: ["may", "can"] },
      { type: "choice", question: "Is there a table ___ at 7 PM?", options: ["available", "open", "free", "empty"], answer: 0, explanation: "available 是最正式的表示'可用'的说法" },
      { type: "fill", sentence: "The reservation is ___ the name Johnson.", answer: "under", hint: "在...名下", acceptableAnswers: ["under"] },
      { type: "choice", question: "How many people will be ___?", options: ["dining", "eating", "having", "taking"], answer: 0, explanation: "dining 用餐，比eating更正式" },
      { type: "fill", sentence: "Around 7 PM, if ___.", answer: "possible", hint: "可能的", acceptableAnswers: ["possible"] }
    ],
    rolePlay: {
      scenario: "你打电话给一家餐厅，预订周日晚上6位的晚餐，你希望能坐靠窗的位子。",
      scenarioEn: "You are calling a restaurant to book a table for six on Sunday evening.",
      role: "Caller",
      lines: [
        { speaker: "other", en: "Hello, thank you for calling Bella's. How can I help you?", cn: "你好，感谢致电Bella's餐厅。请问有什么可以帮您？" },
        { speaker: "user", cn: "说你想预订周日晚上的位子", en: "I'd like to make a reservation for Sunday evening.", keywords: ["reservation", "Sunday"] },
        { speaker: "other", en: "Sure. How many people?", cn: "好的。请问几位？" },
        { speaker: "user", cn: "说6个人，希望大约6点半", en: "There will be six of us, around 6:30 PM.", keywords: ["six", "6:30"] },
        { speaker: "other", en: "We have a table available at 6:30. Any special requests?", cn: "6:30有空位。有什么特别要求吗？" },
        { speaker: "user", cn: "说想要靠窗的位子", en: "Could we get a table by the window, please?", keywords: ["window"] }
      ]
    }
  },
  {
    day: 4,
    category: "life",
    level: 2,
    title: "Visiting a Doctor",
    titleCn: "看病就医",
    dialogue: [
      { speaker: "A", role: "Receptionist", en: "Good morning. Do you have an appointment?", cn: "早上好。您有预约吗？", keyWords: ["appointment"] },
      { speaker: "B", role: "Patient", en: "Yes, I have an appointment at 10 AM with Dr. Williams.", cn: "是的，我预约了10点Williams医生的号。", keyWords: ["appointment at 10 AM"] },
      { speaker: "A", role: "Receptionist", en: "Please fill out this form and have a seat. The doctor will be with you shortly.", cn: "请填写这张表格然后坐下等候。医生很快就来。", keyWords: ["fill out", "have a seat", "shortly"], grammar: "fill out 填写表格的固定搭配" },
      { speaker: "C", role: "Doctor", en: "Hello. What seems to be the problem?", cn: "你好。哪里不舒服？", keyWords: ["What seems to be the problem"], grammar: "What seems to be the problem? 医生问诊的标准开场" },
      { speaker: "B", role: "Patient", en: "I've been having a sore throat and a headache for the past three days.", cn: "过去三天我一直喉咙痛，还头疼。", keyWords: ["sore throat", "headache", "for the past three days"], grammar: "have been having... 现在完成进行时，表示持续的症状" },
      { speaker: "C", role: "Doctor", en: "Do you have a fever or any other symptoms?", cn: "有发烧或其他症状吗？", keyWords: ["fever", "symptoms"] },
      { speaker: "B", role: "Patient", en: "I had a slight fever yesterday, about 37.8 degrees. And I've been coughing a lot.", cn: "昨天有点低烧，大约37.8度。而且一直咳嗽得很厉害。", keyWords: ["slight fever", "coughing"] },
      { speaker: "C", role: "Doctor", en: "Let me take a look at your throat. Open your mouth, please... It's quite red and swollen.", cn: "让我看看你的喉咙。请张嘴……挺红肿的。", keyWords: ["swollen", "take a look"] },
      { speaker: "C", role: "Doctor", en: "It looks like you have a throat infection. I'll prescribe some antibiotics and cough medicine.", cn: "看起来你有喉咙感染。我给你开些抗生素和止咳药。", keyWords: ["infection", "prescribe", "antibiotics"], grammar: "I'll prescribe... 医生开药的常用表达" },
      { speaker: "B", role: "Patient", en: "How often should I take the medicine?", cn: "我多久吃一次药？", keyWords: ["How often"], grammar: "How often...? 询问频率" },
      { speaker: "C", role: "Doctor", en: "Take the antibiotics three times a day after meals. Get plenty of rest and drink lots of water.", cn: "抗生素每天三次，饭后服用。多休息，多喝水。", keyWords: ["three times a day", "after meals", "plenty of rest"] }
    ],
    vocabulary: [
      { word: "appointment", phonetic: "/əˈpɔɪntmənt/", meaning: "预约", example: "I need to make an appointment with the dentist.", exampleCn: "我需要预约牙医。" },
      { word: "symptom", phonetic: "/ˈsɪmptəm/", meaning: "症状", example: "What are your symptoms?", exampleCn: "你有什么症状？" },
      { word: "prescribe", phonetic: "/prɪˈskraɪb/", meaning: "开处方", example: "The doctor prescribed some painkillers.", exampleCn: "医生开了一些止痛药。" },
      { word: "antibiotic", phonetic: "/ˌæntɪbaɪˈɒtɪk/", meaning: "抗生素", example: "You should finish the full course of antibiotics.", exampleCn: "你应该把抗生素整个疗程吃完。" },
      { word: "sore throat", phonetic: "/sɔːr θroʊt/", meaning: "喉咙痛", example: "I can't speak well because of my sore throat.", exampleCn: "喉咙痛让我说不好话。" },
      { word: "swollen", phonetic: "/ˈswoʊlən/", meaning: "肿胀的", example: "My ankle is swollen from the injury.", exampleCn: "我的脚踝因受伤肿了。" },
      { word: "fever", phonetic: "/ˈfiːvər/", meaning: "发烧", example: "She has a high fever and needs to see a doctor.", exampleCn: "她发高烧了，需要看医生。" }
    ],
    exercises: [
      { type: "choice", question: "What seems to be the ___?", options: ["problem", "question", "matter", "issue"], answer: 0, explanation: "What seems to be the problem? 是医生问诊的标准用语" },
      { type: "fill", sentence: "I've been having a sore ___ for three days.", answer: "throat", hint: "喉咙", acceptableAnswers: ["throat"] },
      { type: "choice", question: "The doctor will ___ some antibiotics.", options: ["prescribe", "describe", "subscribe", "inscribe"], answer: 0, explanation: "prescribe 开处方，注意和其他-scribe词的区别" },
      { type: "fill", sentence: "Take the medicine three times a day after ___.", answer: "meals", hint: "饭", acceptableAnswers: ["meals"] },
      { type: "choice", question: "Please ___ out this form.", options: ["fill", "write", "put", "make"], answer: 0, explanation: "fill out 填写表格是固定搭配" },
      { type: "fill", sentence: "Do you have a ___ or any other symptoms?", answer: "fever", hint: "发烧", acceptableAnswers: ["fever"] }
    ],
    rolePlay: {
      scenario: "你感冒了，去诊所看医生。你需要描述你的症状（头痛、流鼻涕、轻微发烧），并询问用药方法。",
      scenarioEn: "You go to the clinic because you have a cold. Describe your symptoms and ask about medication.",
      role: "Patient",
      lines: [
        { speaker: "other", en: "Hello, what seems to be the problem?", cn: "你好，哪里不舒服？" },
        { speaker: "user", cn: "说你头痛、流鼻涕已经两天了", en: "I've been having a headache and a runny nose for two days.", keywords: ["headache", "runny nose", "two days"] },
        { speaker: "other", en: "Do you have a fever?", cn: "有发烧吗？" },
        { speaker: "user", cn: "说昨晚有点低烧", en: "I had a slight fever last night.", keywords: ["slight fever"] },
        { speaker: "other", en: "I'll prescribe some cold medicine. Take it twice a day.", cn: "我给你开些感冒药。一天吃两次。" },
        { speaker: "user", cn: "问需不需要注意什么", en: "Is there anything else I should pay attention to?", keywords: ["anything else", "attention"] }
      ]
    }
  },
  {
    day: 5,
    category: "life",
    level: 2,
    title: "At the Bank",
    titleCn: "银行办事",
    dialogue: [
      { speaker: "A", role: "Customer", en: "Good morning. I'd like to open a savings account.", cn: "早上好。我想开一个储蓄账户。", keyWords: ["open", "savings account"], grammar: "I'd like to... 表示礼貌请求" },
      { speaker: "B", role: "Bank Teller", en: "Sure. Do you have a valid ID with you?", cn: "好的。您带了有效证件吗？", keyWords: ["valid ID"] },
      { speaker: "A", role: "Customer", en: "Yes, here's my passport.", cn: "有的，这是我的护照。", keyWords: ["passport"] },
      { speaker: "B", role: "Bank Teller", en: "Thank you. What's the initial deposit you'd like to make?", cn: "谢谢。您想存多少作为初始存款？", keyWords: ["initial deposit"], grammar: "What's the... you'd like to...? 正式询问句型" },
      { speaker: "A", role: "Customer", en: "I'd like to deposit $2,000.", cn: "我想存2000美元。", keyWords: ["deposit"] },
      { speaker: "B", role: "Bank Teller", en: "Would you also like to set up online banking?", cn: "您还需要开通网上银行吗？", keyWords: ["online banking", "set up"] },
      { speaker: "A", role: "Customer", en: "Yes, please. I also need to know the interest rate for this account.", cn: "好的。我还想知道这个账户的利率是多少。", keyWords: ["interest rate"] },
      { speaker: "B", role: "Bank Teller", en: "The current annual interest rate is 2.5%. You can check the details in your online banking portal.", cn: "目前年利率是2.5%。您可以在网上银行查看详情。", keyWords: ["annual interest rate", "portal"] },
      { speaker: "A", role: "Customer", en: "Can I also apply for a debit card?", cn: "我还能申请一张借记卡吗？", keyWords: ["apply for", "debit card"] },
      { speaker: "B", role: "Bank Teller", en: "Absolutely. Your debit card will be ready for pickup in about five business days.", cn: "当然可以。您的借记卡大约五个工作日后可以来领取。", keyWords: ["pickup", "business days"] }
    ],
    vocabulary: [
      { word: "savings account", phonetic: "/ˈseɪvɪŋz əˈkaʊnt/", meaning: "储蓄账户", example: "I put my money in a savings account.", exampleCn: "我把钱存入储蓄账户。" },
      { word: "deposit", phonetic: "/dɪˈpɒzɪt/", meaning: "存款；存入", example: "I'd like to deposit $500 into my account.", exampleCn: "我想往账户存500美元。" },
      { word: "interest rate", phonetic: "/ˈɪntrəst reɪt/", meaning: "利率", example: "What's the interest rate on this loan?", exampleCn: "这笔贷款的利率是多少？" },
      { word: "debit card", phonetic: "/ˈdebɪt kɑːrd/", meaning: "借记卡", example: "Can I pay with my debit card?", exampleCn: "我能用借记卡支付吗？" },
      { word: "valid ID", phonetic: "/ˈvælɪd aɪˈdiː/", meaning: "有效证件", example: "You need a valid ID to open an account.", exampleCn: "开户需要有效证件。" },
      { word: "online banking", phonetic: "/ˈɒnlaɪn ˈbæŋkɪŋ/", meaning: "网上银行", example: "I manage all my bills through online banking.", exampleCn: "我通过网上银行管理所有账单。" },
      { word: "business day", phonetic: "/ˈbɪznəs deɪ/", meaning: "工作日", example: "The transfer takes two business days.", exampleCn: "转账需要两个工作日。" }
    ],
    exercises: [
      { type: "choice", question: "I'd like to open a ___ account.", options: ["savings", "saving", "save", "saved"], answer: 0, explanation: "savings account 储蓄账户，savings用复数" },
      { type: "fill", sentence: "Do you have a ___ ID with you?", answer: "valid", hint: "有效的", acceptableAnswers: ["valid"] },
      { type: "choice", question: "What's the annual ___ rate?", options: ["interest", "interesting", "interested", "interact"], answer: 0, explanation: "interest rate 利率" },
      { type: "fill", sentence: "I'd like to ___ $2,000 into my account.", answer: "deposit", hint: "存入", acceptableAnswers: ["deposit"] },
      { type: "choice", question: "Can I ___ for a debit card?", options: ["apply", "request", "ask", "demand"], answer: 0, explanation: "apply for 申请，是固定搭配" },
      { type: "fill", sentence: "Your card will be ready in five ___ days.", answer: "business", hint: "工作（日）", acceptableAnswers: ["business"] }
    ],
    rolePlay: {
      scenario: "你去银行想把人民币换成美元，需要询问汇率和手续费，并完成兑换。",
      scenarioEn: "You go to the bank to exchange RMB for US dollars. Ask about the exchange rate and fees.",
      role: "Customer",
      lines: [
        { speaker: "other", en: "Hello, how can I help you today?", cn: "你好，今天有什么可以帮您的？" },
        { speaker: "user", cn: "说你想把人民币换成美元", en: "I'd like to exchange some RMB for US dollars.", keywords: ["exchange", "RMB", "dollars"] },
        { speaker: "other", en: "Sure. How much would you like to exchange?", cn: "好的。您想兑换多少？" },
        { speaker: "user", cn: "说想换5000元人民币，然后问汇率", en: "5,000 RMB. What's the exchange rate today?", keywords: ["5,000", "exchange rate"] },
        { speaker: "other", en: "Today's rate is 7.2 RMB to 1 USD. There's a small service fee of 30 RMB.", cn: "今天汇率是7.2人民币兑1美元。手续费30元。" },
        { speaker: "user", cn: "说没问题，请帮你兑换", en: "That's fine. Please go ahead with the exchange.", keywords: ["fine", "go ahead"] }
      ]
    }
  },
  {
    day: 6,
    category: "life",
    level: 2,
    title: "Calling for Repair",
    titleCn: "报修服务",
    dialogue: [
      { speaker: "A", role: "Tenant", en: "Hello, this is apartment 302. I'm calling about a maintenance issue.", cn: "你好，我是302房的住户。我打电话是因为有个维修问题。", keyWords: ["maintenance issue"], grammar: "I'm calling about... 电话说明来意" },
      { speaker: "B", role: "Property Manager", en: "Hi there. What seems to be the problem?", cn: "你好。什么问题？", keyWords: ["What seems to be the problem"] },
      { speaker: "A", role: "Tenant", en: "The kitchen faucet has been leaking since yesterday. It's getting worse.", cn: "厨房水龙头从昨天开始漏水，越来越严重了。", keyWords: ["faucet", "leaking", "getting worse"], grammar: "has been leaking 现在完成进行时表示持续" },
      { speaker: "B", role: "Property Manager", en: "I'm sorry to hear that. Have you tried turning off the valve under the sink?", cn: "很抱歉听到这个。你试过关掉水槽下面的阀门吗？", keyWords: ["valve", "under the sink"] },
      { speaker: "A", role: "Tenant", en: "Yes, I did, but it's still dripping.", cn: "是的，试过了，但还是在滴水。", keyWords: ["dripping"] },
      { speaker: "B", role: "Property Manager", en: "OK, I'll send a plumber over. When would be a good time for you?", cn: "好的，我安排一个水管工过去。您什么时候方便？", keyWords: ["plumber", "send over", "a good time"] },
      { speaker: "A", role: "Tenant", en: "I'm available tomorrow morning. Would 9 AM work?", cn: "明天上午我有空。9点可以吗？", keyWords: ["available", "Would... work"] },
      { speaker: "B", role: "Property Manager", en: "9 AM works. The plumber will come between 9 and 10. Is there anything else that needs fixing?", cn: "9点可以。水管工会在9点到10点之间到。还有别的需要修的吗？", keyWords: ["between 9 and 10", "needs fixing"] },
      { speaker: "A", role: "Tenant", en: "Actually, the air conditioning hasn't been working properly either. It makes a strange noise.", cn: "对了，空调也一直不太正常。会发出奇怪的声音。", keyWords: ["air conditioning", "strange noise"] },
      { speaker: "B", role: "Property Manager", en: "I'll have the technician take a look at that too. We'll get everything sorted out.", cn: "我会让技术员也看看那个。我们会把一切都解决好的。", keyWords: ["technician", "sorted out"] }
    ],
    vocabulary: [
      { word: "maintenance", phonetic: "/ˈmeɪntənəns/", meaning: "维修，维护", example: "The building maintenance team is very responsive.", exampleCn: "物业维修团队反应很迅速。" },
      { word: "faucet", phonetic: "/ˈfɔːsɪt/", meaning: "水龙头", example: "The faucet is dripping all day.", exampleCn: "水龙头整天在滴水。" },
      { word: "leak", phonetic: "/liːk/", meaning: "漏水；泄漏", example: "There's a leak in the bathroom ceiling.", exampleCn: "浴室天花板有个漏水的地方。" },
      { word: "plumber", phonetic: "/ˈplʌmər/", meaning: "水管工", example: "We need to call a plumber to fix the pipe.", exampleCn: "我们需要叫个水管工来修管道。" },
      { word: "air conditioning", phonetic: "/ɛr kənˈdɪʃənɪŋ/", meaning: "空调", example: "The air conditioning isn't cooling the room.", exampleCn: "空调不制冷了。" },
      { word: "sort out", phonetic: "/sɔːrt aʊt/", meaning: "解决，处理", example: "We'll sort out the problem as soon as possible.", exampleCn: "我们会尽快解决这个问题。" }
    ],
    exercises: [
      { type: "choice", question: "I'm calling about a ___ issue.", options: ["maintenance", "maintain", "maintaining", "maintained"], answer: 0, explanation: "maintenance issue 维修问题" },
      { type: "fill", sentence: "The kitchen ___ has been leaking.", answer: "faucet", hint: "水龙头", acceptableAnswers: ["faucet"] },
      { type: "choice", question: "I'll send a ___ over to fix it.", options: ["plumber", "plumber's", "plumbing", "plumbed"], answer: 0, explanation: "plumber 水管工" },
      { type: "fill", sentence: "When would be a good ___ for you?", answer: "time", hint: "时间", acceptableAnswers: ["time"] },
      { type: "choice", question: "The air conditioning makes a ___ noise.", options: ["strange", "stranger", "strangely", "strangest"], answer: 0, explanation: "strange noise 奇怪的声音，strange是形容词修饰名词" },
      { type: "fill", sentence: "We'll get everything ___ out.", answer: "sorted", hint: "解决（过去分词）", acceptableAnswers: ["sorted"] }
    ],
    rolePlay: {
      scenario: "你的公寓热水器坏了，没有热水。你打电话给物业，要求尽快安排维修。",
      scenarioEn: "Your water heater broke down. Call the property manager to request urgent repair.",
      role: "Tenant",
      lines: [
        { speaker: "other", en: "Hello, property management. How can I help?", cn: "你好，物业管理处。请问有什么事？" },
        { speaker: "user", cn: "说你是几号房的住户，热水器坏了", en: "Hi, this is apartment 501. My water heater broke down.", keywords: ["apartment", "water heater", "broke down"] },
        { speaker: "other", en: "I'm sorry about that. When did it stop working?", cn: "很抱歉。什么时候坏的？" },
        { speaker: "user", cn: "说从今天早上开始就没热水了，问能不能尽快安排维修", en: "Since this morning. There's no hot water at all. Can you send someone to fix it as soon as possible?", keywords: ["this morning", "no hot water", "as soon as possible"] },
        { speaker: "other", en: "I'll arrange for a technician to come this afternoon. Will you be home?", cn: "我安排技术员今天下午过去。您会在家吗？" },
        { speaker: "user", cn: "说你下午在家，谢谢", en: "Yes, I'll be home all afternoon. Thank you.", keywords: ["home", "afternoon"] }
      ]
    }
  },
  {
    day: 7,
    category: "life",
    level: 2,
    title: "Joining a Gym",
    titleCn: "健身房办卡",
    dialogue: [
      { speaker: "A", role: "Visitor", en: "Hi, I'm interested in getting a gym membership. Can you tell me about your plans?", cn: "你好，我想办健身卡。能介绍一下你们的套餐吗？", keyWords: ["gym membership", "plans"], grammar: "I'm interested in + 动名词/名词，表示感兴趣" },
      { speaker: "B", role: "Gym Staff", en: "Of course! We have three membership plans: monthly, quarterly, and annual.", cn: "当然！我们有三种会员方案：月卡、季卡和年卡。", keyWords: ["monthly", "quarterly", "annual"] },
      { speaker: "A", role: "Visitor", en: "What's the price difference between them?", cn: "它们之间的价格差别是什么？", keyWords: ["price difference"] },
      { speaker: "B", role: "Gym Staff", en: "The monthly plan is $60, the quarterly is $150, and the annual is $500. The annual plan is the best value.", cn: "月卡60美元，季卡150美元，年卡500美元。年卡最划算。", keyWords: ["best value"] },
      { speaker: "A", role: "Visitor", en: "Does the membership include access to group classes?", cn: "会员是否可以参加团体课程？", keyWords: ["include", "group classes", "access to"], grammar: "Does... include...? 询问是否包含某项服务" },
      { speaker: "B", role: "Gym Staff", en: "Yes, all memberships include unlimited group classes like yoga, spinning, and boxing.", cn: "是的，所有会员都可以无限次参加瑜伽、动感单车和拳击等团体课。", keyWords: ["unlimited", "yoga", "spinning", "boxing"] },
      { speaker: "A", role: "Visitor", en: "That sounds great. Can I try a class before I sign up?", cn: "听起来不错。我能在办卡前先试上一节课吗？", keyWords: ["try", "sign up"] },
      { speaker: "B", role: "Gym Staff", en: "Absolutely! We offer a free one-day trial. You can use all the facilities and attend a class.", cn: "当然！我们提供免费一日体验。你可以使用所有设施并参加一节课。", keyWords: ["free trial", "facilities"] },
      { speaker: "A", role: "Visitor", en: "Perfect. What are your opening hours?", cn: "太好了。你们的营业时间是什么？", keyWords: ["opening hours"] },
      { speaker: "B", role: "Gym Staff", en: "We're open from 6 AM to 10 PM on weekdays and 8 AM to 8 PM on weekends.", cn: "工作日早6点到晚10点，周末早8点到晚8点。", keyWords: ["weekdays", "weekends"] }
    ],
    vocabulary: [
      { word: "membership", phonetic: "/ˈmembərʃɪp/", meaning: "会员资格", example: "How much is the annual membership?", exampleCn: "年度会员费是多少？" },
      { word: "quarterly", phonetic: "/ˈkwɔːrtərli/", meaning: "每季度的", example: "We pay rent on a quarterly basis.", exampleCn: "我们按季度付租金。" },
      { word: "facility", phonetic: "/fəˈsɪləti/", meaning: "设施", example: "The gym has excellent facilities.", exampleCn: "这家健身房设施很好。" },
      { word: "sign up", phonetic: "/saɪn ʌp/", meaning: "注册，报名", example: "I'd like to sign up for the yoga class.", exampleCn: "我想报名瑜伽课。" },
      { word: "trial", phonetic: "/ˈtraɪəl/", meaning: "试用，体验", example: "They offer a 7-day free trial.", exampleCn: "他们提供7天免费试用。" },
      { word: "opening hours", phonetic: "/ˈoʊpənɪŋ aʊərz/", meaning: "营业时间", example: "What are the opening hours of the library?", exampleCn: "图书馆的开放时间是什么？" }
    ],
    exercises: [
      { type: "choice", question: "I'm interested in getting a gym ___.", options: ["membership", "member", "memorial", "memory"], answer: 0, explanation: "gym membership 健身房会员" },
      { type: "fill", sentence: "The annual plan is the best ___.", answer: "value", hint: "价值/性价比", acceptableAnswers: ["value"] },
      { type: "choice", question: "Does the plan include ___ to group classes?", options: ["access", "assess", "accept", "accuse"], answer: 0, explanation: "access to 使用/进入的权限" },
      { type: "fill", sentence: "We offer a free one-day ___.", answer: "trial", hint: "试用", acceptableAnswers: ["trial"] },
      { type: "choice", question: "Can I try a class before I ___ up?", options: ["sign", "sing", "show", "sit"], answer: 0, explanation: "sign up 注册/报名" },
      { type: "fill", sentence: "What are your ___ hours?", answer: "opening", hint: "营业", acceptableAnswers: ["opening"] }
    ],
    rolePlay: {
      scenario: "你去健身房咨询办卡，你想知道价格、包含哪些服务，以及能不能先体验一天。",
      scenarioEn: "You visit a gym to ask about membership plans, included services, and a trial session.",
      role: "Visitor",
      lines: [
        { speaker: "other", en: "Welcome! Are you looking for a gym membership?", cn: "欢迎！您在考虑办健身卡吗？" },
        { speaker: "user", cn: "说是的，你想了解一下会员方案", en: "Yes, I'd like to learn about your membership plans.", keywords: ["membership", "plans"] },
        { speaker: "other", en: "We have monthly, quarterly, and annual plans. The annual is the best deal at $500.", cn: "我们有月卡、季卡和年卡。年卡最划算，500美元。" },
        { speaker: "user", cn: "问是否包括团体课程", en: "Does the membership include group classes?", keywords: ["include", "group classes"] },
        { speaker: "other", en: "Yes, all plans include unlimited group classes.", cn: "是的，所有方案都包含无限次团体课。" },
        { speaker: "user", cn: "问能不能先免费体验一天再决定", en: "Can I get a free trial before I sign up?", keywords: ["free trial", "sign up"] }
      ]
    }
  },
  {
    day: 8,
    category: "life",
    level: 3,
    title: "Apartment Hunting",
    titleCn: "租房看房",
    dialogue: [
      { speaker: "A", role: "Renter", en: "Hi, I saw your listing online for the two-bedroom apartment on Maple Street. Is it still available?", cn: "你好，我在网上看到你发布的枫树街两居室的房源。还有吗？", keyWords: ["listing", "two-bedroom", "available"], grammar: "Is it still available? 询问是否还有的常用表达" },
      { speaker: "B", role: "Landlord", en: "Yes, it is. Would you like to schedule a viewing?", cn: "是的，还有。你想预约看房吗？", keyWords: ["schedule a viewing"] },
      { speaker: "A", role: "Renter", en: "Yes, please. Before that, can I ask a few questions? What's the monthly rent?", cn: "好的。在那之前，我能问几个问题吗？月租是多少？", keyWords: ["monthly rent"] },
      { speaker: "B", role: "Landlord", en: "It's $1,800 per month, utilities not included. There's also a security deposit of one month's rent.", cn: "月租1800美元，不包含水电。还需要一个月房租的押金。", keyWords: ["utilities not included", "security deposit"], grammar: "utilities not included 不包含水电费" },
      { speaker: "A", role: "Renter", en: "I see. What's the lease term? And are pets allowed?", cn: "好的。租期是多长？允许养宠物吗？", keyWords: ["lease term", "pets allowed"] },
      { speaker: "B", role: "Landlord", en: "The minimum lease is 12 months. Small pets are allowed with an additional pet deposit of $300.", cn: "最短租期12个月。允许养小型宠物，需额外交300美元宠物押金。", keyWords: ["minimum lease", "pet deposit"] },
      { speaker: "A", role: "Renter", en: "Does the apartment come furnished or unfurnished?", cn: "公寓是带家具还是不带家具的？", keyWords: ["furnished", "unfurnished"] },
      { speaker: "B", role: "Landlord", en: "It's semi-furnished. It comes with a fridge, a washing machine, and basic kitchen appliances. But there's no bed or sofa.", cn: "半配家具。有冰箱、洗衣机和基本厨房电器。但没有床和沙发。", keyWords: ["semi-furnished", "appliances"] },
      { speaker: "A", role: "Renter", en: "That works for me. Is there parking available?", cn: "可以接受。有停车位吗？", keyWords: ["parking available"] },
      { speaker: "B", role: "Landlord", en: "There's an underground parking garage. It's $100 extra per month. Would you like to come see the place this weekend?", cn: "有地下停车场。每月额外100美元。你这周末想来看看吗？", keyWords: ["underground parking", "extra per month"] },
      { speaker: "A", role: "Renter", en: "Saturday afternoon works for me. What time?", cn: "周六下午可以。几点？", keyWords: ["works for me"] },
      { speaker: "B", role: "Landlord", en: "How about 2 PM? I'll meet you at the front entrance.", cn: "2点怎么样？我在正门等你。", keyWords: ["front entrance"] }
    ],
    vocabulary: [
      { word: "listing", phonetic: "/ˈlɪstɪŋ/", meaning: "（房屋）发布/挂牌信息", example: "I found several apartment listings online.", exampleCn: "我在网上找到了几个公寓房源。" },
      { word: "security deposit", phonetic: "/sɪˈkjʊərəti dɪˈpɒzɪt/", meaning: "押金，保证金", example: "The security deposit is refundable when you move out.", exampleCn: "退房时押金可退还。" },
      { word: "lease", phonetic: "/liːs/", meaning: "租约", example: "We signed a one-year lease.", exampleCn: "我们签了一年的租约。" },
      { word: "utilities", phonetic: "/juːˈtɪlɪtiz/", meaning: "水电煤等公共设施费用", example: "How much are the utilities per month?", exampleCn: "每月水电费多少？" },
      { word: "furnished", phonetic: "/ˈfɜːrnɪʃt/", meaning: "带家具的", example: "I prefer a fully furnished apartment.", exampleCn: "我更喜欢全配家具的公寓。" },
      { word: "appliance", phonetic: "/əˈplaɪəns/", meaning: "家用电器", example: "The kitchen has modern appliances.", exampleCn: "厨房有现代化的电器。" }
    ],
    exercises: [
      { type: "choice", question: "I saw your ___ online for the apartment.", options: ["listing", "list", "listen", "listing's"], answer: 0, explanation: "listing 房源信息，在线房屋发布" },
      { type: "fill", sentence: "The rent is $1,800, utilities not ___.", answer: "included", hint: "包含（过去分词）", acceptableAnswers: ["included"] },
      { type: "choice", question: "There's a ___ deposit of one month's rent.", options: ["security", "secure", "safety", "safe"], answer: 0, explanation: "security deposit 押金" },
      { type: "fill", sentence: "What's the ___ term?", answer: "lease", hint: "租约", acceptableAnswers: ["lease"] },
      { type: "choice", question: "The apartment comes ___.", options: ["semi-furnished", "semi-furniture", "semi-furnish", "semi-furnishing"], answer: 0, explanation: "semi-furnished 半配家具的" },
      { type: "fill", sentence: "Is there ___ available in the building?", answer: "parking", hint: "停车", acceptableAnswers: ["parking"] }
    ],
    rolePlay: {
      scenario: "你在网上看到一个心仪的一居室公寓，打电话给房东询问租金、是否包含水电、能否养猫，并预约看房时间。",
      scenarioEn: "You call a landlord about a one-bedroom apartment. Ask about rent, utilities, pet policy, and schedule a viewing.",
      role: "Renter",
      lines: [
        { speaker: "other", en: "Hello, this is Mark. How can I help you?", cn: "你好，我是Mark。有什么事吗？" },
        { speaker: "user", cn: "说你看到了他在网上发布的一居室公寓，想问一下月租多少", en: "Hi, I saw your listing for the one-bedroom apartment. What's the monthly rent?", keywords: ["listing", "monthly rent"] },
        { speaker: "other", en: "It's $1,200 per month.", cn: "月租1200美元。" },
        { speaker: "user", cn: "问是否包含水电费，以及允不允许养猫", en: "Are utilities included? And are cats allowed?", keywords: ["utilities", "cats allowed"] },
        { speaker: "other", en: "Utilities are not included. Cats are fine with a $200 pet deposit.", cn: "不包含水电。养猫可以，需交200美元宠物押金。" },
        { speaker: "user", cn: "说可以接受，想预约这周末去看房", en: "That works for me. Can I schedule a viewing this weekend?", keywords: ["works for me", "schedule", "viewing"] }
      ]
    }
  },
  {
    day: 9,
    category: "life",
    level: 3,
    title: "Job Interview",
    titleCn: "工作面试",
    dialogue: [
      { speaker: "A", role: "Interviewer", en: "Thank you for coming in today. Please have a seat. Can you start by telling me a little about yourself?", cn: "感谢你今天过来。请坐。能先简单介绍一下自己吗？", keyWords: ["tell me about yourself"], grammar: "Can you start by + 动名词，请某人先做某事" },
      { speaker: "B", role: "Candidate", en: "Sure. I graduated from State University with a degree in Marketing. I've been working in digital marketing for the past three years at a tech startup.", cn: "好的。我毕业于州立大学市场营销专业。过去三年我在一家科技初创公司做数字营销。", keyWords: ["degree in", "digital marketing", "tech startup"], grammar: "I've been working... 现在完成进行时表示持续的工作经验" },
      { speaker: "A", role: "Interviewer", en: "That's great. What made you apply for this position?", cn: "很好。是什么让你申请这个职位的？", keyWords: ["apply for", "position"] },
      { speaker: "B", role: "Candidate", en: "I've always admired your company's innovative approach to branding. I believe my experience in social media campaigns would be a great fit for your team.", cn: "我一直很欣赏贵公司在品牌方面的创新方式。我相信我在社交媒体营销方面的经验非常适合你们的团队。", keyWords: ["innovative approach", "great fit", "social media campaigns"] },
      { speaker: "A", role: "Interviewer", en: "Can you walk me through a project you're particularly proud of?", cn: "能给我讲讲你特别引以为傲的一个项目吗？", keyWords: ["walk me through", "proud of"], grammar: "walk me through 详细介绍/带我了解" },
      { speaker: "B", role: "Candidate", en: "Certainly. I led a social media campaign that increased our brand engagement by 40% in just two months. I managed a team of three and coordinated with the design department.", cn: "当然。我主导了一个社交媒体营销活动，仅两个月就将品牌互动率提高了40%。我带领三人团队，并与设计部门协调合作。", keyWords: ["led", "engagement", "managed a team", "coordinated"] },
      { speaker: "A", role: "Interviewer", en: "Impressive. What would you say is your biggest strength?", cn: "很不错。你觉得你最大的优势是什么？", keyWords: ["biggest strength"] },
      { speaker: "B", role: "Candidate", en: "I'd say my ability to analyze data and turn insights into actionable strategies. I'm also a strong communicator and work well under pressure.", cn: "我觉得是分析数据并将洞察转化为可执行策略的能力。我也善于沟通，能在压力下高效工作。", keyWords: ["analyze data", "actionable strategies", "under pressure"] },
      { speaker: "A", role: "Interviewer", en: "Where do you see yourself in five years?", cn: "你对五年后的自己有什么规划？", keyWords: ["in five years"], grammar: "Where do you see yourself in...? 经典面试问题" },
      { speaker: "B", role: "Candidate", en: "I hope to grow into a leadership role where I can mentor junior team members and contribute to the company's long-term strategy.", cn: "我希望能成长为管理层角色，可以指导初级团队成员并为公司的长期战略做贡献。", keyWords: ["leadership role", "mentor", "long-term strategy"] },
      { speaker: "A", role: "Interviewer", en: "Great. Do you have any questions for us?", cn: "很好。你有什么问题想问我们吗？", keyWords: ["questions for us"] },
      { speaker: "B", role: "Candidate", en: "Yes. What does a typical day look like for someone in this role? And what are the opportunities for professional development?", cn: "有的。这个岗位的日常工作是什么样的？有哪些职业发展机会？", keyWords: ["typical day", "professional development"] }
    ],
    vocabulary: [
      { word: "position", phonetic: "/pəˈzɪʃn/", meaning: "职位", example: "I'm applying for the marketing manager position.", exampleCn: "我在申请市场经理的职位。" },
      { word: "candidate", phonetic: "/ˈkændɪdət/", meaning: "候选人", example: "We interviewed five candidates today.", exampleCn: "我们今天面试了五位候选人。" },
      { word: "engagement", phonetic: "/ɪnˈɡeɪdʒmənt/", meaning: "互动率；参与度", example: "Our social media engagement has doubled.", exampleCn: "我们的社交媒体互动率翻了一番。" },
      { word: "leadership", phonetic: "/ˈliːdərʃɪp/", meaning: "领导力；领导职位", example: "She has strong leadership skills.", exampleCn: "她有很强的领导力。" },
      { word: "mentor", phonetic: "/ˈmentɔːr/", meaning: "指导，辅导", example: "He mentored several junior developers.", exampleCn: "他指导了几位初级开发人员。" },
      { word: "professional development", phonetic: "/prəˈfeʃənl dɪˈveləpmənt/", meaning: "职业发展", example: "The company offers many professional development programs.", exampleCn: "公司提供许多职业发展项目。" }
    ],
    exercises: [
      { type: "choice", question: "Can you ___ me through your last project?", options: ["walk", "talk", "take", "show"], answer: 0, explanation: "walk me through 详细介绍某事" },
      { type: "fill", sentence: "I ___ for this position because I admire the company.", answer: "applied", hint: "申请（过去式）", acceptableAnswers: ["applied"] },
      { type: "choice", question: "I believe my experience would be a great ___ for your team.", options: ["fit", "match", "fix", "hit"], answer: 0, explanation: "a great fit 非常合适/匹配" },
      { type: "fill", sentence: "Where do you see yourself in five ___?", answer: "years", hint: "年", acceptableAnswers: ["years"] },
      { type: "choice", question: "I work well under ___.", options: ["pressure", "stress", "force", "power"], answer: 0, explanation: "under pressure 在压力下，是面试中常用的表达" },
      { type: "fill", sentence: "What are the opportunities for professional ___?", answer: "development", hint: "发展", acceptableAnswers: ["development"] }
    ],
    rolePlay: {
      scenario: "你在面试一个市场营销岗位。面试官会问你自我介绍、为什么申请这个职位、你的优势，以及你有什么问题要问。",
      scenarioEn: "You are in a job interview for a marketing role. Answer questions about yourself, your motivation, and your strengths.",
      role: "Candidate",
      lines: [
        { speaker: "other", en: "Welcome. Please tell me a little about yourself.", cn: "欢迎。请简单介绍一下自己。" },
        { speaker: "user", cn: "介绍你的教育背景和工作经验", en: "I graduated with a degree in Marketing and have two years of experience in content creation.", keywords: ["degree", "experience"] },
        { speaker: "other", en: "Why did you apply for this position?", cn: "你为什么申请这个职位？" },
        { speaker: "user", cn: "说你很欣赏这家公司的品牌创新，觉得自己很适合", en: "I admire your company's innovative branding, and I believe I'd be a great fit.", keywords: ["innovative", "great fit"] },
        { speaker: "other", en: "What's your biggest strength?", cn: "你最大的优势是什么？" },
        { speaker: "user", cn: "说你善于数据分析，并且能在压力下工作", en: "I'm good at data analysis and I work well under pressure.", keywords: ["data analysis", "under pressure"] },
        { speaker: "other", en: "Do you have any questions for us?", cn: "你有什么问题想问吗？" },
        { speaker: "user", cn: "问公司有哪些职业发展机会", en: "What opportunities do you offer for professional development?", keywords: ["professional development"] }
      ]
    }
  },
  {
    day: 10,
    category: "life",
    level: 3,
    title: "Networking at a Party",
    titleCn: "社交聚会",
    dialogue: [
      { speaker: "A", role: "You", en: "Hi there! I don't think we've met. I'm Alex.", cn: "你好！我们好像没见过。我是Alex。", keyWords: ["I don't think we've met"], grammar: "I don't think we've met 初次见面的礼貌开场" },
      { speaker: "B", role: "Stranger (Jamie)", en: "Hi Alex! I'm Jamie. Nice to meet you. How do you know the host?", cn: "嗨Alex！我是Jamie。很高兴认识你。你怎么认识主人的？", keyWords: ["Nice to meet you", "know the host"] },
      { speaker: "A", role: "You", en: "We were college roommates. What about you?", cn: "我们是大学室友。你呢？", keyWords: ["college roommates", "What about you"] },
      { speaker: "B", role: "Stranger (Jamie)", en: "We work in the same building. So, what do you do for a living?", cn: "我们在同一栋楼上班。那你是做什么工作的？", keyWords: ["what do you do for a living"], grammar: "What do you do for a living? 询问职业的地道表达" },
      { speaker: "A", role: "You", en: "I'm a UX designer at a tech company. How about you?", cn: "我在一家科技公司做UX设计师。你呢？", keyWords: ["UX designer"] },
      { speaker: "B", role: "Stranger (Jamie)", en: "Oh, that's interesting! I'm in product management. Actually, we've been looking for a UX designer to collaborate with on a new project.", cn: "哦，很有趣！我做产品管理。实际上，我们一直在找UX设计师合作一个新项目。", keyWords: ["product management", "collaborate", "new project"] },
      { speaker: "A", role: "You", en: "Really? That sounds exciting. I'd love to hear more about it.", cn: "真的吗？听起来很令人兴奋。我很想多了解一下。", keyWords: ["I'd love to hear more"] },
      { speaker: "B", role: "Stranger (Jamie)", en: "We're developing a mobile app for remote teams. It's still in the early stages, but we need someone with a strong design background.", cn: "我们在开发一款远程团队用的移动应用。还在早期阶段，但我们需要有扎实设计背景的人。", keyWords: ["mobile app", "remote teams", "early stages", "design background"] },
      { speaker: "A", role: "You", en: "That's right up my alley. I've worked on several mobile app designs before. Here, let me give you my business card.", cn: "那正是我擅长的。我之前做过好几个移动应用设计。来，给你我的名片。", keyWords: ["right up my alley", "business card"], grammar: "right up my alley 正好是我擅长的领域" },
      { speaker: "B", role: "Stranger (Jamie)", en: "Great, here's mine too. Let's keep in touch and maybe set up a meeting next week?", cn: "好的，这是我的名片。我们保持联系，下周约个会面怎么样？", keyWords: ["keep in touch", "set up a meeting"] },
      { speaker: "A", role: "You", en: "Sounds like a plan. I'll send you an email on Monday. It was really great meeting you, Jamie.", cn: "好主意。我周一给你发邮件。很高兴认识你，Jamie。", keyWords: ["Sounds like a plan", "great meeting you"] },
      { speaker: "B", role: "Stranger (Jamie)", en: "Likewise! Enjoy the rest of the party.", cn: "我也是！好好享受派对吧。", keyWords: ["Likewise"] }
    ],
    vocabulary: [
      { word: "networking", phonetic: "/ˈnetwɜːrkɪŋ/", meaning: "社交，建立人脉", example: "Networking events are great for meeting new people.", exampleCn: "社交活动是认识新朋友的好机会。" },
      { word: "collaborate", phonetic: "/kəˈlæbəreɪt/", meaning: "合作", example: "We're looking for designers to collaborate with.", exampleCn: "我们在找设计师来合作。" },
      { word: "business card", phonetic: "/ˈbɪznəs kɑːrd/", meaning: "名片", example: "Let me give you my business card.", exampleCn: "给你我的名片。" },
      { word: "keep in touch", phonetic: "/kiːp ɪn tʌtʃ/", meaning: "保持联系", example: "Let's keep in touch after the conference.", exampleCn: "会议后我们保持联系吧。" },
      { word: "right up my alley", phonetic: "/raɪt ʌp maɪ ˈæli/", meaning: "正好是我擅长的", example: "Mobile design? That's right up my alley!", exampleCn: "移动端设计？那正好是我的专长！" },
      { word: "set up", phonetic: "/set ʌp/", meaning: "安排，建立", example: "Can we set up a meeting for next Tuesday?", exampleCn: "我们能安排下周二开个会吗？" }
    ],
    exercises: [
      { type: "choice", question: "I don't think we've ___.", options: ["met", "meet", "meeting", "meets"], answer: 0, explanation: "we've met 用现在完成时，表示到目前为止没见过" },
      { type: "fill", sentence: "What do you do for a ___?", answer: "living", hint: "生计/谋生", acceptableAnswers: ["living"] },
      { type: "choice", question: "That's right up my ___.", options: ["alley", "street", "road", "lane"], answer: 0, explanation: "right up my alley 正好是我擅长的领域" },
      { type: "fill", sentence: "Let's keep in ___ and set up a meeting.", answer: "touch", hint: "联系", acceptableAnswers: ["touch"] },
      { type: "choice", question: "We've been looking for a designer to ___ with.", options: ["collaborate", "cooperate", "coordinate", "communicate"], answer: 0, explanation: "collaborate with 与...合作" },
      { type: "fill", sentence: "Here, let me give you my ___ card.", answer: "business", hint: "商务/名片", acceptableAnswers: ["business"] }
    ],
    rolePlay: {
      scenario: "你在一个行业聚会上遇到一位陌生人，你们互相介绍、聊各自的工作，发现有合作机会，于是交换联系方式。",
      scenarioEn: "You meet a stranger at an industry party. Introduce yourself, discuss work, and exchange contact info.",
      role: "Attendee",
      lines: [
        { speaker: "other", en: "Great party, isn't it? I'm Sam, by the way.", cn: "聚会不错吧？顺便说一下，我是Sam。" },
        { speaker: "user", cn: "介绍自己的名字和职业", en: "Hi Sam! I'm Lee. I work as a software engineer.", keywords: ["I'm", "work as"] },
        { speaker: "other", en: "Oh nice! I'm a project manager at a startup. We're actually looking for engineers.", cn: "不错！我是一家创业公司的项目经理。我们其实正在找工程师。" },
        { speaker: "user", cn: "表示很感兴趣，想多了解一下", en: "Really? I'd love to hear more about it.", keywords: ["love to hear more"] },
        { speaker: "other", en: "We're building an AI-powered tool. It's a really exciting project. Here's my card.", cn: "我们在做一个AI工具。很有意思的项目。这是我的名片。" },
        { speaker: "user", cn: "说听起来很棒，给对方你的名片，说保持联系", en: "That sounds amazing. Here's my card too. Let's keep in touch!", keywords: ["card", "keep in touch"] }
      ]
    }
  }
];
