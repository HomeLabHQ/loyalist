import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css';
import { useImageUploadCreateMutation } from '@/redux/api';

type ImageUploaderProps = {
  setImage: (map: { [key: string]: any }) => void;
  placeholder?: string;
  field: string;
};
export default function ImageUploader(props: ImageUploaderProps) {
  const [create] = useImageUploadCreateMutation();
  const imageUploaderConfig: ImagePickerConf = {
    borderRadius: '20px',
    language: 'en',
    width: '330px',
    height: '250px',
    objectFit: 'contain',
  };
  function base64ToBlob(base64: string, contentType: string) {
    const sliceSize = 1024;
    const byteCharacters = atob(base64);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i += 1) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }

  return (
    <ReactImagePickerEditor
      config={imageUploaderConfig}
      imageSrcProp={props.placeholder}
      imageChanged={(newDataUri: any) => {
        if (newDataUri) {
          create({
            body: base64ToBlob(newDataUri.replace(/^data:image\/[a-z]+;base64,/, ''), 'image/jpeg'),
          })
            .unwrap()
            .then((res) => {
              props.setImage({ [props.field]: { name: res.name } });
            });
        }
      }}
    />
  );
}
