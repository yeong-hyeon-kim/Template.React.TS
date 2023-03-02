type prosType = {
  title: string;
};

function Home({ title }: prosType) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Home;
