let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, 𝙄𝙩'𝙨 𝙖𝙗𝙤𝙪𝙩 𝙩𝙞𝙢𝙚 𝙮𝙤𝙪 💍 𝙈𝙖𝙧𝙧𝙮 ${toM(b)}, 𝘾𝙪𝙩𝙚 𝙋𝙤𝙪𝙥𝙡𝙚 🤩💓*`, null, {mentions: [a, b]})}




  

handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['formarpareja','formarparejas']
handler.group = true
export default handler
