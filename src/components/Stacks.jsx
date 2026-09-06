export default function Stacks({ stacks }) {
  console.log(stacks);
  return (
    <div>
      {stacks.map((stack, idx) => (
        <div>
          <p>{stack.name}</p>
        </div>
      ))}
    </div>
  );
}
