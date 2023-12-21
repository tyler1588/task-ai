type taskProps = {
  title: string;
  content: string;
};

export default async function Task(props: taskProps) {
  return (
    <div className="card w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.content}</p>
        <div className="card-actions justify-end">
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
}
