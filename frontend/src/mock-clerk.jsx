import React from 'react';

export const ClerkProvider = ({ children }) => <>{children}</>;
export const SignedIn = ({ children }) => <>{children}</>;
export const SignedOut = ({ children }) => null;
export const SignInButton = ({ children }) => <button>{children || 'Sign In'}</button>;
export const SignUpButton = ({ children }) => <button>{children || 'Sign Up'}</button>;
export const SignOutButton = ({ children }) => <button>{children || 'Sign Out'}</button>;
export const UserButton = () => <div>User</div>;
export const useAuth = () => ({ isSignedIn: true, userId: 'user_1', getToken: async () => 'dummy_token', isLoaded: true });
export const useUser = () => ({ user: { id: 'user_1', fullName: 'Demo User', imageUrl: '', primaryEmailAddress: { emailAddress: 'demo@demo.com' } }, isLoaded: true });
