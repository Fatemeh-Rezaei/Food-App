import MenuPage from "../../components/templates/MenuPage";

function Menu({ data }) {
  return <MenuPage data={data} />;
}

export default Menu;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/data");
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
