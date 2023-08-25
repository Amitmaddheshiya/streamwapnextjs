import AdminPanel from "../../../components/admin-panel";
import Movies from "../../../components/admin-panel/movies";

const index = ()=>{
  const design = (
    <>
      <AdminPanel>
        <Movies />
      </AdminPanel>
    </>
  );
  return design;
}

export default index;
