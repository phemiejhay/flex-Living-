import { useState } from 'react';
import { mockReviews } from '@/data/mockReviews';
import { calculatePropertyPerformance } from '@/utils/reviewAnalytics';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MapPin, Wifi, Coffee, Tv } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReviewCard } from '@/components/public/ReviewCard';

const PublicProperties = () => {
  const navigate = useNavigate();
  const { propertyId } = useParams();
  const [reviews] = useState(mockReviews);
  
  const properties = calculatePropertyPerformance(reviews);
  const selectedProperty = propertyId 
    ? properties.find(p => p.listingId === propertyId)
    : properties[0];

  if (!selectedProperty) {
    return <div>Property not found</div>;
  }

  const approvedReviews = reviews.filter(
    r => r.listingId === selectedProperty.listingId && r.isApproved
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Flex Living</h1>
            <Button 
              variant="secondary" 
              onClick={() => navigate('/dashboard')}
            >
              Manager Login
            </Button>
          </div>
        </div>
      </header>

      <nav className="bg-card border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-6 py-4 overflow-x-auto">
            {properties.map((property) => (
              <button
                key={property.listingId}
                onClick={() => navigate(`/properties/${property.listingId}`)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${
                  property.listingId === selectedProperty.listingId
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                {property.listingName}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-6 w-6 fill-warning text-warning" />
                  <span className="text-2xl font-bold">{selectedProperty.averageRating.toFixed(1)}</span>
                  <span className="text-muted-foreground">
                    ({selectedProperty.approvedReviews} reviews)
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-4">{selectedProperty.listingName}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>London, United Kingdom</span>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>About this property</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Experience luxury living in the heart of London. Our carefully curated apartments 
                    offer modern amenities, stylish interiors, and exceptional service to make your 
                    stay unforgettable.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Wifi className="h-5 w-5 text-primary" />
                      <span>High-speed WiFi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="h-5 w-5 text-primary" />
                      <span>Full Kitchen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tv className="h-5 w-5 text-primary" />
                      <span>Smart TV</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      <span>Premium Amenities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <span className="text-muted-foreground">Property Image Placeholder</span>
            </div>
          </section>

          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Guest Reviews</h2>
              <p className="text-muted-foreground">
                Read what our guests have to say about their experience
              </p>
            </div>

            {approvedReviews.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {approvedReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No reviews to display yet.</p>
                </CardContent>
              </Card>
            )}
          </section>
        </div>
      </main>

      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Flex Living. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicProperties;
