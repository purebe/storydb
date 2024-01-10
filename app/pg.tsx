import { Pool } from 'pg';

let pool;

export function PgConnect() {
  if (pool) return pool.connect();

  pool = new Pool({
          host: process.env.PG_HOST as string,
          user: process.env.PG_USER as string,
          port: process.env.PG_PORT as number,
          password: process.env.PG_PASSWORD as string,
          max: 20,
          idleTimeoutMillis: 30000,
          connectionTimeoutMilllis: 2000
  });
  return pool.connect();
}
