import React from 'react';
import { useAssets } from '@/hooks/use-assets';

export const AssetList = () => {
  const [postCount, setPostCount] = React.useState(10);
  const { data, isPending, isFetching } = useAssets(postCount);

  if (isPending) return <div>Loading</div>;

  return (
    <section>
      <ul>
        {data?.map((post, index) => (
          <li key={post.id}>
            {index + 1}. {post.title}
          </li>
        ))}
      </ul>
      {postCount <= 90 && (
        <button
          onClick={() => setPostCount(postCount + 10)}
          disabled={isFetching}
        >
          {isFetching ? 'Loading...' : 'Show More'}
        </button>
      )}
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: '';
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </section>
  );
};
