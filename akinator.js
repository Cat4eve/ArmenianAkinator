CHARACTERS = JSON.parse(`{
    "Թորիկ": {
        "male": true,
        "rich": false,
        "villager": false,
        "main": true,
        "marry": true,
        "dead": false,
        "kid": false,
        "friend": true,
        "love": true
    },
    "Անժելա": {
            "male": false,
            "rich": false,
            "villager": false,
            "main": false,
            "marry": true,
            "dead": false,
            "kid": false,
            "friend": false,
            "love": true
    },
    "Փանոս": {
            "male": true,
            "rich": false,
            "villager": true,
            "main": true,
            "marry": true,
            "dead": false,
            "kid": true,
            "friend": false,
            "love": false
    },
    "Լեյտենանտ": {
            "male": true,
            "rich": false,
            "villager": false,
            "main": false,
            "marry": false,
            "dead": false,
            "kid": false,
            "friend": false,
            "love": false
    },
    "Ռեվազ": {
            "male": true,
            "rich": false,
            "villager": true,
            "main": false,
            "marry": false,
            "dead": false,
            "kid": false,
            "friend": true,
            "love": false
    },
    "Իշխան": { 
            "male": true,
            "rich": false,
            "villager": true,
            "main": false,
            "marry": false,
            "dead": true,
            "kid": false,
            "friend": true,
            "love": false
    },
    "Քաջ Նազար": {
            "male": true,
            "rich": false,
            "villager": true,
            "main": true,
            "marry": true,
            "dead": false,
            "kid": false,
            "friend": false,
            "love": false
    },
    "Նիկողոս Աղա": {
            "male": true,
            "rich": true,
            "villager": false,
            "main": false,
            "marry": true,
            "dead": false,
            "kid": false,
            "friend": true,
            "love": false
    },
    "Ներսես Ախպար": {
            "male": true,
            "rich": true,
            "villager": false,
            "main": true,
            "marry": true,
            "dead": false,
            "kid": false,
            "friend": false,
            "love": false
    },
    "Հեղնար": {
            "male": false,
            "rich": false,
            "villager": true,
            "main": false,
            "marry": true,
            "dead": true,
            "kid": false,
            "friend": false,
            "love": true
    },
    "Ուստա Մկրտիչ": {
            "male": true,
            "rich": true,
            "villager": true,
            "main": true,
            "marry": true,
            "dead": true,
            "kid": false,
            "friend": true,
            "love": true
    },
    "Գալուստ": {
            "male": true,
            "rich": true,
            "villager": true,
            "main": false,
            "marry": true,
            "dead": false,
            "kid": true,
            "friend": false,
            "love": false
    },
    "Վարոս": {
            "male": true,
            "rich": false,
            "villager": true,
            "main": false,
            "marry": false,
            "dead": false,
            "kid": false,
            "friend": false,
            "love": true
    },
    "Երանոս": {
            "male": true,
            "rich": false,
            "villager": true,
            "main": false,
            "marry": true,
            "dead": true,
            "kid": false,
            "friend": false,
            "love": true
    },
    "Հովհաննես": {
            "male": true,
            "rich": false,
            "villager": true,
            "main": true,
            "marry": false,
            "dead": false,
            "kid": true,
            "friend": true,
            "love": false
    },
    "Վարպետ Մուկուչ": {
            "male": true,
            "rich": false,
            "villager": true,
            "main": false,
            "marry": true,
            "dead": true,
            "kid": false,
            "friend": true,
            "love": false
    },
    "Մկո": {
            "male": true,
            "rich": false,
            "villager": true,
            "main": false,
            "marry": true,
            "dead": true,
            "kid": false,
            "friend": true,
            "love": true
    },
    "Տեր": {
            "male": true,
            "rich": true,
            "villager": true,
            "main": false,
            "marry": true,
            "dead": false,
            "kid": false,
            "friend": false,
            "love": false
    },
    "Ծառա": {
            "male": true,
            "rich": false,
            "villager": true,
            "main": true,
            "marry": false,
            "dead": false,
            "kid": false,
            "friend": false,
            "love": true
    }
}`);

