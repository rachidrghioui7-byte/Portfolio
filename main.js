// main.js - النسخة المعدلة لتعمل على GitHub Pages
console.log("✅ تم تحميل main.js بنجاح!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ تم تحميل DOM بالكامل!");
    
    // Drama Data
    const dramaData = {
        action: [
            {
                id: 1,
                title: "السيف المفقود",
                year: "2020",
                heroes: ["لي مين هو", "كم جو وون"],
                story: "تدور القصة حول صراع القوى بين مختلف الممالك في عصر كوريو، حيث يظهر بطل قوي يسعى للانتقام ويواجه تحديات كبيرة في طريقه لتحقيق العدالة. المسلسل مليء بمشاهد الحركة والإثارة والقتال بالسيف.",
                poster: "https://images.unsplash.com/photo-1595769812725-4c6564f7046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 2,
                title: "محاربو الظل",
                year: "2021",
                heroes: ["جانغ هاي جين", "جونغ يو مي"],
                story: "يروي المسلسل قصة محاربين سريين يحمون المملكة من الأعداء الخفيين، حيث يواجهون مؤامرات خطيرة ويخوضون معارك مثيرة للدفاع عن الشعب. يحتوي على مشاهد قتال رائعة وتأثيرات بصرية مبهرة.",
                poster: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            }
        ],
        politics: [
            {
                id: 3,
                title: "قلوب مدفونة",
                year: "2025",
                heroes: ["Park-Hyung-Sik : في دور Seo Dong Ju","Huh-Joon-Ho : في دور Yeom Jang Seon"],
                story: "للبقاء على قيد الحياة، قام رجل بقرصنة صندوق أموال سياسية غير مشروعة بقيمة 2 تريليون وون. ورجل غامض ذو سلطة ونفوذ، يحاول قتله دون أن يدرك أنه تم اختراقه.
يعمل “سيو دونغ جو” كقائد في مكتب سكرتارية رئيس مجلس إدارة مجموعة دايسان. ويُعرف باسم “رجل دايسان”، وهو شخص يعيش ويموت من أجل مصالح مجموعة دايسان، لكنه يخفي طموحاته العميقة والمعقدة في داخله. هدفه النهائي هو الاستحواذ بالكامل على مجموعة دايسان عندما تحين الفرصة.
أما “يوم جانغ سون”، فهو أستاذ قانون ومدير سابق لجهاز الاستخبارات الوطنية. يُعدّ الشخص الأكثر نفوذًا في عالم السياسة الكورية الجنوبية. يشعر “يوم جانغ سون” بقمة النشوة عندما يستخدم المال والسلطة كما يشاء. إنه من النوع الذي لا يشعر بالحياة إلا عندما يكون لديه السيطرة الكاملة على الجميع كأنهم دمى بين يديه.",
                poster: "https://aradramatv.cc/wp-content/uploads/2025/02/477031708_18494314768018263_331743021792791788_n.jpg"
            },
            {
                id: 4,
                title: "قانون القصر",
                year: "2022",
                heroes: ["لي جون هو", "بارك إيون بين"],
                story: "يتناول المسلسل قضايا قانونية معقدة حيث يدافع محام شاب عن المظلومين ويكشف الفساد داخل النظام القضائي. يعرض التحديات الأخلاقية والمهنية التي يواجهها المحامون في سعيهم لتحقيق العدالة.",
                poster: "https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            }
        ],
        melodrama: [
            {
                id: 5,
                title: "حكاية حب",
                year: "2020",
                heroes: ["سونغ كانغ", "كم جو أون"],
                story: "قصة حب مؤثرة بين شاب وفتاة من خلفيات اجتماعية مختلفة، حيث يواجهان تحديات عائلية واجتماعية تحاول أن تفصل بينهما. المسلسل مليء بالمشاعر العميقة والمواقف العاطفية التي تلامس القلب.",
                poster: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 6,
                title: "قلوب متحطمة",
                year: "2019",
                heroes: ["بارك سو دام", "جانغ كي يونغ"],
                story: "تروي دراما عاطفية قصة امرأة شابة تكافح من أجل تحقيق أحلامها رغم الصعوبات التي تواجهها، وتجد الحب في مكان غير متوقع. المسلسل يستكشف مواضيع الحب والخسارة والأمل بطريقة مؤثرة.",
                poster: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            }
        ],
        crime: [
            {
                id: 7,
                title: "ملف الجريمة",
                year: "2022",
                heroes: ["كم نام غيل", "لي سيونغ كي"],
                story: "مسلسل investigational حيث يحقق فريق من المحققين الأذكياء في سلسلة جرائم غامضة ومتشابكة. كل حلقة تقدم لغزًا جديدًا مع روابط خفية تربط القضايا ببعضها.",
                poster: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 8,
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

