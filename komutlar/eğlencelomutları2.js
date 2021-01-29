const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(``)
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» +alev (Logoda Duracak Yazı) :** Bot Size Alevli Logo Yapar.
> **» +altın (Logoda Duracak Yazı) :** Bot Size Altın Logo Yapar.
> **» +anime (Logoda Duracak Yazı) :** Bot Size Anime Yazısıyla Logo Yapar.
> **» +arrow (Logoda Duracak Yazı) :** Bot Size Ok İle Logo Yapar.
> **» +atatürk  :** Bot Size Atatürk GİF i Atar.
> **» +banner (Banner da duracak yazı) :** Bot Size Banner Yapar.
> **» +basit (Logoda Duracak Yazı) :** Bot Size Basit Logo Yapar.
> **» +dinamik (Logoda Duracak Yazı) :** Bot Size Dinamik Yazı Tipi İle Logo Yapar.
> **» +elmas (Logoda Duracak Yazı) :** Bot Size Elmas Logo Yapar.
> **» +fbi  :** Bot Size Fbi Gif Atar.
> **» +dinamik (Logoda Duracak Yazı) :** Bot Size Dinamik Yazı Tipi İle Logo Yapar.
> **» +green (Logoda Duracak Yazı) :** Bot Size Yeşil Bir Logo Yapar.
> **» +habbo (Logoda Duracak Yazı) :** Bot Size Habbo Bir Logo Yapar.
> **» +hesapla :** Bot Sizin Verdiğiniz Hesaplama İşlemini Yapar.
> **» +kalın (Logoda Duracak Yazı) :** Bot Size Kalın Bir Logo Yapar.
> **» +red (Logoda Duracak Yazı) :** Bot Size Kırmızı Bir Logo Yapar.
> **» +mcskin  :** Bot Size Bir McSkin Yapar.
> **» +neonmavi (Logoda Duracak Yazı) :** Bot Size Neon Bir Logo Yapar.
> **» +sarıl (Logoda Duracak Yazı) :** Bot Size Sarılan Bir Logo Yapar.
> **» +taksimdayı :** Bot Size Taksim Dayı Bir GİF Atar.
> **» +tersyazı (Logoda Duracak Yazı) :** Bot Size Ters Bir Yazı Yapar.
> **» +wasted (@Etiketlenecek Kişi) :** Bot Size Etiketlediğiniz Kişinin PP sine Wasted Efekti Yapar.
> **» +sunucuresmi  :** Bot Size Olduğunuz Sunucunun Resmini Atar.
> **» +yetkilerim  :** Bot Size Yetkilerinizi Söyler.



`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "eğlence2",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'eğlence2'
};