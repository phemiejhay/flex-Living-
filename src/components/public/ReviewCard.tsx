import { Review } from '@/types/review';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { format } from 'date-fns';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold">{review.guestName}</h4>
              <p className="text-sm text-muted-foreground">
                {format(new Date(review.submittedAt), 'MMMM yyyy')}
              </p>
            </div>
            {review.rating && (
              <div className="flex items-center gap-1 bg-secondary px-3 py-1 rounded-full">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="font-semibold">{review.rating.toFixed(1)}</span>
              </div>
            )}
          </div>
          
          <p className="text-foreground leading-relaxed">{review.publicReview}</p>
          
          <div className="pt-2 border-t">
            <div className="grid grid-cols-2 gap-2 text-sm">
              {review.reviewCategory.slice(0, 4).map((cat) => (
                <div key={cat.category} className="flex justify-between">
                  <span className="text-muted-foreground capitalize">
                    {cat.category.replace('_', ' ')}
                  </span>
                  <span className="font-medium">{cat.rating}/10</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
