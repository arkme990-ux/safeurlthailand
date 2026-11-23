"use strict";

const trustedSites = [
  ["Government","Royal Thai Government","thaigov.go.th"],["Government","Revenue Department","rd.go.th"],["Government","Immigration Bureau","immigration.go.th"],["Government","Ministry of Interior","moi.go.th"],["Government","Land Department","dol.go.th"],["Government","Public Health Ministry","moph.go.th"],["Government","Social Security","sso.go.th"],["Government","Royal Thai Police","royalthaipolice.go.th"],["Government","Customs Service","customs.go.th"],["Government","Transport Department","dot.go.th"],["Government","Bangkok Metropolitan Administration","bangkok.go.th"],["Government","Ministry of Education","moe.go.th"],["Government","Ministry of Labour","mol.go.th"],["Government","Ministry of Defence","mod.go.th"],["Government","Ministry of Commerce","moc.go.th"],
  ["Banking","Kasikornbank","kasikornbank.com"],["Banking","Bangkok Bank","bangkokbank.com"],["Banking","Siam Commercial Bank","scb.co.th"],["Banking","Krungsri","krungsri.com"],["Banking","TTB Bank","ttbbank.com"],["Banking","CIMB Thai","cimbthai.com"],["Banking","Krungthai Bank","krungthai.com"],["Banking","Bank of China","bankofchina.com"],["Banking","HSBC Thailand","hsbc.co.th"],["Banking","UOB Thailand","uob.co.th"],["Banking","Standard Chartered","sc.com"],["Banking","Maybank Thailand","maybank.co.th"],
  ["Shopping","Shopee Thailand","shopee.co.th"],["Shopping","Lazada Thailand","lazada.co.th"],["Shopping","Central Online","central.co.th"],["Shopping","Amazon","amazon.com"],["Shopping","eBay","ebay.com"],["Shopping","JD.com","jd.com"],["Shopping","Taobao","taobao.com"],["Shopping","AliExpress","aliexpress.com"],["Shopping","Etsy","etsy.com"],["Shopping","Alibaba","alibaba.com"],
  ["Transport","Grab","grab.com"],["Transport","Uber","uber.com"],["Transport","Foodpanda Thailand","foodpanda.co.th"],["Transport","LINE MAN","lineman.line.me"],["Transport","BTS Skytrain","bts.co.th"],["Transport","MRT Bangkok","metro.bemplc.co.th"],["Transport","Thai Airways","thaiairways.com"],["Transport","Nok Air","nokair.com"],["Transport","AirAsia","airasia.com"],
  ["Messaging","LINE","line.me"],["Messaging","WhatsApp","whatsapp.com"],["Messaging","Telegram","telegram.org"],["Messaging","Viber","viber.com"],["Messaging","WeChat","wechat.com"],["Messaging","Slack","slack.com"],["Messaging","Discord","discord.com"],["Messaging","Messenger","messenger.com"],
  ["Social","Facebook","facebook.com"],["Social","Instagram","instagram.com"],["Social","TikTok","tiktok.com"],["Social","X","x.com"],["Social","X (legacy Twitter domain)","twitter.com"],["Social","YouTube","youtube.com"],["Social","LinkedIn","linkedin.com"],["Social","Pinterest","pinterest.com"],["Social","Snapchat","snapchat.com"],["Social","Reddit","reddit.com"],
  ["Travel","Agoda","agoda.com"],["Travel","Booking.com","booking.com"],["Travel","Airbnb","airbnb.com"],["Travel","Expedia","expedia.com"],["Travel","Tripadvisor","tripadvisor.com"],["Travel","Hotels.com","hotels.com"],["Travel","Kayak","kayak.com"],["Travel","Skyscanner","skyscanner.com"],["Travel","Tourism Authority of Thailand","tourismthailand.org"],
  ["Education","Chulalongkorn University","chula.ac.th"],["Education","Thammasat University","tu.ac.th"],["Education","Mahidol University","mahidol.ac.th"],["Education","Kasetsart University","ku.ac.th"],
  ["Utilities","Provincial Electricity Authority","pea.co.th"],["Utilities","Metropolitan Electricity Authority","mea.or.th"],["Utilities","Metropolitan Waterworks Authority","mwa.co.th"],
  ["Finance","Thailand SEC","sec.or.th"],["Finance","Stock Exchange of Thailand","set.or.th"],["Finance","Bank of Thailand","bot.or.th"],["Finance","AXA Thailand","axa.co.th"],
  ["Search","Google","google.com"],["Search","Bing","bing.com"],["Search","DuckDuckGo","duckduckgo.com"],
  ["Email","Gmail","gmail.com"],["Email","Outlook","outlook.com"],["Email","Yahoo Mail","mail.yahoo.com"],
  ["Media","Netflix","netflix.com"],["Media","Disney+","disneyplus.com"],["Media","Spotify","spotify.com"],["Media","Apple TV","tv.apple.com"],["Media","Prime Video","primevideo.com"],
  ["Technology","Microsoft","microsoft.com"],["Technology","Apple","apple.com"],["Technology","Google Cloud","cloud.google.com"],["Technology","Amazon Web Services","aws.amazon.com"],["Technology","Samsung","samsung.com"],["Technology","Intel","intel.com"],
  ["Payment","PayPal","paypal.com"],["Payment","Stripe","stripe.com"],["Payment","2C2P","2c2p.com"],["Payment","Opn Payments","opn.ooo"],

  ["Government","Thailand Citizen Portal","thailand.go.th"],["Government","Digital Government Development Agency","dga.or.th"],["Government","Electronic Transactions Development Agency","etda.or.th"],["Government","National Cyber Security Agency","ncsa.or.th"],["Government","Consumer Protection Board","ocpb.go.th"],["Government","Department of Business Development","dbd.go.th"],["Government","Excise Department","excise.go.th"],["Government","Comptroller General's Department","cgd.go.th"],["Government","Department of Consular Affairs","consular.go.th"],["Government","Ministry of Foreign Affairs","mfa.go.th"],["Government","Ministry of Finance","mof.go.th"],["Government","Ministry of Digital Economy and Society","mdes.go.th"],["Government","Natural Resources Ministry","mnre.go.th"],["Government","Agriculture Ministry","moac.go.th"],["Government","Ministry of Energy","energy.go.th"],["Government","Ministry of Industry","industry.go.th"],["Government","Ministry of Justice","moj.go.th"],["Government","Office of the Attorney General","ago.go.th"],["Government","Courts of Justice","coj.go.th"],["Government","Election Commission of Thailand","ect.go.th"],["Government","Thai Food and Drug Administration","fda.moph.go.th"],["Government","Department of Disease Control","ddc.moph.go.th"],["Government","National Health Security Office","nhso.go.th"],["Government","Thai Meteorological Department","tmd.go.th"],["Government","Disaster Prevention and Mitigation","ddpm.go.th"],["Government","Department of Tourism","tourism.go.th"],["Government","Department of Airports","airports.go.th"],["Government","Civil Aviation Authority of Thailand","caat.or.th"],["Government","Thailand Board of Investment","boi.go.th"],["Government","Department of Intellectual Property","ipthailand.go.th"],["Government","Government Public Relations Department","prd.go.th"],["Government","National Innovation Agency","nia.or.th"],["Government","National Statistical Office","nso.go.th"],["Government","Personal Data Protection Committee","pdpc.or.th"],["Government","Office of Insurance Commission","oic.or.th"],

  ["Banking","Government Savings Bank","gsb.or.th"],["Banking","BAAC","baac.or.th"],["Banking","Government Housing Bank","ghbank.co.th"],["Banking","Islamic Bank of Thailand","ibank.co.th"],["Banking","Kiatnakin Phatra","kkpfg.com"],["Banking","LH Bank","lhbank.co.th"],["Banking","ICBC Thai","icbcthai.com"],["Banking","Citibank","citi.com"],["Banking","DBS Bank","dbs.com"],["Banking","OCBC Bank","ocbc.com"],["Banking","Maybank","maybank.com"],["Banking","Bank of America","bankofamerica.com"],["Banking","Chase","chase.com"],["Banking","Wells Fargo","wellsfargo.com"],["Banking","Capital One","capitalone.com"],["Banking","Barclays","barclays.com"],["Banking","Deutsche Bank","db.com"],["Banking","BNP Paribas","bnpparibas.com"],["Banking","Santander","santander.com"],["Banking","ANZ","anz.com"],["Banking","Commonwealth Bank","commbank.com.au"],["Banking","MUFG","mufg.jp"],["Banking","Mizuho","mizuhogroup.com"],["Banking","SMBC Group","smbcgroup.com"],

  ["Shopping","Walmart","walmart.com"],["Shopping","Target","target.com"],["Shopping","Best Buy","bestbuy.com"],["Shopping","Costco","costco.com"],["Shopping","The Home Depot","homedepot.com"],["Shopping","IKEA","ikea.com"],["Shopping","Zalora Thailand","zalora.co.th"],["Shopping","Uniqlo","uniqlo.com"],["Shopping","Nike","nike.com"],["Shopping","Adidas","adidas.com"],["Shopping","H&M","hm.com"],["Shopping","Zara","zara.com"],["Shopping","Sephora","sephora.com"],["Shopping","Temu","temu.com"],["Shopping","Rakuten","rakuten.com"],["Shopping","Mercado Libre","mercadolibre.com"],["Shopping","Coupang","coupang.com"],["Shopping","Tokopedia","tokopedia.com"],["Shopping","Flipkart","flipkart.com"],["Shopping","ASOS","asos.com"],["Shopping","Wayfair","wayfair.com"],["Shopping","Newegg","newegg.com"],["Shopping","Tops","tops.co.th"],["Shopping","Big C","bigc.co.th"],["Shopping","Lotus's","lotuss.com"],["Shopping","Makro","makro.pro"],["Shopping","Power Buy","powerbuy.co.th"],["Shopping","Thai Watsadu","thaiwatsadu.com"],["Shopping","Shopify","shopify.com"],["Shopping","WooCommerce","woocommerce.com"],

  ["Transport","State Railway of Thailand","railway.co.th"],["Transport","Airports of Thailand","airportthai.co.th"],["Transport","Bangkok Airways","bangkokair.com"],["Transport","Thai Vietjet","thaivietjetair.com"],["Transport","Scoot","flyscoot.com"],["Transport","Singapore Airlines","singaporeair.com"],["Transport","Emirates","emirates.com"],["Transport","Qatar Airways","qatarairways.com"],["Transport","Cathay Pacific","cathaypacific.com"],["Transport","Japan Airlines","jal.co.jp"],["Transport","ANA","ana.co.jp"],["Transport","Lufthansa","lufthansa.com"],["Transport","KLM","klm.com"],["Transport","British Airways","britishairways.com"],["Transport","Delta Air Lines","delta.com"],["Transport","United Airlines","united.com"],["Transport","American Airlines","aa.com"],["Transport","Bolt","bolt.eu"],["Transport","inDrive","indrive.com"],["Transport","Lyft","lyft.com"],["Transport","FlixBus","flixbus.com"],

  ["Messaging","Signal","signal.org"],["Messaging","Zoom","zoom.us"],["Messaging","KakaoTalk","kakao.com"],["Messaging","QQ","qq.com"],["Messaging","imo","imo.im"],["Messaging","Element","element.io"],["Messaging","Matrix","matrix.org"],["Messaging","Wire","wire.com"],["Messaging","Session","getsession.org"],

  ["Social","Threads","threads.net"],["Social","Bluesky","bsky.app"],["Social","Tumblr","tumblr.com"],["Social","Twitch","twitch.tv"],["Social","Quora","quora.com"],["Social","Mastodon","joinmastodon.org"],["Social","VK","vk.com"],["Social","Weibo","weibo.com"],["Social","Douyin","douyin.com"],["Social","Medium","medium.com"],

  ["Travel","Trip.com","trip.com"],["Travel","Traveloka","traveloka.com"],["Travel","Klook","klook.com"],["Travel","Hostelworld","hostelworld.com"],["Travel","Vrbo","vrbo.com"],["Travel","Marriott","marriott.com"],["Travel","Hilton","hilton.com"],["Travel","Hyatt","hyatt.com"],["Travel","IHG Hotels","ihg.com"],["Travel","Accor","all.accor.com"],["Travel","Minor Hotels","minorhotels.com"],["Travel","Centara Hotels","centarahotelsresorts.com"],["Travel","Anantara","anantara.com"],["Travel","Amari","amari.com"],["Travel","Dusit Hotels","dusit.com"],["Travel","Priceline","priceline.com"],["Travel","Trivago","trivago.com"],["Travel","Hopper","hopper.com"],["Travel","Kiwi.com","kiwi.com"],["Travel","Rome2Rio","rome2rio.com"],

  ["Education","Chiang Mai University","cmu.ac.th"],["Education","Khon Kaen University","kku.ac.th"],["Education","Prince of Songkla University","psu.ac.th"],["Education","KMUTT","kmutt.ac.th"],["Education","KMITL","kmitl.ac.th"],["Education","KMUTNB","kmutnb.ac.th"],["Education","Silpakorn University","su.ac.th"],["Education","Srinakharinwirot University","swu.ac.th"],["Education","Burapha University","buu.ac.th"],["Education","Mae Fah Luang University","mfu.ac.th"],["Education","Rangsit University","rsu.ac.th"],["Education","Bangkok University","bu.ac.th"],["Education","Stanford University","stanford.edu"],["Education","MIT","mit.edu"],["Education","Harvard University","harvard.edu"],["Education","University of Oxford","ox.ac.uk"],["Education","University of Cambridge","cam.ac.uk"],["Education","Coursera","coursera.org"],["Education","edX","edx.org"],["Education","Khan Academy","khanacademy.org"],["Education","FutureLearn","futurelearn.com"],["Education","Udemy","udemy.com"],

  ["Utilities","Provincial Waterworks Authority","pwa.co.th"],["Utilities","National Telecom","ntplc.co.th"],["Utilities","AIS","ais.th"],["Utilities","True Corporation","true.th"],["Utilities","dtac","dtac.co.th"],["Utilities","Electricity Generating Authority","egat.co.th"],["Utilities","PTT","pttplc.com"],["Utilities","Energy Regulatory Commission","erc.or.th"],

  ["Finance","Anti-Money Laundering Office","amlo.go.th"],["Finance","Thai Credit Guarantee Corporation","tcg.or.th"],["Finance","National Credit Bureau","ncb.co.th"],["Finance","AIA Thailand","aia.co.th"],["Finance","Allianz Ayudhya","allianz.co.th"],["Finance","Muang Thai Life","muangthai.co.th"],["Finance","Bangkok Life Assurance","bangkoklife.com"],["Finance","SCB X","scbx.com"],["Finance","Visa","visa.com"],["Finance","Mastercard","mastercard.com"],["Finance","American Express","americanexpress.com"],["Finance","Wise","wise.com"],["Finance","Revolut","revolut.com"],["Finance","Robinhood","robinhood.com"],["Finance","Interactive Brokers","interactivebrokers.com"],["Finance","Fidelity","fidelity.com"],["Finance","Charles Schwab","schwab.com"],["Finance","Vanguard","vanguard.com"],

  ["Search","Yahoo","yahoo.com"],["Search","Baidu","baidu.com"],["Search","Yandex","yandex.com"],["Search","Brave Search","brave.com"],
  ["Email","Proton Mail","proton.me"],["Email","iCloud Mail","icloud.com"],["Email","Zoho Mail","zoho.com"],["Email","Fastmail","fastmail.com"],["Email","GMX","gmx.com"],

  ["Media","Max","max.com"],["Media","Hulu","hulu.com"],["Media","Tidal","tidal.com"],["Media","Deezer","deezer.com"],["Media","SoundCloud","soundcloud.com"],["Media","Vimeo","vimeo.com"],["Media","Crunchyroll","crunchyroll.com"],["Media","Paramount+","paramountplus.com"],["Media","Peacock","peacocktv.com"],["Media","BBC","bbc.com"],["Media","CNN","cnn.com"],["Media","Reuters","reuters.com"],["Media","Bangkok Post","bangkokpost.com"],["Media","The Nation Thailand","nationthailand.com"],["Media","Thai PBS","thaipbs.or.th"],["Media","Workpoint","workpointtv.com"],["Media","Channel 3 Thailand","ch3plus.com"],["Media","Channel 7 Thailand","ch7.com"],["Media","PPTV HD 36","pptvhd36.com"],["Media","TrueID","trueid.net"],["Media","Viu","viu.com"],

  ["Technology","Cloudflare","cloudflare.com"],["Technology","GitHub","github.com"],["Technology","GitLab","gitlab.com"],["Technology","Dropbox","dropbox.com"],["Technology","Box","box.com"],["Technology","Adobe","adobe.com"],["Technology","Oracle","oracle.com"],["Technology","IBM","ibm.com"],["Technology","Cisco","cisco.com"],["Technology","Dell","dell.com"],["Technology","HP","hp.com"],["Technology","Lenovo","lenovo.com"],["Technology","ASUS","asus.com"],["Technology","Acer","acer.com"],["Technology","Sony","sony.com"],["Technology","NVIDIA","nvidia.com"],["Technology","AMD","amd.com"],["Technology","Mozilla","mozilla.org"],["Technology","OpenAI","openai.com"],["Technology","Anthropic","anthropic.com"],["Technology","Canva","canva.com"],["Technology","Figma","figma.com"],["Technology","Notion","notion.so"],["Technology","Atlassian","atlassian.com"],["Technology","Salesforce","salesforce.com"],

  ["Payment","Square","squareup.com"],["Payment","Adyen","adyen.com"],["Payment","Worldpay","worldpay.com"],["Payment","Western Union","westernunion.com"],["Payment","MoneyGram","moneygram.com"],["Payment","Remitly","remitly.com"],["Payment","TrueMoney","truemoney.com"],["Payment","Rabbit LINE Pay","rabbit.co.th"],["Payment","ShopeePay","shopeepay.co.th"],["Payment","Alipay","alipay.com"],

  ["Delivery","Thailand Post","thailandpost.co.th"],["Delivery","DHL","dhl.com"],["Delivery","FedEx","fedex.com"],["Delivery","UPS","ups.com"],["Delivery","Kerry Express Thailand","th.kex-express.com"],["Delivery","Flash Express","flashexpress.com"],["Delivery","J&T Express Thailand","jtexpress.co.th"],

  ["Security","ThaiCERT","thaicert.or.th"],["Security","VirusTotal","virustotal.com"],["Security","Have I Been Pwned","haveibeenpwned.com"],["Security","CISA","cisa.gov"],["Security","CERT Coordination Center","cert.org"],["Security","INTERPOL","interpol.int"],["Security","FTC ReportFraud","reportfraud.ftc.gov"],

  ["Health","World Health Organization","who.int"],["Health","Thai Red Cross Society","redcross.or.th"],["Health","Siriraj Hospital","si.mahidol.ac.th"],["Health","Ramathibodi Hospital","rama.mahidol.ac.th"],["Health","Bumrungrad Hospital","bumrungrad.com"],["Health","Bangkok Hospital","bangkokhospital.com"],["Health","Samitivej Hospital","samitivejhospitals.com"]
].map(([category, name, domain]) => ({ category, name, domain }));

