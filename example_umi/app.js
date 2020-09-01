import {notification} from "antd";

export const dva = {
  config:{
    onError(err){
      console.log(err);// 全局异常捕获
      notification.error({message:err.code,description:err.message});
    }
  }
}
