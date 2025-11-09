import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MessageSquare, CheckCircle, TrendingUp } from 'lucide-react';

interface StatsCardsProps {
  totalReviews: number;
  averageRating: number;
  approvedCount: number;
  trendPercentage: number;
}

export const StatsCards = ({ totalReviews, averageRating, approvedCount, trendPercentage }: StatsCardsProps) => {
  const stats = [
    {
      title: 'Total Reviews',
      value: totalReviews,
      icon: MessageSquare,
      color: 'text-primary'
    },
    {
      title: 'Average Rating',
      value: averageRating.toFixed(1),
      icon: Star,
      color: 'text-warning'
    },
    {
      title: 'Approved',
      value: approvedCount,
      icon: CheckCircle,
      color: 'text-success'
    },
    {
      title: 'Trend',
      value: `${trendPercentage > 0 ? '+' : ''}${trendPercentage.toFixed(1)}%`,
      icon: TrendingUp,
      color: trendPercentage >= 0 ? 'text-success' : 'text-destructive'
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