const translations = {
  en: {
    navCheck:"Check a link",navTools:"Tools",navLearn:"Learn",navAbout:"About",projectNote:"A student-led public safety project",
    heroTitle:"Check before you click.",heroIntro:"Paste a URL.",
    trustOne:"The link is never opened",trustTwo:"No account required",trustThree:"Free to use",checkerTitle:"Check a link",checkerSub:"Paste the full URL or domain.",urlLabel:"Website address",checkButton:"Check link",urlHint:"Example: kasikornbank.com",checkerNote:"Always proceed with caution.",
    methodTitle:"Every check looks at three signals",signalOneTitle:"Domain match",signalOneText:"Is it in our official-site directory?",signalTwoTitle:"Impersonation clues",signalTwoText:"Does it imitate a known brand?",signalThreeTitle:"URL structure",signalThreeText:"Are there unusual or misleading patterns?",
    toolsTitle:"Safety tools",toolsIntro:"",sitesTabTitle:"Official sites",sitesTabText:"Search the directory",passwordTabTitle:"Password",passwordTabText:"Test strength privately",historyTabTitle:"History",historyTabText:"Stored on this device",sitesTitle:"Official website directory",sitesIntro:"",directoryLabel:"sites",siteSearchPlaceholder:"Search name or domain",showMore:"Show more",passwordTitle:"Check password strength",passwordIntro:"",localOnly:"Local only",passwordLabel:"Password",passwordPlaceholder:"Enter a password",passwordEmpty:"Enter a password",ruleLength:"12+ characters",ruleCase:"Upper and lowercase",ruleNumber:"At least one number",ruleSymbol:"At least one symbol",ruleCommon:"No common patterns",historyTitle:"Recent checks",historyIntro:"",clearHistory:"Clear history",
    learnTitle:"Three rules to remember",learnIntro:"",lessonOneTitle:"Read the domain",lessonOneText:"Names and logos can be copied. Check the actual domain.",lessonTwoTitle:"Pause when rushed",lessonTwoText:"Urgency is a common scam tactic. Stop and verify.",lessonThreeTitle:"Go there yourself",lessonThreeText:"Use the official app or type the known address.",lessonFourTitle:"HTTPS is not proof",lessonFourText:"A padlock protects the connection, but scam websites can also use HTTPS.",lessonFiveTitle:"Never share login codes",lessonFiveText:"Legitimate staff should not ask for passwords, one-time codes, or recovery phrases.",lessonSixTitle:"Ask through another channel",lessonSixText:"If a request seems unusual, call the person or organization using a number you already trust.",
    aboutTitle:"About SafeURL",aboutText:"SafeURL checks domains and common URL warning signs.",aboutPrivacyLabel:"Privacy",aboutPrivacyText:"Checks stay in your browser",aboutScopeLabel:"Scope",aboutScopeText:"Domains and URL patterns",aboutAccessLabel:"Access",aboutAccessText:"Free, no sign-in",footerText:"Student-built in Thailand.",
    reportTitle:"Report this link",reportIntro:"Saved only on this device.",reportedUrl:"Website address",reportReasonLabel:"Reason",reportReasonPlaceholder:"Choose a reason",reportDetailsLabel:"Details (optional)",cancelButton:"Cancel",submitReport:"Save report",
    all:"All",noSitesTitle:"No match",noSitesText:"Try another name or domain.",invalidUrl:"Enter a valid address, such as example.com.",unsupportedProtocol:"Only http and https links are supported.",checking:"Checking domain…",safeLabel:"Directory match",safeTitle:"Official domain found",safeText:"Matches our entry for {name}.",dangerLabel:"Possible impersonation",dangerTitle:"Use extra caution",dangerText:"Looks like {name}, but its official domain is {domain}.",cautionLabel:"Not in directory",cautionTitle:"No official match",cautionText:"Not listed. This does not automatically mean it is unsafe.",signalExact:"Matches a curated directory entry",signalHttps:"Uses HTTPS",signalHttp:"Does not use HTTPS",signalPatternClear:"No common URL warning sign",signalPatternRisk:"{count} URL warning sign(s) found",nextSafe:"Use the official directory address.",nextCaution:"Verify through the official app or a trusted source.",report:"Report",historyEmptyTitle:"No checks yet",historyEmptyText:"Your checks will appear here.",historyCleared:"History cleared.",reportSaved:"Saved on this device.",weak:"Weak",fair:"Fair",strong:"Strong",veryStrong:"Very strong",scoreText:"{score} of 5 checks",showPassword:"Show password",hidePassword:"Hide password"
  },
  th: {
    navCheck:"ตรวจสอบลิงก์",navTools:"เครื่องมือ",navLearn:"เรียนรู้",navAbout:"เกี่ยวกับ",projectNote:"โครงการความปลอดภัยสาธารณะที่นำโดยนักเรียน",
    heroTitle:"เช็กก่อนคลิก",heroIntro:"วาง URL",trustOne:"ระบบจะไม่เปิดลิงก์",trustTwo:"ไม่ต้องสมัครบัญชี",trustThree:"ใช้งานฟรี",checkerTitle:"ตรวจสอบลิงก์",checkerSub:"วาง URL เต็มหรือชื่อโดเมน",urlLabel:"ที่อยู่เว็บไซต์",checkButton:"ตรวจสอบ",urlHint:"ตัวอย่าง: kasikornbank.com",checkerNote:"โปรดดำเนินการด้วยความระมัดระวังเสมอ",
    methodTitle:"การตรวจสอบดูจาก 3 สัญญาณ",signalOneTitle:"การตรงกันของโดเมน",signalOneText:"อยู่ในรายชื่อเว็บไซต์ทางการหรือไม่",signalTwoTitle:"สัญญาณเลียนแบบ",signalTwoText:"กำลังเลียนแบบแบรนด์ที่รู้จักหรือไม่",signalThreeTitle:"โครงสร้าง URL",signalThreeText:"มีรูปแบบที่ผิดปกติหรือทำให้เข้าใจผิดหรือไม่",
    toolsTitle:"เครื่องมือความปลอดภัย",toolsIntro:"",sitesTabTitle:"เว็บทางการ",sitesTabText:"ค้นหาในรายชื่อ",passwordTabTitle:"รหัสผ่าน",passwordTabText:"ทดสอบแบบส่วนตัว",historyTabTitle:"ประวัติ",historyTabText:"เก็บไว้ในอุปกรณ์นี้",sitesTitle:"รายชื่อเว็บไซต์ทางการ",sitesIntro:"",directoryLabel:"เว็บไซต์",siteSearchPlaceholder:"ค้นหาชื่อหรือโดเมน",showMore:"แสดงเพิ่ม",passwordTitle:"ตรวจสอบรหัสผ่าน",passwordIntro:"",localOnly:"เฉพาะอุปกรณ์",passwordLabel:"รหัสผ่าน",passwordPlaceholder:"ใส่รหัสผ่าน",passwordEmpty:"ใส่รหัสผ่าน",ruleLength:"12 ตัวอักษรขึ้นไป",ruleCase:"พิมพ์ใหญ่และพิมพ์เล็ก",ruleNumber:"มีตัวเลข",ruleSymbol:"มีสัญลักษณ์",ruleCommon:"ไม่ใช้รูปแบบทั่วไป",historyTitle:"การตรวจสอบล่าสุด",historyIntro:"",clearHistory:"ล้างประวัติ",
    learnTitle:"สามข้อที่ควรจำ",learnIntro:"",lessonOneTitle:"อ่านชื่อโดเมน",lessonOneText:"ชื่อและโลโก้ปลอมได้ ตรวจสอบโดเมนจริง",lessonTwoTitle:"หยุดเมื่อถูกเร่ง",lessonTwoText:"ความเร่งด่วนเป็นกลลวงที่พบบ่อย หยุดและตรวจสอบ",lessonThreeTitle:"เข้าเว็บด้วยตัวเอง",lessonThreeText:"ใช้แอปทางการหรือพิมพ์ที่อยู่ที่รู้จัก",lessonFourTitle:"HTTPS ไม่ได้พิสูจน์ว่าปลอดภัย",lessonFourText:"แม่กุญแจปกป้องการเชื่อมต่อ แต่เว็บหลอกลวงก็ใช้ HTTPS ได้",lessonFiveTitle:"อย่าแชร์รหัสเข้าสู่ระบบ",lessonFiveText:"เจ้าหน้าที่จริงไม่ควรขอรหัสผ่าน รหัส OTP หรือ recovery phrase",lessonSixTitle:"ยืนยันผ่านอีกช่องทาง",lessonSixText:"หากคำขอดูผิดปกติ ให้โทรหาบุคคลหรือองค์กรด้วยหมายเลขที่คุณเชื่อถืออยู่แล้ว",
    aboutTitle:"เกี่ยวกับ SafeURL",aboutText:"SafeURL ตรวจสอบโดเมนและสัญญาณเตือนของ URL",aboutPrivacyLabel:"ความเป็นส่วนตัว",aboutPrivacyText:"ตรวจสอบในเบราว์เซอร์",aboutScopeLabel:"ขอบเขต",aboutScopeText:"โดเมนและรูปแบบ URL",aboutAccessLabel:"การเข้าถึง",aboutAccessText:"ฟรี ไม่ต้องเข้าสู่ระบบ",footerText:"สร้างโดยนักเรียนในประเทศไทย",
    reportTitle:"รายงานลิงก์นี้",reportIntro:"บันทึกในอุปกรณ์นี้เท่านั้น",reportedUrl:"ที่อยู่เว็บไซต์",reportReasonLabel:"เหตุผล",reportReasonPlaceholder:"เลือกเหตุผล",reportDetailsLabel:"รายละเอียด (ไม่บังคับ)",cancelButton:"ยกเลิก",submitReport:"บันทึกรายงาน",
    all:"ทั้งหมด",noSitesTitle:"ไม่พบ",noSitesText:"ลองชื่อหรือโดเมนอื่น",invalidUrl:"กรอกที่อยู่ที่ถูกต้อง เช่น example.com",unsupportedProtocol:"รองรับเฉพาะลิงก์ http และ https",checking:"กำลังตรวจสอบ…",safeLabel:"ตรงกับรายชื่อ",safeTitle:"พบโดเมนทางการ",safeText:"ตรงกับรายการของ {name}",dangerLabel:"อาจเลียนแบบ",dangerTitle:"ควรระวังเป็นพิเศษ",dangerText:"คล้าย {name} แต่โดเมนทางการคือ {domain}",cautionLabel:"ไม่อยู่ในรายชื่อ",cautionTitle:"ไม่พบรายการทางการ",cautionText:"ไม่อยู่ในรายชื่อ แต่ไม่ได้แปลว่าไม่ปลอดภัย",signalExact:"ตรงกับรายการที่รวบรวมไว้",signalHttps:"ใช้ HTTPS",signalHttp:"ไม่ใช้ HTTPS",signalPatternClear:"ไม่พบสัญญาณเตือน URL",signalPatternRisk:"พบสัญญาณเตือน {count} รายการ",nextSafe:"ใช้ที่อยู่จากรายชื่อทางการ",nextCaution:"ตรวจสอบผ่านแอปทางการหรือแหล่งที่เชื่อถือได้",report:"รายงาน",historyEmptyTitle:"ยังไม่มีรายการ",historyEmptyText:"การตรวจสอบจะปรากฏที่นี่",historyCleared:"ล้างประวัติแล้ว",reportSaved:"บันทึกในอุปกรณ์แล้ว",weak:"อ่อน",fair:"พอใช้",strong:"แข็งแรง",veryStrong:"แข็งแรงมาก",scoreText:"ผ่าน {score} จาก 5 ข้อ",showPassword:"แสดงรหัสผ่าน",hidePassword:"ซ่อนรหัสผ่าน"
  },
  zh: { navCheck:"检查链接",navTools:"安全工具",navLearn:"学习",navAbout:"关于",heroTitle:"信任链接之前，先检查它通往哪里。",heroIntro:"粘贴可疑网址。SafeURL 会将域名与官方站点目录比较，并说明下一步。",checkerTitle:"检查可疑链接",checkerSub:"不要打开链接，先复制并粘贴到下方。",urlLabel:"网站地址",checkButton:"检查链接",toolsTitle:"日常安全工具",sitesTabTitle:"官方网站",passwordTabTitle:"密码检查",historyTabTitle:"最近检查",learnTitle:"阻止链接诈骗的六个习惯" },
  ms: { navCheck:"Semak pautan",navTools:"Alat keselamatan",navLearn:"Belajar",navAbout:"Tentang",heroTitle:"Sebelum mempercayai pautan, semak destinasinya.",heroIntro:"Tampal URL yang mencurigakan. SafeURL membandingkan domain dengan direktori laman rasmi.",checkerTitle:"Semak pautan mencurigakan",urlLabel:"Alamat laman web",checkButton:"Semak pautan",toolsTitle:"Alat keselamatan harian",sitesTabTitle:"Laman rasmi",passwordTabTitle:"Semak kata laluan",historyTabTitle:"Semakan terkini" },
  my: { navCheck:"လင့်ခ်စစ်မည်",navTools:"လုံခြုံရေးကိရိယာများ",navLearn:"လေ့လာရန်",navAbout:"အကြောင်း",heroTitle:"လင့်ခ်ကို မယုံကြည်မီ ဘယ်ကိုသွားသည်ကို စစ်ဆေးပါ။",checkerTitle:"သံသယဖြစ်ဖွယ်လင့်ခ် စစ်ဆေးရန်",urlLabel:"ဝဘ်ဆိုက်လိပ်စာ",checkButton:"လင့်ခ်စစ်မည်",toolsTitle:"နေ့စဉ်လုံခြုံရေးကိရိယာများ" },
  lo: { navCheck:"ກວດລິ້ງ",navTools:"ເຄື່ອງມືຄວາມປອດໄພ",navLearn:"ຮຽນຮູ້",navAbout:"ກ່ຽວກັບ",heroTitle:"ກ່ອນເຊື່ອລິ້ງ ໃຫ້ກວດກ່ອນວ່າລິ້ງໄປໃສ",checkerTitle:"ກວດລິ້ງທີ່ໜ້າສົງໄສ",urlLabel:"ທີ່ຢູ່ເວັບໄຊ",checkButton:"ກວດລິ້ງ" },
  vi: { navCheck:"Kiểm tra liên kết",navTools:"Công cụ an toàn",navLearn:"Tìm hiểu",navAbout:"Giới thiệu",heroTitle:"Trước khi tin một liên kết, hãy kiểm tra nơi nó dẫn đến.",heroIntro:"Dán URL đáng ngờ. SafeURL so sánh tên miền với danh bạ trang web chính thức.",checkerTitle:"Kiểm tra liên kết đáng ngờ",urlLabel:"Địa chỉ trang web",checkButton:"Kiểm tra",toolsTitle:"Bộ công cụ an toàn hằng ngày" },
  km: { navCheck:"ពិនិត្យតំណ",navTools:"ឧបករណ៍សុវត្ថិភាព",navLearn:"ស្វែងយល់",navAbout:"អំពី",heroTitle:"មុនពេលជឿទុកចិត្តលើតំណ សូមពិនិត្យថាវានាំទៅណា។",checkerTitle:"ពិនិត្យតំណដែលគួរឱ្យសង្ស័យ",urlLabel:"អាសយដ្ឋានគេហទំព័រ",checkButton:"ពិនិត្យតំណ" },
  ja: { navCheck:"リンクを確認",navTools:"安全ツール",navLearn:"学ぶ",navAbout:"概要",heroTitle:"リンクを信頼する前に、行き先を確認しましょう。",heroIntro:"不審なURLを貼り付けると、公式サイト一覧とドメインを照合します。",checkerTitle:"不審なリンクを確認",urlLabel:"ウェブサイトのアドレス",checkButton:"リンクを確認",toolsTitle:"毎日の安全ツール",sitesTabTitle:"公式サイト",passwordTabTitle:"パスワード確認",historyTabTitle:"最近の確認" },
  ko: { navCheck:"링크 확인",navTools:"안전 도구",navLearn:"배우기",navAbout:"소개",heroTitle:"링크를 신뢰하기 전에 어디로 연결되는지 확인하세요.",heroIntro:"의심스러운 URL을 붙여 넣으면 공식 사이트 목록과 도메인을 비교합니다.",checkerTitle:"의심스러운 링크 확인",urlLabel:"웹사이트 주소",checkButton:"링크 확인",toolsTitle:"일상 안전 도구" },
  hi: { navCheck:"लिंक जाँचें",navTools:"सुरक्षा उपकरण",navLearn:"सीखें",navAbout:"परिचय",heroTitle:"किसी लिंक पर भरोसा करने से पहले जाँचें कि वह कहाँ जाता है।",heroIntro:"संदिग्ध URL पेस्ट करें। SafeURL डोमेन की तुलना आधिकारिक वेबसाइट निर्देशिका से करता है।",checkerTitle:"संदिग्ध लिंक जाँचें",urlLabel:"वेबसाइट का पता",checkButton:"लिंक जाँचें",toolsTitle:"रोज़मर्रा के सुरक्षा उपकरण" }
};

