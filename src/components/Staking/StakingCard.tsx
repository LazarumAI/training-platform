import React, { useState } from 'react';
import { Coins, ArrowRight, Lock, Unlock } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { formatNumber } from '../../utils/helpers';

interface StakingCardProps {
  availableTokens: number;
  stakedTokens: number;
  rewardRate: number;
  minStake: number;
}

const StakingCard: React.FC<StakingCardProps> = ({
  availableTokens,
  stakedTokens,
  rewardRate,
  minStake
}) => {
  const [stakeAmount, setStakeAmount] = useState('');
  const [isStaking, setIsStaking] = useState(false);

  const handleStake = () => {
    setIsStaking(true);
    // Implement staking logic here
    setTimeout(() => setIsStaking(false), 1500);
  };

  const handleUnstake = () => {
    setIsStaking(true);
    // Implement unstaking logic here
    setTimeout(() => setIsStaking(false), 1500);
  };

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400">Reward Rate:</span>
          <span className="text-primary font-semibold">{rewardRate}% APR</span>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Coins className="w-5 h-5 text-primary" />
        Stake to Train
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-black/40 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Available LZAI</p>
          <p className="text-2xl font-bold">{formatNumber(availableTokens)}</p>
        </div>
        <div className="bg-black/40 rounded-lg p-4">
          <p className="text-sm text-gray-400 mb-1">Total Staked</p>
          <p className="text-2xl font-bold">{formatNumber(stakedTokens)}</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm text-gray-400 mb-2">Stake Amount</label>
        <div className="relative">
          <input
            type="number"
            value={stakeAmount}
            onChange={(e) => setStakeAmount(e.target.value)}
            className="input-field pr-16"
            placeholder={`Min. ${minStake} LZAI`}
          />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-primary text-sm"
            onClick={() => setStakeAmount(availableTokens.toString())}
          >
            MAX
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          className="flex-1"
          onClick={handleStake}
          isLoading={isStaking}
          disabled={!stakeAmount || Number(stakeAmount) < minStake}
        >
          <Lock className="w-4 h-4 mr-2" />
          Stake
        </Button>
        <Button
          variant="secondary"
          className="flex-1"
          onClick={handleUnstake}
          isLoading={isStaking}
          disabled={stakedTokens === 0}
        >
          <Unlock className="w-4 h-4 mr-2" />
          Unstake
        </Button>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-800">
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="text-gray-400">Training Power</span>
          <span className="font-medium">
            {formatNumber(stakedTokens * 100)} TFLOPS
          </span>
        </div>
        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-dark to-primary-light"
            style={{ width: `${(stakedTokens / (availableTokens + stakedTokens)) * 100}%` }}
          />
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Stake LZAI tokens to increase your model training capacity. Higher stakes provide more computational resources.
        </p>
      </div>
    </Card>
  );
};

export default StakingCard;