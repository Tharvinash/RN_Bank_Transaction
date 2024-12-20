export interface Transaction {
  id: string; // UUID
  card_id: string; // Foreign key linking to a Card
  amount: number; // Transaction amount
  transaction_date: string; // Transaction date in ISO format (YYYY-MM-DD or full timestamp)
  description: string; // Description of the transaction
  reference_no: string; // Unique reference number
  recipient: string; // Recipient information
  sender: string; // Sender information
  transfer_method: string; // Method of transfer (e.g., 'Card', 'Online Transfer')
  payment_type: string; // Type of payment (e.g., 'Credit', 'Debit')
  status: string; // Status of the transaction (e.g., 'success', 'failed')
  created_at: string; // Timestamp when the transaction was created
}
