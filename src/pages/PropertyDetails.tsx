import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockReviews } from '@/data/mockReviews';
import { Review } from '@/types/review';
import { ReviewsTable } from '@/components/dashboard/ReviewsTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Star } from 'lucide-react';
import { calculatePropertyPerformance, formatCategoryName } from '@/utils/reviewAnalytics';
import { toast } from 'sonner';

const PropertyDetails = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState(mockReviews);

  const propertyReviews = reviews.filter(r => r.listingId === propertyId);
  const property = calculatePropertyPerformance(reviews).find(p => p.listingId === propertyId);

  const handleToggleApproval = (reviewId: number) => {
    setReviews(prev => prev.map(review => 
      review.id === reviewId 
        ? { ...review, isApproved: !review.isApproved }
        : review
    ));
    
    const review = reviews.find(r => r.id === reviewId);
    toast.success(
      review?.isApproved 
        ? 'Review hidden from public display' 
        : 'Review approved for public display'
    );
  };

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property not found</h2>
          <Button onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{property.listingName}</h1>
            <div className="flex items-center gap-2 mt-2">
              <Star className="h-5 w-5 fill-warning text-warning" />
              <span className="text-xl font-semibold">{property.averageRating.toFixed(1)}</span>
              <span className="text-muted-foreground">({property.totalReviews} reviews)</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{property.totalReviews}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Approved for Display</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-success">{property.approvedReviews}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pending Approval</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-warning">
                  {property.totalReviews - property.approvedReviews}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Category Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(property.categoryBreakdown).map(([category, rating]) => (
                  <div key={category} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <span className="font-medium">{formatCategoryName(category)}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-background rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${(rating / 10) * 100}%` }}
                        />
                      </div>
                      <span className="font-bold text-primary">{rating.toFixed(1)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold mb-4">All Reviews</h2>
            <ReviewsTable reviews={propertyReviews} onToggleApproval={handleToggleApproval} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyDetails;
