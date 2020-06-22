export function findEmailDomain(address: string): string {
  return address.substring(address.lastIndexOf('@') + 1);
}

export function findEmailDomainV2(address: string): string {
  return address.split('@')?.pop() || '';
}
