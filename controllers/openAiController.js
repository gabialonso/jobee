import { openai } from "../integrations/openAi.js";

export const chatHandler = async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Falta 'message'" });

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "Sos un asistente útil y claro." },
                { role: "user", content: message },
            ],
        });

        const reply = completion.choices[0].message.content;
        res.json({ reply });
    } catch {
        res.status(500).json({ error: "Error interno" });
    }
};
