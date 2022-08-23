import Airtable from 'airtable'

const base = new Airtable({ apiKey: import.meta.env.AIRTABLE_API_KEY }).base(
  import.meta.env.AIRTABLE_BASE_ID
)

export { base }