const state = {
  language: readTextStorage("safeurl-language", "en"),
  category: "All",
  query: "",
  page: 0,
  pageSize: 10,
  history: (() => { const value = readStorage("safeurl-history", []); return Array.isArray(value) ? value : []; })(),
  lastCheckedUrl: ""
};

const els = {
  menuButton: document.getElementById("menuButton"),
  nav: document.getElementById("primaryNav"),
  language: document.getElementById("languageSelect"),
  urlForm: document.getElementById("urlForm"),
  urlInput: document.getElementById("urlInput"),
  clearUrl: document.getElementById("clearUrl"),
  checkButton: document.getElementById("checkButton"),
  urlError: document.getElementById("urlError"),
  result: document.getElementById("resultPanel"),
  siteCount: document.getElementById("siteCount"),
  siteSearch: document.getElementById("siteSearch"),
  categorySelect: document.getElementById("categorySelect"),
  siteResults: document.getElementById("siteResults"),
  directoryPager: document.getElementById("directoryPager"),
  siteRange: document.getElementById("siteRange"),
  prevSites: document.getElementById("prevSites"),
  nextSites: document.getElementById("nextSites"),
  passwordInput: document.getElementById("passwordInput"),
  togglePassword: document.getElementById("togglePassword"),
  strengthBar: document.getElementById("strengthBar"),
  strengthLabel: document.getElementById("strengthLabel"),
  strengthScore: document.getElementById("strengthScore"),
  historyList: document.getElementById("historyList"),
  clearHistory: document.getElementById("clearHistory"),
  reportDialog: document.getElementById("reportDialog"),
  reportForm: document.getElementById("reportForm"),
  reportUrl: document.getElementById("reportUrl"),
  reportReason: document.getElementById("reportReason"),
  reportDetails: document.getElementById("reportDetails"),
  toast: document.getElementById("toast")
};

function readStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}

function readTextStorage(key, fallback) {
  try { return localStorage.getItem(key) || fallback; }
  catch { return fallback; }
}

function writeStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch { /* Private browsing or storage limits: keep current-session state. */ }
}

function tr(key, vars = {}) {
  const value = translations[state.language]?.[key] ?? translations.en[key] ?? key;
  return Object.entries(vars).reduce((text, [name, replacement]) => text.replace(`{${name}}`, replacement), value);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[char]);
}

function applyLanguage(language) {
  state.language = translations[language] ? language : "en";
  try { localStorage.setItem("safeurl-language", state.language); }
  catch { /* Language still applies for the current session. */ }
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const value = translations[state.language]?.[node.dataset.i18n] ?? translations.en[node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(node => {
    node.placeholder = tr(node.dataset.i18nPlaceholder);
  });
  els.language.value = state.language;
  renderCategories();
  renderSites();
  renderHistory();
  updatePassword();
}

function parseUrl(raw) {
  const trimmed = raw.trim();
  if (!trimmed) throw new Error("invalid");
  if (/^[a-z][a-z0-9+.-]*:/i.test(trimmed) && !/^https?:/i.test(trimmed)) throw new Error("protocol");
  const explicitProtocol = /^https?:\/\//i.test(trimmed);
  const candidate = explicitProtocol ? trimmed : `https://${trimmed}`;
  const parsed = new URL(candidate);
  if (!parsed.hostname || !parsed.hostname.includes(".")) throw new Error("invalid");
  return { parsed, explicitProtocol };
}

function normalizeHost(hostname) {
  return hostname.toLowerCase().replace(/^www\./, "").replace(/\.$/, "");
}

function isDomainMatch(host, domain) {
  return host === domain || host.endsWith(`.${domain}`);
}

function significantTokens(site) {
  const ignored = new Set(["thai","thailand","bank","official","group","online","service","services","university","department","ministry"]);
  return `${site.name} ${site.domain.split(".")[0]}`.toLowerCase().split(/[^a-z0-9]+/).filter(token => token.length >= 4 && !ignored.has(token));
}

function structuralWarnings(parsed) {
  const host = normalizeHost(parsed.hostname);
  const warnings = [];
  if (/^xn--|\.xn--/.test(host)) warnings.push("punycode");
  if (/^(?:\d{1,3}\.){3}\d{1,3}$/.test(host)) warnings.push("ip");
  if ((host.match(/-/g) || []).length >= 3) warnings.push("hyphens");
  if (host.split(".").length > 4) warnings.push("subdomains");
  if (/(?:login|verify|secure|account|update|support|wallet)[-_]/.test(host)) warnings.push("urgent-words");
  return warnings;
}

function analyzeUrl(raw) {
  const { parsed, explicitProtocol } = parseUrl(raw);
  const host = normalizeHost(parsed.hostname);
  const exact = trustedSites.find(site => isDomainMatch(host, site.domain));
  const warnings = structuralWarnings(parsed);
  const impersonated = exact ? null : trustedSites.find(site => significantTokens(site).some(token => host.replace(/[^a-z0-9]/g, "").includes(token)));
  const secure = explicitProtocol ? parsed.protocol === "https:" : true;
  let status = "caution";
  if (exact) status = "safe";
  else if (impersonated || warnings.length >= 2) status = "danger";
  return { raw, url: parsed.href, host, exact, impersonated, warnings, secure, status };
}

function iconUse(id) {
  return `<svg aria-hidden="true"><use href="#${id}"/></svg>`;
}

function showLoading() {
  els.result.hidden = false;
  els.result.className = "result-panel loading";
  els.result.innerHTML = `<div class="result-top"><span class="result-icon"><span class="spinner"></span></span><div class="result-copy"><span class="result-label">SafeURL</span><h3>${escapeHtml(tr("checking"))}</h3></div></div>`;
  els.checkButton.disabled = true;
}

function renderResult(analysis) {
  const { status, host, exact, impersonated, warnings, secure } = analysis;
  const config = status === "safe"
    ? { icon: "icon-check", label: tr("safeLabel"), title: tr("safeTitle"), text: tr("safeText", { name: exact.name }) }
    : status === "danger"
      ? { icon: "icon-alert", label: tr("dangerLabel"), title: tr("dangerTitle"), text: impersonated ? tr("dangerText", { name: impersonated.name, domain: impersonated.domain }) : tr("cautionText") }
      : { icon: "icon-info", label: tr("cautionLabel"), title: tr("cautionTitle"), text: tr("cautionText") };
  const transport = secure ? tr("signalHttps") : tr("signalHttp");
  const pattern = warnings.length ? tr("signalPatternRisk", { count: warnings.length }) : tr("signalPatternClear");
  const next = status === "safe" ? tr("nextSafe") : tr("nextCaution");
  els.result.className = `result-panel ${status}`;
  els.result.hidden = false;
  els.result.innerHTML = `
    <div class="result-top">
      <span class="result-icon">${iconUse(config.icon)}</span>
      <div class="result-copy">
        <span class="result-label">${escapeHtml(config.label)}</span>
        <h3>${escapeHtml(config.title)}</h3>
        <p>${escapeHtml(config.text)}</p>
        <p class="result-domain">${escapeHtml(host)}</p>
      </div>
      <button class="report-button" type="button" data-report-url="${escapeHtml(analysis.url)}">${iconUse("icon-flag")}<span>${escapeHtml(tr("report"))}</span></button>
    </div>
    <div class="result-details">
      <ul>
        <li>${iconUse(status === "safe" ? "icon-check" : "icon-info")}<span>${escapeHtml(status === "safe" ? tr("signalExact") : tr("cautionText"))}</span></li>
        <li>${iconUse(secure ? "icon-check" : "icon-alert")}<span>${escapeHtml(transport)}</span></li>
        <li>${iconUse(warnings.length ? "icon-alert" : "icon-check")}<span>${escapeHtml(pattern)}</span></li>
        <li>${iconUse("icon-arrow")}<span>${escapeHtml(next)}</span></li>
      </ul>
    </div>`;
  els.result.querySelector("[data-report-url]").addEventListener("click", openReportDialog);
  els.checkButton.disabled = false;
  state.lastCheckedUrl = analysis.url;
  saveHistory(analysis);
}

function saveHistory(analysis) {
  const item = { host: analysis.host, url: analysis.url, status: analysis.status, time: Date.now() };
  state.history = [item, ...state.history.filter(entry => entry.host !== item.host)].slice(0, 12);
  writeStorage("safeurl-history", state.history);
  renderHistory();
}

function renderCategories() {
  const categories = ["All", ...new Set(trustedSites.map(site => site.category))];
  els.categorySelect.innerHTML = categories.map(category => `<option value="${escapeHtml(category)}">${escapeHtml(category === "All" ? tr("all") : category)}</option>`).join("");
  els.categorySelect.value = state.category;
}

function filteredSites() {
  const query = state.query.trim().toLowerCase();
  return trustedSites.filter(site => {
    const categoryMatch = state.category === "All" || site.category === state.category;
    const queryMatch = !query || `${site.name} ${site.domain} ${site.category}`.toLowerCase().includes(query);
    return categoryMatch && queryMatch;
  });
}

function renderSites() {
  const results = filteredSites();
  els.siteCount.textContent = trustedSites.length;
  if (!results.length) {
    els.siteResults.innerHTML = `<div class="empty-state">${iconUse("icon-search")}<h4>${escapeHtml(tr("noSitesTitle"))}</h4><p>${escapeHtml(tr("noSitesText"))}</p></div>`;
    els.directoryPager.hidden = true;
    return;
  }
  const pageCount = Math.ceil(results.length / state.pageSize);
  state.page = Math.min(state.page, pageCount - 1);
  const start = state.page * state.pageSize;
  const end = Math.min(start + state.pageSize, results.length);
  els.siteResults.innerHTML = results.slice(start, end).map(site => `
    <div class="site-row">
      <span class="site-name">${escapeHtml(site.name)}</span>
      <span class="site-domain">${escapeHtml(site.domain)}</span>
      <span class="site-category">${escapeHtml(site.category)}</span>
    </div>`).join("");
  els.directoryPager.hidden = false;
  els.siteRange.textContent = `${start + 1}–${end} of ${results.length}`;
  els.prevSites.disabled = state.page === 0;
  els.nextSites.disabled = state.page >= pageCount - 1;
}

function renderHistory() {
  if (!state.history.length) {
    els.historyList.innerHTML = `<div class="empty-state">${iconUse("icon-clock")}<h4>${escapeHtml(tr("historyEmptyTitle"))}</h4><p>${escapeHtml(tr("historyEmptyText"))}</p></div>`;
    els.clearHistory.disabled = true;
    return;
  }
  els.clearHistory.disabled = false;
  const locale = state.language === "th" ? "th-TH" : state.language;
  els.historyList.innerHTML = state.history.map(entry => {
    const icon = entry.status === "safe" ? "icon-check" : entry.status === "danger" ? "icon-alert" : "icon-info";
    return `<div class="history-row"><span class="history-status ${entry.status}">${iconUse(icon)}</span><span class="history-domain">${escapeHtml(entry.host)}<small>${escapeHtml(entry.status === "safe" ? tr("safeTitle") : entry.status === "danger" ? tr("dangerTitle") : tr("cautionTitle"))}</small></span><time class="history-time" datetime="${new Date(entry.time).toISOString()}">${new Intl.DateTimeFormat(locale, { dateStyle:"medium", timeStyle:"short" }).format(entry.time)}</time></div>`;
  }).join("");
}

function updatePassword() {
  const value = els.passwordInput.value;
  const rules = {
    length: value.length >= 12,
    case: /[a-z]/.test(value) && /[A-Z]/.test(value),
    number: /\d/.test(value),
    symbol: /[^A-Za-z0-9]/.test(value),
    common: value.length > 0 && !/(password|1234|qwerty|admin|letmein|welcome|iloveyou)/i.test(value) && !/(.)\1{3,}/.test(value)
  };
  const score = Object.values(rules).filter(Boolean).length;
  document.querySelectorAll("#passwordRules [data-rule]").forEach(item => item.classList.toggle("passed", Boolean(rules[item.dataset.rule])));
  const labels = [tr("passwordEmpty"), tr("weak"), tr("weak"), tr("fair"), tr("strong"), tr("veryStrong")];
  const colors = ["var(--line-strong)", "var(--danger)", "var(--danger)", "var(--warning)", "var(--brand-teal)", "var(--success)"];
  els.strengthBar.style.transform = `scaleX(${value ? score / 5 : 0})`;
  els.strengthBar.style.background = colors[score];
  els.strengthLabel.textContent = value ? labels[score] : tr("passwordEmpty");
  els.strengthScore.textContent = value ? tr("scoreText", { score }) : "";
}

function openReportDialog(event) {
  const url = event?.currentTarget?.dataset.reportUrl || state.lastCheckedUrl;
  els.reportUrl.value = url;
  els.reportReason.value = "";
  els.reportDetails.value = "";
  if (typeof els.reportDialog.showModal === "function") els.reportDialog.showModal();
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => els.toast.classList.remove("show"), 2600);
}

