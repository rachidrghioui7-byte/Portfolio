// main.js - النسخة المعدلة مع تحديثات الميلودراما
console.log("✅ تم تحميل main.js بنجاح!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ تم تحميل DOM بالكامل!");
    
    // Drama Data
    const dramaData = {
        action: [
            {
                id: 1,
                title: "إتصال",
                year: "2024",
                heroes: ["Ji-Sung : في دور Jang Jae Kyung", "Jeon-Mi-Do : في دور Oh Yun Jin", "Kwon-Yool : في دور Park Tae Jin"],
                story: "محقق مخضرم في شعبة المخدرات يقع فريسة لإدمانها عنوة على يد شخص مجهول، لكشف اللغز يستخدم وفاة صديقه لتعقب شبكة معقدة من الصلات المشوّهة المُتسترة وراء صداقة مزعومة امتدت لـ 20 عامًا… مُطاردًا من شبح الإدمان، حبيسًا داخل متاهة الخداع والأكاذيب هل سيتمكن من إيجاد 'الخيط' قبل انهيار عالمه بالكامل يا ترى؟",
                poster: "https://aradramatv.cc/wp-content/uploads/2024/05/largephoto1815660.jpeg"
            },
            {
                id: 2,
                title: "سائق سيارة أجرة",
                year: "2021",
                heroes: ["Lee-Je-Hoon : في دور Kim Do Ki", "Esom : في دور Kang Ha Na", "Kim-Eui-Sung : في دور Jang Sung Cheol", "Pyo-Ye-Jin : في دور Go Eun", "Jang-Hyuk-Jin : في دور Choi Kyung Goo", "Lee-Yoo-Joon : في دور Investigator Wang"],
                story: "كيم دو كي خريج الأكاديمية البحرية قُتلت والدته على يد قاتل متسلسل وتغيرت حياته بعد ذلك. كيم دو كي يعمل الآن كسائق تاكسي لصالح شركة 'رينبو تاكسي'. شركة رينبو تاكسي ليست مجرد شركة سيارات أجرة عادية. حيث تقوم الشركة بتقديم خدمة خاصة اسمها 'دعوة للانتقام'. أي إذا طلب منهم أحد العملاء الانتقام له ، فسيقوم كيم دو كي وزملاؤه بأداء الخدمة.",
                poster: "https://aradramatv.cc/wp-content/uploads/Taxi-Driver-Poster2.png"
            },
            {
                id: 12,
                title: "كاشيرو 2026",
                year: "2026",
                heroes: ["Lee-Jun-Ho : في دور Kang Sang Ung", "Kim-Hye-Joon : في دور Kim Min Suk"],
                story: "كانغ سانغ أونغ موظّف حكومي يمتلك قوة خارقة تعتمد بالكامل على مقدار المال الذي يحمله. كلما زادت النقود في جيبه، ازدادت قوته، ما يجعله يعيش في صراع دائم للحفاظ على ما يكفي من المال ليستطيع استخدام قدراته. حبيبته كيم مين سوك واقعية وفعّالة، ورغم أن قوته غير عملية على الإطلاق، إلا أنها تسانده بلا تردد. في المقابل، هناك بيون هو إن، محامٍ يقود منظمة لأصحاب القدرات الخارقة، و بانغ أون مي ذات القوة الذهنية التي تعمل بقدر السعرات الحرارية التي تستهلكها. معًا، يشكّلون فريقًا يسعى لحماية حياتهم الطبيعية من الأشرار الذين يخططون لزعزعة استقرار العالم، في معركة تجمع بين القوة الخارقة والضعف الإنساني.",
                poster: "https://aradramatv.cc/wp-content/uploads/2025/12/l0Yx7v_3f.jpg"
            },
            {
                id: 13,
                title: "السعادة",
                year: "2021",
                heroes: ["Han-Hyo-Joo : في دور Yoon Sae Bom", "Park-Hyung-Sik : في دور Jung Yi Hyun"],
                story: "تحكي الدراما عن وقت أصبحت فيه الأمراض المعدية هي الوضع الطبيعي الجديد، في شقة مشيدة حديثاً في مدينة كبيرة حيث الطوابق العليا مخصصة للمبيعات العامة والطوابق السفلية مستأجرة، تصور الدراما المعركة النفسية الدقيقة والتمييز الطبقي الذي يحدث وتصل المدينة إلى الحضيض عندما تحل نهاية العالم على شكل نوع جديد من الأمراض المعدية التي يعاني فيها الناس من العطش بلا هوادة.",
                poster: "https://aradramatv.cc/wp-content/uploads/Happiness-Poster-6.jpg"
            },
            {
                id: 14,
                title: "لن أرحم أحدا",
                year: "2025",
                heroes: ["So-Ji-Sub : في دور Nam Gi Jun", "Huh-Joon-Ho : في دور Lee Ju Un", "Ahn-Kil-Kang : في دور Koo Bong San"],
                story: "تحكي دراما 'لن أرحم أحدا' عن نام جي جون كان في يوم من الأيام عضوًا بارزًا في عصابة بونغسان، التي كان يقودها كو بونغ سان. خاض حروبًا دموية من أجل السيطرة على المناطق، وساعد العصابة على الصعود إلى القمة. لكن كل شيء تغير عندما انضم شقيقه الأصغر، نام جي سوك، إلى عصابة جووون المنافسة، بقيادة لي جو أون. لحماية شقيقه، اتخذ نام جي جون قرارًا قاسيًا — ترك عصابة بونغسان إلى الأبد، وقطع وتر أخيله الأيسر كدليل على أنه لن يعود. بعد أحد عشر عامًا، يعيش حياة هادئة، ويدير عملًا صغيرًا لتوريد المشروبات إلى المؤسسات التي تملكها بونغسان. لا ينوي العودة أبدًا. لكن عندما يُعثر على نام جي سوك، الذي أصبح الرجل الثاني في جووون، ميتًا في ظروف غامضة، يدرك نام جي جون أنه لا يستطيع البقاء بعيدًا. لكشف الحقيقة والانتقام، يعود إلى عالم الجريمة الذي أقسم أن يتركه خلفه، حيث لا تزال الأحقاد القديمة مشتعلة، وتغيرت موازين القوى، ولا شيء كما يبدو.",
                poster: "https://aradramatv.cc/wp-content/uploads/2025/06/Pxjrp3_3f.jpg"
            }
        ],
        politics: [
            {
                id: 3,
                title: "قلوب مدفونة",
                year: "2025",
                heroes: ["Park-Hyung-Sik : في دور Seo Dong Ju", "Huh-Joon-Ho : في دور Yeom Jang Seon"],
                story: "للبقاء على قيد الحياة، قام رجل بقرصنة صندوق أموال سياسية غير مشروعة بقيمة 2 تريليون وون. ورجل غامض ذو سلطة ونفوذ، يحاول قتله دون أن يدرك أنه تم اختراقه. يعمل سيو دونغ جو كقائد في مكتب سكرتارية رئيس مجلس إدارة مجموعة دايسان. ويُعرف باسم رجل دايسان، وهو شخص يعيش ويموت من أجل مصالح مجموعة دايسان، لكنه يخفي طموحاته العميقة والمعقدة في داخله. هدفه النهائي هو الاستحواذ بالكامل على مجموعة دايسان عندما تحين الفرصة. أما يوم جانغ سون، فهو أستاذ قانون ومدير سابق لجهاز الاستخبارات الوطنية. يُعدّ الشخص الأكثر نفوذًا في عالم السياسة الكورية الجنوبية. يشعر يوم جانغ سون بقمة النشوة عندما يستخدم المال والسلطة كما يشاء. إنه من النوع الذي لا يشعر بالحياة إلا عندما يكون لديه السيطرة الكاملة على الجميع كأنهم دمى بين يديه.",
                poster: "https://aradramatv.cc/wp-content/uploads/2025/02/477031708_18494314768018263_331743021792791788_n.jpg"
            },
            {
                id: 4,
                title: "القاضي الشيطان",
                year: "2021",
                heroes: ["Kim-Min-Jung : في دور Jung Sun-A", "Ji-Sung : في دور Kang Yo-Han"],
                story: "يعمل كانج يو هان رئيس قضاة ويعاقب المخادعين في قاعة المحكمة بلا رحمة محولاً إياها إلى برنامج واقعي وبالتالي اكتسب لقب قاضي الشيطان ومع ذلك إن هالته الغامضة تخفي هويته الحقيقية وطموحاته.",
                poster: "https://aradramatv.cc/wp-content/uploads/The-Devil-Judge-Poster1.jpg"
            },
            {
                id: 5,
                title: "المُدعى عليه",
                year: "2017",
                heroes: ["Ji-Sing : في دور Park Jung Woo", "Uhm-Ki-Joon : في دور Cha Min Ho"],
                story: "تتحدث دراما المُدعى عليه عن بارك جونج وو، مدعي عام في مكتب الإدعاء العام في مقاطعة سيئول. يستيقظ يوماً ماً مداناً بسلسلة جرائم ويعاني من فقدان الذاكرة، لا يملك جونج وو أدنى فكرة عما زجه في السجن ويعاني لاستعادة ذاكرته وتبرئة اسمه. الدراما أخذت جائزة دراما العام سنة 2017 في حفل جوائز شبكة SBS وكذلك جائزة الكبرى لأحسن دراما في حفل جوائز سيوول Seoul Awards.",
                poster: "https://aradramatv.cc/wp-content/uploads/2019/02/Defendant-Poster-2-e1550877499450.jpg"
            },
            {
                id: 10,
                title: "محامون تحت التدريب",
                year: "2025",
                heroes: ["Lee-Jin-Wook : في دور Yun Seok Hun", "Jung-Chae-Yeon : في دور Kang Hyo Min", "Lee-Hak-Joo : في دور Lee Jin U", "Jeon-Hye-Bin : في دور Heo Min Jeong"],
                story: "يون سوك هون، محامٍ بارع وبارد الطباع، يقود فريق التقاضي في مكتب يوليم ويُعرف بمنطقه الحاد وأسلوبه الصارم. تعمل معه كانغ هيو مين، المحامية المبتدئة ذات الشخصية الخجولة والمبادئ القوية، التي كثيرًا ما تصطدم به. رغم خلافاتهما المستمرة، تخوض كانغ هيو مين رحلة نضج مهني لتصبح محامية حقيقية.",
                poster: "https://aradramatv.cc/wp-content/uploads/2025/08/b98dbcb560730f4cef4fc140534719ce.jpg"
            },
            {
                id: 11,
                title: "القانون والمدينة",
                year: "2025",
                heroes: ["Lee-Jong-Suk : في دور An Ju Hyeong", "Mun-Ka-Young : في دور Kang Hui Ji", "Kang-You-Seok : في دور Cho Chang Won", "Ryu-Hye-Young : في دور Bae Mun Jeong", "Im-Sung-Jae : في دور Ha Sang Gi", "Yeom-Hye-Ran : في دور Kim Hyeong Min"],
                story: "تتحدث دراما القانون والمدينة عن أن جو هيونغ، محامٍ كبير في سنته التاسعة، يبدو بارد المشاعر لكنه بارع للغاية. دخل مجال المحاماة لأنه وجد المنطق والقضايا ممتعة، دون أن يهتم بمفاهيم مثل حماية الضعفاء أو تحقيق العدالة. رغم خبرته ونجاحه، يرفض فتح مكتبه الخاص لأنه يعتبره عبئًا. في المقابل، كانغ هي جي، محامية مبتدئة في شركة جوهوا، شخصية اجتماعية تؤمن أن تغيير حياة شخص واحد يعني تغيير عالمه كله. هي واثقة وصادقة مهما كانت ظروفها. إلى جانبهما، هناك باي مون جونغ، تشو تشانغ وون، وها سانغ كي. هؤلاء المحامون الخمسة يواجهون تحديات القضايا وينمون معًا، بينما يبنون صداقات قوية من خلال تناولهم الوجبات معًا.",
                poster: "https://aradramatv.cc/wp-content/uploads/2025/06/3og6nj_4f.jpg"
            }     
        ],
        melodrama: [
            {
                id: 15,
                title: "عزيزي الأجاشي",
                year: "2018",
                heroes: ["Lee-Sun-Kyun : في دور Park Dong Hoon", "IU : في دور Lee Ji Ahn"],
                story: "تحكي الدراما قصة ثلاثة اخوة في منتصف العُمر، يتحملون أعباء الحياة وقصة امرأة قويّة قاسية القلب كانت تعيش حياة صعبة بمفردها، حيث يتشاركون في علاج جِراح ماضيهم.",
                poster: "https://aradramatv.cc/wp-content/uploads/2024/04/MV5BZGIzNDVjOTUtZTZkMi00OWIyLTgyZDYtMTY5YzIwNzc2ZDA2XkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg"
            },
            {
                id: 16,
                title: "عندما تمنحك الحياة ثمار اليوسفي",
                year: "2025",
                heroes: ["IU : في دور O Ae Sun", "Park-Bo-Gum : في دور Yang Gwan Sik"],
                story: "هذه قصة تشيد بشباب آبائنا وأمهاتنا، بما في ذلك أول حب للأم، وبطولات الأب، وشباب الجدة المتمرد، وعصر الجد الرومانسي. آي سون فتاة متمردة لكنها تتوتر عند التمرد، فقيرة لكنها مشرقة ومتفائلة، تحلم بأن تصبح شاعرة رغم عدم قدرتها على الدراسة، وهي جريئة ولا تخفي مشاعرها. غوان شيك شاب مجتهد وصامت، لا يجيد الرومانسية ولا يعرف كيف يتصرف عند فرح أو حزن آي سون، لكنه محب مخلص يكرس كل شيء لحبها.",
                poster: "https://aradramatv.cc/wp-content/uploads/2025/03/7358LB_3f.jpg"
            },
            {
                id: 17,
                title: "آسف أنا أحبك",
                year: "2004",
                heroes: ["So-Ji-Sub : في دور Cha Moo Hyuk", "Im-Soo-Jung : في دور Song Eun Chae", "Jung-Kyung-Ho : في دور Choi Yune", "Seo-Ji-Young : في دور Kang Min Joo"],
                story: "تتحدث دراما 'آسف أنا أحبك' عن 'تشاو مو هايوك' الذي هجرته أمه عندما ولد، وتـبنـته عائلة استرالية عندما كان في الثانية من عمره. لكن تعرض لإساءة معاملة منهم وهرب من المنزل في عمر صغير. وعاش في الشوارع واصبح مجرماً يمتهن السرقة والغش والقتال والكذب كل ماعرفه ليعيش في الشوارع. التقى بفتاة شابة 'مون جاي يونغ' أحبها واهتمت به وعلمته اللغة الكورية. لكنها خانته وقررت الزواج برجل غني. وتصله دعوة لـِ زفافها و حدث مـالم يتوقع أصيب برصاصتين في رأسه، واستطاع الأطباء إزالة رصاصة واحدة لكن الاخرى تقتله ببطئ. ويـقـرر العودة إلى كوريا. يملئه الغضب والإنتقام من والدته التي هجرته. لـكن مـا الذي سـيحدث ؟؟؟",
                poster: "https://aradramatv.cc/wp-content/uploads/2019/08/MV5BMjlmYTQ3NTktODMxOS00ZTY1LWE5MGQtZmQxYTc4NWNlYjAwXkEyXkFqcGdeQXVyMzA1NzczOTU@._V1_.jpg"
            },
            {
                id: 18,
                title: "قصة حب حزينة",
                year: "2005",
                heroes: ["كوون سانغ وو", "كيم هي-سون", "يون جونغ هون"],
                story: "صداقة بين طفلين صبي وفتاة عمياء تتحول إلى حب كبير لكن الأيام تفرق بينهما فهي تسافر إلى أميركا بينما يبقى هو في كوريا ليكمل الخدمة العسكرية سنوات تمر فيصلها خبر وفاته فترتبط بشاب غني يجعل منها مطربة مشهورة ويساعدها على إجراء عملية جراحية تعيد لها النظر لكن القدر يجمعها هي المطربة بملحن كوري تستلطفه يكون هو حبيبها الذي لم يمت ولكنها لا تعرفه لأنها لم تر يوما شكله",
                poster: "https://www.arab-drama.me/static/images/cover/19fda2821b8d4d508d2fd0675ceb73e0.jpeg"
            },
            {
                id: 19,
                title: "السقيفة",
                year: "2020",
                heroes: ["Lee-Ji-Ah : في دور Shim Soo Ryun", "Kim-So-Yun : في دور Chun Seo Jin", "Eugene : في دور Oh Yoon Hee", "Uhm-Ki-Joon : في دور Joo Dan Tae", "Park-Eun-Suk : في دور Logan Lee", "Yoon-Jong-Hoon : في دور Ha Yoon Chul"],
                story: "تروي الدراما قصة امرأة تسعى جاهدة لتحقيق هدفها في دخول المجتمع الراقي من خلال أن تصبح 'الملكة' في السقيفة في الطابق 100 في جانجنام ، وهي ذروة النجاح في عينيها. كما تروي الدراما أيضا قصة النساء اللاتي سيفعلن أي شيء لحماية أنفسهن.",
                poster: "https://aradramatv.cc/wp-content/uploads/The-Penthouse-Poster4.jpg"
            }
        ],
        crime: [
            {
                id: 8,
                title: "ملف الجريمة",
                year: "2022",
                heroes: ["كم نام غيل", "لي سيونغ كي"],
                story: "مسلسل investigational حيث يحقق فريق من المحققين الأذكياء في سلسلة جرائم غامضة ومتشابكة. كل حلقة تقدم لغزًا جديدًا مع روابط خفية تربط القضايا ببعضها.",
                poster: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 9,
                title: "شبكة الجريمة",
                year: "2021",
                heroes: ["جو جونغ سوك", "مون جا يونغ"],
                story: "يتتبع المسلسل شبكة إجرامية معقدة تمتد عبر البلاد، حيث يحاول محقق عنيد كشف الحقيقة وراء هذه الشبكة والمسؤولين الكبار الذين يحمونها.",
                poster: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            }
        ]
    };

    // Type Names in Arabic
    const typeNames = {
        'action': 'أكشن',
        'politics': 'سياسة وقانون', 
        'melodrama': 'ميلودراما',
        'crime': 'مسلسلات الجريمة'
    };

    // Initialize
    function init() {
        console.log("🔄 تهيئة التطبيق...");
        setupEventListeners();
        resetDramaDisplay();
    }

    // Setup Event Listeners
    function setupEventListeners() {
        console.log("🎯 إعداد مستمعي الأحداث...");
        
        // Type buttons - FIXED
        const typeButtons = document.querySelectorAll('.type-btn');
        console.log(`🔘 عدد أزرار الأنواع: ${typeButtons.length}`);
        
        typeButtons.forEach(button => {
            button.addEventListener('click', function() {
                console.log("تم النقر على نوع دراما");
                const typeCard = this.closest('.type-card');
                const type = typeCard.getAttribute('data-type');
                console.log(`النوع المحدد: ${type}`);
                displayDramas(type);
            });
        });

        // Back to types button - FIXED
        const backToTypesBtn = document.querySelector('.back-to-types');
        if (backToTypesBtn) {
            backToTypesBtn.addEventListener('click', function() {
                console.log("العودة للأنواع");
                resetDramaDisplay();
            });
            // إخفاء الزر في البداية
            backToTypesBtn.style.display = 'none';
        }

        // Modal elements
        const modal = document.getElementById('drama-modal');
        const closeModalBtn = document.querySelector('.close-modal');
        
        // Close modal
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', function() {
                if (modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        }

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (modal && event.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        }

        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت.');
                this.reset();
            });
        }

        // Newsletter form submission
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                alert(`شكراً على اشتراكك بالنشرة البريدية! تم إرسال تأكيد إلى ${email}`);
                this.reset();
            });
        }
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // Display dramas by type
    function displayDramas(type) {
        console.log(`🎬 عرض مسلسلات نوع: ${type}`);
        
        const dramas = dramaData[type];
        
        if (!dramas) {
            console.error("❌ لا توجد بيانات لهذا النوع:", type);
            return;
        }
        
        // Update title
        const dramaTypeTitle = document.getElementById('drama-type-title');
        if (dramaTypeTitle) {
            dramaTypeTitle.textContent = `مسلسلات ${typeNames[type]}`;
        }
        
        // Show back button
        const backToTypesBtn = document.querySelector('.back-to-types');
        if (backToTypesBtn) {
            backToTypesBtn.style.display = 'flex';
        }
        
        // Create dramas grid
        const dramasContainer = document.getElementById('dramas-container');
        let dramasHTML = `<div class="dramas-grid">`;
        
        dramas.forEach(drama => {
            dramasHTML += `
                <div class="drama-card">
                    <div class="drama-poster">
                        <img src="${drama.poster}" alt="${drama.title}" loading="lazy">
                    </div>
                    <div class="drama-info">
                        <h3>${drama.title}</h3>
                        <div class="year-heroes">
                            <span>${drama.year}</span>
                            <span>${drama.heroes.join('، ')}</span>
                        </div>
                        <p>${drama.story.substring(0, 120)}...</p>
                        <button class="view-drama-btn" data-id="${drama.id}">عرض التفاصيل</button>
                    </div>
                </div>
            `;
        });
        
        dramasHTML += `</div>`;
        dramasContainer.innerHTML = dramasHTML;
        
        // Add event listeners to drama buttons
        setTimeout(() => {
            document.querySelectorAll('.view-drama-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    const drama = findDramaById(id);
                    if (drama) {
                        openModal(drama);
                    }
                });
            });
        }, 100);
        
        // Scroll to dramas section
        setTimeout(() => {
            const dramaSection = document.querySelector('.drama-details-section');
            if (dramaSection) {
                dramaSection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        }, 200);
    }

    // Find drama by ID
    function findDramaById(id) {
        for (const type in dramaData) {
            const drama = dramaData[type].find(d => d.id === id);
            if (drama) return drama;
        }
        return null;
    }

    // Reset drama display
    function resetDramaDisplay() {
        const dramaTypeTitle = document.getElementById('drama-type-title');
        const dramasContainer = document.getElementById('dramas-container');
        const backToTypesBtn = document.querySelector('.back-to-types');
        
        if (dramaTypeTitle) {
            dramaTypeTitle.textContent = 'اختر نوعًا من الأعلى لعرض المسلسلات';
        }
        
        if (backToTypesBtn) {
            backToTypesBtn.style.display = 'none';
        }
        
        if (dramasContainer) {
            dramasContainer.innerHTML = `
                <div class="placeholder-message">
                    <i class="fas fa-film"></i>
                    <p>يرجى اختيار نوع دراما من الأعلى لعرض المسلسلات المميزة</p>
                </div>
            `;
        }
    }

    // Open modal with drama details
    function openModal(drama) {
        const modal = document.getElementById('drama-modal');
        const modalBody = document.getElementById('modal-body');
        
        if (!modal || !modalBody) return;
        
        let heroesHTML = '';
        drama.heroes.forEach(hero => {
            heroesHTML += `
                <div class="hero-item">
                    <i class="fas fa-user"></i>
                    <span>${hero}</span>
                </div>
            `;
        });
        
        modalBody.innerHTML = `
            <div class="modal-drama-header">
                <h2>${drama.title}</h2>
                <div class="modal-drama-meta">
                    <span>سنة الإصدار: ${drama.year}</span>
                    <span>النوع: ${getDramaType(drama.id)}</span>
                </div>
            </div>
            <div class="modal-drama-content">
                <div class="modal-drama-poster">
                    <img src="${drama.poster}" alt="${drama.title}">
                </div>
                <div class="modal-drama-details">
                    <div class="modal-drama-story">
                        <h3>قصة المسلسل</h3>
                        <p>${drama.story}</p>
                    </div>
                    <div class="modal-drama-heroes">
                        <h3>أبطال المسلسل</h3>
                        <div class="heroes-list">
                            ${heroesHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Get drama type by ID
    function getDramaType(id) {
        for (const type in dramaData) {
            if (dramaData[type].some(d => d.id === id)) {
                return typeNames[type];
            }
        }
        return 'غير معروف';
    }

    // Initialize the application
    init();
});
