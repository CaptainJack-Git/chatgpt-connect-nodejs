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
