import {
  Dialog,
  Form
} from "../../../tailwind";
import useS3 from "../../../hooks/useS3";

const index = ()=>{
  const options = [
      {
        label: "Drama",
        value: "drama"
      },
      {
        label: "Action",
        value: "action"
      },
      {
        label: "Comedy",
        value: "comedy"
      }
  ];
  const fields = [
    {
      component: "input",
      props: {
        name: "title",
        placeholder: "Movie name",
        className: "bg-gray-100 rounded-sm border-0 py-3",
        width: 'full'
      }
    },
    {
      component: "input",
      props: {
        name: "desc",
        placeholder: "Movie description",
        textarea: true,
        className: "bg-gray-100 rounded-sm border-0 py-3",
        width: 'full'
      }
    },
    {
      component: "input",
      props: {
        name: "duration",
        placeholder: "Movie duration",
        className: "bg-gray-100 rounded-sm border-0 py-3"
      }
    },
    {
      component: "input",
      props: {
        name: "starring",
        placeholder: "Actors name",
        className: "bg-gray-100 rounded-sm border-0 py-3"
      }
    },
    {
      component: "upload",
      props: {
        name: "thumbnail",
        className: "bg-gray-100 rounded-sm border-0 py-3",
        label: "Thumbnail",
        accept: "image/*"
      }
    },
    {
      component: "upload",
      props: {
        name: "video",
        className: "bg-gray-100 rounded-sm border-0 py-3",
        label: "Video file",
        accept: ".mp4"
      }
    },
    {
      component: "select",
      props: {
        name: "category",
        className: "bg-gray-100 rounded-sm border-0 py-3",
        data: options,
        width: 'full'
      }
    },
    {
      component: "input",
      props: {
        name: "tags",
        placeholder: "Keywords",
        textarea: true,
        className: "bg-gray-100 rounded-sm border-0 py-3",
        width: 'full'
      }
    },
  ];

  const onSubmit = async (values)=>{
    const fileProps = [
      {
        name: "thumbnail",
        key: "demo/thumb.png"
      },
      {
        name: "video",
        key: "demo/vid.mp4"
      }
    ]
    for(let data of fileProps)
    {
      const upload = useS3(values[data.name],data.key);

      const uploading = await upload();

      uploading.on('httpUploadProgress',(e)=>{
        let loaded = e.loaded;
        let total = e.total;
        let p = Math.floor((loaded*100)/total);
        console.log(p+"%");
      });

      try {
        const file = await uploading.promise();
        console.log(file);
      }
      catch(err)
      {
        console.log(err);
      }
    }
  }

  const MovieForm = ()=>{
    const design = (
      <>
        <h1 className="text-left text-2xl font-bold mb-4">New Movie</h1>
        <Form fields={fields} grid={2} onSubmit={onSubmit} />
      </>
    );
    return design;
  }

  const design = (
    <>
      <Dialog>
        <MovieForm />
      </Dialog>
    </>
  );
  return design;
}

export default index;
