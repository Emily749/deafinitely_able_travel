export type Post = {
  slug: string;
  category: 'transit' | 'stays';
  title: string;
  subtitle: string;
  location: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  body: string;
};

export type CityListing = {
  city: string;
  country: string;
  image: string;
  dining: Venue[];
  selfGuided: Venue[];
};

export type Venue = {
  name: string;
  type: string;
  description: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: 'navigating-heathrow-without-audio',
    category: 'transit',
    title: 'Navigating Heathrow Without Audio',
    subtitle: 'A complete guide to Terminal 5 for deaf and hard-of-hearing travellers',
    location: 'London, UK',
    date: 'May 2025',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Heathrow\'s Terminal 5 is vast, fast-moving, and relies heavily on audio announcements. Here\'s how to move through it with complete confidence.',
    body: `Terminal 5 operates on a visual information system that most travellers ignore entirely. The large departure boards update in real time, but the less obvious tool is the British Airways app, which pushes gate notifications directly to your phone.

**Fast Track Security**
Book fast track in advance through the BA app or Heathrow's own site. The lane moves quickly and staff are accustomed to written communication requests. Carry a small card or use your phone notes to indicate you are deaf. Staff will visually signal you through each step.

**The Lounges**
Galleries First and Galleries Club both have staff trained to communicate via written notes or tablet. Request a vibrating alarm at the desk for boarding notifications. Lounge staff will come to you directly.

**Gate Announcements**
Sit within clear sightline of the gate display screen. All boarding information appears on screen before and during any audio announcement. If you are unsure, approach gate staff directly. Written communication is standard practice.`,
  },
  {
    slug: 'charles-de-gaulle-terminal-2e',
    category: 'transit',
    title: 'CDG Terminal 2E: The Visual Traveller\'s Reference',
    subtitle: 'Paris\'s busiest terminal decoded for non-audio navigation',
    location: 'Paris, France',
    date: 'April 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Terminal 2E is architecturally striking and logistically complex. Visual systems are strong if you know where to look.',
    body: `CDG Terminal 2E sits under a distinctive elliptical glass roof that makes flight board viewing straightforward from most angles. The departure screens are large, frequent, and clearly updated.

**Check-In**
Air France self-service kiosks are straightforward. If you need assistance, approach the staffed desk and show a written note. French airport staff are generally receptive to written exchange.

**Security**
The PARAFE automated gates use biometric processing. Move through at your own pace. Staff at the manual lanes respond well to gesture communication. No audio elements are required to pass through security.

**Boarding**
Gate screens in 2E display boarding status in phases. Watch for your flight number and phase indicator. Staff begin visual scanning immediately when boarding opens.`,
  },
  {
    slug: 'four-seasons-george-v-paris',
    category: 'stays',
    title: 'Four Seasons George V, Paris',
    subtitle: 'White-glove service without a single audio dependency',
    location: 'Paris, France',
    date: 'March 2025',
    readTime: '10 min read',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'The George V sets the global standard for written and visual communication in a luxury hotel environment.',
    body: `The Four Seasons George V does not use audio as the primary communication channel with guests. Every interaction from check-in onwards operates on written confirmation, eye contact, and direct engagement.

**Check-In**
The pre-arrival communication is thorough. Email preferences ahead of time. Staff at reception have a clear written communication protocol. Your room details, inclusions, and any special arrangements are confirmed on a printed card.

**The Rooms**
Visual alert systems are standard across rooms. Doorbell light indicators, phone text alerts, and adjustable lighting throughout the suite. The acoustic design of the rooms is exceptional. Thick walls, heavy drapes, and deep carpet absorb ambient noise entirely.

**Dining at Le Cinq**
Staff at Le Cinq bring the menu and use a notepad for ordering without any indication that this is unusual. The dining room operates at a low ambient volume. Lighting is warm and directed, ideal for lip-reading and sign communication across the table.`,
  },
  {
    slug: 'aman-kyoto-review',
    category: 'stays',
    title: 'Aman Kyoto: Complete Stillness',
    subtitle: 'A ryokan-influenced retreat built entirely on visual and tactile experience',
    location: 'Kyoto, Japan',
    date: 'February 2025',
    readTime: '9 min read',
    image:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Aman Kyoto\'s silence is not incidental. It is the design. For deaf travellers, this makes it close to perfect.',
    body: `Aman Kyoto sits inside a hidden forest garden behind the Kitayama cedar grove. The property operates at a level of quiet that most travellers find startling. For deaf and hard-of-hearing guests, that quiet is not a contrast to your experience. It is your experience.

**Arrival**
Staff meet you at the garden entrance and guide you through a long stone path to reception. Communication throughout uses gesture, eye contact, and minimal written exchange. No audio element is required from arrival to departure.

**The Pavilions**
Each private pavilion uses floor-level heating, soft washi paper lighting, and deep soaking tubs with water temperature displays. Alerts are delivered via a small vibrating device left at the entrance of each pavilion. Staff knock visibly and wait.

**The Forest Walk**
Aman's forest walking path is entirely self-guided. No audio tour. Printed map. Stone lantern markers guide the route. The experience is entirely visual, tactile, and spatial.`,
  },
];

