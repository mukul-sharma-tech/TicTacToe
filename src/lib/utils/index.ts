import { User, Ticket, Change } from '../types';

// Generate a random ID
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

// Format a date
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

// Create a new user
export const createUser = (
  fullName: string,
  email: string,
  githubUsername: string,
  avatarUrl?: string
): User => {
  return {
    id: generateId(),
    fullName,
    email,
    githubUsername,
    avatarUrl,
  };
};

// Generate a ticket for a user
export const generateTicket = (user: User): Ticket => {
  return {
    id: generateId(),
    user,
    generatedAt: new Date(),
    eventName: 'Coding Conf',
    eventDate: 'Jan 1, 2025',
    eventLocation: 'Austin, TX',
  };
};

// Record a change for collaboration tracking
export const recordChange = (
  userId: string,
  fieldName: string,
  oldValue: string,
  newValue: string
): Change => {
  return {
    id: generateId(),
    userId,
    fieldName,
    oldValue,
    newValue,
    timestamp: new Date()
  };
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Validate GitHub username format
export const isValidGithubUsername = (username: string): boolean => {
  const re = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
  return re.test(username);
};