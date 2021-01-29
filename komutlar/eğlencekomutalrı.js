const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(``)
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» +aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» +balık-tut :** Denizde balık tutarsınız.
> **» +beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
> **» +ara155 :** Polisi aramanıza yarar.
> **» +efkarım :** Şu anda olan efkarınızı ölçersiniz.
> **» +ejderha-yazı :** Ejderha temalı logo üretirsiniz.
> **» +espri :** Bot sizin için espri yapar.
> **» +hesapla :** Belirttiğiniz matematik işlemini bot yapar.
> **» +kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
> **» +kralol :** Kral olmanıza yarar.
> **» +tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
> **» +yazıtura :** Bot ile yazı-tura oyununu oynarsınız.
> **» +yılbaşı :** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
> **» +öp :** Etiketlediğiniz kişiyi öpmenize yarar.
> **» +şekerye :** Bot Size Şeker İkram Eder.
> **» +token :** Tokeninizi Gösterir.



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
  name: "eğlence",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'eğlence'
};