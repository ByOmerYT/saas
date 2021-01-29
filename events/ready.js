const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] Maxel Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT Adı : ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("dnd"); //rahatsız etmeyin : dnd | boşta : idle | çevrim içi : online
  var oyun = [
    "+yardım YAZARAK KOMUTALARA ULAŞABİLİRSİNİZ.",
    "#HAKEDİYORUZ",
    "#YENİYİZ",
"#BotYazdıkAmaBaşardık",
"#SavaşaKarşıBarış",
"#KüllerimizdenDoğduk",
"#GüvenBota",
"By_Ömer Twitch",
"twitch.tv/byomeryt",
"By_Ömer Youtube",

"Bot AKTİF",
"+sosyalmedya YAZARAK SOSYAL MEDYA HESAPLARINA ULAŞABİLİRSİNİZ.",
"#ÇalanlaraKarşıİsyan",
"Botumuz Sıfırlandı O yüzden daha 10.500 kişide ",
"Botumuzu Paylaşarak Bize Deste Olabilirsiniz!",
    
    

  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 5000); // ne kadar sürede değiştini ayarla yeri
};