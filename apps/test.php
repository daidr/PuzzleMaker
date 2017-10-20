<?php  
    //初始化  
    $curl = curl_init();  
    //设置抓取的url  
    curl_setopt($curl, CURLOPT_URL, 'https://api.weibo.com/2/account/get_uid.json?access_token=2.00n345vFHekr5E20a7291eed0JDp21');  
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // 跳过证书检查
    //设置头文件的信息作为数据流输出  
    curl_setopt($curl, CURLOPT_HEADER, 0);  
    //设置获取的信息以文件流的形式返回，而不是直接输出。  
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);  
    //执行命令  
    $data = curl_exec($curl);  
    //关闭URL请求  
    curl_close($curl);  
    //显示获得的数据  
    print_r($data);  
?>  