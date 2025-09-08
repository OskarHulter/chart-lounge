export type MockAsset = {
  id: number;
  title: string;
  body: string;
};

export const fetchAssets = async (limit = 100): Promise<Array<MockAsset>> => {
  const response = await fetch('/api/asset');
  const data = await response.json();
  return data.filter((x: MockAsset) => x.id <= limit);
};
