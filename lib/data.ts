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
    title: 'Navigating Heathrow: Complete Terminals 2, 3, 4 & 5 Strategy',
    subtitle: 'A structural visual roadmap for London\'s premier international aviation complex',
    location: 'London, UK',
    date: 'May 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=80&auto=format&fit=crop',
    excerpt: 'Heathrow is immense and acoustically challenging. By utilizing advanced smartphone integration, dedicated lane pathways, and visual tracking networks, you can navigate all four active terminals with fluid independence.',
    body: `### Terminal 5 (The British Airways Master Hub)
Terminal 5 relies heavily on high-frequency public address announcements that are frequently distorted by ambient noise. To bypass this entirely, passengers must activate the British Airways smartphone application prior to arriving at the airport. The application deploys precise boarding gate assignments up to 10 minutes before they appear on the terminal's physical display boards.

**Security Tracking & Fast Track:**
It is highly recommended to purchase a Fast Track Security pass. At the entrance, show a digital note stating "Deaf / No Audio". The security lanes are wide and staffed by personal trained to guide passengers via visual markers. Staff will step forward to use explicit hand gestures to direct you through the body scanners and luggage screening belts without oral instruction.

**Premium Lounge Networks:**
The Galleries Club, Galleries First, and the exclusive Concorde Room are equipped with digital care desks. Request a "Visual Alert Profile" upon entry. If an abrupt gate or flight status shift happens, lounge concierges are dispatched directly to your physical seating area to show you the updated itinerary on a tablet.

**Gate Allocation & Boarding:**
Always position yourself in clear sight of the multi-panel digital gate display clusters. Boarding at Terminal 5 occurs strictly via automated e-gates. Simply scan your digital boarding pass once the physical overhead monitors display your boarding group—no oral communication or verification is needed.

### Terminal 2 & 3 (The Star Alliance & Oneworld Fortresses)
Terminals 2 and 3 feature longer, denser subterranean walkways and corridor networks. Flight Information Display Systems (FIDS) are embedded at every major walkway intersection. 

**Visual Wayfinding System:**
Rely heavily on the illuminated automated "Time to Gate" digital countdown clocks scattered across the main tax-free concourses. These displays adjust their metrics in real-time based on terminal pedestrian traffic flow, bypassing any need to listen for audio overhead updates.

### Terminal 4 (International SkyTeam Gateway)
Terminal 4 features an elongated, single-level design footprint. This provides an exceptional visual advantage. Sightlines across the central terminal space are entirely unobstructed, allowing you to seamlessly monitor central flight boards while dining or resting in the seating zones.`
  },
  {
    slug: 'charles-de-gaulle-terminal-2e-2f',
    category: 'transit',
    title: 'CDG Terminal 2E & 2F: The Visual Reference Guide',
    subtitle: 'Paris\'s principal international hubs decoded for non-audio efficiency',
    location: 'Paris, France',
    date: 'April 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop',
    excerpt: 'Paris CDG is historically challenging for sudden gate switches. Knowing the visual infrastructure of Terminals 2E and 2F gives you an elite advantage.',
    body: `### Terminal 2E (Halls K, L, and M)
Terminal 2E features an architectural glass and timber vault style. Because the architecture is extended over an enormous spatial area, checking physical boards from specific gate gates is difficult. Activating the Air France app with immediate push alerts turned on is your single best tool.

**The PARAFE Biometric Boundary System:**
Avoid standard passport desks with physical border agents wherever possible. Instead, map out the PARAFE biometric security gates. These clear glass booths are entirely visual. The screen guides you through your passport scan and facial geometry mapping using highly clear graphic illustrations and zero audio prompts, delivering an entirely independent border transition.

**Boarding Sequence Dynamics:**
At gates K, L, and M, boarding is completed using numbered zones. High-definition LED screens are mounted directly over the turnstiles. Keep your eyes on these monitors rather than trying to listen for muffled speaker updates. The moment your matching zone number flashes a bright amber color, step directly into the automated boarding gate line.

### Terminal 2F (Schengen European Network)
Terminal 2F features two long parallel piers enclosed in sweeping glass canopies. The natural lighting and layout lines are magnificent. 

**Sightline Strategy:**
Secure a seat at the structural midpoint of the pier corridors. This positioning provides you with an uninterrupted 360-degree view of all gate status boards across the pier simultaneously, eliminating the need to walk back and forth to look for updates.`
  },
  {
    slug: 'jfk-international-terminal-4-and-8',
    category: 'transit',
    title: 'JFK Terminals 4 & 8: New York Visual Navigation Blueprint',
    subtitle: 'Conquering the Delta and American Airlines hubs without auditory cues',
    location: 'New York, USA',
    date: 'March 2026',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1542205815-6bb9f39d22ff?w=1600&q=80&auto=format&fit=crop',
    excerpt: 'JFK is an absolute auditory assault of ambient noise and broken speaker arrays. This guide highlights the premium visual paths needed for its premier terminals.',
    body: `### Terminal 4 (Delta Air Lines Mega-Hub)
Terminal 4 is incredibly long. Walking from the main security checkpoint to the furthest gates of Concourse B can take up to 20 minutes of continuous walking. 

**Visual Information Hub Infrastructure:**
Because Terminal 4 is a straight linear structure, self-service digital interactive information hubs are positioned prominently at every five-gate increment. Do not try to flag down busy gate agents. Walk straight to these digital screens and scan your physical boarding pass barcode. The system instantly generates a clean visual layout showing your exact plane, real-time gate allocation, and exact walking maps.

**TSA PreCheck & CLEAR Visual Speed:**
Enrolling in CLEAR is highly recommended for JFK. The CLEAR check-in pods are fully visual and rely on iris scanning technology or fingerprint matrices. This cuts out verbal interactions with security personnel and allows you to move directly into the metal detector bays via visual hand signals.

### Terminal 8 (American Airlines & International Partners)
Terminal 8 is a sprawling, multi-level masterpiece with exceptionally tall structural departures display towers. The architectural layout features wide concourses with high ceilings, ensuring completely clear sightlines to gate monitors from any premium lounge entry point.`
  },
  {
    slug: 'changi-airport-terminal-3-4-mastery',
    category: 'transit',
    title: 'Singapore Changi T3 & T4: Global Universal Design Standard',
    subtitle: 'How the world\'s most awarded airport leverages visual design for deaf travelers',
    location: 'Singapore',
    date: 'February 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1600&q=80&auto=format&fit=crop',
    excerpt: 'Changi is built on a foundation of universal design, meaning its infrastructure naturally favors visual and clear tactile pathways.',
    body: `### Terminal 3 (Singapore Airlines Flagship Hub)
Terminal 3 uses an intelligent, eco-friendly overhead roof panel grid that dynamically diffuses beautiful natural daylight. This architecture completely eliminates deep overhead shadows, creating perfect, crisp lighting conditions for lip-reading and sign language communication with ground staff.

**High-Contrast Flight Information Systems (FIDS):**
Changi's FIDS arrays are oversized, ultra-high-contrast LED monitors that update flight data rows text fields instantly. If a sudden gate change occurs, the entire text row flashes a high-visibility magenta color to immediately catch your eye from across the atrium.

### Terminal 4 (High-Tech Automation Showcase)
Terminal 4 features an end-to-end automated travel journey known as Fast and Seamless Travel (FAST). From baggage drop to security and boarding, everything is controlled via intuitive touchscreens and facial recognition systems. Spoken communication is entirely optional, making it the most relaxing airport worldwide for deaf individuals.`
  },
  {
    slug: 'haneda-airport-terminal-3-international',
    category: 'transit',
    title: 'Tokyo Haneda T3: Precision Signage & Layouts',
    subtitle: 'An elite masterclass in visual architecture and absolute quiet hospitality',
    location: 'Tokyo, Japan',
    date: 'January 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1600&q=80&auto=format&fit=crop',
    excerpt: 'Haneda combines high-speed transit operations with intuitive, hyper-detailed visual indicators across its compact layout.',
    body: `### Terminal 3 (All International Flights)
Haneda Terminal 3 is organized around a historical visual theme, keeping its footprint remarkably straightforward and centralized.

**Universal Visual Design Signage:**
Haneda utilizes internationally recognized graphic iconography everywhere you look. Wayfinding signs are placed at eye level and feature high-contrast illumination. Every single restroom, walkway, and gate corridor is mapped out visually with bright, glowing landmarks.

**Communication at Information Desks:**
Every single information desk in Haneda Terminal 3 comes equipped with a dedicated speech-to-text tablet device alongside a communication board featuring clear, illustrative travel icons. Ground crew will immediately transition to writing or using translation apps without any hesitation.`
  },
  {
    slug: 'dubai-international-terminal-3-concourses',
    category: 'transit',
    title: 'Dubai International T3: Conquering the Megastructure',
    subtitle: 'Navigating Emirates\' cavernous and busy concourses without acoustic cues',
    location: 'Dubai, UAE',
    date: 'December 2025',
    readTime: '13 min read',
    image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=1600&q=80&auto=format&fit=crop',
    excerpt: 'DXB Terminal 3 is one of the single largest terminal structures on earth. We lay out the visual roadmap needed to master Concourses A, B, and C.',
    body: `### Terminal 3 (Concourses A, B, and C)
Dubai Terminal 3 is a true aviation colossus. Moving between different concourses requires utilizing an underground visual transit train system.

**The Emirates Flight App Advantage:**
Because DXB is a massive shopping and lounge destination, physical departure screens can be spread far apart. Activating real-time flight tracking on the Emirates mobile app is absolutely crucial; it sends direct push alerts containing gate allocations, boarding times, and final boarding countdowns straight to your phone.

**Smart Gates:**
Ensure your passport is registered for Dubai\'s biometric Smart Gates. This allows you to completely bypass standard security lines and complete passport clearance via an intuitive automated scanner system in under 10 seconds.`
  },
  {
    slug: 'frankfurt-airport-terminal-1-pier-a-z',
    category: 'transit',
    title: 'Frankfurt Airport T1: Visual Strategy Guide',
    subtitle: 'Cracking the complex Lufthansa hub maze using architectural wayfinding cues',
    location: 'Frankfurt, Germany',
    date: 'November 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1600&q=80&auto=format&fit=crop',
    excerpt: 'Frankfurt Terminal 1 is a vast web of interconnected concrete concourses. This guide breaks down how to navigate it confidently using physical visual clues.',
    body: `### Terminal 1 (Lufthansa & Star Alliance)
FRA Terminal 1 is notorious for its highly complex layout and lengthy walking transfers. Navigating this environment demands constant vigilance of the color-coded signage systems overhead.

**Color-Coded Concourse Pathways:**
The terminal relies heavily on clear color-coded indicators to guide passengers toward Piers A, B, C, and Z. Follow the illuminated overhead banners meticulously. Do not deviate into shopping avenues without confirming your visual route via one of the multi-language flight status monitors along the path.

**Automated Border Control:**
Germany\'s 'EasyPASS' automated border lanes are entirely self-directed and visual, making it simple to glide through passport control without needing oral communication.`
  },
  {
    slug: 'los-angeles-lax-tom-bradley-terminal',
    category: 'transit',
    title: 'LAX Tom Bradley International Terminal Guide',
    subtitle: 'A visual survival guide to Los Angeles\' premier gateway',
    location: 'Los Angeles, USA',
    date: 'October 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1542205815-6bb9f39d22ff?w=1600&q=80&auto=format&fit=crop',
    excerpt: 'Tom Bradley International Terminal (TBIT) is bright, bustling, and features some of the largest digital multimedia walls in any terminal.',
    body: `### Tom Bradley International Terminal (TBIT)
TBIT features a beautiful, sweeping architecture anchored by massive digital display towers that present art alongside flight information.

**The Central Great Hall:**
Use the Great Hall as your visual anchor point. The central flight information screens here are immense, clear, and visible from almost any dining venue in the main atrium. 

**Inter-Terminal Visual Connectors:**
LAX now features secure behind-security airside walkways connecting TBIT directly to Terminals 4, 5, 6, 7, and 8. These pathways are completely marked out with bold visual wall graphics, allowing you to walk to connecting flights without exiting security or taking loud shuttle buses.`
  }
];

