import { Stack } from '@chakra-ui/react';
import {
  RiGitMergeLine,
  RiContactsLine,
  RiDashboardLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import { routes } from '../../../routes';
import { NavLink } from '../NavLink';
import { NavSection } from '../NavSection';

export function SidebarNav() {
  return (
    <Stack spacing={12} align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href={routes.dashboard}>
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href={routes.users.list}>
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href={routes.forms}>
          Formulários
        </NavLink>
        <NavLink icon={RiGitMergeLine} href={routes.automation}>
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  );
}
