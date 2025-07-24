import pool from '@/server/utils/db'

export default defineEventHandler(async (event) => {
  const client = await pool.connect()
  try {
    const result = await client.query('SELECT * FROM users')
    return result.rows
  } catch (error) {
    return { error: 'Database query failed' }
  } finally {
    client.release()
  }
})