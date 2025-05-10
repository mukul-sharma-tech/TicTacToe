export interface User {
  id: string;
  fullName: string;
  email: string;
  githubUsername: string;
  avatarUrl?: string;
}

export interface Ticket {
  id: string;
  user: User;
  generatedAt: Date;
  eventName: string;
  eventDate: string;
  eventLocation: string;
}

export interface Change {
  id: string;
  userId: string;
  fieldName: string;
  oldValue: string;
  newValue: string;
  timestamp: Date;
}

export interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  required?: boolean;
  error?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface UploadFieldProps {
  id: string;
  onChange: (file: File | null) => void;
  value: File | null;
  preview?: string;
  error?: string;
  label?: string;
  accept?: string;
}

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
}

export interface TypographyProps {
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button';
  color?: string;
  className?: string;
}

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
  fallback?: string;
}

export interface TicketProps {
  ticket: Ticket;
  className?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}