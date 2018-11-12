const Discord = require("discord.js");
const client = new Discord.Client();
 const prefix = "#";
client.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;https://discordapp.com/developers/applications/438317360881991680
  let args = message.content.split(' ');
  if(args[0] === `#{prefix}bc`) {
    if(!message.member.hasPermission("ADMINISTRATION")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');
  
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ 🔖 :: #{msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: #{successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {
      message.guild.members.forEach(g => {
        g.send(args.slice(1).join(' ')).then(() => {
          successCount++;
          msgCount++;
          msg.edit(`**- [ 🔖 :: #{msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: #{successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ 🔖 :: #{msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: #{successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        });
      });
    });
  }
});

});

client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 2**`)


    }
});

client.on('ready', () => {
client.user.setActivity("Winter",{type: 'playing'});

});
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'اسم روم الترحيب');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('PURPLE')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | اطلق من دخل' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
});
  client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`بس بعرف وين رحت؟؟؟ :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('PURPLE')
        .setFooter(`====اهلا السيرفر نور بيك و الله====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});

});

client.login(process.env.BOT_TOKEN);
