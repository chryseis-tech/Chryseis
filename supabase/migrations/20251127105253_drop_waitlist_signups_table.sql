/*
  # Drop waitlist_signups table

  This migration removes the newsletter subscription functionality by dropping the waitlist_signups table.

  ## Changes
  - Drops the `waitlist_signups` table and all its associated data
  - Removes all RLS policies associated with the table
  
  ## Important Notes
  - This action will permanently delete all newsletter subscription data
  - This migration is part of removing newsletter/waitlist functionality from the application
*/

-- Drop the waitlist_signups table (this will cascade and remove all policies)
DROP TABLE IF EXISTS waitlist_signups CASCADE;
