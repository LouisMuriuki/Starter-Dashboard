import React, { ReactNode, useContext, useState } from 'react';
import { Button, Popconfirm } from 'antd';
import DrawerContext from '../../context/DrawerContext';
interface Props{
title:string,
description:string,
children:ReactNode
}
const AsyncConfirm = ({title,description,children}:Props) => {
const{asyncconfirmopen, setAsyncConfirmOpen}=useContext(DrawerContext)
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setAsyncConfirmOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setAsyncConfirmOpen(false);
  };

  return (
    <Popconfirm
      title={title}
      description={description}
      open={asyncconfirmopen}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
     {children}
    </Popconfirm>
  );
};

export default AsyncConfirm;