export const cities: CityListing[] = [
  {
    city: 'Tokyo',
    country: 'Japan',
    image:
      'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=1200&q=80&auto=format&fit=crop',
    dining: [
      {
        name: 'Sushi Saito',
        type: 'Omakase',
        description:
          'Counter dining with direct chef-to-guest interaction. Ordering is visual; each course is presented and explained without audio dependency.',
        tags: ['Counter Seating', 'Low Ambient Noise', 'Visual Presentation'],
      },
      {
        name: 'Narisawa',
        type: 'Contemporary Japanese',
        description:
          'Intimate room, wide table spacing, warm directional lighting. Staff maintain written communication cards. Acoustic panels throughout the dining room.',
        tags: ['Wide Table Spacing', 'Acoustic Panels', 'Written Communication'],
      },
      {
        name: 'Den',
        type: 'Creative Japanese',
        description:
          'Small, intimate space with warm lighting throughout. Chef Zaiyu Hasegawa is known for creating a playful, visually communicative dining environment.',
        tags: ['Intimate Setting', 'Visual Storytelling', 'Warm Lighting'],
      },
    ],
    selfGuided: [
      {
        name: '21_21 Design Sight',
        type: 'Design Museum',
        description:
          'Entirely exhibition-driven with strong QR code guides and printed materials. Designed to be experienced visually without audio narrative.',
        tags: ['QR Guides', 'Print Materials', 'No Audio Dependency'],
      },
      {
        name: 'teamLab Planets',
        type: 'Immersive Art',
        description:
          'A fully immersive, entirely visual and tactile experience. No audio component is essential to the work. Navigation is self-paced.',
        tags: ['Fully Visual', 'Self-Paced', 'Tactile Elements'],
      },
      {
        name: 'Yanaka Cemetery Walk',
        type: 'Self-Guided District',
        description:
          'Downloadable map available on Tokyo\'s tourism site. The entire Yanaka neighbourhood is a visual, self-guided cultural experience.',
        tags: ['Downloadable Map', 'Self-Guided', 'Outdoor'],
      },
    ],
  },
  {
    city: 'Copenhagen',
    country: 'Denmark',
    image:
      'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80&auto=format&fit=crop',
    dining: [
      {
        name: 'Geranium',
        type: 'Nordic Fine Dining',
        description:
          'Floor-to-ceiling windows flood the room with natural light, exceptional for lip-reading and signing across the table. Table spacing is generous.',
        tags: ['Natural Light', 'Wide Table Spacing', 'Quiet Room'],
      },
      {
        name: 'Bror',
        type: 'New Nordic',
        description:
          'Small plates served at a relaxed pace. Staff are accustomed to written ordering. Room acoustics are managed. Candlelit with warm overhead light.',
        tags: ['Candlelit', 'Quiet Acoustics', 'Written Ordering'],
      },
    ],
    selfGuided: [
      {
        name: 'Louisiana Museum of Modern Art',
        type: 'Art Museum',
        description:
          'One of Europe\'s finest modern art museums. Exhibition maps are thorough, QR codes are present throughout, and wall text is detailed and well-written.',
        tags: ['Detailed Wall Text', 'QR Codes', 'Exhibition Maps'],
      },
      {
        name: 'Nyhavn Self-Walk',
        type: 'Waterfront District',
        description:
          'The city\'s most visually iconic route. Fully self-paced with printed guide available at the main tourist office or downloadable via VisitCopenhagen.',
        tags: ['Fully Walkable', 'Visual Landmarks', 'Printable Guide'],
      },
    ],
  },
  {
    city: 'Mexico City',
    country: 'Mexico',
    image:
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=80&auto=format&fit=crop',
    dining: [
      {
        name: 'Pujol',
        type: 'Contemporary Mexican',
        description:
          'Interior courtyard seating with warm ambient lighting. Staff trained for written and gesture communication. Low ambient volume throughout.',
        tags: ['Courtyard Seating', 'Warm Lighting', 'Low Noise'],
      },
      {
        name: 'Merotoro',
        type: 'Baja-Influenced',
        description:
          'Intimate room, close staff attention, and well-managed acoustics. Lighting is warm and wide, ideal for visual communication across the table.',
        tags: ['Intimate Room', 'Staff Attentive', 'Warm Lighting'],
      },
    ],
    selfGuided: [
      {
        name: 'Museo Soumaya',
        type: 'Art Museum',
        description:
          'Free entry. The building itself is a visual landmark. Collection labels are clear and detailed. No audio guide is needed to engage with the collection.',
        tags: ['Free Entry', 'Detailed Labels', 'Visual Architecture'],
      },
      {
        name: 'Coyoacán Neighbourhood',
        type: 'Cultural District',
        description:
          'Frida Kahlo Museum is the anchor, but the entire Coyoacán district is walkable, visually rich, and fully self-guided.',
        tags: ['Walkable', 'Cultural Depth', 'Frida Kahlo Museum'],
      },
    ],
  },
];

