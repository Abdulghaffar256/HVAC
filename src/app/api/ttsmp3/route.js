// ✅ Make sure this file is inside: app/api/ttsmp3/route.js
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text");

  if (!text) {
    return new Response("Missing text", { status: 400 });
  }

  const form = new URLSearchParams();
  form.append("msg", text);
  form.append("lang", "Joey"); // Use any supported voice
  form.append("source", "ttsmp3-nextjs");

  const ttsRes = await fetch("https://ttsmp3.com/makemp3_new.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  });

  const json = await ttsRes.json();

  if (!json.URL) {
    return new Response("TTSMP3 API failed", { status: 500 });
  }

  const audioRes = await fetch(json.URL);
  const buffer = await audioRes.arrayBuffer();

  return new Response(buffer, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Disposition": `attachment; filename="tts-voice.mp3"`,
    },
  });
}

