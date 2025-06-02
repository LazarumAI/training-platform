import React from 'react';
import StakingCard from '../components/Staking/StakingCard';

const Staking: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Staking</h1>
        <p className="text-gray-400">Stake LZAI tokens to power your AI model training</p>
      </div>

      <div className="max-w-2xl">
        <StakingCard
          availableTokens={0}
          stakedTokens={0}
          rewardRate={0}
          minStake={100}
        />
      </div>
    </div>
  );
};

export default Staking;