let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/19f968d68c89c645f5191.jpg'
let dann =
`
┏━━━ꕥ〔 *${global.wm2}* 〕ꕥ━⬣ 
┃Dana: 6282389924037
┃Pulsa: 6282389924037
┃Pulsa: 6282389924037
┃Gopay: 6282389924037
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: https://saweria.co/Vynaabots
┃Trakteer: https://trakteer.id/DannXD
┃Socialbuzz: https://socialbuzz.com/DannXD
┃Thanks for Donationing!
┗━━━ꕥ
`
 await conn.sendButton(m.chat, dann, wm, qris, [['Menu', '.menu']], m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler