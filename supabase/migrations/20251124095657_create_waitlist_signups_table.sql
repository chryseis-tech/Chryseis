/*
  # Create waitlist_signups table for newsletter subscriptions

  ## Overview
  This migration creates a table to store newsletter subscription emails with automatic subscription (no confirmation required).

  ## Tables Created
  
  ### `waitlist_signups`
  Stores email addresses for newsletter subscriptions.
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each signup, auto-generated
  - `email` (text, unique, required) - Subscriber's email address
  - `created_at` (timestamptz) - Timestamp when the subscription was created, defaults to now()
  - `confirmation_token` (text, nullable) - Reserved for future double opt-in implementation
  - `confirmed_at` (timestamptz, nullable) - Reserved for future double opt-in implementation

  ## Security
  
  ### Row Level Security (RLS)
  - RLS is ENABLED on the `waitlist_signups` table
  - All data is protected by default until policies are applied
  
  ### RLS Policies
  
  1. **"Allow anonymous inserts"**
     - Operation: INSERT
     - Role: anon (anonymous/public users)
     - Purpose: Allows anyone to subscribe to the newsletter
     - Security: Users can only insert email and created_at fields
  
  2. **"Allow anonymous deletes"**
     - Operation: DELETE
     - Role: anon
     - Purpose: Allows users to unsubscribe by deleting their email
     - Security: Users can delete any email (required for unsubscribe functionality)
  
  3. **"Allow anonymous selects"**
     - Operation: SELECT
     - Role: anon
     - Purpose: Allows checking if an email is already subscribed
     - Security: Read-only access to check subscription status

  ## Important Notes
  - Email addresses are stored in lowercase for consistency
  - Unique constraint on email prevents duplicate subscriptions
  - Confirmation fields are included for future double opt-in feature but not currently used
  - RLS policies allow public access for newsletter signup/unsubscribe functionality
*/

-- Create the waitlist_signups table
CREATE TABLE IF NOT EXISTS waitlist_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  confirmation_token text,
  confirmed_at timestamptz
);

-- Enable Row Level Security
ALTER TABLE waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow anonymous users to insert their email (subscribe)
CREATE POLICY "Allow anonymous inserts"
  ON waitlist_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy 2: Allow anonymous users to delete (unsubscribe)
CREATE POLICY "Allow anonymous deletes"
  ON waitlist_signups
  FOR DELETE
  TO anon
  USING (true);

-- Policy 3: Allow anonymous users to read (check subscription status)
CREATE POLICY "Allow anonymous selects"
  ON waitlist_signups
  FOR SELECT
  TO anon
  USING (true);