import AWS from "aws-sdk";

export const getUploadFileURL = async (file, uploadFileName) => {
  const region = "ap-northeast-2";
  const bucket = "osds-bucket";
  const endpoint = "image/";

  AWS.config.update({
    region: region,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  });

  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucket, // 버킷 이름
      Key: endpoint + uploadFileName + ".png", // 유저 아이디
      Body: file, // 파일 객체
    },
  });

  const promise = upload.promise();
  promise.then(
    function (e) {
      alert("파일이 업로드 되었습니다.");
      console.log(e);
      return "abc";
    },
    function (err) {
      alert("파일 업로드에 실패하였습니다.");
      console.log(err);
      return "fail";
    }
  );
}