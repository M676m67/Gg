import fetch from 'node-fetch';

const gameDuration = 60000;

const poin = 500;

export async function handler(m, { command, text, conn }) {

    let id = m.chat;

    conn.tebakGame = conn.tebakGame ? conn.tebakGame : {};

    let currentGame = conn.tebakGame[id];

    let src = await (await fetch('https://gist.githubusercontent.com/Stark197/62b0db47696c39d17f5973dbd0dfa968/raw/99164d54745fb1ae42754367bb45df971986b14c/Harry')).json();

let poster = 'https://qu.ax/KvJx.jpg';

    if (!src || src.length === 0) {

        return conn.reply(m.chat, '> *◞⚠️◜ لا تـوجـد أسـئـلـة مـتـاحـة فـي الـوقـت الـحـالـي.*', m);

    }

    if (currentGame) {

        if (!text) {

            return conn.reply(m.chat, `> *◞❕◜ هـنـاك لـعـبـة قـيـد الـتـشـغـيـل.*`, m);

        } else if (text === currentGame[1].name) {

            m.react('✅');

            global.db.data.users[m.sender].exp += poin;

conn.sendButton(m.chat, `> *◞🎊◜ مـبـارك لـقـد ربـحـت حـصـلـت عـلـي: ${poin}ريـال💰*`, '> BY : A L I S A', poster, [[`↬⌯الـمــ↪️ـزيـد‹◝`, `.هاري`]], null, null);

             clearTimeout(currentGame[3]);

            delete conn.tebakGame[id];

        } else if (text === 'انسحب') {

            clearTimeout(currentGame[3]);

conn.sendButton(m.chat, `> *◞😂◜ تـم الانـسـحـاب بـنـجـاح ايـهـا الـفـاشـل الاجـابـة كـانـت: ${currentGame[1].name}*`, '> BY : A L I S A', poster, [[`↬⌯الـمــ↪️ـزيـد‹◝`, `.هاري`]], null, null);

            delete conn.tebakGame[id];

        } else {

       clearTimeout(currentGame[3]);

            m.react('❌');

conn.sendButton(m.chat, `> *◞❌◜ الاجـابـة  خـاطـئـه الاجـابـه الـصـحـيحه كـانـت : ${currentGame[1].name}*`, '> BY : A L I S A', poster, [[`↬⌯الـمــ↪️ـزيـد‹◝`, `.هاري`]], null, null);

            delete conn.tebakGame[id];

        }

    } else {

        if (!text) {

            let question = src[Math.floor(Math.random() * src.length)];

            let options = [question.name];

            

            while (options.length < 4) {

                let option = src[Math.floor(Math.random() * src.length)].name;

                if (!options.includes(option)) {

                    options.push(option);

                }

            }

            options = options.sort(() => Math.random() - 0.5);

            conn.tebakGame[id] = [m, question, 10, setTimeout(() => {

                delete conn.tebakGame[id];

conn.sendButton(m.chat, `> *◞⏰  ◜انـتـهـي وقـت الـعـبـة الاجـابـة كـانـت: ${question.name}*`, '> BY : A L I S A', poster, [[`↬⌯الـمــ↪️ـزيـد‹◝`, `.هاري`]], null, null);

            }, gameDuration)];

            let message = `

> ‹◝ احـزر الـشـــخـــ😶‍🌫️ــــصــيــــة↬
╮⭒⭒ ─── ┈ ★ ★ ★ ┈ ── ⭒⭒╭
> *↬⌯وقـت الاجــ⏳ـابـة${(gameDuration / 1000).toFixed(2)}*

> *↬⌯الـجـائـ🎁ـزة: ${poin}*

> *للانـسـحـاب اضـغـط عـلـى زر ◞انـسـحـب›*
╯⭒⭒ ─── ┈ ★ ★ ★ ┈ ── ⭒⭒╰
`;

            if (question.img) {

                await conn.sendButton(m.chat, message, '> BY : A L I S A', question.img, [[`①: ${options[0]}`, `.هاري ${options[0]}`], [`②: ${options[1]}`, `.هاري ${options[1]}`], [`③: ${options[2]}`, `.هاري ${options[2]}`], [`④:${options[3]}`, `.هاري ${options[3]}`], [`◞انـسـحـاب🏃‍♂️◜`, `.هاري انسحب`]], null, null);

            } 

        } else {

m.react('👇🏻');

            conn.sendButton(m.chat, `> *لـقـد انـتـهـت الـعـبـة ◞❕◜*`, '> BY : A L I S A', poster, [[`↬⌯الـمــ↪️ـزيـد‹◝`, `.هاري`]], null, null);

        }

    }

}

handler.help = ['سيارات'];

handler.tags = ['العاب'];

handler.command = /^هاري$/i;

export default handler;# Gg
