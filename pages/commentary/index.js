// pages/commentary/index.js
App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { mp3: "https://static.zhanapp.com.cn/SoundRecording/0.mp3", img: "https://static.zhanapp.com.cn/SoundRecording/0.jpg", text:"大家好。欢迎大家来到《你，我的缪斯 – 从梵高 到马蒂斯》艺术展。艺术家们是如何创作出美丽作品的呢？在神话中有个艺术之神‘缪斯’帮助艺术家的故事。一般我们将艺术家的恋人称之为缪斯。这样的情况应该是艺术之神以凡人的样子出现传达了爱的美好。但，并不是所有的艺术作品的主题都是爱情。艺术家们通过自然与都市的风景、人生中灿烂的瞬间、强烈的色彩等遇见缪斯，发现其美丽。那么梵高、雷诺阿、卡耶博特、克里姆特、马蒂斯等5位画家遇见了怎样的缪斯呢？遇见缪斯的瞬间，他们是如何心潮澎湃、眼前又是怎样美丽的光景呢？现在带大家出发，去感受一下他们的特别瞬间。",title:"你，我的缪斯"},
      { mp3: "https://static.zhanapp.com.cn/SoundRecording/1-0.mp3", img: "https://static.zhanapp.com.cn/SoundRecording/1-0.jpg", text: "一望无际的麦田。这是1888年，梵高在法国南部的小城阿尔勒遇见的风景。梵高起初并不是个伟大的画家。他学习了神学、做着卖画的工作，但每次都因不适应而面临失败，直到快30岁的时候才开始画画。但他并没有正式学画画，只是通过不断的失败与练习的过程，终于完成了《吃土豆的人》从此一炮而红。这个时期阴暗且粗矿的作品，与他普遍流传的其他作品风格非常不同。希望学到新的技巧与色彩的他，来到了艺术之都巴黎。因他的弟弟提奥梵高刚好在美术馆工作，所以他与弟弟一起生活，与其他的画家交流，扩展着自己的艺术世界。在巴黎的2年半里，虽然梵高的实力突飞猛进，但巴黎的生活也让他心力交瘁。都市的繁杂、爱情的失败使他一直处于孤独的状态。甚至与弟弟提奥梵高的关系也一触即发。梵高梦想着去往法国北部那个温暖、有着鲜明色彩的南方。在他的思想中阿尔勒就是这样的地方。\n\n 1888年2月，梵高终于到达了阿尔勒。那里的风景与法国完全不同。温暖的阳光拥抱着万物，展现着不得不画的美丽风景，跟随季节时时变化的麦田给了他无限的活力与安慰。梵高逗留在阿尔勒一年多的时间里，创作了一百多幅画作，我们所熟知的作品几乎也都是在此时期完成的。自然与梵高，处处都是画的地方，这里是他梦想中灵感的源泉。", title: "通往阿尔勒之路"},
      { mp3: "https://static.zhanapp.com.cn/SoundRecording/1-1.mp3", img: "https://static.zhanapp.com.cn/SoundRecording/1-1.jpg", text: "这里被金黄色的阳光填满。阿尔勒的太阳与法国的太阳从色彩上就相差甚多。黄色的阳光温暖的拥抱着阿尔勒的大自然，太阳高挂的时候，所有的风景都带着黄色的光，温暖的闪烁着。在阿尔勒阳光下，所有东西都是活生生有生气的。如此温暖的阳光，给予了一个因都市生活而心力交瘁的画家力量。每天早上在阿尔勒升起的太阳，是梵高创作的动力，太阳的颜色是梵高眼中阿尔勒的颜色。梵高为了将太阳给予自己的生命力创作成作品，寻遍阿尔勒的每个角落捕捉无处不在的阳光气息。为了表现出鲜明的黄色，梵高甚至特意订购了在当时非常珍贵的铬黄色的颜料。因此黄色成为了代表梵高的颜色，同时也让他得到了‘阳光画家’的称号。\n\n正面的作品为梵高的代表作《播种者》。成熟的麦田因午后的阳光透着金黄的色泽。此作品是受到米勒的影响创作的。梵高认为无边的大地是神圣的，种田的人们是美丽的。因农夫背后闪耀的阳光使播种的行为显得更加崇高。另外在左边，黄昏的葡萄园也因收获而繁忙。梵高没有错过洒落在地上与葡萄叶上强烈的日光，将光线表现的淋漓尽致。此作品也是他生前唯一卖出去的作品。看向右边，橄榄树上阳光强烈，有阳光滋润的橄榄叶也泛着美丽的光芒。看着像茁壮成长的橄榄树，让梵高感受到了在痛苦中也不放弃坚持生存的生命力。\n\n以阿尔勒的太阳为主题的作品，没有漏掉任何一缕阳光，表现的非常细致。阳光照耀下阿尔勒的大自然也充满生机。梵高应该也是全身沐浴着阳光，生机勃勃的创作画作的吧？", title: "阿尔勒的太阳"},
      { mp3: "https://static.zhanapp.com.cn/SoundRecording/2.mp3", img: "https://static.zhanapp.com.cn/SoundRecording/2.jpg", text: "站在花丛中。跟随您的身影移动的花朵，就像当时阿尔勒草地上绽放的花朵一样生动。气候比巴黎温暖的阿尔勒是充满花与植物的地方。没有人特意去栽种，但到处都是当季的花草植物。年幼时，梵高的家里有个小小的庭院。不知是不是看着母亲打理庭院的样子长大的关系，梵高一向都会说到关于公园与庭院的事情。也许是希望在荒芜的都市中小小绿色空间里梦想着自然，感受着故乡的温暖而得到治愈吧。他没有拥有过自己的庭院，只是将阿尔勒巨大的自然，当做是自己的庭院。从他刚刚到达阿尔勒时迎接春天的桃花到根据时节一直都在变化的花，他没有错过任何一个，都创作成了画作。通过他敏锐的眼睛观察到了植物细微的变化，作品中将细节体现的非常好。\n\n梵高最爱的就是向日葵。据说在他离开人世后，他的朋友们在他的棺上放的也是向日葵。他在阿尔勒见到的向日葵要比在巴黎见到的色泽鲜艳充满生气。就像太阳一样。为了在阿尔勒与他一起生活的高更，他决定创作12幅向日葵的画作。把画家们聚集一堂与他们一起生活、研究自然与色彩是梵高梦寐以求的事情，所以对于高更的拜访他抱着非常大的期待。画作虽然没有完成，但是他选出两幅还不错的画挂在了高更即将使用的房间里。据说此向日葵作品原来是更加鲜明的黄色，但因时间的推移只剩下了目前的色泽。\n\n另外，与梵高在艺术风格与性格上均大相径庭的高更，最终离开了阿尔勒。梵高因痛苦而日渐衰弱，不想给他人添麻烦的他自行到阿尔勒附近圣雷米的疗养院休养。住在那里时，他看着庭院里的植物作画。生机勃勃的蝴蝶花是不是寄托着梵高想要重新活下去的希望呢？之后弟弟提奥梵高的孩子出生，梵高将象征着春天生命力的白色杏仁花画成画送给弟弟作为礼物。对于梵高，花儿永远是充满期待与崭新的生命力的象征。展馆内就像是表现着梵高的心情一样，处处都是花朵。", title:"梵高的庭院"},
      { mp3: "https://static.zhanapp.com.cn/SoundRecording/3.mp3", img:"https://static.zhanapp.com.cn/SoundRecording/3-2.jpg", text: "太阳落山后夜晚降临，耀眼的阳光与盛开的向日葵都会消失。乡下的夜晚非常黑暗看不到任何东西，但是适应了黑暗以后就可以看到事物的轮廓了。此时仰望的天空是深蓝色。当时的画家们只有在白天才会在户外作画，但梵高却在夜晚也带着画架来到户外。是因为他知道，就算是在夜晚只要静静的观察就可以看到很多色彩。深蓝色的夜空、高挂的黄色星光、月光是梵高喜欢的黄色与蓝色的对比色。\n\n眼前是一片强烈激荡的夜景。《星月夜》那幅作品就是梵高在圣雷米疗养院时，看着窗外的夜景，同时加上自身的记忆与想象而创作出来的。垂直的柏木像极了象征着孤独与死亡的火花，云彩与气流，星光与月光爆发似的混合在一起，展现出充满激情的表情。这是不是在表现着直到人生的最后也被痛苦折磨的梵高的心境呢？\n\n激荡的夜景逐渐平复，江边依稀可以看到远处村庄的灯光。美丽的深蓝天空中，好似宝石一样的星光闪闪，星光再反射到罗纳河上。以阿尔勒的中心河流罗纳河为背景创作的作品就是《罗纳河的星夜》。夜空与水平面如同移花印花一样重叠，将细枝末节的笔触都表现的非常好的动画，像在看万花筒一样重复着。这就是梵高说过的，无限的空间。\n\n以丰富的色彩刻画着在夜景中的每颗星星，是梵高思念的方式。他在疗养院也没有停止创作，希望通过创作可以让自己的生活变得更好。但是非常遗憾，他的希冀并没有实现，在他创作了这幅画的第二年，以37岁的年纪结束了孤独的一生。使梵高不得不画的阿尔勒的美丽风景，是梵高一生中见过的独一无二的大自然，也是他一生中唯一度过的美好时光。也许现在他也变成了星星，在夜空中俯瞰着让他思念的阿尔勒的风景。", title: "星空闪耀的夜晚：我朝着星星走去" },
      { mp3: "https://static.zhanapp.com.cn/SoundRecording/4.mp3", img: "https://static.zhanapp.com.cn/SoundRecording/4.jpg", text: "经历了数十年政治暴动期后，终于迎来和平的19世纪巴黎对于艺术家来说是具有象征性的都市。街道变成了现代化的样子，随着经济、精神的富饶文化与艺术也突飞猛进。产业革命后业余时间增加的巴黎市民们，开始在家里读书、演奏乐器，周末在家里开舞会或者到郊外游船。19世纪末到20世纪初被誉为‘La Belle Epoque’。法语中是‘美好时代’的意思。雷诺阿将此时期巴黎市民们的日常，以优雅的光线与色彩创作成了作品。但是与之鲜亮的画作不同的是，雷诺阿的人生充满曲折。初期因印象主义不被人们所认同而生活撂倒，到了老年又要与病魔做斗争。不知是否是此原因，他还曾经说过‘因人生中有太多的不快，所以作品一定要华丽美好。’这样的话。每天都充满富饶与幸福的巴黎，雷诺阿希望可以将这美丽留在画中。\n\n映入眼帘的是正在进行着一场水边的庆典。就像其他的巴黎人一样，雷诺阿与朋友们到了周末也会到巴黎近郊槎头地区游船，在梅森富尔奈斯餐厅享受午餐。雷诺阿的代表作‘游艇上的午餐’中登场的人物，都是现实生活中雷诺阿的朋友。左边靠着栏杆的男子是餐厅老板的儿子小阿方斯·富尔奈斯，他前面抱着小狗的女士是后来与雷诺阿结婚的阿莉娜·莎丽戈，右边最前方坐着的男士是印象主义画家的后援者，同时自身也是知名画家的卡耶博特。右边最后方带着黄色配红丝绳帽子的男士是雷诺阿舞会3连作的模特，画家保罗·洛特。雷诺阿将画中的人物，以拍照似的速度捕捉住瞬间，没放过任何细节将每个人的个性表现的很好。\n\n画面切换成舞会。每到周日下午3点，位于巴黎蒙马特高地的露天酒吧加莱特，正沐浴着阳光举行着一场愉快的舞会。各式各样的人聚集在一起在欢快的音乐下跳舞，坐在树荫下欢笑的孩子们脸上映着透过树叶照射的阳光。雷诺阿觉得这是非常可爱的瞬间。他为了完成这幅巨作足足花了6个月的时间。这幅画中的人物，也是他的朋友。希望各位可以通过此画，感受到19世纪在巴黎举行的舞会，那瞬间的幸福与富饶。", title: "雷诺阿：都市的庆典" },
      { mp3: "https://static.zhanapp.com.cn/SoundRecording/5.mp3", img: "https://static.zhanapp.com.cn/SoundRecording/5.jpg", text: "卡耶博特也和雷诺阿一样是个热爱巴黎的画家。但他的灵感来源却与雷诺阿大相径庭。与集中在城市人富饶与幸福的雷诺阿不同，卡耶博特仔细的观察着逐渐形成产业化的城市风景。19世纪中期，巴黎的奥斯曼男爵，根据拿破仑三世的指示进行城市开发。蜿蜒的小路变成了棋盘式的街道与广场，中世纪的旧建筑被有着露台的时尚小楼代替。这个时期出现了，充斥着穿着优雅的绅士与淑女的埃菲尔铁塔与歌剧院，火车站与铁桥等现存的巴黎的标志性建筑，是整个城市变得更加现代、华丽。\n\n但是随着城市的扩建，城市内的人们越来越孤独，在看不见的地方也依然存在着辛苦劳作的人们。新城市在新奇新鲜的同时，孤寂、冰冷。卡耶博特觉得具有双面性特色的氛围是巴黎的特色。和人们的表情相比，对于城市的面貌更加注意的卡耶博特以独特且缜密的构图载入他的画幅。\n\n正面卡耶博特的代表作《巴黎的街道·雨天》，通过远近法与有节奏的构图表现着巴黎室内日常的场面。卡耶博特具有将雨、雪、冷天的空气准确描述的能力。此场面画的是城市开发时建成的‘奥斯曼大道’旁边的‘阿雷维街’。宽敞干净的街道、照亮夜晚的路灯、优雅时髦的绅士与淑女们等，将19世纪巴黎最真实的样子刻画出来。作品中登场的群众们并没有个性，他们与风景融合为一体，在这里可以看出卡耶博特的客观视线。右面三个人的样子非常有意思。情侣们打着伞前行，一对情侣走来，碰到对面情侣的伞，但是被碰到的情侣却好似没有看到来人。卡耶博特为了非常自然的刻画出人们相撞的瞬间，特意将前方人物删除了。这是一个像一张快照一样有意思的场面。\n\n卡耶博特为了更加逼真的表现巴黎街道，人物与街道都以细腻的3D手法描画。与徐徐进入画中的视线相融合的雨声，让你有一种漫步在画中的感觉。我们也像卡耶博特一样成为19世纪巴黎的漫步者，在宽敞的新道路上缓缓的走着，看着慢慢变化着的城市，也许你会再次遇见那灵感的瞬间。", title: "卡耶博特：孤独的漫步者" },
      { mp3: "https://static.zhanapp.com.cn/SoundRecording/6.mp3", img: "https://static.zhanapp.com.cn/SoundRecording/6.jpg", text: "脚趾踏在闪闪发光的金黄色水波上，这里是克里姆特制作出的幻想的空间。 就像许多画家通过自己的画幅偷偷告白一样，克里姆特也在自己的画作中承载了爱意。相传克里姆特爱过多名女人，但他却以单身的身份与‘爱美丽·佛洛格’一生为伴。爱美丽相传是克里姆特的真爱也是唯一的精神寄托。爱美丽与克里姆特生平交换了400多封明信片与信件，关系非常亲密。同时爱美丽也给了他许多灵感。光是克里姆特在死前叫了她名字的事实就可以让人们明白爱美丽在他心中的分量。以金黄色装饰的作品也是因爱美丽的提点而产生的作品。相传作品《吻》就是，克里姆特沉浸在悲伤中时，看到爱美丽在画布上堆积金色碎片得到的灵感。\n\n在这幅作品中，克里姆特将让刹那间就会结束的吻的瞬间停止，以画的形式保存为永恒。慢慢的将身体倾向女士的男士与掩藏着脸、闭着眼拥抱男士的女士，她脸上的潮红蕴含着激动瞬间的感觉，给人一种窒息的紧张感。就像一般的恋人们会觉得对方是世界的中心，好似只有两人一样，被爱情光环围绕的两人，在寂静的金色背景中闪闪发光。\n\n充满激荡爱意瞬间的《吻》慢慢的转换为《斯托克蕾特横饰带》来的爱情故事。克里姆特通过《吻》让爱的瞬间永存，《斯托克蕾特横饰带》却将生活中的爱情纪录在壁画中。根埋地中枝叶伸入空中的‘生命之树’意味着诞生与死亡，还有在那期间发生的无数的人生旅程。以大树为中心，左侧被枝叶围绕的一个女性，等待着爱情孤独的跳着舞。就像古代埃及壁画中的人物一样将身体的朝着正面、脸侧向一边，视线停留在对面情侣的身上。大树右面的情侣似乎非常思念对方，紧紧地拥着对方。两人的样子，并不像恋人一样激动、拥吻，而是像夫妻一样互相信任、成熟的样子。作品《吻》以情侣身着的衣服花纹，单色与四角形多彩的圆形区分了的男女主角。然而这幅作品中却没有花纹的区分，协调的融合在一起。这应该就代表经过了等待的过程后遇见的恋人，完美的相容、成熟的生活中的爱情。", title: "吻，两人的宇宙" },
      { mp3: "https://static.zhanapp.com.cn/SoundRecording/7.mp3", img: "https://static.zhanapp.com.cn/SoundRecording/7.jpg", text: "亨利·马蒂斯与毕加索一同被誉为20世纪最伟大的画家。他是现代美术家们最尊敬的画家，同时也是最受喜爱的画家。他的作品在他逝世60年后的今天，也每年都在世界各地进行展览。但与此同时，刚接触马蒂斯作品的人，会因他粗糙、单纯的样子，觉得是孩子的涂鸦。马蒂斯对于我们来说，究竟是怎样的画家呢？\n\n 马蒂斯与其他画家有所不同，他在20岁以后才步入了美术的世界。他生长在法国北部的小村庄，帮忙照看父亲的种子店过着平凡的生活。在现实生活中度日的马蒂斯，某天突然因肚子剧烈疼痛而住院。他的母亲为了缓解他在医院无聊的生活，给他买了颜料盒。就这样，他的人生遇到了最大的转折点。他在拿到颜料盒的瞬间，他感觉到了命运的召唤。他，就像猛兽扑向猎物一样，沉浸于色彩展现的世界中，不受任何人的限制,自由的去铸造自己的世界。出院后，他马上开始学习画画，之后的一生都与画为伴。这是发生在他20岁的事情。\n\n马蒂斯虽然起步比较晚，但却比任何人都热情的去作画。就像他的母亲在给他颜料箱的时候说的话一样，不局限在作画的规则中，注重表现自己的感情，展开了属于自己的艺术世界。幼时梦见、想象的模糊的形态与色彩，通过画作越来越清晰的展现，马蒂斯也在这个过程中感受到了幸福。\n\n在颜料盒带给他的激动与幸福中过着生活的某一天，又一次的瓶颈降临。70多岁的马蒂斯因为癌症而接受了手术。在极低的成功率中，马蒂斯活了下来。但身体却虚弱到无法站着画画。认为艺术既是人生的马蒂斯，在人生的尽头给他打开艺术之门的缪斯 ‘颜料盒’再次给了他灵感。那就是‘剪纸’，几乎所有的生活都在床上解决的马蒂斯，用裁缝剪刀将彩纸剪成各种形状后做成作品。‘剪纸’成为他的新缪斯，给了他前进的力量。那么，现在就让我们进入他的世界吧？", title: "亨利的剪刀" },
      { mp3: "https://static.zhanapp.com.cn/SoundRecording/8.mp3", img: "https://static.zhanapp.com.cn/SoundRecording/8.jpg", text: "马蒂斯的故乡因有很多织布厂，所以工厂的烟雾一直混合在空气中。天空低沉的时候，整个村庄都是灰色的。在这样阴沉的环境中长大的马蒂斯，总是被华丽的颜色与明亮的光所吸引。特别是幼年时马蒂斯制作的玩具，剧场的硫磺火山所喷出的蓝光与他收集的正义闪蝶的蓝色以穿透他心脏一样的强烈感深深的吸引着他。就这样按照自己的理解感受着色彩的马蒂斯，努力将色彩融入到自己的画作中。所以他在画画的时候，与其说是为了描画对象而涂颜色，不如说是为了将对象给予他的感觉生动的表现出来而使用色彩。他在画作中使用了他人无法想象的颜色，还被誉为‘色彩魔术师’。\n\n各位现在所看到的作品是马蒂斯主要使用红颜色连作的作品。马蒂斯使用红色的频率和蓝色一样频繁，很多作品中都能找到红色的身影。因为强烈的红色在第一眼就可以吸引人的眼球。但是他画作中的红色，却跳出了单纯强烈的状态，具有安慰人的特别力量。抽象画表现大师喜欢将颜色整面图画的罗斯科，曾在纽约现代美术馆看着马蒂斯的《红色房间》落泪是非常有名的美谈。被马蒂斯画作感动的罗斯科，在自己的画作中也加入那份感觉，使看了他画作的人连续了他得到的感动。\n\n马蒂斯通过色彩表现感觉的同时，对于空间也进行了测试。普通的厨房因墙纸与桌布的红色而有平面感的《红色房间》和地面与天棚均为红色的《红色画室》等像是在表现三次元的空间，但以同一个颜色覆盖的室内，看着缺像二次元的世界。所以画上的物品给人感觉像是画在底色上的装饰品。\窗外绿色的草地给了整体都是红色的房间透气的空间。但是事实上绿色草地后方的蓝色天空有着隐藏的秘密。原来马蒂斯是要用蓝色作画的。作品已经以《蓝色房间》的名字卖了出去但是不满意的马蒂斯将整个房间涂成了红色。一直以为是《蓝色房间》的收藏家在拿到作品后才知道底色变成红色的事情。\你能找到画中悠闲散步的猫吗？在没有主人的房间里它在做些什么呢？马蒂斯非常喜欢猫，是画家中出了名的猫管家。因健康问题不得不将大部分的时间都在床上孤单度过时，能够成为慰藉的只有陪伴在他身边的猫们了。马蒂斯的白色娇小的美诺炫、条文且高大的库西、黑猫浦彩是在病痛中马蒂斯的灵魂慰藉，是非常令他感谢的存在。", title: "红房" },
      { mp3: "https://static.zhanapp.com.cn/SoundRecording/9.mp3", img: "https://static.zhanapp.com.cn/SoundRecording/9.jpg", text: "患有癌症的马蒂斯病痛常常折磨着他，让他觉得死了反而舒服些。痛苦令他越来越疲惫，已经放弃了希望的他只是淡漠的等待着手术。放下所有以等死的心情躺在手术台上的马蒂斯奇迹般的活了下来。虽然手术很成功，但是马蒂斯依然未能从死亡的影子中摆脱出来。他想着无法预测的未来，拜托他的医生，为了可以圆满的结束自己的艺术人生，一定要让他多活3年。是他的祈祷奏效了吗？在医院痛苦度日的马蒂斯明显的恢复，甚至被被护士们称为‘复活的人’、‘死而复生的人’的他，终于回到了画室。 但在鬼门关转了一圈的马蒂斯已经不能像从前一样生活。不要说是站在画板前作画，连走路都非常吃力的他，所有的生活都只能依靠在床榻与轮椅上。换做是别人这种状况肯定都已经放弃了，但是马蒂斯却没有丢掉希望。反正将这些瞬间当做是礼物，当做是重生的第二次生命。\n\n想画画的他，将木炭加在竹子边缘，躺在床上在天棚上继续他的素描。但将他引导至艺术世界的却是裁缝用剪刀。对于在制作布料的村庄长大的马蒂斯来说，剪刀是再熟悉不过的东西。他就像收到颜料盒的瞬间一样拿起了剪刀代替画笔用剪刀‘剪彩纸’，虽然是几年前就偶尔会使用的方式，但现在剪纸却成为了他正式的作画方式。虽然身体不灵活，但是他使用剪刀作出来的华丽的纸片确让马蒂斯得到了自由。马蒂斯说在接受手术之前的他一直生活在自己的框架里，努力符合它。甚至自述说“一直就以勒紧腰带的感觉”生活着。但是‘剪纸’却为他的身体与精神带来了自由。就像在纸上飞舞的剪刀一样，无论什么因素都无法让他停止。\n\n(关于爵士)\n\n<爵士>是利用剪纸工艺制作完成的，以20个原色插画与马蒂斯直接用手书写的短句构成的书。马蒂斯曾经接到出版画社杂志封面委托，当时以‘剪纸’的方式完成了封面，出版社看到后建议用‘剪纸’出书，所以有了这本书。 《爵士》是宣告马蒂斯正式‘剪纸’的起点。他将死而复生后感受到的安心与幸福的感觉都体现在剪纸上，为此他回归童心。他将充满华丽颜色的流浪马戏团，将他带进想象世界的漫谈与神奇的事物，一一表现在剪纸作品里。特别是流浪马戏团的记忆是马蒂斯的记忆中唯一完美有趣的记忆，所以将马戏团的记忆用作主要素材，题目也定为《马戏团》。马戏团的形形色色与感觉在《爵士》中也重现。因颜色过于华丽与生动，他为了保护眼睛甚至带着有色眼镜进行创作。\n\n马蒂斯将彩纸剪好，将纸片进行比对慢慢的组成作品，此时看到剪出的形态与背景与其他彩纸相融合的样子使他联想到了爵士。就像现在的背景音乐一样，爵士是即兴的变化、节奏给音乐带来活力，让音乐自行赋予生命力。马蒂斯将‘剪纸’带来的生动感反应在书中，后将书名变更为《爵士》。\n\n马蒂斯在书印刷出来后，他看到生动的《爵士》被束缚在书的形态中大为失望，将‘剪纸’扩张到画室的整面墙上。扩张到整面墙上的‘剪纸’，在他的画室可以看到。\n\n在今天，《爵士》的‘剪纸’也在生动的跳动着。在马蒂斯沉睡之后的空房间里玩耍的小猫还有《爵士》的‘剪纸’等，你们看到了吗？", title: "亨利的寝室" },
      { mp3: "https://static.zhanapp.com.cn/SoundRecording/10.mp3", img: "https://static.zhanapp.com.cn/SoundRecording/10.jpg", text: "马蒂斯在创作《爵士》的时候，领悟到‘剪纸’的真面目是纸片们在构成形态的同时固定在墙面上时体现出来的。因为‘剪纸’是，它在墙面的状态与位置，还有与其他作品的关系中以新的方式重新诞生的艺术。马蒂斯将‘纸片’在画室的整面墙上试着用大头针固定、变换位置，给‘剪纸’赋予了生命。画室成为了马蒂斯作品本身，充满作品的画室成为了作品的过程与成品的重要角色。他的身体虽然束缚于床上，但是他的想象力在画室的墙面上填满，自由的生动的跳动。\n\n在亨利的画室中用数码方式再现，从初期的《爵士》到马蒂斯贴在墙上的各式‘剪纸’，可以生动的体验马蒂斯感受过的‘剪纸’的感觉。这些‘剪纸’以4个阶段变化。\n\n第一阶段是《爵士》。马蒂斯像小孩子一样，通过剪彩纸将幼时的记忆体现在《爵士》中。带给他幻想的流浪马戏团的样子到塔希提岛摇动的叶子们。让我们在快乐的节奏与《爵士》中，进入马蒂斯的记忆中去吧 。\n\n第二阶段是马蒂斯以热爱的‘蓝色’印刷物为素材的‘剪纸’。对于马蒂斯来说蓝色是硫磺火山炽热的火花与极力摆动翅膀的正义闪蝶的颜色。用如此充满生命力的颜色，马蒂斯剪成人形、赋予他们生命。特别是带状的长墙壁之间，人们游来游去的《游泳池》，是因身体不好而无法游泳的马蒂斯在画室中建造的属于自己的游泳池。让我们跟随摇动白纸的人们的动作，去看看究竟吧。\n\n第三阶段是马蒂斯回想在塔希提岛旅行时的样子创作的波利尼西亚系列。让我们在天空与海洋相连的此处，去看看鱼儿与小鸟，珊瑚与树叶等生物吧。\n\n第四阶段是画室中多样的‘剪纸’。马蒂斯将许多‘剪纸’固定在墙上，将画室做成了一幅作品。平时就喜欢在庭院中看植物的马蒂斯，用‘剪纸’做成各式各样的植物，做成属于自己的庭院。 壁炉上，与天棚相连的所有墙面都成为了‘剪纸’的巨大画板。", title: "亨利的画室" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!options.scene)options.scene = 0;
    App.aldstat.sendEvent('访问了导览页面' + options.scene); 
    this.setData({
      scene: options.scene,
      content: this.data.list[options.scene]
    })
    var that = this;
    const audio = wx.getBackgroundAudioManager();
    audio.title = this.data.content.title
    audio.epname = '知亦行'
    audio.src = this.data.content.mp3;
    audio.autoplay = true;
    audio.onPlay(() => {
      that.setData({
        play: true,
        audio:audio
      })
    })
    
    var t_last = 0;
    audio.onTimeUpdate((res)=>{
      var _right = "" + (parseInt(audio.duration) / 60);
      _right = _right.length <= 1 ? _right + ".0" : _right;
      _right = _right.split(/\./);

      var e_left = _right[0].length <= 1 ? "0" + _right[0] : _right[0]
      var e_right = _right[1].length <= 1 ? "0" + _right[1] : _right[1].substr(0,2)

      var _Left = parseInt(audio.currentTime);
      if ( _Left - t_last * 60 >= 60) {
        t_last++
      }
      
      var t_left = t_last.toString().length <= 1 ? "0" + t_last : t_last
      var t_right = (_Left - t_last * 60).toString().length <= 1 ? "0" + (_Left - t_last * 60) : (_Left - t_last * 60)
    

      that.setData({
        audiodate: t_left + ":" + t_right,
        audioend: e_left + ":" + e_right,
        Percentage: (100 / audio.duration * audio.currentTime).toFixed(3)
      })
    })
      
    
  },
  click(){
    if(this.data.play === true){
      this.data.audio.pause()
      this.setData({
        play:false
      })
    }else{
      this.data.audio.play()
      this.setData({
        play: true
      })
    }
  },
  clickl(){
    var scene = this.data.scene > 0? { scene: --this.data.scene } : { scene: this.data.scene }
    console.log(scene);
    this.onLoad(scene)
  },
  clickr() {
    var scene = this.data.scene < this.data.list.length - 1 ? { scene: ++this.data.scene } : { scene: this.data.scene }
    console.log(scene);
    this.onLoad(scene)
  }
})