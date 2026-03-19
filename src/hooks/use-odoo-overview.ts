import { useQuery } from '@tanstack/react-query';
import { getOdooOverview } from '@/services/odoo';

export const useOdooOverview = () =>
  useQuery({
    queryKey: ['odoo-overview'],
    queryFn: getOdooOverview,
    staleTime: 15 * 60 * 1000,
  });
