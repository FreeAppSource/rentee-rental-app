export const onboardingSlides = [
  {
    id: '1',
    title: 'Choose from a thousand of places',
    description: 'We provide you with a variant of accomodation for a better choice',
    image: require('../assets/images/onboarding_5.png'),
  },
  {
    id: '2',
    title: 'Well-selected accomodation',
    description: 'Every room is verified for comfort, safety, and modern amenities',
    image: require('../assets/images/onboarding_6.png'),
  },
  {
    id: '3',
    title: 'Cool and secure service',
    description: 'Book hourly or monthly with 24/7 security and instant check-in',
    image: require('../assets/images/onboarding_7.png'),
  },
];

export const accommodationKinds = [
  { id: 'kind-1', name: 'Service Room', icon: 'bed-outline', image: require('../assets/images/kind_service_room.png'), count: '142 rooms' },
  { id: 'kind-2', name: 'Apartment', icon: 'business-outline', image: require('../assets/images/kind_apartment.png'), count: '89 places' },
  { id: 'kind-3', name: 'Studio', icon: 'home-outline', image: require('../assets/images/kind_studio.png'), count: '64 units' },
  { id: 'kind-4', name: 'Luxury Villa', icon: 'sparkles-outline', image: require('../assets/images/kind_apartment.png'), count: '28 villas' },
];

export const properties = [
  {
    id: 'prop-1',
    title: 'Blue Vibe Room',
    type: 'Service Room',
    location: 'District 1, Ho Chi Minh City',
    address: '23 Sun View Rd, Little Town, CA, 23424',
    distance: '1.2 km',
    hourlyPrice: 12.5,
    monthlyPrice: 650,
    rating: 5.0,
    reviewsCount: 28,
    beds: 1,
    baths: 1,
    image: require('../assets/images/room_blue_vibe.png'),
    gallery: [
      require('../assets/images/room_blue_vibe.png'),
      require('../assets/images/room_landscape_1.png'),
      require('../assets/images/room_featured_1.png'),
    ],
    description:
      'Our fancy room with minimalism decoration will make you feel like home! We have an area for cooking and a cafe shop at ground floor. 24/7 security with our guards at front door will make you feel safe all the time.',
    facilities: ['Elevator', 'Cooking place', 'Parking', 'Hot water', 'Free Wifi', 'Sauna & Spa'],
    host: {
      name: 'Karen Smith',
      role: 'Superhost',
      avatar: require('../assets/images/host_karen.png'),
      responseRate: '100%',
    },
  },
  {
    id: 'prop-2',
    title: 'Sunrise Minimalist Loft',
    type: 'Apartment',
    location: 'District 2, Ho Chi Minh City',
    address: '88 Sunrise Blvd, River View, CA',
    distance: '2.5 km',
    hourlyPrice: 15.0,
    monthlyPrice: 720,
    rating: 4.9,
    reviewsCount: 34,
    beds: 2,
    baths: 1,
    image: require('../assets/images/room_featured_1.png'),
    gallery: [
      require('../assets/images/room_featured_1.png'),
      require('../assets/images/room_landscape_2.png'),
    ],
    description:
      'Spacious high-ceiling loft with city panorama. Equipped with smart kitchen, workstation, and ultra-fast optical fiber internet.',
    facilities: ['Elevator', 'Air Conditioning', 'Parking', 'Hot water', 'Workspace'],
    host: {
      name: 'David Miller',
      role: 'Verified Host',
      avatar: require('../assets/images/reviewer_alex.png'),
      responseRate: '98%',
    },
  },
  {
    id: 'prop-3',
    title: 'Cozy Modern Studio',
    type: 'Studio',
    location: 'District 3, Ho Chi Minh City',
    address: '14 Parkside Alley, Central CA',
    distance: '3.1 km',
    hourlyPrice: 11.0,
    monthlyPrice: 540,
    rating: 4.8,
    reviewsCount: 19,
    beds: 1,
    baths: 1,
    image: require('../assets/images/room_landscape_2.png'),
    gallery: [
      require('../assets/images/room_landscape_2.png'),
      require('../assets/images/room_landscape_3.png'),
    ],
    description:
      'Warm and inviting studio in peaceful residential neighborhood. Walking distance to central markets and cafes.',
    facilities: ['Cooking place', 'Hot water', 'Free Wifi', 'Balcony'],
    host: {
      name: 'Hilary Vance',
      role: 'Host',
      avatar: require('../assets/images/reviewer_hilary.png'),
      responseRate: '95%',
    },
  },
  {
    id: 'prop-4',
    title: 'Skyline Sunset Villa',
    type: 'Luxury Villa',
    location: 'District 7, Ho Chi Minh City',
    address: '102 Marina View, Waterfront CA',
    distance: '5.4 km',
    hourlyPrice: 35.0,
    monthlyPrice: 1600,
    rating: 5.0,
    reviewsCount: 42,
    beds: 3,
    baths: 3,
    image: require('../assets/images/room_landscape_3.png'),
    gallery: [
      require('../assets/images/room_landscape_3.png'),
      require('../assets/images/room_featured_2.png'),
    ],
    description:
      'Exclusive luxury retreat with private swimming pool, garden terrace, barbecue patio, and master jacuzzi suites.',
    facilities: ['Private Pool', 'Garden Terrace', 'Elevator', 'Parking', 'Sauna & Spa'],
    host: {
      name: 'Karen Smith',
      role: 'Superhost',
      avatar: require('../assets/images/host_karen.png'),
      responseRate: '100%',
    },
  },
];

export const userProfile = {
  name: 'Henry Quill',
  points: 320,
  phone: '+84 4573 2374',
  email: 'henry.quill@rentee.com',
  avatar: require('../assets/images/avatar_henry.png'),
};

export const currentBooking = {
  id: 'BK-9281',
  property: properties[0],
  dateTime: '12:20 am on 12/12/2021',
  duration: '4 hours',
  totalPrice: 50.0,
  status: 'Ongoing',
  code: 'NVC35S',
};

export const chatMessages = [
  { id: '1', sender: 'karen', text: 'Hi there, will you come in time?', time: '11:45 AM' },
  { id: '2', sender: 'me', text: 'Yes, I will arrive at 12:15 PM.', time: '11:48 AM' },
  { id: '3', sender: 'karen', text: 'Please tell the receptionist your booking code NVC35S.', time: '11:50 AM' },
  { id: '4', sender: 'karen', text: 'Thanks a lot. We also have different services for guests like: free wifi, sauna and spa.', time: '11:52 AM' },
  { id: '5', sender: 'me', text: 'Sounds great. Where can I contact?', time: '11:55 AM' },
  { id: '6', sender: 'karen', text: 'You’re welcome and have a good day. See you soon!', time: '11:58 AM' },
];

export const faqs = [
  { q: 'How do I check in to my room?', a: 'Show your booking confirmation code to the 24/7 receptionist on arrival.' },
  { q: 'Can I extend my hourly rental?', a: 'Yes, tap "Extend Booking" on your booking card before your session ends.' },
  { q: 'What is the cancellation policy?', a: 'Free cancellation up to 2 hours before scheduled check-in time.' },
];
