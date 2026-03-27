// অডিও এবং ২০টি দৈনন্দিন দোয়ার ডাটাবেস
const duas = [
    {
        id: 1,
        title: "ঘুম থেকে ওঠার দোয়া",
        icon: "🌅",
        content: "উচ্চারণ: আলহামদু লিল্লাহিল্লাজী আহয়ানা বা'দা মা আমাতানা ওয়া ইলাইহিন নুশুর।\n\nঅর্থ: সব প্রশংসা ওই আল্লাহর জন্য, যিনি আমাদের মৃত্যুর (ঘুমের) পর আবার জীবিত করেছেন। আর তাঁর কাছেই আমাদের ফিরে যেতে হবে।",
        moral: "ফজিলত: ঘুম থেকে ওঠার পর এই দোয়া পড়লে সারাদিন আল্লাহর রহমতের মাঝে কাটে এবং আখেরাতের কথা স্মরণ থাকে।",
        audioSrc: "audio/dua1.mp3" // আপনার অডিও ফাইলের লিংক বা পাথ এখানে দিন
    },
    {
        id: 2,
        title: "ঘুমানোর আগের দোয়া",
        icon: "😴",
        content: "উচ্চারণ: আল্লাহুম্মা বিসমিকা আমুতু ওয়া আহয়া।\n\nঅর্থ: হে আল্লাহ! আপনার নাম নিয়েই আমি মারা যাচ্ছি (ঘুমাচ্ছি) এবং আপনার নাম নিয়েই জীবিত হব (জেগে উঠব)।",
        moral: "ফজিলত: রাতে বিছানায় ঘুমাতে যাওয়ার সময় ডান কাতে শুয়ে এই দোয়া পড়তে হয়। এতে খারাপ স্বপ্ন থেকে রক্ষা পাওয়া যায় এবং শান্তির ঘুম হয়।",
        audioSrc: "audio/dua2.mp3"
    },
    {
        id: 3,
        title: "বাসা থেকে বের হওয়ার দোয়া",
        icon: "🚪",
        content: "উচ্চারণ: বিসমিল্লাহি তাওয়াক্কালতু আলাল্লাহ, লা-হাওলা ওয়ালা কুওয়াতা ইল্লা বিল্লাহ।\n\nঅর্থ: আল্লাহর নামে বের হচ্ছি, আল্লাহর ওপর ভরসা করলাম। আল্লাহ ছাড়া কোনো ভরসা ও শক্তি নেই।",
        moral: "ফজিলত: এই দোয়া পড়লে আল্লাহ সঠিক পথ দেখান, নিরাপত্তা দেন এবং শয়তান দূরে সরে যায়।",
        audioSrc: "audio/dua3.mp3"
    },
    {
        id: 4,
        title: "বাসায় প্রবেশের দোয়া",
        icon: "🏠",
        content: "উচ্চারণ: বিসমিল্লাহি ওয়ালাজনা ওয়া বিসমিল্লাহি খারাজনা ওয়া আলা রাব্বিনা তাওয়াক্কালনা।\n\nঅর্থ: আল্লাহর নামে আমরা প্রবেশ করলাম, আল্লাহর নামেই আমরা বের হয়েছিলাম এবং আমাদের রবের ওপরই আমরা ভরসা করি।",
        moral: "ফজিলত: বাসায় ঢোকার সময় সালাম দিয়ে এই দোয়া পড়লে ঘরে শয়তান প্রবেশ করতে পারে না এবং বরকত আসে।",
        audioSrc: "audio/dua4.mp3"
    },
    {
        id: 5,
        title: "খাবার শুরুর দোয়া",
        icon: "🍽️",
        content: "উচ্চারণ: বিসমিল্লাহি ওয়া আলা বারাকাতিল্লাহ। (অথবা শুধু 'বিসমিল্লাহ')\n\nঅর্থ: আল্লাহর নামে এবং আল্লাহর বরকতের ওপর ভরসা করে শুরু করছি।",
        moral: "ফজিলত: যেকোনো খাবার খাওয়ার আগে এই দোয়া পড়লে খাবারে বরকত হয় এবং শয়তান খাবারে অংশ নিতে পারে না।",
        audioSrc: "audio/dua5.mp3"
    },
    {
        id: 6,
        title: "খাবার শেষের দোয়া",
        icon: "🤲",
        content: "উচ্চারণ: আলহামদু লিল্লাহিল্লাজী আতআমানা ওয়াসাকানা ওয়াজাআলানা মিনাল মুসলিমিন।\n\nঅর্থ: সব প্রশংসা সেই আল্লাহর, যিনি আমাদের খাইয়েছেন, পান করিয়েছেন এবং মুসলমানদের অন্তর্ভুক্ত করেছেন।",
        moral: "ফজিলত: খাবার শেষ করার পর আল্লাহর শুকরিয়া আদায় করলে আল্লাহ খুশি হন এবং রিজিকে বরকত দেন।",
        audioSrc: "audio/dua6.mp3"
    },
    {
        id: 7,
        title: "মসজিদে প্রবেশের দোয়া",
        icon: "🕌",
        content: "উচ্চারণ: আল্লাহুম্মাফ তাহলি আবওয়াবা রাহমাতিক।\n\nঅর্থ: হে আল্লাহ! আমার জন্য আপনার রহমতের দরজাগুলো খুলে দিন।",
        moral: "ফজিলত: মসজিদে ঢোকার সময় ডান পা আগে দিয়ে এই দোয়া পড়তে হয়। এতে আল্লাহর বিশেষ রহমত লাভ করা যায়।",
        audioSrc: "audio/dua7.mp3"
    },
    {
        id: 8,
        title: "মসজিদ থেকে বের হওয়ার দোয়া",
        icon: "🚶",
        content: "উচ্চারণ: আল্লাহুম্মা ইন্নি আসআলুকা মিন ফাদলিক।\n\nঅর্থ: হে আল্লাহ! আমি আপনার কাছে আপনার অনুগ্রহ বা রিজিক প্রার্থনা করছি।",
        moral: "ফজিলত: মসজিদ থেকে বের হওয়ার সময় বাম পা আগে দিয়ে এই দোয়া পড়তে হয়। এতে দৈনন্দিন কাজে আল্লাহর সাহায্য পাওয়া যায়।",
        audioSrc: "audio/dua8.mp3"
    },
    {
        id: 9,
        title: "টয়লেটে প্রবেশের দোয়া",
        icon: "🚻",
        content: "উচ্চারণ: আল্লাহুম্মা ইন্নি আউযুবিকা মিনাল খুবুসি ওয়াল খাবায়িস।\n\nঅর্থ: হে আল্লাহ! আমি আপনার কাছে পুরুষ ও নারী শয়তানের অনিষ্ট থেকে আশ্রয় চাই।",
        moral: "ফজিলত: টয়লেটে ঢোকার আগে বাম পা দিয়ে প্রবেশ করার সময় এটি পড়তে হয়। এতে খারাপ জিন ও শয়তানের প্রভাব থেকে মুক্ত থাকা যায়।",
        audioSrc: "audio/dua9.mp3"
    },
    {
        id: 10,
        title: "টয়লেট থেকে বের হওয়ার দোয়া",
        icon: "💧",
        content: "উচ্চারণ: গুফরানাকা। আলহামদু লিল্লাহিল্লাজী আযহাবা আন্নিল আযা ওয়া আফানি।\n\nঅর্থ: হে আল্লাহ! আমি আপনার কাছে ক্ষমা চাই। সব প্রশংসা সেই আল্লাহর, যিনি আমার কষ্টদায়ক জিনিস বের করে দিয়েছেন এবং আমাকে সুস্থতা দিয়েছেন।",
        moral: "ফজিলত: বের হওয়ার সময় ডান পা আগে দিয়ে এই দোয়া পড়তে হয়। এতে শারীরিক সুস্থতার জন্য আল্লাহর প্রতি কৃতজ্ঞতা প্রকাশ পায়।",
        audioSrc: "audio/dua10.mp3"
    },
    {
        id: 11,
        title: "বিপদে পড়লে পড়ার দোয়া",
        icon: "🛡️",
        content: "উচ্চারণ: ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন। আল্লাহুম্মাজুরনি ফি মুসিবাতি ওয়াখলুফ লি খাইরাম মিনহা।\n\nঅর্থ: নিশ্চয়ই আমরা আল্লাহর জন্য এবং তাঁর কাছেই ফিরে যাব। হে আল্লাহ! আমাকে আমার এই বিপদে সওয়াব দিন এবং এর চেয়ে উত্তম কিছু দান করুন।",
        moral: "ফজিলত: যেকোনো বিপদে এটি পড়লে আল্লাহ এর বিনিময়ে উত্তম প্রতিদান দেন।",
        audioSrc: "audio/dua11.mp3"
    },
    {
        id: 12,
        title: "রাগ নিয়ন্ত্রণের দোয়া",
        icon: "😡",
        content: "উচ্চারণ: আউযু বিল্লাহি মিনাশ শাইতানির রাজিম।\n\nঅর্থ: আমি বিতাড়িত শয়তান থেকে আল্লাহর কাছে আশ্রয় চাচ্ছি।",
        moral: "ফজিলত: খুব বেশি রাগ হলে এই দোয়াটি পড়তে হয়। এতে দ্রুত রাগ কমে যায় এবং মন শান্ত হয়।",
        audioSrc: "audio/dua12.mp3"
    },
    {
        id: 13,
        title: "আয়নায় চেহারা দেখার দোয়া",
        icon: "🪞",
        content: "উচ্চারণ: আল্লাহুম্মা হাসসানতা খালকি ফা-হাসসিন খুলুকি।\n\nঅর্থ: হে আল্লাহ! আপনি আমার শারীরিক গঠন সুন্দর করেছেন, সুতরাং আমার চরিত্রকেও সুন্দর করে দিন।",
        moral: "ফজিলত: বাহ্যিক সৌন্দর্যের পাশাপাশি আত্মিক ও চারিত্রিক সৌন্দর্যের জন্য এটি অত্যন্ত কার্যকরী একটি দোয়া।",
        audioSrc: "audio/dua13.mp3"
    },
    {
        id: 14,
        title: "নতুন কাপড় পরার দোয়া",
        icon: "👕",
        content: "উচ্চারণ: আলহামদুলিল্লাহিল্লাজী কাসানি হাজাস সাওবা ওয়া রাজাকানিহি মিন গাইরি হাওলিম মিন্নি ওয়ালা কুওয়াহ।\n\nঅর্থ: সব প্রশংসা আল্লাহর, যিনি আমাকে এই কাপড় পরিয়েছেন এবং আমার কোনো শক্তি ও সামর্থ্য ছাড়াই তা আমাকে দান করেছেন।",
        moral: "ফজিলত: নতুন পোশাক পরার সময় এই দোয়া পড়লে আল্লাহ পূর্বের গুনাহ ক্ষমা করে দেন।",
        audioSrc: "audio/dua14.mp3"
    },
    {
        id: 15,
        title: "জ্ঞান বৃদ্ধির দোয়া",
        icon: "📚",
        content: "উচ্চারণ: রাব্বি জিদনি ইলমা।\n\nঅর্থ: হে আমার রব! আমার জ্ঞান বৃদ্ধি করে দিন।",
        moral: "ফজিলত: পড়াশোনা বা যেকোনো নতুন কিছু শেখার আগে এই দোয়া পড়লে আল্লাহ জ্ঞানে বরকত দান করেন।",
        audioSrc: "audio/dua15.mp3"
    },
    {
        id: 16,
        title: "পিতামাতার জন্য দোয়া",
        icon: "👨‍👩‍👦",
        content: "উচ্চারণ: রাব্বির হামহুমা কামা রাব্বায়ানি সাগিরা।\n\nঅর্থ: হে আমার রব! তাদের (পিতা-মাতার) প্রতি দয়া করুন, যেভাবে শৈশবে তারা আমাকে লালন-পালন করেছেন।",
        moral: "ফজিলত: পিতা-মাতার জন্য সন্তান এই দোয়া করলে আল্লাহ পিতা-মাতার মর্যাদা বৃদ্ধি করেন এবং রহমত নাজিল করেন।",
        audioSrc: "audio/dua16.mp3"
    },
    {
        id: 17,
        title: "হাঁচি দিলে পড়ার দোয়া",
        icon: "🤧",
        content: "উচ্চারণ: আলহামদুলিল্লাহ।\n\nঅর্থ: সব প্রশংসা আল্লাহর জন্য।",
        moral: "ফজিলত: হাঁচির মাধ্যমে শরীরের ক্ষতিকর বাতাস বেরিয়ে যায়, তাই সুস্থতার জন্য আল্লাহর শুকরিয়া আদায় করতে হয়।",
        audioSrc: "audio/dua17.mp3"
    },
    {
        id: 18,
        title: "হাঁচির উত্তর দেওয়ার দোয়া",
        icon: "🗣️",
        content: "উচ্চারণ: ইয়ারহামুকাল্লাহ।\n\nঅর্থ: আল্লাহ আপনার প্রতি রহম করুন।",
        moral: "ফজিলত: কোনো মুসলিম ভাই হাঁচি দিয়ে আলহামদুলিল্লাহ বললে, শুনে এর উত্তর দেওয়া অপর মুসলিমের দায়িত্ব।",
        audioSrc: "audio/dua18.mp3"
    },
    {
        id: 19,
        title: "যানবাহনে ওঠার দোয়া",
        icon: "🚌",
        content: "উচ্চারণ: সুবহানাল্লাজী সাখখারা লানা হাজা ওয়ামা কুন্না লাহু মুকরিনিন, ওয়া ইন্না ইলা রাব্বিনা লামুনকালিবুন।\n\nঅর্থ: পবিত্র তিনি, যিনি একে আমাদের বশীভূত করে দিয়েছেন, অথচ আমরা একে বশীভূত করতে সক্ষম ছিলাম না। আর নিশ্চয়ই আমরা আমাদের রবের কাছেই ফিরে যাব।",
        moral: "ফজিলত: এই দোয়া পড়ে সফর শুরু করলে আল্লাহ পথের বিপদ-আপদ থেকে রক্ষা করেন।",
        audioSrc: "audio/dua19.mp3"
    },
    {
        id: 20,
        title: "ক্ষমা প্রার্থনার দোয়া (ইস্তিগফার)",
        icon: "📿",
        content: "উচ্চারণ: আস্তাগফিরুল্লাহাল আজিম, আল্লাজী লা ইলাহা ইল্লা হুওয়াল হাইয়্যুল কাইয়্যুমু ওয়া আতুবু ইলাইহি।\n\nঅর্থ: আমি সেই মহান আল্লাহর কাছে ক্ষমা চাই, যিনি ছাড়া কোনো মাবুদ নেই। তিনি চিরঞ্জীব ও চিরস্থায়ী এবং আমি তাঁর কাছেই তওবা করছি।",
        moral: "ফজিলত: প্রতিদিন বেশি বেশি এই ইস্তিগফার পড়লে আল্লাহ রিজিকে বরকত দেন, দুশ্চিন্তা দূর করেন এবং গুনাহ মাফ করেন।",
        audioSrc: "audio/dua20.mp3"
    }
];