export const cities: CityListing[] = [
  {
    city: 'Tokyo',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=1200&q=80&auto=format&fit=crop',
    dining: [
      {
        name: 'Sushi Saito',
        type: 'Omakase',
        description: 'Exquisite counter dining with direct chef interaction. The entire menu is visual; each course is beautifully presented and explained without audio dependency.',
        tags: ['Counter Seating', 'Low Ambient Noise', 'Visual Presentation']
      },
      {
        name: 'Narisawa',
        type: 'Contemporary Japanese',
        description: 'Generous table spacing, acoustic paneling, and magnificent directional lighting that makes visual communication across the table completely effortless.',
        tags: ['Wide Table Spacing', 'Acoustic Panels', 'Written Communication']
      },
      {
        name: 'Den',
        type: 'Creative Kaiseki',
        description: 'An intimate space with beautifully warm lighting. The team uses fun visual storytelling cards to present dishes, creating an exceptionally welcome atmosphere.',
        tags: ['Intimate Setting', 'Visual Storytelling', 'Warm Lighting']
      }
    ],
    selfGuided: [
      {
        name: '21_21 Design Sight',
        type: 'Design Museum',
        description: 'A striking Tadao Ando concrete building. Exhibits are highly visual and text-driven, utilizing comprehensive bilingual signage and digital companion codes.',
        tags: ['QR Guides', 'Print Materials', 'No Audio Dependency']
      },
      {
        name: 'teamLab Planets',
        type: 'Immersive Art',
        description: 'A completely sensory, non-auditory digital wonderland. Guests walk barefoot through water, light, and projection rooms at a fully self-guided pace.',
        tags: ['Fully Visual', 'Self-Paced', 'Tactile Elements']
      },
      {
        name: 'Nezu Museum & Gardens',
        type: 'Art Museum',
        description: 'Stunning traditional architecture featuring clean gallery layouts with rich descriptions alongside a peaceful garden walk with clear printed maps.',
        tags: ['Quiet Sanctuary', 'Detailed Graphics', 'Self-Guided Walk']
      }
    ]
  },
  {
    city: 'Copenhagen',
    country: 'Denmark',
    image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80&auto=format&fit=crop',
    dining: [
      {
        name: 'Geranium',
        type: 'Nordic Fine Dining',
        description: 'Floor-to-ceiling panoramic windows flood the clean room with natural light, making it a dream for lip-reading and signing across the tables.',
        tags: ['Natural Light', 'Wide Table Spacing', 'Quiet Room']
      },
      {
        name: 'Alchemist',
        type: 'Holistic Dining',
        description: 'An unparalleled 50-course theatrical experience where messages are projected across a massive overhead dome. The entire journey is purely visual and performance-driven.',
        tags: ['Visual Theater', 'Immersive Space', 'High Contrast']
      }
    ],
    selfGuided: [
      {
        name: 'Louisiana Museum of Modern Art',
        type: 'Art Museum',
        description: 'Set along the coast, featuring high-contrast galleries, detailed printed guides, and clear typography wall plaques that make audio tours entirely unnecessary.',
        tags: ['Detailed Wall Text', 'QR Codes', 'Exhibition Maps']
      },
      {
        name: 'Glyptoteket',
        type: 'Sculpture & Antiquities',
        description: 'An atmospheric winter garden surrounded by classical sculpture galleries. Highly visual architectural layout makes exploring at your own pace relaxing.',
        tags: ['Visual Landmarks', 'Self-Paced', 'Stunning Interiors']
      }
    ]
  },
  {
    city: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80&auto=format&fit=crop',
    dining: [
      {
        name: 'L\'Arpège',
        type: 'Modern French Haute Cuisine',
        description: 'Chef Alain Passard\'s legendary space features crisp natural lighting and highly attentive staff who seamlessly accommodate written ordering.',
        tags: ['Bright Lighting', 'Attentive Staff', 'Written Ordering']
      },
      {
        name: 'Septime',
        type: 'Progressive Neo-Bistro',
        description: 'A stylish, rustic setting featuring beautiful natural wood textures, great overhead illumination, and a printed daily menu detailing every course clearly.',
        tags: ['Printed Daily Menu', 'Excellent Sightlines', 'Chic Space']
      }
    ],
    selfGuided: [
      {
        name: 'Musée de l\'Orangerie',
        type: 'Impressionist Art',
        description: 'Claude Monet\'s massive Water Lilies are displayed in two custom oval rooms, offering an entirely immersive, silent visual masterclass.',
        tags: ['Visual Splendor', 'Simple Layout', 'Quiet Environment']
      },
      {
        name: 'Palais de Tokyo',
        type: 'Contemporary Art Center',
        description: 'A bold, cavernous industrial space featuring grand visual art installations, vast textual descriptions, and simple directional signage.',
        tags: ['Industrial Space', 'Bold Text Graphics', 'Self-Guided']
      }
    ]
  },
  {
    city: 'London',
    country: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80&auto=format&fit=crop',
    dining: [
      {
        name: 'The Ledbury',
        type: 'Modern British Fine Dining',
        description: 'An elegant dining room featuring smart sound-absorbing soft furnishings, pristine lighting conditions, and wide spacing between tables.',
        tags: ['Acoustically Managed', 'Bright Rooms', 'Premium Service']
      },
      {
        name: 'Core by Clare Smyth',
        type: 'Contemporary Elegant',
        description: 'Features an open glass-walled kitchen workspace. Guests can observe the chefs visually while enjoying an exceptionally bright, clear, and quiet room.',
        tags: ['Open Visual Kitchen', 'Pristine Acoustics', 'Elegant Setting']
      }
    ],
    selfGuided: [
      {
        name: 'Tate Modern',
        type: 'Modern Art Gallery',
        description: 'Housed inside a massive former power station. Layout maps are incredibly clear, text guides are rich, and digital apps offer full written transcripts.',
        tags: ['Written Transcripts', 'Spacious Layout', 'High Contrast']
      },
      {
        name: 'Sir John Soane\'s Museum',
        type: 'Historical House Museum',
        description: 'A quirky, densely packed architectural wonderland where the primary experience involves uncovering hidden visual wall panels and paintings manually.',
        tags: ['Intricate Visuals', 'Self-Paced Exploration', 'Printed Guides']
      }
    ]
  },
  {
    city: 'New York City',
    country: 'United States',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80&auto=format&fit=crop',
    dining: [
      {
        name: 'Le Bernardin',
        type: 'Fine Seafood',
        description: 'An iconic, plush dining room with deeply coffered ceilings that effortlessly soak up ambient sound, paired with immaculate table service and clear lighting.',
        tags: ['Sound Absorbing Ceilings', 'Flawless Service', 'Bright Ambiance']
      },
      {
        name: 'Atomix',
        type: 'Innovative Korean Counter',
        description: 'An intimate 14-seat basement counter course where every dish is served with a gorgeous, descriptive card detailing its origins and philosophy.',
        tags: ['Descriptive Dish Cards', 'Counter Seating', 'Intimate Setting']
      }
    ],
    selfGuided: [
      {
        name: 'The Chelsea Galleries Loop',
        type: 'Contemporary Art Walk',
        description: 'Dozens of elite contemporary galleries packed into a few walkable blocks. Totally self-directed, visual, and free to explore at your leisure.',
        tags: ['Walkable Loop', '100% Visual', 'Free Admission']
      },
      {
        name: 'The Vessel & High Line Walk',
        type: 'Architectural Public Walk',
        description: 'An elevated linear public park stretching down Manhattan\'s West Side, delivering pristine architectural design lines and stunning city views.',
        tags: ['Outdoor Path', 'Architectural Sightlines', 'Self-Guided']
      }
    ]
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80&auto=format&fit=crop',
    dining: [
      {
        name: 'Odette',
        type: 'Modern French Fine Dining',
        description: 'A soft, pastel-toned dining room boasting immense natural daylighting and sound-dampening fabrics, creating an oasis of visual clarity.',
        tags: ['Daylight Vault', 'Soft Acoustics', 'Elite Hospitality']
      },
      {
        name: 'Burnt Ends',
        type: 'Modern Australian BBQ Counter',
        description: 'High-octane open-counter kitchen view where ordering is entirely visual, centered around watching the fire-cookery perform right before your eyes.',
        tags: ['Action Counter View', 'Vibrant Visuals', 'Direct Contact']
      }
    ],
    selfGuided: [
      {
        name: 'Gardens by the Bay Cloud Forest',
        type: 'Botanical Conservatory',
        description: 'A massive, soaring glass biome featuring an interactive mountain walkway fully labeled with crisp digital signage panels and graphics.',
        tags: ['Digital Signage Panels', 'Fully Accessible', 'Spectacular Outlines']
      },
      {
        name: 'National Gallery Singapore',
        type: 'Southeast Asian Art',
        description: 'Beautiful visual architecture linking historical civic buildings. Highly detailed exhibition layouts with fantastic printed self-guided booklets.',
        tags: ['Bespoke Booklets', 'Clean Visual Grid', 'Spacious Halls']
      }
    ]
  },
  {
    city: 'Sydney',
    country: 'Australia',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80&auto=format&fit=crop',
    dining: [
      {
        name: 'Quay',
        type: 'Modern Australian Fine Dining',
        description: 'Overlooking Sydney Harbour with magnificent floor-to-ceiling windows that offer elite visual illumination for sign and lip-reading conversations.',
        tags: ['Harbour Light View', 'Generous Floorplan', 'Impeccable Focus']
      },
      {
        name: 'Bennelong',
        type: 'Contemporary Australian',
        description: 'Located directly inside the iconic Sydney Opera House sails. The sweeping visual architecture features wide seating spacing and excellent contrast.',
        tags: ['Iconic Visual Frame', 'Wide Table Spacing', 'Attentive Staff']
      }
    ],
    selfGuided: [
      {
        name: 'Art Gallery of New South Wales (Sydney Modern)',
        type: 'Art Museum',
        description: 'The new modern wing is a light-filled architectural masterpiece with wide open spaces, clear wayfinding placards, and digital text tours.',
        tags: ['Light Filled Wings', 'Digital Text Guides', 'Spacious Display']
      },
      {
        name: 'The Rocks Historical Visual Trail',
        type: 'Self-Guided Walking Tour',
        description: 'Explore Sydney\'s oldest historic quarters using a highly detailed visual heritage map app provided by the local historical association.',
        tags: ['Historical App Map', 'Outdoor Walk', 'Self-Paced Discovery']
      }
    ]
  },
  {
    city: 'Dubai',
    country: 'UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format&fit=crop',
    dining: [
      {
        name: 'Tresind Studio',
        type: 'Immersive Modern Indian',
        description: 'An intimate, highly exclusive dining room with dedicated overhead spotlights focused perfectly on each table, keeping face-to-face sightlines pristine.',
        tags: ['Bespoke Table Spotlights', 'Intimate Layout', 'Visual Gastronomy']
      },
      {
        name: 'Ossiano',
        type: 'Progressive Underwater Fine Dining',
        description: 'Dine alongside massive floor-to-ceiling aquarium glass walls. The entire space is illuminated by the soothing, glowing water, offering an unforgettably visual experience.',
        tags: ['Aquarium Backlight', 'Mesmerizing Visuals', 'Quiet Space']
      }
    ],
    selfGuided: [
      {
        name: 'Museum of the Future',
        type: 'Futuristic Exhibition',
        description: 'An architectural marvel covered in Arabic calligraphy. The interior features fully integrated visual tech interfaces and scannable textual screens.',
        tags: ['Integrated Screen Tech', 'Stunning Design Lines', 'Self-Guided Loop']
      },
      {
        name: 'Alserkal Avenue',
        type: 'Contemporary Art District',
        description: 'A vibrant industrial warehouse district converted into elite galleries and design hubs. Exceptionally walkable, open-air, and completely visual.',
        tags: ['Industrial Design Hubs', 'Walkable Alleys', '100% Visual Art']
      }
    ]
  }
];
