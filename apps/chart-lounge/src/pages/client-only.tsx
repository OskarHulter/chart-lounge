import React from 'react';
import { InfoBox, Layout, AssetList } from '@/components';

const ClientOnly = () => {
  return (
    <Layout>
      <InfoBox>ℹ️ This data is loaded on client and not prefetched</InfoBox>
      <AssetList />
    </Layout>
  );
};

export default ClientOnly;
