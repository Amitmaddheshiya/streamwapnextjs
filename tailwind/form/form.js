import {
  Formik,
  Form
} from "formik";
import {
  Button
} from "../";
import * as yup from "yup";
import {
  Input,
  UploadInput,
  Select,
  Email
} from "./fields";

const form = ({fields,grid=1,gap=4,...rest})=>{
  const schema = {
    email: yup.string().required("This field is required").email("Enter a valid email"),
    password: yup.string().required("This field is required"),
    fullname: yup.string().required("This field is required"),
    message: yup.string().required("This field is required"),
    mobile: yup.string().required("This field is required"),
    title: yup.string().required("This field is required"),
    desc: yup.string().required("This field is required"),
    duration: yup.string().required("This field is required"),
    starring: yup.string().required("This field is required"),
    thumbnail: yup.string().required("This field is required"),
    video: yup.string().required("This field is required"),
    category: yup.string().required("This field is required"),
    tags: yup.string().required("This field is required")
  };
  const defaultValues = {};
  const validation = {};

  fields.map(item=>{
    const {props} = item;
    let {name} = props;
    defaultValues[name] = '';
    validation[name] = schema[name]
  });

  const Fields = ({formik})=>{
    const allFields = fields.map((item,index)=>{
      const {component,props} = item;
      switch(component)
      {
        case "input"  : return <Input key={index} {...props} />
        case "email"  : return <Email key={index} {...props} />
        case "upload" : return <UploadInput formik={formik} key={index} {...props} />
        case "select" : return <Select key={index} {...props} />
        default : return null;
      }
    });
    return allFields;
  }

  const design = (
    <>
      <Formik
        initialValues={defaultValues}
        validationSchema={yup.object(validation)}
        {...rest}
      >
        {
          (formik)=>{
            return (
              <Form className={`grid gap-${gap}`}>
                <div className={`grid grid-cols-${grid} gap-${gap}`}>
                  <Fields formik={formik} />
                </div>

                <Button type="submit" theme="error" className="w-fit">SUBMIT</Button>
              </Form>
            );
          }
        }
      </Formik>
    </>
  );
  return design;
}

export default form;