export type FlashCard = {
  id: string;
  language: string;
  situation: string;
  text: string;
  phonetic?: string;
};

export const flashCards: FlashCard[] = [
  {
    id: 'deaf-1',
    language: 'French',
    situation: 'General',
    text: 'Je suis sourd(e). Pouvez-vous écrire s\'il vous plaît?',
    phonetic: 'Zhuh swee soord. Poo-vay voo ay-kreer seel voo play?',
  },
  {
    id: 'deaf-2',
    language: 'Japanese',
    situation: 'General',
    text: '私は耳が聞こえません。書いていただけますか？',
    phonetic: 'Watashi wa mimi ga kikoemasen. Kaite itadakemasu ka?',
  },
  {
    id: 'deaf-3',
    language: 'Spanish',
    situation: 'General',
    text: 'Soy sordo/a. ¿Puede escribirlo por favor?',
    phonetic: 'Soy sor-do/a. Pweh-deh es-kree-beer-lo por fa-bor?',
  },
  {
    id: 'deaf-4',
    language: 'Italian',
    situation: 'General',
    text: 'Sono sordo/a. Potrebbe scriverlo per favore?',
    phonetic: 'So-no sor-do/a. Po-treb-be shkree-ver-lo per fa-vo-re?',
  },
  {
    id: 'hotel-1',
    language: 'French',
    situation: 'Hotel',
    text: 'Veuillez m\'envoyer un texto pour les changements de chambre ou les messages.',
    phonetic: 'Vuh-yay mahn-vwah-yay uhn tex-to poor lay shahn-zhuh-mahn...',
  },
  {
    id: 'hotel-2',
    language: 'Japanese',
    situation: 'Hotel',
    text: '部屋の変更や連絡はテキストメッセージでお願いします。',
    phonetic: 'Heya no henkou ya renraku wa tekisuto messeeji de onegai shimasu.',
  },
  {
    id: 'hotel-3',
    language: 'Spanish',
    situation: 'Hotel',
    text: 'Por favor, envíeme un mensaje de texto para cambios de habitación.',
    phonetic: 'Por fa-bor, en-bee-eh-meh oon men-sa-heh deh tex-to...',
  },
  {
    id: 'dining-1',
    language: 'French',
    situation: 'Dining',
    text: 'Pourriez-vous nous placer dans un endroit bien éclairé?',
    phonetic: 'Poo-ryay voo noo pla-say dahn zuhn ahn-drwah byehn ay-klay-ray?',
  },
  {
    id: 'dining-2',
    language: 'Japanese',
    situation: 'Dining',
    text: '明るい席に座らせていただけますか？',
    phonetic: 'Akarui seki ni suwarasete itadakemasu ka?',
  },
  {
    id: 'dining-3',
    language: 'Italian',
    situation: 'Dining',
    text: 'Potremmo sederci in un posto ben illuminato?',
    phonetic: 'Po-trem-mo seh-der-chee een oon pos-to ben ee-loo-mee-na-to?',
  },
  {
    id: 'transport-1',
    language: 'French',
    situation: 'Transport',
    text: 'Pourriez-vous me montrer sur votre téléphone quand nous arriverons?',
    phonetic: 'Poo-ryay voo muh mon-tray soor vo-truh tay-lay-fon kahn noo za-ree-vuh-ron?',
  },
  {
    id: 'transport-2',
    language: 'Japanese',
    situation: 'Transport',
    text: '到着したらスマートフォンで教えていただけますか？',
    phonetic: 'Touchaku shitara sumaato fon de oshiete itadakemasu ka?',
  },
];

