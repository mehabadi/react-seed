import React from 'react';
import Dropzone from 'react-dropzone';

export const  DropzoneImageUploaderInput = (field) => {
    return (
      <React.Fragment>
        <Dropzone
            name={field.name}
            //onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
            onDropAccepted={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
            onDropRejected={() => field.onReject()}
            maxSize={2097152}
            multiple={true}
            className={field.className}
            accept="image/jpeg, image/png"
            style={{
                position: 'relative',
                width: '100%',
                height: 150,
                borderWidth: 2,
                borderColor: 'rgb(102, 102, 102)',
                borderStyle: 'dashed',
                borderRadius: 5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            acceptStyle={{
              borderColor: '#4caf50',
            }}
            rejectStyle={{
              borderColor: '#f44336',
            }}
        >
        
        {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
          if (isDragActive) {
            return <div className="textCenter">فایل را در اینجا رها کنید</div>
          }
          if (isDragReject) {
            return <div className="textCenter">این فایل پشتیبانی نمی شود لطفا یک فایل دیگر انتخاب کنید</div>
          }
          return <div className="textCenter">جهت پیوست فایل جدید، فایل را در اینجا رها کنید یا بر روی این باکس کلیک کنید.</div>
          // return acceptedFiles.length || rejectedFiles.length
          //   ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
          //   : "Try dropping some files.";
        }}
        
        </Dropzone>
      </React.Fragment>
    );
}
