import { useQuery } from '@tanstack/react-query';
import { getOdooModules } from '@/services/odoo';

export const useOdooModules = () =>
  useQuery({
    queryKey: ['odoo-modules'],
    queryFn: getOdooModules,
  });
