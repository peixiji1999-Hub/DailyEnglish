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
  }
];
