import { redirect } from 'next/navigation';
// Older links return to the counter; projects are explored through the pastries.
export default function ProjectsPage() {
  redirect('/bakery#counter');
}
