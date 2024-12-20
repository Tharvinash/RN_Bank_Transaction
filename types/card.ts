export interface Card {
  id: string; // UUID
  card_number: string; // Card number as a string
  holder_name: string; // Cardholder's name
  expiry_date: string; // Expiry date in YYYY-MM-DD format
  created_at: string; // Timestamp when the card was created
}
