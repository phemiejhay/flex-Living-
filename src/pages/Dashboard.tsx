import { useState } from 'react';
import { mockReviews } from '@/data/mockReviews';
import { calculatePropertyPerformance } from '@/utils/reviewAnalytics';
import { PropertyCard } from '@/components/dashboard/PropertyCard';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LayoutDashboard, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [reviews] = useState(mockReviews);
  const [filterChannel, setFilterChannel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  const properties = calculatePropertyPerformance(reviews);
  
  const filteredReviews = filterChannel === 'all' 
    ? reviews 
    : reviews.filter(r => r.channel === filterChannel);

  const totalReviews = filteredReviews.length;
  const averageRating = filteredReviews
    .filter(r => r.rating !== null)
    .reduce((sum, r) => sum + (r.rating || 0), 0) / filteredReviews.filter(r => r.rating !== null).length;
  const approvedCount = filteredReviews.filter(r => r.isApproved).length;

  const sortedProperties = [...properties].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.averageRating - a.averageRating;
      case 'reviews':
        return b.totalReviews - a.totalReviews;
      case 'name':
        return a.listingName.localeCompare(b.listingName);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">Flex Living Reviews</h1>
                <p className="text-sm text-muted-foreground">Manager Dashboard</p>
              </div>
            </div>
            <Button onClick={() => navigate('/properties')} variant="outline" className="gap-2">
              <Eye className="h-4 w-4" />
              View Public Site
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <StatsCards
            totalReviews={totalReviews}
            averageRating={averageRating}
            approvedCount={approvedCount}
            trendPercentage={5.2}
          />

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <h2 className="text-2xl font-bold">Properties Overview</h2>
            <div className="flex gap-3">
              <Select value={filterChannel} onValueChange={setFilterChannel}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by channel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Channels</SelectItem>
                  <SelectItem value="Airbnb">Airbnb</SelectItem>
                  <SelectItem value="Booking.com">Booking.com</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rating</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedProperties.map((property) => (
              <PropertyCard key={property.listingId} property={property} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
