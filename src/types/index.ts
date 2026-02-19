export interface Lead {
  id: string
  email: string
  name: string | null
  phone: string | null
  event_type: string | null
  event_date: string | null
  message: string | null
  source: string
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  ip_address: string | null
  user_agent: string | null
  created_at: string
  updated_at: string
}

export interface ApiResponse {
  success?: boolean
  error?: string
  details?: Record<string, unknown>
}
