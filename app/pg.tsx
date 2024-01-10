import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.PG_HOST as string,
  user: process.env.PG_USER as string,
  port: process.env.PG_PORT as number,
  password: process.env.PG_PASSWORD as string,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMilllis: 2000
});

export function PgConnect() {
  return pool.connect();
}

export function GetSharedPool() {
  return pool;
}
