// Upload
document.getElementById("btnEnviar").addEventListener("click", async () => {
  const files = document.getElementById("fileInput").files;
  const msg = document.getElementById("msg");
  const button = document.getElementById("btnEnviar");

  if (!files.length) {
    msg.textContent = "Selecciona al menos un archivo 💌";
    msg.style.color = "#2F5D8A";
    return;
  }

  msg.textContent = "Subiendo...";
  msg.style.color = "#555";
  button.disabled = true;
  button.style.opacity = "0.6";
  button.style.cursor = "not-allowed";

  const formData = new FormData();
  for (const file of files) formData.append("file", file, file.name);

  try {
    const response = await fetch("https://a79e3f3d4c2a4bc49d9d8d6f19dcc7.11.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/c5f83f3ca2f24822892e7094cdc6863f/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=l8z2VTiVoapA7QTMhJZTYoNdXNcd6twsK4ehhHhX4u4", { method: "POST", body: formData });
    if (response.ok) {
      msg.textContent = "Archivos enviados correctamente ✅";
      msg.style.color = "#28a745";
      document.getElementById("fileInput").value = "";
      setTimeout(() => { msg.textContent = ""; }, 4000);
    } else {
      msg.textContent = "Error al enviar ❌";
      msg.style.color = "#d9534f";
    }
  } catch (error) {
    msg.textContent = "Error de conexión: " + error.message;
    msg.style.color = "#d9534f";
  } finally {
    button.disabled = false;
    button.style.opacity = "1";
    button.style.cursor = "pointer";
  }
});