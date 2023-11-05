import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from 'lucide-react'

export const menus = [
  { id: 1, link: '/', title: 'Home', protected: false },
  // { id: 2, link: '/auth/login', title: 'Login', protected: false },
  // { id: 3, link: '/auth/register', title: 'Register', protected: false },
  { id: 4, link: '/dashboard', title: 'Dashboard', protected: true },
  { id: 5, link: '/serveraction', title: 'Server Action', protected: true },
]

export const sidebarMenu = [
  {
    id: 1,
    href: '/dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    color: 'text-sky-500',
  },
  {
    id: 2,
    href: '/conversation',
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
  },
  {
    id: 3,
    href: '/image',
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-700',
  },
  {
    id: 4,
    href: '/video',
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-orange-700',
  },
  {
    id: 5,
    href: '/music',
    label: 'Music Generation',
    icon: Music,
    color: 'text-emerald-700',
  },
  {
    id: 6,
    href: '/code',
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-700',
  },
  {
    id: 7,
    href: '/settings',
    label: 'Settings',
    icon: Settings,
    color: '',
  },
]
