'use client';

import { api } from '@/shared/api/api';
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export default function Home() {
  const [data, setData] = useState('No result');

  return (
    <div>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
        constraints={{
          facingMode: 'environment',
        }}
      />
      <p>{data}</p>
    </div>
  );
}
