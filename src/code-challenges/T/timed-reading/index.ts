export function timedReading(maxLength: number, text: string): number {
  return (text.match(new RegExp(`\\b([\\w0-9]{1,${maxLength}})\\b`, 'gi')) || []).length;
}

export function timedReadingV2(maxLength: number, text: string): number {
  return (text.match(/\w+/g) || []).filter((word) => word.length <= maxLength).length;
}
