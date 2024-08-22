export default function Hello({ name = "default", message }) {
  return (
    <h1>
      {message} {name}
    </h1>
  );
}
