import { Review } from '@/types/review';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Star } from 'lucide-react';
import { formatCategoryName } from '@/utils/reviewAnalytics';
import { format } from 'date-fns';

interface ReviewsTableProps {
  reviews: Review[];
  onToggleApproval: (reviewId: number) => void;
}

export const ReviewsTable = ({ reviews, onToggleApproval }: ReviewsTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Guest</TableHead>
            <TableHead>Review</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Channel</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Categories</TableHead>
            <TableHead className="text-right">Display</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review) => (
            <TableRow key={review.id}>
              <TableCell className="font-medium">{review.guestName}</TableCell>
              <TableCell className="max-w-md">
                <p className="line-clamp-2 text-sm">{review.publicReview}</p>
              </TableCell>
              <TableCell>
                {review.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-semibold">{review.rating.toFixed(1)}</span>
                  </div>
                )}
              </TableCell>
              <TableCell>
                <Badge variant="outline">{review.channel}</Badge>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {format(new Date(review.submittedAt), 'MMM d, yyyy')}
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {review.reviewCategory.slice(0, 2).map((cat) => (
                    <Badge key={cat.category} variant="secondary" className="text-xs">
                      {formatCategoryName(cat.category)}: {cat.rating}
                    </Badge>
                  ))}
                  {review.reviewCategory.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{review.reviewCategory.length - 2}
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Switch
                  checked={review.isApproved}
                  onCheckedChange={() => onToggleApproval(review.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
