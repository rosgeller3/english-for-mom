// દરેક પાઠ: t = English title, tg = ગુજરાતી શીર્ષક, tip = ગુજરાતીમાં સમજૂતી
// w[] : e = English, p = ગુજરાતી ઉચ્ચાર, g = ગુજરાતી અર્થ, se/sg = વાક્ય
const LESSONS = [
{d:1,t:"Greetings",tg:"નમસ્તે કેમ કહેવું",
tip:"સવારે (12 વાગ્યા સુધી) Good morning, બપોરે Good afternoon, અને સાંજે Good evening કહેવાય. Good night ફક્ત સૂતી વખતે અથવા રાત્રે છૂટા પડતી વખતે જ કહેવાય.",
w:[
{e:"Hello",p:"હેલો",g:"નમસ્તે",se:"Hello, how are you?",sg:"નમસ્તે, તમે કેમ છો?"},
{e:"Good morning",p:"ગુડ મોર્નિંગ",g:"સુપ્રભાત (સવારે)",se:"Good morning, Mummy.",sg:"સુપ્રભાત, મમ્મી."},
{e:"Good afternoon",p:"ગુડ આફ્ટરનૂન",g:"નમસ્તે (બપોરે)",se:"Good afternoon, sir.",sg:"નમસ્તે, સાહેબ."},
{e:"Good evening",p:"ગુડ ઇવનિંગ",g:"નમસ્તે (સાંજે)",se:"Good evening, everyone.",sg:"સૌને નમસ્તે."},
{e:"Good night",p:"ગુડ નાઇટ",g:"શુભ રાત્રિ",se:"Good night, sleep well.",sg:"શુભ રાત્રિ, સરસ ઊંઘજો."},
{e:"Goodbye",p:"ગુડબાય",g:"આવજો",se:"Goodbye, see you soon.",sg:"આવજો, ફરી મળીશું."},
{e:"Thank you",p:"થેન્ક યુ",g:"આભાર",se:"Thank you very much.",sg:"ખૂબ ખૂબ આભાર."},
{e:"Sorry",p:"સોરી",g:"માફ કરશો",se:"Sorry, I am late.",sg:"માફ કરશો, મને મોડું થયું."},
{e:"Please",p:"પ્લીઝ",g:"કૃપા કરીને",se:"Please come in.",sg:"કૃપા કરીને અંદર આવો."},
{e:"Yes",p:"યસ",g:"હા",se:"Yes, I am ready.",sg:"હા, હું તૈયાર છું."},
{e:"No",p:"નો",g:"ના",se:"No, thank you.",sg:"ના, આભાર."}
]},

{d:2,t:"About yourself",tg:"તમારા વિશે વાત કરવી",
tip:"કોઈને પહેલી વાર મળો ત્યારે નામ પૂછવા What is your name? કહેવાય. જવાબમાં My name is પછી તમારું નામ બોલો. અંગ્રેજીમાં is નો અર્થ છે 'છે'.",
w:[
{e:"What is your name?",p:"વોટ ઇઝ યોર નેમ?",g:"તમારું નામ શું છે?",se:"Hello, what is your name?",sg:"નમસ્તે, તમારું નામ શું છે?"},
{e:"My name is",p:"માય નેમ ઇઝ",g:"મારું નામ ... છે",se:"My name is Rekha.",sg:"મારું નામ રેખા છે."},
{e:"How are you?",p:"હાઉ આર યુ?",g:"તમે કેમ છો?",se:"Hello Mira, how are you?",sg:"નમસ્તે મીરા, તમે કેમ છો?"},
{e:"I am fine",p:"આઇ એમ ફાઇન",g:"હું મજામાં છું",se:"I am fine, thank you.",sg:"હું મજામાં છું, આભાર."},
{e:"And you?",p:"એન્ડ યુ?",g:"અને તમે?",se:"I am fine. And you?",sg:"હું મજામાં છું. અને તમે?"},
{e:"Nice to meet you",p:"નાઇસ ટુ મીટ યુ",g:"તમને મળીને આનંદ થયો",se:"Nice to meet you, Sunita.",sg:"તમને મળીને આનંદ થયો, સુનીતા."},
{e:"Where do you live?",p:"વેર ડુ યુ લિવ?",g:"તમે ક્યાં રહો છો?",se:"Where do you live now?",sg:"તમે હવે ક્યાં રહો છો?"},
{e:"I live in",p:"આઇ લિવ ઇન",g:"હું ... માં રહું છું",se:"I live in Ahmedabad.",sg:"હું અમદાવાદમાં રહું છું."},
{e:"I am from",p:"આઇ એમ ફ્રોમ",g:"હું ... નો છું",se:"I am from Gujarat.",sg:"હું ગુજરાતની છું."},
{e:"See you tomorrow",p:"સી યુ ટુમોરો",g:"કાલે મળીએ",se:"Bye, see you tomorrow.",sg:"આવજો, કાલે મળીએ."}
]},

{d:3,t:"Family",tg:"કુટુંબ",
tip:"અંગ્રેજીમાં કાકા, મામા, ફુઆ બધા માટે એક જ શબ્દ uncle છે. એ જ રીતે કાકી, મામી, માસી બધા માટે aunt. દાદા અને નાના બંને grandfather કહેવાય.",
w:[
{e:"Family",p:"ફેમિલી",g:"કુટુંબ",se:"My family is big.",sg:"મારું કુટુંબ મોટું છે."},
{e:"Mother",p:"મધર",g:"મા",se:"My mother is cooking.",sg:"મારી મા રસોઈ કરે છે."},
{e:"Father",p:"ફાધર",g:"પિતા",se:"My father is at home.",sg:"મારા પિતા ઘરે છે."},
{e:"Brother",p:"બ્રધર",g:"ભાઈ",se:"I have one brother.",sg:"મારે એક ભાઈ છે."},
{e:"Sister",p:"સિસ્ટર",g:"બહેન",se:"My sister is a teacher.",sg:"મારી બહેન શિક્ષિકા છે."},
{e:"Son",p:"સન",g:"દીકરો",se:"My son lives in Surat.",sg:"મારો દીકરો સુરતમાં રહે છે."},
{e:"Daughter",p:"ડોટર",g:"દીકરી",se:"My daughter is studying.",sg:"મારી દીકરી ભણે છે."},
{e:"Husband",p:"હસબન્ડ",g:"પતિ",se:"My husband is working.",sg:"મારા પતિ કામ કરે છે."},
{e:"Wife",p:"વાઇફ",g:"પત્ની",se:"His wife is very kind.",sg:"તેની પત્ની બહુ દયાળુ છે."},
{e:"Grandmother",p:"ગ્રાન્ડમધર",g:"દાદી / નાની",se:"Grandmother tells stories.",sg:"દાદી વાર્તા કહે છે."},
{e:"Grandfather",p:"ગ્રાન્ડફાધર",g:"દાદા / નાના",se:"Grandfather is sitting outside.",sg:"દાદા બહાર બેઠા છે."},
{e:"Child",p:"ચાઇલ્ડ",g:"બાળક",se:"The child is sleeping.",sg:"બાળક સૂઈ રહ્યું છે."}
]},

{d:4,t:"Numbers 1 to 10",tg:"એક થી દસ સુધીના આંકડા",
tip:"આ દસ આંકડા સૌથી વધારે કામ લાગશે. બજારમાં, ફોનમાં, સમય કહેવામાં બધે આ જ વપરાય છે. રોજ મોટેથી બોલીને ગણો.",
w:[
{e:"One",p:"વન",g:"એક (1)",se:"I want one cup of tea.",sg:"મારે એક કપ ચા જોઈએ છે."},
{e:"Two",p:"ટુ",g:"બે (2)",se:"Give me two roti.",sg:"મને બે રોટલી આપો."},
{e:"Three",p:"થ્રી",g:"ત્રણ (3)",se:"I have three bags.",sg:"મારી પાસે ત્રણ થેલી છે."},
{e:"Four",p:"ફોર",g:"ચાર (4)",se:"There are four chairs.",sg:"ચાર ખુરશી છે."},
{e:"Five",p:"ફાઇવ",g:"પાંચ (5)",se:"Five minutes, please.",sg:"પાંચ મિનિટ, કૃપા કરીને."},
{e:"Six",p:"સિક્સ",g:"છ (6)",se:"It is six o'clock.",sg:"છ વાગ્યા છે."},
{e:"Seven",p:"સેવન",g:"સાત (7)",se:"Seven days in a week.",sg:"અઠવાડિયામાં સાત દિવસ."},
{e:"Eight",p:"એઇટ",g:"આઠ (8)",se:"I sleep at eight.",sg:"હું આઠ વાગ્યે સૂઉં છું."},
{e:"Nine",p:"નાઇન",g:"નવ (9)",se:"Nine people came.",sg:"નવ માણસ આવ્યા."},
{e:"Ten",p:"ટેન",g:"દસ (10)",se:"Ten rupees, please.",sg:"દસ રૂપિયા, કૃપા કરીને."}
]},

{d:5,t:"Numbers 11 to 100",tg:"અગિયાર થી સો સુધીના આંકડા",
tip:"13 થી 19 સુધીના આંકડામાં છેડે teen આવે છે. 20, 30, 40 જેવા આંકડામાં છેડે ty આવે છે. 21 બોલવા twenty-one એટલે કે વીસ પછી એક એમ જોડીને બોલાય.",
w:[
{e:"Eleven",p:"ઇલેવન",g:"અગિયાર (11)",se:"She is eleven years old.",sg:"તે અગિયાર વર્ષની છે."},
{e:"Twelve",p:"ટ્વેલ્વ",g:"બાર (12)",se:"Twelve months in a year.",sg:"વર્ષમાં બાર મહિના."},
{e:"Fifteen",p:"ફિફ્ટીન",g:"પંદર (15)",se:"Wait fifteen minutes.",sg:"પંદર મિનિટ રાહ જુઓ."},
{e:"Twenty",p:"ટ્વેન્ટી",g:"વીસ (20)",se:"Twenty rupees only.",sg:"ફક્ત વીસ રૂપિયા."},
{e:"Twenty-five",p:"ટ્વેન્ટી ફાઇવ",g:"પચ્ચીસ (25)",se:"This costs twenty-five rupees.",sg:"આ પચ્ચીસ રૂપિયાનું છે."},
{e:"Thirty",p:"થર્ટી",g:"ત્રીસ (30)",se:"Thirty days in a month.",sg:"મહિનામાં ત્રીસ દિવસ."},
{e:"Forty",p:"ફોર્ટી",g:"ચાળીસ (40)",se:"Forty people were there.",sg:"ત્યાં ચાળીસ માણસ હતા."},
{e:"Fifty",p:"ફિફ્ટી",g:"પચાસ (50)",se:"Give me fifty rupees.",sg:"મને પચાસ રૂપિયા આપો."},
{e:"Hundred",p:"હન્ડ્રેડ",g:"સો (100)",se:"One hundred rupees.",sg:"સો રૂપિયા."},
{e:"Thousand",p:"થાઉઝન્ડ",g:"હજાર (1000)",se:"Two thousand rupees.",sg:"બે હજાર રૂપિયા."},
{e:"How many?",p:"હાઉ મેની?",g:"કેટલા?",se:"How many people are coming?",sg:"કેટલા માણસ આવે છે?"}
]},

{d:6,t:"Days of the week",tg:"અઠવાડિયાના દિવસો",
tip:"અંગ્રેજીમાં દિવસના નામ હંમેશા મોટા અક્ષરે (capital letter) લખાય છે. અઠવાડિયું Sunday થી શરૂ થાય છે. Saturday અને Sunday ને weekend કહેવાય.",
w:[
{e:"Monday",p:"મન્ડે",g:"સોમવાર",se:"I will come on Monday.",sg:"હું સોમવારે આવીશ."},
{e:"Tuesday",p:"ટ્યુઝડે",g:"મંગળવાર",se:"Tuesday is a busy day.",sg:"મંગળવાર વ્યસ્ત દિવસ છે."},
{e:"Wednesday",p:"વેન્ઝડે",g:"બુધવાર",se:"We meet on Wednesday.",sg:"આપણે બુધવારે મળીએ છીએ."},
{e:"Thursday",p:"થર્સડે",g:"ગુરુવાર",se:"The temple is open on Thursday.",sg:"મંદિર ગુરુવારે ખુલ્લું છે."},
{e:"Friday",p:"ફ્રાઇડે",g:"શુક્રવાર",se:"Friday is my holiday.",sg:"શુક્રવારે મારી રજા છે."},
{e:"Saturday",p:"સેટરડે",g:"શનિવાર",se:"I clean the house on Saturday.",sg:"હું શનિવારે ઘર સાફ કરું છું."},
{e:"Sunday",p:"સન્ડે",g:"રવિવાર",se:"Everyone is at home on Sunday.",sg:"રવિવારે બધા ઘરે હોય છે."},
{e:"Today",p:"ટુડે",g:"આજે",se:"What day is it today?",sg:"આજે કયો વાર છે?"},
{e:"Week",p:"વીક",g:"અઠવાડિયું",se:"See you next week.",sg:"આવતા અઠવાડિયે મળીએ."},
{e:"Holiday",p:"હોલિડે",g:"રજા",se:"Tomorrow is a holiday.",sg:"કાલે રજા છે."}
]},

{d:7,t:"Time words",tg:"સમય માટેના શબ્દો",
tip:"અંગ્રેજીમાં સમય કહેવા o'clock વપરાય છે. જેમ કે 'It is five o'clock' એટલે પાંચ વાગ્યા છે. બપોર પહેલાં am અને પછી pm લખાય છે.",
w:[
{e:"Today",p:"ટુડે",g:"આજે",se:"Today is Sunday.",sg:"આજે રવિવાર છે."},
{e:"Tomorrow",p:"ટુમોરો",g:"કાલે (આવતીકાલ)",se:"I will go tomorrow.",sg:"હું કાલે જઈશ."},
{e:"Yesterday",p:"યસ્ટરડે",g:"ગઈકાલે",se:"Yesterday I was busy.",sg:"ગઈકાલે હું વ્યસ્ત હતી."},
{e:"Morning",p:"મોર્નિંગ",g:"સવાર",se:"I walk in the morning.",sg:"હું સવારે ચાલવા જાઉં છું."},
{e:"Afternoon",p:"આફ્ટરનૂન",g:"બપોર",se:"We eat in the afternoon.",sg:"આપણે બપોરે જમીએ છીએ."},
{e:"Evening",p:"ઇવનિંગ",g:"સાંજ",se:"Come in the evening.",sg:"સાંજે આવજો."},
{e:"Night",p:"નાઇટ",g:"રાત",se:"It is very quiet at night.",sg:"રાત્રે બહુ શાંતિ હોય છે."},
{e:"Now",p:"નાઉ",g:"હમણાં",se:"I am busy now.",sg:"હું હમણાં વ્યસ્ત છું."},
{e:"Later",p:"લેટર",g:"પછી",se:"I will call you later.",sg:"હું તમને પછી ફોન કરીશ."},
{e:"What time is it?",p:"વોટ ટાઇમ ઇઝ ઇટ?",g:"કેટલા વાગ્યા છે?",se:"Excuse me, what time is it?",sg:"માફ કરશો, કેટલા વાગ્યા છે?"},
{e:"Month",p:"મન્થ",g:"મહિનો",se:"Next month I will travel.",sg:"આવતા મહિને હું મુસાફરી કરીશ."},
{e:"Year",p:"યર",g:"વર્ષ",se:"Happy new year!",sg:"નવા વર્ષની શુભેચ્છા!"}
]},

{d:8,t:"Things at home",tg:"ઘરની વસ્તુઓ",
tip:"એક વસ્તુ હોય તો પહેલાં a અથવા an લખાય છે. જેમ કે a chair (એક ખુરશી). એકથી વધારે હોય તો છેડે s લાગે છે: chairs (ખુરશીઓ).",
w:[
{e:"House",p:"હાઉસ",g:"ઘર",se:"This is my house.",sg:"આ મારું ઘર છે."},
{e:"Door",p:"ડોર",g:"બારણું",se:"Please close the door.",sg:"કૃપા કરીને બારણું બંધ કરો."},
{e:"Window",p:"વિન્ડો",g:"બારી",se:"Open the window.",sg:"બારી ખોલો."},
{e:"Room",p:"રૂમ",g:"ઓરડો",se:"My room is small.",sg:"મારો ઓરડો નાનો છે."},
{e:"Kitchen",p:"કિચન",g:"રસોડું",se:"She is in the kitchen.",sg:"તે રસોડામાં છે."},
{e:"Bathroom",p:"બાથરૂમ",g:"બાથરૂમ",se:"The bathroom is clean.",sg:"બાથરૂમ સાફ છે."},
{e:"Bed",p:"બેડ",g:"પલંગ",se:"The bed is very soft.",sg:"પલંગ બહુ નરમ છે."},
{e:"Chair",p:"ચેર",g:"ખુરશી",se:"Please sit on the chair.",sg:"કૃપા કરીને ખુરશી પર બેસો."},
{e:"Table",p:"ટેબલ",g:"ટેબલ",se:"Put it on the table.",sg:"તેને ટેબલ પર મૂકો."},
{e:"Light",p:"લાઇટ",g:"લાઇટ / દીવો",se:"Switch on the light.",sg:"લાઇટ ચાલુ કરો."},
{e:"Fan",p:"ફેન",g:"પંખો",se:"The fan is not working.",sg:"પંખો ચાલતો નથી."},
{e:"Water",p:"વોટર",g:"પાણી",se:"Give me a glass of water.",sg:"મને એક ગ્લાસ પાણી આપો."}
]},

{d:9,t:"Food and kitchen",tg:"ખાવાનું અને રસોડું",
tip:"અંગ્રેજીમાં water, milk, rice, oil જેવી વસ્તુઓ ગણી શકાતી નથી, એટલે તેમના છેડે કદી s લાગતું નથી. waters કે milks એવું બોલાય નહીં.",
w:[
{e:"Food",p:"ફૂડ",g:"ખાવાનું",se:"The food is very tasty.",sg:"ખાવાનું બહુ સ્વાદિષ્ટ છે."},
{e:"Water",p:"વોટર",g:"પાણી",se:"I want cold water.",sg:"મારે ઠંડું પાણી જોઈએ છે."},
{e:"Milk",p:"મિલ્ક",g:"દૂધ",se:"Drink the milk.",sg:"દૂધ પી લો."},
{e:"Tea",p:"ટી",g:"ચા",se:"Would you like tea?",sg:"ચા લેશો?"},
{e:"Rice",p:"રાઇસ",g:"ભાત",se:"The rice is ready.",sg:"ભાત તૈયાર છે."},
{e:"Bread",p:"બ્રેડ",g:"બ્રેડ / રોટલી",se:"I eat bread in the morning.",sg:"હું સવારે બ્રેડ ખાઉં છું."},
{e:"Vegetable",p:"વેજિટેબલ",g:"શાકભાજી",se:"Vegetables are good for health.",sg:"શાકભાજી તબિયત માટે સારાં છે."},
{e:"Fruit",p:"ફ્રૂટ",g:"ફળ",se:"Eat one fruit daily.",sg:"રોજ એક ફળ ખાઓ."},
{e:"Salt",p:"સોલ્ટ",g:"મીઠું",se:"Add a little salt.",sg:"થોડું મીઠું ઉમેરો."},
{e:"Sugar",p:"શુગર",g:"ખાંડ",se:"No sugar in my tea.",sg:"મારી ચામાં ખાંડ નહીં."},
{e:"Oil",p:"ઓઇલ",g:"તેલ",se:"The oil is hot.",sg:"તેલ ગરમ છે."},
{e:"Curd",p:"કર્ડ",g:"દહીં",se:"Curd is cool for the stomach.",sg:"દહીં પેટ માટે ઠંડું છે."}
]},

{d:10,t:"Eating and drinking",tg:"ખાવા-પીવાની વાત",
tip:"ભૂખ લાગી હોય તો 'I am hungry' કહેવાય, 'I have hunger' નહીં. એ જ રીતે તરસ માટે 'I am thirsty'. અંગ્રેજીમાં આવી લાગણી માટે am વપરાય છે.",
w:[
{e:"Eat",p:"ઈટ",g:"ખાવું",se:"Let us eat now.",sg:"ચાલો હવે જમીએ."},
{e:"Drink",p:"ડ્રિંક",g:"પીવું",se:"Drink more water.",sg:"વધારે પાણી પીઓ."},
{e:"I am hungry",p:"આઇ એમ હંગ્રી",g:"મને ભૂખ લાગી છે",se:"I am hungry, is food ready?",sg:"મને ભૂખ લાગી છે, ખાવાનું તૈયાર છે?"},
{e:"I am thirsty",p:"આઇ એમ થર્સ્ટી",g:"મને તરસ લાગી છે",se:"I am thirsty, give me water.",sg:"મને તરસ લાગી છે, પાણી આપો."},
{e:"Tasty",p:"ટેસ્ટી",g:"સ્વાદિષ્ટ",se:"This sabji is very tasty.",sg:"આ શાક બહુ સ્વાદિષ્ટ છે."},
{e:"Hot",p:"હોટ",g:"ગરમ",se:"The tea is very hot.",sg:"ચા બહુ ગરમ છે."},
{e:"Cold",p:"કોલ્ડ",g:"ઠંડું",se:"I want cold water.",sg:"મારે ઠંડું પાણી જોઈએ છે."},
{e:"Sweet",p:"સ્વીટ",g:"ગળ્યું",se:"This is too sweet.",sg:"આ બહુ ગળ્યું છે."},
{e:"More",p:"મોર",g:"વધારે",se:"Do you want more rice?",sg:"તમારે વધારે ભાત જોઈએ છે?"},
{e:"Enough",p:"ઇનફ",g:"બસ / પૂરતું",se:"That is enough, thank you.",sg:"બસ એટલું, આભાર."},
{e:"Breakfast",p:"બ્રેકફાસ્ટ",g:"સવારનો નાસ્તો",se:"Breakfast is at eight.",sg:"નાસ્તો આઠ વાગ્યે છે."},
{e:"Dinner",p:"ડિનર",g:"રાતનું જમણ",se:"Dinner is ready.",sg:"રાતનું જમવાનું તૈયાર છે."}
]},

{d:11,t:"Colours",tg:"રંગો",
tip:"અંગ્રેજીમાં રંગનું નામ હંમેશા વસ્તુ પહેલાં આવે છે. જેમ કે red saree (લાલ સાડી), 'saree red' એવું ન બોલાય.",
w:[
{e:"Red",p:"રેડ",g:"લાલ",se:"She has a red saree.",sg:"તેની પાસે લાલ સાડી છે."},
{e:"Blue",p:"બ્લૂ",g:"વાદળી",se:"The sky is blue.",sg:"આકાશ વાદળી છે."},
{e:"Green",p:"ગ્રીન",g:"લીલો",se:"Green vegetables are healthy.",sg:"લીલાં શાકભાજી તંદુરસ્ત છે."},
{e:"Yellow",p:"યલો",g:"પીળો",se:"The flower is yellow.",sg:"ફૂલ પીળું છે."},
{e:"Black",p:"બ્લેક",g:"કાળો",se:"I want black tea.",sg:"મારે કાળી ચા જોઈએ છે."},
{e:"White",p:"વ્હાઇટ",g:"સફેદ",se:"He wears a white shirt.",sg:"તે સફેદ શર્ટ પહેરે છે."},
{e:"Orange",p:"ઓરેન્જ",g:"કેસરી",se:"The orange is sweet.",sg:"સંતરું ગળ્યું છે."},
{e:"Pink",p:"પિંક",g:"ગુલાબી",se:"Her dress is pink.",sg:"તેનો ડ્રેસ ગુલાબી છે."},
{e:"Brown",p:"બ્રાઉન",g:"કથ્થઈ",se:"The table is brown.",sg:"ટેબલ કથ્થઈ છે."},
{e:"Colour",p:"કલર",g:"રંગ",se:"What colour do you like?",sg:"તમને કયો રંગ ગમે છે?"}
]},

{d:12,t:"Parts of the body",tg:"શરીરના અંગો",
tip:"એક આંખ eye, બે હોય તો eyes. હાથ hand, બે હાથ hands. એકથી વધારે માટે છેડે s લાગે છે. પણ tooth નું બહુવચન teeth થાય છે, toothsic નહીં.",
w:[
{e:"Head",p:"હેડ",g:"માથું",se:"My head is paining.",sg:"મારું માથું દુખે છે."},
{e:"Hand",p:"હેન્ડ",g:"હાથ",se:"Wash your hands.",sg:"તમારા હાથ ધુઓ."},
{e:"Eye",p:"આઇ",g:"આંખ",se:"My eyes are tired.",sg:"મારી આંખો થાકી ગઈ છે."},
{e:"Ear",p:"ઇયર",g:"કાન",se:"My ear is hurting.",sg:"મારો કાન દુખે છે."},
{e:"Nose",p:"નોઝ",g:"નાક",se:"My nose is blocked.",sg:"મારું નાક બંધ છે."},
{e:"Mouth",p:"માઉથ",g:"મોઢું",se:"Open your mouth.",sg:"તમારું મોઢું ખોલો."},
{e:"Leg",p:"લેગ",g:"પગ",se:"My legs are paining.",sg:"મારા પગ દુખે છે."},
{e:"Hair",p:"હેર",g:"વાળ",se:"Her hair is long.",sg:"તેના વાળ લાંબા છે."},
{e:"Stomach",p:"સ્ટમક",g:"પેટ",se:"My stomach is upset.",sg:"મારું પેટ બગડ્યું છે."},
{e:"Tooth",p:"ટૂથ",g:"દાંત",se:"My tooth is paining.",sg:"મારો દાંત દુખે છે."},
{e:"Back",p:"બેક",g:"પીઠ",se:"My back is paining.",sg:"મારી પીઠ દુખે છે."},
{e:"Face",p:"ફેસ",g:"ચહેરો",se:"Wash your face.",sg:"તમારો ચહેરો ધુઓ."}
]},

{d:13,t:"Everyday actions 1",tg:"રોજિંદી ક્રિયાઓ (ભાગ 1)",
tip:"કોઈને કંઈક કરવાનું કહેવું હોય તો ફક્ત ક્રિયાપદ બોલો: Sit (બેસો), Come (આવો), Open (ખોલો). આગળ please લગાડો તો વિનમ્ર લાગે છે.",
w:[
{e:"Go",p:"ગો",g:"જવું",se:"I go to the temple daily.",sg:"હું રોજ મંદિર જાઉં છું."},
{e:"Come",p:"કમ",g:"આવવું",se:"Please come inside.",sg:"કૃપા કરીને અંદર આવો."},
{e:"Sit",p:"સિટ",g:"બેસવું",se:"Please sit here.",sg:"કૃપા કરીને અહીં બેસો."},
{e:"Stand",p:"સ્ટેન્ડ",g:"ઊભા રહેવું",se:"Please stand up.",sg:"કૃપા કરીને ઊભા થાઓ."},
{e:"Sleep",p:"સ્લીપ",g:"સૂવું",se:"I sleep at ten.",sg:"હું દસ વાગ્યે સૂઉં છું."},
{e:"Wake up",p:"વેક અપ",g:"જાગવું",se:"I wake up at six.",sg:"હું છ વાગ્યે જાગું છું."},
{e:"Open",p:"ઓપન",g:"ખોલવું",se:"Open the door, please.",sg:"કૃપા કરીને બારણું ખોલો."},
{e:"Close",p:"ક્લોઝ",g:"બંધ કરવું",se:"Close the window.",sg:"બારી બંધ કરો."},
{e:"Give",p:"ગિવ",g:"આપવું",se:"Give me the keys.",sg:"મને ચાવી આપો."},
{e:"Take",p:"ટેક",g:"લેવું",se:"Take this bag.",sg:"આ થેલી લો."},
{e:"Wait",p:"વેઇટ",g:"રાહ જોવી",se:"Please wait a minute.",sg:"કૃપા કરીને એક મિનિટ રાહ જુઓ."}
]},

{d:14,t:"Everyday actions 2",tg:"રોજિંદી ક્રિયાઓ (ભાગ 2)",
tip:"He અને She સાથે ક્રિયાપદના છેડે s લાગે છે. જેમ કે I cook, પણ She cooks. I walk, પણ He walks. આ નિયમ યાદ રાખવા જેવો છે.",
w:[
{e:"Cook",p:"કુક",g:"રસોઈ કરવી",se:"She cooks very well.",sg:"તે બહુ સરસ રસોઈ કરે છે."},
{e:"Speak",p:"સ્પીક",g:"બોલવું",se:"Please speak slowly.",sg:"કૃપા કરીને ધીમે બોલો."},
{e:"Listen",p:"લિસન",g:"સાંભળવું",se:"Listen to me carefully.",sg:"મને ધ્યાનથી સાંભળો."},
{e:"Look",p:"લુક",g:"જોવું",se:"Look at this photo.",sg:"આ ફોટો જુઓ."},
{e:"Read",p:"રીડ",g:"વાંચવું",se:"I read the newspaper.",sg:"હું છાપું વાંચું છું."},
{e:"Write",p:"રાઇટ",g:"લખવું",se:"Write your name here.",sg:"અહીં તમારું નામ લખો."},
{e:"Walk",p:"વોક",g:"ચાલવું",se:"I walk every morning.",sg:"હું રોજ સવારે ચાલું છું."},
{e:"Clean",p:"ક્લીન",g:"સાફ કરવું",se:"I clean the house.",sg:"હું ઘર સાફ કરું છું."},
{e:"Wash",p:"વોશ",g:"ધોવું",se:"Wash the clothes.",sg:"કપડાં ધુઓ."},
{e:"Help",p:"હેલ્પ",g:"મદદ કરવી",se:"Can you help me?",sg:"શું તમે મને મદદ કરી શકો?"},
{e:"Work",p:"વર્ક",g:"કામ કરવું",se:"He works in a bank.",sg:"તે બેંકમાં કામ કરે છે."},
{e:"Learn",p:"લર્ન",g:"શીખવું",se:"I am learning English.",sg:"હું અંગ્રેજી શીખું છું."}
]},

{d:15,t:"Question words",tg:"પ્રશ્ન પૂછવાના શબ્દો",
tip:"અંગ્રેજીમાં પ્રશ્ન પૂછવાના શબ્દો મોટે ભાગે વાક્યની શરૂઆતમાં જ આવે છે, અને વાક્યના છેડે પ્રશ્નચિહ્ન (?) મુકાય છે.",
w:[
{e:"What",p:"વોટ",g:"શું",se:"What is this?",sg:"આ શું છે?"},
{e:"Who",p:"હૂ",g:"કોણ",se:"Who is at the door?",sg:"બારણે કોણ છે?"},
{e:"Where",p:"વેર",g:"ક્યાં",se:"Where is my phone?",sg:"મારો ફોન ક્યાં છે?"},
{e:"When",p:"વ્હેન",g:"ક્યારે",se:"When will you come?",sg:"તમે ક્યારે આવશો?"},
{e:"Why",p:"વ્હાય",g:"કેમ",se:"Why are you sad?",sg:"તમે કેમ ઉદાસ છો?"},
{e:"How",p:"હાઉ",g:"કેવી રીતે",se:"How do you make this?",sg:"તમે આ કેવી રીતે બનાવો છો?"},
{e:"How much?",p:"હાઉ મચ?",g:"કેટલાનું?",se:"How much is this saree?",sg:"આ સાડી કેટલાની છે?"},
{e:"Which",p:"વિચ",g:"કયું",se:"Which one do you want?",sg:"તમારે કયું જોઈએ છે?"},
{e:"Whose",p:"હૂઝ",g:"કોનું",se:"Whose bag is this?",sg:"આ થેલી કોની છે?"},
{e:"How far?",p:"હાઉ ફાર?",g:"કેટલું દૂર?",se:"How far is the station?",sg:"સ્ટેશન કેટલું દૂર છે?"}
]},

{d:16,t:"I, you, he, she",tg:"હું, તમે, તે અને is / am / are",
tip:"આ ત્રણ યાદ રાખો: I સાથે હંમેશા am, He/She/It સાથે is, અને You/We/They સાથે are. આ અંગ્રેજીનો સૌથી કામનો નિયમ છે.",
w:[
{e:"I am",p:"આઇ એમ",g:"હું છું",se:"I am a teacher.",sg:"હું શિક્ષિકા છું."},
{e:"You are",p:"યુ આર",g:"તમે છો",se:"You are very kind.",sg:"તમે બહુ દયાળુ છો."},
{e:"He is",p:"હી ઇઝ",g:"તે (પુરુષ) છે",se:"He is my brother.",sg:"તે મારો ભાઈ છે."},
{e:"She is",p:"શી ઇઝ",g:"તે (સ્ત્રી) છે",se:"She is my daughter.",sg:"તે મારી દીકરી છે."},
{e:"It is",p:"ઇટ ઇઝ",g:"આ છે (વસ્તુ માટે)",se:"It is very hot today.",sg:"આજે બહુ ગરમી છે."},
{e:"We are",p:"વી આર",g:"અમે છીએ",se:"We are ready.",sg:"અમે તૈયાર છીએ."},
{e:"They are",p:"ધે આર",g:"તેઓ છે",se:"They are my neighbours.",sg:"તેઓ મારા પડોશી છે."},
{e:"I am not",p:"આઇ એમ નોટ",g:"હું નથી",se:"I am not well today.",sg:"આજે મારી તબિયત સારી નથી."},
{e:"Are you?",p:"આર યુ?",g:"શું તમે છો?",se:"Are you ready?",sg:"શું તમે તૈયાર છો?"},
{e:"Is he?",p:"ઇઝ હી?",g:"શું તે છે?",se:"Is he at home?",sg:"શું તે ઘરે છે?"}
]},

{d:17,t:"This, that, here, there",tg:"આ, પેલું, અહીં, ત્યાં",
tip:"નજીકની વસ્તુ માટે this, દૂરની વસ્તુ માટે that. એકથી વધારે નજીકની વસ્તુ માટે these અને દૂરની માટે those વપરાય છે.",
w:[
{e:"This",p:"ધિસ",g:"આ (નજીકનું)",se:"This is my house.",sg:"આ મારું ઘર છે."},
{e:"That",p:"ધેટ",g:"પેલું (દૂરનું)",se:"That is his shop.",sg:"પેલી તેની દુકાન છે."},
{e:"These",p:"ધીઝ",g:"આ બધાં",se:"These are my books.",sg:"આ મારાં પુસ્તકો છે."},
{e:"Those",p:"ધોઝ",g:"પેલાં બધાં",se:"Those are her clothes.",sg:"પેલાં તેનાં કપડાં છે."},
{e:"Here",p:"હિયર",g:"અહીં",se:"Come here, please.",sg:"કૃપા કરીને અહીં આવો."},
{e:"There",p:"ધેર",g:"ત્યાં",se:"Put the bag there.",sg:"થેલી ત્યાં મૂકો."},
{e:"Inside",p:"ઇનસાઇડ",g:"અંદર",se:"The keys are inside.",sg:"ચાવી અંદર છે."},
{e:"Outside",p:"આઉટસાઇડ",g:"બહાર",se:"He is waiting outside.",sg:"તે બહાર રાહ જુએ છે."},
{e:"Up",p:"અપ",g:"ઉપર",se:"The room is up.",sg:"ઓરડો ઉપર છે."},
{e:"Down",p:"ડાઉન",g:"નીચે",se:"Please come down.",sg:"કૃપા કરીને નીચે આવો."}
]},

{d:18,t:"At the market",tg:"બજારમાં ખરીદી",
tip:"ભાવ પૂછવા માટે 'How much is this?' કહેવાય. ઘણી વાર દુકાનદાર 'Anything else?' પૂછે, એટલે કે બીજું કંઈ જોઈએ છે? જવાબમાં 'No, that's all' કહી શકાય.",
w:[
{e:"Shop",p:"શોપ",g:"દુકાન",se:"The shop is closed.",sg:"દુકાન બંધ છે."},
{e:"Money",p:"મની",g:"પૈસા",se:"I forgot my money.",sg:"હું મારા પૈસા ભૂલી ગઈ."},
{e:"How much is this?",p:"હાઉ મચ ઇઝ ધિસ?",g:"આ કેટલાનું છે?",se:"Bhai, how much is this?",sg:"ભાઈ, આ કેટલાનું છે?"},
{e:"Too expensive",p:"ટૂ એક્સપેન્સિવ",g:"બહુ મોંઘું",se:"That is too expensive.",sg:"એ બહુ મોંઘું છે."},
{e:"Cheap",p:"ચીપ",g:"સસ્તું",se:"This one is cheap.",sg:"આ સસ્તું છે."},
{e:"Buy",p:"બાય",g:"ખરીદવું",se:"I want to buy this.",sg:"મારે આ ખરીદવું છે."},
{e:"Give me",p:"ગિવ મી",g:"મને આપો",se:"Give me two kilos.",sg:"મને બે કિલો આપો."},
{e:"Bag",p:"બેગ",g:"થેલી",se:"I have my own bag.",sg:"મારી પાસે મારી થેલી છે."},
{e:"Change",p:"ચેન્જ",g:"છૂટા પૈસા",se:"Do you have change?",sg:"તમારી પાસે છૂટા પૈસા છે?"},
{e:"Do you have?",p:"ડુ યુ હેવ?",g:"તમારી પાસે છે?",se:"Do you have fresh milk?",sg:"તમારી પાસે તાજું દૂધ છે?"},
{e:"That's all",p:"ધેટ્સ ઓલ",g:"બસ એટલું જ",se:"No, that's all. Thank you.",sg:"ના, બસ એટલું જ. આભાર."}
]},

{d:19,t:"Clothes",tg:"કપડાં",
tip:"કપડાં પહેરવા માટે wear વપરાય છે. 'I wear a saree' એટલે હું સાડી પહેરું છું. clothes શબ્દ હંમેશા બહુવચનમાં જ વપરાય છે.",
w:[
{e:"Clothes",p:"ક્લોથ્સ",g:"કપડાં",se:"Wash these clothes.",sg:"આ કપડાં ધુઓ."},
{e:"Saree",p:"સારી",g:"સાડી",se:"She is wearing a new saree.",sg:"તેણે નવી સાડી પહેરી છે."},
{e:"Shirt",p:"શર્ટ",g:"શર્ટ",se:"This shirt is too big.",sg:"આ શર્ટ બહુ મોટું છે."},
{e:"Shoes",p:"શૂઝ",g:"બૂટ",se:"Leave your shoes outside.",sg:"તમારા બૂટ બહાર મૂકો."},
{e:"Slippers",p:"સ્લિપર્સ",g:"ચંપલ",se:"Where are my slippers?",sg:"મારાં ચંપલ ક્યાં છે?"},
{e:"Wear",p:"વેર",g:"પહેરવું",se:"Wear warm clothes today.",sg:"આજે ગરમ કપડાં પહેરો."},
{e:"New",p:"ન્યૂ",g:"નવું",se:"This is a new dress.",sg:"આ નવો ડ્રેસ છે."},
{e:"Old",p:"ઓલ્ડ",g:"જૂનું",se:"These clothes are old.",sg:"આ કપડાં જૂનાં છે."},
{e:"Big",p:"બિગ",g:"મોટું",se:"This bag is too big.",sg:"આ થેલી બહુ મોટી છે."},
{e:"Small",p:"સ્મોલ",g:"નાનું",se:"Give me a small size.",sg:"મને નાની સાઇઝ આપો."}
]},

{d:20,t:"At the doctor",tg:"ડૉક્ટર પાસે",
tip:"દુખાવા માટે 'My head is paining' અથવા 'I have a headache' બંને કહેવાય. તબિયત સારી ન હોય ત્યારે 'I am not well' કહેવું સૌથી સહેલું છે.",
w:[
{e:"Doctor",p:"ડોક્ટર",g:"ડૉક્ટર",se:"I want to see the doctor.",sg:"મારે ડૉક્ટરને મળવું છે."},
{e:"Medicine",p:"મેડિસિન",g:"દવા",se:"Take this medicine daily.",sg:"આ દવા રોજ લો."},
{e:"Hospital",p:"હોસ્પિટલ",g:"હોસ્પિટલ",se:"The hospital is near.",sg:"હોસ્પિટલ નજીક છે."},
{e:"Pain",p:"પેઇન",g:"દુખાવો",se:"I have pain in my knee.",sg:"મારા ઘૂંટણમાં દુખાવો છે."},
{e:"Fever",p:"ફીવર",g:"તાવ",se:"I have a fever.",sg:"મને તાવ છે."},
{e:"Cough",p:"કફ",g:"ઉધરસ",se:"I have a bad cough.",sg:"મને બહુ ઉધરસ છે."},
{e:"I am not well",p:"આઇ એમ નોટ વેલ",g:"મારી તબિયત સારી નથી",se:"I am not well today.",sg:"આજે મારી તબિયત સારી નથી."},
{e:"Tired",p:"ટાયર્ડ",g:"થાકેલું",se:"I am very tired.",sg:"હું બહુ થાકી ગઈ છું."},
{e:"Rest",p:"રેસ્ટ",g:"આરામ",se:"Take rest for two days.",sg:"બે દિવસ આરામ કરો."},
{e:"Blood pressure",p:"બ્લડ પ્રેશર",g:"બ્લડ પ્રેશર",se:"Check my blood pressure.",sg:"મારું બ્લડ પ્રેશર તપાસો."},
{e:"Better",p:"બેટર",g:"સારું",se:"I am feeling better now.",sg:"મને હવે સારું લાગે છે."}
]},

{d:21,t:"Feelings",tg:"લાગણીઓ",
tip:"લાગણી કહેવા માટે I am પછી શબ્દ મૂકો: I am happy, I am tired. 'I have happy' એવું કદી ન બોલાય.",
w:[
{e:"Happy",p:"હેપી",g:"ખુશ",se:"I am very happy today.",sg:"આજે હું બહુ ખુશ છું."},
{e:"Sad",p:"સેડ",g:"ઉદાસ",se:"Why are you sad?",sg:"તમે કેમ ઉદાસ છો?"},
{e:"Angry",p:"એંગ્રી",g:"ગુસ્સે",se:"Please do not be angry.",sg:"કૃપા કરીને ગુસ્સે ન થાઓ."},
{e:"Afraid",p:"અફ્રેઇડ",g:"ડરેલું",se:"Do not be afraid.",sg:"ડરો નહીં."},
{e:"Worried",p:"વરીડ",g:"ચિંતિત",se:"I am worried about him.",sg:"હું તેની ચિંતા કરું છું."},
{e:"Tired",p:"ટાયર્ડ",g:"થાકેલું",se:"The children are tired.",sg:"બાળકો થાકી ગયાં છે."},
{e:"Good",p:"ગુડ",g:"સારું",se:"That is a good idea.",sg:"એ સારો વિચાર છે."},
{e:"Bad",p:"બેડ",g:"ખરાબ",se:"The weather is bad.",sg:"હવામાન ખરાબ છે."},
{e:"Love",p:"લવ",g:"પ્રેમ",se:"I love my family.",sg:"હું મારા કુટુંબને પ્રેમ કરું છું."},
{e:"Miss",p:"મિસ",g:"યાદ આવવું",se:"I miss my daughter.",sg:"મને મારી દીકરી યાદ આવે છે."}
]},

{d:22,t:"Weather",tg:"હવામાન",
tip:"હવામાનની વાત કરતી વખતે વાક્ય હંમેશા It is થી શરૂ થાય છે: It is hot, It is raining. અહીં It નો કોઈ ગુજરાતી અર્થ નથી, પણ તે બોલવું જરૂરી છે.",
w:[
{e:"Hot",p:"હોટ",g:"ગરમ",se:"It is very hot today.",sg:"આજે બહુ ગરમી છે."},
{e:"Cold",p:"કોલ્ડ",g:"ઠંડું",se:"It is cold in the morning.",sg:"સવારે ઠંડી હોય છે."},
{e:"Rain",p:"રેઇન",g:"વરસાદ",se:"It is raining outside.",sg:"બહાર વરસાદ પડે છે."},
{e:"Sun",p:"સન",g:"સૂરજ",se:"The sun is very strong.",sg:"તડકો બહુ આકરો છે."},
{e:"Wind",p:"વિન્ડ",g:"પવન",se:"The wind is cool today.",sg:"આજે પવન ઠંડો છે."},
{e:"Cloud",p:"ક્લાઉડ",g:"વાદળ",se:"There are many clouds.",sg:"ઘણાં વાદળ છે."},
{e:"Summer",p:"સમર",g:"ઉનાળો",se:"Summer is very hot here.",sg:"અહીં ઉનાળો બહુ ગરમ હોય છે."},
{e:"Winter",p:"વિન્ટર",g:"શિયાળો",se:"I like winter.",sg:"મને શિયાળો ગમે છે."},
{e:"Weather",p:"વેધર",g:"હવામાન",se:"The weather is nice today.",sg:"આજે હવામાન સરસ છે."},
{e:"Umbrella",p:"અમ્બ્રેલા",g:"છત્રી",se:"Take an umbrella with you.",sg:"તમારી સાથે છત્રી લઈ જાઓ."}
]},

{d:23,t:"Going out",tg:"બહાર જવું અને રસ્તો પૂછવો",
tip:"રસ્તો પૂછવા માટે 'Where is the...?' કહેવાય. જવાબમાં left (ડાબે), right (જમણે) અને straight (સીધું) સાંભળવા મળશે.",
w:[
{e:"Left",p:"લેફ્ટ",g:"ડાબી બાજુ",se:"Turn left at the corner.",sg:"ખૂણેથી ડાબી બાજુ વળો."},
{e:"Right",p:"રાઇટ",g:"જમણી બાજુ",se:"The temple is on the right.",sg:"મંદિર જમણી બાજુ છે."},
{e:"Straight",p:"સ્ટ્રેઇટ",g:"સીધું",se:"Go straight from here.",sg:"અહીંથી સીધા જાઓ."},
{e:"Near",p:"નિયર",g:"નજીક",se:"The market is very near.",sg:"બજાર બહુ નજીક છે."},
{e:"Far",p:"ફાર",g:"દૂર",se:"Is the station far?",sg:"સ્ટેશન દૂર છે?"},
{e:"Road",p:"રોડ",g:"રસ્તો",se:"Cross the road carefully.",sg:"ધ્યાનથી રસ્તો ઓળંગો."},
{e:"Bus",p:"બસ",g:"બસ",se:"The bus is late today.",sg:"આજે બસ મોડી છે."},
{e:"Train",p:"ટ્રેન",g:"ટ્રેન",se:"The train is at nine.",sg:"ટ્રેન નવ વાગ્યે છે."},
{e:"Ticket",p:"ટિકિટ",g:"ટિકિટ",se:"One ticket, please.",sg:"એક ટિકિટ આપો."},
{e:"Stop here",p:"સ્ટોપ હિયર",g:"અહીં ઊભા રાખો",se:"Stop here, please.",sg:"કૃપા કરીને અહીં ઊભા રાખો."},
{e:"Where is?",p:"વેર ઇઝ?",g:"ક્યાં છે?",se:"Where is the bus stop?",sg:"બસ સ્ટોપ ક્યાં છે?"}
]},

{d:24,t:"On the phone",tg:"ફોન પર વાત",
tip:"ફોન ઉપાડતી વખતે અંગ્રેજીમાં ફક્ત 'Hello' કહેવાય. સામેવાળું કોણ છે એ પૂછવા 'Who is speaking?' કહેવાય.",
w:[
{e:"Phone",p:"ફોન",g:"ફોન",se:"My phone is not working.",sg:"મારો ફોન ચાલતો નથી."},
{e:"Call",p:"કોલ",g:"ફોન કરવો",se:"Call me in the evening.",sg:"સાંજે મને ફોન કરજો."},
{e:"Message",p:"મેસેજ",g:"સંદેશો",se:"Send me a message.",sg:"મને એક સંદેશો મોકલો."},
{e:"Who is speaking?",p:"હૂ ઇઝ સ્પીકિંગ?",g:"કોણ બોલે છે?",se:"Hello, who is speaking?",sg:"હેલો, કોણ બોલે છે?"},
{e:"One minute",p:"વન મિનિટ",g:"એક મિનિટ",se:"One minute, please.",sg:"કૃપા કરીને એક મિનિટ."},
{e:"I will call later",p:"આઇ વિલ કોલ લેટર",g:"હું પછી ફોન કરીશ",se:"I am busy, I will call later.",sg:"હું વ્યસ્ત છું, પછી ફોન કરીશ."},
{e:"Speak slowly",p:"સ્પીક સ્લોલી",g:"ધીમે બોલો",se:"Please speak slowly.",sg:"કૃપા કરીને ધીમે બોલો."},
{e:"I cannot hear you",p:"આઇ કેનોટ હિયર યુ",g:"મને સંભળાતું નથી",se:"Sorry, I cannot hear you.",sg:"માફ કરશો, મને સંભળાતું નથી."},
{e:"Busy",p:"બિઝી",g:"વ્યસ્ત",se:"He is busy right now.",sg:"તે અત્યારે વ્યસ્ત છે."},
{e:"Wrong number",p:"રોંગ નંબર",g:"ખોટો નંબર",se:"Sorry, wrong number.",sg:"માફ કરશો, ખોટો નંબર છે."}
]},

{d:25,t:"I have, you have",tg:"પાસે હોવું (have / has)",
tip:"I, you, we, they સાથે have વપરાય. He, she, it સાથે has વપરાય. જેમ કે I have a car, પણ She has a car.",
w:[
{e:"I have",p:"આઇ હેવ",g:"મારી પાસે છે",se:"I have two daughters.",sg:"મારે બે દીકરીઓ છે."},
{e:"You have",p:"યુ હેવ",g:"તમારી પાસે છે",se:"You have a nice house.",sg:"તમારું ઘર સરસ છે."},
{e:"She has",p:"શી હેઝ",g:"તેની પાસે છે",se:"She has a new phone.",sg:"તેની પાસે નવો ફોન છે."},
{e:"He has",p:"હી હેઝ",g:"તેની પાસે છે",se:"He has a shop.",sg:"તેની પાસે દુકાન છે."},
{e:"I do not have",p:"આઇ ડુ નોટ હેવ",g:"મારી પાસે નથી",se:"I do not have change.",sg:"મારી પાસે છૂટા પૈસા નથી."},
{e:"My",p:"માય",g:"મારું",se:"This is my bag.",sg:"આ મારી થેલી છે."},
{e:"Your",p:"યોર",g:"તમારું",se:"Is this your book?",sg:"શું આ તમારું પુસ્તક છે?"},
{e:"His",p:"હિઝ",g:"તેનું (પુરુષ)",se:"That is his bicycle.",sg:"પેલી તેની સાઇકલ છે."},
{e:"Her",p:"હર",g:"તેનું (સ્ત્રી)",se:"Her name is Gita.",sg:"તેનું નામ ગીતા છે."},
{e:"Our",p:"અવર",g:"અમારું",se:"This is our house.",sg:"આ અમારું ઘર છે."}
]},

{d:26,t:"Can, want, need",tg:"શકવું, જોઈએ, જરૂર",
tip:"can પછી હંમેશા સાદું ક્રિયાપદ આવે છે: I can go, I can come. વચ્ચે to મુકાતું નથી. પણ want સાથે to આવે છે: I want to go.",
w:[
{e:"I can",p:"આઇ કેન",g:"હું કરી શકું છું",se:"I can speak a little English.",sg:"હું થોડું અંગ્રેજી બોલી શકું છું."},
{e:"I cannot",p:"આઇ કેનોટ",g:"હું નથી કરી શકતી",se:"I cannot come today.",sg:"હું આજે નથી આવી શકતી."},
{e:"Can you help me?",p:"કેન યુ હેલ્પ મી?",g:"શું તમે મદદ કરી શકો?",se:"Excuse me, can you help me?",sg:"માફ કરશો, શું તમે મને મદદ કરી શકો?"},
{e:"I want",p:"આઇ વોન્ટ",g:"મારે જોઈએ છે",se:"I want one kilo sugar.",sg:"મારે એક કિલો ખાંડ જોઈએ છે."},
{e:"I want to go",p:"આઇ વોન્ટ ટુ ગો",g:"મારે જવું છે",se:"I want to go home.",sg:"મારે ઘરે જવું છે."},
{e:"I do not want",p:"આઇ ડુ નોટ વોન્ટ",g:"મારે નથી જોઈતું",se:"I do not want tea now.",sg:"મારે અત્યારે ચા નથી જોઈતી."},
{e:"I need",p:"આઇ નીડ",g:"મને જરૂર છે",se:"I need your help.",sg:"મને તમારી મદદની જરૂર છે."},
{e:"May I come in?",p:"મે આઇ કમ ઇન?",g:"શું હું અંદર આવું?",se:"Excuse me, may I come in?",sg:"માફ કરશો, શું હું અંદર આવું?"},
{e:"Let us go",p:"લેટ અસ ગો",g:"ચાલો જઈએ",se:"Let us go now.",sg:"ચાલો હવે જઈએ."},
{e:"I like",p:"આઇ લાઇક",g:"મને ગમે છે",se:"I like this colour.",sg:"મને આ રંગ ગમે છે."}
]},

{d:27,t:"What are you doing?",tg:"અત્યારે શું ચાલી રહ્યું છે",
tip:"અત્યારે ચાલતી ક્રિયા કહેવા માટે am/is/are પછી ક્રિયાપદના છેડે ing લગાડાય છે. જેમ કે I am cooking (હું રસોઈ કરું છું).",
w:[
{e:"What are you doing?",p:"વોટ આર યુ ડૂઇંગ?",g:"તમે શું કરો છો?",se:"Hello, what are you doing?",sg:"નમસ્તે, તમે શું કરો છો?"},
{e:"I am cooking",p:"આઇ એમ કુકિંગ",g:"હું રસોઈ કરું છું",se:"I am cooking dinner now.",sg:"હું અત્યારે રાતનું જમવાનું બનાવું છું."},
{e:"I am eating",p:"આઇ એમ ઈટિંગ",g:"હું જમું છું",se:"I am eating my lunch.",sg:"હું મારું બપોરનું જમું છું."},
{e:"He is sleeping",p:"હી ઇઝ સ્લીપિંગ",g:"તે સૂઈ રહ્યો છે",se:"Be quiet, he is sleeping.",sg:"શાંતિ રાખો, તે સૂઈ રહ્યો છે."},
{e:"She is working",p:"શી ઇઝ વર્કિંગ",g:"તે કામ કરે છે",se:"She is working today.",sg:"તે આજે કામ કરે છે."},
{e:"They are playing",p:"ધે આર પ્લેઇંગ",g:"તેઓ રમે છે",se:"The children are playing.",sg:"બાળકો રમે છે."},
{e:"I am going",p:"આઇ એમ ગોઇંગ",g:"હું જાઉં છું",se:"I am going to the market.",sg:"હું બજાર જાઉં છું."},
{e:"I am learning",p:"આઇ એમ લર્નિંગ",g:"હું શીખું છું",se:"I am learning English.",sg:"હું અંગ્રેજી શીખું છું."},
{e:"I am watching TV",p:"આઇ એમ વોચિંગ ટીવી",g:"હું ટીવી જોઉં છું",se:"I am watching TV now.",sg:"હું અત્યારે ટીવી જોઉં છું."},
{e:"It is raining",p:"ઇટ ઇઝ રેઇનિંગ",g:"વરસાદ પડે છે",se:"Look, it is raining.",sg:"જુઓ, વરસાદ પડે છે."}
]},

{d:28,t:"Talking about yesterday",tg:"ગઈકાલની વાત (ભૂતકાળ)",
tip:"ભૂતકાળમાં ઘણાં ક્રિયાપદ બદલાઈ જાય છે: go બને went, eat બને ate, come બને came. આ ગોખવા પડે છે, નિયમ નથી.",
w:[
{e:"Yesterday",p:"યસ્ટરડે",g:"ગઈકાલે",se:"Yesterday was Sunday.",sg:"ગઈકાલે રવિવાર હતો."},
{e:"I was",p:"આઇ વોઝ",g:"હું હતી / હતો",se:"I was at home yesterday.",sg:"ગઈકાલે હું ઘરે હતી."},
{e:"They were",p:"ધે વર",g:"તેઓ હતા",se:"They were very happy.",sg:"તેઓ બહુ ખુશ હતા."},
{e:"I went",p:"આઇ વેન્ટ",g:"હું ગઈ હતી",se:"I went to the market.",sg:"હું બજાર ગઈ હતી."},
{e:"I ate",p:"આઇ એટ",g:"મેં ખાધું",se:"I ate rice and dal.",sg:"મેં ભાત અને દાળ ખાધાં."},
{e:"I saw",p:"આઇ સો",g:"મેં જોયું",se:"I saw her yesterday.",sg:"મેં તેને ગઈકાલે જોઈ."},
{e:"He came",p:"હી કેમ",g:"તે આવ્યો",se:"He came in the evening.",sg:"તે સાંજે આવ્યો."},
{e:"She said",p:"શી સેડ",g:"તેણે કહ્યું",se:"She said she is busy.",sg:"તેણે કહ્યું કે તે વ્યસ્ત છે."},
{e:"Did you eat?",p:"ડિડ યુ ઈટ?",g:"તમે જમ્યા?",se:"Did you eat your lunch?",sg:"તમે બપોરનું જમ્યા?"},
{e:"It was good",p:"ઇટ વોઝ ગુડ",g:"તે સારું હતું",se:"The food was very good.",sg:"ખાવાનું બહુ સારું હતું."}
]},

{d:29,t:"Talking about tomorrow",tg:"કાલની વાત (ભવિષ્યકાળ)",
tip:"ભવિષ્યની વાત કરવા ક્રિયાપદ પહેલાં will મુકાય છે અને ક્રિયાપદ બદલાતું નથી: I will go, She will come. બહુ સહેલો નિયમ છે.",
w:[
{e:"Tomorrow",p:"ટુમોરો",g:"કાલે",se:"Tomorrow is a holiday.",sg:"કાલે રજા છે."},
{e:"I will go",p:"આઇ વિલ ગો",g:"હું જઈશ",se:"I will go to the temple.",sg:"હું મંદિર જઈશ."},
{e:"I will come",p:"આઇ વિલ કમ",g:"હું આવીશ",se:"I will come at five.",sg:"હું પાંચ વાગ્યે આવીશ."},
{e:"I will call you",p:"આઇ વિલ કોલ યુ",g:"હું તમને ફોન કરીશ",se:"I will call you tomorrow.",sg:"હું તમને કાલે ફોન કરીશ."},
{e:"We will meet",p:"વી વિલ મીટ",g:"આપણે મળીશું",se:"We will meet on Sunday.",sg:"આપણે રવિવારે મળીશું."},
{e:"She will cook",p:"શી વિલ કુક",g:"તે રસોઈ કરશે",se:"She will cook tonight.",sg:"તે આજે રાત્રે રસોઈ કરશે."},
{e:"What will you do?",p:"વોટ વિલ યુ ડુ?",g:"તમે શું કરશો?",se:"What will you do tomorrow?",sg:"તમે કાલે શું કરશો?"},
{e:"I will not come",p:"આઇ વિલ નોટ કમ",g:"હું નહીં આવું",se:"Sorry, I will not come today.",sg:"માફ કરશો, હું આજે નહીં આવું."},
{e:"Next week",p:"નેક્સ્ટ વીક",g:"આવતા અઠવાડિયે",se:"He will come next week.",sg:"તે આવતા અઠવાડિયે આવશે."},
{e:"Soon",p:"સૂન",g:"જલદી",se:"I will be back soon.",sg:"હું જલદી પાછી આવીશ."}
]},

{d:30,t:"Polite conversation",tg:"વિનમ્ર વાતચીત",
tip:"આ દસ વાક્યો રોજની વાતચીતમાં સૌથી વધારે કામ લાગશે. કંઈ સમજાય નહીં ત્યારે ગભરાયા વગર 'Sorry, I did not understand' કહી શકાય.",
w:[
{e:"Please sit",p:"પ્લીઝ સિટ",g:"કૃપા કરીને બેસો",se:"Please sit, I am coming.",sg:"કૃપા કરીને બેસો, હું આવું છું."},
{e:"Would you like tea?",p:"વુડ યુ લાઇક ટી?",g:"ચા લેશો?",se:"Would you like tea or coffee?",sg:"ચા લેશો કે કોફી?"},
{e:"Excuse me",p:"એક્સક્યુઝ મી",g:"માફ કરશો (ધ્યાન ખેંચવા)",se:"Excuse me, is this seat free?",sg:"માફ કરશો, આ જગ્યા ખાલી છે?"},
{e:"I did not understand",p:"આઇ ડિડ નોટ અન્ડરસ્ટેન્ડ",g:"મને સમજાયું નહીં",se:"Sorry, I did not understand.",sg:"માફ કરશો, મને સમજાયું નહીં."},
{e:"Please say it again",p:"પ્લીઝ સે ઇટ અગેન",g:"ફરીથી કહો",se:"Please say it again, slowly.",sg:"કૃપા કરીને ધીમેથી ફરી કહો."},
{e:"No problem",p:"નો પ્રોબ્લેમ",g:"કોઈ વાંધો નહીં",se:"No problem, take your time.",sg:"કોઈ વાંધો નહીં, નિરાંતે કરો."},
{e:"Take care",p:"ટેક કેર",g:"સંભાળજો",se:"Take care, see you soon.",sg:"સંભાળજો, ફરી મળીશું."},
{e:"Come again",p:"કમ અગેન",g:"ફરી આવજો",se:"Please come again.",sg:"ફરી આવજો."},
{e:"Congratulations",p:"કંગ્રેચ્યુલેશન્સ",g:"અભિનંદન",se:"Congratulations on your new house!",sg:"તમારા નવા ઘર માટે અભિનંદન!"},
{e:"You are welcome",p:"યુ આર વેલકમ",g:"તમારું સ્વાગત છે",se:"Thank you. You are welcome.",sg:"આભાર. તમારું સ્વાગત છે."}
]}
];
