import { z } from 'zod'

export const leadFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(1).max(100).optional(),
  phone: z.string().max(20).optional(),
  eventType: z.string().max(100).optional(),
  eventDate: z.string().optional(),
  message: z.string().max(1000).optional(),
  utmSource: z.string().max(200).optional(),
  utmMedium: z.string().max(200).optional(),
  utmCampaign: z.string().max(200).optional(),
})

export type LeadFormData = z.infer<typeof leadFormSchema>