export type TechItem = {
  slug: string;
  category: string;
  name: string;
  description: string;
  rating: number;
  tags: string[];
};

export const techItems: TechItem[] = [
  {
    slug: 'otter-ai',
    category: 'Speech to Text',
    name: 'Otter.ai',
    description:
      'Real-time speech transcription with speaker identification. Works offline in areas with poor connectivity. Ideal for hotel check-in, guided tours, and restaurant interactions.',
    rating: 5,
    tags: ['Real-Time', 'Speaker ID', 'Offline Mode'],
  },
  {
    slug: 'google-live-transcribe',
    category: 'Speech to Text',
    name: 'Google Live Transcribe',
    description:
      'Accurate, low-latency transcription in 70+ languages. Free to use. Runs directly on Android without cloud processing. Highly reliable in transit environments.',
    rating: 5,
    tags: ['70+ Languages', 'Free', 'Android'],
  },
  {
    slug: 'widex-moment',
    category: 'Hearing Technology',
    name: 'Widex Moment',
    description:
      'Waterproof hearing aids with IP68 rating. Bluetooth streaming from phone and TV. Rechargeable with 37-hour battery life. Travel-grade durability.',
    rating: 4,
    tags: ['IP68 Waterproof', 'Bluetooth', 'Rechargeable'],
  },
  {
    slug: 'bellman-alarm',
    category: 'Travel Alarms',
    name: 'Bellman Visit Portable Kit',
    description:
      'Vibrating travel alarm system with pillow shaker, bed shaker, and doorbell transmitter. Compact carry case. Works in any hotel room.',
    rating: 5,
    tags: ['Pillow Shaker', 'Doorbell Alert', 'Portable Kit'],
  },
  {
    slug: 'roger-pen',
    category: 'Signal Devices',
    name: 'Phonak Roger Pen',
    description:
      'Directional microphone that transmits directly to compatible hearing aids or cochlear implants. Exceptional for one-on-one conversations and table discussions.',
    rating: 4,
    tags: ['Directional Mic', 'CI Compatible', 'One-on-One'],
  },
  {
    slug: 'hand-talk',
    category: 'Sign Language Apps',
    name: 'Hand Talk',
    description:
      'Translates text and audio to sign language via animated avatar. Supports ASL and Libras. Useful for communicating with hearing children or new contacts.',
    rating: 4,
    tags: ['ASL', 'Libras', 'Avatar Translation'],
  },
];
