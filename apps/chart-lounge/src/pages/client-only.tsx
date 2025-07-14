import React from 'react';
import { Header, InfoBox, Layout, AssetList } from '../components';

const ClientOnly = () => {
  return (
    <Layout>
      <Header />
      <InfoBox>ℹ️ This data is loaded on client and not prefetched</InfoBox>
      <AssetList />
    </Layout>
  );
};

export default ClientOnly;
