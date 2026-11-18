import { LessonData } from '../../types/study';

export const ders01: LessonData = {
  id: 1,
  slug: 'turk-devrimi',
  title: 'Türk Devrimi ve Kavramsal Çerçeve',
  shortTitle: 'Türk Devrimi',
  subtitle:
    'İnkılâp Tarihi dersinin doğuşu, devrim–ihtilal–ıslahat–evrim–darbe–isyan ayrımı, Atatürk’ün stratejisi ve Türk Devriminin özellikleri.',
  sourceFile: 'ATA121_01_DERS_Turk_Devrimi.pdf',
  totalSlides: 49,
  overview:
    'Bu derste ATA 121 Atatürk İlkeleri ve İnkılâp Tarihi dersinin amacı ile 1934’ten günümüze kurumsal gelişimi, Doğu Sorunu’ndan Cumhuriyet’in kuruluşuna giden tarihsel arka plan, inkılâp ve onunla karıştırılan temel siyasal kavramlar, zulme karşı direnme hakkının felsefi ve hukuksal temelleri, Atatürk’ün devrim anlayışı ile nesnel/öznel koşullara dayalı stratejisi, 14 eseri ve Türk Devriminin diğer dünya devrimlerinden farkları ile mazlum milletlere etkisi ayrıntılı biçimde ele alınır.',
  sections: [
    {
      id: 'd1-s1',
      title: 'Dersin Amacı, Kapsamı ve Tarihsel Arka Plan',
      slides: [1, 2, 3, 4, 5, 6, 7, 8],
      summary:
        'ATA 121 dersinin inceleme alanı, Atatürk’ün Türk İnkılâbındaki üç aşamalı stratejisi, 1815’ten I. Dünya Savaşı’na Doğu Sorunu ve 1912–1922 on yıllık savaş bilançosu.',
      bullets: [
        {
          highlight: 'Dersin Künyesi ve Başlığı',
          text: 'Atatürk İlkeleri ve İnkılâp Tarihi (ATA 121) 1. Dersinin ana konusu "Türk Devrimi"dir.',
          slides: [1],
        },
        {
          highlight: 'Atatürk’ün Devrim ve Karşı-Devrim Uyarısı',
          text: 'Gazi Mustafa Kemal Atatürk, yapılan inkılâbın büyüklüğünü ve korunması gereğini çarpıcı bir sözle vurgulamıştır:',
          slides: [2],
          subBullets: [
            'Yapılan iş, memleketi bir çağdan alıp başka bir çağa götürmek ve çok eski müesseseleri yıkmaktır.',
            'Yıkılan eski müesseselerin binlerce taraftarı vardır ve bunların fırsat bekledikleri kesinlikle unutulmamalıdır.',
          ],
        },
        {
          highlight: 'Tarih Bilimi ve ATA 121 Dersinin Amacı',
          text: 'Tarih, insan toplumlarının zaman içinde geçirdikleri değişimleri ve olayları nedensel ilişkiler kurarak inceleyen bilim dalıdır.',
          slides: [3],
          subBullets: [
            'Atatürk İlkeleri ve İnkılâp Tarihi dersi, 20. yüzyılda Türk ulusunun sosyal, siyasal, ekonomik ve kültürel olarak geçirdiği değişimleri ele alır.',
            'Bu tarihsel dönüşümlerin günümüze olan etkisi üzerinde durur.',
          ],
        },
        {
          highlight: 'Türk İnkılâp Tarihi ve Yeni Rejimin Çatısı',
          text: 'Türk İnkılâp Tarihi, inkılâpla yeni ve modern bir devlet kuran milletimizin yakın tarihidir ve iki temel ekseni birlikte kapsar:',
          slides: [4],
          subBullets: [
            'Bir yandan ulusal egemenlik ve bağımsızlık mücadelesini içerir.',
            'Diğer yandan devlet ve toplum hayatında yapılan kökten değişikliklere yer verir.',
            'Kurulan yeni devletin siyasi rejimi; 20. yüzyılın ilk çeyreğinde yaşanan zorlu yıllar ile Türk tarih ve toplum gerçeklerinin gereği olarak, Türk İnkılâbının amacına ve temel ilkelerine uygun biçimde Atatürkçülük / Kemalizm (Atatürkçü Düşünce Sistemi) çatısı altında devlet hayatına yön verir.',
          ],
        },
        {
          highlight: 'Atatürk’ün Türk İnkılâbını Gerçekleştirdiği 3 Aşama',
          text: 'Mustafa Kemal Atatürk, Türk İnkılâbını birbirini tamamlayan üç tarihsel aşamada gerçekleştirmiştir:',
          slides: [5],
          subBullets: [
            '1. Aşama (1919–1922): Türk Kurtuluş Savaşı sonucunda tam bağımsızlık kazanılmış ve Misak-ı Millî sınırları içinde yeni bir Türk Devleti kurma yolunda önemli bir adım atılmıştır.',
            '2. Aşama: Anadolu’yu işgalden kurtaran TBMM karşısında işlevi ve gücü kalmayan Osmanlı saltanatı kaldırılarak monarşiye son verilmiş; Lozan Barış Antlaşması ile Türk devletinin siyasi ve iktisadi bağımsızlığı emperyalist devletlerce resmen tanınmış; Cumhuriyet’in ilanıyla demokratik bir devlet kurulmuştur.',
            '3. (Son) Aşama: Yeni kurulan devletin devamlılığını sağlayacak köklü inkılap hareketlerine girişilmiştir.',
          ],
        },
        {
          highlight: 'Doğu Sorunu (Şark Meselesi)',
          text: 'I. Dünya Savaşı sonunda yıkılan Osmanlı Devleti İtilaf Devletleri tarafından parçalanırken, Türklerin bağımsız devlet olma hakkı ortadan kaldırılıp tarih sahnesinden silinmek istendi.',
          slides: [6],
          subBullets: [
            'Kökeni: "Doğu Sorunu" kavramı 1815 Viyana Kongresi sırasında Rus Çarı Aleksandr tarafından ortaya atılmıştır.',
            '19. yüzyıl başındaki anlamı: "Avrupa’nın hasta adamı"nın (Osmanlı’nın) Avrupa’daki topraklarının paylaşılmasıdır.',
            '19. yüzyıl sonundaki anlamı: Osmanlı’nın bütün topraklarının paylaşılması ve Türklerin Orta Asya’ya gönderilmeleridir.',
            'Uygulanması: I. Dünya Savaşı içinde yapılan gizli anlaşmalarla uygulamaya konulmuştur.',
          ],
        },
        {
          highlight: '1917 Sonrası Manda Paylaşımı ve Milli Mücadele Örneği',
          text: 'Rusya 1917 yılında çıkan ihtilal dolayısıyla savaştan çekilince "Şark Sorunu", İngiltere ve Fransa tarafından kendi çıkarlarına göre çözülmek istendi.',
          slides: [7],
          subBullets: [
            'Arapların yaşadığı yerler manda sistemi ile paylaşılırken, Türk’ün anayurdu Anadolu da yağmalanıyordu.',
            'Türk ulusu Atatürk’ün önderliğinde Milli Mücadele ile emperyalizmi yenmeyi başardı ve sömürge durumunda bulunan tüm mazlum milletlere örnek oldu.',
            'Savaşın kazanılmasından sonra Türkiye, ortaçağın kalıntısı olan siyasal–sosyal–ekonomik düzenini değiştirerek çağdaş bir Cumhuriyet kurdu.',
          ],
        },
        {
          highlight: '1912–1922 On Yıllık Savaş Bilançosu ve İdeolojik Aktarım',
          text: '1912’den 1922’ye kadar on yıl kesintisiz savaşan Türk ulusu büyük bir demografik ve entelektüel kayıp yaşamıştır:',
          slides: [8],
          subBullets: [
            'Özellikle I. Dünya Savaşı ve Milli Mücadele’de 3 milyon insan kaybedilmiş, ulusun eğitilmiş insan kadrolarının büyük bir kısmı yok olmuştur.',
            'Genç Cumhuriyet, Osmanlı İmparatorluğu’nun enkazı içinden büyük olanaksızlıklarla yepyeni bir inançla kurulmuştur.',
            'Atatürk tarafından tarihi süreç içinde aşama aşama gerçekleştirilen ilkeler üzerinde kurulan Cumhuriyet’in hangi koşullarda ve aşamalardan geçerek kurulduğunun anlatılması ve ideoloji olarak ele alınıp yeni kuşaklara öğretilmesi gerekliydi.',
          ],
        },
      ],
      tables: [
        {
          caption: 'Atatürk’ün Türk İnkılâbındaki Üç Aşaması (Slayt 5)',
          headers: ['Aşama', 'Dönem / Temel Olaylar', 'Tarihsel Sonuç'],
          rows: [
            [
              '1. Aşama',
              'Türk Kurtuluş Savaşı (1919–1922)',
              'Tam bağımsızlık kazanıldı; Misak-ı Millî sınırları içinde yeni Türk Devleti’nin temeli atıldı.',
            ],
            [
              '2. Aşama',
              'Saltanatın kaldırılması, Lozan Barış Antlaşması, Cumhuriyet’in ilanı',
              'Monarşi sona erdi; siyasi ve iktisadi bağımsızlık resmen tanındı; demokratik devlet kuruldu.',
            ],
            [
              '3. Aşama',
              'Devleti yaşatacak inkılap hareketleri',
              'Yeni kurulan devletin devamlılığını ve çağdaşlaşmasını güvence altına aldı.',
            ],
          ],
        },
      ],
      callouts: [
        {
          type: 'quote',
          title: 'Gazi Mustafa Kemal ATATÜRK (Slayt 2)',
          content:
            '“Biz büyük bir inkılâp yaptık memleketi bir çağdan alıp başka bir çağa götürdük. Çok eski müesseseleri yıktık, bunların binlerce taraftarı vardır, fırsat beklediklerini unutmamak lazım.”',
          slides: [2],
        },
      ],
    },
    {
      id: 'd1-s2',
      title: 'İnkılâp Tarihi Dersinin Kurumsallaşması ve Evrimi',
      slides: [9, 10, 11],
      summary:
        '1934 Üniversite Reformu ile başlayan İnkılâp Tarihi derslerinin hocaları, 1942’de kurulan Enstitü, basın-radyo yoluyla yaygınlaşması ve adının geçirdiği değişimler.',
      bullets: [
        {
          highlight: '1934’te Verilen İlk İnkılâp Tarihi Dersleri',
          text: 'Cumhuriyet’in kuruluş ilkelerini öğretmek amacıyla 1934 yılında yükseköğretimde ilk İnkılâp Tarihi dersleri başlatılmıştır:',
          slides: [9],
          subBullets: [
            '4 Mart 1934: Üniversite reformu ile açılan İstanbul Üniversitesi’nde ilk İnkılâp Tarihi dersini Milli Eğitim Bakanı Yusuf Hikmet Bayur vermiştir.',
            '20 Mart 1934: Ankara Hukuk Mektebi’nde ilk dersi Başbakan İsmet İnönü vermiştir.',
          ],
        },
        {
          highlight: 'İlk Dersin Dört Ana Bölümü ve Öğretim Kadrosu',
          text: 'Dört ana bölüme ayrılan Türk İnkılâp Tarihi dersinin her bir alanı dönemin önde gelen devlet ve bilim insanlarınca okutulmuştur:',
          slides: [9],
          subBullets: [
            'Siyasi tarih: Yusuf Hikmet Bayur',
            'Hukuk konuları: Mahmut Esat Bozkurt',
            'Ekonomi konuları: Yusuf Kemal Tengirşek',
            'Askeri konular: Dönemin Cumhuriyet Halk Fırkası Genel Sekreteri Recep Peker',
          ],
        },
        {
          highlight: 'Türk İnkılâp Tarihi Enstitüsü (1942) ve Yaygınlaştırma',
          text: 'Dersin kurumsallaşması ve toplum geneline yayılması için hem akademik yapılanmaya hem kitle iletişimine başvurulmuştur:',
          slides: [9, 10],
          subBullets: [
            '1942 yılında Dil ve Tarih-Coğrafya Fakültesi’ne (DTCF) bağlı olarak Türk İnkılâp Tarihi Enstitüsü kurulmuştur.',
            'Derslerin aynı zamanda radyoda ve gazetelerde yayınlanmasıyla çok daha geniş kitlelere ulaşması sağlanmıştır.',
          ],
        },
        {
          highlight: 'Dersin Adının Tarihsel Değişimi',
          text: 'İnkılâp Tarihi dersi, müfredat ve kurumsal düzenlemeler doğrultusunda üç temel ad aşamasından geçmiştir:',
          slides: [10],
          subBullets: [
            '1. Dönem: Dersin adı "İnkılâp Tarihi ve Türkiye Cumhuriyeti Rejimi" olarak değiştirilerek fakülte ve yüksekokullarda zorunlu ders haline getirildi.',
            '20 Mart 1968: Toplanan Türk İnkılâp Tarihi Enstitüsü kararıyla dersin adı "Türk Devrim Tarihi" olarak değiştirildi.',
            '12 Eylül 1980 İhtilali sonrası: Dersin adı tekrar değiştirilerek "Atatürk İlkeleri ve İnkılâp Tarihi" yapıldı.',
          ],
        },
        {
          highlight: 'İlk İnkılâp Tarihi Dersine Ait Dönem Fotoğrafı',
          text: 'Slayt 11’de yer alan dönem fotoğrafı, ilk İnkılâp Tarihi dersini dinleyen öğrenci topluluğunu ve öğretim kadrosunu belgelemektedir.',
          slides: [11],
          subBullets: [
            'Bu görsel belge, dersin yalnızca sınırlı bir hukuk ya da tarih dersi değil, yeni kuşakları Cumhuriyet ideolojisiyle buluşturan kamusal bir eğitim seferberliği olduğunu gösterir.',
          ],
        },
      ],
      tables: [
        {
          caption: 'İnkılâp Tarihi Dersinin Kurumsallaşma Kronolojisi (Slayt 9–10)',
          headers: ['Tarih', 'Kurum / Mercî', 'Gelişme / Dersin Adı'],
          rows: [
            ['4 Mart 1934', 'İstanbul Üniversitesi', 'İlk dersi Milli Eğitim Bakanı Yusuf Hikmet Bayur verdi.'],
            ['20 Mart 1934', 'Ankara Hukuk Mektebi', 'İlk dersi Başbakan İsmet İnönü verdi.'],
            ['1942', 'DTCF', 'Türk İnkılâp Tarihi Enstitüsü kuruldu.'],
            ['Zorunlu Ders Dönemi', 'Fakülte ve Yüksekokullar', 'Adı "İnkılâp Tarihi ve Türkiye Cumhuriyeti Rejimi" oldu.'],
            ['20 Mart 1968', 'Türk İnkılâp Tarihi Enstitüsü', 'Dersin adı "Türk Devrim Tarihi" olarak değiştirildi.'],
            ['12 Eylül 1980 sonrası', 'Yükseköğretim Düzenlemesi', 'Dersin adı "Atatürk İlkeleri ve İnkılâp Tarihi" yapıldı.'],
          ],
        },
      ],
    },
    {
      id: 'd1-s3',
      title: 'İnkılâp (Devrim) Kavramı, Aşamaları ve Ölçütü',
      slides: [12, 13, 14, 15, 16],
      summary:
        'İnkılâp ve revolution sözcüklerinin kökenleri, "devrim" teriminin 1935’te doğuşu, bilimsel ve geniş anlamları, üç aşaması ve ilerleme/irtica ölçütü.',
      bullets: [
        {
          highlight: 'Etimolojik Köken ve "Devrim" Sözcüğünün Doğuşu',
          text: 'İnkılâp ve onun Batı dilleri ile Türkçedeki karşılıkları belirli tarihsel olaylarla dilimize yerleşmiştir:',
          slides: [12],
          subBullets: [
            'İnkılâp kelimesi Arapça "kalp" kelimesinden türetilmiş olup "değişme, bir halden başka bir hale dönüşme" anlamını taşır.',
            'Türkçeye 1789’da Fransa’da yaşanan olaylara "İnkılâp" adı verilmesiyle girmiştir.',
            'Batılılar bu olayları Latince "revolvere" (düşmek, yuvarlanmak) kökünden türetilen "revolution" kelimesiyle adlandırmıştır.',
            'Türkçesi "Devrim"dir; Dil İnkılabından sonra "devrim" kelimesi 9 Mart 1935’te Atatürk tarafından kullanılmaya başlanmıştır.',
          ],
        },
        {
          highlight: 'Bilimsel Tanım ve Geniş Anlam Kullanımı',
          text: 'Tarihçiler, sosyologlar ve hukukçular inkılâbı farklı biçimlerde tanımlasa da hepsinde ortak unsur "kuvvet kullanarak kısa sürede köklü dönüşüm"dür:',
          slides: [13],
          subBullets: [
            'Bilimsel/Siyasal Tanım: Çağın gerisinde kalmış, toplumun ihtiyaçlarını karşılayamayan sosyal, siyasal ve ekonomik bir düzenin zorla ve kısa sürede yıkılarak toplumun ihtiyaçlarına cevap veren, toplumu geliştiren yeni bir sosyal, siyasal ve ekonomik düzenin kurulmasıdır.',
            'Geniş (Gelişimsel) Kullanım: Tanımı dışında büyük gelişmeleri ifade etmek için de kullanılır (Sanayi inkılâbı, bilim inkılâbı, kültür inkılâbı vb.); burada yalnızca "gelişme" yerine kullanılmaktadır.',
          ],
        },
        {
          highlight: '1. Aşama — Fikri Hazırlık',
          text: 'İnkılâbın ilk aşaması, mevcut otorite veya sistemin bozukluklarına ve adaletsizliklerine karşı muhalif fikirlerin ortaya atıldığı dönemdir.',
          slides: [14],
          subBullets: [
            'Bu aşamayı toplumdaki düşünürler, filozoflar ve aydınlar hazırlar.',
            'İnkılâbın hazırlık aşaması oldukça uzun bir dönem içinde gerçekleşebilir.',
            'Tarihsel Örnek: Fransız İnkılâbı’nda Voltaire, Diderot ve Jean-Jacques Rousseau’nun öncülüğünü yaptığı dönem fikri hazırlık aşamasıdır.',
          ],
        },
        {
          highlight: '2. Aşama — İhtilal (Hareket)',
          text: 'Hazırlık aşamasının tamamlanmasından sonra gelir ve bu evrede mevcut düzen yıkılır.',
          slides: [15],
          subBullets: [
            'İnkılâp çoğu kez ihtilalle karıştırılır; zira ihtilal, inkılâbın ön şartıdır.',
            'Her ihtilal inkılâba ulaşamaz; ancak çağa damgasını vuran tüm inkılâplar bir ihtilal aşamasından geçer.',
            'Tarihsel Örnek: Bu aşamada Fransa’da krallık rejimi ortadan kaldırılmıştır.',
          ],
        },
        {
          highlight: '3. Aşama — Yeni Düzen Kurma ve Uygulama Zorlukları',
          text: 'Yıkılan ve bozulan düzenin yerine yenisini kurma çalışmaları yürütülür; yeni düzenin kurulması ile inkılâp başarılmış olur.',
          slides: [15, 16],
          subBullets: [
            'Tarihsel Örnek: Fransa’da mutlak monarşinin yerine cumhuriyet ilan edilmiştir.',
            'Bu aşamada yapılan düzenlemelere bazı grupların karşı çıkmaları gibi güçlüklerle karşılaşılabilir; bu nedenle yeni düzen kurma aşaması uzun zaman alabilir.',
          ],
        },
        {
          highlight: 'İnkılâbın Ölçütü ve İrtica (Geriye Dönüş)',
          text: 'Bir hareketin inkılâp sayılıp sayılmayacağını belirleyen ölçüt, yıkım anı değil inşa sürecidir:',
          slides: [16],
          subBullets: [
            'İnkılâbın ölçütü üçüncü aşamadadır. Bu aşama gerçekleştirilmezse yaşananlar inkılâp adını almaz, sadece "ihtilal" denir.',
            'İnkılâp ile oluşturulan yeni yapının eski yapıya göre mutlaka "ileri" bir nitelik taşıması gerekir.',
            'Eğer oluşturulan yapı eskisine göre geri bir nitelik taşıyorsa bu ilerleme değil, geriye dönüş (irtica) olur.',
          ],
        },
      ],
      callouts: [
        {
          type: 'info',
          title: 'İnkılâp Ölçütü: İhtilal ile İrtica Arasındaki Sınır (Slayt 15–16)',
          content:
            '1) Fikri hazırlık tek başına inkılâp değildir. 2) İhtilal mevcut düzeni yıkar ama yeni düzen kurulamazsa hareket yalnızca ihtilal olarak kalır. 3) Kurulan düzen eskisinden geri nitelikteyse buna inkılâp değil "irtica" (geriye dönüş) denir.',
          slides: [15, 16],
        },
      ],
    },
    {
      id: 'd1-s4',
      title: 'İnkılâp ile Karıştırılan Siyasal Kavramlar',
      slides: [17, 18, 19, 20, 21, 22],
      summary:
        'İhtilâl, Islahat (Reform), Evrim, Darbe (Hükümet Darbesi) ve İsyan kavramlarının kökenleri, hız ve zorlama ölçütleri ile tarihsel örnekleri.',
      bullets: [
        {
          highlight: 'İhtilâl (Hareket)',
          text: 'İhtilâl ve İnkılâp kavramları sıklıkla birbirinin yerine kullanılsa da içerik ve kapsamları farklıdır; 1789 Fransız olayı bir ihtilal değil, bir inkılâptır.',
          slides: [17],
          subBullets: [
            'Kökeni: Arapça "hal / halel" kökünden türemiştir ve "yıkmak ve bozmak" anlamına gelir.',
            'Tanımı: Bir devletin mevcut siyasal yapısını ve iktidar düzenini ortadan kaldırmak için bu konudaki hukuksal kurallara başvurmaksızın, zor kullanarak yapılan geniş bir halk hareketidir.',
            'Sınırı: Altüst olan düzenin yerine yeni bir düzen oluşturulmasını kapsamaz; sadece inkılâbın bir evresini, hareketin yıkıcı kısmını oluşturur.',
            'Farkı: İhtilâl inkılâptan dar kapsamlıdır; ihtilâl mevcut kurumların yıkılmasını, inkılâp ise yeniden kurumlaşmayı ifade eder (3. aşama olmazsa inkılâp denilmez).',
          ],
        },
        {
          highlight: 'Islahat (Reform) — Köken ve Kapsam',
          text: 'Islahat, Arapça "sulh" kökünden gelen ıslah sözcüğünün çoğulu olup "düzeltmeler, iyileştirmeler" anlamındadır.',
          slides: [18],
          subBullets: [
            'Batı karşılığı: "Reform"dur; "form" kökünden gelir ve yeniden şekillendirme, düzeltme, iyileştirme anlamına gelir.',
            'Geniş anlamda reform: Toplumun ihtiyaçlarına cevap vermeyen kurumları, ihtiyaçlarına ve şartlarına uygun olarak yeniden düzenlemektir.',
            'Temel fark: Mevcut düzen korunurken, bu düzenin aksayan yönlerini düzeltmek için çalışmalar yapılmasıdır.',
          ],
        },
        {
          highlight: 'Islahat (Reform) — Yöntem ve Kilise Reformu',
          text: 'Reform hareketleri ihtilâl ve inkılâptan yöntem bakımından belirgin biçimde ayrılır:',
          slides: [19],
          subBullets: [
            'Mevcut yasalara uygun bir biçimde gerçekleştirilir, yavaş seyreder ve zorlayıcı değildir; amacı toplumun aksayan yönlerinin düzeltilmesidir.',
            'Tarihsel özel kullanım: Avrupa’da 15. yüzyılda Katolik Kilisesi’nin dogmatik prensiplerine başkaldırma hareketi ve kilisenin yeniden düzenlenmesi de "reform" olarak adlandırılmıştır.',
          ],
        },
        {
          highlight: 'Evrim',
          text: 'Mevcut bir kurumun veya herhangi bir varlığın ideale, daha iyiye doğru gelişmesini ifade eder.',
          slides: [20],
          subBullets: [
            'İnkılâpta olduğu gibi hızlı bir hareketlilik söz konusu değildir ve zorlama yoktur.',
            'Olaylar çok yavaş, aşama aşama, uzun bir süreç içinde ve dış etkenlere bağlı olmaksızın gerçekleşir; ilerleme ve gelişme zamana ve koşullara bırakılır.',
            'Dünya tarihindeki örnekleri: Evrimleşerek günümüze ulaşan ülkeler arasında İngiltere ve İskandinav ülkeleri gösterilir.',
          ],
        },
        {
          highlight: 'Darbe (Hükümet Darbesi)',
          text: 'Mevcut iktidara karşı, devletin resmi organlarından herhangi birinin (Ordu, Emniyet vb.) mevcut iktidarı işbaşından uzaklaştırıp iktidarı ele almasıdır.',
          slides: [21],
          subBullets: [
            'Amacı ve etkisi: Sadece iktidarı ele geçirmeyi hedefler; hükümet darbesiyle yalnızca ülkeyi yönetenler değişir, toplumun sosyal, siyasi ve ekonomik yapısı değiştirilmez.',
            'Meşruiyet durumu: Darbe girişimi başarılı olursa darbeciler iktidarı ele alır ve meşruluk kazanır; başarısız olurlarsa cezalandırılırlar.',
            'Osmanlı örnekleri: Patrona Halil İsyanı ve Kabakçı Mustafa İsyanı gibi isyanlar hükümet darbesi ile sonuçlanmış, padişahlar değişmiş ancak devletin genel düzeninde bir değişiklik olmamıştır.',
            'Cumhuriyet dönemi: Gerçekleşen darbelerde yalnızca yönetenlerin görevden uzaklaştırılmaları gerçekleşmiş, (anayasa değişiklikleri hariç) devletin ve toplumun yapısında bir değişiklik olmamıştır.',
          ],
        },
        {
          highlight: 'İsyan ve Dönüşüm Zinciri',
          text: 'İsyan; itaat etmemek, emre boyun eğmemek, ayaklanmak anlamına gelir ve toplum içinde belirli bir grubun ya da teşkilatın sınırlı amaç ve hedefini gerçekleştirmek üzere devlete karşı başkaldırma hareketidir.',
          slides: [22],
          subBullets: [
            'Dönüşüm zinciri: İsyan başarılı olursa ihtilale, ihtilal başarılı olursa inkılâba dönüşür.',
            'Tarihsel örnek: 14 Temmuz 1789’da Fransa’da meydana gelen olay önce bir isyandır; isyan başarılı olunca ihtilal gerçekleşmiş, ihtilalin başarılı olması da inkılâbı meydana getirmiştir.',
          ],
        },
      ],
      tables: [
        {
          caption: 'İnkılâp ve Karıştırılan Siyasal Kavramların Karşılaştırması (Slayt 17–22)',
          headers: ['Kavram', 'Köken / Anlam', 'Zorlama / Yasallık / Hız', 'Mevcut Düzen ve Tarihsel Örnek'],
          rows: [
            [
              'İnkılâp (Devrim)',
              'Arapça "kalp" / Dönüşme',
              'Zorlayıcı ve kısa sürede köklü',
              'Eskiyi yıkar, daha ileri yeni düzen kurar (1789 Fransa, Türk Devrimi)',
            ],
            [
              'İhtilâl',
              'Arapça "hal/halel" / Yıkma-bozma',
              'Hukuk dışı, zor kullanarak, geniş halk hareketi',
              'Yalnızca mevcut siyasal yapıyı yıkar; yeni düzen kurmayı kapsamaz',
            ],
            [
              'Islahat (Reform)',
              'Arapça "sulh" / Düzeltme',
              'Yasalara uygun, yavaş, zorlamasız',
              'Mevcut düzen korunarak aksaklıklar giderilir (15. yy Kilise Reformu)',
            ],
            [
              'Evrim',
              'Aşamalı doğal gelişim',
              'Çok yavaş, zorlamasız, dış etkenden bağımsız',
              'Zamana ve koşullara bırakılmış gelişim (İngiltere, İskandinav ülkeleri)',
            ],
            [
              'Darbe',
              'İktidarı devirme',
              'Resmi organların (Ordu/Emniyet) müdahalesi',
              'Yalnızca yönetenler değişir; toplumsal yapı değişmez (Patrona Halil, Kabakçı Mustafa)',
            ],
            [
              'İsyan',
              'İtaat etmeme, ayaklanma',
              'Belirli grup/teşkilatın sınırlı amaçlı başkaldırısı',
              'Başarılı olursa ihtilale dönüşür (14 Temmuz 1789 Fransa başlangıcı)',
            ],
          ],
        },
      ],
    },
    {
      id: 'd1-s5',
      title: 'İnkılâbın Felsefi ve Hukuksal Dayanağı',
      slides: [23, 24],
      summary:
        'Zulme karşı direnme ve ihtilal hakkını reddeden ve savunan filozoflar ile 18. yüzyıldan 1948 BM İnsan Hakları Evrensel Beyannamesi’ne hukuksal belgeler.',
      bullets: [
        {
          highlight: 'Zulme Karşı Direnme Hakkında Felsefi Görüşler',
          text: 'Zor kullanarak mevcut düzeni değiştirmenin kaynağı, hukuki dayanağı, zulme karşı direnme hakkı ve ihtilal hakkı yüzyıllardır tartışma konusu olmuştur:',
          slides: [23],
          subBullets: [
            'Direnme / İhtilal Hakkını Tanımayanlar (Reddedenler): Jean Calvin, Immanuel Kant ve Thomas Hobbes.',
            'Direnme / İhtilal / İnkılâp Hakkını Savunanlar: Konfüçyüs, Epiküras, Saint Thomas d’Aquin ve John Locke.',
          ],
        },
        {
          highlight: 'Hukuk Metinleri ve 1948 BM Evrensel Beyannamesi',
          text: '18. yüzyıldan beri insanları hukuksal açıdan bağlayan belgeler ve günümüz modern anayasaları, dolaylı ya da doğrudan zulme karşı direnme hakkına yer vermektedir:',
          slides: [24],
          subBullets: [
            '1948 yılında Birleşmiş Milletler Genel Kurulu tarafından kabul edilen İnsan Hakları Evrensel Beyannamesi’nin önsözünde direnme hakkı uluslararası düzeyde tescillenmiştir.',
            'Beyannamede "insanın istibdat ve baskıya karşı son çare olarak ayaklanmaya mecbur kalmaması için insan haklarının bir hukuk rejimi ile korunmasının esaslı bir zaruret olması" ilan edilerek zulme karşı direnme hakkının önemi milletlerarası planda değerlendirilmiştir.',
          ],
        },
      ],
      tables: [
        {
          caption: 'Zulme Karşı Direnme (İhtilal) Hakkına Yaklaşımlar (Slayt 23)',
          headers: ['Tutum', 'Düşünürler'],
          rows: [
            ['Direnme Hakkını Tanımayanlar', 'Jean Calvin, Immanuel Kant, Thomas Hobbes'],
            ['Direnme Hakkını Savunanlar', 'Konfüçyüs, Epiküras, Saint Thomas d’Aquin, John Locke'],
          ],
        },
      ],
      callouts: [
        {
          type: 'quote',
          title: '1948 BM İnsan Hakları Evrensel Beyannamesi Önsözü (Slayt 24)',
          content:
            '“…insanın istibdat ve baskıya karşı son çare olarak ayaklanmaya mecbur kalmaması için insan haklarının bir hukuk rejimi ile korunmasının esaslı bir zaruret olması…”',
          slides: [24],
        },
      ],
    },
    {
      id: 'd1-s6',
      title: 'Atatürk’e Göre Devrim ve Stratejinin Doğuşu',
      slides: [25, 26, 27, 28, 29, 30],
      summary:
        'Atatürk’ün inkılâp tanımı ve tavizsiz pozitif bilim çizgisi, önceki iki evrensel devrimle kıyaslama ve 1905–1920 arası aşamalı devrim stratejisinin şekillenmesi.',
      bullets: [
        {
          highlight: 'Atatürk’ün İnkılâp Tanımı ve Türk Genel İnkılâbı',
          text: 'Atatürk’e göre inkılâp, mevcut müesseseleri zorla değiştirmek ve Türk milletini son asırlarda geri bırakmış olan kurumları yıkarak yerlerine milletin en yüksek medeni icaplara göre ilerlemesini sağlayacak yeni müesseseler koymaktır.',
          slides: [25],
          subBullets: [
            'Atatürk’ün kendi sözleriyle Türk umumi inkılâbının kısa özeti: "Uçurumun kenarında yıkık bir ülke. Türlü düşmanlarla kanlı boğuşmalar. Ondan sonra, içeride ve dışarıda saygı ile tanınan yeni toplum, yeni devlet ve bunları başarmak için aralıksız inkılâplar…"',
          ],
        },
        {
          highlight: 'Tavizsizlik ve Pozitif Bilim Temeli',
          text: 'Atatürk inkılâplar konusunda kesinlikle geriye dönüşü, ödün vermeyi veya uzlaşmayla bir orta yol izlemeyi kabul etmez.',
          slides: [26],
          subBullets: [
            'Türk Devrimi; toplum ve devlet yönetiminde dinsel kuralları, bu kurallardan kaynaklanan yasaları, gelenekleri, düzenlemeleri ve bunların oluşturduğu düzeni ortadan kaldırır.',
            'Bunun yerine Batı’da gelişen pozitif düşünceyi, bilime ve insan aklına dayalı yaşam biçimini koymayı ve bunun gereği olan devlet ve toplum yapısını gerçekleştirmeyi hedefler.',
          ],
        },
        {
          highlight: 'Türk Devriminden Önceki İki Evrensel Devrim',
          text: 'Türk Devriminden önce dünya tarihinde iki büyük evrensel devrim örneği yaşanmıştır:',
          slides: [27],
          subBullets: [
            '1789 Fransız Devrimi (Burjuva Devrimi): Geliştirdiği, ortaya çıkardığı ve yaydığı düşüncelerle kendi çağında ve sonraki yıllarda başka toplumları ve ulusları da etkilemiştir.',
            '1917 Rus Devrimi (İşçi Sınıfı Devrimi): İşçi sınıfının ihtilali, yönetime el koyması ve tüm dünya işçilerinin birleşmesiyle bir komünist dünya toplumu yaratmayı amaçlamıştır; II. Dünya Savaşı’nda Sovyet ordularının girdiği ve denetimi altına aldığı ülkelerde benzer yönetimlerin kurulmasına olanak sağlamıştır.',
          ],
        },
        {
          highlight: 'Fikri Oluşum ve Vatan ve Hürriyet Cemiyeti (1905–1906)',
          text: 'Atatürk’ün yetiştiği dönem Avrupa’da milliyetçilik ve demokrasi düşüncesinin hızla yayıldığı, Osmanlı Devleti’nde ise istibdat yönetiminin sürdüğü ve aydınların gizlice örgütlendiği bir dönemdi.',
          slides: [28],
          subBullets: [
            'Askeri okulda ülke sorunlarıyla ilgilenmeye başlayan Atatürk, Yeni Osmanlıların yazdıklarını ve Fransız İnkılâbı ile ilgili kitapları okudu; kafasında yeni fikirler oluştu.',
            'Bu fikirleri eyleme koymak için örgütlenmenin gerekliliğine inanarak 1905 yılında Suriye’de göreve başladığında "Vatan ve Hürriyet Cemiyeti"ni kurdu.',
            '1906 yılında bu Cemiyetin Selanik’te şubesini açarak tarihi konuşmasını yaptı.',
          ],
        },
        {
          highlight: '1906 Selanik Konuşması ve Erken Hedef Bilinci',
          text: 'Atatürk 1906 Selanik konuşmasında hürriyetin her gelişmenin ve kurtuluşun anası olduğunu belirterek yok edici istibdada karşı ihtilal, milleti hâkim kılma ve vatanı kurtarma çağrısı yapmıştır.',
          slides: [29],
          subBullets: [
            'Bu konuşmada 1906 gibi çok erken bir yılda ihtilal, devrim ve ulusal egemenlik kavramlarına değinmesi, Atatürk’ün hedefini daha o dönemde belirlediğini açıkça gösterir.',
          ],
        },
        {
          highlight: 'Evrelere Ayırma, Toplumsal Hazırlık ve Zamanlama',
          text: 'Atatürk kafasında şekillendirdiği hiçbir devrim kararını zamanı gelmeden uygulamaya koymamış, bir devrimci olarak zamanı ustalıkla kullanmıştır.',
          slides: [30],
          subBullets: [
            'Nutuk’ta belirttiği üzere önemli kararları ilk günden açıklamak başarısızlığa neden olabilirdi; bu nedenle uygulamayı evrelere ayırmak, olaylardan yararlanarak ulusun duygu ve düşüncelerini hazırlamak ve adım adım ilerlemek gerekiyordu.',
            'Temel stratejik ilkesi: "Hedefe dolambaçlı yollardan gitmek cephe hücumundan sağlamdır."',
            '1920’lerden başlayarak yeni ve çağdaş bir devlet için gerekli olan tüm inkılâpları birer birer gerçekleştirmiştir.',
          ],
        },
      ],
      callouts: [
        {
          type: 'quote',
          title: '1906 Selanik Konuşması (Slayt 29)',
          content:
            '“Hürriyet olmayan bir ülkede ölüm ve yok oluş vardır. Her gelişmenin ve kurtuluşun anası hürriyettir. Tarih, bugün biz evlatlarına bazı büyük vazifeler yüklüyor. Ben Suriye’de bir Cemiyet kurdum, İstibdat ile mücadeleye başladık yok edici bir istibdada karşı ancak ihtilâl ile cevap vermek ve köhneleşmiş olan çürük iradeyi yıkmak, milleti hâkim kılmak, sonuçta vatanı kurtarmak için sizi vazifeye davet ediyorum.”',
          slides: [29],
        },
      ],
    },
    {
      id: 'd1-s7',
      title: 'Türk Devriminin Nesnel ve Öznel Koşulları',
      slides: [31, 32, 33, 34, 35, 36],
      summary:
        'Devrimi doğuran nesnel (ekonomik, siyasal, toplumsal) ve öznel (lider, örgüt, ideoloji) koşullar, Atatürk’ün Almanca çevirileri dahil 14 kitabı, örgütler ve bütünsel ideoloji.',
      bullets: [
        {
          highlight: 'Nesnel ve Öznel Koşulların Bütünlüğü',
          text: 'Bir devrimin gerçekleşebilmesi için nesnel koşulların yanında mutlaka öznel koşulların da bir araya gelmesi gerekir:',
          slides: [31],
          subBullets: [
            'Nesnel Koşullar (aslında Osmanlı Devleti’ni çöküntüye götüren nedenlerdir): Ekonomik Sorunlar, Siyasal Sorunlar, Toplumsal Sorunlar.',
            'Öznel Koşullar: Lider, Örgüt, İdeoloji.',
          ],
        },
        {
          highlight: 'Öznel Koşul 1 — Devrimci Lider Olarak Atatürk',
          text: 'Hiçbir lider, örgüt ya da ideoloji nesnel koşullar var olmadan tek başına bir devrim yapamaz; ancak lidersiz bir devrim de düşünülemez.',
          slides: [32],
          subBullets: [
            'Devrimci lider, kendini yaratan koşulları doğru değerlendiren ve onları yeniden biçimlendiren kişidir; Türk İnkılâbındaki devrimci lider Atatürk’tür.',
            'Atatürk’te bir liderde bulunması gereken bütün özellikler (yetenek, zeka, karar verme gücü, hitabet, özgün olma, başarı, bilgi, sorumluluk, güvenilirlik, girişkenlik, özgüven, sosyallik) toplanmıştır.',
            'İnsanları etkileme gücüne sahip karizmatik bir lider olmasına rağmen bununla yetinmeyip sürekli okuyarak kendini geliştirmiş ve 14 kitap yazmıştır.',
          ],
        },
        {
          highlight: 'Atatürk’ün 14 Kitabı (1–7: Anı, Siyaset, Bilim, Tarih)',
          text: 'Atatürk Almanca çevirileriyle birlikte askeri, siyasi, sosyal ve kültürel alanlarda 14 kitap yazmıştır; ilk yedi eseri şunlardır:',
          slides: [33],
          subBullets: [
            '1. Atatürk’ün Hatıra Defteri',
            '2. Vatandaş İçin Medeni Bilgiler',
            '3. Geometri Kitabı',
            '4. Arıburnu Muharebeleri Raporu',
            '5. Karlsbad Hatıraları',
            '6. Nutuk (Söylev)',
            '7. Atatürk’ten Mektuplar',
          ],
        },
        {
          highlight: 'Atatürk’ün 14 Kitabı (8–14: Söylevler ve Askeri Eserler)',
          text: 'Atatürk’ün Almanca çevirilerini ve askeri kuram çalışmalarını da içeren diğer yedi kitabı şunlardır:',
          slides: [34],
          subBullets: [
            '8. Atatürk’ün Söylev ve Demeçleri',
            '9. Bölüğün Muharebe Eğitimi (Almancadan Çeviri)',
            '10. Takımın Muharebe Eğitimi (Almancadan Çeviri)',
            '11. Zabit ve Kumandan ile Hasbihal',
            '12. Cumalı Ordugahı',
            '13. Taktik Tatbikat Gezisi',
            '14. Taktik Meselelerinin Çözümü ve Emirlerin Yazılmasına İlişkin Öğütler',
          ],
        },
        {
          highlight: 'Öznel Koşul 2 — Örgüt',
          text: 'Örgüt, liderin güç aldığı ve destek bulduğu kaynak olup devrimci için vazgeçilmez bir araçtır.',
          slides: [35],
          subBullets: [
            'Düşünceler örgüt aracılığıyla yaygınlaştırılır, eylem onunla gerçekleştirilir ve insanlar düşünce ile eylem planında onunla kazanılır.',
            'Atatürk’ün hayatındaki beş temel örgüt: Vatan ve Hürriyet Cemiyeti, İttihat ve Terakki Cemiyeti, Müdafaa-i Hukuk Cemiyetleri, Türkiye Büyük Millet Meclisi (TBMM) ve Cumhuriyet Halk Fırkası’dır.',
          ],
        },
        {
          highlight: 'Öznel Koşul 3 — Bütünsel İdeoloji (Atatürkçülük / Kemalizm)',
          text: 'Anadolu ulusal eyleminin ideolojisi Atatürkçülük / Kemalizm’dir ve bütünsel bir niteliğe sahiptir:',
          slides: [36],
          subBullets: [
            'Sadece ekonomik kalkınma hedeflenmemiştir; Batı’dan yalnız teknoloji almak yetmez, o teknolojiyi oluşturan bilimi de almak gerekir ve bilimi destekleyen felsefe ile sanat da önemlidir.',
            'Bu bütünselliğin somut göstergesi olarak: İstanbul Üniversitesi’nin kuruluşu Sivas–Erzurum demiryolu yapımı kadar; Konservatuarın açılması ise Nazilli Bez Fabrikası ya da Eskişehir Şeker Fabrikası’nın yapılması kadar önemlidir.',
          ],
        },
      ],
      tables: [
        {
          caption: 'Atatürk’ün Almanca Çevirileriyle Birlikte 14 Kitabı (Slayt 33–34)',
          headers: ['No', 'Kitabın Adı', 'Tür / Alan'],
          rows: [
            ['1', 'Atatürk’ün Hatıra Defteri', 'Anı / Günlük'],
            ['2', 'Vatandaş İçin Medeni Bilgiler', 'Siyaset / Yurttaşlık'],
            ['3', 'Geometri Kitabı', 'Bilim / Terim Geliştirme'],
            ['4', 'Arıburnu Muharebeleri Raporu', 'Askeri Tarih / Harekat'],
            ['5', 'Karlsbad Hatıraları', 'Anı / Gözlem'],
            ['6', 'Nutuk (Söylev)', 'Siyasi Tarih / Milli Mücadele'],
            ['7', 'Atatürk’ten Mektuplar', 'Yazışma / Belge'],
            ['8', 'Atatürk’ün Söylev ve Demeçleri', 'Hitabet / Siyasi Düşünce'],
            ['9', 'Bölüğün Muharebe Eğitimi', 'Askeri Eğitim (Almancadan Çeviri)'],
            ['10', 'Takımın Muharebe Eğitimi', 'Askeri Eğitim (Almancadan Çeviri)'],
            ['11', 'Zabit ve Kumandan ile Hasbihal', 'Askeri Ahlak ve Komutanlık'],
            ['12', 'Cumalı Ordugahı', 'Askeri Tatbikat / Gözlem'],
            ['13', 'Taktik Tatbikat Gezisi', 'Askeri Taktik'],
            ['14', 'Taktik Meselelerinin Çözümü ve Emirlerin Yazılmasına İlişkin Öğütler', 'Askeri Kuram ve Emir Yazımı'],
          ],
        },
      ],
    },
    {
      id: 'd1-s8',
      title: 'Türk Devriminin Temel Özellikleri ve Özgünlüğü',
      slides: [37, 38, 39, 40, 41, 42, 43],
      summary:
        'Türk Devriminin hazırlayıcı–uygulayıcı kadro birliği, ulusal bağımsızlık ile egemenliğin eşzamanlılığı, özgünlüğü, en az zorlama içermesi ve Tam Bağımsızlık ilkesi.',
      bullets: [
        {
          highlight: 'Kısa Hazırlık Dönemi ve Kadro Birliği',
          text: 'Türk Devrimi, Milli Mücadele’yi de kapsayan çok geniş bir toplumsal değişim hareketi olup amaç, hazırlanış ve uygulama yönünden Fransız ve Rus Devrimlerinden ayrılır.',
          slides: [37],
          subBullets: [
            'Diğer devrimlerdeki gibi uzun bir fikri hazırlık aşaması yoktur.',
            'Türk Devriminin hazırlığını yapanlar ile onu başarıya ulaştıranlar aynı kişilerdir.',
            'Fransa’da devrimi hazırlayan Montesquieu, Jean-Jacques Rousseau, Diderot ve Voltaire gibi düşünürlerin hiçbiri ihtilali görmemiştir.',
          ],
        },
        {
          highlight: 'Tek Önder, Kısa Süre ve Bağımsızlık–Egemenlik Eşzamanlılığı',
          text: 'Türk Devriminde tek bir önder vardır ve Fransız ile Rus Devrimleri uzun yıllara yayılırken Türk Devrimi oldukça kısa bir zaman diliminde gerçekleşmiştir.',
          slides: [38],
          subBullets: [
            'Fransa ve Rusya işgal altında bulunmadığından yalnızca yönetim şekli değişerek ulusal egemenlik anlayışı benimsenmiştir.',
            'Türkiye’de ise Milli Mücadele yürütülürken aynı anda inkılâbın adımları atılmış; ulusal bağımsızlık ve ulusal egemenlik bir arada gerçekleştirilmiştir.',
            'Kanıtı: 1921 Anayasası’nın (Teşkilat-ı Esasiye Kanunu) 1. maddesidir — "Madde 1. Hakimiyet bila kaydü şart milletindir" (Egemenlik kayıtsız şartsız ulusundur).',
          ],
        },
        {
          highlight: 'Özgünlük ve Anti-Emperyalizm',
          text: 'Türk Devrimi başka bir rejimin taklidi değil özgün bir dönüşümdür ve emperyalizme kesinlikle karşıdır.',
          slides: [39],
          subBullets: [
            'Özgünlük: Atatürk, "Demokrasiye benzemiyormuş, sosyalizme benzemiyormuş. Efendiler… Biz benzememekle ve benzetmemekle gurur duyarız. Çünkü biz bize benzeriz" demiştir.',
            'Batı’ya Seçici Yaklaşım: "Bir taraftan emperyalizmle savaşıyor bir taraftan Batı gibi olmaya çalışıyoruz" eleştirisine karşılık Atatürk; Batı’nın bilimine, sanatına, teknolojisine, özgürlüğüne ve hayat düzeyine (uygarlığına) saygılı olduklarını ve uygarlık şu anda Batı’da olduğu için onu örnek almak gerektiğini, ancak Batı’nın çirkin yüzü olan emperyalizmine ve militarizmine öteden beri karşı olduklarını belirtmiştir.',
          ],
        },
        {
          highlight: 'En Az Zorlama İçeren Devrim',
          text: 'Bütün devrimlerde zorlama unsuru vardır; ancak en az zorlama unsuru içeren devrim Türk Devrimidir.',
          slides: [40],
          subBullets: [
            'Fransa’da ihtilal aşaması çok kanlı geçmiş, monarşi kaldırılıp Fransa Kralı giyotinle idam edilmiştir.',
            'Rusya’da Çarlık kaldırılıp Rus Çarı ailesiyle birlikte kurşuna dizilmiştir.',
            'Türkiye’de ise Saltanat kaldırıldığında Osmanlı Hanedanı üyelerine zulüm uygulanmamış, hiçbir saygısızlık görmeden tren garından uğurlanıp yurtdışına gönderilmişlerdir.',
          ],
        },
        {
          highlight: 'Rus Çarı II. Nikolay Aleksandroviç Romanov ve Ailesi',
          text: 'Slayt 41’deki dönem fotoğrafı, 1917 Rus Devrimi sonrasında ailesiyle birlikte kurşuna dizilen Rus Çarı II. Nikolay Aleksandroviç Romanov ve ailesini göstermektedir.',
          slides: [41],
          subBullets: [
            'Bu görsel, Fransız ve Rus ihtilallerindeki kanlı tasfiye ile Türkiye’de Saltanatın kaldırılması sonrasında Osmanlı Hanedanı’nın kansız ve saygılı biçimde yurtdışına uğurlanması arasındaki çarpıcı farkı somutlaştırır.',
          ],
        },
        {
          highlight: 'Temel İlke: Tam Bağımsızlık (İstiklal-i Tamme) ve Kapitülasyonlar',
          text: 'Türk Devriminin temel ilkesi İstiklal-i Tamme (Tam Bağımsızlık) olup bağımsızlık Atatürk’e göre askeri, mali, idari, adli, siyasi ve kültürel tüm alanlarda olmalıdır.',
          slides: [42],
          subBullets: [
            'Bu alanlardan birinde dahi bağımsızlık yoksa tam bağımsızlıktan söz edilemez.',
            'Osmanlı Devleti’ni tam bağımsızlıktan uzaklaştıran kapitülasyonlar olmuştur; kapitülasyonların yalnızca ekonomik olanı değil, özellikle adli ve idari olanları devleti Avrupalı devletlerin sömürgesi haline getirmiştir.',
            'Osmanlı ülkesinde yaşayan yabancılar dokunulmazlık hakkına sahipti: vergi ödememelerinin yanı sıra tutuklanamazlar ve sınır dışı edilemezlerdi.',
          ],
        },
        {
          highlight: '1913 Doğu Anadolu Yabancı "Genel Vali" Atamaları',
          text: 'Türk Devrimi, Osmanlı egemenliğini fiilen ortadan kaldıran sömürgeci müdahalelere bir daha dönmemek üzere son vermek için gerçekleştirilmiştir:',
          slides: [43],
          subBullets: [
            '1913 yılında Doğu Anadolu’da bir Ermeni Vilayeti kurulması için teşebbüse geçen Batılılar, 8 Şubat’ta yapılan anlaşmayla bölgeye iki Avrupalı "Genel Vali" atamıştı.',
            'Üstelik bu valilerin maaşları da Osmanlı Devleti tarafından ödenecekti.',
            'Norveçli Binbaşı Hoff: Van–Bitlis–Diyarbakır bölgesine atandı.',
            'Hollandalı Westenek: Trabzon–Erzurum–Sivas bölgesine atandı.',
          ],
        },
      ],
      tables: [
        {
          caption: 'Fransız, Rus ve Türk Devrimlerinin Karşılaştırması (Slayt 27, 37–41)',
          headers: ['Karşılaştırma Ölçütü', '1789 Fransız Devrimi', '1917 Rus Devrimi', 'Türk Devrimi'],
          rows: [
            [
              'Sınıfsal / Toplumsal Nitelik',
              'Burjuva devrimi',
              'İşçi sınıfı devrimi',
              'Ulusal bağımsızlık ve uygarlık değişimi (bütün ulusu kapsayan)',
            ],
            [
              'Fikri Hazırlık ve Kadro',
              'Uzun fikri hazırlık (Montesquieu, Rousseau, Diderot, Voltaire ihtilali görmedi)',
              'Uzun yıllara yayılan ideolojik hazırlık',
              'Uzun fikri hazırlık aşaması yok; hazırlayan ve başaran aynı kadro (tek önder)',
            ],
            [
              'İşgal ve Egemenlik',
              'Ülke işgal altında değil; yalnız yönetim şekli değişti',
              'Ülke işgal altında değil; yönetim şekli değişti',
              'Ulusal bağımsızlık (Kurtuluş Savaşı) ile ulusal egemenlik (1921 Anayasası) aynı anda yürütüldü',
            ],
            [
              'Eski Hanedana Tutum',
              'Kral giyotinle idam edildi (çok kanlı)',
              'Çar II. Nikolay ve ailesi kurşuna dizildi (çok kanlı)',
              'Saltanat kaldırılınca Osmanlı Hanedanı zulüm ve saygısızlık olmadan tren garından uğurlandı (en az zorlama)',
            ],
          ],
        },
      ],
      callouts: [
        {
          type: 'compare',
          title: 'Atatürk’ün Özgünlük ve Batı Uygarlığı Vurgusu (Slayt 39)',
          content:
            '“Biz benzememekle ve benzetmemekle gurur duyarız. Çünkü biz bize benzeriz.” — Atatürk, Batı’nın bilimine, sanatına, teknolojisine, özgürlüğüne ve hayat düzeyine saygı duyarken, Batı’nın emperyalizmine ve militarizmine kesin olarak karşı çıkar.',
          slides: [39],
        },
      ],
    },
    {
      id: 'd1-s9',
      title: 'Bilimsel-Laik Kimlik, Mazlum Milletlere Etkisi ve Uygarlık Değişimi',
      slides: [44, 45, 46, 47, 48, 49],
      summary:
        'Türk Devriminin dogmacı olmayan akılcı yapısı, 1933 Doğu halklarına çağrısı, Nehru–Burgiba–Amanullah Han–Sitti Şaravi örnekleri, kültür-uygarlık değişimi ve Milli Mücadele felsefesi.',
      bullets: [
        {
          highlight: 'Ulusal, Laik, Bilimsel ve Dogmacı Olmayan Yapı',
          text: 'Türk Devrimi ulusal bir devrim olup laik, pozitif düşünceye dayalı, bilimsel ve akılcı niteliktedir.',
          slides: [44],
          subBullets: [
            'En büyük özelliklerinden biri dogmacı (doğmacı) olmayışı ve kalıplaşmayı reddetmesidir.',
            'Toplum ve devlet yaşamını her zaman ve her çağda değişmez sayılan kurallar ve yasalarla sınırlandırmak isteyen ideolojileri benimsemez.',
            'Gazi Mustafa Kemal Atatürk’ün önderliğinde emperyalizme karşı ilk ulusal bağımsızlık savaşı sonucu özgürlüğüne kavuşan çağdaş Türkiye Cumhuriyeti, mücadelesiyle mazlum milletlere örnek olmuştur.',
          ],
        },
        {
          highlight: 'Atatürk’ün 1933 Doğu Halklarına Çağrısı',
          text: '1933 yılında Atatürk, sömürge durumundaki Doğu ülkelerinin halklarına tarihi bir çağrıda bulunarak girişecekleri kurtuluş savaşımlarından başarıyla çıkacaklarına inandığını açıklamış ve bu uluslara esin kaynağı olmuştur.',
          slides: [45],
          subBullets: [
            'Bağımsızlık ve özgürlüğüne kavuşacak pek çok kardeş ulus olduğunu belirterek, onların yeniden doğuşunun gelişme ve refaha yönelik olacağını vurgulamıştır.',
          ],
        },
        {
          highlight: 'Hindistan ve Tunus Liderlerinin Değerlendirmeleri',
          text: 'Türk Devrimi ve Milli Mücadele, Asya ve Kuzey Afrika’daki bağımsızlık önderlerine doğrudan ilham vermiştir:',
          slides: [46],
          subBullets: [
            'Hindistan bağımsızlık lideri Nehru: Atatürk’ün çağdaşlaştırma çabalarını büyük beğeniyle karşıladığını, O’nun dinamizminin ve yılmak-yorulmak bilmezliğinin insanda büyük etki yarattığını belirterek Atatürk’ü "Doğu’da modern çağın yapıcılarından biri" olarak tanımlamıştır.',
            'Tunus ulusal kurtuluş savaşımının önderi Habib Burgiba: "Sakarya Zaferi yirmi yaşımın en büyük anısı olmuştur, o zaman kendime diyordum: Acaba ben de ulusumu böylesine seferber edemez miyim, onun ruhuna bu kurtarıcı atılımı, bu dizgin tanımaz tutkuyu aşılayamaz mıyım?" sözleriyle Türk Kurtuluş Savaşı’ndan aldığı ilhamı dile getirmiştir.',
          ],
        },
        {
          highlight: 'Afganistan ve Mısır’daki Yansımalar',
          text: 'Afganistan ve Mısır’daki yönetici ve temsilciler de Atatürk Devrimini örnek almış ve yüceltmiştir:',
          slides: [47],
          subBullets: [
            'Afgan Kralı Amanullah Han: 1928’de Türkiye’ye yaptığı ziyaret sırasında Atatürk’ün ülkede yaptıklarından etkilenmiş ve Afganistan’a döndükten sonra reformlara başlamıştır; ancak bir gerici ayaklanma ile ülkesini terk etmek zorunda kalmıştır.',
            'Mısır delegesi Sitti Şaravi (1935 Uluslararası Kadınlar Birliği Kongresi): "Biz Mısırlılar zaten Atatürk’ü çok sever ve onun açtığı yolda yürümeyi bir şeref biliriz. Hatta siz ona Atatürk dersiniz. Biz ise onu Ataşark diye anarız. Çünkü o yalnız Türk’ün değil, bütün Şark’ın ve bilhassa Kardeş Mısır’ın da atası ve önderidir" demiştir.',
          ],
        },
        {
          highlight: 'Kültür ve Uygarlık Değiştirme Olayı',
          text: 'Türk Devrimi yalnızca bir iktidar değişikliği değil, kapsamlı bir kültür ve uygarlık değiştirme olayıdır:',
          slides: [48],
          subBullets: [
            'Teokratik devletten ulusal devlete geçiş sağlamış ve ümmetten ulus yaratmıştır.',
            'Türk toplumunun politik, ekonomik, toplumsal yapısını ve bireylerinin yaşam biçimi ile dünya görüşünü kökten ve ani biçimde değiştirerek Türkiye’yi çağdaşlaştırmıştır.',
            'Türk toplumunu ortaçağ tipi bir tarım toplumundan demokratik, sivil, sanayi ve modern bir topluma; doğulu bir toplumdan çağdaş, batılı bir topluma; sömürge ülkesinden ileri ve tam bağımsız bir ülkeye dönüştürmüştür.',
          ],
        },
        {
          highlight: 'Devletin Kuruluş Felsefesi ve "Kutup Yıldızı"',
          text: 'Bir devlet kuruluş felsefesini ve kuruluş amacını asla unutmamalıdır.',
          slides: [49],
          subBullets: [
            'Bugünü ve yarını anlayabilmemiz için Milli Mücadele felsefesini bilmek gerekir.',
            'Milli Mücadele felsefesi bize ne yapıp ne yapmamamız gerektiğini gösteren bir kılavuzdur, bir "kutup yıldızıdır".',
          ],
        },
      ],
      tables: [
        {
          caption: 'Türk Devriminden Etkilenen Mazlum Ulus Liderleri ve Temsilcileri (Slayt 46–47)',
          headers: ['Kişi', 'Ülke / Görev', 'Tarih / Bağlam', 'Türk Devrimi İle İlişkisi / Sözü'],
          rows: [
            [
              'Nehru',
              'Hindistan Bağımsızlık Lideri',
              'Modernleşme değerlendirmesi',
              'Atatürk’ün dinamizmini övmüş ve O’nu "Doğu’da modern çağın yapıcılarından biri" saymıştır.',
            ],
            [
              'Habib Burgiba',
              'Tunus Ulusal Kurtuluş Önderi',
              'Sakarya Zaferi’nin etkisi',
              '"Sakarya Zaferi yirmi yaşımın en büyük anısı olmuştur" diyerek ulusunu seferber etmede esinlendiğini belirtmiştir.',
            ],
            [
              'Amanullah Han',
              'Afgan Kralı',
              '1928 Türkiye ziyareti sonrası',
              'Atatürk’ün reformlarından etkilenip ülkesinde reformlara girişmiş, ancak gerici ayaklanmayla ülkesini terk etmek zorunda kalmıştır.',
            ],
            [
              'Sitti Şaravi',
              'Mısır Delegesi',
              '1935 Uluslararası Kadınlar Birliği Kongresi',
              'Atatürk’ü yalnız Türk’ün değil bütün Şark’ın ve Mısır’ın atası anlamında "Ataşark" diye andıklarını söylemiştir.',
            ],
          ],
        },
      ],
      callouts: [
        {
          type: 'quote',
          title: 'Atatürk’ün 1933 Doğu Halklarına Çağrısı (Slayt 45)',
          content:
            '“Doğu’dan şimdi doğacak olan güneşe bakınız. Bugün, günün ağardığını nasıl görüyorsam, bağımsızlık ve özgürlüğüne kavuşacak olan çok kardeş ulus vardır. Onların yeniden doğuşu, kuşkusuz ki gelişmeye ve refaha yönelik olacak ve kendilerini bekleyen geleceğe ulaşacaklardır.”',
          slides: [45],
        },
      ],
    },
  ],
  flashcards: [
    {
      id: 'd1-c1',
      category: 'Kavram',
      front: 'Atatürk’ün "Biz büyük bir inkılâp yaptık..." sözünde yıkılan eski müesseselerle ilgili yaptığı temel uyarı nedir?',
      back: 'Eski müesseselerin binlerce taraftarı olduğunu ve bunların geri dönmek için fırsat beklediklerinin asla unutulmaması gerektiğini vurgulamıştır.',
      slide: 2,
    },
    {
      id: 'd1-c2',
      category: 'Kavram',
      front: 'Tarih bilimi ile ATA 121 (Atatürk İlkeleri ve İnkılâp Tarihi) dersinin temel inceleme alanı nedir?',
      back: 'Tarih, insan toplumlarının zaman içindeki değişimlerini ve olayları nedensel ilişkilerle inceler. ATA 121 ise 20. yüzyılda Türk ulusunun sosyal, siyasal, ekonomik ve kültürel değişimlerini ve günümüze etkisini ele alır.',
      slide: 3,
    },
    {
      id: 'd1-c3',
      category: 'Kavram',
      front: 'Yeni kurulan Türk devletinin siyasi rejimi hangi düşünsel çatı altında devlet hayatına yön verir?',
      back: 'Atatürkçülük / Kemalizm veya Atatürkçü Düşünce Sistemi çatısı altında yön verir.',
      slide: 4,
    },
    {
      id: 'd1-c4',
      category: 'Tarih / Olay',
      front: 'Atatürk’ün Türk İnkılâbını gerçekleştirdiği üç aşama hangileridir?',
      back: '1) Kurtuluş Savaşı (1919–1922) ile tam bağımsızlık ve Misak-ı Millî temelinde devlet adımı; 2) Saltanatın kaldırılması, Lozan Barış Antlaşması ve Cumhuriyet’in ilanı; 3) Devletin devamlılığını sağlayacak inkılap hareketleri.',
      slide: 5,
    },
    {
      id: 'd1-c5',
      category: 'Kavram',
      front: 'Doğu Sorunu (Şark Meselesi) ilk kez nerede ve kim tarafından ortaya atılmıştır?',
      back: '1815 Viyana Kongresi sırasında Rus Çarı Aleksandr tarafından ortaya atılmıştır.',
      slide: 6,
    },
    {
      id: 'd1-c6',
      category: 'Karşılaştırma / Özellik',
      front: 'Doğu Sorunu (Şark Meselesi) 19. yüzyılın başında ve sonunda nasıl farklı anlamlar taşımıştır?',
      back: 'Yüzyıl başında "Avrupa’nın hasta adamı"nın Avrupa’daki topraklarının paylaşılması; yüzyıl sonunda ise Osmanlı’nın bütün topraklarının paylaşılıp Türklerin Orta Asya’ya gönderilmesi anlamına geliyordu (I. Dünya Savaşı gizli antlaşmalarıyla uygulandı).',
      slide: 6,
    },
    {
      id: 'd1-c7',
      category: 'Tarih / Olay',
      front: '1917 Rus İhtilali sonrasında İngiltere ve Fransa "Şark Sorunu"nu nasıl çözmeye girişti?',
      back: 'Rusya savaştan çekilince Arap coğrafyasını manda sistemiyle paylaşırken Türk’ün anayurdu Anadolu’yu da yağmalayıp işgal ettiler.',
      slide: 7,
    },
    {
      id: 'd1-c8',
      category: 'Tarih / Olay',
      front: '1912–1922 arasındaki on yıllık savaşlarda Türk ulusunun insan kaybı ne kadardı?',
      back: 'Özellikle I. Dünya Savaşı ve Milli Mücadele’de 3 milyon insan kaybedilmiş, ulusun eğitilmiş insan kadrolarının büyük kısmı yok olmuştur.',
      slide: 8,
    },
    {
      id: 'd1-c9',
      category: 'Tarih / Olay',
      front: 'İlk İnkılâp Tarihi dersleri 1934’te hangi tarihlerde, nerede ve kimler tarafından verilmiştir?',
      back: '4 Mart 1934’te İstanbul Üniversitesi’nde Milli Eğitim Bakanı Yusuf Hikmet Bayur; 20 Mart 1934’te Ankara Hukuk Mektebi’nde Başbakan İsmet İnönü tarafından verilmiştir.',
      slide: 9,
    },
    {
      id: 'd1-c10',
      category: 'Kişi / Eser',
      front: '1934’te dört ana bölüme ayrılan İnkılâp Tarihi dersinin her bir bölümünü hangi isimler vermiştir?',
      back: 'Siyasi Tarih: Yusuf Hikmet Bayur · Hukuk: Mahmut Esat Bozkurt · Ekonomi: Yusuf Kemal Tengirşek · Askeri Konular: CHF Genel Sekreteri Recep Peker.',
      slide: 9,
    },
    {
      id: 'd1-c11',
      category: 'Antlaşma / Kurum',
      front: 'Türk İnkılâp Tarihi Enstitüsü hangi yıl ve hangi fakülteye bağlı olarak kuruldu?',
      back: '1942 yılında Dil ve Tarih-Coğrafya Fakültesi’ne (DTCF) bağlı olarak kurulmuştur.',
      slide: 9,
    },
    {
      id: 'd1-c12',
      category: 'Tarih / Olay',
      front: 'İnkılâp Tarihi derslerinin geniş kitlelere ulaşması için hangi yayın kanallarından yararlanılmıştır?',
      back: 'Dersler aynı zamanda radyoda ve gazetelerde yayınlanarak geniş kitlelere ulaştırılmıştır.',
      slide: 10,
    },
    {
      id: 'd1-c13',
      category: 'Tarih / Olay',
      front: 'Dersin adı tarihsel süreçte hangi üç isimle anılmıştır?',
      back: 'Önce "İnkılâp Tarihi ve Türkiye Cumhuriyeti Rejimi" (zorunlu ders); 20 Mart 1968’de Enstitü kararıyla "Türk Devrim Tarihi"; 12 Eylül 1980 İhtilali sonrasında ise "Atatürk İlkeleri ve İnkılâp Tarihi" olmuştur.',
      slide: 10,
    },
    {
      id: 'd1-c14',
      category: 'Kavram',
      front: 'İnkılâp ve Revolution kelimelerinin etimolojik kökenleri ve anlamları nelerdir?',
      back: 'İnkılâp Arapça "kalp" kelimesinden (değişme, bir halden başka bir hale dönüşme); Revolution Latince "revolvere" kökünden (düşmek, yuvarlanmak) türemiştir.',
      slide: 12,
    },
    {
      id: 'd1-c15',
      category: 'Tarih / Olay',
      front: 'İnkılâp sözcüğü Türkçeye ne zaman girmiş, "Devrim" sözcüğü ne zaman kullanılmaya başlanmıştır?',
      back: 'İnkılâp sözcüğü 1789 Fransız olaylarıyla Türkçeye girmiştir. Türkçesi olan "Devrim" ise Dil İnkılabından sonra 9 Mart 1935’te Atatürk tarafından kullanılmaya başlanmıştır.',
      slide: 12,
    },
    {
      id: 'd1-c16',
      category: 'Kavram',
      front: 'Tarihçi, sosyolog ve hukukçuların inkılâp tanımlarındaki ortak özellik nedir?',
      back: 'Kuvvet kullanarak kısa sürede köklü bir dönüşümün esas alınması; çağın gerisinde kalmış düzenin zorla yıkılıp toplumu geliştiren yeni düzenin kurulmasıdır.',
      slide: 13,
    },
    {
      id: 'd1-c17',
      category: 'Kavram',
      front: 'Siyasal anlamı dışında "inkılâp" sözcüğünün yalnızca "büyük gelişme" anlamında kullanıldığı örnekler nelerdir?',
      back: 'Sanayi inkılâbı, bilim inkılâbı ve kültür inkılâbı gibi kullanımlar tanım dışında sadece gelişme anlamında kullanılır.',
      slide: 13,
    },
    {
      id: 'd1-c18',
      category: 'Kavram',
      front: 'İnkılâbın 1. aşaması olan "Fikri Hazırlık" nedir ve Fransız İnkılâbı’ndaki öncüleri kimlerdir?',
      back: 'Mevcut sistemin bozukluk ve adaletsizliklerine karşı düşünür, filozof ve aydınların uzun dönemde muhalif fikirler ortaya attığı aşamadır. Fransa’daki öncüleri Voltaire, Diderot ve Jean-Jacques Rousseau’dur.',
      slide: 14,
    },
    {
      id: 'd1-c19',
      category: 'Kavram',
      front: 'İnkılâbın 2. aşaması (İhtilal) ve 3. aşamasının (Yeni Düzen Kurma) Fransa’daki somut karşılıkları nelerdir?',
      back: '2. aşamada (İhtilal) Fransa’da krallık rejimi ortadan kaldırılmış; 3. aşamada (Yeni Düzen Kurma) mutlak monarşinin yerine cumhuriyet ilan edilmiştir.',
      slide: 15,
    },
    {
      id: 'd1-c20',
      category: 'Karşılaştırma / Özellik',
      front: 'İnkılâbın gerçekleşip gerçekleşmediğini belirleyen asıl ölçüt hangi aşamadır?',
      back: 'Üçüncü aşama olan "Yeni Düzen Kurma"dır; bu aşama gerçekleştirilmezse yaşananlar inkılâp adını almaz, sadece ihtilal denir.',
      slide: 16,
    },
    {
      id: 'd1-c21',
      category: 'Kavram',
      front: 'İrtica kavramı inkılâp teorisinde ne anlama gelir?',
      back: 'İnkılâp ile oluşturulan yeni yapının eskisine göre geri bir nitelik taşıması, yani ilerleme yerine geriye dönüş olması durumudur.',
      slide: 16,
    },
    {
      id: 'd1-c22',
      category: 'Kavram',
      front: 'İhtilâl kelimesinin kökeni nedir ve neden 1789 Fransız olayı bir ihtilal değil inkılâptır?',
      back: 'Arapça "hal/halel" (yıkmak ve bozmak) kökünden gelir ve sadece yıkıcı evreyi ifade eder. 1789 Fransa’da yeni bir düzen de kurulduğu için olay ihtilal değil inkılâptır.',
      slide: 17,
    },
    {
      id: 'd1-c23',
      category: 'Karşılaştırma / Özellik',
      front: 'İhtilâl ile İnkılâp arasındaki kapsam ve sonuç farkı nedir?',
      back: 'İhtilâl inkılâptan dar kapsamlıdır ve hukuksal kurallara başvurmadan zorla mevcut siyasal yapıyı yıkma hareketidir; ihtilâl mevcut kurumların yıkılmasını, inkılâp ise yeniden kurumlaşmayı ifade eder.',
      slide: 17,
    },
    {
      id: 'd1-c24',
      category: 'Kavram',
      front: 'Islahat (Reform) kelimelerinin kökeni ve anlamı nedir?',
      back: 'Islahat Arapça "sulh" kökünden gelen ıslahın çoğuludur ("düzeltmeler, iyileştirmeler"). Reform ise "form" kökünden "yeniden şekillendirme, düzeltme, iyileştirme" demektir.',
      slide: 18,
    },
    {
      id: 'd1-c25',
      category: 'Karşılaştırma / Özellik',
      front: 'Islahat (Reform) hareketlerinin hız, yasallık ve zorlama açısından temel özellikleri nelerdir?',
      back: 'Mevcut düzen korunarak aksayan yönler düzeltilir; mevcut yasalara uygun gerçekleştirilir, yavaş seyreder ve zorlayıcı değildir.',
      slide: 19,
    },
    {
      id: 'd1-c26',
      category: 'Tarih / Olay',
      front: 'Avrupa tarihinde 15. yüzyılda hangi hareket "Reform" olarak adlandırılmıştır?',
      back: 'Katolik Kilisesi’nin dogmatik prensiplerine başkaldırma hareketi ve kilisenin yeniden düzenlenmesi "reform" olarak adlandırılmıştır.',
      slide: 19,
    },
    {
      id: 'd1-c27',
      category: 'Kavram',
      front: 'Evrim kavramı nedir ve dünya tarihinde hangi ülkeler buna örnek gösterilir?',
      back: 'Zorlama ve hızlı hareketlilik olmadan, dış etkenlere bağlı kalmaksızın, zamana ve koşullara bırakılmış çok yavaş ve aşamalı gelişimdir. Örnekler: İngiltere ve İskandinav ülkeleri.',
      slide: 20,
    },
    {
      id: 'd1-c28',
      category: 'Kavram',
      front: 'Darbe (Hükümet Darbesi) nedir ve devlet/toplum yapısında neyi değiştirir, neyi değiştirmez?',
      back: 'Devletin resmi organlarından birinin (Ordu, Emniyet vb.) iktidarı ele almasıdır. Sadece ülkeyi yönetenler değişir; toplumun sosyal, siyasi ve ekonomik yapısı değiştirilmez (Cumhuriyet darbelerinde anayasa değişiklikleri hariç).',
      slide: 21,
    },
    {
      id: 'd1-c29',
      category: 'Tarih / Olay',
      front: 'Osmanlı tarihinde hükümet darbesiyle sonuçlanan isyanlara hangi iki olay örnek verilir?',
      back: 'Patrona Halil İsyanı ve Kabakçı Mustafa İsyanı (padişahlar değişmiş, devletin genel düzeni değişmemiştir).',
      slide: 21,
    },
    {
      id: 'd1-c30',
      category: 'Kavram',
      front: 'İsyan – İhtilal – İnkılâp dönüşüm zinciri nasıl işler? (14 Temmuz 1789 örneğiyle)',
      back: 'Belirli grup/teşkilatın sınırlı amaçla devlete başkaldırması olan isyan başarılı olursa ihtilale, ihtilal başarılı olursa inkılâba dönüşür. 14 Temmuz 1789 Fransa olayı önce isyan, sonra ihtilal, ardından inkılâp olmuştur.',
      slide: 22,
    },
    {
      id: 'd1-c31',
      category: 'Kişi / Eser',
      front: 'Zulme karşı direnme (ihtilal) hakkını tanımayan (reddeden) filozoflar kimlerdir?',
      back: 'Jean Calvin, Immanuel Kant ve Thomas Hobbes.',
      slide: 23,
    },
    {
      id: 'd1-c32',
      category: 'Kişi / Eser',
      front: 'Zulme karşı direnme (ihtilal ya da inkılâp) hakkını savunan düşünürler kimlerdir?',
      back: 'Konfüçyüs, Epiküras, Saint Thomas d’Aquin ve John Locke.',
      slide: 23,
    },
    {
      id: 'd1-c33',
      category: 'Antlaşma / Kurum',
      front: '1948 BM İnsan Hakları Evrensel Beyannamesi önsözünde direnme hakkı nasıl yer almıştır?',
      back: '"İnsanın istibdat ve baskıya karşı son çare olarak ayaklanmaya mecbur kalmaması için insan haklarının bir hukuk rejimi ile korunmasının esaslı bir zaruret olması" biçiminde milletlerarası planda değerlendirilmiştir.',
      slide: 24,
    },
    {
      id: 'd1-c34',
      category: 'Kavram',
      front: 'Atatürk’e göre İnkılâp nasıl tanımlanır?',
      back: 'Mevcut müesseseleri zorla değiştirmek; Türk milletini son asırlarda geri bırakmış kurumları yıkarak yerlerine en yüksek medeni icaplara göre ilerlemeyi sağlayacak yeni müesseseleri koymaktır.',
      slide: 25,
    },
    {
      id: 'd1-c35',
      category: 'Karşılaştırma / Özellik',
      front: 'Atatürk’ün inkılâplar konusunda kesinlikle kabul etmediği üç tutum nedir ve Türk Devriminin amacı nedir?',
      back: 'Geriye dönüş, ödün verme ve uzlaşmayla orta yol izlemeyi kabul etmez. Dinsel kurallara dayalı düzeni kaldırıp yerine Batı’da gelişen pozitif düşünceyi, bilime ve insan aklına dayalı düzeni kurmayı amaçlar.',
      slide: 26,
    },
    {
      id: 'd1-c36',
      category: 'Karşılaştırma / Özellik',
      front: 'Türk Devriminden önce gerçekleşen iki evrensel devrim hangileridir ve sınıfsal nitelikleri nelerdir?',
      back: '1789 Fransız Devrimi (burjuva devrimi) ve 1917 Rus Devrimi (işçi sınıfı devrimi — II. Dünya Savaşı’nda Sovyet denetimine giren ülkelerde benzer yönetimler kurdurmuştur).',
      slide: 27,
    },
    {
      id: 'd1-c37',
      category: 'Tarih / Olay',
      front: 'Atatürk ilk örgütü olan "Vatan ve Hürriyet Cemiyeti"ni ne zaman, nerede kurdu ve şubesini nerede açtı?',
      back: '1905 yılında Suriye’de göreve başladığı zaman kurdu; 1906 yılında ise Selanik şubesini açtı.',
      slide: 28,
    },
    {
      id: 'd1-c38',
      category: 'Kişi / Eser',
      front: 'Atatürk askeri okuldayken ülke sorunlarına yönelmesini ve yeni fikirler geliştirmesini hangi okumalar sağladı?',
      back: 'Yeni Osmanlıların yazdıklarını ve Fransız İnkılâbı ile ilgili yazılmış kitapları okuyarak fikirlerini oluşturdu.',
      slide: 28,
    },
    {
      id: 'd1-c39',
      category: 'Tarih / Olay',
      front: 'Atatürk’ün 1906 Selanik konuşması stratejisi bakımından neyi kanıtlar?',
      back: 'İstibdada karşı ihtilal, milleti hâkim kılma ve devrim/ulusal egemenlik kavramlarına değinmesi, Atatürk’ün hedefini daha 1906 yılında belirlediğini kanıtlar.',
      slide: 29,
    },
    {
      id: 'd1-c40',
      category: 'Kavram',
      front: 'Atatürk’ün Nutuk’ta strateji ve zamanlama için kullandığı "dolambaçlı yollar" sözü neyi anlatır?',
      back: '"Hedefe dolambaçlı yollardan gitmek cephe hücumundan sağlamdır" — kararları ilk günden açıklamak yerine evrelere ayırıp ulusun duygu ve düşüncelerini hazırlayarak adım adım ilerlemeyi anlatır.',
      slide: 30,
    },
    {
      id: 'd1-c41',
      category: 'Kavram',
      front: 'Türk Devrimini doğuran Nesnel Koşullar ve Öznel Koşullar nelerdir?',
      back: 'Nesnel Koşullar (Osmanlı’yı çöküntüye götüren nedenler): Ekonomik, Siyasal ve Toplumsal Sorunlar. Öznel Koşullar: Lider, Örgüt ve İdeoloji.',
      slide: 31,
    },
    {
      id: 'd1-c42',
      category: 'Kavram',
      front: 'Devrimci lider ile nesnel koşullar arasındaki ilişki nedir?',
      back: 'Hiçbir lider nesnel koşullar olmadan tek başına devrim yapamaz, ancak lidersiz devrim de düşünülemez; devrimci lider kendini yaratan koşulları doğru değerlendirip yeniden biçimlendiren kişidir.',
      slide: 32,
    },
    {
      id: 'd1-c43',
      category: 'Kişi / Eser',
      front: 'Atatürk’ün Almanca çevirileriyle birlikte yazdığı 14 kitabın ilk yedisi (Slayt 33) hangileridir?',
      back: 'Atatürk’ün Hatıra Defteri, Vatandaş İçin Medeni Bilgiler, Geometri Kitabı, Arıburnu Muharebeleri Raporu, Karlsbad Hatıraları, Nutuk (Söylev) ve Atatürk’ten Mektuplar.',
      slide: 33,
    },
    {
      id: 'd1-c44',
      category: 'Kişi / Eser',
      front: 'Atatürk’ün askeri ve hitabet alanındaki diğer yedi kitabı (Slayt 34 — Almanca çeviriler dahil) hangileridir?',
      back: 'Atatürk’ün Söylev ve Demeçleri, Bölüğün Muharebe Eğitimi (Alm. Çeviri), Takımın Muharebe Eğitimi (Alm. Çeviri), Zabit ve Kumandan ile Hasbihal, Cumalı Ordugahı, Taktik Tatbikat Gezisi, Taktik Meselelerinin Çözümü ve Emirlerin Yazılmasına İlişkin Öğütler.',
      slide: 34,
    },
    {
      id: 'd1-c45',
      category: 'Antlaşma / Kurum',
      front: 'Atatürk’ün devrim stratejisinde güç aldığı beş temel örgüt hangileridir?',
      back: 'Vatan ve Hürriyet Cemiyeti, İttihat ve Terakki Cemiyeti, Müdafaa-i Hukuk Cemiyetleri, Türkiye Büyük Millet Meclisi (TBMM) ve Cumhuriyet Halk Fırkası.',
      slide: 35,
    },
    {
      id: 'd1-c46',
      category: 'Karşılaştırma / Özellik',
      front: 'Atatürkçülük ideolojisinin "bütünsel" olmasının göstergesi olarak hangi kurumlar eşdeğer önemde verilir?',
      back: 'Sivas–Erzurum demiryolu, Nazilli Bez Fabrikası ve Eskişehir Şeker Fabrikası kadar İstanbul Üniversitesi’nin kuruluşu ve Konservatuarın açılması da aynı derecede önemlidir.',
      slide: 36,
    },
    {
      id: 'd1-c47',
      category: 'Karşılaştırma / Özellik',
      front: 'Fikri hazırlık ve uygulayıcı kadro açısından Türk Devrimi ile Fransız Devrimi arasındaki fark nedir?',
      back: 'Fransa’da devrimi hazırlayan Montesquieu, Rousseau, Diderot ve Voltaire ihtilali görmemiştir; Türk Devriminde ise uzun bir fikri hazırlık aşaması yoktur, hazırlayanlarla başarıya ulaştıranlar aynı kişilerdir ve tek bir önder vardır.',
      slide: 37,
    },
    {
      id: 'd1-c48',
      category: 'Antlaşma / Kurum',
      front: '1921 Anayasası (Teşkilat-ı Esasiye Kanunu) 1. maddesi Türk Devriminin hangi özelliğini kanıtlar?',
      back: '"Hakimiyet bila kaydü şart milletindir" hükmü, Fransa ve Rusya’dan farklı olarak Türkiye’de Ulusal Bağımsızlık mücadelesi sürerken aynı anda Ulusal Egemenlik adımlarının da atıldığını kanıtlar.',
      slide: 38,
    },
    {
      id: 'd1-c49',
      category: 'Karşılaştırma / Özellik',
      front: 'Atatürk’ün "Biz bize benzeriz" sözü ve Batı’nın "çirkin yüzü" eleştirisi neyi anlatır?',
      back: 'Türk Devrimi özgündür; Batı’nın bilimine, sanatına, teknolojisine ve özgürlüğüne saygı duyar ancak Batı’nın emperyalizmine ve militarizmine kesinlikle karşı çıkar.',
      slide: 39,
    },
    {
      id: 'd1-c50',
      category: 'Karşılaştırma / Özellik',
      front: 'Türk Devrimi neden "en az zorlama unsuru içeren devrim" olarak tanımlanır?',
      back: 'Fransa’da Kral giyotinle idam edilmiş, Rusya’da Çar II. Nikolay Romanov ailesiyle kurşuna dizilmiştir. Türkiye’de ise Saltanat kaldırılınca Osmanlı Hanedanı üyeleri zulüm ve saygısızlık görmeden tren garından yurtdışına uğurlanmıştır.',
      slide: 40,
    },
    {
      id: 'd1-c51',
      category: 'Kavram',
      front: 'Atatürk’e göre "İstiklal-i Tamme" (Tam Bağımsızlık) hangi altı alanı kapsar ve Osmanlı’da bunu ne zedelemiştir?',
      back: 'Askeri, mali, idari, adli, siyasi ve kültürel tüm alanları kapsar. Osmanlı’da ekonomik, adli ve idari kapitülasyonlar yabancılara dokunulmazlık (vergi vermeme, tutuklanamama, sınır dışı edilememe) tanıyarak devleti sömürge haline getirmiştir.',
      slide: 42,
    },
    {
      id: 'd1-c52',
      category: 'Tarih / Olay',
      front: '1913’te 8 Şubat anlaşmasıyla Doğu Anadolu’ya atanan iki Avrupalı "Genel Vali" kimdi ve hangi bölgelere atanmışlardı?',
      back: 'Maaşları Osmanlı Devleti’nden ödenmek üzere Van–Bitlis–Diyarbakır bölgesine Norveçli Binbaşı Hoff, Trabzon–Erzurum–Sivas bölgesine Hollandalı Westenek atanmıştı.',
      slide: 43,
    },
    {
      id: 'd1-c53',
      category: 'Karşılaştırma / Özellik',
      front: 'Türk Devriminin "dogmacı olmayışı ve kalıplaşmayı reddetmesi" ne anlama gelir?',
      back: 'Ulusal, laik, pozitif düşünceye dayalı, bilimsel ve akılcı olması; toplum ve devlet yaşamını her çağda değişmez sayılan kurallarla sınırlandıran ideolojileri benimsememesidir.',
      slide: 44,
    },
    {
      id: 'd1-c54',
      category: 'Kişi / Eser',
      front: 'Hindistan lideri Nehru ve Tunus lideri Habib Burgiba Türk Devrimini nasıl değerlendirmiştir?',
      back: 'Nehru, Atatürk’ü "Doğu’da modern çağın yapıcılarından biri" olarak tanımlamış; Habib Burgiba ise "Sakarya Zaferi yirmi yaşımın en büyük anısı olmuştur" sözüyle ulusunu seferber etmede ondan ilham aldığını belirtmiştir.',
      slide: 46,
    },
    {
      id: 'd1-c55',
      category: 'Kişi / Eser',
      front: 'Afgan Kralı Amanullah Han (1928) ve Mısır delegesi Sitti Şaravi (1935) Türk Devrimiyle nasıl ilişkilidir?',
      back: 'Amanullah Han 1928 Türkiye ziyareti sonrası Afganistan’da reformlara girişmiş ama gerici ayaklanmayla ülkesini terk etmek zorunda kalmıştır. Sitti Şaravi 1935 Uluslararası Kadınlar Birliği Kongresi’nde Atatürk’ü bütün Şark’ın atası anlamında "Ataşark" diye andıklarını söylemiştir.',
      slide: 47,
    },
    {
      id: 'd1-c56',
      category: 'Karşılaştırma / Özellik',
      front: 'Türk Devrimi nasıl bir "kültür ve uygarlık değiştirme" olayıdır?',
      back: 'Teokratik devletten ulusal devlete, ümmetten ulusa, ortaçağ tipi tarım toplumundan demokratik-sivil-sanayi-modern topluma, doğulu toplumdan çağdaş batılı topluma ve sömürgeden tam bağımsız ülkeye dönüşüm olayıdır.',
      slide: 48,
    },
    {
      id: 'd1-c57',
      category: 'Kavram',
      front: 'Dersin sonunda devletin bugünü ve yarınını anlamak için "kılavuz ve kutup yıldızı" olarak tanımlanan kavram nedir?',
      back: 'Milli Mücadele felsefesi — bize ne yapıp ne yapmamamız gerektiğini gösteren kılavuz ve kutup yıldızıdır.',
      slide: 49,
    },
  ],
  questions: [
    {
      id: 'd1-q1',
      question:
        'Atatürk’ün "Biz büyük bir inkılâp yaptık memleketi bir çağdan alıp başka bir çağa götürdük..." sözünde özellikle dikkat çektiği tehlike veya uyarı aşağıdakilerden hangisidir?',
      options: [
        'Yıkılan çok eski müesseselerin binlerce taraftarının bulunduğu ve fırsat beklediklerinin unutulmaması gerektiği',
        'İnkılâpların yalnızca ekonomik yatırımlarla sınırlandırılmasının zorunlu olduğu',
        'Yabancı devletlerin kültürel yardımlarının koşulsuz kabul edilmesi gerektiği',
        'Eski kurumların hiç değiştirilmeden yavaş bir evrime bırakılması gerektiği',
        'İnkılâp hareketlerinin sadece başkentte uygulanıp taşraya yayılmaması gerektiği',
      ],
      correctIndex: 0,
      explanation:
        'Slayt 2’deki sözünde Atatürk, çok eski müesseselerin yıkıldığını belirterek "bunların binlerce taraftarı vardır, fırsat beklediklerini unutmamak lazım" uyarısında bulunur.',
      slide: 2,
    },
    {
      id: 'd1-q2',
      question:
        'Atatürk İlkeleri ve İnkılâp Tarihi (ATA 121) dersinin temel inceleme alanı aşağıdakilerden hangisidir?',
      options: [
        'Yalnızca Osmanlı Devleti’nin kuruluş dönemi askeri seferleri',
        '20. yüzyılda Türk ulusunun geçirdiği sosyal, siyasal, ekonomik ve kültürel değişimler ve günümüze etkisi',
        'Yalnızca Avrupa devletlerinin 19. yüzyıl sömürgecilik tarihi',
        'Orta Çağ İslam dünyasındaki medrese eğitim sisteminin yapısı',
        '17. yüzyıldan 18. yüzyıla kadar Osmanlı tımar sisteminin gelişimi',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 3’te belirtildiği üzere ATA 121 dersi, 20. yüzyılda Türk ulusunun sosyal, siyasal, ekonomik ve kültürel değişimlerini ve günümüze olan etkisini ele alır.',
      slide: 3,
    },
    {
      id: 'd1-q3',
      question:
        'Türk İnkılâp Tarihi çerçevesinde kurulan yeni Türk devletinin siyasi rejimi, Türk İnkılâbının amacına ve temel ilkelerine uygun olarak hangi çatı kavram altında devlet hayatına yön vermektedir?',
      options: [
        'Meşrutiyetçilik ve Saltanatçılık',
        'Ümmetçilik ve Teokrasi',
        'Mandacılık ve Himayecilik',
        'Merkantilizm ve Lonca Sistemi',
        'Atatürkçülük / Kemalizm (Atatürkçü Düşünce Sistemi)',
      ],
      correctIndex: 4,
      explanation:
        'Slayt 4’e göre yeni devletin siyasi rejimi Atatürkçülük / Kemalizm veya Atatürkçü Düşünce Sistemi çatısı altında devlet hayatına yön verir.',
      slide: 4,
    },
    {
      id: 'd1-q4',
      question:
        'Mustafa Kemal Atatürk’ün Türk İnkılâbını gerçekleştirdiği üç aşama hangi seçenekte doğru sırayla verilmiştir?',
      options: [
        'Saltanatın kaldırılması – Kurtuluş Savaşı – Cumhuriyetin ilanı',
        'İnkılap hareketleri – Lozan Antlaşması – Kurtuluş Savaşı',
        'Kurtuluş Savaşı ile tam bağımsızlık – Saltanatın kaldırılması, Lozan ve Cumhuriyet – Devletin devamlılığını sağlayacak inkılaplar',
        'Cumhuriyetin ilanı – Misak-ı Millî’nin kabulü – 1921 Anayasası',
        'Lozan Barış Antlaşması – Mondros Mütarekesi – Vatan ve Hürriyet Cemiyeti',
      ],
      correctIndex: 2,
      explanation:
        'Slayt 5’e göre 1. aşama Kurtuluş Savaşı (1919–1922), 2. aşama saltanatın kaldırılması–Lozan–Cumhuriyetin ilanı, 3. aşama ise devletin devamlılığını sağlayacak inkılap hareketleridir.',
      slide: 5,
    },
    {
      id: 'd1-q5',
      question:
        '"Doğu Sorunu (Şark Meselesi)" ifadesi ilk kez hangi olay sırasında ve kim tarafından ortaya atılmıştır?',
      options: [
        '1856 Paris Kongresi’nde III. Napolyon tarafından',
        '1878 Berlin Kongresi’nde Otto von Bismarck tarafından',
        '1919 Paris Barış Konferansı’nda Woodrow Wilson tarafından',
        '1815 Viyana Kongresi’nde Rus Çarı Aleksandr tarafından',
        '1789 Fransız İhtilali sırasında Montesquieu tarafından',
      ],
      correctIndex: 3,
      explanation:
        'Slayt 6’ya göre Doğu Sorunu, 1815 Viyana Kongresi sırasında Rus Çarı Aleksandr tarafından ortaya atılmıştır.',
      slide: 6,
    },
    {
      id: 'd1-q6',
      question:
        'Doğu Sorunu (Şark Meselesi) kavramının 19. yüzyılın başından yüzyılın sonuna doğru geçirdiği anlam değişimi aşağıdakilerden hangisidir?',
      options: [
        'Yüzyıl başında Osmanlı’nın Avrupa topraklarının paylaşılmasını ifade ederken, yüzyıl sonunda bütün topraklarının paylaşılıp Türklerin Orta Asya’ya gönderilmesi anlamına dönüşmüştür.',
        'Yüzyıl başında ticari ayrıcalıkları ifade ederken, yüzyıl sonunda yalnızca Balkan uluslarının özerkliğiyle sınırlanmıştır.',
        'Başlangıçta Rusya’nın topraklarının paylaşılmasını ifade ederken, sonradan Avrupa barış ittifakına dönüşmüştür.',
        'Yüzyıl başında Arap vilayetlerinin bağımsızlığını, yüzyıl sonunda Osmanlı’nın güçlenmesini ifade etmiştir.',
        '19. yüzyıl boyunca hiçbir anlam değişimine uğramadan yalnızca Boğazlar sorununu anlatmıştır.',
      ],
      correctIndex: 0,
      explanation:
        'Slayt 6’da Şark Meselesi’nin 19. yy başında Avrupa’nın hasta adamının Avrupa topraklarının paylaşılması, yüzyıl sonunda ise tüm topraklarının paylaşılıp Türklerin Orta Asya’ya gönderilmesi anlamında kullanıldığı belirtilir.',
      slide: 6,
    },
    {
      id: 'd1-q7',
      question:
        '1917 Rus İhtilali ile Rusya savaştan çekildikten sonra İngiltere ve Fransa’nın Şark Sorunu’nu çözme girişimleri ve Türk ulusunun buna karşılığı hakkında aşağıdakilerden hangisi doğrudur?',
      options: [
        'İngiltere ve Fransa Osmanlı toprak bütünlüğünü koruma kararı almıştır.',
        'Rusya çekilince Anadolu üzerindeki tüm gizli paylaşım planları iptal edilmiştir.',
        'Türk ulusu manda yönetimini kabul ederek barış anlaşmasını beklemiştir.',
        'İttihat ve Terakki yönetimi I. Dünya Savaşı’nı tek başına kazanmıştır.',
        'Arap coğrafyası manda sistemiyle paylaşılıp Anadolu yağmalanırken, Türk ulusu Atatürk önderliğinde emperyalizmi yenerek mazlum milletlere örnek olmuş ve çağdaş Cumhuriyet’i kurmuştur.',
      ],
      correctIndex: 4,
      explanation:
        'Slayt 7’ye göre Rusya’nın çekilmesiyle İngiltere ve Fransa Arap yerlerini mandayla paylaşıp Anadolu’yu yağmalamış; Türk ulusu Milli Mücadele ile emperyalizmi yenerek mazlum milletlere örnek olmuş ve çağdaş Cumhuriyet’i kurmuştur.',
      slide: 7,
    },
    {
      id: 'd1-q8',
      question:
        '1912–1922 arasındaki on yıllık savaş döneminde Türk ulusunun kaybıyla ilgili olarak ders notlarında yer alan bilgi hangisidir?',
      options: [
        'Sadece Balkan Savaşları’nda 500 bin kişi kaybedilmiştir.',
        'I. Dünya Savaşı ve Milli Mücadele’de 3 milyon insan kaybedilmiş ve eğitilmiş kadroların büyük kısmı yok olmuştur.',
        'Türkiye savaştan ekonomik ve demografik açıdan büyüme ile çıkmıştır.',
        'Eğitimli kadrolar savaş dışı tutulduğu için entelektüel kayıp yaşanmamıştır.',
        'Kayıpların tamamı yalnızca 1919–1922 yılları arasında verilmiştir.',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 8’de 1912–1922 arası 10 yıl savaşan Türk ulusunun özellikle I. Dünya Savaşı ve Milli Mücadele’de 3 milyon insanını ve eğitilmiş insan kadrolarının büyük kısmını kaybettiği belirtilir.',
      slide: 8,
    },
    {
      id: 'd1-q9',
      question:
        '4 Mart 1934’te İstanbul Üniversitesi’nde ve 20 Mart 1934’te Ankara Hukuk Mektebi’nde ilk İnkılâp Tarihi derslerini veren isimler hangi seçenekte doğru verilmiştir?',
      options: [
        'Yusuf Hikmet Bayur (İstanbul Üniversitesi) — İsmet İnönü (Ankara Hukuk Mektebi)',
        'İsmet İnönü (İstanbul Üniversitesi) — Yusuf Hikmet Bayur (Ankara Hukuk Mektebi)',
        'Recep Peker (İstanbul Üniversitesi) — Mahmut Esat Bozkurt (Ankara Hukuk Mektebi)',
        'Yusuf Kemal Tengirşek (İstanbul Üniversitesi) — Recep Peker (Ankara Hukuk Mektebi)',
        'Mahmut Esat Bozkurt (İstanbul Üniversitesi) — Mustafa Kemal Atatürk (Ankara Hukuk Mektebi)',
      ],
      correctIndex: 0,
      explanation:
        'Slayt 9’a göre 4 Mart 1934’te İstanbul Üniversitesi’nde ilk dersi Milli Eğitim Bakanı Yusuf Hikmet Bayur, 20 Mart 1934’te Ankara Hukuk Mektebi’nde ise Başbakan İsmet İnönü vermiştir.',
      slide: 9,
    },
    {
      id: 'd1-q10',
      question:
        '1934 yılında dört ana bölüme ayrılan Türk İnkılâp Tarihi dersinin bölüm ve ders veren hoca eşleştirmelerinden hangisi yanlıştır?',
      options: [
        'Siyasi Tarih — Yusuf Hikmet Bayur',
        'Hukuk Konuları — Mahmut Esat Bozkurt',
        'Ekonomi Konuları — Yusuf Kemal Tengirşek',
        'Askeri Konular — Recep Peker',
        'Hukuk Konuları — Recep Peker',
      ],
      correctIndex: 4,
      explanation:
        'Slayt 9’a göre siyasi tarihi Yusuf Hikmet Bayur, hukuku Mahmut Esat Bozkurt, ekonomiyi Yusuf Kemal Tengirşek, askeri konuları ise CHF Genel Sekreteri Recep Peker vermiştir.',
      slide: 9,
    },
    {
      id: 'd1-q11',
      question:
        'Dil ve Tarih-Coğrafya Fakültesi’ne (DTCF) bağlı "Türk İnkılâp Tarihi Enstitüsü" hangi yılda kurulmuştur?',
      options: ['1934', '1935', '1942', '1968', '1980'],
      correctIndex: 2,
      explanation:
        'Slayt 9’da DTCF’ye bağlı Türk İnkılâp Tarihi Enstitüsü’nün 1942 yılında kurulduğu belirtilmektedir.',
      slide: 9,
    },
    {
      id: 'd1-q12',
      question:
        'Başlangıçta "İnkılâp Tarihi ve Türkiye Cumhuriyeti Rejimi" adıyla zorunlu kılınan dersin adı, sırasıyla hangi tarihlerde "Türk Devrim Tarihi" ve "Atatürk İlkeleri ve İnkılâp Tarihi" olmuştur?',
      options: [
        '4 Mart 1934 — 9 Mart 1935',
        '1942 — 20 Mart 1968',
        '20 Mart 1934 — 1942',
        '20 Mart 1968 — 12 Eylül 1980 İhtilali sonrası',
        '9 Mart 1935 — 20 Mart 1968',
      ],
      correctIndex: 3,
      explanation:
        'Slayt 10’a göre dersin adı 20 Mart 1968’de Enstitü kararıyla "Türk Devrim Tarihi", 12 Eylül 1980 İhtilali sonrasında ise "Atatürk İlkeleri ve İnkılâp Tarihi" yapılmıştır.',
      slide: 10,
    },
    {
      id: 'd1-q13',
      question:
        'Dil İnkılabından sonra "devrim" kelimesi Atatürk tarafından ilk kez hangi tarihte kullanılmaya başlanmıştır?',
      options: [
        '4 Mart 1934',
        '9 Mart 1935',
        '20 Mart 1934',
        '20 Mart 1968',
        '1 Kasım 1928',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 12’ye göre dil inkılabından sonra "devrim" kelimesi 9 Mart 1935’te Atatürk tarafından kullanılmaya başlanmıştır.',
      slide: 12,
    },
    {
      id: 'd1-q14',
      question:
        '"İnkılâp" sözcüğünün Arapça kökeni ile Batı dillerindeki karşılığı olan "revolution" sözcüğünün Latince kökeni hangi seçenekte doğru verilmiştir?',
      options: [
        'Hal/halel (yıkmak) — Form (şekillendirmek)',
        'Sulh (iyileştirmek) — İnterregnum (ara dönem)',
        'Kalp (değişme/dönüşme) — İnsurrectio (başkaldırı)',
        'Kalp (değişme/dönüşme) — Revolvere (düşmek, yuvarlanmak)',
        'İsyan (ayaklanma) — Reformatio (yenileme)',
      ],
      correctIndex: 3,
      explanation:
        'Slayt 12’ye göre İnkılâp Arapça "kalp" kelimesinden (değişme, bir halden başka bir hale dönüşme), Revolution ise Latince "revolvere" (düşmek, yuvarlanmak) kökünden türemiştir.',
      slide: 12,
    },
    {
      id: 'd1-q15',
      question:
        'Siyasal ve toplumsal düzen değişikliği anlamı dışında "inkılâp" sözcüğünün yalnızca "büyük gelişme" anlamında kullanıldığı örnekler aşağıdakilerden hangisidir?',
      options: [
        'Sanayi inkılâbı, bilim inkılâbı, kültür inkılâbı',
        'Patrona Halil ve Kabakçı Mustafa olayları',
        'Hükümet darbesi ve askeri müdahale',
        'Meşrutiyet ilanı ve ateşkes imzalanması',
        'Kapitülasyon ve manda anlaşmaları',
      ],
      correctIndex: 0,
      explanation:
        'Slayt 13’te belirtildiği gibi Sanayi inkılâbı, bilim inkılâbı ve kültür inkılâbı gibi kullanımlarda inkılâp sözcüğü siyasal tanım dışında sadece "gelişme" yerine kullanılmaktadır.',
      slide: 13,
    },
    {
      id: 'd1-q16',
      question:
        'İnkılâbın birinci aşaması olan "Fikri Hazırlık" aşamasının Fransız İnkılâbı’ndaki öncü düşünürleri arasında aşağıdakilerden hangisi ders notlarında sayılmıştır?',
      options: [
        'Thomas Hobbes, Jean Calvin ve Immanuel Kant',
        'Konfüçyüs, Epiküras ve John Locke',
        'Metternich, Bismarck ve Çar Aleksandr',
        'Nehru, Habib Burgiba ve Amanullah Han',
        'Voltaire, Diderot ve Jean-Jacques Rousseau',
      ],
      correctIndex: 4,
      explanation:
        'Slayt 14’e göre Fransız İnkılâbı’nda Voltaire, Diderot ve Jean-Jacques Rousseau’nun öncülüğünü yaptığı dönem fikri hazırlık aşamasıdır.',
      slide: 14,
    },
    {
      id: 'd1-q17',
      question:
        'İnkılâbın aşamaları arasındaki ilişkiye dair aşağıdaki ifadelerden hangisi doğrudur?',
      options: [
        'Fikri hazırlık aşaması her zaman birkaç gün içinde tamamlanır.',
        'İnkılâp ihtilal aşamasından geçmeden de her zaman tamamlanabilir.',
        'İhtilal, inkılâbın ön şartıdır; her ihtilal inkılâba ulaşamaz ancak çağa damgasını vuran tüm inkılâplar bir ihtilal aşamasından geçer.',
        'Yeni düzen kurma aşaması Fransa’da krallığın korunmasıyla tamamlanmıştır.',
        'Yeni düzen kurma aşaması muhalefet hiç çıkmadığı için daima çok kısa sürer.',
      ],
      correctIndex: 2,
      explanation:
        'Slayt 15’e göre ihtilal inkılâbın ön şartıdır; her ihtilal inkılâba ulaşamaz ama çağa damga vuran tüm inkılâplar bir ihtilal aşamasından geçer.',
      slide: 15,
    },
    {
      id: 'd1-q18',
      question:
        'İnkılâbın gerçekleşip gerçekleşmediğini belirleyen asıl ölçüt aşaması aşağıdakilerden hangisidir?',
      options: [
        'Fikri hazırlık aşamasının başlaması',
        'Mevcut rejime karşı bildiri yayımlanması',
        'İhtilal (yıkım) aşamasının başlaması',
        'Yıkılan düzenin yerine daha ileri yeni bir düzenin kurulması (3. aşama)',
        'Yabancı düşünürlerin eserlerinin çevrilmesi',
      ],
      correctIndex: 3,
      explanation:
        'Slayt 16’da belirtildiği gibi inkılâbın ölçütü üçüncü aşama olan "yeni düzen kurma"dır; bu aşama gerçekleşmezse olay yalnızca ihtilal olarak kalır.',
      slide: 16,
    },
    {
      id: 'd1-q19',
      question:
        'İnkılâp sonucu oluşturulan yeni yapının eskisine göre geri bir nitelik taşıması durumunda aşağıdakilerden hangisi gerçekleşmiş olur?',
      options: [
        'Evrim',
        'İrtica (Geriye dönüş)',
        'Islahat (Reform)',
        'Burjuva devrimi',
        'Parlamenter demokrasi',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 16’ya göre inkılâp eskisine göre geri bir nitelik taşıyorsa bu ilerleme değil geriye dönüş (irtica) olur.',
      slide: 16,
    },
    {
      id: 'd1-q20',
      question:
        '"İhtilâl" kavramıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
      options: [
        'Altüst olan düzenin yerine mutlaka yeni bir düzenin oluşturulmasını da kapsar.',
        'Arapça "hal/halel" kökünden türeyip "yıkmak ve bozmak" anlamına gelir.',
        'Hukuksal kurallara başvurmaksızın zor kullanarak yapılan geniş bir halk hareketidir.',
        'İnkılâptan dar kapsamlıdır ve hareketin sadece yıkıcı kısmını oluşturur.',
        '1789 Fransız olayı yeni bir düzen de kurduğu için bir ihtilal değil, inkılâptır.',
      ],
      correctIndex: 0,
      explanation:
        'Slayt 17’ye göre ihtilal altüst olan düzenin yerine yeni bir düzenin oluşturulmasını kapsamaz; sadece mevcut kurumların yıkılmasını ifade eder, yeniden kurumlaşma inkılâptır.',
      slide: 17,
    },
    {
      id: 'd1-q21',
      question:
        '"Mevcut düzen korunurken, bu düzenin aksayan yönlerini yasalara uygun biçimde, yavaş ve zorlayıcı olmadan düzeltme" hangi kavramı tanımlar?',
      options: ['İhtilâl', 'Darbe', 'Islahat (Reform)', 'İsyan', 'İnkılâp'],
      correctIndex: 2,
      explanation:
        'Slayt 18–19’a göre ıslahat (reform), mevcut düzen korunarak aksayan yönlerin yasalara uygun, yavaş ve zorlayıcı olmadan iyileştirilmesidir.',
      slide: 18,
    },
    {
      id: 'd1-q22',
      question:
        'Avrupa’da 15. yüzyılda gerçekleşen hangi tarihsel olay "Reform" kavramıyla adlandırılmıştır?',
      options: [
        'Fransa’da mutlak monarşinin yıkılıp cumhuriyetin ilanı',
        'Rusya’da Çarlık yönetiminin işçi sınıfı tarafından devrilmesi',
        'Viyana Kongresi’nde Doğu Sorunu’nun ortaya atılması',
        'İngiltere’de sanayi makinelerinin icat edilmesi',
        'Katolik Kilisesi’nin dogmatik prensiplerine başkaldırma hareketi ve kilisenin yeniden düzenlenmesi',
      ],
      correctIndex: 4,
      explanation:
        'Slayt 19’a göre Avrupa’da 15. yüzyılda Katolik Kilisesi’nin dogmatik prensiplerine başkaldırma ve kilisenin yeniden düzenlenmesi hareketi "reform" olarak adlandırılmıştır.',
      slide: 19,
    },
    {
      id: 'd1-q23',
      question:
        'Ders notlarında "evrimleşerek günümüze ulaşan ülkeler" arasında aşağıdakilerden hangileri örnek gösterilmiştir?',
      options: [
        'Fransa ve Rusya',
        'İngiltere ve İskandinav ülkeleri',
        'Almanya ve İtalya',
        'İspanya ve Portekiz',
        'Osmanlı ve Avusturya-Macaristan',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 20’de evrimleşerek günümüze ulaşan ülkeler arasında İngiltere ve İskandinav ülkeleri örnek verilmektedir.',
      slide: 20,
    },
    {
      id: 'd1-q24',
      question:
        'Aşağıdakilerden hangisi "Darbe" kavramının özelliklerinden biri değildir?',
      options: [
        'Devletin resmi organlarından birinin (Ordu, Emniyet vb.) iktidarı ele almasıdır.',
        'Hükümet darbesi ile yalnızca ülkeyi yönetenler değişir.',
        'Başarılı olursa darbeciler meşruluk kazanır, başarısız olursa cezalandırılırlar.',
        'Toplumun sosyal, siyasi ve ekonomik yapısını kökten dönüştürür.',
        'Cumhuriyet döneminde gerçekleşen darbelerde anayasa değişiklikleri hariç devlet ve toplum yapısı değişmemiştir.',
      ],
      correctIndex: 3,
      explanation:
        'Slayt 21’e göre darbelerde sadece iktidarı yönetenler değişir; toplumun sosyal, siyasi ve ekonomik yapısı değiştirilmez.',
      slide: 21,
    },
    {
      id: 'd1-q25',
      question:
        'Osmanlı tarihinde hükümet darbesiyle sonuçlanarak padişah değişikliğine yol açan ancak devletin genel düzeninde değişiklik yapmayan isyanlar hangi seçenekte birlikte verilmiştir?',
      options: [
        'Patrona Halil İsyanı ve Kabakçı Mustafa İsyanı',
        'Şeyh Bedreddin İsyanı ve Celali İsyanları',
        '1908 Hürriyet İlanı ve 1913 Bâb-ı Âli Baskını',
        'Edirne Vakası ve Kuleli Vakası',
        '31 Mart Vakası ve Menemen Olayı',
      ],
      correctIndex: 0,
      explanation:
        'Slayt 21’de Osmanlı tarihinde hükümet darbesi ile sonuçlanan isyanlara örnek olarak Patrona Halil İsyanı ve Kabakçı Mustafa İsyanı gösterilmiştir.',
      slide: 21,
    },
    {
      id: 'd1-q26',
      question:
        '14 Temmuz 1789’da Fransa’da meydana gelen olay, ders notlarındaki kavramsal dönüşüm zincirine göre hangi sırayı izlemiştir?',
      options: [
        'Evrim → Reform → Darbe',
        'Darbe → İsyan → İrtica',
        'İsyan → İhtilal → İnkılâp',
        'İnkılâp → İhtilal → Islahat',
        'Reform → İhtilal → Evrim',
      ],
      correctIndex: 2,
      explanation:
        'Slayt 22’ye göre isyan başarılı olursa ihtilale, ihtilal başarılı olursa inkılâba dönüşür; 14 Temmuz 1789’da Fransa’daki olay önce isyan olmuş, sonra ihtilal gerçekleşmiş, ihtilalin başarısı da inkılâbı meydana getirmiştir.',
      slide: 22,
    },
    {
      id: 'd1-q27',
      question:
        'Zulme karşı direnme (ihtilal) hakkını tanımayan düşünürler hangi seçenekte doğru olarak bir arada verilmiştir?',
      options: [
        'John Locke – Konfüçyüs – Epiküras',
        'Jean Calvin – Kant – Hobbes',
        'Saint Thomas d’Aquin – Voltaire – Locke',
        'Rousseau – Diderot – Montesquieu',
        'Konfüçyüs – Hobbes – Saint Thomas d’Aquin',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 23’e göre Jean Calvin, Kant ve Hobbes zulme karşı direnme hakkını tanımamakta; Konfüçyüs, Epiküras, Saint Thomas d’Aquin ve John Locke ise savunmaktadır.',
      slide: 23,
    },
    {
      id: 'd1-q28',
      question:
        'Aşağıdaki düşünürlerden hangisi zulme karşı direnme (ihtilal ya da inkılâp gerçekleştirme) hakkını savunanlar arasında yer alır?',
      options: [
        'Thomas Hobbes',
        'Jean Calvin',
        'Immanuel Kant',
        'Klemens von Metternich',
        'John Locke',
      ],
      correctIndex: 4,
      explanation:
        'Slayt 23’e göre Konfüçyüs, Epiküras, Saint Thomas d’Aquin ve John Locke zulme karşı direnme hakkını savunan düşünürlerdir.',
      slide: 23,
    },
    {
      id: 'd1-q29',
      question:
        '1948 yılında Birleşmiş Milletler Genel Kurulu tarafından kabul edilen hangi belgenin önsözünde zulme karşı direnme hakkının önemi vurgulanmıştır?',
      options: [
        'Magna Carta',
        'Viyana Kongresi Nihai Senedi',
        'Lozan Barış Antlaşması',
        'İnsan Hakları Evrensel Beyannamesi',
        'Soykırım Sözleşmesi',
      ],
      correctIndex: 3,
      explanation:
        'Slayt 24’e göre 1948 BM İnsan Hakları Evrensel Beyannamesi’nin önsözü insanın istibdat ve baskıya karşı son çare olarak ayaklanmaya mecbur kalmaması için hakların hukuk rejimiyle korunmasını zaruret sayar.',
      slide: 24,
    },
    {
      id: 'd1-q30',
      question:
        'Atatürk’ün inkılâplar karşısındaki tutumu ve Türk Devriminin niteliği hakkında aşağıdakilerden hangisi doğrudur?',
      options: [
        'Geriye dönüş, ödün verme veya uzlaşmayla orta yolu kesinlikle kabul etmez; dinsel kurallara dayalı düzenin yerine pozitif düşünce, bilim ve insan aklına dayalı düzeni kurmayı hedefler.',
        'Dinsel kurallardan doğan yasaları olduğu gibi koruyarak sadece teknoloji ithal etmeyi hedefler.',
        'Eski kurumlarla uzlaşarak aşamalı bir orta yol izlemeyi esas alır.',
        'Yalnızca tarım ekonomisini geliştirmeyi yeterli görür.',
        'Değişimi tamamen dış etkenden bağımsız biçimde kendi haline bırakır.',
      ],
      correctIndex: 0,
      explanation:
        'Slayt 26’ya göre Atatürk inkılâplar konusunda geriye dönüş, ödün verme veya uzlaşmacı orta yolu kabul etmez; dinsel kurallar yerine pozitif düşünce, bilim ve insan aklına dayalı düzeni kurar.',
      slide: 26,
    },
    {
      id: 'd1-q31',
      question:
        'Türk Devriminden önceki iki evrensel devrim olan 1789 Fransız Devrimi ile 1917 Rus Devrimi’nin sınıfsal niteliği hangi seçenekte doğru eşleştirilmiştir?',
      options: [
        '1789 Fransız Devrimi: İşçi sınıfı devrimi — 1917 Rus Devrimi: Burjuva devrimi',
        '1789 Fransız Devrimi: Askeri darbe — 1917 Rus Devrimi: Din reformu',
        '1789 Fransız Devrimi: Burjuva devrimi — 1917 Rus Devrimi: İşçi sınıfı devrimi',
        'Her ikisi de yalnız aristokrasinin yönetim içinde yer değiştirmesidir',
        '1789 Fransız Devrimi: Köylü isyanı — 1917 Rus Devrimi: Meşruti ıslahat',
      ],
      correctIndex: 2,
      explanation:
        'Slayt 27’de 1789 Fransız Devrimi "burjuva devrimi", 1917 Rus Devrimi ise "işçi sınıfı devrimi" olarak nitelendirilmektedir.',
      slide: 27,
    },
    {
      id: 'd1-q32',
      question:
        'Mustafa Kemal’in 1905’te Suriye’de kurduğu ve 1906’da Selanik’te şubesini açtığı örgütün adı nedir?',
      options: [
        'İttihat ve Terakki Cemiyeti',
        'Vatan ve Hürriyet Cemiyeti',
        'Müdafaa-i Hukuk Cemiyeti',
        'Cumhuriyet Halk Fırkası',
        'Yeni Osmanlılar Cemiyeti',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 28’e göre Atatürk 1905 yılında Suriye’de göreve başladığı zaman Vatan ve Hürriyet Cemiyeti’ni kurmuş, 1906’da Selanik’te şubesini açmıştır.',
      slide: 28,
    },
    {
      id: 'd1-q33',
      question:
        'Atatürk’ün Nutuk’ta belirttiği "Hedefe dolambaçlı yollardan gitmek cephe hücumundan sağlamdır" sözü hangi devrim stratejisini ifade eder?',
      options: [
        'Bütün inkılap kararlarını daha 1906’da ilan edip uygulamayı',
        'İnkılapları halkın görüşünü hiç dikkate almadan bir gecede dayatmayı',
        'Sadece askeri savaşla yetinip siyasal ve toplumsal reformlardan vazgeçmeyi',
        'Yabancı devletlerin onayı alınmadan hiçbir adıma girişmemeyi',
        'Önemli kararları ilk günden açıklamayıp uygulamayı evrelere ayırarak ulusun duygu ve düşüncelerini hazırlayıp adım adım ilerlemeyi',
      ],
      correctIndex: 4,
      explanation:
        'Slayt 30’a göre Atatürk önemli kararları ilk günden açıklamanın başarısızlığa yol açabileceğini belirterek uygulamayı evrelere ayırmış, ulusun duygu-düşüncesini hazırlayarak adım adım ilerlemiştir.',
      slide: 30,
    },
    {
      id: 'd1-q34',
      question:
        'Türk Devrimini doğuran "Nesnel Koşullar" ve "Öznel Koşullar" ayrımı hangi seçenekte doğru olarak eşleştirilmiştir?',
      options: [
        'Nesnel: Lider, Örgüt, İdeoloji — Öznel: Ekonomik, Siyasal, Toplumsal Sorunlar',
        'Nesnel: Yalnızca Coğrafi Konum — Öznel: Yalnızca Dış Borçlar',
        'Nesnel: Askeri Zaferler — Öznel: Kapitülasyonlar',
        'Nesnel: Ekonomik, Siyasal ve Toplumsal Sorunlar — Öznel: Lider, Örgüt ve İdeoloji',
        'Nesnel: Basın ve Radyo — Öznel: Yabancı Genel Valiler',
      ],
      correctIndex: 3,
      explanation:
        'Slayt 31’e göre Ekonomik, Siyasal ve Toplumsal Sorunlar Nesnel Koşullar (Osmanlı’yı çöküntüye götüren nedenler); Lider, Örgüt ve İdeoloji ise Öznel Koşullardır.',
      slide: 31,
    },
    {
      id: 'd1-q35',
      question:
        'Atatürk’ün Almanca çevirileriyle birlikte yazdığı 14 kitap arasında aşağıdakilerden hangisi yer almaz?',
      options: [
        'Geometri Kitabı',
        'Vatandaş İçin Medeni Bilgiler',
        'Türkçülüğün Esasları',
        'Zabit ve Kumandan ile Hasbihal',
        'Cumalı Ordugahı',
      ],
      correctIndex: 2,
      explanation:
        'Slayt 33–34’te sayılan Atatürk’ün 14 kitabı arasında Geometri Kitabı, Vatandaş İçin Medeni Bilgiler, Zabit ve Kumandan ile Hasbihal ve Cumalı Ordugahı yer alır; "Türkçülüğün Esasları" Atatürk’ün eseri değildir.',
      slide: 33,
    },
    {
      id: 'd1-q36',
      question:
        'Aşağıdaki eserlerden hangisi Atatürk’ün Almancadan çevirdiği askeri eğitim kitaplarından biridir?',
      options: [
        'Bölüğün Muharebe Eğitimi',
        'Karlsbad Hatıraları',
        'Arıburnu Muharebeleri Raporu',
        'Atatürk’ün Hatıra Defteri',
        'Vatandaş İçin Medeni Bilgiler',
      ],
      correctIndex: 0,
      explanation:
        'Slayt 34’e göre "Bölüğün Muharebe Eğitimi" ve "Takımın Muharebe Eğitimi", Atatürk’ün Almancadan çevirdiği askeri eserlerdir.',
      slide: 34,
    },
    {
      id: 'd1-q37',
      question:
        'Slayt 35’te Atatürk’ün hayatında güç aldığı ve eyleme geçtiği örgütler arasında aşağıdakilerden hangisi sayılmamıştır?',
      options: [
        'Vatan ve Hürriyet Cemiyeti',
        'İttihat ve Terakki Cemiyeti',
        'Müdafaa-i Hukuk Cemiyetleri',
        'Türkiye Büyük Millet Meclisi ve Cumhuriyet Halk Fırkası',
        'Hürriyet ve İtilaf Fırkası',
      ],
      correctIndex: 4,
      explanation:
        'Slayt 35’te sayılan beş örgüt Vatan ve Hürriyet Cemiyeti, İttihat ve Terakki Cemiyeti, Müdafaa-i Hukuk Cemiyetleri, TBMM ve Cumhuriyet Halk Fırkası’dır; Hürriyet ve İtilaf Fırkası bunlardan biri değildir.',
      slide: 35,
    },
    {
      id: 'd1-q38',
      question:
        'Atatürkçülük ideolojisinin "bütünsel" olmasını vurgulamak amacıyla ders notlarında Sivas–Erzurum demiryolu, Nazilli Bez ve Eskişehir Şeker Fabrikalarıyla eşdeğer önemde gösterilen kurumlar hangileridir?',
      options: [
        'Düyun-u Umumiye ve Reji İdaresi',
        'İstanbul Üniversitesi’nin kuruluşu ve Konservatuarın açılması',
        'Yalnızca askeri kışla ve tersaneler',
        'Yabancı konsolosluk okulları ve ticaret mahkemeleri',
        'Ortaçağ loncaları ve medreseler',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 36’da ideolojinin bütünselliği gereği İstanbul Üniversitesi’nin kuruluşunun Sivas–Erzurum demiryolu yapımı kadar, Konservatuarın açılmasının da Nazilli Bez ya da Eskişehir Şeker Fabrikası yapımı kadar önemli olduğu belirtilir.',
      slide: 36,
    },
    {
      id: 'd1-q39',
      question:
        '1921 Anayasası’nın (Teşkilat-ı Esasiye Kanunu) 1. maddesindeki "Hakimiyet bila kaydü şart milletindir" hükmü, Türk Devriminin Fransız ve Rus Devrimlerinden ayrılan hangi özelliğini kanıtlar?',
      options: [
        'Yüzyıllarca süren fikri hazırlık aşamasına sahip olmasını',
        'Yalnızca dış politikaya odaklanıp iç rejimi hiç değiştirmemesini',
        'Sadece meşruti saltanatın güçlendirilmesini',
        'Ulusal bağımsızlık mücadelesi sürerken aynı anda ulusal egemenlik adımlarının da atıldığını',
        'Tek bir önder yerine çok başlı bir fikir akımına dayanmasını',
      ],
      correctIndex: 3,
      explanation:
        'Slayt 38’e göre Fransa ve Rusya işgal altında değilken Türkiye’de Milli Mücadele ile ulusal bağımsızlık ve 1921 Anayasası’nın 1. maddesiyle ulusal egemenlik aynı anda yürütülmüştür.',
      slide: 38,
    },
    {
      id: 'd1-q40',
      question:
        'Atatürk’ün "Biz benzememekle ve benzetmemekle gurur duyarız. Çünkü biz bize benzeriz" sözü ile "Batı’nın uygarlığına saygılıyız ama emperyalizmine ve militarizmine karşıyız" açıklaması Türk Devriminin hangi iki özelliğini ortaya koyar?',
      options: [
        'Dogmatik olması ve evrimci olması',
        'Sadece ekonomik kalkınmayı hedeflemesi ve taklitçi olması',
        'Özgün olması ve anti-emperyalist nitelik taşıması',
        'Uzlaşmacı olması ve hanedanı koruması',
        'İzole kalarak Batı bilimini ve sanatını tümüyle reddetmesi',
      ],
      correctIndex: 2,
      explanation:
        'Slayt 39’da bu iki söz doğrudan Türk Devriminin özgünlüğü ve emperyalizme karşıtlığı başlığı altında aktarılmaktadır.',
      slide: 39,
    },
    {
      id: 'd1-q41',
      question:
        'Türk Devriminin Fransız ve Rus Devrimlerine kıyasla "en az zorlama unsuru içeren devrim" olarak tanımlanmasının temel tarihsel gerekçesi nedir?',
      options: [
        'Fransa’da Kral giyotinle idam edilip Rusya’da Çar II. Nikolay ailesiyle kurşuna dizilirken, Türkiye’de Saltanat kaldırılınca Osmanlı Hanedanı üyelerine zulüm ve saygısızlık edilmeden tren garından yurtdışına uğurlanması',
        'Türkiye’de hiçbir kurumun değiştirilmeden aynen korunması',
        'Saltanatın kaldırılmasının referandumla 20 yıl ertelenmesi',
        'Türk Devriminin tamamen zorlama olmadan kendiliğinden evrimleşmesi',
        'Osmanlı Hanedanı’nın Cumhuriyet meclisinin doğal başkanı sayılması',
      ],
      correctIndex: 0,
      explanation:
        'Slayt 40–41’de Fransa ve Rusya’daki kanlı infazlara karşılık Türkiye’de Osmanlı Hanedanı’nın saygısızlık görmeden tren garından yurtdışına gönderildiği vurgulanarak en az zorlama içeren devrimin Türk Devrimi olduğu belirtilir.',
      slide: 40,
    },
    {
      id: 'd1-q42',
      question:
        'Türk Devriminin temel ilkesi olan "İstiklal-i Tamme" (Tam Bağımsızlık) ve Osmanlı Devleti’ndeki kapitülasyonlarla ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
      options: [
        'Tam bağımsızlık askeri, mali, idari, adli, siyasi ve kültürel bütün alanları kapsamalıdır.',
        'Bu alanlardan birinde dahi bağımsızlık yoksa tam bağımsızlıktan söz edilemez.',
        'Osmanlı’daki yabancılar dokunulmazlık hakkına sahip olup vergi ödemiyor, tutuklanamıyor ve sınır dışı edilemiyordu.',
        'Kapitülasyonların özellikle adli ve idari olanları devleti Avrupalı devletlerin sömürgesi haline getirmişti.',
        'Kapitülasyonlar yalnızca ekonomik alanla sınırlı kalmış, Osmanlı’nın adli ve idari egemenliğini etkilememiştir.',
      ],
      correctIndex: 4,
      explanation:
        'Slayt 42’de kapitülasyonların sadece ekonomik olmadığı, özellikle bağımsızlıkla ilgili adli ve idari kapitülasyonların devleti Avrupalı devletlerin sömürgesi haline getirdiği açıkça vurgulanır.',
      slide: 42,
    },
    {
      id: 'd1-q43',
      question:
        '1913 yılında Doğu Anadolu’da Ermeni Vilayeti oluşturmak amacıyla 8 Şubat anlaşmasıyla Van–Bitlis–Diyarbakır ve Trabzon–Erzurum–Sivas bölgelerine atanan iki Avrupalı Genel Vali kimlerdir?',
      options: [
        'Liman von Sanders ve General Falkenheim',
        'Norveçli Binbaşı Hoff ve Hollandalı Westenek',
        'Amiral Souchon ve Mark Sykes',
        'General Townshend ve Georges Picot',
        'Bernard Lewis ve Justin McCarthy',
      ],
      correctIndex: 1,
      explanation:
        'Slayt 43’e göre 8 Şubat 1913 anlaşmasıyla maaşları Osmanlı’dan ödenmek üzere Van–Bitlis–Diyarbakır bölgesine Norveçli Binbaşı Hoff, Trabzon–Erzurum–Sivas bölgesine Hollandalı Westenek atanmıştır.',
      slide: 43,
    },
    {
      id: 'd1-q44',
      question:
        '"Sakarya Zaferi yirmi yaşımın en büyük anısı olmuştur..." sözleriyle esinlendiğini ifade eden Tunus’un ulusal kurtuluş önderi ile 1935’te Atatürk’ü "Ataşark" diye anan Mısır delegesi hangi seçenekte doğru eşleştirilmiştir?',
      options: [
        'Nehru — Amanullah Han',
        'Amanullah Han — Sitti Şaravi',
        'Nehru — Habib Burgiba',
        'Habib Burgiba — Sitti Şaravi',
        'Sitti Şaravi — Habib Burgiba',
      ],
      correctIndex: 3,
      explanation:
        'Slayt 46–47’ye göre Tunus önderi Habib Burgiba Sakarya Zaferi’nden ilham aldığını belirtmiş; Mısır delegesi Sitti Şaravi ise 1935’te Atatürk’ü bütün Şark’ın atası anlamında "Ataşark" diye andıklarını söylemiştir.',
      slide: 46,
    },
    {
      id: 'd1-q45',
      question:
        'Dersin sonunda devletin kuruluş felsefesini unutmaması gerektiği vurgulanarak, bugünü ve yarını anlamada "ne yapıp ne yapmamamız gerektiğini gösteren bir kılavuz, kutup yıldızı" olarak tanımlanan nedir?',
      options: [
        'Metternich Sistemi',
        'Şark Meselesi',
        'Milli Mücadele felsefesi',
        'Kapitülasyon hukuku',
        'Teokratik monarşi geleneği',
      ],
      correctIndex: 2,
      explanation:
        'Slayt 49’a göre Milli Mücadele felsefesi bize ne yapıp ne yapmamamız gerektiğini gösteren bir kılavuzdur, kutup yıldızıdır.',
      slide: 49,
    },
  ],
};
