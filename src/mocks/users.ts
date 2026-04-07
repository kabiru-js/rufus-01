import { UserProfile } from '../types/auth';

export const mockCurrentUser: UserProfile = {
  id: 'usr-9281a',
  email: 'iamkabyrshuaib@gmail.com',
  name: 'Kabiru Shuaib',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  role: 'admin',
  department: 'Engineering',
  createdAt: '2026-01-01T08:00:00Z',
};

export const mockTeamMembers: UserProfile[] = [
  mockCurrentUser,
  {
    id: 'usr-4412b',
    email: 'sarah.connor@example.com',
    name: 'Sarah Connor',
    role: 'manager',
    department: 'Product',
    createdAt: '2026-01-15T09:30:00Z',
  },
  {
    id: 'usr-8731c',
    email: 'alex.rivera@example.com',
    name: 'Alex Rivera',
    role: 'viewer',
    department: 'Design',
    createdAt: '2026-02-01T11:00:00Z',
  },
];
