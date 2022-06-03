/* First step here is to create the ready master function that loads once DOM is ready */
$(document).ready(function () {
    //Global Variables Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //Object that holds questions, answers, and correct answer:

    var allQuestions = [
        {
          "№": 1,
          "question": "Хамгийн анхны блокчэйн гэрлэлт Америкийн аль мужид болсон бэ? ",
          "correctAnswer": "Калифорн",
          "answers": {
            "a": "Нью Йорк",
            "b": "Калифорн",
            "c": "Вашингтон",
            "d": "Илинойс"
          }
          
        },
        {
          "№": 2,
          "question": "Этэриумын анхны Hard fork нь ямар нэртэй вэ?",
          "correctAnswer": "Homestead",
          "answers": {
            "a": "London",
            "b": "Byzantium",
            "c": "Homestead",
            "d": "Bill Gates"
          }
          
        },
        {
          "№": 3,
          "question": "Биткойныг үүсгэн байгуулсан хүнийг хэн гэж үздэг бэ?",
          "correctAnswer": "Сатоши Накамото",
          "answers": {
            "a": "Сатоши Накамото",
            "b": "Франк Вилтнер",
            "c": "Виталик Бутерин",
            "d": "Билл Гэйтс"
          }
          
        },
        {
          "№": 4,
          "question": "Bitcoin.org домайн анх хэдэн онд бүртгэгдсэн бэ?",
          "correctAnswer": "2008",
          "answers": {
            "a": "2010",
            "b": "2013",
            "c": "2009",
            "d": "2008"
          }
          
        },
        {
          "№": 6,
          "question": "USDT буюу Tether нь ямар төрлийн крипто хөрөнгөд ордог бэ?",
          "correctAnswer": 'Stablecoin',
          "answers": {
            "a": 'Bill Gates Coin',
            "b": 'Blockchain Coin',
            "c": 'USDCoin',
            "d": 'Stablecoin'
          }
          
        },
        {
          "№": 7,
          "question": "Дэлхийн валютын хэд орчим хувь цахим хэлбэрээр гүйлгээнд оролцдог вэ ?",
          "correctAnswer": "90 орчим",
          "answers": {
            "a": "80 орчим",
            "b": "90 орчим",
            "c": "60 орчим",
            "d": "70 орчим"
          }
          
        },
        {
          "№": 8,
          "question": "Хамгийн анхны биткойн хэдэн онд олборлогдсон бэ?",
          "correctAnswer": "2009",
          "answers": {
            "a": "2009",
            "b": "2008",
            "c": "2010",
            "d": "2013"
          }
          
        },
        {
          "№": 9,
          "question": "АрдКойн анх зах зээлд хэдэн төгрөгөөр гарч байсан бэ?",
          "correctAnswer": "1 төгрөг",
          "answers": {
            "a": "10 төгрөг",
            "b": "15 төгрөг",
            "c": "5 төгрөг",
            "d": "1 төгрөг"
          }
          
        },
        {
          "№": 10,
          "question": "АрдКойн зах зээлд хэдэн ширхэг гарсан бэ?",
          "correctAnswer": "5.1 тэрбум",
          "answers": {
            "a": "100 тэрбум",
            "b": "5.1 тэрбум",
            "c": "10 тэрбум",
            "d": "15 тэрбум"
          }
          
        },
        {
          "№": 11,
          "question": "Их хэмжээний Койн эзэмшдэг хүнийг юу гэж нэрлэдэг вэ?",
          "correctAnswer": "Whale",
          "answers": {
            "a": "Shark",
            "b": "Squid",
            "c": "Tail",
            "d": "Whale"
          }
          
        },
        {
          "№": 12,
          "question": "Биткойны нийлүүлэлт хэд вэ? ",
          "correctAnswer": "21,000,000",
          "answers": {
            "a": "20,000,000",
            "b": "19,000,000",
            "c": "21,000,000",
            "d": "22,000,000"
          }
          
        },
        {
          "№": 13,
          "question": "Дэлхийд хамгийн анх криптовалютаар юу худалдаж авч байсан бэ?",
          "correctAnswer": "Пицца",
          "answers": {
            "a": "Пицца",
            "b": "Зурагт",
            "c": "Компьютер",
            "d": "Машин"
          }
          
        },
        {
          "№": 14,
          "question": "Хамгийн анхны криптовалют?",
          "correctAnswer": "Bitcoin",
          "answers": {
            "a": "Luna",
            "b": "Bitcoin",
            "c": "Dogecoin",
            "d": "Ether"
          }
          
        },
        {
          "№": 15,
          "question": "Эдгээр орнуудын аль нь Bitcoin -ийн хамгийн том олборлогчдын нэг вэ?",
          "correctAnswer": "Хятад",
          "answers": {
            "a": "Франц",
            "b": "Балба",
            "c": "Хятад",
            "d": "Алжир"
          }
          
        },
        {
          "№": 16,
          "question": "iDAX биржийн Crypto Cash үйлчилгээний зориулалт",
          "correctAnswer": "Койноо барьцаалан зээл авах",
          "answers": {
            "a": "Койн зээлэх",
            "b": "Хадгаламж",
            "c": "Зарлага гаргах",
            "d": "Койноо барьцаалан зээл авах"
          }
          
        },
        {
          "№": 17,
          "question": "Биткойны 0.00000001-тэй тэнцэх хамгийн бага нэгжийн нэр?",
          "correctAnswer": "Satoshi",
          "answers": {
            "a": "Satoshi",
            "b": "Minibit",
            "c": "Smalbit",
            "d": "Ethereum"
          }
          
        },
        {
          "№": 18,
          "question": "Биткойноос бусад койнуудыг ерөнхийлөн нэрлэдэг нэр?",
          "correctAnswer": "Altcoin",
          "answers": {
            "a": "Acoin",
            "b": "Altcoin",
            "c": "Money",
            "d": "Othercoin"
          }
          
        },
        {
          "№": 19,
          "question": "Криптовалютын ертөнцөд ямар өдрийг Биткойн Пиццаны өдөр болгон тэмдэглэдэг вэ?",
          "correctAnswer": "5 сарын 22",
          "answers": {
            "a": "7 сарын 4",
            "b": "2 сарын 5",
            "c": "5 сарын 22",
            "d": "12 сарын 10"
          }
          
        },
        {
          "№": 20,
          "question": "Санхүүгийн бүтээгдэхүүнийг төвлөрсөн бус блокчэйн сүлжээнд ашиглах боломжтой системийг нэрлэдэг?",
          "correctAnswer": "DeFi",
          "answers": {
            "a": "FinChain",
            "b": "Bona FiDe",
            "c": "DCFP (decentralized Financial Products)",
            "d": "DeFi"
          }
          
        },
        {
          "№": 21,
          "question": "Блокчэйн технологийг анх хэн үндэслэсэн бэ?",
          "correctAnswer": "Satoshi Nakomoto",
          "answers": {
            "a": "Mark Zuckerberg",
            "b": "Satoshi Nakomoto",
            "c": "Peter Smith",
            "d": "Changpeng Zhao"
          }
          
        },
        {
          "№": 22,
          "question": "Хэн гэдэг реппэр 2015 онд \"Animal Ambition\" цомгоо Биткойноор худалдаж авах боломжтой болгож, 700 гаруй BTC борлуулалт хийсэн бэ?",
          "correctAnswer": "50 Cent",
          "answers": {
            "a": "50 Cent",
            "b": "Eminem",
            "c": "Jay-Z",
            "d": "Kanye West"
          }
          
        },
        {
          "№": 23,
          "question": "2018 онд аль байгууллага блокчэйнд суурилсан Бонд-I нэртэй бонд гаргасан бэ?",
          "correctAnswer": "Дэлхийн Банк",
          "answers": {
            "a": "Олон Улсын Валютын Сан",
            "b": "Дэлхийн Банк",
            "c": "Европын Холбоо",
            "d": "Дэлхийн худалдааны байгууллага"
          }
          
        },
        {
          "№": 24,
          "question": "\"DApp\" дээрх D нь ямар утгатай вэ?",
          "correctAnswer": "Decentralized",
          "answers": {
            "a": "Distributed",
            "b": "Defined",
            "c": "Decentralized",
            "d": "Dogecoin"
          }
          
        },
        {
          "№": 25,
          "question": "Хэрэв 1 BTC нь 100 сая Сатоши -тай тэнцүү бол 1 ETH нь 1 тэрбум _____ -тай тэнцүү вэ?",
          "correctAnswer": "Gwei",
          "answers": {
            "a": "Ethbits",
            "b": "Sols",
            "c": "Matic",
            "d": "Gwei"
          }
          
        },
        {
          "№": 26,
          "question": "Этэриумын үүсгэн байгуулагчдын нэг Gavin Wood хожим 2016 онд Этэриумээс гарч өөрийн ямар сүлжээг эхлүүлсэн вэ?",
          "correctAnswer": "Polkadot",
          "answers": {
            "a": "Polkadot",
            "b": "Cardano",
            "c": "Solana",
            "d": "Harmony"
          }
          
        },
        {
          "№": 27,
          "question": "Биткойны боломжит нөөцийн хэдэн хувь нь одоогоор олборлогдсон байгаа вэ?",
          "correctAnswer": "90%",
          "answers": {
            "a": "48%",
            "b": "90%",
            "c": "32%",
            "d": "25%"
          }
          
        },
        {
          "№": 28,
          "question": "NBA тоглогчдынхоо онцлох үйл явдлын NFT борлуулдаг платформын нэр? ",
          "correctAnswer": "Top Shot",
          "answers": {
            "a": "Sizzle Reel",
            "b": "Court Stars",
            "c": "Top Shot",
            "d": "Highlight Frame"
          }
          
        },
        {
          "№": 29,
          "question": "Хэрэглэгчид виртуал ертөнцөд газар авах, барих, зарах боломж олгодог Этэриумын блокчэйн дээр суурилсан төвлөрсөн бус 3D виртуал платформын нэр?",
          "correctAnswer": "Decentraland",
          "answers": {
            "a": "Minecraft",
            "b": "Runescape",
            "c": "Sims",
            "d": "Decentraland"
          }
          
        },
        {
          "№": 30,
          "question": "2021 оны 6 -р сард Төв Америкийн аль улс биткоиныг хууль ёсны төлбөрийн хэрэгсэл болгон хүлээн авсан дэлхийн анхны улс болсон бэ?",
          "correctAnswer": "Эл Салвадор",
          "answers": {
            "a": "Эл Салвадор",
            "b": "Куба",
            "c": "Панам",
            "d": "Гватемал"
          }
          
        },
        {
          "№": 31,
          "question": "Японы Шиба Инү үүлдрийн нохой нь онлайн меме хэлбэрээр алдартай болсон бөгөөд ямар криптовалюттай холбоотой вэ?",
          "correctAnswer": "Dogecoin",
          "answers": {
            "a": "Luckycoin",
            "b": "Dogecoin",
            "c": "Litecoin",
            "d": "Stellar"
          }
          
        },
        {
          "№": 32,
          "question": "Cardano Foundation ямар криптовалютыг алдарт математикчийн нэрээр  нэрлэсэн бэ?",
          "correctAnswer": "ADA",
          "answers": {
            "a": "ETH",
            "b": "THETA",
            "c": "ADA",
            "d": "SOL"
          }
          
        },
        {
          "№": 33,
          "question": "HODL бол криптовалютыг урт хугацаанд хадгалах стратеги юм. Энэ нь бичгийн алдаа хэлбэрээр эхэлсэн боловч одоо юу гэсэн утгатай вэ?",
          "correctAnswer": "Hold On for Dear Life",
          "answers": {
            "a": "Hoarding of Decentralized Litecoin",
            "b": "Happy once Doge Lifts",
            "c": "Having Old Decrypted Ledgers",
            "d": "Hold On for Dear Life"
          }
          
        },
        {
          "№": 34,
          "question": "Дэлхийн хамгийн идэвхтэй арилжаалагддаг криптовалют юу вэ?",
          "correctAnswer": "Tether",
          "answers": {
            "a": "Tether",
            "b": "Bitcoin",
            "c": "Ether",
            "d": "Dogecoin"
          }
          
        },
        {
          "№": 35,
          "question": "Хамгийн анх аль блокчэйн дээр ухаалаг гэрээг байгуулах боломжтой болсон бэ?",
          "correctAnswer": "Ethereum",
          "answers": {
            "a": "Cardano",
            "b": "Ethereum",
            "c": "Bitcoin",
            "d": "Matic"
          }
          
        },
        {
          "№": 36,
          "question": "NFT гэж юу гэсэн үгний товчлол вэ?",
          "correctAnswer": "Non-fungible token",
          "answers": {
            "a": "No Further Text",
            "b": "Non-fungeble token",
            "c": "Non-fungible token",
            "d": "Non-forgettable token"
          }
          
        },
        {
          "№": 37,
          "question": "Юуг NFT болгох боломжтой вэ?",
          "correctAnswer": "Бүгдийг",
          "answers": {
            "a": "Зөвхөн дижитал уран бүтээлийг",
            "b": "Биет зүйлсээс бусдыг",
            "c": "Зөвхөн урлагийн бүтээл, дуу, хөгжим гэх мэтийг",
            "d": "Бүгдийг"
          }
          
        },
        {
          "№": 38,
          "question": "NFT хэзээ үүссэн бэ?",
          "correctAnswer": "2014",
          "answers": {
            "a": "2014",
            "b": "2022",
            "c": "2019",
            "d": "2017"
          }
          
        },
        {
          "№": 39,
          "question": "Ard.art гэж юу вэ?",
          "correctAnswer": "NFT бирж",
          "answers": {
            "a": "Хувьцааны бирж",
            "b": "NFT бирж",
            "c": "Койны бирж",
            "d": "Ард Санхүүгийн Нэгдлийн Виртуал салбар"
          }
          
        },
        {
          "№": 40,
          "question": "NFT ямар блокчэйн дээр ихэвчлэн оршиж байгаа вэ?",
          "correctAnswer": "Этэриум",
          "answers": {
            "a": "Биткойн",
            "b": "Солана",
            "c": "Этэриум",
            "d": "Фантом"
          }
          
        },
        {
          "№": 41,
          "question": "Энэтхэгээс гаралтай Polygon токен ямар алдартай хөрөнгө оруулагчаас санхүүжилт авсан бэ?",
          "correctAnswer": 'Mark Cuban',
          "answers": {
            "a": 'Warren Buffett',
            "b": 'Sachin Bansal',
            "c": 'Ratan Tata',
            "d": 'Mark Cuban'
          }
          
        },
        {
          "№": 42,
          "question": "WEB 3.0 -д юу хамаарахгүй вэ",
          "correctAnswer": "Банкны систем",
          "answers": {
            "a": "Метаверс",
            "b": "Блокчэйн",
            "c": "Банкны систем",
            "d": "NFT"
          }
          
        },
        {
          "№": 43,
          "question": "Дэлхийн хамгийн том NFT маркет аль нь вэ",
          "correctAnswer": "Opensea",
          "answers": {
            "a": "Opensea",
            "b": "Rarible",
            "c": "Mintable",
            "d": "Foundation"
          }
          
        },
        {
          "№": 44,
          "question": "Аль музей NFT гаргаж байсан бэ",
          "correctAnswer": 'Эрмитаж',
          "answers": {
            "a": 'Монголын түүхийн музей',
            "b": 'Луврын музей',
            "c": 'Хятадын үндэсний төв музей',
            "d": 'Эрмитаж'
          }
          
        },
        {
          "№": 45,
          "question": "Алдарт NFT уран бүтээлч BEEPLE-н хамгийн үнэтэй зарагдсан NFT хэдээр зарагдсан бэ?",
          "correctAnswer": "69 сая доллар",
          "answers": {
            "a": "13 сая доллар",
            "b": "69 сая доллар",
            "c": "43 сая доллар",
            "d": "92 сая доллар"
          }
          
        },
        {
          "№": 46,
          "question": "Аль нь NFT -ны онцлог биш вэ?",
          "correctAnswer": "Шилжүүлэх боломжтой",
          "answers": {
            "a": "Устгагдахгүй",
            "b": "Дахин давтагдашгүй",
            "c": "Шилжүүлэх боломжтой",
            "d": "блокчэйнд бүртгэлтэй"
          }
          
        },
        {
          "№": 47,
          "question": "NFT хэдэн онд хамгийн их арилжаалагдсан бэ",
          "correctAnswer": "2021",
          "answers": {
            "a": "2020",
            "b": "2014",
            "c": "2022",
            "d": "2021"
          }
          
        },
        {
          "№": 48,
          "question": "Метамаск гэж юу вэ",
          "correctAnswer": 'Крипто хэтэвч',
          "answers": {
            "a": 'NFT маркет',
            "b": 'Крипто хэтэвч',
            "c": 'Хөрөнгө оруулалтын компани',
            "d": 'Хакерын бүлэг'
          }
          
        },
        {
          "№": 49,
          "question": "Монгол койнуудын нэгдсэн мэдээллийг хаанаас авч болох вэ ?",
          "correctAnswer": "Krypto.mn",
          "answers": {
            "a": "Krypto.mn",
            "b": "Монгол хувьцааны биржүүдээс",
            "c": "Ikon",
            "d": "FB"
          }
          
        },
        {
          "№": 50,
          "question": "NFT -д хөрөнгө оруулах боломжтой юу?",
          "correctAnswer": "Судалгааны үндсэн дээр оруулах боломжтой",
          "answers": {
            "a": "Боломжгүй",
            "b": "Судалгааны үндсэн дээр оруулах боломжтой",
            "c": "Зөвхөн компаниар дамжин оруулах",
            "d": "Хэт өндөр үнэтэй тул хөрөнгө оруулахад тохиромжгүй"
          }
          
        },
        {
          "№": 51,
          "question": "Монгол койнуудын нэгдсэн мэдээллийг хаанаас авч болох вэ ?",
          "correctAnswer": "Krypto.mn",
          "answers": {
            "a": "Krypto.mn",
            "b": "Монгол хувьцааны биржүүдээс",
            "c": "Ikon",
            "d": "FB"
          }
          
        },
        {
          "№": 52,
          "question": "CryptoPunks юуны зурагтай вэ?",
          "correctAnswer": "Хүн",
          "answers": {
            "a": "Нохой",
            "b": "Сармагчин",
            "c": "Муужгай",
            "d": "Хүн"
          }
          
        },
        {
          "№": 53,
          "question": "BEEPLE гэж хэн бэ?",
          "correctAnswer": "NFT артист",
          "answers": {
            "a": "NFT артист",
            "b": "Биткойныг анх зохиосон хүн",
            "c": "Хөрөнгө оруулагч",
            "d": "Хамгийн баян арилжаачин"
          }
          
        },
        {
          "№": 54,
          "question": "NFT-н түгээмэл хэрэглэгддэг стандартууд аль вэ?",
          "correctAnswer": "721, 1155",
          "answers": {
            "a": "721, 20",
            "b": "20, 1155",
            "c": "721, 1155",
            "d": "1315"
          }
          
        },
        {
          "№": 55,
          "question": "Хамгийн анхны NFT ашигласан тоглоом юу вэ?",
          "correctAnswer": "Spell of Genesis",
          "answers": {
            "a": "Spell of Genesis",
            "b": "Crypto Kitties",
            "c": "Crypto Punk",
            "d": "Bored Ape"
          }
          
        },
        {
          "№": 56,
          "question": "Хамгийн алдартай NFT тоглоом аль нь вэ?",
          "correctAnswer": "Axie Infinity",
          "answers": {
            "a": "BigTime",
            "b": "Axie Infinity",
            "c": "Decentraland",
            "d": "The Sandbox"
          }
          
        },
        {
          "№": 57,
          "question": "АрдКойны төрөлх бирж аль вэ?",
          "correctAnswer": "DAX",
          "answers": {
            "a": "Coinhub",
            "b": "Trade",
            "c": "DAX",
            "d": "Complex"
          }
          
        },
        {
          "№": 58,
          "question": "Хатуу дискний ашиглагдаагүй зайг түрээсийн төлбөр төлөх зориулалттай нээлттэй эх сурвалжтай криптовалютын нэр?",
          "correctAnswer": "Filecoin",
          "answers": {
            "a": "Filecoin",
            "b": "Monero",
            "c": "Stellar",
            "d": "LINK"
          }
          
        },
        {
          "№": 59,
          "question": "Монеро олборлолтын ямар алгоритм ашигладаг вэ?",
          "correctAnswer": 'RandomX',
          "answers": {
            "a": 'CryptoNight',
            "b": 'SHA-256',
            "c": 'CryptoMining',
            "d": 'RandomX'
          }
          
        },
        {
          "№": 60,
          "question": "Хамгийн анх аль блокчэйн дээр ухаалаг гэрээг байгуулах боломжтой болсон бэ?",
          "correctAnswer": "Ethereum",
          "answers": {
            "a": "Cardano",
            "b": "Ethereum",
            "c": "Bitcoin",
            "d": "Matic"
          }
          
        },
        {
          "№": 61,
          "question": "Биткойны бүх цагийн үеийн хамгийн өндөр дүн аль нь бэ?",
          "correctAnswer": "~67000 доллар",
          "answers": {
            "a": "~40000 доллар",
            "b": "~67000 доллар",
            "c": "~55000 доллар",
            "d": "~70000 доллар"
          }
          
        },
        {
          "№": 62,
          "question": "Блокчэйн технологи анх ямар зорилготойгоор санаачлагдаж байсан бэ?",
          "correctAnswer": "Spam имэйл шалгах",
          "answers": {
            "a": "Хэрэглэгч бүртгэл",
            "b": "Цахим тооцоолол",
            "c": "Spam имэйл шалгах",
            "d": "Цасны хайлах хурдыг тодорхойлох"
          }
          
        },
        {
          "№": 63,
          "question": "Stake хийгдсэн хэмжээгээрээ Ether-г гүйцэн 2-р байранд орсон койн?",
          "correctAnswer": 'Luna',
          "answers": {
            "a": 'Polkadot',
            "b": 'Luna',
            "c": 'Cardano',
            "d": 'Cosmos'
          }
          
        },
        {
          "№": 64,
          "question": "Хамгийн үнэтэй NFT хэдээр зарагдсан бэ",
          "correctAnswer": "91.8 сая доллар",
          "answers": {
            "a": "91.8 сая доллар",
            "b": "80.5 сая доллар",
            "c": "50.1 сая доллар",
            "d": "10.23 сая доллар"
          }
          
        },
        {
          "№": 65,
          "question": "Bored Ape NFT юуны зурагтай вэ",
          "correctAnswer": "Сармагчин",
          "answers": {
            "a": "Туулай",
            "b": "Сармагчин",
            "c": "Хүн",
            "d": "Морь"
          }
          
        },
        {
          "№": 66,
          "question": "Монголын анхны NFT дуудлага худалдааг аль платформ дээр хийсэн бэ?",
          "correctAnswer": "Ardshop",
          "answers": {
            "a": "KFC",
            "b": "Ardshop",
            "c": "Shoppy",
            "d": "Krypto.mn"
          }
          
        },
        {
          "№": 67,
          "question": "NFT орших боломжгүй блокчэйн аль нь бэ?",
          "correctAnswer": "Bitcoin",
          "answers": {
            "a": "Ethereum",
            "b": "Bitcoin",
            "c": "Stellar",
            "d": "Polygon"
          }
          
        },
        {
          "№": 68,
          "question": "Eminem, Justin Bieber, Jimmy Fallon нар аль NFT коллекцийн эзэмшигч бэ?",
          "correctAnswer": "Bored Ape Yacht Club",
          "answers": {
            "a": "Hollywood NFT Club",
            "b": "NeverLand ",
            "c": "Bored Ape Yacht Club",
            "d": "MontleyFool"
          }
          
        },
        {
          "№": 69,
          "question": "Аль Метаверст Snoop Dogg-н хөрш байж болох вэ?",
          "correctAnswer": 'The Sandbox',
          "answers": {
            "a": 'Decentraland',
            "b": 'The Sandbox',
            "c": 'Gala Metaverse',
            "d": 'Earth 2.0'
          }
          
        },
        {
          "№": 70,
          "question": "Өдөр бүр 1 ширхгээр хэвлэгддэг NFT коллекц аль нь вэ?",
          "correctAnswer": "The Nouns",
          "answers": {
            "a": "BEEPLE",
            "b": "The Daily",
            "c": "The Nouns",
            "d": "Times magazine NFT"
          }
          
        },
        {
          "№": 71,
          "question": "Aль нь Blockchain хөгжүүлэлтийн хэл биш вэ?",
          "correctAnswer": "PERL",
          "answers": {
            "a": "Solidity",
            "b": "Haskell",
            "c": "Go",
            "d": "PERL"
          }
          
        },
        {
          "№": 72,
          "question": "Хамгийн өндөр үнэлгээтэй  NFT коллекц аль нь вэ?",
          "correctAnswer": "Bored Ape Yacht Club",
          "answers": {
            "a": "Bored Ape Yacht Club",
            "b": "Crypto Kitties",
            "c": "BEEPLE",
            "d": "Akashi"
          }
          
        },
        {
          "№": 73,
          "question": "Аль нь метаверс биш вэ?",
          "correctAnswer": "Facebook (META)",
          "answers": {
            "a": "PUBG",
            "b": "Facebook (META)",
            "c": "Minecraft",
            "d": "Sandbox"
          }
          
        },
        
      ]
        

    //This will hold the new shuffled questions
    var shuffledQuestions = [];
    //This will hold the number of seconds on timer
    var timeRemaining;
    //This will hold the timer interval in milliseconds
    var intervalId = setInterval(countdown, 1000);
    //This will hold the number of correct questions answered by user
    var qCorrect = 0;
    //This will hold the number of wrong questions answered by user
    var qWrong = 0;
    //This will hold the number of questions not answered by user
    var qUnanswered = 0;
    //This will hold the index number user is on
    var indexNumber;



    //Functions Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    //This function will start the game by displaying the timer, 1st shuffled question, answer buttons, and hide the start button
    function startGame() {
        //This on click event is for the user to click start button
        $("#startButton").click(function () {
            //When user hits start indexNumber will be set to 0, pull the first question out of shuffledQuestions
            indexNumber = 0;
            //When user hits start, timer will be set to 30 seconds
            timeRemaining = 20;
            //This function call will display timer and start counting down
            countdown();
            //This line makes the form show on the DOM
            $("#questionForm").show();
            //This line hides the start button
            $("#startButton").hide();
            //This calls the shuffle function to shuffle allQuestions object
            shuffle(allQuestions);
            //This puts the shuffled allQuestions into a new variable
            shuffledQuestions.push(allQuestions);
            //This updates the HTML with the first shuffled Question
            $("#question").text(shuffledQuestions[0][indexNumber].question);
            //This will update the HTML with the answer choices of first shuffled question
            $("#answerA").text(shuffledQuestions[0][indexNumber].answers.a);
            $("#answerB").text(shuffledQuestions[0][indexNumber].answers.b);
            $("#answerC").text(shuffledQuestions[0][indexNumber].answers.c);
            $("#answerD").text(shuffledQuestions[0][indexNumber].answers.d);
        });
    }

    //This function shuffles an array whenever it is called and given the parameter array
    function shuffle(array) {
        //Local variable created here
        var counter = array.length, temp, index;
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    //This function is for making the timer run down from 30 seconds
    function countdown() {
        if (timeRemaining === 0) {
            //This line stops the counter
            clearTimeout(intervalId);
            //This line will execute something else whenever time runs out
            console.log("Time is UP!");
            //This line adds 1 to the qUnanswered variable
            qUnanswered++;
            //This line will add 1 to the indexNumber variable if timer hits 0
            indexNumber++;
            //This line will call the nextInLine function
            nextInLine();
        } else {
            //This line updates HTML with the ticking counter
            $("#timer").html("Хугацаа: " + timeRemaining);
            //This line decreases the counter by one second
            timeRemaining--;
        }
    }


    //This function will hold the user's input to the question, check's wether wrong or right, adds to counter
    function userAnswer() {
        //This on click event recognizes user input A
        $("#answerA").click(function () {
            if (shuffledQuestions[0][indexNumber].answers.a === shuffledQuestions[0][indexNumber].correctAnswer) {
                //This adds 1 to the qCorrect variable
                qCorrect++;
                //This line will add 1 to the indexNumber if correct
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            } else {
                qWrong++;
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            }
        });
        //This on click event recognizes user input B
        $("#answerB").click(function () {
            if (shuffledQuestions[0][indexNumber].answers.b === shuffledQuestions[0][indexNumber].correctAnswer) {
                //This adds 1 to the qCorrect variable
                qCorrect++;
                //This line will add 1 to the indexNumber if correct
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            } else {
                //This adds 1 to the qWrong variable
                qWrong++;
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            }
        });
        //This on click event recognizes user input C
        $("#answerC").click(function () {
            if (shuffledQuestions[0][indexNumber].answers.c === shuffledQuestions[0][indexNumber].correctAnswer) {
                //This adds 1 to the qCorrect variable
                qCorrect++;
                //This line will add 1 to the indexNumber if correct
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            } else {
                //This adds 1 to the qWrong variable
                qWrong++;
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            }
        });
        //This on click event recognizes user input D
        $("#answerD").click(function () {
            if (shuffledQuestions[0][indexNumber].answers.d === shuffledQuestions[0][indexNumber].correctAnswer) {
                //This adds 1 to the qCorrect variable
                qCorrect++;
                //This line will add 1 to the indexNumber if correct
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            } else {
                //This adds 1 to the qWrong variable
                qWrong++;
                indexNumber++;
                //This line stops the counter
                clearTimeout(intervalId);
                //This calls next in line function
                nextInLine();
            }
        });

    }

    //This function will run after time expires or user selects right or wrong answer and pull the next question
    function nextInLine() {
        if (indexNumber === 8) {
            //This line will clear the interval timer
            clearTimeout(intervalId);
            //This line will hide the questions container
            $("#questionForm").hide();
            //This line will show the counters container
            $("#counterForm").show();
            //This line will display users correct questions number
            $("#qCorrect").html("Зөв хариулсан: " + qCorrect);
            //This line will display users wrong questions number
            $("#qWrong").html("Буруу: " + qWrong);
            //This line will display users unasnwered questions number
            $("#qUnanswered").html("Хариулаагүй: " + qUnanswered);
            //This line will show the reset button
            $("#resetButton").show();
        } else {

            //Will need to set a new interval for the timer
            intervalId = setInterval(countdown, 1000);
            //Time remaining will need to be reset again
            timeRemaining = 20;
            //This function call will redisplay counter and start counting down
            countdown();
            //This updates the HTML with the next indexNumber shuffled Question
            $("#question").text(shuffledQuestions[0][indexNumber].question);
            //This will update the HTML with the answer choices of the indexNumber shuffled question
            $("#answerA").text(shuffledQuestions[0][indexNumber].answers.a);
            $("#answerB").text(shuffledQuestions[0][indexNumber].answers.b);
            $("#answerC").text(shuffledQuestions[0][indexNumber].answers.c);
            $("#answerD").text(shuffledQuestions[0][indexNumber].answers.d);
        }
    }

    //This function will run if the user clicks the reset button at the end
    function resetGame() {
        $("#resetButton").click(function () {
            //When user hits reset button indexNumber will be set to 0, pull the first question out of shuffledQuestions
            indexNumber = 0;
            //When user hits reset, timer will be set to 30 seconds again
            timeRemaining = 20;
            //This will reset correct back to zero
            qCorrect = 0;
            //This will reset wrong back to zero
            qWrong = 0;
            //This will reset unasnwered back to zero
            qUnanswered = 0;
            //This function call will display timer and start counting down
            countdown();
            //This line makes the form show on the DOM
            $("#questionForm").show();
            //This will reset the timer interval in milliseconds
            intervalId = setInterval(countdown, 1000);
            //This line will hide the reset button
            $("#resetButton").hide();
            //This line will hide the counter form again
            $("#counterForm").hide();
            //This calls the shuffle function to shuffle allQuestions object
            shuffle(allQuestions);
            //This puts the shuffled allQuestions into the shuffledQuestions variable
            shuffledQuestions.push(allQuestions);
            //This updates the HTML with the first shuffled Question
            $("#question").text(shuffledQuestions[0][indexNumber].question);
            //This will update the HTML with the answer choices of first shuffled question
            $("#answerA").text(shuffledQuestions[0][indexNumber].answers.a);
            $("#answerB").text(shuffledQuestions[0][indexNumber].answers.b);
            $("#answerC").text(shuffledQuestions[0][indexNumber].answers.c);
            $("#answerD").text(shuffledQuestions[0][indexNumber].answers.d);
        });
    }

    //Main Process Executes Here
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Call start game function to make it active, this will only run once unless user refreshes page
    startGame();

    //Call user answer function to make it active
    userAnswer();

    //Call reset game function to make it active, this will run multiple times (depending on how many times user re plays)
    resetGame();


});
