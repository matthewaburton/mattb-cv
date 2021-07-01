/* eslint-disable import/prefer-default-export */
import { h32 } from "xxhashjs"

const XXHASH_SEED = 0xdeadbeef

export function xxh32(data: string): string {
  return h32(data, XXHASH_SEED).toString(16)
}
