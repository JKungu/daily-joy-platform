import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, RefreshCw } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface EmailVerificationProps {
  email: string;
  onResendEmail: () => Promise<void>;
  onBack: () => void;
  isResending: boolean;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({ 
  email, 
  onResendEmail, 
  onBack,
  isResending 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 p-4 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md shadow-xl animate-fade-in dark:bg-gray-800 dark:border-gray-700">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Check Your Email
          </CardTitle>
          <p className="text-muted-foreground dark:text-gray-400 mt-2">
            We've sent a verification link to
          </p>
          <p className="font-medium text-foreground dark:text-white">
            {email}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Click the link in your email to verify your account. If you don't see it, check your spam folder.
            </p>
            
            <div className="space-y-3">
              <Button
                onClick={onResendEmail}
                disabled={isResending}
                variant="outline"
                className="w-full dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
              >
                {isResending ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Resend Email
                  </>
                )}
              </Button>
              
              <Button
                onClick={onBack}
                variant="ghost"
                className="w-full dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Back to Sign Up
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailVerification;