export default function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-amber-400 rounded font-semibold">
      {children}
    </button>
  );
}