RELATIONSHIPQ2C = ["male","rich","villager","main","marry","dead","kid","friend","love"]



QUESTIONS = JSON.parse(`{
    "questions": ["Ձեր կերպարը արական սեռի ներկայացուցիչ է",
    "Ձեր կերպարը հարուստ է եղել",
    "Ձեր կերպարը գյուղացի է",
    "Ձեր կերպարը գլխավոր հերոսն է",
    "Ձեր կերպարը ամուսնացած է եղել",
    "Ձեր կերպարը մահացած է",
    "Ստեղծագործության մեծ մասը անչափահաս է եղել",
    "Ձեր կերպարը ունի ընկերներ",
    "Ձեր կերպարը սիրահարված է"]
}`)

function choose(choices) {
    return Math.floor(Math.random() * choices.length);
}

GameContent = document.getElementById("content");
StartGameBtn = document.getElementById("StartGame");
QuestionContent = document.getElementById("question");
YesBtn = document.getElementById("yes");
NoBtn = document.getElementById("no");
CharacterContent = document.getElementById("character");
RetryBtn = document.getElementById("retry");

question_list = JSON.parse(JSON.stringify(QUESTIONS))['questions']
answer_list = {}

StartGameBtn.onclick = function() {
    StartGameBtn.style.visibility = 'hidden';
    let q_i = choose(question_list)
    QuestionContent.innerText = question_list[q_i]
    answer_list[question_list[q_i]] = null;
    question_list.splice(q_i, 1)


    QuestionContent.style.visibility = 'visible';
    YesBtn.style.visibility = 'visible';
    NoBtn.style.visibility = 'visible';
}

YesBtn.onclick = function() {
    for (k in answer_list) if (answer_list[k] == null) answer_list[k] = 1;
    f()
}

NoBtn.onclick = function() {
    for (k in answer_list) if (answer_list[k] == null) answer_list[k] = 0;
    f()
}

RetryBtn.onclick = function() {
        RetryBtn.style.visibility = 'hidden';
        StartGameBtn.style.visibility = 'visible';
        QuestionContent.style.visibility = 'hidden';
        YesBtn.style.visibility = 'hidden';
        NoBtn.style.visibility = 'hidden';
        CharacterContent.style.visibility = 'hidden';
        question_list = JSON.parse(JSON.stringify(QUESTIONS))['questions']
}

function f() {
    if (question_list.length == 0) {
        r()
    }
    let q_i = choose(question_list)
    QuestionContent.innerText = question_list[q_i]
    answer_list[question_list[q_i]] = null;
    question_list.splice(q_i, 1)
}

function r() {
    CharacterContent.style.visibility = 'visible';
    QuestionContent.style.visibility = 'hidden';
    YesBtn.style.visibility = 'hidden';
    NoBtn.style.visibility = 'hidden';
    RetryBtn.style.visibility = 'visible';

    ans_obj = {}
    q = JSON.parse(JSON.stringify(QUESTIONS))['questions']
    for (let key in answer_list){
        console.log(QUESTIONS.question_list)
        for (let i = 0; i < q.length; i++){
            if (q[i] == key) {
                ans_obj[RELATIONSHIPQ2C[i]] = answer_list[key] == 1 ? true : false;
            }
        }
    }
    characters = JSON.parse(JSON.stringify(CHARACTERS))
    heros = ''
    for (let key in characters) {
        char_obj = characters[key];
        match = true;
        for (let k in char_obj) {
                if (char_obj[k] != ans_obj[k]) {
                        match = false;
                }
        }
        if (match) {
                heros = key
                break;
        }
    }
    if (heros.length == 0) CharacterContent.innerText = 'Մենք այդպիսի կերպար չգիտենք';
    else CharacterContent.innerText = 'Ձեր գուշակած կերպարն էր - ' + heros;

}

