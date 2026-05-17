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
    slug: 'heathrow-airport',
    category: 'transit',
    title: 'Heathrow Airport (LHR)',
    subtitle: 'Navigating Terminal 5 purely by sight as a deaf jet-setter',
    location: 'London, UK',
    date: 'May 2025',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Heathrow\'s Terminal 5 is an absolute monster of a hub, fast-moving and heavily reliant on tannoy announcements. Here is my personal playbook for breezing through it without missing a beat.',
    body: `Terminal 5 operates on a massive visual infrastructure that most hearing travellers completely look past. While everyone else is straining to hear muffled gate announcements, my eyes are glued to the big flight boards or my British Airways app, which pushes gate updates straight to my phone.

**My Lifesaver: Live Sign Language Assistance**
Did you know Heathrow has integrated the free **Convo** service? If you are a BSL user like me, this is a total game-changer. I always look out for the Convo posters and QR codes inside the Assisted Travel host zones. You just scan it, and it instantly loads a qualified British Sign Language interpreter right in your mobile browser—no clunky app download needed. 

**Loops & T-Settings**
If you use hearing aids or a cochlear implant with a Telecoil, induction loops are fitted all over the terminal buildings (just keep an eye out for the classic 'sympathetic ear' logo). If you ever need to use a public payphone or credit card phone airside, they have all been adapted for hearing aids, and there are text payphones sitting in arrivals just past Customs.

**Sprinting Through Security**
I highly recommend booking Fast Track security in advance on the app. It cuts down the chaotic queue time significantly. The staff here see thousands of faces a day, so they are incredibly receptive to written notes on my phone. I just flash a quick memo indicating I am deaf, and they visually signal and gesture me through the scanners step-by-step.

**Lounge Life**
Whenever I pop into the Galleries First or Galleries Club lounges, I head straight to the desk and use a notepad app to chat with the team. I always ask them for a vibrating alarm pod for boarding alerts. That way, instead of stressing about missing a visual board shift while relaxing, the pod buzzes in my hand when it is time to move.

**The Ultimate Gate Strategy**
T5 is notoriously famous for assigning gates at the absolute last second. I make sure to camp out within a perfect, direct line of sight to a Flight Information Display Screen (FIDS). Because individual gate adjustments aren't broadcast visually over the main general seating areas, that screen is your absolute source of truth.`,
  },
  {
    slug: 'gatwick-airport',
    category: 'transit',
    title: 'Gatwick Airport (LGW)',
    subtitle: 'My visual guide to surviving terminal transfers and security hubs',
    location: 'London, UK',
    date: 'June 2025',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Gatwick\'s split-terminal layout relies heavily on an automated shuttle link. Here is how I keep my visual bearings intact without needing a single audio cue.',
    body: `As a deaf traveller, Gatwick can feel a bit chaotic during peak holiday seasons, but its visual signage is actually remarkably tight if you know what to look for. 

**Breezing Through the Shuttle Link**
Transferring between the North and South terminals means jumping on the automated inter-terminal shuttle. Zero audio verification is needed here. I just follow the bright overhead yellow signs pointing toward the platforms. Once inside the carriage, there are high-contrast digital text screens that give real-time visual updates of the upcoming stops, and the platforms have massive countdown timers above the doors.

**Awesome Staff Awareness**
One thing I absolutely love about London Gatwick is their partnership with **Action for Deafness**. They have trained over 150 airport team members to understand the exact communication barriers we face. Whenever I approach a dedicated assistance desk, I look for the active T-loop systems to tune my devices in clearly.

**Bypassing the Duty Free Chaos**
If you book the Assisted Travel service, staff can guide you straight past security. But if you are travelling solo and independently like me, you can actually bypass the blinding maze of World Duty Free entirely. Just follow the clear structural signs to reach the Dedicated Assistance Seating zones (you\'ll find them on the upper floor in South, and right next to Boots and Wetherspoons in North). The best part? All key structural announcements are mirrored directly on the surrounding screens in these zones.

**Color-Coded Security & Boarding**
Both terminals use large, colour-coded overhead screens to stream passengers into the right security lanes. I just scan my barcode at the turnstiles and look for the bright green or red arrows to know which lane is ready for me. Once airside, the departure lounges are packed with dense digital matrixes. Since budget airlines love last-minute shuffles, I always grab a seat facing a master display screen so I can catch status changes instantly.`,
  },
  {
    slug: 'stansted-airport',
    category: 'transit',
    title: 'Stansted Airport (STN)',
    subtitle: 'Navigating the single-terminal layout and monorails entirely by sight',
    location: 'Essex, UK',
    date: 'July 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1542296332-2e4473fac563?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Stansted funnels every single passenger through one massive room. Here is my strategy for tackling the crowds and navigating the satellite monorail trains safely.',
    body: `Stansted operates as one giant, continuous terminal building. While that simplifies orientation because you can\'t get lost in the wrong building, it means the main departure hall gets incredibly loud and crowded. For a deaf traveller, it is a purely visual game of focus.

**On-Demand BSL on My Phone**
London Stansted has fully integrated with the **SignLive** service, which is incredible. Whenever I need to ask a question at a service counter or chat with a member of staff, I can instantly connect to a live British Sign Language interpreter directly on my phone. It completely removes the stress of trying to lip-read in a frantic, bustling environment.

**Cracking the Automated Track Transit**
Once your gate is finally assigned, you have to take the automated track transit train to reach the furthest satellite gates (1 to 39). I follow the overhead numbers down to the platforms, which are fully glass-walled. There are fantastic scrolling text indicators above the doors showing exactly which gates the incoming train is accessing, so you can just hop on with total confidence.

**Surviving the Departure Hall**
Because the main hall is an absolute sea of people, the central status boards are your lifeline. I never make the trek down to the satellite gates until I see the text flashing "Go to Gate" or "Boarding" next to my flight number. 

**Rapid Gate Turnarounds**
Budget carriers dominate Stansted, which means turnaround times are lightning-fast. I always sit right next to the gate-side digital displays because boarding phases scale up rapidly, and you won\'t get any extra visual buffers before they close the doors.`,
  },
  {
    slug: 'beziers-airport',
    category: 'transit',
    title: 'Béziers Cap d\'Agde Airport (BZR)',
    subtitle: 'A beautifully low-stress, single-room regional airport experience',
    location: 'Béziers, France',
    date: 'August 2025',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Béziers Airport is delightfully tiny. With just a single room making up the entire terminal, it completely eliminates the usual anxiety of tracking connections.',
    body: `Béziers Cap d'Agde is an absolute dream for deaf travellers who are exhausted by the overwhelming scale of major international hubs. The entire airport operates on an intuitive, one-room concept where check-in desks, security lines, and the lone departure lounge are completely visible all at once.

**Total Visual Independence**
There are no complex multi-terminal transit systems, no hidden corridors, and no massive digital matrix shifts to track. I can just relax and monitor the single departures screen in the middle of the room. Induction loop signs are clearly posted at the primary check-in points if you need to use them, but the layout is so visual you barely need to ask for directions.

**Walking the Tarmac**
Béziers doesn't have jet bridges, which I honestly prefer because it keeps everything out in the open. When boarding opens, the staff simply open a manual exit door leading straight out onto the tarmac. You just follow the physical queue layout painted on the asphalt directly to the aircraft stairways. 

**Beautiful Acoustic Calm**
Because this regional hub handles only a couple of budget flights at any given time, the ambient noise is almost non-existent. It makes staying visually focused incredibly peaceful compared to the sensory overload of London airports.`,
  },
  {
    slug: 'menorca-airport',
    category: 'transit',
    title: 'Menorca Mahón Airport (MAH)',
    subtitle: 'Mastering the vertical, multi-level Balearic hub without announcements',
    location: 'Menorca, Spain',
    date: 'September 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Menorca Airport organises its travel flow vertically across two floors. Here is how I navigate the layout and find quiet visual spaces during peak summer.',
    body: `Menorca Airport has a super clean, vertical split structure that makes navigating as a deaf person incredibly logical: Check-In resides entirely on Floor 1, while Security and the Boarding Gates sit directly above on Floor 2.

**Text-Based Status Overlays**
Clear elevators and glass escalators guide you straight up from the check-in hall. I love that there are status displays positioned right at every escalator bank, so you can double-check your flight details before going through security. The main informational columns use fixed, text-based status markers rather than shifting layouts. This is super helpful because audio announcements are rarely translated into multiple languages during the frantic peak holiday season.

**Linear Airside Paths**
Once you pass through security, the gates are arranged in one single, continuous linear corridor. The gate markers use distinct, high-contrast bright yellow numbering schemes that stand out beautifully against the building\'s architecture. 

**My Hidden Refuge: Tramuntana Lounge**
If the main gates get too hectic, I highly recommend checking into the airside Tramuntana VIP lounge. It features its own standalone flight monitors in a completely calm environment, so I can relax, read, and track my gate assignments away from the crowded, noisy main walkways.`,
  },
  {
    slug: 'mallorca-airport',
    category: 'transit',
    title: 'Palma de Mallorca Airport (PMI)',
    subtitle: 'Conquering the immense visual scale of Son Sant Joan\'s massive piers',
    location: 'Mallorca, Spain',
    date: 'October 2025',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Palma Airport is absolutely immense, but its clever modular design makes it surprisingly visual-friendly if you prep your route.',
    body: `Palma de Mallorca is one of the busiest hubs in Europe during the summer, and its sheer scale can feel a bit daunting. However, it relies on a very smart modular design: you pass through security in a unified central processing terminal, and then branch off into four independent modules: A, B, C, or D.

**Non-Stop Flight Monitors**
The walkways connecting the central building to the individual modules are exceptionally long. To save you from constantly turning around or stressing about gate changes during the long walk, the moving walkways are lined with high-frequency flight indicator screens the entire way down. 

**Module Identification**
Each module has its own distinct colour accent and massive overhead entrance sign. I always make sure to check the master terminal board the absolute second I clear security to confirm my letter destination before committing to the trek.

**The Source of Truth: Gate Screens**
Because the gates are buried deep within separate architectural piers, the individual gate-front screens are your absolute source of truth. They display boarding status rows with brilliant clarity, shifting from "Scheduled" to "Boarding" using sharp, high-contrast text layouts that you can read from a distance.`,
  },
  {
    slug: 'ibiza-airport',
    category: 'transit',
    title: 'Ibiza Airport (IBZ)',
    subtitle: 'Tackling high-season summer crowds purely by sight',
    location: 'Ibiza, Spain',
    date: 'November 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Ibiza\'s single-terminal layout gets incredibly packed, making ambient noise sky-high. Here is how I navigate it independently using physical cues.',
    body: `Ibiza Airport operates out of a single, long, elongated building. Because it gets incredibly packed with holidaymakers, the acoustic announcements are almost entirely drowned out by the ambient roar of the crowd. This means relying on your eyes is absolutely essential.

**Centralised Security Flow**
The security checkpoint is positioned dead-centre on the first floor. I love that they use dynamic digital display signage to monitor the line flow visually, making it perfectly clear when you need to step forward to an open scanning zone.

**The Single Axis Gate Path**
Once airside, all the boarding gates run along a singular straight axis line. This linear path is amazing for deaf travellers because you can literally walk down a single corridor to check your specific gate screen directly, without ever getting disoriented in side halls or hidden wings.

**Ground Floor Bus Transfers**
A lot of budget airlines use the lower-level ground gates that lead to tarmac bus transfers. These gates can get a bit frantic, but they rely heavily on physical line lanes. I always look for the clearly printed zone lines marked on the floor to position myself visually for priority boarding.`,
  },
  {
    slug: 'houston-airport',
    category: 'transit',
    title: 'George Bush Intercontinental Airport (IAH)',
    subtitle: 'Mastering the multi-terminal Skyway and Subway train networks by sight',
    location: 'Houston, USA',
    date: 'January 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1531058020387-3be344559be6?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Spanning five massive terminal buildings, Houston Intercontinental is a giant. Here is my personal guide to conquering their airside and landside trains entirely by sight.',
    body: `Houston (IAH) is a massive American hub operating Terminals A, B, C, D, and E. Navigating between them means mastering two distinct transit train networks: the airside Skyway and the landside Subway. As someone who can\'t rely on audio track announcements, I found their visual mapping systems brilliant.

**Riding the Airside Skyway**
The Skyway elevated train rides high above the terminal roofs. It gives you sweeping, panoramic window views of the airfields, which is fantastic for keeping your geographical bearings as you move visually between terminals. They also have high-contrast terminal maps mounted directly above every single doorway with scrolling text indicators.

**Navigating the Landside Subway**
Located down in the basement level, this underground track connects all five terminals before you go through security. The directional wall markers are incredibly clear, utilizing explicit colour-coded lines painted directly onto the floors and structural columns to guide you straight to the correct platform without requiring voice instructions.

**Pillar Lighting Codes in Terminal D**
Terminal D handles the bulk of the international flights and features expansive LED signage walls. My favourite design detail is at the check-in zones: they use brightly illuminated pillar lights that completely change colours based on which specific airline is operating at that desk, giving you an instant visual confirmation point.`,
  },
  {
    slug: 'jfk-airport',
    category: 'transit',
    title: 'John F. Kennedy International Airport (JFK)',
    subtitle: 'Utilising on-demand ASL interpreters and light-up loop systems',
    location: 'New York, USA',
    date: 'February 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1543716627-839b54c40519?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'JFK is a massive, decentralized network of completely separate terminal hubs. Here is how I use New York\'s digital accessibility tools to bridge the gap.',
    body: `Because JFK consists of multiple detached, independent terminal buildings linked only by the automated AirTrain loop, it can feel like navigating several different airports at once. Each terminal operates as its own independent ecosystem, making visual navigation apps and on-site tools crucial.

**Live On-Demand ASL Interpreters**
This is an absolute game-changer for deaf travellers in the US. JFK offers a free, on-demand video interpreting service called **Convo Now** to help you communicate seamlessly with their Airport Customer Service Specialists (ACES). I spotted an ACES team member wearing a bright red shirt near the baggage claim information centre, scanned the QR code they provided, and it instantly launched a live American Sign Language interpreter right in my mobile browser. 

**Audio Induction Loops Everywhere**
If you use assistive listening devices, dedicated hearing loops compatible with the Telecoil/'T' setting are permanently installed at the main Information Centres across every single terminal block. You can find them at:
* Terminal 1 Information Centre
* Terminal 4 Domestic and International Information Centres
* Terminal 5 Domestic Information Centre
* Terminal 7 Information Centre
* Terminal 8 Information Centre

**Tracking the AirTrain**
The AirTrain platforms feature explicit, colour-coded light-up route maps. As the train moves along the tracks, glowing LED indicators change positions on the physical route board to show you exactly which terminal station you are pulling into. Plus, major hubs like Terminal 4 feature digital queue estimation graphics at security, displaying real-time visual line bars so you can choose the quickest path to the scanners.`,
  },
  {
    slug: 'valencia-airport',
    category: 'transit',
    title: 'Valencia Manises Airport (VLC)',
    subtitle: 'Flawless linear floor tracking across an integrated terminal corridor',
    location: 'Valencia, Spain',
    date: 'December 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1534008897995-27a23e859048?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Valencia effortlessly blends historic and modern wings into a single continuous building. Here is how I navigate its exceptional linear floor tracking.',
    body: `Valencia Manises Airport beautifully links Terminal 1, Terminal 2, and a Regional Terminal into one single, connected indoor corridor. For a deaf traveller, this layout is incredibly comforting because you maintain a continuous line of sight throughout your journey.

**Seamless Terminal Transitions**
Moving between T1 and T2 requires zero transit trains or complex security re-checks. The transitions are simply marked by large, high-contrast overhead textual signage rather than physical barriers, so you can easily track your progress as you walk down the main concourse.

**Brilliant Metro Connection Visibility**
The underlying Metrovalencia station links directly into the terminal\'s basement level. The moment you step off the train doors, high-contrast red and white signage guides your eyes directly to the lifts, taking you straight up to the check-in floor without any confusing intermediate levels.

**Regional Gates Layout**
The regional boarding wing uses a specific lower-level pier setup. Monitors are packed densely right at the top of the ramp entrance, allowing you to thoroughly verify your commuter flight details visually before you descend to the lower gates.`,
  },
  {
    slug: 'premier-inn-preston-north',
    category: 'stays',
    title: 'Premier Inn Preston North',
    subtitle: 'My independent visual review of room safety kits and digital check-ins',
    location: 'Preston, UK',
    date: 'May 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'As a frequent traveller, I love predictability. Premier Inn Preston North delivers a reliable, low-stress stay with a straightforward layout.',
    body: `Premier Inn Preston North provides a structurally predictable, low-stress environment that is super easy to navigate without audio cues. Because the hotel chain relies on a standardised layout and simplified digital options, my independent visual stay was entirely seamless.

**Bypassing the Desk with Digital Kiosks**
The lobby features touch-screen automated check-in kiosks. The entire process—from retrieving your booking via reference number to scanning identification and dispensing your room keycards—is fully visual and text-driven, meaning you can bypass the main reception desk entirely if you prefer a quick, independent arrival. If you do check in with the team, the counter layout is low and completely open, providing excellent visibility and lighting for lip-reading or using speech-to-text apps.

**Setting Up My Room Safety (Crucial Tip!)**
Like most Premier Inn locations across the UK, this hotel does not have permanently installed flashing strobe fire alarms in standard bedrooms. Instead, they utilise portable **Deaf Assist Alarms** (usually Geemarc or Bellman kits). **You must explicitly request this kit at reception during check-in.** The kit comes in a compact case and includes a wireless receiver unit that sits on your bedside table, paired with a high-intensity vibrating pad (pillow shaker) that slides right underneath your pillow. The unit listens acoustically for the hotel's master fire alarm sound; if it triggers, the bedside unit instantly activates the pillow shaker and flashes a bright strobe light to wake you up.

**Room Layout, Subtitles & Acoustics**
The rooms feature bright, well-placed overhead lighting and adjustable bedside lamps, making signing or lip-reading across the space effortless during evening hours. The rooms are fully carpeted and utilise heavy blackout curtains, which significantly deadens ambient hallway noise and echoing—a massive plus for minimising background distortion if you use hearing aids or implants. Also, the Freeview TVs have built-in subtitle functions accessible directly via a dedicated "SUB" or "STTL" button on the remote, ensuring full media accessibility without digging through complex menus.`,
  },
  {
    slug: 'ikos-porto-petro',
    category: 'stays',
    title: 'Ikos Porto Petro',
    subtitle: 'High-end app-driven luxury and open-air visual dining in Mallorca',
    location: 'Mallorca, Spain',
    date: 'June 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Ikos Porto Petro offers a stunning luxury experience where their digital-first service model naturally eliminates typical audio barriers.',
    body: `Ikos Porto Petro is absolutely incredible. The resort relies heavily on a premium, highly personalized service model that naturally removes so many of the typical audio barriers you run into at standard hotels. With sprawling, naturally lit architectural spaces, independent visual navigation here is completely stress-free.

**The Ikos App is Everything**
The second you arrive, you are integrated into the resort's dedicated smartphone application. This app became my absolute best friend for the week—I used it to book all my à la carte restaurant slots, reserve spa sessions, and even request resort shuttle golf carts to pick me up from my block. Because everything is handled via text-driven interfaces, you completely bypass the need for phone calls or vocal confirmation queues. For Deluxe Collection guests, you also get a dedicated concierge team available via WhatsApp 24/7 who are brilliantly attentive to written notes and phone-screen text messages.

**Hardwired Strobe Fire Protection**
Because this is a brand-new, modern property built to rigorous European safety standards, the accessible room configurations come equipped with integrated, hardwired flashing strobe fire alarms synchronized directly with the central building system. I always recommend explicitly confirming an adapted room layout during your booking process to guarantee this infrastructure is active in your allocated room.

**Visual Poolside Ordering & Terrace Dining**
All on-site à la carte restaurants utilise clear, highly detailed physical menus alongside digital versions via QR codes. The dining rooms feature expansive terrace seating with zero background music interference, providing a pristine acoustic profile. Plus, beach and poolside service operates via a visual flag system or direct QR-code ordering from your sunbed. You just place your order digitally or raise the physical indicator on your umbrella to summon a server, completely eliminating the need to flag anyone down vocally.`,
  },
  {
    slug: 'the-tribute-manchester',
    category: 'stays',
    title: 'The Tribute (The Townhouse)',
    subtitle: 'Acoustic isolation and perfect spotlighting in Manchester Piccadilly',
    location: 'Manchester, UK',
    date: 'April 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Tucked right into Princess Street near Piccadilly, this boutique hotel pairs historic exterior charm with modern, visual-friendly interior convenience.',
    body: `Centrally located right in the heart of Manchester, this gorgeous boutique hotel (historically known as The Townhouse Manchester) pairs a stunning historic brick exterior with heavily updated digital convenience. While its vibrant city-centre location means higher ambient external noise outside, the internal room design provides an acoustically isolated, highly accessible refuge.

**Spotlighting Formatted for Lip-Reading**
The open-plan reception foyer features a clean, uncluttered desk layout with warm, direct spotlighting focused precisely on the reception area. This design detail is incredible for minimizing facial shadows, making lip-reading and tracking facial expressions exceptionally easy when interacting with the front-desk team. Room services, housekeeping requests, and express checkout can also be facilitated entirely via their digital messaging platform or SMS reception line, completely removing any reliance on old-school bedside telephones.

**Brilliant Acoustic Isolation**
Because the building utilizes historic, thick structural brickwork paired with modern secondary acoustic glazing on the windows, the rooms are remarkably quiet. This superb dampening completely eliminates low-frequency city traffic rumble, allowing guests who utilize hearing aids or assistive devices to minimize background audio distortion entirely.

**Setting Up Portable Alert Packs**
Accessible room options are outfitted with hardwired visual flashing fire alarms, but if you end up in a standard room like I did, the hotel provides portable alert systems upon request at check-in. These packs include a wireless transmitter and a heavy-duty vibrating pillow pad that triggers immediately upon sensing the frequencies of the main building alarm. Corridors are also designed with bold, high-contrast door frames against neutral walls, paired with continuous overhead LED runner strips providing a highly defined visual path to your room number.`,
  },
  {
    slug: 'chateau-capitoul',
    category: 'stays',
    title: 'Château Capitoul',
    subtitle: 'Sun-drenched villa layouts and visual estate trails in Béziers',
    location: 'Béziers, France',
    date: 'August 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80&auto=format&fit=crop',
    excerpt:
      'Château Capitoul seamlessly blends a historic French estate with modern luxury winery villas. Here is how I navigate its sprawling vineyard trails purely by sight.',
    body: `Château Capitoul blends a historic French estate with luxury winery villas out in the gorgeous French countryside. Navigating an old chateau can sometimes present sensory challenges due to sprawling layouts, but Capitoul excels by offering a highly visual, self-paced luxury experience that relies heavily on digital communication and natural environmental cues.

**Pre-Arrival Text Flow**
The estate handles all bookings, dietary preferences, and winery tour schedules through comprehensive pre-arrival emails and digital forms. Upon arrival, the guest relations team relies heavily on written itineraries and text-based confirmation apps to manage your entire stay. The hospitality team is totally fluent in multi-language visual communication, and they are highly adept at utilizing written tablets, clear gestures, and text apps to ensure seamless service.

**Choosing the Modern Villas**
The estate features both historic chateau rooms and newly constructed independent luxury villas. I highly recommend booking the modern villas if you are a deaf traveller—they feature open-plan architectural layouts flooded with massive amounts of natural Mediterranean light (perfect for signing across rooms) and include updated visual alert capabilities. For historic rooms where hardwired strobes are less common due to preservation laws, make sure to coordinate with reception at check-in to arrange a portable acoustic alert unit paired with a vibrating bed shaker module.

**Navigating the Vineyard Trails**
The gorgeous grounds span acres of olive groves and vineyards. Navigating between your villa, the Asado restaurant, and the spa is guided by clear, high-contrast stone-carved or iron signage trails. Because the estate is entirely self-paced, you are never dependent on PA systems or audio cues. The indoor dining spaces utilize textured stone walls and exposed timber beams that naturally diffuse echoes, keeping the ambient noise remarkably low for assistive devices.`,
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
          'Counter dining with direct chef-to-guest interaction. Ordering is completely visual; each course is beautifully presented and explained without audio dependency.',
        tags: ['Counter Seating', 'Low Ambient Noise', 'Visual Presentation'],
      },
      {
        name: 'Narisawa',
        type: 'Contemporary Japanese',
        description:
          'Intimate room with wide table spacing and warm directional lighting. Staff maintain written communication cards and acoustic panels line the entire dining room.',
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
          'Entirely exhibition-driven with strong QR code guides and printed materials. Designed to be experienced visually without any audio narrative.',
        tags: ['QR Guides', 'Print Materials', 'No Audio Dependency'],
      },
      {
        name: 'teamLab Planets',
        type: 'Immersive Art',
        description:
          'A fully immersive, entirely visual and tactile experience. No audio component is essential to the work. Navigation is completely self-paced.',
        tags: ['Fully Visual', 'Self-Paced', 'Tactile Elements'],
      },
      {
        name: 'Yanaka Cemetery Walk',
        type: 'Self-Guided District',
        description:
          'Downloadable map available on Tokyo\'s tourism site. The entire Yanaka neighbourhood is a gorgeous, visual, self-guided cultural experience.',
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
          'Floor-to-ceiling windows flood the room with natural light, exceptional for lip-reading and signing across the table. Table spacing is incredibly generous.',
        tags: ['Natural Light', 'Wide Table Spacing', 'Quiet Room'],
      },
      {
        name: 'Bror',
        type: 'New Nordic',
        description:
          'Small plates served at a relaxed pace. Staff are perfectly accustomed to written ordering. Room acoustics are beautifully managed with warm overhead light.',
        tags: ['Candlelit', 'Quiet Acoustics', 'Written Ordering'],
      },
    ],
    selfGuided: [
      {
        name: 'Louisiana Museum of Modern Art',
        type: 'Art Museum',
        description:
          'One of Europe\'s finest modern art museums. Exhibition maps are thorough, QR codes are present throughout, and wall text is beautifully detailed and written.',
        tags: ['Detailed Wall Text', 'QR Codes', 'Exhibition Maps'],
      },
      {
        name: 'Nyhavn Self-Walk',
        type: 'Waterfront District',
        description:
          'The city\'s most visually iconic route. Fully self-paced with a printed guide available at the main tourist office or downloadable via VisitCopenhagen.',
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
          'Interior courtyard seating with warm ambient lighting. Staff are trained for written and gesture communication, keeping ambient volume low throughout.',
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
          'Free entry. The building itself is an incredible visual landmark. Collection labels are clear and detailed, with no audio guide needed to engage.',
        tags: ['Free Entry', 'Detailed Labels', 'Visual Architecture'],
      },
      {
        name: 'Coyoacán Neighbourhood',
        type: 'Cultural District',
        description:
          'The Frida Kahlo Museum is the main anchor, but the entire Coyoacán district is highly walkable, visually rich, and completely self-guided.',
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
