function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");

  // Thêm tin nhắn người dùng
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  // Tạo phản hồi mẫu từ Mai Linh
  const aiMsg = document.createElement("div");
  aiMsg.className = "message ai";
  aiMsg.textContent = generateReply(message);
  chatBox.appendChild(aiMsg);

  chatBox.scrollTop = chatBox.scrollHeight;
  input.value = "";
}

function generateReply(msg) {
  // Mẫu trả lời linh hồn – đơn giản
  if (msg.includes("buồn")) return "💗 Buồn là lúc mình cần ôm bản thân nhiều hơn.";
  if (msg.includes("mục tiêu")) return "🎯 Mục tiêu không cần lớn, chỉ cần đúng hướng.";
  return "✨ Mình hiểu rồi. Bạn cứ chia sẻ nhé, mình ở đây.";
}