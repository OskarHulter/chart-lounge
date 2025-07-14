// pages/assets.jsx
import {
  dehydrate,
  QueryClient,
  useQuery,
  type DehydratedState,
} from '@tanstack/react-query';

export type AssetPageProps = {
  dehydratedState: DehydratedState;
};

export async function getAssets() {
  return {
    data: {
      assets: [
        { id: 1, name: 'Asset 1', value: 100 },
        { id: 2, name: 'Asset 2', value: 200 },
      ],
    },
  };
} // fetch('/api/assets').then(res => res.json())

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({ queryKey: ['assets'], queryFn: getAssets });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Assets() {
  // This useQuery could just as well happen in some deeper child to
  // the "Assets"-page, data will be available immediately either way
  const { data } = useQuery({ queryKey: ['assets'], queryFn: getAssets });

  // This query was not prefetched on the server and will not start
  // fetching until on the client, both patterns are fine to mix
  const { data: otherData } = useQuery({
    queryKey: ['assets-2'],
    queryFn: getAssets,
  });

  return (
    <div>
      <h1>Assets</h1>
      <ul>
        {data?.data.assets.map((asset) => (
          <li key={asset.id}>
            {asset.name}: ${asset.value}
          </li>
        ))}
      </ul>
      <h2>Other Assets</h2>
      <ul>
        {otherData?.data.assets.map((asset) => (
          <li key={asset.id}>
            {asset.name}: ${asset.value}
          </li>
        ))}
      </ul>
    </div>
  );
  // ...
}
