let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw `${mg}𝙒𝙍𝙄𝙏𝙀 𝙔𝙊𝙐𝙍 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉 𝙏𝙊 𝘽𝙀 𝘼𝙉𝙎𝙒𝙀𝙍𝙀𝘿\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Hoy va llover?*`   
let pre = `╭━〔 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉 〕━⬣  
⁉️ 𝙋𝙍𝙀𝙂𝙐𝙉𝙏𝘼
🙀 *${text}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙍𝙀𝙎𝙋𝙊𝙉𝙎𝙀 
😼 *${['Si','Tal vez sí','Tal vez no','Posiblemente','Probablemente no','Probablemente no','Puede ser','No puede ser','No','Imposible','Depende','Creo que si','Creo que no','Claro no lo dudes','Hasta yo lo dudo','No tengo palabras jajaja','Es altamente posible','Es bajamente posible'].getRandom()}*
╰━━━━━〔 𓃠 *${vs}* 〕━━━━⬣`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝘼𝙜𝙖𝙞𝙣', `${usedPrefix + command} ${text}`],
['𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪', '/menu']
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
export default handler
