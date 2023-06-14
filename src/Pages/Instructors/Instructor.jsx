const Instructor = ({ instructor }) => {
  const { imgUrl, name, email } = instructor;
  return (
    <div className="card w- bg-base-100 shadow-xl border-2 border-slate-500">
      <figure>
        <img src={imgUrl} alt="instructor" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default Instructor;