const storyContainer = document.getElementById('storyContainer');
let currentAudio = null; // বর্তমান অডিও ট্র্যাক ট্র্যাক করার জন্য

// লোকাল স্টোরেজ থেকে ডাটা আনা (সার্ভার ছাড়াই অফলাইন সাপোর্ট)
function getReadDuas() {
    const saved = localStorage.getItem('mh_academy_practiced_duas');
    return saved ? JSON.parse(saved) : [];
}

function markAsRead(id) {
    const readDuas = getReadDuas();
    if (!readDuas.includes(id)) {
        readDuas.push(id);
        localStorage.setItem('mh_academy_practiced_duas', JSON.stringify(readDuas));
        renderDuas(); 
    }
}

// মোবাইল স্ক্রিনে গ্রিড বা লিস্ট রেন্ডার
function renderDuas() {
    storyContainer.innerHTML = ''; 
    const readDuas = getReadDuas();

    duas.forEach(dua => {
        const isRead = readDuas.includes(dua.id); 
        const card = document.createElement('div');
        
        card.className = `story-card ${isRead ? 'read' : ''}`; 
        card.innerHTML = `
            <div class="story-icon">${dua.icon}</div>
            <div class="story-title">${dua.title}</div>
            ${isRead ? '<div class="read-badge">✔️ পড়া হয়েছে</div>' : ''}
        `;
        
        card.onclick = () => {
            openModal(dua);
            markAsRead(dua.id); 
        };
        storyContainer.appendChild(card);
    });
}

