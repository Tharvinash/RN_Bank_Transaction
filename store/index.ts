import { Transaction } from '@/types/transaction';
import { create } from 'zustand';

interface TransactionStore {
  selectedTransaction: Transaction | null;
  setSelectedTransaction: (transaction: Transaction) => void;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  selectedTransaction: null,
  setSelectedTransaction: (transaction: Transaction) =>
    set(() => ({ selectedTransaction: transaction })),
}));
