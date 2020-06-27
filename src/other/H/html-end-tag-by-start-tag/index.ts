export function htmlEndTagByStartTag(startTag: string): string {
  return `</${startTag.match(/\w+/)?.shift()}>`;
}
