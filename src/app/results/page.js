import { Suspense } from 'react';
import SearchResultsClient from '@/components/sc/page';

export default function ResultsPage() {
  return (
    <div>
      <h1>Results</h1>
      <Suspense fallback={<div>Loading results...</div>}>
        <SearchResultsClient />
      </Suspense>
    </div>
  );
}
