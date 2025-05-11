export default function ErrorMessage({ isError }) {
  return (
    <div message={isError}>
      <strong>
        Oops, there is an internet problem, try reloading the page.
      </strong>
    </div>
  );
}