renderDuas();

// অডিও প্লে/পজ করার ফাংশন
function toggleAudio(audioSrc, playButtonIcon) {
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        playButtonIcon.innerText = "▶️ অডিও শুনুন";
        
        // যদি একই অডিও পজ করা হয় তবে এখানেই রিটার্ন করবে
        if (currentAudio.src.includes(audioSrc)) return; 
    }

    currentAudio = new Audio(audioSrc);
    currentAudio.play();
    playButtonIcon.innerText = "⏸️ অডিও থামান";

    // অডিও শেষ হলে বোতাম রিসেট করা
    currentAudio.onended = () => {
        playButtonIcon.innerText = "▶️ অডিও শুনুন";
    };
}

// মডাল ওপেন এবং অডিও বোতাম সেটআপ
function openModal(dua) {
    document.getElementById('modalTitle').innerText = dua.title;
    document.getElementById('modalBody').innerText = dua.content;
    document.getElementById('modalMoral').innerText = dua.moral; 
    
    // অডিও প্লেয়ার বাটন ডাইনামিক্যালি অ্যাড করা
    const audioContainer = document.getElementById('audioContainer');
    if (!audioContainer) {
        // যদি HTML এ অডিও কন্টেইনার না থাকে, তবে modalBody এর আগে তৈরি করে নিবে
        const newAudioContainer = document.createElement('div');
        newAudioContainer.id = 'audioContainer';
        newAudioContainer.style.textAlign = 'center';
        newAudioContainer.style.margin = '15px 0';
        document.getElementById('modalBody').parentNode.insertBefore(newAudioContainer, document.getElementById('modalBody'));
    }
    
    const audioBtnHTML = `
        <button id="playAudioBtn" style="background: #28a745; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
            ▶️ অডিও শুনুন
        </button>
    `;
    document.getElementById('audioContainer').innerHTML = audioBtnHTML;

    // বাটনে ক্লিক ইভেন্ট লিসেনার যুক্ত করা
    document.getElementById('playAudioBtn').onclick = function() {
        toggleAudio(dua.audioSrc, this);
    };

    document.getElementById('storyModal').style.display = 'flex';
}

// মডাল ক্লোজ করার সময় অডিও বন্ধ করা
function closeModal() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // অডিও রিস্টার্ট পজিশনে নেওয়া
    }
    document.getElementById('storyModal').style.display = 'none';
}

// PWA Install Button Logic
let deferredPrompt;
const installAppBtn = document.getElementById('installAppBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installAppBtn.style.display = 'block'; 
});

installAppBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            installAppBtn.style.display = 'none';
        }
        deferredPrompt = null;
    }
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker Registered Successfully'));
}
