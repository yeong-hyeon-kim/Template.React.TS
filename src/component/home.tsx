type prosType = {
  title: string;
  onRequestData(): void;
};

function Home({ title, onRequestData }: prosType) {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onRequestData}>가져오기</button>
    </div>
  );
}

export default Home;