function activateTool(button) {
  document.querySelectorAll(".tool-tab").forEach(tab => {
    const active = tab === button;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  document.querySelectorAll(".tool-panel").forEach(panel => {
    const active = panel.id === button.dataset.panel;
    panel.classList.toggle("active", active);
    panel.hidden = !active;
  });
}

els.menuButton.addEventListener("click", () => {
  const open = els.nav.classList.toggle("open");
  document.body.classList.toggle("menu-open", open);
  els.menuButton.setAttribute("aria-expanded", String(open));
  els.menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  els.menuButton.querySelector("use").setAttribute("href", open ? "#icon-close" : "#icon-menu");
});

els.nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  els.nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  els.menuButton.setAttribute("aria-expanded", "false");
  els.menuButton.querySelector("use").setAttribute("href", "#icon-menu");
}));

els.language.addEventListener("change", event => applyLanguage(event.target.value));

els.urlInput.addEventListener("input", () => {
  els.clearUrl.hidden = !els.urlInput.value;
  els.urlError.textContent = "";
});

els.clearUrl.addEventListener("click", () => {
  els.urlInput.value = "";
  els.clearUrl.hidden = true;
  els.result.hidden = true;
  els.urlInput.focus();
});

els.urlForm.addEventListener("submit", event => {
  event.preventDefault();
  els.urlError.textContent = "";
  try {
    parseUrl(els.urlInput.value);
  } catch (error) {
    els.urlError.textContent = tr(error.message === "protocol" ? "unsupportedProtocol" : "invalidUrl");
    els.urlInput.focus();
    return;
  }
  showLoading();
  window.setTimeout(() => {
    try { renderResult(analyzeUrl(els.urlInput.value)); }
    catch { els.checkButton.disabled = false; els.urlError.textContent = tr("invalidUrl"); els.result.hidden = true; }
  }, 520);
});

