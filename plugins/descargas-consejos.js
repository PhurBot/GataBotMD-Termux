import translate from 'translate-google-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {

if (command == 'consejo') {
try {  
let letra = 'https://mysuenos.com/wp-content/uploads/2019/10/trebol.jpg'
let res = await fetch("https://bx-hunter.herokuapp.com/api/fakta?apikey=bx")//("https://supra-api.herokuapp.com/api/conselho?apikey=supraz") 
let json = await res.json()
let { consejo } = json
const tld = 'cn'
let frase1 = await translate(`${consejo }`, { tld, to: 'es' })
let texto = `
*╭━━・☘️・━━━━・☘️・━━⬣*

*ღ ${frase1}*

*╰━━・☘️・━━━━・☘️・━━⬣*`

conn.sendHydrated(m.chat, texto, wm, letra, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙉𝙚𝙬 𝘾𝙤𝙪𝙣𝙘𝙞𝙡', `${usedPrefix + command}`],
['𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', '.consejo2'],
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m,)
} catch (e) {
conn.reply(m.chat, `${fg}\`\`\`PARECE QUE ALGO NO FUNCIONA\nREPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO #REPORTE\`\`\``, m)}}  
  
if (command == 'consejo2') {
try {  
let letra = 'https://mysuenos.com/wp-content/uploads/2019/10/trebol.jpg'
let res = await fetch("https://supra-api.herokuapp.com/api/conselho?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'en' })
let texto = `
ㅤ

*♥︎ ${frase1}*

ㅤ

conn.sendHydrated(m.chat, texto, wm, letra, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙉𝙚𝙬 𝘾𝙤𝙪𝙣𝙘𝙞𝙡', `${usedPrefix + command}`],
['𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙀𝙨𝙥𝙖𝙣𝙤𝙡', '.consejo'],
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m,)
} catch (e) {
conn.reply(m.chat, `${fg}\`\`\`PARECE QUE ALGO NO FUNCIONA\nREPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO #REPORTE\`\`\``, m)}}
  

if (command == 'fraseromantica') {
try {  
let letra = 'https://www.tuexpertoapps.com/wp-content/uploads/2019/02/san-valentin-apps-01.jpg.webp'
let res = await fetch("https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'es' })
let texto = `
ㅤ

*ღ ${frase1}*

ㅤ
//m.reply(`
//ㅤ
//*ღ ${frase1}*
//ㅤ

conn.sendHydrated(m.chat, texto, wm, letra, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙉𝙚𝙬 𝙋𝙝𝙧𝙖𝙨𝙚', `${usedPrefix + command}`],
['𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', '.fraseromantica2'],
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m,)
} catch (e) {
conn.reply(m.chat, `${fg}\`\`\`PARECE QUE ALGO NO FUNCIONA\nREPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO #REPORTE\`\`\``, m)}}

  
if (command == 'fraseromantica2') {
try {  
let letra = 'https://www.tuexpertoapps.com/wp-content/uploads/2019/02/san-valentin-apps-01.jpg.webp'
let res = await fetch("https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'en' })
let texto = `
*╭━━━・✨・━━━━━・✨・━━━⬣*

*ღ ${frase1}*

*╰━━━・✨・━━━━━・✨・━━━⬣*`

conn.sendHydrated(m.chat, texto, wm, letra, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙉𝙚𝙬 𝙋𝙝𝙧𝙖𝙨𝙚', `${usedPrefix + command}`],
['𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙀𝙨𝙥𝙖𝙣𝙤𝙡', '.fraseromantica'],
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m,)} catch (e) {
conn.reply(m.chat, `${fg}\`\`\`PARECE QUE ALGO NO FUNCIONA\nREPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO #REPORTE\`\`\``, m)}}

if (command == 'historia') {
try {  
let letra = 'https://cdn.pixabay.com/photo/2015/07/23/19/12/book-857377_960_720.jpg'
let res = await fetch("https://api-xcoders.xyz/api/random/cerpen/lucu?apikey=xcoders")
let json = await res.json()
let { story, title, author_name } = json.result
const tld = 'cn'
let storytime = await translate(`${story}`, { tld, to: 'es' })
let titletime = await translate(`${title}`, { tld, to: 'es' })
let texto = `
💗 *Título: ${titletime}*
💗 *Autor(a): ${author_name}*
┈┈┈┈┈┈┈┈┈┈┈┈┈
📖 *${storytime}*`

//conn.reply(m.chat, `
//💗 *Título: ${titletime}*
//💗 *Autor(a): ${author_name}*
//┈┈┈┈┈┈┈┈┈┈┈┈┈
//📖 *${storytime}*`, m)}
conn.sendHydrated(m.chat, texto, wm, letra, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙉𝙚𝙬 𝙃𝙞𝙨𝙩𝙤𝙧𝙮', `${usedPrefix + command}`],
['𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', '.historia2'],
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m,)} catch (e) {
conn.reply(m.chat, `${fg}\`\`\`PARECE QUE ALGO NO FUNCIONA\nREPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO #REPORTE\`\`\``, m)}}
  
if (command == 'historia2') {
try {  
let letra = 'https://cdn.pixabay.com/photo/2015/07/23/19/12/book-857377_960_720.jpg'
let res = await fetch("https://api-xcoders.xyz/api/random/cerpen/lucu?apikey=xcoders") //("https://api-xcoders.xyz/api/random/cerpen/cinta?apikey=xcoders")
let json = await res.json()
let { story, title, author_name } = json.result
const tld = 'cn'
let storytime = await translate(`${story}`, { tld, to: 'en' })
let titletime = await translate(`${title}`, { tld, to: 'en' })
let texto = `
💗 *Título: ${titletime}*
💗 *Autor(a): ${author_name}*
┈┈┈┈┈┈┈┈┈┈┈┈┈
📖 *${storytime}*`

conn.sendHydrated(m.chat, texto, wm, letra, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙉𝙚𝙬 𝙃𝙞𝙨𝙩𝙤𝙧𝙮', `${usedPrefix + command}`],
['𝙑𝙚𝙧𝙨𝙞𝙤𝙣 𝙀𝙨𝙥𝙖𝙣𝙤𝙡', '.historia'],
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '#menu']
], m,)} catch (e) {
conn.reply(m.chat, `${fg}\`\`\`PARECE QUE ALGO NO FUNCIONA\nREPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO #REPORTE\`\`\``, m)}}
}
handler.tags = ['frases']
handler.command = handler.help = ['consejo', 'consejo2', 'fraseromantica', 'fraseromantica2', 'historia', 'historia2']
export default handler
