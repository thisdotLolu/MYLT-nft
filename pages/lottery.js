import React from 'react'
import { CommonLayout } from '../components/common-layout';
import LotteryComponent from '../components/lotteryComponent/lotteryComponent';

const Lottery = () => {
  return (
    <div>
        <CommonLayout>
            <LotteryComponent/>
        </CommonLayout>
    </div>
  )
}

export default Lottery;