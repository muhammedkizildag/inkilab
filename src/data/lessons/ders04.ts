import { LessonData } from '../../types/study';

export const ders04: LessonData = {
  id: 4,
  slug: 'tanzimat-ve-mesrutiyet',
  title: 'Tanzimat Dönemi, I. Meşrutiyet ve Düşünce Akımları',
  shortTitle: 'Tanzimat ve I. Meşrutiyet',
  subtitle:
    '1839 Tanzimat ve 1856 Islahat Fermanları, dış borçlanma, Yeni Osmanlılar, 1876 Kanun-i Esasi, Duyun-u Umumiye ve 5 düşünce akımı.',
  sourceFile: 'ATA121_04_DERS_Tanzimat_ve_Mesrutiyet.pdf',
  totalSlides: 38,
  overview:
    'Bu derste 1839 Gülhane Hatt-ı Hümayunu ile başlayan hukuksal ve kurumsal modernleşme, Kırım Savaşı sonrası Islahat Fermanı ve dış borçlanma süreci, Yeni Osmanlılar ve 1876 Kanun-i Esasi ile anayasal düzene geçiş, 93 Harbi sonrası Duyun-u Umumiye ve imparatorluğu kurtarmaya yönelik beş temel düşünce akımı incelenir.',
  sections: [
    {
      id: 'd4-s1',
      title: 'Tanzimat (1839) ve Islahat (1856) Fermanları',
      slides: [1, 2, 3, 4, 5, 6, 7],
      summary:
        '1839–1876 Tanzimat Döneminin başlangıç belgeleri olan Gülhane Hatt-ı Hümayunu ile Islahat Fermanı’nın kapsamı, amaçları ve aralarındaki temel farklar.',
      bullets: [
        {
          highlight: 'Tanzimat Dönemi (1839–1876)',
          text: '1839’da okunan Gülhane Hatt-ı Hümayunu (Tanzimat Fermanı) ile başlayıp 1876’da I. Meşrutiyet’in ilanıyla sona eren dönemdir. III. Selim’den beri süren yenilikler bu fermanla hukuki bir nitelik kazanmış, bütün tebaaya "vatandaş" statüsü tanınarak herkes can, mal ve namus bakımından devlet koruması altına alınmıştır.',
          slides: [1, 2],
        },
        {
          highlight: 'Tanzimat Fermanı’nın Temel İlkeleri',
          text: 'Geri kalmışlığı aşmak, Avrupa’ya ayak uydurmak ve gayrimüslim isyanlarını önlemek amacıyla adalet ve eşitlik ilan edildi:',
          slides: [3, 4, 5],
          subBullets: [
            'Can ve mal güvenliği sağlanacak, açık yargılama olmadan idam cezası verilmeyecek, askerlik süresi sınırlandırılacak.',
            'Danışma, tartışma ve oybirliği mekanizmasıyla keyfilik sona erecek; vergiler herkesin kudretine göre belirlenip keyfi toplama kalkacak.',
            'Müslümanlar kadar gayrimüslimlerin de yararlanmasıyla gayrimüslimlere yasalar önünde ilk kez eşitlik getirildi; davaları için ayrı mahkemeler ve yeni usul kanunları öngörüldü; gayrimüslimlere askerlik yükümlülüğü yanında bedelli askerlik hakkı tanındı.',
          ],
        },
        {
          highlight: 'Tarihsel Anlamı',
          text: 'Fransız Devrimi’nin İnsan Hakları Prensipleri elli yıl sonra Osmanlı’ya padişah tarafından halka verilen haklar biçiminde geldi. Hükümdarın mutlak yetkisi sınırlandırıldı ve devlet yönetiminde Batı’da yetişen devlet adamları yer almaya başladı.',
          slides: [5],
        },
        {
          highlight: 'Islahat Fermanı (1856)',
          text: '1853’te başlayan Kırım Savaşı sürecinde İngiltere’nin isteğiyle Hristiyan tebaa lehine hazırlandı. Tanzimat Fermanı’nda yer almayan Müslüman ve Hristiyan tebaa arasındaki din, vergi, askerlik, devlet memuru olma ve eğitim alanındaki farkları ortadan kaldırdı.',
          slides: [6],
        },
        {
          highlight: 'Tanzimat ve Islahat Fermanı Farkı',
          text: 'Tanzimat Fermanı herhangi bir dış devlet baskısı olmaksızın Osmanlı’nın kendi inisiyatifiyle devlet yapısını yeniden düzenlemek için yaptığı bir reformdur; Islahat Fermanı ise yalnızca Hristiyan tebaaya yönelikti. Tanzimat dönemi meşrutiyet sistemini amaçlayan yeni bir neslin yetişmesini hazırlamıştır.',
          slides: [7],
        },
      ],
    },
    {
      id: 'd4-s2',
      title: 'Tanzimat Dönemi İdari, Askeri, Hukuk ve Eğitim Yenilikleri',
      slides: [8, 9, 10],
      summary:
        '1840 Ceza Kanunnamesi’nden belediye seçimlerine, askeri okullardan Darülfünun, Darülmuallimin, Darülmuallimat, Galatasaray ve Darüşşafaka’ya kurumsal atılımlar.',
      bullets: [
        {
          highlight: 'Hukuk, Vergi ve Belediye Düzenlemeleri',
          text: '1840’ta bütün Osmanlı uyruklarının yasa önünde eşit olduğunu hükme bağlayan Ceza Kanunnamesi çıktı. İltizam usulü kaldırılarak mahalli meclisler kuruldu. 1855’te İstanbul Şehremaneti, 1857’de Beyoğlu Belediye Dairesi açıldı; 1868 Dersaadet Belediye İdaresi Nizamnamesi ile Belediye Meclislerinin seçimle oluşturulması kararı alındı.',
          slides: [8],
        },
        {
          highlight: 'Askeri Alandaki Düzenlemeler',
          text: '1841’de ordunun adı Asakir-i Nizamiye-i Şahane olarak değiştirildi ve askerlik süresi 5 yıl ile sınırlandırıldı. 1834’te kurulan Harbiye Mektebi 1845’te Harbiye ve İdadi diye ikiye ayrıldı (ilk mezunlar 1848). 1849’da Askeri Baytar Mektebi, 1875’te ilk askeri rüştiyeler açıldı.',
          slides: [9, 10],
        },
        {
          highlight: 'Eğitim Kurumları ve Öğretmen Okulları',
          text: '1845’te Meclis-i Maarif-i Muvakkat ve 1846’da Darülfünun (üniversite) ile okulların düzenlenmesi için Meclis-i Maarif-i Umumiye kuruldu:',
          slides: [9, 10],
          subBullets: [
            'Rüştiye (ortaokul) sayısı 1847’de 3’e, 1849’da 7’ye, 1856’da 60’a, 1867’de 108’e ulaştı; 1858’de İstanbul’da ilk kız rüştiyesi açıldı (1874’te 9 adet).',
            '1848’de Darülmuallimin (erkek öğretmen okulu), 1870’te Darülmuallimat (kız öğretmen okulu) kuruldu.',
            '1859’da idareci yetiştirmek üzere Mülkiye Mektebi, 1868’de Galatasaray Sultanisi, 1872’de Darüşşafaka Lisesi açıldı (1874’te İstanbul’da 4 idadi vardı); 1870’te ilk Darülfünun açıldı.',
          ],
        },
      ],
    },
    {
      id: 'd4-s3',
      title: 'Dış Borçlanma ve Yeni Osmanlılar Hareketi',
      slides: [11, 12, 13, 14, 15],
      summary:
        '1854’te Kırım Savaşı ile başlayan dış borç sarmalının mali iflasa sürüklenmesi ve meşrutiyeti savunan 1865 Yeni Osmanlılar Cemiyeti.',
      bullets: [
        {
          highlight: 'İlk Dış Borç ve Mali İflas (1854–1875)',
          text: 'Kırım Savaşı maliyeyi harap edince ilk dış borç 1854’te alındı. Borçların bir kısmı deniz kuvvetleri gibi faydalı alanlarda kullanılsa da büyük bölümü devlet giderlerine ve saray yapımı/harcamalarına gitti. 1875’e kadar toplam 15 kez borç alınarak 220 milyon sterline ulaşıldı ve devlet mali iflasını ilan etti.',
          slides: [11, 12],
        },
        {
          highlight: 'Toprak Kayıpları',
          text: 'Boğazlarda Rus tehlikesini Osmanlı’nın durduramayacağını düşünen İngiltere 1878’de Kıbrıs’ı ele geçirdi ve 1882’de Mısır’a yerleşti; Fransa ise 1881’de Tunus’u aldı.',
          slides: [12],
        },
        {
          highlight: 'Yeni Osmanlılar Cemiyeti (1865)',
          text: 'Kötü idare, bozuk maliye ve azınlık isyanlarından kurtuluşu meşrutiyet ve mebuslar meclisi yoluyla "Osmanlı Milleti" bilinci oluşturmakta gören Yeni Osmanlılar Cemiyeti 1865’te kuruldu. Ali Suavi, Namık Kemal ve Ziya Paşa gibi üyeler Sadrazam Ali Paşa Hükümetini devirip Sultan Abdülaziz’e meşrutiyeti ilan ettirmeyi planladı; plan öğrenilince 1867’de İstanbul’dan uzaklaştırıldılar.',
          slides: [13, 14],
        },
        {
          highlight: 'Paris’teki 8 Kurucu ve Gazeteler',
          text: 'Paris’te cemiyeti sürdüren 8 arkadaş (Namık Kemal, Ziya Paşa, Ali Suavi, Nuri Bey, Mehmet Bey, Rıfat Bey, Agah Efendi ve Fazıl Paşa) fikirlerini yaymak için gazete çıkardılar; aralarındaki anlaşmazlıklar sonucu Hürriyet, Ulum ve İttihat gibi gazeteler yayımlandı.',
          slides: [14],
        },
        {
          highlight: 'Namık Kemal ve Vatan Yahut Silistre (1873)',
          text: '1870’te İstanbul’a dönen Namık Kemal 1873’te "Vatan Yahut Silistre" oyununu sahneledi. "Vatan şairliği" yaparak halkta Osmanlı milliyetçiliği ve Müslim–gayrimüslim eşitliği temelinde meşruti yaşam bilinci oluşturmaya çalıştı.',
          slides: [15],
        },
      ],
    },
    {
      id: 'd4-s4',
      title: 'I. Meşrutiyet, Kanun-i Esasi (1876) ve 93 Harbi',
      slides: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      summary:
        'Osmanlı’nın ilk anayasası Kanun-i Esasi’nin ilanı, Mithat Paşa’nın sürgünü, ilk Meclis-i Mebusan ve 1877–1878 Osmanlı–Rus Savaşı (93 Harbi).',
      bullets: [
        {
          highlight: 'Taht Değişimi ve Anayasalı Dönem',
          text: '1875’te Sultan Abdülaziz’in hallinden sonra 1876’da V. Murat tahta çıktı; Şûra-yı Devlet Reisi Mithat Paşa rahatsızlanan V. Murat’ı tahttan indirip meşrutiyeti ilan etme sözü veren II. Abdülhamit’i tahta geçirdi.',
          slides: [16],
        },
        {
          highlight: 'İlk Meclis-i Mebusan ve Kanun-i Esasi (23 Aralık 1876)',
          text: 'Sadrazam Mithat Paşa başkanlığındaki 28 üyeli komisyon Fransa ve Belçika anayasalarından esinlenerek ilk Anayasa olan Kanun-i Esasi’yi hazırladı ve 23 Aralık 1876’da ilan edildi. Parlamento halkın seçtiği Meclis-i Mebusan ve padişahın seçtiği Meclis-i Âyân’dan oluşuyordu. İlk Meclis-i Mebusan 69 Müslüman + 46 gayrimüslim = 115 üyeden oluştu (Türk, Arap, Kürt, Laz, Ulah, Arnavut, Boşnak, Rum, Ermeni, Bulgar, Yahudi).',
          slides: [17, 18],
        },
        {
          highlight: 'Padişah Yetkileri ve Tersane Konferansı',
          text: 'Kanun-i Esasi’ye rağmen meclisi açma-kapama, tatil etme, yasaları onaylama ve hükümeti atama/azletme yetkileri padişahtaydı. Bu sırada büyük devletlerin Balkanlar için topladığı Tersane Konferansı Bosna-Hersek ve Bulgaristan’a özerklik isteyince Osmanlı Rusya ile savaşı göze alıp planı reddetti.',
          slides: [18, 19],
        },
        {
          highlight: '113. Madde ve Mithat Paşa’nın Akıbeti',
          text: 'Konferans sonrası II. Abdülhamit, Kanun-i Esasi’nin padişaha "polis tahkikatından sonra istediği şahsiyetleri sürgün etme" hakkı veren 113. maddesine dayanarak Mithat Paşa’yı sürdü. 1 yıl sonra affedilip İzmir Valisi iken 1880’de Abdülaziz’i öldürmekle suçlanıp idama mahkum edildi; cezası Taif’e sürgüne çevrildi ve Taif hapishanesinde boğularak öldürüldü.',
          slides: [20, 21],
        },
        {
          highlight: 'Kanun-i Esasi’nin Hukuksal Kazanımları',
          text: 'II. Abdülhamit Anayasa’ya sadakat yemini etmese de Kanun-i Esasi; "Anayasa’nın üstünlüğü ve değişmezliği" ilkelerini getirmesi, padişahın Meclis-i Mebusan’ın benimsemediği konuyu yasalaştıramaması, kısmen bağımsız mahkemeler ve 8–10. maddelerle herkesin din-mezhep ayrımı olmaksızın Osmanlı sayılarak yasa önünde eşitlik, dokunulmazlık ve mal-mülk güvencesine kavuşması bakımından mutlak monarşiden kesin çıkışın başlangıcıdır.',
          slides: [21, 22, 23],
        },
        {
          highlight: 'Meclisin Kapatılması, 93 Harbi ve Berlin Antlaşması (1878)',
          text: 'İlk Meclis 20 Mart 1877’de toplandı. 24 Nisan 1877’de Rusya savaş ilan edince (93 Harbi), II. Abdülhamit savaşı gerekçe göstererek 14 Şubat 1878’de Meclis’i tatil etti ve bir daha çağırmadı. Rus zaferi sonrası 1878 Ayastefanos (Yeşilköy) Antlaşması ile Balkanlar, Kars, Ardahan, Batum ve Doğubayazıt Rus hakimiyetine girdi; Avrupa devletlerinin dengelemesiyle aynı yıl Berlin Antlaşması imzalandı.',
          slides: [24, 25],
        },
      ],
    },
    {
      id: 'd4-s5',
      title: 'II. Abdülhamit Mutlakiyeti, Duyun-u Umumiye ve İstibdat',
      slides: [26, 27, 28, 29, 30],
      summary:
        '1878–1908 arası eğitim-ulaşım yatırımları, 1881 Muharrem Kararnamesi ile Duyun-u Umumiye İdaresi’nin kuruluşu ve 1889 İttihat-ı Osmani.',
      bullets: [
        {
          highlight: 'Mutlakiyet Yönetimi (1878–1908) ve Yatırımlar',
          text: 'Meclis tatil edilip Anayasa rafa kaldırılsa da II. Abdülhamit döneminde özellikle Müslüman halkın eğitimi için ilk/orta/lise ve öğretmen okulları artırıldı; Darülfünun’a bağlı Edebiyat, Hukuk ve Tıp Fakülteleri açıldı; ulaşım, haberleşme ve özellikle demiryolculuk hız kazandı.',
          slides: [26],
        },
        {
          highlight: 'Muharrem Kararnamesi ve Duyun-u Umumiye İdaresi',
          text: '93 Harbi tazminatı maliyeyi faizleri bile ödeyemez hale getirince alacaklılarla yapılan Muharrem Kararnamesi sonucunda, borçların yarı yarıya indirilmesi koşuluyla Duyun-u Umumiye İdaresi kuruldu (binası bugünkü İstanbul Erkek Lisesi binasıdır). Osmanlı gelirlerinin yabancılarca toplanıp Avrupa’ya aktarılması usulü getirildi.',
          slides: [27, 28],
        },
        {
          highlight: 'Mali Tutsaklık ve Borçların Sonu (1954)',
          text: 'Duyun-u Umumiye yabancı sermayeye tam garanti sağlayarak maden ve hammaddelerin sömürülmesine zemin hazırladı; devletin vergi koyma, kaldırma ve oran değiştirme haklarını elinden aldı. 1912’de Maliye Bakanlığı’nda 5.500 memur varken Duyun-u Umumiye’de maaşını devletin ödediği 9.000 memur vardı; 1914’te toplam dış borç 280 milyon sterline çıktı. Kurtuluş Savaşı’nda Ankara Hükümeti gelirlere el koydu, Lozan’da işleyişine son verildi ve Türkiye kendi borç payını ilk borçtan tam 100 yıl sonra 1954’te bitirdi.',
          slides: [28, 29],
        },
        {
          highlight: 'İstibdat ve İttihat-ı Osmani (1889)',
          text: 'Geniş ve düzenli hafiye teşkilatıyla siyasi olayları önlemeye dayalı baskıcı yönetim nedeniyle bu döneme "istibdat" dendi. İstibdata karşı 1889’da gizlice kurulan İttihat-ı Osmani Cemiyeti, sonraki döneme damga vuracak İttihat ve Terakki Cemiyeti’ne öncülük etti.',
          slides: [30],
        },
      ],
    },
    {
      id: 'd4-s6',
      title: 'Meşrutiyet Dönemi Beş Düşünce Akımı',
      slides: [31, 32, 33, 34, 35, 36, 37, 38],
      summary:
        'Osmanlı Devleti’ni çöküşten kurtarmak amacıyla ortaya çıkan Osmanlıcılık, İslamcılık, Türkçülük, Batıcılık ve Teşebbüs-ü Şahsi ve Ademi Merkeziyetçilik akımları.',
      bullets: [
        {
          highlight: '1. Osmanlıcılık',
          text: 'Devlet-i Aliye-i Osmaniye / Memâlik-i Mahrusa-i Osmani topraklarında yaşayan herkesi ırk, din, dil, renk ayrımı olmadan eşit "Osmanlı vatandaşı" sayıp "Osmanlı ulusu" oluşturmayı hedefledi. Tanzimat aydınları ve Genç Türkler meşrutiyet ve mecliste azınlık temsili yoluyla devleti kurtarmak istedi; ancak gayrimüslimlerin ayrılıkçı faaliyetleri nedeniyle başarıya ulaşamadı.',
          slides: [31, 32, 33],
        },
        {
          highlight: '2. İslamcılık',
          text: 'Hristiyan ulusların ayrılması üzerine Pangermenizm ve Panslavizmden esinlenen II. Abdülhamit, hilafet sıfatını kullanarak Müslüman unsurları bir arada tutmak için İslamcılığı iç ve dış politikada sistemleştirdi. İslamcılar gerilemenin nedeninin din değil İslam’ın yanlış anlaşılması olduğunu ve İslam’ın yeniliklere açık bulunduğunu savundu.',
          slides: [33, 34],
        },
        {
          highlight: '3. Türkçülük',
          text: 'Osmanlıcılığın birlik sağlayamaması üzerine güçlendi; 19. yy Avrupalı Türkologların Türklerin İslamiyet öncesi Orta Asya tarihini ortaya koyan çalışmalarından beslendi. Devletin kurtuluşunu Türk unsurunun milletleşip milli varlığını idrak etmesinde ve sonraki süreçte dış Türklerle birliği büyütmesinde aradı. İttihat ve Terakki iktidarının düşünsel temeli oldu; en önemli temsilcisi Ziya Gökalp’tir.',
          slides: [35, 36],
        },
        {
          highlight: '4. Batıcılık',
          text: 'Askeri, idari ve eğitimde başlayıp Tanzimat Fermanı ile siyasi-hukuki şekil aldı (mimarı Reşit Paşa). Batı’nın bilim, teknoloji ve idari organizasyon tekniğini aynen almaktan başka çare olmadığını savundu. Başlıca aydınları Abdullah Cevdet ve Celal Nuri’dir.',
          slides: [37],
        },
        {
          highlight: '5. Teşebbüs-ü Şahsi ve Ademi Merkeziyetçilik',
          text: 'Temsilcisi Prens Sabahattin’e göre iktisadi kalkınma için bireylere haklar verilmeli, sanayide sınırlamalar kaldırılmalı ve devlet içinde eğitim, kültür, sanayi alanlarında özerklik tanıyan federal bir yapıya geçilmelidir; liberal niteliğiyle öne çıkar.',
          slides: [38],
        },
      ],
      tables: [
        {
          caption: 'Meşrutiyet Dönemi Düşünce Akımları Özeti (Slayt 31–38)',
          headers: ['Düşünce Akımı', 'Temel Yaklaşım', 'Önde Gelen İsimler / Uygulayıcılar'],
          rows: [
            ['Osmanlıcılık', 'Din/ırk/dil farkı olmadan eşit Osmanlı vatandaşı ve Meclis güvencesi', 'Tanzimat aydınları, Genç Osmanlılar'],
            ['İslamcılık', 'Hilafet etrafında İslam birliği; İslam’ın yeniliklere açık olduğu görüşü', 'II. Abdülhamit, İslamcı düşünürler'],
            ['Türkçülük', 'Türk milletleşmesi ve Orta Asya kökenli milli bilinç', 'Ziya Gökalp, İttihat ve Terakki'],
            ['Batıcılık', 'Batı’nın bilim, teknoloji ve idari düzenini doğrudan alma', 'Reşit Paşa, Abdullah Cevdet, Celal Nuri'],
            ['Ademi Merkeziyetçilik', 'Bireysel girişim, ekonomik serbesti ve federal/özerk yönetim', 'Prens Sabahattin'],
          ],
        },
      ],
    },
  ],
  flashcards: [
    {
      id: 'd4-c1',
      category: 'Tarih / Olay',
      front: 'Tanzimat Dönemi hangi iki olay arasındaki yılları kapsar?',
      back: '1839’da Gülhane Hatt-ı Hümayunu’nun okunmasıyla başlayıp 1876’da I. Meşrutiyet’in ilanıyla sona erer (1839–1876).',
      slide: 2,
    },
    {
      id: 'd4-c2',
      category: 'Karşılaştırma / Özellik',
      front: '1839 Tanzimat Fermanı ile 1856 Islahat Fermanı arasındaki temel fark nedir?',
      back: 'Tanzimat Fermanı dış baskı olmadan Osmanlı’nın kendi inisiyatifiyle devletin yapısını düzenlemek için yaptığı reformdur; Islahat Fermanı ise Kırım Savaşı sürecinde İngiltere’nin isteğiyle yalnız Hristiyan tebaaya yönelik hazırlanmıştır.',
      slide: 7,
    },
    {
      id: 'd4-c3',
      category: 'Antlaşma / Kurum',
      front: 'Tanzimat döneminde belediye alanında hangi adımlar atıldı (1855, 1857, 1868)?',
      back: '1855 İstanbul Şehremaneti, 1857 Beyoğlu Belediye Dairesi kuruldu; 1868 Dersaadet Belediye İdaresi Nizamnamesi ile Belediye Meclislerinin seçimle oluşturulması kararı alındı.',
      slide: 8,
    },
    {
      id: 'd4-c4',
      category: 'Antlaşma / Kurum',
      front: '1841’de ordunun adı ne oldu ve askerlik süresi kaç yıla indirildi?',
      back: 'Ordunun adı Asakir-i Nizamiye-i Şahane olarak değiştirildi ve askerlik süresi 5 yıl ile sınırlandırıldı.',
      slide: 9,
    },
    {
      id: 'd4-c5',
      category: 'Antlaşma / Kurum',
      front: 'Darülmuallimin, Mülkiye, Galatasaray Sultanisi, Darülfünun, Darülmuallimat ve Darüşşafaka hangi yıllarda açıldı?',
      back: 'Darülmuallimin: 1848 · Mülkiye: 1859 · Galatasaray Sultanisi: 1868 · Darülfünun ve Darülmuallimat: 1870 · Darüşşafaka: 1872.',
      slide: 10,
    },
    {
      id: 'd4-c6',
      category: 'Tarih / Olay',
      front: 'Osmanlı ilk dış borcu ne zaman ve hangi savaş nedeniyle aldı; 1875’e kadar toplam kaç borç alındı?',
      back: 'Kırım Savaşı nedeniyle ilk borç 1854’te alındı. 1875’e kadar 15 kez borç alınarak 220 milyon sterline ulaşıldı ve Osmanlı mali iflasını ilan etti.',
      slide: 11,
    },
    {
      id: 'd4-c7',
      category: 'Tarih / Olay',
      front: '1878 Kıbrıs, 1881 Tunus ve 1882 Mısır hangi devletler tarafından ele geçirildi?',
      back: 'İngiltere 1878’de Kıbrıs’ı ele geçirdi ve 1882’de Mısır’a yerleşti; Fransa 1881’de Tunus’u aldı.',
      slide: 12,
    },
    {
      id: 'd4-c8',
      category: 'Kişi / Eser',
      front: '1865’te kurulan Yeni Osmanlılar Cemiyeti’nin Paris’teki 8 kurucusu ve çıkardıkları gazeteler nelerdir?',
      back: 'Namık Kemal, Ziya Paşa, Ali Suavi, Nuri Bey, Mehmet Bey, Rıfat Bey, Agah Efendi ve Fazıl Paşa. Çıkarılan gazeteler: Hürriyet, Ulum, İttihat.',
      slide: 14,
    },
    {
      id: 'd4-c9',
      category: 'Kişi / Eser',
      front: 'Namık Kemal 1873 yılında İstanbul’da hangi tiyatro oyununu sahnelemiştir?',
      back: 'Vatan Yahut Silistre.',
      slide: 15,
    },
    {
      id: 'd4-c10',
      category: 'Antlaşma / Kurum',
      front: 'Kanun-i Esasi ne zaman, kimin başkanlığındaki komisyonca ve hangi ülke anayasalarından esinlenerek hazırlandı?',
      back: '23 Aralık 1876’da Mithat Paşa başkanlığında 28 üyeli komisyon tarafından Fransa ve Belçika anayasalarından esinlenerek hazırlandı.',
      slide: 18,
    },
    {
      id: 'd4-c11',
      category: 'Antlaşma / Kurum',
      front: 'İlk Meclis-i Mebusan kaç üyeden oluşuyordu ve bu üyelerin dağılımı nasıldı?',
      back: '69 Müslüman + 46 gayrimüslim olmak üzere toplam 115 üyeden (11 etnik/dini gruptan) oluşuyordu; Meclis-i Âyân üyelerini padişah, Mebusan’ı ise ikinci seçmenler belirledi.',
      slide: 17,
    },
    {
      id: 'd4-c12',
      category: 'Kavram',
      front: 'Kanun-i Esasi’nin 113. maddesi padişaha hangi yetkiyi veriyordu ve ilk kime uygulandı?',
      back: 'Gerekli polis tahkikatından sonra padişaha istediği şahsiyetleri sürgün etme hakkı veriyordu; Mithat Paşa’nın sürgün edilmesinde kullanıldı (sonra 1880’de Taif’e sürülüp boğduruldu).',
      slide: 21,
    },
    {
      id: 'd4-c13',
      category: 'Tarih / Olay',
      front: 'İlk Osmanlı Meclisi ne zaman toplandı ve hangi gerekçeyle, ne zaman kapatıldı?',
      back: '20 Mart 1877’de toplandı; 24 Nisan 1877’de başlayan Osmanlı–Rus Savaşı (93 Harbi) gerekçe gösterilerek 14 Şubat 1878’de II. Abdülhamit tarafından tatil edildi.',
      slide: 24,
    },
    {
      id: 'd4-c14',
      category: 'Antlaşma / Kurum',
      front: '93 Harbi sonunda imzalanan 1878 Ayastefanos (Yeşilköy) ve Berlin Antlaşmalarının farkı nedir?',
      back: 'Ayastefanos’la Balkanlar, Kars, Ardahan, Batum ve Doğubayazıt Rus hakimiyetine geçti; Avrupa devletleri bu Rus üstünlüğünü dengelemek için aynı yıl Berlin Antlaşması’nı imzaladı.',
      slide: 25,
    },
    {
      id: 'd4-c15',
      category: 'Antlaşma / Kurum',
      front: 'Duyun-u Umumiye İdaresi hangi kararnameyle kuruldu, binası neredeydi ve borçlar ne zaman bitti?',
      back: 'Muharrem Kararnamesi ile (borçların yarı yarıya indirilmesi şartıyla) kuruldu; binası bugünkü İstanbul Erkek Lisesi’ydi. 1914’te borç 280 milyon sterline çıktı; Türkiye kendi payını 1954’te tamamladı.',
      slide: 27,
    },
    {
      id: 'd4-c16',
      category: 'Tarih / Olay',
      front: 'İstibdat yönetimine karşı 1889’da gizlice kurulan ve İttihat ve Terakki’ye öncülük eden örgüt hangisidir?',
      back: 'İttihat-ı Osmani Cemiyeti.',
      slide: 30,
    },
    {
      id: 'd4-c17',
      category: 'Kişi / Eser',
      front: 'Türkçülük, Batıcılık ve Ademi Merkeziyetçilik akımlarının ders notlarında anılan başlıca temsilcileri kimlerdir?',
      back: 'Türkçülük: Ziya Gökalp · Batıcılık: Reşit Paşa, Abdullah Cevdet, Celal Nuri · Teşebbüs-ü Şahsi ve Ademi Merkeziyetçilik: Prens Sabahattin.',
      slide: 36,
    },
  ],
  questions: [
    {
      id: 'd4-q1',
      question: '1839 Gülhane Hatt-ı Hümayunu (Tanzimat Fermanı) ile ilgili aşağıdaki yargılardan hangisi yanlıştır?',
      options: [
        'Bütün tebaaya "vatandaş" statüsü tanınarak herkes can, mal ve namus konusunda devlet güvencesine alınmıştır.',
        'Açık yargılama yapılmadan idam cezası uygulanamayacağı ilan edilmiştir.',
        'Vergilerin herkesin kudretine göre belirleneceği duyurulmuştur.',
        'Gayrimüslimlere yasalar önünde ilk kez eşitlik getirilmiştir.',
        'İngiltere’nin doğrudan baskısıyla ve yalnızca Hristiyan tebaa lehine ilan edilmiştir.',
      ],
      correctIndex: 4,
      explanation:
        'Slayt 7’ye göre dış baskı olmaksızın yapılan Tanzimat Fermanı devletin kendi inisiyatifidir; yalnızca Hristiyan tebaaya yönelik ve İngiltere’nin isteğiyle hazırlanan belge 1856 Islahat Fermanı’dır.',
      slide: 7,
    },
    {
      id: 'd4-q2',
      question: 'Fransız Devrimi’nin İnsan Hakları Prensipleri elli yıl sonra Osmanlı İmparatorluğu’na hangi belgeyle ve nasıl ulaşmıştır?',
      options: [
        '1808 Sened-i İttifak — Ayanların zoruyla',
        '1839 Tanzimat Fermanı — Padişah tarafından halka verilen haklar biçiminde',
        '1856 Islahat Fermanı — Mebusan Meclisi kararıyla',
        '1876 Kanun-i Esasi — Halk ayaklanması sonucu',
        '1909 Anayasa değişikliği — Hareket Ordusu bildirisiyle',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 5’e göre Fransız Devrimi’nin İnsan Hakları Prensipleri elli yıl sonra 1839 Tanzimat Fermanı ile Osmanlı’ya padişah tarafından halka verilen haklar biçiminde gelmiştir.',
      slide: 5,
    },
    {
      id: 'd4-q3',
      question: '1856 Islahat Fermanı’nın ilan edilmesine yol açan savaş ve bu fermanı Osmanlı devlet adamlarından isteyen ülke aşağıdakilerden hangisidir?',
      options: [
        '93 Harbi – Rusya',
        'Kırım Savaşı – İngiltere',
        'Mora İsyanı – Fransa',
        'Balkan Savaşı – Avusturya',
        'Navarin Baskını – Almanya',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 6’ya göre 1853’te patlak veren Kırım Savaşı sürecinde İngiltere, Osmanlı devlet adamlarından Hristiyan tebaa lehine bir ıslahat programı (Islahat Fermanı) ilanını istemiştir.',
      slide: 6,
    },
    {
      id: 'd4-q4',
      question: 'Tanzimat döneminde belediye yönetimlerinin seçimle oluşturulması kararı hangi yıl çıkarılan "Dersaadet Belediye İdaresi Nizamnamesi" ile alınmıştır?',
      options: ['1840', '1855', '1857', '1868', '1874'],
      correctIndex: 3,
      explanation:
        'Slayt 8’e göre 1855’te İstanbul Şehremaneti, 1857’de Beyoğlu Belediye Dairesi kurulmuş; 1868’de Dersaadet Belediye İdaresi Nizamnamesi ile Belediye Meclislerinin seçimle oluşturulması kararı alınmıştır.',
      slide: 8,
    },
    {
      id: 'd4-q5',
      question: 'Tanzimat döneminde açılan eğitim kurumları ve kuruluş yılları eşleştirmelerinden hangisi yanlıştır?',
      options: [
        '1848 — Darülmuallimin (Erkek öğretmen okulu)',
        '1858 — İstanbul’da ilk kız rüştiyesi',
        '1859 — Mülkiye Mektebi',
        '1868 — Galatasaray Sultanisi',
        '1846 — Darüşşafaka Lisesi',
      ],
      correctIndex: 4,
      explanation:
        'Slayt 10’a göre Darüşşafaka Lisesi 1872 yılında açılmıştır (1846’da Meclis-i Maarif-i Umumiye kurulmuştur).',
      slide: 10,
    },
    {
      id: 'd4-q6',
      question: '1870 yılında hem ilk kez açılan yükseköğretim kurumu hem de kız okullarına öğretmen yetiştirmek amacıyla kurulan okul çifti hangisidir?',
      options: [
        'Mülkiye Mektebi ve Galatasaray Sultanisi',
        'İlk Darülfünun ve Darülmuallimat',
        'Harbiye ve Askeri Baytar Mektebi',
        'Darülmuallimin ve Darüşşafaka',
        'Askeri Rüştiye ve İdadi',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 10’a göre ilk Darülfünun 1870’te açılmış, aynı yıl kız okullarına öğretmen yetiştirmek üzere Darülmuallimat kurulmuştur.',
      slide: 10,
    },
    {
      id: 'd4-q7',
      question: 'Osmanlı Devleti’nin ilk dış borçlanmayı yaptığı yıl (1854) ile 1875’te mali iflasını ilan ettiği ana kadar aldığı toplam borç sayısı ve tutarı hangi seçenekte doğru verilmiştir?',
      options: [
        '10 kez — 100 milyon sterlin',
        '15 kez — 220 milyon sterlin',
        '20 kez — 280 milyon sterlin',
        '5 kez — 50 milyon sterlin',
        '12 kez — 150 milyon sterlin',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 11–12’ye göre ilk borç 1854’te alınmış, 1875’e kadar toplam 15 kez borç alınarak 220 milyon sterline ulaşılmış ve devlet mali iflasını ilan etmiştir.',
      slide: 12,
    },
    {
      id: 'd4-q8',
      question: '1865’te kurulan Yeni Osmanlılar Cemiyeti üyelerinin Sadrazam Ali Paşa Hükümetini devirme planı öğrenilince 1867’de İstanbul’dan uzaklaştırılanlar arasında aşağıdaki isimlerden hangisi yer almaz?',
      options: [
        'Namık Kemal',
        'Ziya Paşa',
        'Ali Suavi',
        'Agah Efendi',
        'Enver Paşa',
      ],
      correctIndex: 4,
      explanation:
        'Slayt 14’e göre Paris’te cemiyeti kuran 8 arkadaş Namık Kemal, Ziya Paşa, Ali Suavi, Nuri Bey, Mehmet Bey, Rıfat Bey, Agah Efendi ve Fazıl Paşa’dır. Enver Paşa II. Meşrutiyet döneminin ismidir.',
      slide: 14,
    },
    {
      id: 'd4-q9',
      question: 'Namık Kemal’in 1870’te İstanbul’a döndükten sonra 1873 yılında sahnelediği ve Osmanlı milliyetçiliği düşüncesini yansıttığı eseri hangisidir?',
      options: [
        'Hürriyet Kasidesi',
        'Vatan Yahut Silistre',
        'İntibah',
        'Cezmi',
        'Takvim-i Vekayi',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 15’e göre Namık Kemal 1870’te İstanbul’a dönmüş ve 1873’te "Vatan Yahut Silistre" oyununu sahnelemiştir.',
      slide: 15,
    },
    {
      id: 'd4-q10',
      question: '23 Aralık 1876’da ilan edilen Kanun-i Esasi’yi hazırlayan 28 üyeli komisyona kim başkanlık etmiştir ve hangi ülke anayasalarından esinlenilmiştir?',
      options: [
        'Namık Kemal — İngiltere ve ABD',
        'Mithat Paşa — Fransa ve Belçika',
        'Ali Paşa — Almanya ve Avusturya',
        'Reşit Paşa — İsviçre ve İtalya',
        'Ahmet Rıza Bey — Fransa ve Rusya',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 18’e göre Mithat Paşa başkanlığında 28 üyeden oluşan komisyon, Fransa ve Belçika anayasalarından esinlenerek Kanun-i Esasi’yi hazırlamıştır.',
      slide: 18,
    },
    {
      id: 'd4-q11',
      question: '1876 Kanun-i Esasi’ye göre kurulan ilk Meclis-i Mebusan’ın üye sayısı ve Müslüman–gayrimüslim dağılımı nasıldı?',
      options: [
        '100 üye (50 Müslüman, 50 gayrimüslim)',
        '115 üye (69 Müslüman, 46 gayrimüslim)',
        '157 üye (100 Müslüman, 57 gayrimüslim)',
        '280 üye (200 Müslüman, 80 gayrimüslim)',
        '90 üye (60 Müslüman, 30 gayrimüslim)',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 17’ye göre ilk Meclis-i Mebusan 69’u Müslüman, 46’sı gayrimüslim olmak üzere 115 üyeden oluşmaktaydı.',
      slide: 17,
    },
    {
      id: 'd4-q12',
      question: 'II. Abdülhamit’in Mithat Paşa’yı sürgüne gönderirken dayandığı Kanun-i Esasi maddesi hangisidir?',
      options: [
        '1. madde',
        '8. madde',
        '10. madde',
        '61. madde',
        '113. madde',
      ],
      correctIndex: 4,
      explanation:
        'Slayt 21’e göre Mithat Paşa, padişaha polis tahkikatından sonra istediği şahsiyetleri sürgün etme hakkı veren 113. maddeye dayanılarak sürgün edilmiştir.',
      slide: 21,
    },
    {
      id: 'd4-q13',
      question: 'Kanun-i Esasi’nin bir Anayasa metni olarak kabulünü sağlayan esas hüküm ders notlarında nasıl açıklanmıştır?',
      options: [
        'Padişaha meclisi süresiz kapatma hakkı tanıması',
        '"Anayasa’nın üstünlüğü ve değişmezliği" ilkelerini barındırmış olması',
        'Yabancı konsolosluk mahkemelerini genişletmesi',
        'Sadrazamın ömür boyu görevde kalmasını öngörmesi',
        'Ayanların vergi toplama yetkisini babadan oğula geçirmesi',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 23’e göre Kanun-i Esasi’nin Anayasa metni olarak kabulünü sağlayan esas hüküm "Anayasa’nın üstünlüğü ve değişmezliği" ilkelerini barındırmasıdır.',
      slide: 23,
    },
    {
      id: 'd4-q14',
      question: 'II. Abdülhamit hangi savaşı gerekçe göstererek 14 Şubat 1878’de ilk Osmanlı Meclisini tatil etmiştir?',
      options: [
        '1853–1856 Kırım Savaşı',
        '1877–1878 Osmanlı–Rus Savaşı (93 Harbi)',
        '1897 Türk–Yunan Savaşı',
        '1911 Trablusgarp Savaşı',
        '1912 I. Balkan Savaşı',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 24’e göre II. Abdülhamit, 24 Nisan 1877’de başlayan 93 Harbi’ni gerekçe göstererek 14 Şubat 1878’de Meclis’i tatil etmiştir.',
      slide: 24,
    },
    {
      id: 'd4-q15',
      question: '1878 yılında Osmanlı–Rus Savaşı sonunda imzalanan Ayastefanos (Yeşilköy) Antlaşması’ndaki Rus üstünlüğünü Avrupa devletleri lehine dengelemek amacıyla aynı yıl hangi antlaşma imzalanmıştır?',
      options: [
        'Londra Antlaşması',
        'Berlin Antlaşması',
        'Edirne Antlaşması',
        'Paris Antlaşması',
        'Bükreş Antlaşması',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 25’e göre Ayastefanos sonrasında İngiltere, Fransa, İtalya, Avusturya-Macaristan, Rusya ve Osmanlı arasında aynı yıl Berlin Antlaşması imzalanmıştır.',
      slide: 25,
    },
    {
      id: 'd4-q16',
      question: 'Osmanlı gelirlerinin yabancılar tarafından toplanarak Avrupa’ya aktarılmasını sağlayan Duyun-u Umumiye İdaresi hangi anlaşmayla kurulmuştur?',
      options: [
        'Baltalimanı Antlaşması',
        'Muharrem Kararnamesi',
        'Sened-i İttifak',
        'Tersane Sözleşmesi',
        'Hünkâr İskelesi Antlaşması',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 27’ye göre İstanbul’da alacaklılarla yapılan görüşmeler sonunda imzalanan "Muharrem Kararnamesi" ile Duyun-u Umumiye İdaresi kurulmuştur.',
      slide: 27,
    },
    {
      id: 'd4-q17',
      question: 'Duyun-u Umumiye İdaresi ve Osmanlı dış borçları ile ilgili olarak ders notlarında geçen bilgilerden hangisi yanlıştır?',
      options: [
        'İdare binası bugünkü İstanbul Erkek Lisesi binasıydı.',
        '1912’de Maliye Bakanlığı’nda 5.500 memur varken Duyun-u Umumiye’de 9.000 memur çalışıyordu.',
        '1914 yılında Osmanlı’nın toplam dış borcu 280 milyon sterlini bulmuştur.',
        'Lozan Antlaşması ile borçların tamamı silinmiş, Türkiye hiçbir ödeme yapmamıştır.',
        'Türkiye Osmanlı borçlarının geri ödenmesini 1954 yılında tamamlamıştır.',
      ],
      correctIndex: 3,
      explanation:
        'Slayt 29’a göre Lozan’da borçlar imparatorluğu oluşturan ülkelere paylaştırılmış, en büyük pay Türkiye’ye düşmüş ve geri ödeme 1954’te tamamlanmıştır.',
      slide: 29,
    },
    {
      id: 'd4-q18',
      question: 'II. Abdülhamit’in baskıcı yönetiminden dolayı "istibdat" olarak adlandırılan döneminde bu yönetime karşı 1889’da gizlice kurulan cemiyet hangisidir?',
      options: [
        'Yeni Osmanlılar Cemiyeti',
        'İttihat-ı Osmani Cemiyeti',
        'Vatan ve Hürriyet Cemiyeti',
        'İttihad-ı Muhammedi Fırkası',
        'Müdafaa-i Hukuk Cemiyeti',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 30’a göre istibdat idaresine karşı İttihat-ı Osmani Cemiyeti gizli bir teşkilat olarak 1889’da kurulmuş ve İttihat ve Terakki Cemiyeti’ne öncülük etmiştir.',
      slide: 30,
    },
    {
      id: 'd4-q19',
      question: 'Meşrutiyet dönemi düşünce akımlarından "Türkçülük" akımının oluşmasında aşağıdakilerden hangisi etkili olmuştur?',
      options: [
        '19. yüzyılda Avrupalı Türkologların Türklerin İslamiyet öncesi Orta Asya tarihini ortaya koyması ve azınlık ayrılıkçı isyanlarının Osmanlıcılığı zayıflatması',
        'İngiltere’nin Mısır’ı Osmanlı’ya iade etmesi',
        'Avusturya’nın Panslavizm politikasını benimsemesi',
        'II. Abdülhamit’in halifelik unvanını bırakması',
        'Prens Sabahattin’in federal yapı önerisi',
      ],
      correctIndex: 0,
      explanation:
        'Slayt 35–36’ya göre ayrılıkçı isyanlar ve Avrupalı Türkologların Orta Asya çalışmalarını gençlerin öğrenmesi Türkçülük akımını güçlendirmiştir; en önemli ismi Ziya Gökalp’tir.',
      slide: 35,
    },
    {
      id: 'd4-q20',
      question: 'Batıcılık ve Teşebbüs-ü Şahsi ve Ademi Merkeziyetçilik akımlarının ders notlarında vurgulanan temsilcileri hangi seçenekte doğru verilmiştir?',
      options: [
        'Ziya Gökalp — Mithat Paşa',
        'Abdullah Cevdet ve Celal Nuri — Prens Sabahattin',
        'Namık Kemal ve Ziya Paşa — Ali Suavi',
        'Reşit Paşa — Yusuf Hikmet Bayur',
        'Recep Peker — Agah Efendi',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 37–38’e göre Batıcılığı savunan başlıca aydınlar Abdullah Cevdet ve Celal Nuri (mimarı Reşit Paşa); Teşebbüs-ü Şahsi ve Ademi Merkeziyetçiliğin temsilcisi ise Prens Sabahattin’dir.',
      slide: 37,
    },
  ],
};