document.querySelectorAll(".tool-tab").forEach(button => {
  button.addEventListener("click", () => activateTool(button));
  button.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const tabs = [...document.querySelectorAll(".tool-tab")];
    const current = tabs.indexOf(button);
    const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (current + (["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1) + tabs.length) % tabs.length;
    activateTool(tabs[next]);
    tabs[next].focus();
  });
});
els.siteSearch.addEventListener("input", event => { state.query = event.target.value; state.page = 0; renderSites(); });
els.categorySelect.addEventListener("change", event => { state.category = event.target.value; state.page = 0; renderSites(); });
els.prevSites.addEventListener("click", () => { if (state.page > 0) { state.page -= 1; renderSites(); } });
els.nextSites.addEventListener("click", () => { state.page += 1; renderSites(); });
els.passwordInput.addEventListener("input", updatePassword);
els.togglePassword.addEventListener("click", () => {
  const showing = els.passwordInput.type === "text";
  els.passwordInput.type = showing ? "password" : "text";
  els.togglePassword.setAttribute("aria-label", showing ? tr("showPassword") : tr("hidePassword"));
});
els.clearHistory.addEventListener("click", () => { state.history = []; writeStorage("safeurl-history", []); renderHistory(); showToast(tr("historyCleared")); });

document.getElementById("closeReport").addEventListener("click", () => els.reportDialog.close());
document.getElementById("cancelReport").addEventListener("click", () => els.reportDialog.close());
els.reportForm.addEventListener("submit", event => {
  if (!els.reportReason.value) { event.preventDefault(); els.reportReason.focus(); return; }
  const storedReports = readStorage("safeurl-reports", []);
  const reports = Array.isArray(storedReports) ? storedReports : [];
  reports.unshift({ url: els.reportUrl.value, reason: els.reportReason.value, details: els.reportDetails.value.trim(), time: Date.now() });
  writeStorage("safeurl-reports", reports.slice(0, 25));
  showToast(tr("reportSaved"));
});

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    document.querySelectorAll(".primary-nav a").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}` || (visible.target.id === "top" && link.getAttribute("href") === "#check")));
  }, { rootMargin: "-30% 0px -60%", threshold: [0, .25, .6] });
  document.querySelectorAll("#top, #tools, #learn").forEach(section => sectionObserver.observe(section));
}

applyLanguage(state.language);
renderSites();
renderHistory();
updatePassword();
