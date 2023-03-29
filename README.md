# 🔌 使用 nodejs 连接 chatgpt 。

chatgpt 不仅提供了网页版，还提供了 api 的接口，可以实现很方便的服务对接和定制。

👻 无需梯子，直连即可访问 chatgpt api 服务。把项目 clone 到本地试试看 👨🏻‍💻

## 安装

本示例使用 fetch api ，所以要求 nodejs 环境 **>= 18**。也可以在低版本用 fetch polyfill

1. 初始化项目

   ```bash
   npm init -y
   ```

2. 安装 npm 依赖包 [chatgpt](https://www.npmjs.com/package/chatgpt)

   ```bash
   npm install chatgpt
   ```

3. ⚠️ 这里要使用 **ChatGPTUnofficialProxyAPI** 的方式调用。先获取 chatgpt 的 accessToken: 可以在登录 chatgpt 后，通过访问 https://chat.openai.com/api/auth/session 地址即可获取到 **accessToken**，注意这个 accessToken 是有有效期的，地址里面会有 **expire** 字段标识出失效日期。
   🤠 accessToken 的获取，是需要梯子和和 ChatGPT 的账号才能正常生成出来。

   ```bash
   const accessToken = "这里替换成你的 chatgpt accessToken，生成方式👆";

   async function start() {
     // ⚠️ 此处注意，不要使用 chatgpt npm 包的 new ChatGPTAPI({ apiKey }) 的方式来连接，会报超时错误
     const { ChatGPTUnofficialProxyAPI } = await import("chatgpt");
     const api = new ChatGPTUnofficialProxyAPI({
       accessToken,
     });

     try {
       // sendMessage 中填你想问的问题
       const res = await api.sendMessage("Hello World!");
       console.log("chatgpt api 返回值:", res);
     } catch (err) {
       console.log("出错了", err);
     }
   }

   start();
   ```

4. 开始执行

   ```bash
   npm start
   ```

5. 返回值如下，可以从 text 里面看到 chatgpt 的会话返回结果 ✅

   ```json
   {
     "role": "assistant",
     "id": "d5f8ba48-a5ed-4024-a78b-55cb0f9118e7",
     "parentMessageId": "52364024-91b4-4868-9bd3-5ad8ab0776a6",
     "conversationId": "4537da8b-0b61-4bf3-81a2-77f6c764b831",
     "text": "Hello there! How can I assist you today?"
   }
   ```

## 🚀 总结注意

1. 通过 api 的方式，使用 nodejs 直连 chatgpt 无需翻墙
2. 要先有一个 **chatgpt 账号** 和 **梯子**才能拿到 accessToken
3. 不要使用 chatgpt npm 包的 **new ChatGPTAPI({ apiKey })** 的方式来连接服务，基本上会出现 `ConnectTimeoutError: Connect Timeout Error` 的问题，我当时在这里卡了很久，一直以为是节点批量被封导致的(可能真的也是这个原因 🤪)
