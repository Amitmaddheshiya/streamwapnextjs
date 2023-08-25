import SweetAlert from 'react-bootstrap-sweetalert';
import {
  useSelector,
  useDispatch
} from "react-redux";

const index = ({title='',children})=>{
  const dispatch = useDispatch();
  const {DialogReducer} = useSelector(response=>response);

  const design = (
    <>
      <SweetAlert
        title={title}
        show={DialogReducer.open}
        showConfirm={false}
        className="relative"
        onConfirm={response=>null}
      >
        <button onClick={()=>dispatch({type:"CLOSE_DIALOG"})} className="text-xs absolute top-3 right-3">Close</button>
        {children}
      </SweetAlert>
    </>
  );
  return design;
}

export default index;
