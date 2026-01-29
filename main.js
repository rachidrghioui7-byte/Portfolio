// main.js - النسخة المعدلة لتعمل على GitHub Pages
document.addEventListener('DOMContentLoaded', function() {
    
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
                title: "صراع العروش",
                year: "2021",
                heroes: ["شين هيون بين", "كم جو ريونغ"],
                story: "يدور المسلسل حول الصراعات السياسية داخل القصر الملكي في عصر جوسون، حيث يتنافس الأمراء على العرش وتحدث مؤامرات ومعارك ذكية للسيطرة على السلطة. يعكس المسلسل تعقيدات السياسة والقانون في البلاط الملكي.",
                poster: "https://images.unsplash.com/photo-1619983453201-b9a5b99658c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
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

    // DOM Elements
    const typeButtons = document.querySelectorAll('.type-btn');
    const dramasContainer = document.getElementById('dramas-container');
    const dramaTypeTitle = document.getElementById('drama-type-title');
    const backToTypesBtn = document.querySelector('.back-to-types');
    const modal = document.getElementById('drama-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Type Names in Arabic
    const typeNames = {
        'action': 'أكشن',
        'politics': 'سياسة وقانون', 
        'melodrama': 'ميلودراما',
        'crime': 'مسلسلات الجريمة'
    };

    // Initialize
    function init() {
        setupEventListeners();
    }

    // Setup Event Listeners
    function setupEventListeners() {
        // Type buttons
        typeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const typeCard = this.closest('.type-card');
                const type = typeCard.getAttribute('data-type');
                displayDramas(type);
            });
        });

        // Back to types button
        backToTypesBtn.addEventListener('click', function() {
            resetDramaDisplay();
        });

        // Close modal
        closeModalBtn.addEventListener('click', closeModal);

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        // Mobile menu toggle
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });

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
    }

    // Display dramas by type
    function displayDramas(type) {
        const dramas = dramaData[type];
        
        if (!dramas) return;
        
        // Update title
        dramaTypeTitle.textContent = `مسلسلات ${typeNames[type]}`;
        
        // Create dramas grid
        let dramasHTML = `<div class="dramas-grid">`;
        
        dramas.forEach(drama => {
            dramasHTML += `
                <div class="drama-card">
                    <div class="drama-poster">
                        <img src="${drama.poster}" alt="${drama.title}">
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
        document.querySelectorAll('.view-drama-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const drama = findDramaById(id);
                if (drama) {
                    openModal(drama);
                }
            });
        });
        
        // Scroll to dramas section
        document.querySelector('.drama-details-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
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
        dramaTypeTitle.textContent = 'اختر نوعًا من الأعلى لعرض المسلسلات';
        dramasContainer.innerHTML = `
            <div class="placeholder-message">
                <i class="fas fa-film"></i>
                <p>يرجى اختيار نوع دراما من الأعلى لعرض المسلسلات المميزة</p>
            </div>
        `;
    }

    // Open modal with drama details
    function openModal(drama) {
        const modalBody = document.getElementById('modal-body');
        
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

    // Close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Initialize the application
    init();
});
