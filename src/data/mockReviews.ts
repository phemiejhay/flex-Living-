import { Review } from '@/types/review';

export const mockReviews: Review[] = [
  {
    id: 7453,
    type: "host-to-guest",
    status: "published",
    rating: null,
    publicReview: "Shane and family are wonderful! Would definitely host again :)",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "respect_house_rules", rating: 10 }
    ],
    submittedAt: "2020-08-21 22:45:14",
    guestName: "Shane Finkelstein",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    listingId: "listing-001",
    channel: "Airbnb",
    isApproved: true
  },
  {
    id: 7454,
    type: "guest-to-host",
    status: "published",
    rating: 9.5,
    publicReview: "Amazing location and beautiful apartment! Everything was spotless and the host was very responsive. Would definitely recommend!",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 9 },
      { category: "location", rating: 10 },
      { category: "check_in", rating: 9 },
      { category: "accuracy", rating: 10 },
      { category: "value", rating: 9 }
    ],
    submittedAt: "2024-01-15 14:30:22",
    guestName: "Emma Thompson",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    listingId: "listing-001",
    channel: "Airbnb",
    isApproved: true
  },
  {
    id: 7455,
    type: "guest-to-host",
    status: "published",
    rating: 8.5,
    publicReview: "Great stay overall. The apartment was clean and well-maintained. Only minor issue was some noise from the street at night.",
    reviewCategory: [
      { category: "cleanliness", rating: 9 },
      { category: "communication", rating: 8 },
      { category: "location", rating: 9 },
      { category: "check_in", rating: 8 },
      { category: "accuracy", rating: 9 },
      { category: "value", rating: 8 }
    ],
    submittedAt: "2024-01-20 09:15:44",
    guestName: "Michael Chen",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    listingId: "listing-001",
    channel: "Booking.com",
    isApproved: false
  },
  {
    id: 7456,
    type: "guest-to-host",
    status: "published",
    rating: 10,
    publicReview: "Absolutely perfect! The space exceeded our expectations. Great amenities, comfortable beds, and stunning views. Host was incredibly helpful.",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "location", rating: 10 },
      { category: "check_in", rating: 10 },
      { category: "accuracy", rating: 10 },
      { category: "value", rating: 10 }
    ],
    submittedAt: "2024-02-01 16:45:30",
    guestName: "Sarah Williams",
    listingName: "Studio Flat - Chelsea Gardens",
    listingId: "listing-002",
    channel: "Airbnb",
    isApproved: true
  },
  {
    id: 7457,
    type: "guest-to-host",
    status: "published",
    rating: 7.5,
    publicReview: "Nice apartment in a good location. A few maintenance issues with the heating but host addressed them quickly.",
    reviewCategory: [
      { category: "cleanliness", rating: 8 },
      { category: "communication", rating: 9 },
      { category: "location", rating: 9 },
      { category: "check_in", rating: 7 },
      { category: "accuracy", rating: 7 },
      { category: "value", rating: 7 }
    ],
    submittedAt: "2024-02-05 11:20:15",
    guestName: "David Brown",
    listingName: "Studio Flat - Chelsea Gardens",
    listingId: "listing-002",
    channel: "Airbnb",
    isApproved: false
  },
  {
    id: 7458,
    type: "guest-to-host",
    status: "published",
    rating: 9.2,
    publicReview: "Lovely stay! The apartment was exactly as described. Very clean and comfortable. Would stay again!",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 9 },
      { category: "location", rating: 9 },
      { category: "check_in", rating: 9 },
      { category: "accuracy", rating: 9 },
      { category: "value", rating: 9 }
    ],
    submittedAt: "2024-02-10 19:30:55",
    guestName: "Jessica Martinez",
    listingName: "Studio Flat - Chelsea Gardens",
    listingId: "listing-002",
    channel: "Booking.com",
    isApproved: true
  },
  {
    id: 7459,
    type: "guest-to-host",
    status: "published",
    rating: 9.8,
    publicReview: "Exceptional property! Modern, stylish and spotlessly clean. Perfect for our business trip. Highly recommend!",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "location", rating: 10 },
      { category: "check_in", rating: 9 },
      { category: "accuracy", rating: 10 },
      { category: "value", rating: 10 }
    ],
    submittedAt: "2024-02-14 08:45:22",
    guestName: "Robert Anderson",
    listingName: "Penthouse Suite - Canary Wharf",
    listingId: "listing-003",
    channel: "Airbnb",
    isApproved: true
  },
  {
    id: 7460,
    type: "guest-to-host",
    status: "published",
    rating: 8.8,
    publicReview: "Great location and beautiful views. The apartment is well-equipped and comfortable. Would recommend for business stays.",
    reviewCategory: [
      { category: "cleanliness", rating: 9 },
      { category: "communication", rating: 9 },
      { category: "location", rating: 10 },
      { category: "check_in", rating: 8 },
      { category: "accuracy", rating: 9 },
      { category: "value", rating: 8 }
    ],
    submittedAt: "2024-02-18 13:15:40",
    guestName: "Linda Taylor",
    listingName: "Penthouse Suite - Canary Wharf",
    listingId: "listing-003",
    channel: "Booking.com",
    isApproved: true
  },
  {
    id: 7461,
    type: "guest-to-host",
    status: "published",
    rating: 9.5,
    publicReview: "Stunning apartment with amazing facilities. The gym and rooftop terrace were fantastic. Host was very accommodating.",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 9 },
      { category: "location", rating: 10 },
      { category: "check_in", rating: 10 },
      { category: "accuracy", rating: 9 },
      { category: "value", rating: 9 }
    ],
    submittedAt: "2024-02-22 17:00:10",
    guestName: "James Wilson",
    listingName: "Penthouse Suite - Canary Wharf",
    listingId: "listing-003",
    channel: "Airbnb",
    isApproved: false
  },
  {
    id: 7462,
    type: "guest-to-host",
    status: "published",
    rating: 6.5,
    publicReview: "Location was good but the apartment needs some maintenance. WiFi was unreliable and the furniture could use updating.",
    reviewCategory: [
      { category: "cleanliness", rating: 7 },
      { category: "communication", rating: 8 },
      { category: "location", rating: 8 },
      { category: "check_in", rating: 6 },
      { category: "accuracy", rating: 5 },
      { category: "value", rating: 6 }
    ],
    submittedAt: "2024-02-25 10:30:25",
    guestName: "Patricia Moore",
    listingName: "1B Apartment - King's Cross",
    listingId: "listing-004",
    channel: "Booking.com",
    isApproved: false
  }
];
