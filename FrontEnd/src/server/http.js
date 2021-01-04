// axios实例封装
import axios from 'axios'
import { Toast } from 'vant'; 
// 添加请求拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前设置token
    const token = localStorage.getItem('token')
    token && (config.headers.Authorization = token)
    return config
}, error => {
    // 对请求错误进行预处理，将异常抛出
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {   
        // 对响应数据预处理         
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
}, error => {
    const { response } = error
    if(response){
    //服务器返回了结果
        switch(response.status){
            case 401: //权限不足,未登录则跳转登录页面，并携带当前页面的路径,在登录成功后返回当前页面
            router.replace({                        
                path: '/login',                        
                query: { redirect: router.currentRoute.fullPath } 
            });
              break
            case 403: //oken或session过期,登录过期对用户进行提示,清除本地token和清空vuex中token对象,跳转登录页面
            Toast({                        
                message: '登录过期，请重新登录',                        
                duration: 1000,                        
                forbidClick: true                    
            });                    
            // 清除token                    
            localStorage.removeItem('token');                    
            store.commit('loginSuccess', null);                    
            // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
            setTimeout(() => {                        
                router.replace({                            
                    path: '/login',                            
                    query: { 
                        redirect: router.currentRoute.fullPath 
                    }                        
                });                    
            }, 1000); 
              break
            case 404: //找不到地址
            Toast({
                message: '网络请求不存在',
                duration: 1500,
                forbidClick: true
            });
              break
        }
    }else {
    //服务器没有返回结果
        if(!window.navigator.onLine){
        //网络断开，页面跳转到断网页面
            return
        }
    }
    return Promise.reject(error);
});

//设置axios默认参数
/**
 * @param baseURL 公共请求地址
 * @param url 传绝对地址则baseURL不会追加到url之前
 * @param method 请求方式
 * @param timeout 请求超时时间
 * @param data 请求体
 * @param headers 请求头
 * @param responseType 数据类型
 * @param withCredentials 设置是否允许携带cookie，默认为false
 */

 export default function(url, {
     method = 'get',
     baseURL = '/api',
     timeout = 5000,
     data = {},
     headers = {
        'Content-Type': 'application/json;charset=UTF-8'
     },
     responseType = 'json',
 }){
     //设置请求参数
     const config = {
         method: method,
         timeout: timeout,
         url: url,
         baseURL: baseURL,
         withCredentials: true,
         data: data,
         headers: headers,
         responseType: responseType
     }
     //返回自定义参数的axios实例
     return axios(config)
 }

