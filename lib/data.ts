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
    slug: 'gatwick-airport-visual-transit',
    category: 'transit',
    title: 'Gatwick Airport: Visual Transit between North and South',
    subtitle: 'Managing terminal changes and security without audio cues',
    location: 'London, UK',
    date: 'June 2025',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Gatwick\'s split terminal design relies on a shuttle link. Here is how to keep your visual bearings through both hubs.',
    body: `The inter-terminal shuttle running between North and South terminals is completely automated. It features high-contrast digital text screens inside each carriage updating the upcoming stops visually.

**The Shuttle Link**
No audio verification is required to transfer. Simply follow the overhead yellow signs pointing to the alternative terminal shuttle. The platforms have prominent digital countdown timers above the doors.

**Security Queues**
Both North and South terminals utilize large color-coded overhead screens to direct passengers into lanes. Use the barcode scanners at the turnstiles and look for the overhead green or red arrow indicators to know which security line is ready for you.

**Digital Boarding**
Gatwick features massive, highly dense digital departure matrixes in both departure lounges. Since individual gate updates are not broadcast visually over loudspeakers in general seating, sit directly facing a flight information display screen (FIDS).`,
  },
  {
    slug: 'stansted-airport-one-terminal-strategy',
    category: 'transit',
    title: 'Stansted Airport: One-Terminal Strategy',
    subtitle: 'Navigating the single-terminal layout and transit trains seamlessly',
    location: 'Essex, UK',
    date: 'July 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1542296332-2e4473fac563?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Stansted streamlines everyone through a singular massive space, but the satellite gates require a visual transit train strategy.',
    body: `Stansted operates as a single large terminal building, which simplifies orientation, but relies on a visual monorail shuttle to reach the furthest satellite departure gates.

**The Automated Track Transit**
When your gate is assigned, follow the clear overhead numbers down to the track transit system. The platforms are fully glass-walled with scrolling destination indicators showing exactly which satellite gates (1 to 39) the arriving train will access.

**Main Departure Lounge**
Because the main hall gets incredibly crowded, visual notifications on the central status boards are critical. Do not move toward the gates until the flashing "Go to Gate" or "Boarding" text updates next to your flight number.

**Gate Boarding**
Low-cost carriers at Stansted rely heavily on rapid turnaround times. Monitor the gate-side digital displays closely, as boarding phases scale quickly without distinct visual buffer announcements.`,
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
    slug: 'beziers-cap-dagde-compact-navigation',
    category: 'transit',
    title: 'Béziers Cap d\'Agde: Compact Visual Navigation',
    subtitle: 'Surviving a regional French airport without audio stress',
    location: 'Béziers, France',
    date: 'August 2025',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Béziers Airport is tiny, boasting a single terminal and straightforward layouts that eliminate the stress of tracking connections.',
    body: `Béziers Cap d'Agde operates with a highly intuitive, one-room concept where check-in desks, security lines, and the sole departure lounge are visible all at once.

**Single Terminal Layout**
There are no multi-terminal complications or transit trains here. Everything operates in walking distance. Signage is consistently printed in high-contrast French and English formats across the main hall walls.

**Tarmac Boarding**
Béziers lacks jet bridges completely. When your flight opens, staff open a manual exit door directly to the tarmac. Simply follow the physical queue layout on the asphalt directly to the aircraft stairways.

**Acoustic Calm**
Because the terminal handles just a few budget flights simultaneously, the ambient noise is incredibly minimal compared to major hubs, making visual focus much easier.`,
  },
  {
    slug: 'menorca-mahon-orderly-departures',
    category: 'transit',
    title: 'Menorca Mahón: Orderly Visual Departures',
    subtitle: 'Navigating the multi-level Balearic terminal without announcements',
    location: 'Menorca, Spain',
    date: 'September 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Menorca Airport organizes its check-in, security, and gates vertically, providing a clear visual chain to follow.',
    body: `Menorca Airport utilizes a clean vertical split structure: Check-In resides entirely on Floor 1, while Security Screenings and Boarding Gates sit on Floor 2.

**Vertical Flow**
Clear elevators and escalators guide you upward from check-in directly to the security floor. Status displays are positioned at every escalator bank to ensure you verify your status before proceeding.

**Airside Signage**
Once past security, gates are arranged in a single linear corridor format. The text and gate number markers use distinct bright yellow numbering schemes that contrast against the interior architecture.

**Tramuntana Lounge Visuals**
The airside Tramuntana VIP lounge features its own standalone flight monitors, allowing you to track gate assignments in a calm environment away from the crowded main corridors.`,
  },
  {
    slug: 'palma-de-mallorca-handling-scale',
    category: 'transit',
    title: 'Palma de Mallorca: Handling Immense Visual Scale',
    subtitle: 'Managing the massive modular corridors of Son Sant Joan',
    location: 'Mallorca, Spain',
    date: 'October 2025',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Palma is massive, but its layout relies on a singular central processing building connected to four distinct, visible modules.',
    body: `Palma de Mallorca Airport is highly modular. You pass through security in a unified central terminal before separating out into Modules A, B, C, or D.

**Long Walkway Signage**
The walkways connecting modules are exceptionally long. They feature continuous moving walkways lined with high-frequency flight indicator screens so you never have to turn around to verify gate modifications.

**Module Specifics**
Each module has a dedicated color accent and entrance sign. Ensure you look at the master terminal board immediately after security check to confirm your letter destination before making the trek.

**Visual Alerts at Gates**
Because gates are deep within separate piers, gate-front screens are your source of truth. They display boarding status rows clearly, shifting from "Scheduled" to "Boarding" with high-contrast text layout.`,
  },
  {
    slug: 'ibiza-airport-high-season-strategy',
    category: 'transit',
    title: 'Ibiza Airport: High-Season Visual Strategy',
    subtitle: 'Tracking your way through intense summer crowds purely by sight',
    location: 'Ibiza, Spain',
    date: 'November 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Ibiza\'s terminal gets incredibly packed in summer, making ambient noise high. Relying on visual check-ins is essential.',
    body: `Ibiza Airport works as a singular elongated building layout. High passenger numbers mean acoustic announcements are easily drowned out, making physical indicators your primary navigation resource.

**Centralized Security Hub**
Security is positioned dead-center on the first floor. Digital display signage monitors the line flow visually, signaling when to step forward to scanning zones.

**Linear Gate Path**
All boarding gates run along a singular axis airside. This linear path means you can walk down a single line to check your specific gate screen directly without getting disoriented in side halls.

**Ground Floor Gates**
Many low-cost carriers use the lower-level ground gates that lead to bus transfers. These gates rely heavily on row lines—look for the printed zone lines on the floor to position yourself visually for early boarding.`,
  },
  {
    slug: 'valencia-manises-historical-integration',
    category: 'transit',
    title: 'Valencia Manises: Integrated Visual Flow',
    subtitle: 'Navigating Terminals 1, 2, and the Regional Hub seamlessly',
    location: 'Valencia, Spain',
    date: 'December 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Valencia combines historical and modern architecture across interconnected terminals that feature exceptional linear floor tracking.',
    body: `Valencia Manises Airport links Terminal 1, Terminal 2, and a Regional Terminal into a singular connected indoor building corridor.

**Connecting Corridors**
Moving between T1 and T2 is entirely seamless. The transitions are marked by large overhead textual signage rather than physical separation barriers, maintaining a continuous sightline.

**Metro Connection Visibility**
The underlying Metrovalencia station links directly to the basement level. High-contrast red and white signage guides you out of the train doors and directly up the elevators straight to the check-in floor.

**Regional Gates Layout**
The regional boarding area uses a specific lower-level pier setup. Monitors are packed densely at the ramp entrance to verify commuter flight details visually before descending.`,
  },
  {
    slug: 'houston-intercontinental-subterranean-transit',
    category: 'transit',
    title: 'Houston Intercontinental: Subterranean Visual Transit',
    subtitle: 'Mastering the multi-terminal Skyway and Subway networks by sight',
    location: 'Houston, USA',
    date: 'January 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1531058020387-3be344559be6?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'George Bush Intercontinental Airport spans five massive terminals linked by two distinct visual train systems.',
    body: `Houston (IAH) operates Terminals A, B, C, D, and E. Navigating this massive layout relies heavily on two train systems: the airside Skyway and the landside Subway.

**The Airside Skyway**
The Skyway elevated train sits above the terminal roofs. It provides sweeping window views of the airfields, allowing you to maintain your geographical bearings as you move visually between terminals. High-contrast terminal maps are mounted above every doorway.

**The Landside Subway**
Located in the basement level, this underground track connects all five terminals pre-security. Directional wall markers utilize explicit color-coded lines on the floor and columns to guide you to the correct platform without requiring voice instructions.

**International Terminal D/E Hub**
Terminal D handles international departures with modern, expansive LED signage walls. Check-in zones use brightly illuminated pillar lights that change colors based on the specific airline operating at the desk.`,
  },
  {
    slug: 'jfk-airport-airtrain-mastery',
    category: 'transit',
    title: 'JFK International: AirTrain Visual Mastery',
    subtitle: 'Connecting across New York\'s decentralized terminal system',
    location: 'New York, USA',
    date: 'February 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1543716627-839b54c40519?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'John F. Kennedy Airport features decentralized, completely separate terminal hubs linked by the ubiquitous AirTrain system.',
    body: `JFK consists of multiple detached, massive terminals. Because they are not physically connected by corridors, the automated AirTrain is your core loop for transit.

**AirTrain Map Indicators**
The AirTrain platforms are lined with explicit, color-coded light-up route maps. As the train progresses, glowing LED indicators change positions on the route board to show you exactly which terminal station you are arriving at.

**Terminal Decentralization**
Each terminal (like T1, T4, T7, T8) operates as its own independent airport ecosystem. When departing or arriving, check the external roadway entry signboards via the train windows to guarantee you exit at the correct terminal stop.

**Security Tracking Screens**
Major hubs like Terminal 4 feature digital queue estimation graphics at the security checkpoints. These screens provide real-time visual line bar statuses to help you choose the fastest path to the scanners.`,
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
    text: 'Por favor, envíeme un message de texto para cambios de habitación.',
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
