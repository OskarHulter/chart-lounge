import type { TimeSeriesData } from '@/lib/data-generators/helpers';
import {
  dehydrate,
  QueryClient,
  useQuery,
  type DehydratedState,
} from '@tanstack/react-query';

export type AssetPageProps = {
  dehydratedState: DehydratedState;
};

export async function getTimeSeriesData(): Promise<TimeSeriesData> {
  return fetch('/api/generate-price-history').then((res) => res.json());
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['timeSeries'],
    queryFn: getTimeSeriesData,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Chart() {
  // This useQuery could just as well happen in some deeper child to
  // the "TimeSeries"-page, data will be available immediately either way
  const { data } = useQuery({
    queryKey: ['timeSeries'],
    queryFn: getTimeSeriesData,
  });

  // This query was not prefetched on the server and will not start
  // fetching until on the client, both patterns are fine to mix
  const { data: otherData } = useQuery({
    queryKey: ['timeSeries-2'],
    queryFn: getTimeSeriesData,
  });

  console.log('TimeSeries data', data);
  console.log('TimeSeries other data', otherData);

  return (
    <div>
      <h1>TimeSeries</h1>
      <ul>
        {data ? (
          data.map((asset) => (
            <li key={asset.timestamp}>
              open: {asset.open}
              low: {asset.low}
              high: ${asset.high}
              close: ${asset.close}
              volume: {asset.volume}
              time: {asset.timestamp}
            </li>
          ))
        ) : (
          <li>loading...</li>
        )}
      </ul>
      <h2>Other TimeSeries</h2>
      <ul>
        {otherData ? (
          otherData.map((asset) => (
            <li key={asset.timestamp}>
              open: {asset.open}
              low: {asset.low}
              high: ${asset.high}
              close: ${asset.close}
              volume: {asset.volume}
              time: {asset.timestamp}
            </li>
          ))
        ) : (
          <li>loading...</li>
        )}
      </ul>
    </div>
  );
}
