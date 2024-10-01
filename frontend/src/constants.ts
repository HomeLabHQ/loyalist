import { Icon, IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';


export const IconSize = 20;
export const DateFormat = 'YYYY-MM-DD';
export const DurationFormat = 'H [hours] m [minutes] s [seconds]';
export const defaultPageSize = 8;
export const defaultColor = '#008000';
type SocialLink = {
  label: string;
  url: string;
  icon: Icon;
};
export const SocialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    icon: IconBrandLinkedin,
    url: 'https://www.linkedin.com/in/oleksandr-korol/',
  },
  {
    icon: IconBrandGithub,
    label: 'Github',
    url: 'https://github.com/Dufran',
  },
  {
    icon: IconMail,
    label: 'Contact',
    url: 'korol.oleksandr.work@gmail.com',
  },
];

export enum AppRoute {
  Base = '/',
  Login = '/login',
  SignUpConfirm = '/signup/confirm',
  PasswordReset = '/password-reset',
  PasswordForget = '/password-forget',
  SocialLogin = '/social/:provider',
  Home = '/home',
  Profile = '/profile',
  Any = '*',
  AddCard = '/cards/new',
}
