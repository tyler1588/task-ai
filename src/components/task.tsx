type taskProps = {
  title: string;
  content: string;
};

export default async function Task(props: taskProps) {
  return (
    <div className="shadow py-5">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
