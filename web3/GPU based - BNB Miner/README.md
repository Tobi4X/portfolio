# BNB Miner Purchase Smart Contract

## Description
This project implements a smart contract on the Binance Smart Chain (BSC) where users can purchase miners. The number of miners owned by a user determines the amount of BNB they can earn.

## Features
- Users can purchase miners using BNB.
- The number of miners owned by a user influences the amount of BNB they can earn.
- Smart contract manages miner ownership and BNB earnings.

## Smart Contract Details
The smart contract includes the following features and parameters:

- **Base Parameters**: 
  - `EGGS_TO_HIRE_1MINERS`: The number of eggs required to hire one miner.
  - `REFERRAL`: Referral bonus percentage.
  - `PERCENTS_DIVIDER`: Divider for percentage calculations.
  - `TAX`: Tax percentage on transactions.
  - `MARKET_EGGS_DIVISOR`: Divisor for adjusting market eggs.
  - `MARKET_EGGS_DIVISOR_SELL`: Divisor for adjusting market eggs on sell.
  - `MIN_INVEST_LIMIT`: Minimum investment limit in BNB.
  - `WALLET_DEPOSIT_LIMIT`: Maximum deposit limit per wallet in BNB.
  - `COMPOUND_BONUS`: Daily compound bonus percentage.
  - `COMPOUND_BONUS_MAX_TIMES`: Maximum times daily compound bonus can be applied.
  - `COMPOUND_STEP`: Time interval for compound bonus application.
  - `WITHDRAWAL_TAX`: Tax percentage on withdrawals.
  - `COMPOUND_FOR_NO_TAX_WITHDRAWAL`: Number of mandatory compound days for tax exemption.
  
- **User Management**:
  - The contract includes functions for managing user deposits, miners, referrals, and earnings.

- **Transaction Handling**:
  - The contract handles buy, sell, and compound actions with appropriate fee calculations.
  - It manages referral bonuses and compound rewards.

- **Owner and Administration**:
  - The contract includes functions for ownership transfer and administration.

## Technologies Used
- Next
- React
- Solidity
- Binance Smart Chain (BSC)
