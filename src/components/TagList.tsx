export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="tag-list" aria-label="Technologies and topics">
      {tags.map((tag) => (
        <li key={tag}>
          <span className="tag">{tag}</span>
        </li>
      ))}
    </ul>
  );
}
