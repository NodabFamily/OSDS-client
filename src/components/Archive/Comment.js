import React from "react";
import styled from "styled-components";

import { dateToString, STRFTimeToDate } from "../../common/Function/Time";

const UserImg = styled.img`
    width: 30px;
    height: 30px;
    border: 1px solid #E6E6E6;
    border-radius: 100%;
`;

const CommentDom = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CommentContentDom = styled.div` 
    background-color: #ECEDF1;
    border-radius: 5px;

    padding-left: 8px;
    padding-right: 8px;
    margin-left: 10px;
    margin-right: 10px;
`;

const CommentDate = styled.div`
    font-family: "Spoqa Han Sans Regular";
    font-size: 8px;
    color: #000000;
    white-space: nowrap;

    margin-top: auto;
    margin-right: 10px;
`;

const AComment = styled.div`
    font-family: "Spoqa Han Sans Bold";
    font-size: 10px;
    white-space: pre-wrap;
    
    margin: 6px 0 6px 0;

`;

const Comment = (props) => {
  const commentData = props.comment;

  return (
    <>
      <CommentDom>
        <UserImg />
        <CommentContentDom>
          <AComment
            style={{
                fontFamily:"Spoqa Han Sans Regular"
            }}
            >{commentData.user_id}</AComment>
          <AComment>{commentData.comment}</AComment>
        </CommentContentDom>
        <CommentDate>
          {dateToString(STRFTimeToDate(commentData.updated_at))}
        </CommentDate>
      </CommentDom>
    </>
  );
};

export default Comment;
