export interface ReviewCategory {
  category: string;
  rating: number;
}

export interface Review {
  id: number;
  type: string;
  status: string;
  rating: number | null;
  publicReview: string;
  reviewCategory: ReviewCategory[];
  submittedAt: string;
  guestName: string;
  listingName: string;
  listingId: string;
  channel: string;
  isApproved?: boolean;
}

export interface PropertyPerformance {
  listingId: string;
  listingName: string;
  totalReviews: number;
  averageRating: number;
  approvedReviews: number;
  categoryBreakdown: {
    [key: string]: number;
  };
  recentReviews: Review[];
  trendDirection: 'up' | 'down' | 'stable';
}
