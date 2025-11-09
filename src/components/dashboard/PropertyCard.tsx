import { PropertyPerformance } from '@/types/review';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface PropertyCardProps {
  property: PropertyPerformance;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const navigate = useNavigate();

  const getTrendIcon = () => {
    switch (property.trendDirection) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-success" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-destructive" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">{property.listingName}</CardTitle>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-warning text-warning" />
                <span className="font-semibold text-lg">{property.averageRating.toFixed(1)}</span>
              </div>
              {getTrendIcon()}
            </div>
          </div>
          <Badge variant={property.averageRating >= 9 ? 'default' : property.averageRating >= 7 ? 'secondary' : 'destructive'}>
            {property.totalReviews} reviews
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-muted-foreground">Approved</p>
              <p className="font-semibold">{property.approvedReviews}/{property.totalReviews}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Pending</p>
              <p className="font-semibold">{property.totalReviews - property.approvedReviews}</p>
            </div>
          </div>
          <Button 
            onClick={() => navigate(`/dashboard/property/${property.listingId}`)}
            className="w-full"
            variant="outline"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
