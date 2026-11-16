import { redirect } from 'next/navigation';
// Preserve old bookmarks without keeping the portfolio as a project.
export default function RemovedPortfolioProject() {
  redirect('/bakery');
}
