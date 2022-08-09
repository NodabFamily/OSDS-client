import { useState } from "react";
import AWS from "aws-sdk";

function Profile() {
  const [ownerData, setOwnerData] = useState("너영나영노영누영2");
  const region = "ap-northeast-2";
  const bucket = "osds-bucket";
  const endpoint = "image/";

  AWS.config.update({
    region: region,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  });

  const handleFileInput = async (e) => {
    const file = e.target.files[0];

    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: bucket, // 버킷 이름
        Key: endpoint + ownerData + ".png", // 유저 아이디
        Body: file, // 파일 객체
      },
    });
    console.log(process.env.REACT_APP_AWS_ACCESS_KEY_ID);
    console.log(process.env.REACT_APP_AWS_SECRET_ACCESS_KEY);

    const promise = upload.promise();
    promise.then(
      function () {
        alert("성공");
      },
      function (err) {
        alert("실패");
        console.log(err);
      }
    );
  };

  return (
    <>
      <input type="file" onChange={handleFileInput} />
      <img src="https://osds-bucket.s3.ap-northeast-2.amazonaws.com/image/undefined.png" />
    </>
  );
}

export default Profile;
