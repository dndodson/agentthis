import { redirect } from 'next/navigation';

export function GET() {
  redirect('/app/agents');
}
