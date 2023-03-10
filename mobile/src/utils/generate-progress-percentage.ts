export function generateProgressPercentage(
  completed: number,
  total: number
): number {
  return Math.round((completed / total) * 100)
}
