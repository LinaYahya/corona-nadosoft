import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { Spinner, GeneralInfo } from '../components';

function GeneralInfoPage() {
  const { loading, globalStatistics }: any = useOutletContext();

  return (
    <>
      {loading ? <Spinner /> : (
        <div className="w-full">
          {globalStatistics && (
            <GeneralInfo globalStatistics={globalStatistics} />
          )}
        </div>
      )}
    </>
  )
}

export default GeneralInfoPage;

