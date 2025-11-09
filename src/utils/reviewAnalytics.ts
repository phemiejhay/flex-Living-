import { Review, PropertyPerformance } from '@/types/review';

export const calculatePropertyPerformance = (reviews: Review[]): PropertyPerformance[] => {
  const propertiesMap = new Map<string, Review[]>();

  reviews.forEach(review => {
    if (!propertiesMap.has(review.listingId)) {
      propertiesMap.set(review.listingId, []);
    }
    propertiesMap.get(review.listingId)!.push(review);
  });

  const performances: PropertyPerformance[] = [];

  propertiesMap.forEach((propertyReviews, listingId) => {
    const totalReviews = propertyReviews.length;
    const approvedReviews = propertyReviews.filter(r => r.isApproved).length;
    
    const ratings = propertyReviews
      .map(r => r.rating)
      .filter((r): r is number => r !== null);
    
    const averageRating = ratings.length > 0
      ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
      : 0;

    const categoryBreakdown: { [key: string]: number } = {};
    const categoryCounts: { [key: string]: number } = {};

    propertyReviews.forEach(review => {
      review.reviewCategory.forEach(cat => {
        if (!categoryBreakdown[cat.category]) {
          categoryBreakdown[cat.category] = 0;
          categoryCounts[cat.category] = 0;
        }
        categoryBreakdown[cat.category] += cat.rating;
        categoryCounts[cat.category]++;
      });
    });

    Object.keys(categoryBreakdown).forEach(category => {
      categoryBreakdown[category] = categoryBreakdown[category] / categoryCounts[category];
    });

    const recentReviews = propertyReviews
      .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())
      .slice(0, 5);

    const trendDirection = calculateTrend(propertyReviews);

    performances.push({
      listingId,
      listingName: propertyReviews[0].listingName,
      totalReviews,
      averageRating,
      approvedReviews,
      categoryBreakdown,
      recentReviews,
      trendDirection
    });
  });

  return performances.sort((a, b) => b.averageRating - a.averageRating);
};

const calculateTrend = (reviews: Review[]): 'up' | 'down' | 'stable' => {
  if (reviews.length < 4) return 'stable';

  const sorted = reviews
    .filter(r => r.rating !== null)
    .sort((a, b) => new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime());

  if (sorted.length < 4) return 'stable';

  const firstHalf = sorted.slice(0, Math.floor(sorted.length / 2));
  const secondHalf = sorted.slice(Math.floor(sorted.length / 2));

  const firstAvg = firstHalf.reduce((sum, r) => sum + (r.rating || 0), 0) / firstHalf.length;
  const secondAvg = secondHalf.reduce((sum, r) => sum + (r.rating || 0), 0) / secondHalf.length;

  const diff = secondAvg - firstAvg;
  
  if (diff > 0.3) return 'up';
  if (diff < -0.3) return 'down';
  return 'stable';
};

export const formatCategoryName = (category: string): string => {
  return category
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const getRatingColor = (rating: number): string => {
  if (rating >= 9) return 'text-success';
  if (rating >= 7) return 'text-warning';
  return 'text-destructive';
};

export const getRatingBadgeVariant = (rating: number): 'default' | 'secondary' | 'destructive' => {
  if (rating >= 9) return 'default';
  if (rating >= 7) return 'secondary';
  return 'destructive';
};
