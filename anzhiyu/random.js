var posts=["2024/01/01/2024——大航海时代/","2023/08/12/搜索引擎使用技巧/","2023/12/30/Biscuit的2023大事年表/","2023/08/11/hello-world/","2024/01/06/九上满意的作文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };